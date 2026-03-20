#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'

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

  content = content.replace(
    /((?:from|export \*)\s*['"])(\.{1,2}\/[^'"]+?)(?<!\.js|\.json|\.cjs|\.mjs|\.d\.ts)(['"])/g,
    '$1$2.js$3',
  )

  content = content.replace(
    /(import\(['"])(\.{1,2}\/[^'"]+?)(?<!\.js|\.json|\.cjs|\.mjs|\.d\.ts)(['"]\))/g,
    '$1$2.js$3',
  )

  fs.writeFileSync(file, content, 'utf8')
}

const roots = ['packages_generated']

for (const root of roots) {
  walk(path.join(cwd(), root), file => {
    if (file.includes('/dist/')) fixFile(file)
  })
}
