#!/usr/bin/env node

import { generateAPI } from './generateAPI/index.ts'
import { parseArgsCLI } from './parseArgsCLI.ts'

const requiresValueArgs = ['dir-gen-name', 'sdk-factory-path']
// Parse CLI arguments
const { cliArgs } = parseArgsCLI({ requiresValueArgs })

const dirGenName =
  (cliArgs['dir-gen-name'] as string | undefined) || 'src/__generated__'

const sdkFactoryPath =
  (cliArgs['sdk-factory-path'] as string | undefined) ||
  '../contexts/SDKCacheProvider/sdkFactory'

generateAPI({
  dirGenName,
  sdkFactoryPath,
})

process.stdout.write('✅ generateAPI !')
