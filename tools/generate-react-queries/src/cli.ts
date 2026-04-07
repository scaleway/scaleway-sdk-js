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
  },
  strict: false,
}) as { values: Record<string, string | undefined> }

// Override defaults with any CLI-provided values
const config = structuredClone(defaultConfig)

if (values['dir-gen-name']) config.outputDir = values['dir-gen-name']
if (values['generated-path']) config.generatedPath = values['generated-path']
if (values['custom-path']) config.customPath = values['custom-path']
if (values['api-sdk-path']) config.imports.apiSdkPath = values['api-sdk-path']
if (values['package-name-filter'])
  config.imports.packageNameFilter = values['package-name-filter']
if (values['packages-path']) config.packagesPath = values['packages-path']

console.log('🚀 Generating React hooks from metadata...')
console.log('⚠️  Prerequisite: Ensure SDK packages are built first')
console.log('   Run: pnpm build:packages')
console.log('')

// 1. Generate hook files from SDK metadata
await generateFromMetadata(config)
// 2. Update package.json exports to expose generated hook directories
updatePackageJsonExports(config)
