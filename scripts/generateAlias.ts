import { readdirSync, statSync, writeFileSync } from 'fs'
import { join } from 'path'

const GENERATED_PATH = 'packages_generated'
const OUTPUT_PATH = 'packages/sdk/src/index.ts'

// Convertit "foo_bar" ou "foo-bar" en "FooBar"
const toPascal = (s: string) =>
  s
    .split(/[_-]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

// Convertit "foo_bar" en "foo-bar" pour le slug npm
const toSlug = (s: string) => s.replace(/_/g, '-')

const services = readdirSync(GENERATED_PATH).filter(folder => {
  const fullPath = join(GENERATED_PATH, folder)

  return statSync(fullPath).isDirectory()
})

let output = `/* Auto-generated. Do not edit manually. */\n\n`

for (const service of services) {
  const slug = toSlug(service) // ex. "audit-trail"
  const pascal = toPascal(service) // ex. "AuditTrail"
  const srcPath = join(GENERATED_PATH, service, 'src')

  let versions: string[] = []
  try {
    versions = readdirSync(srcPath).filter(vFolder => {
      const vPath = join(srcPath, vFolder)

      return statSync(vPath).isDirectory() && /^v[0-9a-z]+$/i.test(vFolder)
    })
  } catch {
    console.warn(`⚠️  Pas de dossier 'src' pour ${service}, ignoré.`)
    // eslint-disable-next-line no-continue
    continue
  }
  // eslint-disable-next-line no-continue
  if (versions.length === 0) continue

  const imports: string[] = []
  const mappings: string[] = []

  for (const version of versions) {
    const importName = `${pascal}${version}` // ex. AuditTrailv1alpha1
    imports.push(`import { ${importName} } from '@scaleway/sdk-${slug}'`)
    mappings.push(`  ${version}: ${importName},`)
  }

  output += `${imports.join('\n')  }\n\n`
  const importedNames = imports
    .map(line => /{ (.*?) }/.exec(line)![1])
    .join(', ')
  output += `export { ${importedNames} }\n`
  output += `export const ${pascal} = {\n${mappings.join('\n')}\n}\n\n`
}

writeFileSync(OUTPUT_PATH, output)
console.log(`✅ Fichier généré : ${OUTPUT_PATH}`)
