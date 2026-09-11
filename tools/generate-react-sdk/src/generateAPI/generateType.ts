import { writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import type { ProcessedMetadata } from '../metadata-types.ts'
import { lowerCaseFirstLetter } from './helpers.ts'

function buildImportLines(res: ProcessedMetadata): string[] {
  return Object.entries(res).map(([name, { packageName }]) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    return `import type { ${capitalizedName} } from "${packageName}"\n`
  })
}

function buildExportLines(res: ProcessedMetadata): string[] {
  const lines: string[] = []
  for (const [name, { apis }] of Object.entries(res)) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    for (const api of apis) {
      const key = lowerCaseFirstLetter(name + api.replace('API', ''))
      const type = `${capitalizedName}.${api}`
      lines.push(`${key}:${type},\n`)
    }
  }
  return lines
}

export const generateType = (res: ProcessedMetadata) => {
  const content = [
    '//this file is generated \n\n',
    ...buildImportLines(res),
    '\n export type APISdk = {\n',
    ...buildExportLines(res),
    '\n}',
  ].join('')
  const src = join(resolve('./src/'), 'types.generated.ts')
  writeFileSync(src, content)
}
