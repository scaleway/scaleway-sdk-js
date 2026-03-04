import { writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { lowerCaseFirstLetter } from './helpers.ts'
import type { ProcessDeclaration } from './types.ts'

export const generateType = (res: ProcessDeclaration) => {
  const filename = 'types.generated.ts'
  const template = ['//this file is generated \n\n']

  // import types

  for (const [name, { packageName }] of Object.entries(res)) {
    const imp = `import type { ${name} } from "${packageName}"\n`
    template.push(imp)
  }

  // export

  template.push('\n export type APISdk = {\n')

  for (const [name, { apis }] of Object.entries(res)) {
    for (const api of apis) {
      const key = `${lowerCaseFirstLetter(name + api.replace('API', ''))}`
      const type = `${name}.${api}`

      template.push(`${key}:${type},\n`)
    }
  }
  template.push('\n}')
  const src = join(resolve('./src/'), filename)
  writeFileSync(src, template.join('').toString())
}
