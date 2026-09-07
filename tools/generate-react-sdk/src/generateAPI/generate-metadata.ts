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

type PackageJson = {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

type MetadataModule = {
  pkgMetadata?: { versions?: string[] }
  default?: { versions?: string[] }
}

const isPackageJson = (value: unknown): value is PackageJson => typeof value === 'object' && value !== null

const isMetadataModule = (value: unknown): value is MetadataModule => typeof value === 'object' && value !== null

function discoverSdkPackages(packageNameFilter: string): Map<string, string> {
  const pkgJsonPath = resolve('package.json')
  if (!existsSync(pkgJsonPath)) {
    stdout.write('⚠️  No package.json found in current directory\n')
    return new Map()
  }

  const pkgJson: unknown = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'))
  const allDeps: Record<string, string> = isPackageJson(pkgJson)
    ? {
        ...pkgJson.dependencies,
        ...pkgJson.devDependencies,
        ...pkgJson.peerDependencies,
      }
    : {}

  return new Map(
    Object.keys(allDeps)
      .filter(name => name.startsWith(packageNameFilter))
      .map(name => [name, name] as const),
  )
}

async function loadVersions(packageName: string): Promise<string[]> {
  try {
    const resolvedPath = require.resolve(`${packageName}/metadata`)
    const metadataModule: unknown = await import(resolvedPath)
    const versions =
      (isMetadataModule(metadataModule) && metadataModule.pkgMetadata?.versions) ||
      (isMetadataModule(metadataModule) && metadataModule.default?.versions) ||
      []
    return versions
  } catch (error) {
    stdout.write(`⚠️  Could not load metadata from ${packageName}: ${error}\n`)
    return []
  }
}

async function loadMetadataFromFallback(packageName: string, version: string): Promise<Metadata> {
  const pkgDir = join(dirname(resolve('package.json')), 'node_modules', packageName)
  const distMetadataPath = join(pkgDir, 'dist', version, 'metadata.gen.js')
  const metadataModule: unknown = await import(distMetadataPath)
  return (metadataModule as { queriesMetadata: Metadata }).queriesMetadata
}

async function loadMetadata(packageName: string, version: string): Promise<Metadata | null> {
  try {
    try {
      const resolvedPath = require.resolve(`${packageName}/${version}/metadata`)
      const metadataModule: unknown = await import(resolvedPath)
      return (metadataModule as { queriesMetadata: Metadata }).queriesMetadata
    } catch {
      stdout.write(`⚠️  Error loading metadata from ${packageName}/${version}/metadata \n Using dist fallback \n`)
      return await loadMetadataFromFallback(packageName, version)
    }
  } catch (error) {
    stdout.write(`⚠️  Error loading metadata from ${packageName}/${version}/metadata: ${error}\n`)
    return null
  }
}

async function processVersion(
  packageName: string,
  version: string,
  servicesToSkip: Set<string>,
  isVersionSkipped: (packageName: string, version: string) => boolean,
): Promise<ProcessedMetadata | null> {
  if (isVersionSkipped(packageName, version)) {
    stdout.write(`⚠️  Skipping ${packageName}/${version}: excluded by skipVersions\n`)
    return null
  }
  const metadata = await loadMetadata(packageName, version)
  if (!metadata) {
    stdout.write(`⚠️  Skipping ${packageName}/${version}: no queriesMetadata found\n`)
    return null
  }
  const namespace = metadata.folderName || metadata.namespace
  const apis = metadata.services
    .filter((service: { apiClass: string }) => !servicesToSkip.has(service.apiClass))
    .map((service: { apiClass: string }) => service.apiClass)
    .filter((apiClass: string) => apiClass && apiClass.length > 0)
  return apis.length > 0 ? { [namespace]: { packageName, apis } } : null
}

async function processPackageVersions(
  packageName: string,
  servicesToSkip: Set<string>,
  isVersionSkipped: (packageName: string, version: string) => boolean,
): Promise<ProcessedMetadata> {
  const versions = await loadVersions(packageName)
  if (versions.length === 0) {
    stdout.write(`⚠️  Skipping ${packageName}: no versions with metadata found\n`)
    return {}
  }
  let pkgResult: ProcessedMetadata = {}
  for (const version of versions) {
    const versionResult = await processVersion(packageName, version, servicesToSkip, isVersionSkipped)
    if (versionResult) pkgResult = { ...pkgResult, ...versionResult }
  }
  return pkgResult
}

function setupGenerateAPI(
  dirGenName: string,
  packageNameFilter: string,
  skipServices: string[],
  skipVersions: string[],
) {
  const dir = join(directoryOfSrcFolder, dirGenName)
  mkdirSync(dir, { recursive: true })
  const sdkPackages = discoverSdkPackages(packageNameFilter)
  if (sdkPackages.size === 0) stdout.write('⚠️  No SDK packages found in dependencies\n')
  const skipPackages = new Set(['@scaleway/sdk-test', '@scaleway/sdk-std'])
  const servicesToSkip = new Set(skipServices)
  const versionsToSkip = new Set(skipVersions)
  const isVersionSkipped = (packageName: string, version: string): boolean =>
    versionsToSkip.has(`${packageName}@${version}`) || versionsToSkip.has(version)
  return { dir, sdkPackages, skipPackages, servicesToSkip, isVersionSkipped }
}

async function processSdkPackage(
  packageName: string,
  skipPackages: Set<string>,
  servicesToSkip: Set<string>,
  isVersionSkipped: (packageName: string, version: string) => boolean,
): Promise<ProcessedMetadata> {
  if (skipPackages.has(packageName)) {
    stdout.write(`⚠️  Skipping ${packageName}: excluded package\n`)
    return {}
  }
  return await processPackageVersions(packageName, servicesToSkip, isVersionSkipped)
}

export const generateAPI = async ({
  dirGenName,
  sdkFactoryPath,
  packageNameFilter,
  skipServices = [],
  skipVersions = [],
}: {
  dirGenName: string
  sdkFactoryPath: string
  packageNameFilter: string
  skipServices?: string[]
  skipVersions?: string[]
}) => {
  const { dir, sdkPackages, skipPackages, servicesToSkip, isVersionSkipped } = setupGenerateAPI(
    dirGenName,
    packageNameFilter,
    skipServices,
    skipVersions,
  )
  let result: ProcessedMetadata = {}
  for (const [packageName] of sdkPackages) {
    result = { ...result, ...(await processSdkPackage(packageName, skipPackages, servicesToSkip, isVersionSkipped)) }
  }
  emitFiles({ res: result, sourceFolderGen: dir, sdkFactoryPath })
  generateType(result)
  exec('cd ../.. && pnpm run format').on('error', () => {
    stdout.write('❌ Error during format !\n')
    exit(1)
  })
  stdout.write('✅ files formatted !\n')
}
