import { exec } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { exit, stdout } from 'node:process'
import { project, sdkPaths } from './config.ts'
import { createNamespaceFilesAndFolders } from './createNamespaceFilesAndFolders.ts'
import { deleteOldContent } from './deleteOldContent.ts'
import { getQueryFilesToCreate } from './getQueryFilesToCreate.ts'
import { processDeclarationFile } from './processDeclarationFile.ts'
import { transformResult } from './transformResult.ts'

const directoryOfQueryPackage = resolve('./')
export const generateQueries = ({
  dirGenName,
  generatedPath,
  apiSDKPath,
}: {
  dirGenName: string
  generatedPath: string
  apiSDKPath: string
}) => {
  // const dirGenName = options.dirGenName
  const directoryOfSrcFolder = join(
    directoryOfQueryPackage,
    './src/',
    dirGenName,
  )

  // We use this to not remove namespace directories that has only custom queries. We dont keep folders that has no queries inside
  const onlyCustomNamespace = [
    '',
    // 'incidents', 'S3', 'SQS', 'SNS'
  ].filter(namespace => {
    if (
      existsSync(join(directoryOfSrcFolder, namespace.toLowerCase())) &&
      readdirSync(join(directoryOfSrcFolder, namespace.toLowerCase())).length >
        0
    ) {
      return true
    }

    stdout.write(
      `!${namespace.toLowerCase()} namespace provided but no namespace folder found or do not have any file or folder inside. If you do not want this please ensure the folder is lowercased\n`,
    )

    return false
  })

  // Process and fill the result constant. it will mutate the object directly

  const result = {}
  for (const [packageName, sdkPath] of sdkPaths) {
    if (!(packageName && sdkPath)) {
      throw new Error('packageName or sdkPath is undefined')
    }
    const path = project.addSourceFileAtPath(sdkPath)

    const res = processDeclarationFile(path, '', {}, packageName)
    Object.assign(result, res)
  }

  const transformedResult = transformResult(result)
  const filesToCreate = getQueryFilesToCreate({
    transformedResult,
    apiSDKPath,
  })

  // Dont keep only custom queries namespace without any queries
  const allNamespaces = [
    ...Object.keys(filesToCreate),
    ...onlyCustomNamespace,
  ] as string[]

  deleteOldContent({
    allNamespaces,
    directoryOfSrcFolder,
    generatedPath,
  })

  createNamespaceFilesAndFolders({
    allNamespaces,
    filesToCreate,
    directoryOfSrcFolder,
    generatedPath,
  })

  stdout.write('✅ queries generated !\n')
  // Finally we format all files to prevent updated files just because format is different
  exec('cd ../.. && pnpm run format').on('error', () => {
    stdout.write('❌ Error during format !\n')
    exit(1)
  })
  stdout.write('✅ files formatted !\n')
}
