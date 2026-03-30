#!/usr/bin/env node

import { parseArgs } from 'node:util'
import { defaultConfig } from './config.ts'
import { generateFromMetadata, updatePackageJsonExports } from './generate.ts'

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

await generateFromMetadata(config)
updatePackageJsonExports(config)
