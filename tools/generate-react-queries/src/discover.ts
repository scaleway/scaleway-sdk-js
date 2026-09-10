/* eslint-disable no-console */
/**
 * SDK package discovery — find packages on disk and load their metadata.
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import type { QueriesMetadata, ReactQueriesConfig } from './config.ts'

type PackageJson = {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

const isPackageJson = (value: unknown): value is PackageJson => typeof value === 'object' && value !== null

const isPackageJsonWithName = (value: unknown): value is PackageJson & { name?: string } =>
  typeof value === 'object' && value !== null

const isQueriesMetadataModule = (value: unknown): value is { queriesMetadata: QueriesMetadata } =>
  typeof value === 'object' && value !== null && 'queriesMetadata' in value

/**
 * Discover SDK packages and their directories on disk.
 *
 * Two modes:
 *
 * 1. With --packages-path (e.g. 'packages_generated/'):
 *    Scans the directory directly. Each subdirectory is a package.
 *    Reads each subdirectory's package.json to get the real package name.
 *    Fast, no Node resolution needed.
 *
 * 2. Without --packages-path (default):
 *    Reads package.json dependencies, filters by packageNameFilter,
 *    then uses Node's require.resolve to find each package on disk.
 *    Works with node_modules, pnpm workspaces, etc.
 *
 * Returns a Map of packageName → directory path on disk.
 */
/**
 * Scan a directory where each subdirectory is an SDK package.
 * e.g. packages_generated/instance/, packages_generated/k8s/, etc.
 */
function tryReadPackageDir(dirPath: string, packages: Map<string, string>): void {
  const pkgJsonPath = join(dirPath, 'package.json')
  if (!existsSync(pkgJsonPath)) {
    console.warn(`  ⚠️  No package.json in ${dirPath}, skipping`)
    return
  }
  try {
    const pkgJson: unknown = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'))
    if (isPackageJsonWithName(pkgJson) && pkgJson.name) {
      packages.set(pkgJson.name, dirPath)
    }
  } catch {
    console.warn(`  ⚠️  Could not read ${pkgJsonPath}, skipping`)
  }
}

function scanPackageDirectory(fullPath: string): Map<string, string> {
  if (!existsSync(fullPath)) {
    console.warn(`⚠️  Packages directory not found: ${fullPath}`)
    return new Map()
  }

  const packages = new Map<string, string>()
  for (const dir of readdirSync(fullPath)) {
    const dirPath = join(fullPath, dir)
    if (statSync(dirPath).isDirectory()) {
      tryReadPackageDir(dirPath, packages)
    }
  }
  return packages
}

function discoverFromDirectory(packagesPath: string): Map<string, string> {
  const packages = scanPackageDirectory(resolve(packagesPath))
  console.log(`📦 Found ${packages.size} SDK packages in ${packagesPath}`)
  return packages
}

/**
 * Resolve a package name to its root directory on disk.
 *
 * Walks up from CWD looking for the package in node_modules directories.
 * This handles pnpm workspaces (symlinks), hoisted node_modules, and regular installs.
 *
 * For example, resolving '@scaleway-internal/sdk-instance' from
 * /repo/packages/queries/ will check:
 *   /repo/packages/queries/node_modules/@scaleway-internal/sdk-instance
 *   /repo/packages/node_modules/@scaleway-internal/sdk-instance
 *   /repo/node_modules/@scaleway-internal/sdk-instance
 * and return the first one that has a package.json.
 */
function resolvePackageDir(packageName: string): string | undefined {
  let dir = resolve('.')

  while (dir !== '/') {
    const candidate = join(dir, 'node_modules', packageName)
    if (existsSync(join(candidate, 'package.json'))) return candidate
    dir = dirname(dir)
  }

  console.warn(`⚠️  Could not resolve package "${packageName}" from CWD, skipping.`)
  return undefined
}

