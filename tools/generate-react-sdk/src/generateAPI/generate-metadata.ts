import { exec } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { exit, stdout } from 'node:process'
import type { Metadata, ProcessedMetadata } from '../metadata-types.ts'
import { emitFiles } from './emitFiles.ts'
import { generateType } from './generateType.ts'

const directoryOfSrcFolder = resolve('./')
const require = createRequire(resolve('./package.json'))

function discoverSdkPackages(packageNameFilter: string): Map<string, string> {
  const pkgJsonPath = resolve('package.json')
  if (!existsSync(pkgJsonPath)) {
    stdout.write('⚠️  No package.json found in current directory\n')
    return new Map()
  }

  const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'))
  const allDeps: Record<string, string> = {
    ...pkgJson.dependencies,
    ...pkgJson.devDependencies,
    ...pkgJson.peerDependencies,
  }

  const packages = new Map<string, string>()
  for (const [name] of Object.entries(allDeps)) {
    if (name.startsWith(packageNameFilter)) {
      packages.set(name, name)
    }
  }

  return packages
}

async function loadVersions(packageName: string): Promise<string[]> {
  try {
    const resolvedPath = require.resolve(`${packageName}/metadata`)
    const metadataModule = await import(resolvedPath)
    const versions =
      metadataModule?.pkgMetadata?.versions ||
      metadataModule?.default?.versions ||
      []
    return versions
  } catch (error) {
    stdout.write(`⚠️  Could not load metadata from ${packageName}: ${error}\n`)
    return []
  }
}

async function loadMetadata(
  packageName: string,
  version: string,
): Promise<Metadata | null> {
  try {
    // Try the exported path first
    try {
      const resolvedPath = require.resolve(`${packageName}/${version}/metadata`)
      const metadataModule = await import(resolvedPath)
      return (metadataModule as { queriesMetadata: Metadata }).queriesMetadata
    } catch {
      stdout.write(
        `⚠️  Error loading metadata from ${packageName}/${version}/metadata \n Using dist fallback \n`,
      )
      // Fallback: construct path from node_modules
      const pkgDir = join(
        dirname(resolve('package.json')),
        'node_modules',
        packageName,
      )
      const distMetadataPath = join(pkgDir, 'dist', version, 'metadata.gen.js')
      const metadataModule = await import(distMetadataPath)
      return (metadataModule as { queriesMetadata: Metadata }).queriesMetadata
    }
  } catch (error) {
    stdout.write(
      `⚠️  Error loading metadata from ${packageName}/${version}/metadata: ${error}\n`,
    )
    return null
  }
}

export const generateAPI = async ({
  dirGenName,
  sdkFactoryPath,
  packageNameFilter,
}: {
  dirGenName: string
  sdkFactoryPath: string
  packageNameFilter: string
}) => {
  let result: ProcessedMetadata = {}

  const dir = join(directoryOfSrcFolder, dirGenName)

  // Create directory if it doesn't exist (don't delete existing files)
  mkdirSync(dir, { recursive: true })

  const sdkPackages = discoverSdkPackages(packageNameFilter)

  if (sdkPackages.size === 0) {
    stdout.write('⚠️  No SDK packages found in dependencies\n')
  }

  const skipPackages = new Set(['@scaleway/sdk-test', '@scaleway/sdk-std'])

  for (const [packageName] of sdkPackages) {
    if (skipPackages.has(packageName)) {
      stdout.write(`⚠️  Skipping ${packageName}: excluded package\n`)
      continue
    }

    const versions = await loadVersions(packageName)

    if (versions.length === 0) {
      stdout.write(
        `⚠️  Skipping ${packageName}: no versions with metadata found\n`,
      )
      continue
    }

    for (const version of versions) {
      const metadata = await loadMetadata(packageName, version)

      if (!metadata) {
        stdout.write(
          `⚠️  Skipping ${packageName}/${version}: no queriesMetadata found\n`,
        )
        continue
      }

      const namespace = metadata.folderName || metadata.namespace
      const apis = metadata.services
        .map((service: { apiClass: string }) => service.apiClass)
        .filter((apiClass: string) => apiClass && apiClass.length > 0)

      if (apis.length > 0) {
        result = {
          ...result,
          [namespace]: {
            packageName,
            apis,
          },
        }
      }
    }
  }

  emitFiles({ res: result, sourceFolderGen: dir, sdkFactoryPath })
  generateType(result)

  exec('cd ../.. && pnpm run format').on('error', () => {
    stdout.write('❌ Error during format !\n')
    exit(1)
  })
  stdout.write('✅ files formatted !\n')
}
