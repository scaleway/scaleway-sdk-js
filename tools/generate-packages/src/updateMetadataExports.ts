#!/usr/bin/env node
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { cwd } from 'node:process'
import type { ParseArgsConfig } from 'node:util'
import { parseArgs } from 'node:util'

/**
 * Updates package.json files in packages_generated to include metadata export
 */

const options: ParseArgsConfig['options'] = {
  src: {
    type: 'string',
    short: 's',
    default: 'packages_generated',
  },
}

const { values } = parseArgs({ options, allowPositionals: true })

const INPUT_PATH_DIR = resolve(cwd(), values.src as string)

const main = () => {
  const productsDirs = readdirSync(INPUT_PATH_DIR)

  for (const productDir of productsDirs) {
    const fullPath = join(INPUT_PATH_DIR, productDir)
    if (statSync(fullPath).isDirectory()) {
      const pkgJsonPath = join(fullPath, 'package.json')

      try {
        const pkg = JSON.parse(readFileSync(pkgJsonPath, 'utf8'))

        // Add metadata export if not already present
        if (pkg.exports && !pkg.exports['./metadata']) {
          pkg.exports['./metadata'] = {
            types: './dist/metadata.d.ts',
            default: './dist/metadata.js',
          }

          writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2) + '\n')
          console.log(`Updated ${productDir}/package.json with metadata export`)
        }
      } catch (error) {
        console.error(`Error processing ${productDir}:`, error)
      }
    }
  }
}

main()
