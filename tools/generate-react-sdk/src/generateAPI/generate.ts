import { exec } from 'node:child_process'
import { existsSync, rmdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { exit, stdout } from 'node:process'
import { project, sdkPaths } from './config.ts'
import { emitFiles } from './emitFiles.ts'
import { generateType } from './generateType.ts'
import { processDeclarationFile } from './processDeclarationFile.ts'
import type { ProcessDeclaration } from './types.ts'

export const directoryOfSrcFolder = join(resolve('./'))

export const generateAPI = ({
  dirGenName,
  sdkFactoryPath,
}: {
  dirGenName: string
  sdkFactoryPath: string
}) => {
  let result: ProcessDeclaration = {}

  const dir = join(directoryOfSrcFolder, dirGenName)

  if (existsSync(dir)) {
    rmdirSync(dir, {
      recursive: true,
    })
  }

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
