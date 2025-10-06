import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function walk(dir: string, callback: (file: string) => void) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f)
    if (fs.statSync(p).isDirectory()) walk(p, callback)
    else if (p.endsWith('.ts') || p.endsWith('.js') || p.endsWith('.d.ts'))
      callback(p)
  }
}

function fixFile(file: string) {
  let content = fs.readFileSync(file, 'utf8')

  // Fix regular imports (from, export *)
  content = content.replace(
    /((?:from|export \*)\s*['"])(\.{1,2}\/[^'"]+?)(?<!\.js|\.json|\.cjs|\.mjs|\.d\.ts)(['"])/g,
    '$1$2.js$3',
  )

  // Fix dynamic imports in type expressions (import("./types.gen") -> import("./types.gen.js"))
  content = content.replace(
    /(import\(['"])(\.{1,2}\/[^'"]+?)(?<!\.js|\.json|\.cjs|\.mjs|\.d\.ts)(['"]\))/g,
    '$1$2.js$3',
  )

  fs.writeFileSync(file, content, 'utf8')
}

const roots = ['packages_generated', 'packages']

for (const root of roots) {
  walk(path.join(__dirname, '..', root), file => {
    if (file.includes('/dist/')) fixFile(file)
  })
}
