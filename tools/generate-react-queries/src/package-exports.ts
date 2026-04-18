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

export function updatePackageJsonExports(config: ReactQueriesConfig): void {
  const allNamespaces = readdirSync(resolve('./', config.outputDir), {
    withFileTypes: true,
  })
    .map(file => (file.isDirectory() ? file.name : ''))
    .filter(fileName => fileName !== '')

  const generatedNamespaceDirectories = allNamespaces.filter(namespace =>
    existsSync(join(config.outputDir, namespace, config.generatedPath, config.naming.indexFile)),
  )
  const customNamespaceDirectories = allNamespaces.filter(namespace =>
    existsSync(join(config.outputDir, namespace, config.customPath, config.naming.indexFile)),
  )

  const cleanDirName = removeSrcFromPath(config.outputDir)

  const generatedExportsConfig: Record<string, ExportEntry> = generatedNamespaceDirectories.reduce<
    Record<string, ExportEntry>
  >((acc, namespace) => {
    acc[`./${namespace}`] = {
      default: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${config.generatedPath}/index.js`,
      types: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${config.generatedPath}/index.d.ts`,
    }
    return acc
  }, {})

  const customExportsConfig: Record<string, ExportEntry> = customNamespaceDirectories.reduce<
    Record<string, ExportEntry>
  >((acc, namespace) => {
    acc[`./${namespace}/custom`] = {
      default: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${config.customPath}/index.js`,
      types: `./dist/${cleanDirName ? `${cleanDirName}/` : ''}${namespace}/${config.customPath}/index.d.ts`,
    }
    return acc
  }, {})

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
