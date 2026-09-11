/* eslint-disable no-console */
/**
 * Package.json exports update — so consumers can import e.g. @scaleway/sdk-react-hooks/instancev1
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import type { ReactQueriesConfig } from './config.ts'

type ExportEntry = {
  types: string
  default: string
}

type PackageJson = {
  name: string
  version: string
  exports?: Record<string, ExportEntry>
  [key: string]: unknown
}

function removeSrcFromPath(path: string): string {
  return path
    .replace(/\/src\//g, '/')
    .replace(/\\src\\/g, '\\')
    .replace(/^src[\\/]/, '')
}

type BuildNamespaceExportsOptions = {
  cleanDirName: string
  pathKey: 'generatedPath' | 'customPath'
  keySuffix?: string
}

function buildNamespaceExports(
  allNamespaces: string[],
  config: ReactQueriesConfig,
  { cleanDirName, pathKey, keySuffix = '' }: BuildNamespaceExportsOptions,
): Record<string, ExportEntry> {
  const subPath = config[pathKey]
  const directories = allNamespaces.filter(namespace =>
    existsSync(join(config.outputDir, namespace, subPath, config.naming.indexFile)),
  )
  const prefix = cleanDirName ? `${cleanDirName}/` : ''
  return directories.reduce<Record<string, ExportEntry>>((acc, namespace) => {
    acc[`./${namespace}${keySuffix}`] = {
      default: `./dist/${prefix}${namespace}/${subPath}/index.js`,
      types: `./dist/${prefix}${namespace}/${subPath}/index.d.ts`,
    }
    return acc
  }, {})
}

export function updatePackageJsonExports(config: ReactQueriesConfig): void {
  const allNamespaces = readdirSync(resolve('./', config.outputDir), {
    withFileTypes: true,
  })
    .map(file => (file.isDirectory() ? file.name : ''))
    .filter(fileName => fileName !== '')

  const cleanDirName = removeSrcFromPath(config.outputDir)

  const generatedExportsConfig = buildNamespaceExports(allNamespaces, config, {
    cleanDirName,
    pathKey: 'generatedPath',
  })
  const customExportsConfig = buildNamespaceExports(allNamespaces, config, {
    cleanDirName,
    pathKey: 'customPath',
    keySuffix: '/custom',
  })

  const otherStaticExport: Record<string, ExportEntry> = {
    './mocks*': {
      default: './mocks/*/index.ts',
      types: './mocks/*/index.ts',
    },
  }

  const packageJsonPath = resolve('package.json')
  const packageJson: PackageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8')) as PackageJson

  packageJson.exports = {
    ...packageJson.exports,
    ...customExportsConfig,
    ...generatedExportsConfig,
    ...otherStaticExport,
  }

  writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)
  console.log('✅ package.json exports updated!')
}
