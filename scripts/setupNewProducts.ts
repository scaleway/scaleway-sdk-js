#!/usr/bin/env node

/* eslint-disable no-console */
/**
 * setupNewProducts.ts
 * Usage:
 *   pnpm tsx scripts/setupNewProducts.ts [--dry-run] [--src packages_generated] [--sdk packages/sdk/package.json] [--scope @scaleway|@scaleway-internal] [--install] [--verbose]
 */

import { execSync } from 'node:child_process'
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { join, resolve } from 'node:path'
import { cwd } from 'node:process'
import type { ParseArgsConfig } from 'node:util'
import { parseArgs } from 'node:util'
import { snakeToSlug } from './helpers'

type Scope = '@scaleway' | '@scaleway-internal'

const options: ParseArgsConfig['options'] = {
  'dry-run': { type: 'boolean', default: false },
  src: { type: 'string', default: 'packages_generated' },
  sdk: { type: 'string', default: 'packages/sdk/package.json' },
  scope: { type: 'string' }, // optional override
  install: { type: 'boolean', default: true }, // run pnpm install
  verbose: { type: 'boolean', default: true },
  quiet: { type: 'boolean', default: false },
}

const { values } = parseArgs({ options })
const DRY_RUN = Boolean(values['dry-run'])
const INSTALL = Boolean(values.install)
const VERBOSE = values.quiet ? false : Boolean(values.verbose)
const PACKAGES_GENERATED_DIR = resolve(cwd(), String(values.src))
const SDK_PACKAGE_JSON = resolve(cwd(), String(values.sdk))

interface Product {
  name: string
  path: string
  hasGenFiles: boolean
  hasPackageJson: boolean
}

const log = (...args: unknown[]) => {
  if (VERBOSE) console.log(...args)
}
const info = (...args: unknown[]) => console.log(...args)
const warn = (...args: unknown[]) => console.warn(...args)
const err = (...args: unknown[]) => console.error(...args)

function safeReadJson(path: string): unknown {
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch (e) {
    throw new Error(`Failed to read/parse JSON: ${path}\n${String(e)}`)
  }
}

function writeJsonIfChanged(path: string, data: unknown) {
  const newContent = `${JSON.stringify(data, null, 2)}\n`
  const oldContent = existsSync(path) ? readFileSync(path, 'utf8') : ''
  if (oldContent !== newContent) {
    if (DRY_RUN) {
      info(`  🔍 DRY RUN: Would write ${path}`)
    } else {
      writeFileSync(path, newContent, 'utf8')
      info(`  ✅ Updated ${path}`)
    }
  } else {
    log(`  ℹ️  No change in ${path}`)
  }
}

function walkHasGenFiles(root: string): boolean {
  if (!existsSync(root)) return false
  const stack = [root]
  while (stack.length) {
    const p = stack.pop()!
    const st = statSync(p)
    if (st.isDirectory()) {
      for (const name of readdirSync(p)) stack.push(join(p, name))
    } else if (p.endsWith('.gen.ts')) {
      return true
    }
  }
  return false
}

function scanProducts(dir: string): Product[] {
  if (!existsSync(dir)) {
    throw new Error(`Directory not found: ${dir}`)
  }
  return readdirSync(dir)
    .map(name => ({ name, full: join(dir, name) }))
    .filter(e => statSync(e.full).isDirectory())
    .map(({ name, full }) => {
      const srcPath = join(full, 'src')
      const hasGenFiles = walkHasGenFiles(srcPath)
      const hasPackageJson = existsSync(join(full, 'package.json'))
      return { name, path: full, hasGenFiles, hasPackageJson }
    })
}

function detectNewProducts(products: Product[]): Product[] {
  return products.filter(p => p.hasGenFiles && !p.hasPackageJson)
}

function detectPackageScope(sdkPackageJsonPath: string): Scope {
  if (values.scope) {
    const s = String(values.scope) as Scope
    return s === '@scaleway-internal' ? s : '@scaleway'
  }
  if (!existsSync(sdkPackageJsonPath)) {
    warn('⚠️  SDK package.json not found, using @scaleway scope')
    return '@scaleway'
  }
  const sdkPackage = safeReadJson(sdkPackageJsonPath) as any
  const deps: Record<string, string> = sdkPackage?.dependencies ?? {}
  const hasInternal = Object.keys(deps).some(k =>
    k.startsWith('@scaleway-internal/sdk-'),
  )
  return hasInternal ? '@scaleway-internal' : '@scaleway'
}

