/**
 * Core generation logic.
 *
 * Pipeline: discover SDK packages → load metadata → generate hook files → update package.json exports.
 */

import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import type { QueriesMetadata, ReactQueriesConfig } from './config.ts'
import { capitalize } from './config.ts'
import {
  generateAllQueryHook,
  generateIndexFile,
  generateInfiniteQueryHook,
  generateQueryHook,
  generateReloadHook,
} from './hook-generators.ts'

// --- Package resolution (find SDK packages on disk) ---

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
function discoverSdkPackages(config: ReactQueriesConfig): Map<string, string> {
  if (config.packagesPath) {
    return discoverFromDirectory(config.packagesPath)
  }
  return discoverFromDependencies(config.imports.packageNameFilter)
}

/**
 * Scan a directory where each subdirectory is an SDK package.
 * e.g. packages_generated/instance/, packages_generated/k8s/, etc.
 */
function discoverFromDirectory(packagesPath: string): Map<string, string> {
  const fullPath = resolve(packagesPath)

  if (!existsSync(fullPath)) {
    console.warn(`⚠️  Packages directory not found: ${fullPath}`)
    return new Map()
  }

  const packages = new Map<string, string>()

  for (const dir of readdirSync(fullPath)) {
    const dirPath = join(fullPath, dir)
    if (!statSync(dirPath).isDirectory()) continue

    // Read the actual package name from its package.json
    const pkgJsonPath = join(dirPath, 'package.json')
    if (!existsSync(pkgJsonPath)) {
      console.warn(`  ⚠️  No package.json in ${dirPath}, skipping`)
      continue
    }

    try {
      const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'))
      if (pkgJson.name) {
        packages.set(pkgJson.name, dirPath)
      }
    } catch {
      console.warn(`  ⚠️  Could not read ${pkgJsonPath}, skipping`)
    }
  }

  console.log(`📦 Found ${packages.size} SDK packages in ${packagesPath}`)
  return packages
}

/**
 * Discover packages from package.json dependencies, then resolve their
 * location on disk using Node's module resolution.
 *
 * This is the generic path — works with node_modules, pnpm workspaces, etc.
 */
function discoverFromDependencies(
  packageNameFilter: string,
): Map<string, string> {
  const pkgJson = JSON.parse(readFileSync(resolve('package.json'), 'utf-8'))

  const allDeps: Record<string, string> = {
    ...pkgJson.dependencies,
    ...pkgJson.devDependencies,
    ...pkgJson.peerDependencies,
  }

  const sdkPackageNames = Object.keys(allDeps).filter(
    name =>
      name.startsWith(packageNameFilter) &&
      !name.endsWith('-client') &&
      !name.endsWith('-react'),
  )

  const packages = new Map<string, string>()

  for (const name of sdkPackageNames) {
    const pkgDir = resolvePackageDir(name)
    if (pkgDir) packages.set(name, pkgDir)
  }

  console.log(
    `📦 Found ${packages.size} SDK packages matching "${packageNameFilter}"`,
  )
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

  console.warn(
    `⚠️  Could not resolve package "${packageName}" from CWD, skipping.`,
  )
  return undefined
}

/**
 * Find API versions that have metadata in a package's dist directory.
 * Looks for the compiled metadata file (e.g. metadata.gen.js) in each version subdirectory.
 */
function discoverVersions(pkgDir: string, metadataFileName: string): string[] {
  const distPath = join(pkgDir, 'dist')
  const metadataJsFile = metadataFileName.replace(/\.ts$/, '.js')

  if (!existsSync(distPath)) return []

  return readdirSync(distPath).filter(entry => {
    const fullPath = join(distPath, entry)
    return (
      statSync(fullPath).isDirectory() &&
      existsSync(join(fullPath, metadataJsFile))
    )
  })
}

/**
 * Load metadata from a package's dist.
 * Also loads utils-metadata.js if it exists (for hand-written api.utils.ts methods)
 * and merges its services into the main metadata.
 */
async function loadMetadata(
  pkgDir: string,
  version: string,
  metadataFileName: string,
): Promise<QueriesMetadata> {
  const metadataJsFile = metadataFileName.replace(/\.ts$/, '.js')
  const metadataPath = join(pkgDir, 'dist', version, metadataJsFile)
  const module = await import(metadataPath)
  const metadata: QueriesMetadata = module.queriesMetadata

  // Load utils-metadata if it exists (hand-written, for api.utils.ts methods)
  const utilsMetadataPath = join(pkgDir, 'dist', version, 'utils-metadata.js')
  if (existsSync(utilsMetadataPath)) {
    const utilsModule = await import(utilsMetadataPath)
    const utilsMetadata: QueriesMetadata = utilsModule.queriesMetadata
    if (utilsMetadata?.services) {
      // Merge utils methods into matching services by apiClass to avoid duplicate services
      for (const utilsService of utilsMetadata.services) {
        const existing = metadata.services.find(
          s => s.apiClass === utilsService.apiClass,
        )
        if (existing) {
          existing.methods = [...existing.methods, ...utilsService.methods]
        } else {
          metadata.services = [...metadata.services, utilsService]
        }
      }
    }
  }

  return metadata
}

// --- Main generation (metadata → hook files) ---

