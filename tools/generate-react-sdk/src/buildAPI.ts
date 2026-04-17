#!/usr/bin/env node

import { generateAPI } from './generateAPI/index.ts'
import { parseArgsCLI } from './parseArgsCLI.ts'

const requiresValueArgs = [
  'dir-gen-name',
  'sdk-factory-path',
  'package-name-filter',
]
// Parse CLI arguments
const { cliArgs } = parseArgsCLI({ requiresValueArgs })

const dirGenName =
  (cliArgs['dir-gen-name'] as string | undefined) || 'src/__generated__'

const sdkFactoryPath =
  (cliArgs['sdk-factory-path'] as string | undefined) ||
  '../contexts/SDKCacheProvider/sdkFactory'

const packageNameFilter =
  (cliArgs['package-name-filter'] as string | undefined) || '@scaleway/sdk-'

await generateAPI({
  dirGenName,
  sdkFactoryPath,
  packageNameFilter,
})

process.stdout.write('✅ generateAPI !')
