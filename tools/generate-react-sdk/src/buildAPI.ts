#!/usr/bin/env node

import { existsSync, readFileSync } from 'node:fs'
import { generateAPI } from './generateAPI/index.ts'
import { parseArgsCLI } from './parseArgsCLI.ts'

const requiresValueArgs = ['dir-gen-name', 'sdk-factory-path', 'package-name-filter', 'config']
// Parse CLI arguments
const { cliArgs } = parseArgsCLI({ requiresValueArgs })

const dirGenName = (cliArgs['dir-gen-name'] as string | undefined) || 'src/__generated__'

const sdkFactoryPath = (cliArgs['sdk-factory-path'] as string | undefined) || '../contexts/SDKCacheProvider/sdkFactory'

const packageNameFilter = (cliArgs['package-name-filter'] as string | undefined) || '@scaleway/sdk-'

type ConfigFile = {
  filters?: {
    skipServices?: string[]
    skipVersions?: string[]
  }
}

/** Load and parse a JSON config file, returning undefined (with a warning) if missing or malformed. */
const loadJsonConfig = <T>(path?: string): T | undefined => {
  if (!path) return undefined
  if (!existsSync(path)) {
    console.warn(`⚠️  Config file not found: ${path} (ignored)`)
    return undefined
  }
  try {
    return JSON.parse(readFileSync(path, 'utf-8')) as T
  } catch (error) {
    console.warn(`⚠️  Could not parse config file ${path}: ${error}`)
    return undefined
  }
}

const fileConfig = loadJsonConfig<ConfigFile>(
  typeof cliArgs['config'] === 'string' ? cliArgs['config'] : undefined,
)
const skipServices = fileConfig?.filters?.skipServices ?? []
const skipVersions = fileConfig?.filters?.skipVersions ?? []

await generateAPI({
  dirGenName,
  sdkFactoryPath,
  packageNameFilter,
  skipServices,
  skipVersions,
})

process.stdout.write('✅ generateAPI !')