export async function generateFromMetadata(
  config: ReactQueriesConfig,
): Promise<void> {
  const sdkPackages = discoverSdkPackages(config)
  const skipMethods = new Set(config.filters.skipMethods)
  const { metadataFileName } = config.naming

  for (const [packageName, pkgDir] of sdkPackages) {
    const versions = discoverVersions(pkgDir, metadataFileName)

    if (versions.length === 0) {
      console.log(`  ⏭️  Skipping ${packageName} (no metadata found)`)
      continue
    }

    console.log(
      `  📦 ${packageName}: ${versions.length} version(s): ${versions.join(', ')}`,
    )

    for (const version of versions) {
      try {
        const metadata = await loadMetadata(pkgDir, version, metadataFileName)

        if (!metadata?.services) {
          console.warn(
            `    ⚠️  Invalid metadata for ${packageName}/${version}, skipping`,
          )
          continue
        }

        const { folderName, services } = metadata
        const generatedDir = join(
          config.outputDir,
          folderName.toLowerCase(),
          config.generatedPath,
        )

        if (existsSync(generatedDir)) {
          rmSync(generatedDir, { recursive: true })
        }
        mkdirSync(generatedDir, { recursive: true })

        for (const service of services) {
          console.log(`    📝 Generating hooks for ${service.apiClass}`)

          for (const method of service.methods) {
            if (skipMethods.has(method.methodName)) continue
            if (config.filters.skipPrivateMethods && method.isPrivate) continue

            // Standard query hook (e.g. useInstancev1APIGetServerQuery)
            const hookContent = generateQueryHook(
              method,
              service,
              metadata,
              config,
              packageName,
            )
            const hookFileName = `${config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${capitalize(method.methodName)}Query.ts`
            writeFileSync(join(generatedDir, hookFileName), hookContent)

            // List methods get additional "all" and "infinite" variants
            if (method.isList) {
              if (
                !(
                  config.filters.skipCursorAllHooks &&
                  method.paginationType === 'cursor'
                )
              ) {
                const allContent = generateAllQueryHook(
                  method,
                  service,
                  metadata,
                  config,
                  packageName,
                )
                const allFileName = `${config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${capitalize(method.methodName)}AllQuery.ts`
                writeFileSync(join(generatedDir, allFileName), allContent)
              }

              const infiniteContent = generateInfiniteQueryHook(
                method,
                service,
                metadata,
                config,
                packageName,
              )
              const infiniteFileName = `${config.naming.hookPrefix}${capitalize(folderName)}${service.apiClass}${capitalize(method.methodName)}InfiniteQuery.ts`
              writeFileSync(
                join(generatedDir, infiniteFileName),
                infiniteContent,
              )
            }

            // Methods with hasWaiter get a polling hook (e.g. useWaitForServer)
            if (method.hasWaiter) {
              const waiterMethod = {
                ...method,
                methodName: `waitFor${capitalize(method.methodName.replace('get', ''))}`,
              }
              const waiterContent = generateQueryHook(
                waiterMethod,
                service,
                metadata,
                config,
                packageName,
              )
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

        console.log(`    ✅ Generated hooks for ${folderName}`)
      } catch (error) {
        console.error(
          `    ❌ Error loading ${packageName}/${version}/metadata:`,
          error,
        )
        throw error
      }
    }
  }

  console.log('🎉 Hook generation complete!')
}

// --- Package.json exports update (so consumers can import e.g. @scaleway/sdk-react-hooks/instancev1) ---

function removeSrcFromPath(path: string): string {
  return path
    .replace(/\/src\//g, '/')
    .replace(/\\src\\/g, '\\')
    .replace(/^src[\\/]/, '')
}

type ExportEntry = {
  types: string
  default: string
}

type PackageJson = {
  name: string
  version: string
  exports?: Record<string, ExportEntry>
  [key: string]: unknown
}

export function updatePackageJsonExports(config: ReactQueriesConfig): void {
  const allNamespaces = readdirSync(resolve('./', config.outputDir), {
    withFileTypes: true,
  })
    .map(file => (file.isDirectory() ? file.name : ''))
    .filter(fileName => fileName !== '')

  const generatedNamespaceDirectories = allNamespaces.filter(namespace =>
    existsSync(
      join(
        config.outputDir,
        namespace,
        config.generatedPath,
        config.naming.indexFile,
      ),
    ),
  )
  const customNamespaceDirectories = allNamespaces.filter(namespace =>
    existsSync(
      join(
        config.outputDir,
        namespace,
        config.customPath,
        config.naming.indexFile,
      ),
    ),
  )

  const cleanDirName = removeSrcFromPath(config.outputDir)

  const generatedExportsConfig: Record<string, ExportEntry> =
    generatedNamespaceDirectories.reduce<Record<string, ExportEntry>>(
      (acc, namespace) => {
        acc[`./${namespace}`] = {
          default: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${config.generatedPath}/index.js`,
          types: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${config.generatedPath}/index.d.ts`,
        }
        return acc
      },
      {},
    )

  const customExportsConfig: Record<string, ExportEntry> =
    customNamespaceDirectories.reduce<Record<string, ExportEntry>>(
      (acc, namespace) => {
        acc[`./${namespace}/custom`] = {
          default: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${config.customPath}/index.js`,
          types: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${config.customPath}/index.d.ts`,
        }
        return acc
      },
      {},
    )

  const otherStaticExport: Record<string, ExportEntry> = {
    './mocks*': {
      default: './mocks/*/index.ts',
      types: './mocks/*/index.ts',
    },
  }

  const packageJsonPath = resolve('package.json')
  const packageJson: PackageJson = JSON.parse(
    readFileSync(packageJsonPath, 'utf8'),
  ) as PackageJson

  packageJson.exports = {
    ...packageJson.exports,
    ...customExportsConfig,
    ...generatedExportsConfig,
    ...otherStaticExport,
  }

  writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)
  console.log('✅ package.json exports updated!')
}
