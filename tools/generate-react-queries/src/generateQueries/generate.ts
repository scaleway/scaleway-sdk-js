import { exec } from 'node:child_process'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { exit, stdout } from 'node:process'
import { project } from './config.ts'
import { createNamespaceFilesAndFolders } from './createNamespaceFilesAndFolders.ts'
import { deleteOldContent } from './deleteOldContent.ts'
import { getQueryFilesToCreate } from './getQueryFilesToCreate.ts'
import { processDeclarationFile } from './processDeclarationFile.ts'
import { transformResult } from './transformResult.ts'

const directoryOfQueryPackage = resolve('./')

// Read package.json
const packageJson = JSON.parse(
  readFileSync(resolve(resolve('./'), 'package.json'), 'utf8'),
) as {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
}

export const generateQueries = ({
  dirGenName,
  generatedPath,
  packageNameFilter,
  apiPath,
  onlyCustomNS,
}: {
  dirGenName: string
  generatedPath: string
  packageNameFilter: string
  apiPath: string
  onlyCustomNS: string[]
}) => {
  // const dirGenName = options.dirGenName
  const directoryOfSrcFolder = join(directoryOfQueryPackage, dirGenName)

  // We use this to not remove namespace directories that has only custom queries. We dont keep folders that has no queries inside
  const onlyCustomNamespace = onlyCustomNS.filter(namespace => {
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

  console.debug('⚠︎ Custom namespaces: \n', onlyCustomNamespace)
  // Generate SDK paths from dependencies
  const sdkPaths = [
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.devDependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
  ]
    .filter(dep => dep.startsWith(packageNameFilter))
    .filter(
      dep => !['@scaleway/sdk-client', '@scaleway/sdk-react'].includes(dep),
    )
    .map(dep => {
      const declarationFile = 'dist/index.gen.d.ts'

      return [
        dep,
        resolve(resolve('./'), `./node_modules/${dep}/${declarationFile}`),
      ]
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
    apiPath,
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
