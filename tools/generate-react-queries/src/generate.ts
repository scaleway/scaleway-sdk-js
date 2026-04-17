/**
 * Core generation logic — metadata to hook files.
 */

import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ReactQueriesConfig } from './config.ts'
import { capitalize } from './config.ts'
import { discoverSdkPackages, discoverVersions, loadMetadata } from './discover.ts'
import {
  generateAllQueryHook,
  generateIndexFile,
  generateInfiniteQueryHook,
  generateQueryHook,
  generateReloadHook,
} from './hook-generators.ts'

export async function generateFromMetadata(config: ReactQueriesConfig): Promise<void> {
  const sdkPackages = discoverSdkPackages(config)
  const skipMethods = new Set(config.filters.skipMethods)
  const { metadataFileName } = config.naming

  const skipPackages = new Set(config.filters.skipPackages)

  for (const [packageName, pkgDir] of sdkPackages) {
    if (skipPackages.has(packageName)) {
      console.log(`⏭️ Skipping ${packageName} (excluded by skipPackages)`)
      continue
    }

    const versions = discoverVersions(pkgDir, metadataFileName)

    if (versions.length === 0) {
      console.log(` ⏭️ Skipping ${packageName} (no metadata found)`)
      continue
    }

    console.log(`  📦 ${packageName}: ${versions.length} version(s): ${versions.join(', ')}`)

    for (const version of versions) {
      try {
        const metadata = await loadMetadata(pkgDir, version, metadataFileName)

        if (!metadata?.services) {
          console.warn(`    ⚠️  Invalid metadata for ${packageName}/${version}, skipping`)
          continue
        }

        const { folderName, services } = metadata
        const generatedDir = join(config.outputDir, folderName.toLowerCase(), config.generatedPath)

        if (existsSync(generatedDir)) {
          rmSync(generatedDir, { recursive: true, force: true })
        }
        mkdirSync(generatedDir, { recursive: true })

        for (const service of services) {
          console.log(`📝 Generating hooks for ${service.apiClass}`)

          for (const method of service.methods) {
            if (skipMethods.has(method.methodName)) continue
            if (config.filters.skipPrivateMethods && method.isPrivate) continue

            // Standard query hook (e.g. useInstancev1APIGetServerQuery)
            const hookContent = generateQueryHook(method, service, metadata, config, packageName)
            const hookFileName = `${config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${capitalize(method.methodName)}Query.ts`
            writeFileSync(join(generatedDir, hookFileName), hookContent)

            // List methods get additional "all" and "infinite" variants
            if (method.isList) {
              if (!(config.filters.skipCursorAllHooks && method.paginationType === 'cursor')) {
                const allContent = generateAllQueryHook(method, service, metadata, config, packageName)
                const allFileName = `${config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${capitalize(method.methodName)}AllQuery.ts`
                writeFileSync(join(generatedDir, allFileName), allContent)
              }

              const infiniteContent = generateInfiniteQueryHook(method, service, metadata, config, packageName)
              const infiniteFileName = `${config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${capitalize(method.methodName)}InfiniteQuery.ts`
              writeFileSync(join(generatedDir, infiniteFileName), infiniteContent)
            }

            // Methods with hasWaiter get a polling hook (e.g. useWaitForServer)
            if (method.hasWaiter && !config.filters.skipWaiters) {
              const waiterMethod = {
                ...method,
                methodName: `waitFor${capitalize(method.methodName.replace('get', ''))}`,
              }
              const waiterContent = generateQueryHook(waiterMethod, service, metadata, config, packageName)
              const waiterFileName = `${config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${config.naming.waiterPrefix}${capitalize(method.methodName.replace('get', ''))}Query.ts`
              writeFileSync(join(generatedDir, waiterFileName), waiterContent)
            }
          }

          // One reload hook per service to invalidate all its queries
          const reloadContent = generateReloadHook(service, metadata, config)
          const reloadFileName = `${config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}Reload.ts`
          writeFileSync(join(generatedDir, reloadFileName), reloadContent)
        }

        // Barrel file re-exporting all generated hooks for this namespace
        const indexContent = generateIndexFile(services, metadata, config)
        writeFileSync(join(generatedDir, config.naming.indexFile), indexContent)

        console.log(`✅ Generated hooks for ${folderName}`)
      } catch (error) {
        console.error(`    ❌ Error loading ${packageName}/${version}/metadata:`, error)
        throw error
      }
    }
  }

  console.log('🎉 Hook generation complete!')
}
