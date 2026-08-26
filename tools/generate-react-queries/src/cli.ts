#!/usr/bin/env node

/**
 * CLI entry point for generating React Query hooks from SDK metadata files.
 *
 * Reads metadata.gen.ts from each SDK package's dist/, then generates
 * useQuery / useInfiniteQuery / useReload hooks into sdk-react-hooks.
 *
 * Usage: pnpm generate-react-queries [--packages-path ../../packages_generated]
 */

import { parseArgs } from 'node:util'
import { defaultConfig } from './config.ts'
import type { ReactQueriesConfig } from './config.ts'
import { generateFromMetadata } from './generate.ts'
import { updatePackageJsonExports } from './package-exports.ts'

// Parse CLI flags — all optional, defaults come from config.ts
const { values } = parseArgs({
  options: {
    'dir-gen-name': { type: 'string' },
    'generated-path': { type: 'string' },
    'custom-path': { type: 'string' },
    'api-sdk-path': { type: 'string' },
    'package-name-filter': { type: 'string' },
    'packages-path': { type: 'string' },
    'skip-services': { type: 'string', multiple: true },
    'skip-versions': { type: 'string', multiple: true },
  },
  strict: false,
}) as { values: Record<string, string | string[] | undefined> }

const config: ReactQueriesConfig = structuredClone(defaultConfig)

if (typeof values['dir-gen-name'] === 'string') config.outputDir = values['dir-gen-name']
if (typeof values['generated-path'] === 'string') config.generatedPath = values['generated-path']
if (typeof values['custom-path'] === 'string') config.customPath = values['custom-path']
if (typeof values['api-sdk-path'] === 'string') config.imports.apiSdkPath = values['api-sdk-path']
if (typeof values['package-name-filter'] === 'string') config.imports.packageNameFilter = values['package-name-filter']
if (typeof values['packages-path'] === 'string') config.packagesPath = values['packages-path']
if (Array.isArray(values['skip-services'])) config.filters.skipServices = values['skip-services']
if (Array.isArray(values['skip-versions'])) config.filters.skipVersions = values['skip-versions']

console.log('🚀 Generating React hooks from metadata...')
console.log('⚠️  Prerequisite: Ensure SDK packages are built first')
console.log('   Run: pnpm build:packages')
console.log('')

// 1. Generate hook files from SDK metadata
await generateFromMetadata(config)
// 2. Update package.json exports to expose generated hook directories
updatePackageJsonExports(config)
