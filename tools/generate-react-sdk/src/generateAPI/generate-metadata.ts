import { exec } from 'node:child_process'
import {
  existsSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
} from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { exit, stdout } from 'node:process'
import type { Metadata, ProcessedMetadata } from '../metadata-types.ts'
import { emitFiles } from './emitFiles.ts'
import { generateType } from './generateType.ts'

export const directoryOfSrcFolder = join(resolve('./'))

function discoverSdkPackagesFromWorkspace(
  packageNameFilter: string,
): Map<string, string> {
  const packages = new Map<string, string>()

  let workspaceRoot = resolve('.')
  while (workspaceRoot !== '/') {
    const packagesGenPath = join(workspaceRoot, 'packages_generated')
    if (existsSync(packagesGenPath)) {
      const dirs = readdirSync(packagesGenPath)
      for (const dir of dirs) {
        const dirPath = join(packagesGenPath, dir)
        if (!statSync(dirPath).isDirectory()) continue

        const pkgJsonPath = join(dirPath, 'package.json')
        if (!existsSync(pkgJsonPath)) continue

        try {
          const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'))
          if (pkgJson.name && pkgJson.name.startsWith(packageNameFilter)) {
            packages.set(pkgJson.name, dirPath)
          }
        } catch {
          // Ignore errors
        }
      }
      break
    }
    workspaceRoot = dirname(workspaceRoot)
  }

  return packages
}

function discoverVersions(pkgDir: string): string[] {
  const distPath = join(pkgDir, 'dist')
  const srcPath = join(pkgDir, 'src')

  if (existsSync(distPath)) {
    try {
      const entries = readdirSync(distPath)
      const result = entries.filter(entry => {
        const fullPath = join(distPath, entry)
        const isDir = statSync(fullPath).isDirectory()
        const hasMetadata = existsSync(join(fullPath, 'metadata.gen.js'))
        return isDir && hasMetadata
      })

      if (result.length > 0) {
        return result
      }
    } catch (error) {
      stdout.write(`⚠️  Error reading dist ${distPath}: ${error}\n`)
    }
  }

  if (existsSync(srcPath)) {
    try {
      const entries = readdirSync(srcPath)
      const result = entries.filter(entry => {
        const fullPath = join(srcPath, entry)
        const isDir = statSync(fullPath).isDirectory()
        const hasMetadata = existsSync(join(fullPath, 'metadata.gen.ts'))
        return isDir && hasMetadata
      })

      return result
    } catch (error) {
      stdout.write(`⚠️  Error reading src ${srcPath}: ${error}\n`)
    }
  }

  return []
}

async function loadMetadata(
  pkgDir: string,
  version: string,
): Promise<Metadata | null> {
  // Try dist first
  let metadataPath = join(pkgDir, 'dist', version, 'metadata.gen.js')
  let isTsFile = false

  if (!existsSync(metadataPath)) {
    metadataPath = join(pkgDir, 'src', version, 'metadata.gen.ts')
    isTsFile = true
  }

  if (!existsSync(metadataPath)) {
    return null
  }

  try {
    if (isTsFile) {
      const content = readFileSync(metadataPath, 'utf-8')
      const match = content.match(
        /export const queriesMetadata\s*=\s*({[\s\S]*?})\s*as const/s,
      )
      if (!match) {
        return null
      }

      const objStr = match[1]
      const fn = new Function(`return ${objStr}`)
      return fn() as Metadata
    } else {
      const metadataModule = await import(metadataPath)
      return metadataModule.queriesMetadata as Metadata
    }
  } catch (error) {
    stdout.write(`⚠️  Error loading metadata from ${metadataPath}: ${error}\n`)
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

  if (existsSync(dir)) {
    rmSync(dir, {
      recursive: true,
      force: true,
    })
  }

  const sdkPackages = discoverSdkPackagesFromWorkspace(packageNameFilter)

  if (sdkPackages.size === 0) {
    stdout.write('⚠️  No SDK packages found in workspace\n')
  }

  // Packages to skip (test, internal, etc.)
  const skipPackages = new Set(['@scaleway/sdk-test', '@scaleway/sdk-std'])

  for (const [packageName, pkgDir] of sdkPackages) {
    // Skip test and internal packages
    if (skipPackages.has(packageName)) {
      stdout.write(`⚠️  Skipping ${packageName}: excluded package\n`)
      continue
    }

    const versions = discoverVersions(pkgDir)

    if (versions.length === 0) {
      stdout.write(
        `⚠️  Skipping ${packageName}: no versions with metadata found\n`,
      )
      continue
    }

    for (const version of versions) {
      const metadata = await loadMetadata(pkgDir, version)

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
