#!/usr/bin/env node

/**
 * CLI entry point for generating React Query hooks from SDK metadata files.
 *
 * Reads metadata.gen.ts from each SDK package's dist/, then generates
 * useQuery / useInfiniteQuery / useReload hooks into sdk-react-hooks.
 *
 * Usage: pnpm generate-react-queries [--config config.json] [--packages-path ../../packages_generated]
 *
 * A JSON config file may override any default from config.ts. Top-level
 * string fields, imports.*, filters.* (arrays/booleans), and customNamespaces
 * (as [string, string][]) are recognised.
 */

import { parseArgs } from 'node:util'
import { defaultConfig, loadJsonConfig } from './config.ts'
import type { ReactQueriesConfig } from './config.ts'
import { generateFromMetadata } from './generate.ts'
import { updatePackageJsonExports } from './package-exports.ts'

/** Shape of a JSON config file (customNamespaces is [string,string][] here, not a Map). */
type FileConfig = {
  outputDir?: string
  generatedPath?: string
  customPath?: string
  packagesPath?: string
  customNamespaces?: [string, string][]
  imports?: Partial<ReactQueriesConfig['imports']>
  filters?: Partial<ReactQueriesConfig['filters']>
}

const TOP_LEVEL_STRING_FIELDS = ['outputDir', 'generatedPath', 'customPath', 'packagesPath'] as const
const IMPORT_STRING_FIELDS = ['apiSdkPath', 'packageNameFilter', 'dataLoaderPackage'] as const
const FILTER_ARRAY_FIELDS = ['skipMethods', 'skipPackages', 'skipServices', 'skipVersions', 'rawTypes'] as const
const FILTER_BOOLEAN_FIELDS = ['skipPrivateMethods', 'skipCursorAllHooks', 'skipWaiters'] as const

/**
 * Merge a JSON config file into the given config. Fields present and valid in
 * the file override the config; anything else is left untouched.
 */
const loadConfigFile = (config: ReactQueriesConfig, path?: string): ReactQueriesConfig => {
  const fileConfig = loadJsonConfig<FileConfig>(path)
  if (!fileConfig) return config

  const next: ReactQueriesConfig = { ...config }

  for (const key of TOP_LEVEL_STRING_FIELDS) {
    if (typeof fileConfig[key] === 'string') next[key] = fileConfig[key] as string
  }

  if (fileConfig.imports) {
    const imports = fileConfig.imports
    for (const key of IMPORT_STRING_FIELDS) {
      if (typeof imports[key] === 'string') next.imports[key] = imports[key] as string
    }
  }

  if (fileConfig.filters) {
    const filters = fileConfig.filters
    next.filters = { ...config.filters }
    for (const key of FILTER_ARRAY_FIELDS) {
      if (Array.isArray(filters[key])) next.filters[key] = filters[key] as string[]
    }
    for (const key of FILTER_BOOLEAN_FIELDS) {
      if (typeof filters[key] === 'boolean') next.filters[key] = filters[key] as boolean
    }
  }

  if (Array.isArray(fileConfig.customNamespaces)) {
    next.customNamespaces = new Map(
      fileConfig.customNamespaces.filter(
        (entry): entry is [string, string] =>
          Array.isArray(entry) && entry.length === 2 && entry.every(v => typeof v === 'string'),
      ),
    )
  }

  return next
}

// Parse CLI flags — all optional, defaults come from config.ts
const { values } = parseArgs({
  options: {
    'dir-gen-name': { type: 'string' },
    'generated-path': { type: 'string' },
    'custom-path': { type: 'string' },
    'api-sdk-path': { type: 'string' },
    'package-name-filter': { type: 'string' },
    'packages-path': { type: 'string' },
    'config': { type: 'string' },
  },
  strict: false,
}) as { values: Record<string, string | undefined> }

// Start from defaults, then apply a config file, then CLI overrides
const config = loadConfigFile(structuredClone(defaultConfig), values['config'])

if (values['dir-gen-name']) config.outputDir = values['dir-gen-name']
if (values['generated-path']) config.generatedPath = values['generated-path']
if (values['custom-path']) config.customPath = values['custom-path']
if (values['api-sdk-path']) config.imports.apiSdkPath = values['api-sdk-path']
if (values['package-name-filter']) config.imports.packageNameFilter = values['package-name-filter']
if (values['packages-path']) config.packagesPath = values['packages-path']

console.log('🚀 Generating React hooks from metadata...')
console.log('⚠️  Prerequisite: Ensure SDK packages are built first')
console.log('   Run: pnpm build:packages')
console.log('')

// 1. Generate hook files from SDK metadata
await generateFromMetadata(config)
// 2. Update package.json exports to expose generated hook directories
updatePackageJsonExports(config)
