import { writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import type { ProcessedMetadata } from '../metadata-types.ts'
import { lowerCaseFirstLetter } from './helpers.ts'

export const generateType = (res: ProcessedMetadata) => {
  const filename = 'types.generated.ts'
  const template = ['//this file is generated \n\n']

  // import types
  for (const [name, { packageName }] of Object.entries(res)) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    const imp = `import type { ${capitalizedName} } from "${packageName}"\n`
    template.push(imp)
  }

  // export
  template.push('\n export type APISdk = {\n')

  for (const [name, { apis }] of Object.entries(res)) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    for (const api of apis) {
      const key = `${lowerCaseFirstLetter(name + api.replace('API', ''))}`
      const type = `${capitalizedName}.${api}`

      template.push(`${key}:${type},\n`)
    }
  }
  template.push('\n}')
  const src = join(resolve('./src/'), filename)
  writeFileSync(src, template.join('').toString())
}
