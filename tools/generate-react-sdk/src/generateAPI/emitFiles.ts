import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ProcessedMetadata } from '../metadata-types.ts'
import { getFileContent } from './getFileContent.ts'
import { lowerCaseFirstLetter } from './helpers.ts'

export const emitFiles = ({
  res,
  sourceFolderGen,
  sdkFactoryPath,
}: {
  res: ProcessedMetadata
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