/**
 * Discover packages from package.json dependencies, then resolve their
 * location on disk using Node's module resolution.
 *
 * This is the generic path — works with node_modules, pnpm workspaces, etc.
 */
function discoverFromDependencies(packageNameFilter: string): Map<string, string> {
  const pkgJson: unknown = JSON.parse(readFileSync(resolve('package.json'), 'utf-8'))

  const allDeps: Record<string, string> = isPackageJson(pkgJson)
    ? {
        ...pkgJson.dependencies,
        ...pkgJson.devDependencies,
        ...pkgJson.peerDependencies,
      }
    : {}

  const sdkPackageNames = Object.keys(allDeps).filter(
    name => name.startsWith(packageNameFilter) && !name.endsWith('-client') && !name.endsWith('-react'),
  )

  const packages = new Map<string, string>()

  for (const name of sdkPackageNames) {
    const pkgDir = resolvePackageDir(name)
    if (pkgDir) packages.set(name, pkgDir)
  }

  console.log(`📦 Found ${packages.size} SDK packages matching "${packageNameFilter}"`)
  return packages
}

/**
 * Find API versions that have metadata in a package's dist directory.
 * Looks for the compiled metadata file (e.g. metadata.gen.js) in each version subdirectory.
 */
export function discoverVersions(pkgDir: string, metadataFileName: string): string[] {
  const distPath = join(pkgDir, 'dist')
  const metadataJsFile = metadataFileName.replace(/\.ts$/, '.js')

  if (!existsSync(distPath)) return []

  return readdirSync(distPath).filter(entry => {
    const fullPath = join(distPath, entry)
    return statSync(fullPath).isDirectory() && existsSync(join(fullPath, metadataJsFile))
  })
}

/**
 * Merge utils-metadata services into the main metadata.
 * Utils methods are merged into matching services by apiClass to avoid duplicate services.
 */
function mergeUtilsServices(metadata: QueriesMetadata, utilsMetadata: QueriesMetadata): void {
  for (const utilsService of utilsMetadata.services) {
    const existing = metadata.services.find(s => s.apiClass === utilsService.apiClass)
    if (existing) {
      existing.methods = [...existing.methods, ...utilsService.methods]
    } else {
      metadata.services = [...metadata.services, utilsService]
    }
  }
}

async function loadUtilsMetadata(pkgDir: string, version: string, metadata: QueriesMetadata): Promise<void> {
  const utilsMetadataPath = join(pkgDir, 'dist', version, 'utils-metadata.js')
  if (!existsSync(utilsMetadataPath)) return
  const utilsModule: unknown = await import(utilsMetadataPath)
  if (!isQueriesMetadataModule(utilsModule)) return
  const utilsMetadata: QueriesMetadata = structuredClone(utilsModule.queriesMetadata)
  mergeUtilsServices(metadata, utilsMetadata)
}

/**
 * Load metadata from a package's dist.
 * Also loads utils-metadata.js if it exists (for hand-written api.utils.ts methods)
 * and merges its services into the main metadata.
 */
export async function loadMetadata(
  pkgDir: string,
  version: string,
  metadataFileName: string,
): Promise<QueriesMetadata> {
  const metadataJsFile = metadataFileName.replace(/\.ts$/, '.js')
  const metadataPath = join(pkgDir, 'dist', version, metadataJsFile)
  const module: unknown = await import(metadataPath)
  if (!isQueriesMetadataModule(module)) {
    throw new Error(`Metadata module ${metadataPath} does not export queriesMetadata`)
  }
  // Deep clone to avoid mutating the cached module singleton across multiple calls
  const metadata: QueriesMetadata = structuredClone(module.queriesMetadata)

  await loadUtilsMetadata(pkgDir, version, metadata)

  return metadata
}

export function discoverSdkPackages(config: ReactQueriesConfig): Map<string, string> {
  if (config.packagesPath) {
    return discoverFromDirectory(config.packagesPath)
  }
  return discoverFromDependencies(config.imports.packageNameFilter)
}