function updateSdkPackageJson(
  sdkPackageJsonPath: string,
  newProducts: Product[],
  scope: Scope,
): { added: string[] } {
  if (!existsSync(sdkPackageJsonPath)) {
    warn('⚠️  SDK package.json not found, skipping update')
    return { added: [] }
  }

  const sdkPackage = safeReadJson(sdkPackageJsonPath) as any
  sdkPackage.dependencies = sdkPackage.dependencies ?? {}
  sdkPackage.devDependencies = sdkPackage.devDependencies ?? {}

  const added: string[] = []
  for (const product of newProducts) {
    const packageName = `${scope}/sdk-${snakeToSlug(product.name)}`
    const hasInDeps = Boolean(sdkPackage.dependencies[packageName])
    const hasInDev = Boolean(sdkPackage.devDependencies[packageName])

    if (!hasInDeps) {
      // si présent en devDependencies → déplacer
      if (hasInDev) {
        delete sdkPackage.devDependencies[packageName]
      }
      sdkPackage.dependencies[packageName] = 'workspace:*'
      added.push(packageName)
      info(`  ✅ Added dependency: ${packageName}`)
    }
  }

  // sort deps
  const sortObj = (o: Record<string, string>) =>
    Object.fromEntries(
      Object.keys(o)
        .sort()
        .map(k => [k, o[k]]),
    )

  sdkPackage.dependencies = sortObj(sdkPackage.dependencies)
  sdkPackage.devDependencies = sortObj(sdkPackage.devDependencies)

  writeJsonIfChanged(sdkPackageJsonPath, sdkPackage)
  return { added }
}

function runCommand(command: string, description: string): void {
  info(`  🔧 ${description}…`)
  if (DRY_RUN) {
    info(`  🔍 DRY RUN: Would run: ${command}`)
    return
  }
  try {
    execSync(command, { stdio: 'inherit', cwd: cwd() })
    info(`  ✅ ${description} completed`)
  } catch (e) {
    throw new Error(`${description} failed.\nCommand: ${command}\n${String(e)}`)
  }
}

async function main(): Promise<number> {
  info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  info('🤖 Setup New Products')
  info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  if (DRY_RUN) info('🔍 DRY RUN MODE - No changes will be made\n')

  // 1) Scan
  info('🔍 Step 1: Scanning for products…')
  const allProducts = scanProducts(PACKAGES_GENERATED_DIR)
  const newProducts = detectNewProducts(allProducts)
  info(`  📦 Total products: ${allProducts.length}`)
  info(`  🆕 New products: ${newProducts.length}`)
  if (newProducts.length) {
    info('  📋 New products detected:')
    for (const p of newProducts) info(`    - ${p.name}`)
  }
  info('')

  if (newProducts.length === 0) {
    info('✅ No new products to configure\n')
    return 0
  }

  // 2) generatePackages
  info('⚙️  Step 2: Generating package configuration files…')
  runCommand('pnpm run generatePackages', 'Generate package configs')
  info('')

  // 3) Update SDK package.json
  info('📝 Step 3: Updating SDK package.json…')
  const scope = detectPackageScope(SDK_PACKAGE_JSON)
  info(`  📦 Detected scope: ${scope}`)
  updateSdkPackageJson(SDK_PACKAGE_JSON, newProducts, scope)
  info('')

  // 4) alias
  info('📝 Step 4: Generating SDK exports…')
  runCommand('pnpm run generateAlias', 'Generate SDK exports')
  info('')

  // 5) install
  if (INSTALL) {
    info('📦 Step 5: Updating dependencies…')
    runCommand('pnpm install --no-frozen-lockfile', 'Update dependencies')
    info('')
  } else {
    info('📦 Step 5: Skipped install (use --install to enable)\n')
  }

  // Summary
  info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  info('✅ Setup Complete!')
  info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
  info('📊 Summary:')
  info(`  - New products configured: ${newProducts.length}`)
  if (newProducts.length) {
    info('  - Products:')
    for (const p of newProducts) info(`    • ${p.name}`)
  }
  if (DRY_RUN) info('\n🔍 DRY RUN MODE - No changes were made')
  info('')
  return 0
}

main()
  .then(code => process.exit(code))
  .catch(e => {
    err('❌ Error:', e instanceof Error ? e.message : String(e))
    process.exit(1)
  })
