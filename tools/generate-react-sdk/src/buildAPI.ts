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
  strict: false,
}) as { values: Record<string, string | string[] | undefined> }

const dirGenName = (values['dir-gen-name'] as string | undefined) || 'src/__generated__'

const sdkFactoryPath = (values['sdk-factory-path'] as string | undefined) || '../contexts/SDKCacheProvider/sdkFactory'

const packageNameFilter = (values['package-name-filter'] as string | undefined) || '@scaleway/sdk-'

const skipServices = Array.isArray(values['skip-services']) ? values['skip-services'] : []
const skipVersions = Array.isArray(values['skip-versions']) ? values['skip-versions'] : []

await generateAPI({
  dirGenName,
  sdkFactoryPath,
  packageNameFilter,
  skipServices,
  skipVersions,
})

process.stdout.write('✅ generateAPI !')
