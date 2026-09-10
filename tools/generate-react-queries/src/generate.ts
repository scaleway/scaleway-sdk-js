/* eslint-disable no-console */
/**
 * Core generation logic — metadata to hook files.
 */

import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { QueriesMetadata, QueryMethod, ReactQueriesConfig, ServiceMetadata } from './config.ts'
import { capitalize } from './config.ts'
import { discoverSdkPackages, discoverVersions, loadMetadata } from './discover.ts'
import {
  generateAllQueryHook,
  generateIndexFile,
  generateInfiniteQueryHook,
  generateQueryHook,
  generateReloadHook,
} from './hook-generators.ts'
import { buildNamespaceResolver } from './namespace-resolver.ts'
import type { ResolvedNamespace } from './namespace-resolver.ts'

type GenerationContext = {
  config: ReactQueriesConfig
  metadataFileName: string
  skipMethods: Set<string>
  skipServices: Set<string>
  skipVersions: Set<string>
  skipPackages: Set<string>
  namespaceResolver: Map<string, ResolvedNamespace>
}

function prepareGeneratedDir(ctx: GenerationContext, folderName: string): string {
  const generatedDir = join(ctx.config.outputDir, folderName.toLowerCase(), ctx.config.generatedPath)
  if (existsSync(generatedDir)) {
    rmSync(generatedDir, { recursive: true, force: true })
  }
  mkdirSync(generatedDir, { recursive: true })
  return generatedDir
}

function writeListMethodHooks(
  method: QueryMethod,
  service: ServiceMetadata,
  metadata: QueriesMetadata,
  ctx: GenerationContext,
  packageName: string,
  generatedDir: string,
  folderName: string,
): void {
  if (!(ctx.config.filters.skipCursorAllHooks && method.paginationType === 'cursor')) {
    const allContent = generateAllQueryHook(method, service, metadata, ctx.config, packageName, ctx.namespaceResolver)
    const allFileName = `${ctx.config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${capitalize(method.methodName)}AllQuery.ts`
    writeFileSync(join(generatedDir, allFileName), allContent)
  }

  const infiniteContent = generateInfiniteQueryHook(
    method,
    service,
    metadata,
    ctx.config,
    packageName,
    ctx.namespaceResolver,
  )
  const infiniteFileName = `${ctx.config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${capitalize(method.methodName)}InfiniteQuery.ts`
  writeFileSync(join(generatedDir, infiniteFileName), infiniteContent)
}

function writeWaiterHook(
  method: QueryMethod,
  service: ServiceMetadata,
  metadata: QueriesMetadata,
  ctx: GenerationContext,
  packageName: string,
  generatedDir: string,
  folderName: string,
): void {
  const waiterMethod = {
    ...method,
    methodName: `waitFor${capitalize(method.methodName.replace('get', ''))}`,
  }
  const waiterContent = generateQueryHook(
    waiterMethod,
    service,
    metadata,
    ctx.config,
    packageName,
    ctx.namespaceResolver,
  )
  const waiterFileName = `${ctx.config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${ctx.config.naming.waiterPrefix}${capitalize(method.methodName.replace('get', ''))}Query.ts`
  writeFileSync(join(generatedDir, waiterFileName), waiterContent)
}

function writeMethodHooks(
  method: QueryMethod,
  service: ServiceMetadata,
  metadata: QueriesMetadata,
  ctx: GenerationContext,
  packageName: string,
  generatedDir: string,
  folderName: string,
): void {
  const hookContent = generateQueryHook(method, service, metadata, ctx.config, packageName, ctx.namespaceResolver)
  const hookFileName = `${ctx.config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${capitalize(method.methodName)}Query.ts`
  writeFileSync(join(generatedDir, hookFileName), hookContent)

  if (method.isList) {
    writeListMethodHooks(method, service, metadata, ctx, packageName, generatedDir, folderName)
  }

  if (method.hasWaiter && !ctx.config.filters.skipWaiters) {
    writeWaiterHook(method, service, metadata, ctx, packageName, generatedDir, folderName)
  }
}

