#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { generateQueries } from './generateQueries/generate.ts'
import { parseArgsCLI } from './parseArgsCLI.ts'
import { removeSrcFromPath } from './utils/pathUtils.ts'

const requiresValueArgs = [
  'dir-gen-name',
  'generated-path',
  'custom-path',
  'api-sdk-path',
  'package-name-filter',
  'custom-ns',
]

// Parse CLI arguments
const { cliArgs } = parseArgsCLI({
  requiresValueArgs,
})

// CLI argument defaults
const generatedPath =
  (cliArgs['generated-path'] as string | undefined) || 'generated'

const customPath = (cliArgs['custom-path'] as string | undefined) || 'custom'

const dirGenName = (cliArgs['dir-gen-name'] as string | undefined) || 'src'
const packageNameFilter =
  (cliArgs['package-name-filter'] as string | undefined) || '@scaleway/sdk-'

const apiSDKPath =
  (cliArgs['api-sdk-path'] as string | undefined) || '@scaleway/react-sdk'

const customNs = cliArgs['custom-ns'] as string | undefined

const onlyCustomNS = customNs?.split(',') ?? []

// Make the call async
generateQueries({
  dirGenName: dirGenName,
  generatedPath,
  packageNameFilter,
  apiPath: apiSDKPath,
  onlyCustomNS,
})

type ExportEntry = {
  types: string
  default: string
}

type PackageJson = {
  name: string
  version: string
  main?: string
  types?: string
  exports?: Record<string, ExportEntry>
  [key: string]: unknown
}

const allNamespaces = readdirSync(resolve('./', dirGenName), {
  withFileTypes: true,
})
  .map(file => (file.isDirectory() ? file.name : ''))
  .filter(fileName => fileName !== '')

const generatedNamespaceDirectories: string[] = allNamespaces.filter(
  namespace =>
    existsSync(join(dirGenName, namespace, String(generatedPath))) &&
    existsSync(join(dirGenName, namespace, String(generatedPath), 'index.ts')),
)
const customNamespaceDirectories: string[] = allNamespaces.filter(
  namespace =>
    existsSync(join(dirGenName, namespace, String(customPath))) &&
    existsSync(join(dirGenName, namespace, String(customPath), 'index.ts')),
)

// TODO: use tsdown https://tsdown.dev/options/package-exports
// Remove 'src/' from the directory name for dist paths
const cleanDirName = removeSrcFromPath(dirGenName)

const generatedExportsConfig: Record<string, ExportEntry> =
  generatedNamespaceDirectories.reduce<Record<string, ExportEntry>>(
    (acc, namespace) => {
      acc[`./${namespace}`] = {
        default: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${generatedPath}/index.js`,
        types: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${generatedPath}/index.d.ts`,
      }

      return acc
    },
    {},
  )

const customExportsConfig: Record<string, ExportEntry> =
  customNamespaceDirectories.reduce<Record<string, ExportEntry>>(
    (acc, namespace) => {
      acc[`./${namespace}/custom`] = {
        default: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${customPath}/index.js`,
        types: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${customPath}/index.d.ts`,
      }

      return acc
    },
    {},
  )

const otherStaticExport: Record<string, ExportEntry> = {
  './mocks*': {
    default: './mocks/*/index.ts',
    types: './mocks/*/index.ts',
  },
}

const packageJsonPath = resolve('package.json')

const packageJson: PackageJson = JSON.parse(
  readFileSync(packageJsonPath, 'utf8'),
) as PackageJson

packageJson.exports = {
  ...packageJson.exports,
  ...customExportsConfig,
  ...generatedExportsConfig,
  ...otherStaticExport,
}

writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

process.stdout.write('✅ package.json exports updated !')
