import { exec } from 'node:child_process'
import { existsSync, readFileSync, rmdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { exit, stdout } from 'node:process'
import { project } from './config.ts'
import { emitFiles } from './emitFiles.ts'
import { generateType } from './generateType.ts'
import { processDeclarationFile } from './processDeclarationFile.ts'
import type { ProcessDeclaration } from './types.ts'

export const directoryOfSrcFolder = join(resolve('./'))

// Read package.json
const packageJson = JSON.parse(
  readFileSync(resolve(resolve('./'), 'package.json'), 'utf8'),
) as {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
}

export const generateAPI = ({
  dirGenName,
  sdkFactoryPath,
  packageNameFilter,
}: {
  dirGenName: string
  sdkFactoryPath: string
  /**
   * Name of the package starting with
   */
  packageNameFilter: string
}) => {
  let result: ProcessDeclaration = {}

  const dir = join(directoryOfSrcFolder, dirGenName)

  if (existsSync(dir)) {
    rmdirSync(dir, {
      recursive: true,
    })
  }

  // Generate SDK paths from dependencies
  const sdkPaths = [
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.devDependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
  ]
    .filter(dep => dep.startsWith(packageNameFilter))
    .filter(dep => !['@scaleway/sdk-client'].includes(dep))
    .map(dep => {
      const declarationFile = 'dist/index.gen.d.ts'

      return [
        dep,
        resolve(resolve('./'), `./node_modules/${dep}/${declarationFile}`),
      ]
    })

  for (const [packageName, sdkPath] of sdkPaths) {
    if (!(packageName && sdkPath)) {
      throw new Error('packageName or sdkPath is undefined')
    }
    const path = project.addSourceFileAtPath(sdkPath)

    const res = processDeclarationFile({
      namespace: '',
      packageName,
      result,
      sourceFile: path,
    })

    result = { ...result, ...res }
  }

  emitFiles({ res: result, sourceFolderGen: dir, sdkFactoryPath })
  generateType(result)

  // // Finally we format all files to prevent updated files just because format is different
  exec('cd ../.. && pnpm run format').on('error', () => {
    stdout.write('❌ Error during format !\n')
    exit(1)
  })
  stdout.write('✅ files formatted !\n')
}