function writeServiceHooks(
  service: ServiceMetadata,
  metadata: QueriesMetadata,
  ctx: GenerationContext,
  packageName: string,
  generatedDir: string,
  folderName: string,
): void {
  console.log(`📝 Generating hooks for ${service.apiClass}`)
  for (const method of service.methods) {
    if (!ctx.skipMethods.has(method.methodName) && !(ctx.config.filters.skipPrivateMethods && method.isPrivate)) {
      writeMethodHooks(method, service, metadata, ctx, packageName, generatedDir, folderName)
    }
  }
  const reloadContent = generateReloadHook(service, metadata, ctx.config)
  const reloadFileName = `${ctx.config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}Reload.ts`
  writeFileSync(join(generatedDir, reloadFileName), reloadContent)
}

function generateServiceHooks(
  services: ServiceMetadata[],
  metadata: QueriesMetadata,
  ctx: GenerationContext,
  packageName: string,
  generatedDir: string,
  folderName: string,
): void {
  const servicesToGenerate = services.filter(service => !ctx.skipServices.has(service.apiClass))
  if (servicesToGenerate.length === 0) {
    console.log(' ⏭️  Skipping: all services excluded by skipServices')
    return
  }
  for (const service of servicesToGenerate) {
    writeServiceHooks(service, metadata, ctx, packageName, generatedDir, folderName)
  }
  const indexContent = generateIndexFile(servicesToGenerate, metadata, ctx.config)
  writeFileSync(join(generatedDir, ctx.config.naming.indexFile), indexContent)
}

async function processVersionCore(
  packageName: string,
  pkgDir: string,
  version: string,
  ctx: GenerationContext,
): Promise<void> {
  const metadata = await loadMetadata(pkgDir, version, ctx.metadataFileName)
  const { folderName, services } = metadata
  const generatedDir = prepareGeneratedDir(ctx, folderName)
  generateServiceHooks(services, metadata, ctx, packageName, generatedDir, folderName)
  console.log(`✅ Generated hooks for ${folderName}`)
}

async function processVersion(
  packageName: string,
  pkgDir: string,
  version: string,
  ctx: GenerationContext,
): Promise<void> {
  if (ctx.skipVersions.has(`${packageName}@${version}`) || ctx.skipVersions.has(version)) {
    console.log(`  ⏭️  Skipping ${packageName}/${version} (excluded by skipVersions)`)
    return
  }
  try {
    await processVersionCore(packageName, pkgDir, version, ctx)
  } catch (error) {
    console.error(`    ❌ Error loading ${packageName}/${version}/metadata:`, error)
    throw error
  }
}

async function processPackage(packageName: string, pkgDir: string, ctx: GenerationContext): Promise<void> {
  if (ctx.skipPackages.has(packageName)) {
    console.log(`⏭️ Skipping ${packageName} (excluded by skipPackages)`)
    return
  }
  const versions = discoverVersions(pkgDir, ctx.metadataFileName)
  if (versions.length === 0) {
    console.log(` ⏭️ Skipping ${packageName} (no metadata found)`)
    return
  }
  console.log(`  📦 ${packageName}: ${versions.length} version(s): ${versions.join(', ')}`)
  for (const version of versions) {
    await processVersion(packageName, pkgDir, version, ctx)
  }
}

export async function generateFromMetadata(config: ReactQueriesConfig): Promise<void> {
  const ctx: GenerationContext = {
    config,
    metadataFileName: config.naming.metadataFileName,
    skipMethods: new Set(config.filters.skipMethods),
    skipServices: new Set(config.filters.skipServices),
    skipVersions: new Set(config.filters.skipVersions),
    skipPackages: new Set(config.filters.skipPackages),
    namespaceResolver: await buildNamespaceResolver(config),
  }

  const sdkPackages = discoverSdkPackages(config)
  for (const [packageName, pkgDir] of sdkPackages) {
    await processPackage(packageName, pkgDir, ctx)
  }

  console.log('🎉 Hook generation complete!')
}
