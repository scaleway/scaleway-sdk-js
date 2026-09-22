#!/usr/bin/env node

import { parseArgs } from 'node:util'
import { generateAPI } from './generateAPI/index.ts'

// Parse CLI arguments
const { values } = parseArgs({
  options: {
    'dir-gen-name': { type: 'string' },
    'sdk-factory-path': { type: 'string' },
    'package-name-filter': { type: 'string' },
    'skip-services': { type: 'string', multiple: true },
    'skip-versions': { type: 'string', multiple: true },
  },
})

const dirGenName = values['dir-gen-name'] ?? 'src/__generated__'
const sdkFactoryPath = values['sdk-factory-path'] ?? '../contexts/SDKCacheProvider/sdkFactory'
const packageNameFilter = values['package-name-filter'] ?? '@scaleway/sdk-'

const skipServices = values['skip-services'] ?? []
const skipVersions = values['skip-versions'] ?? []

await generateAPI({
  dirGenName,
  sdkFactoryPath,
  packageNameFilter,
  skipServices,
  skipVersions,
})

process.stdout.write('✅ generateAPI !')
