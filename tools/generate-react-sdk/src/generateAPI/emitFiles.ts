import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { getFileContent } from './getFileContent.ts'
import { lowerCaseFirstLetter } from './helpers.ts'
import type { ProcessDeclaration } from './types.ts'

export const emitFiles = ({
  res,
  sourceFolderGen,
  sdkFactoryPath,
}: {
  res: ProcessDeclaration
  sourceFolderGen: string
  sdkFactoryPath: string
}) => {
  const dirPath = join(sourceFolderGen)
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true })
  }
  for (const [name, { packageName, apis }] of Object.entries(res)) {
    for (const api of apis) {
      const suffix = api
      const filename = `${lowerCaseFirstLetter(name)}${suffix}.ts`
      const content = getFileContent({
        api,
        name,
        packageName,
        sdkFactoryPath,
      })
      const src = join(dirPath, filename)
      writeFileSync(src, content)
    }
  }
}
