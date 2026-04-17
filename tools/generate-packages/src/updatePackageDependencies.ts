#!/usr/bin/env node

/* eslint-disable no-console */
/**
 * updatePackageDependencies.ts
 *
 * Scans all generated packages and automatically adds missing dependencies
 * based on imports found in .gen.ts files.
 *
 * Usage:
 *   pnpm dlx tsx scripts/updatePackageDependencies.ts [--dry-run] [--src packages_generated]
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { cwd } from 'node:process'
import type { ParseArgsConfig } from 'node:util'
import { parseArgs } from 'node:util'

const options: ParseArgsConfig['options'] = {
  'dry-run': { type: 'boolean', default: false },
  src: { type: 'string', default: 'packages_generated' },
  verbose: { type: 'boolean', default: false },
}

const { values } = parseArgs({ options })
const DRY_RUN = Boolean(values['dry-run'])
const VERBOSE = Boolean(values.verbose)
const PACKAGES_GENERATED_DIR = resolve(cwd(), String(values.src))

// Regex to match imports from @scaleway/sdk-* or @scaleway-internal/sdk-*
const SDK_IMPORT_REGEX = /from\s+['"](@scaleway(?:-internal)?\/sdk-[^'"]+)['"]/g

interface PackageInfo {
  name: string
  path: string
  packageJsonPath: string
  packageJson: {
    name: string
    dependencies?: Record<string, string>
    [key: string]: unknown
  }
}

const log = (...args: unknown[]) => {
  if (VERBOSE) console.log(...args)
}

const info = (...args: unknown[]) => console.log(...args)

function safeReadJson(path: string): unknown {
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch (e) {
    throw new Error(`Failed to read/parse JSON: ${path}\n${String(e)}`)
  }
}

function getAllTsFiles(dir: string, fileList: string[] = []): string[] {
  if (!existsSync(dir)) return fileList

  const entries = readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules') {
        getAllTsFiles(fullPath, fileList)
      }
    } else if (entry.isFile() && entry.name.endsWith('.gen.ts')) {
      fileList.push(fullPath)
    }
  }

  return fileList
}

function extractSdkImports(filePath: string): Set<string> {
  const content = readFileSync(filePath, 'utf8')
  const imports = new Set<string>()

  SDK_IMPORT_REGEX.lastIndex = 0

  let match: RegExpExecArray | null = SDK_IMPORT_REGEX.exec(content)
  while (match !== null) {
    const importPath = match[1]
    const packageName = importPath?.split('/').slice(0, 2).join('/')
    if (
      packageName &&
      (packageName.startsWith('@scaleway/sdk-') ||
        packageName.startsWith('@scaleway-internal/sdk-'))
    ) {
      imports.add(packageName)
    }
    match = SDK_IMPORT_REGEX.exec(content)
  }

  return imports
}

function scanPackages(): PackageInfo[] {
  if (!existsSync(PACKAGES_GENERATED_DIR)) {
    throw new Error(`Directory not found: ${PACKAGES_GENERATED_DIR}`)
  }

  const packages: PackageInfo[] = []
  const entries = readdirSync(PACKAGES_GENERATED_DIR, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const packagePath = join(PACKAGES_GENERATED_DIR, entry.name)
    const packageJsonPath = join(packagePath, 'package.json')

    if (!existsSync(packageJsonPath)) {
      log(`  ⚠️  Skipping ${entry.name}: no package.json`)
      continue
    }

    try {
      const packageJson = safeReadJson(
        packageJsonPath,
      ) as PackageInfo['packageJson']
      packages.push({
        name: entry.name,
        path: packagePath,
        packageJsonPath,
        packageJson,
      })
    } catch (e) {
      console.warn(`  ⚠️  Failed to read package.json for ${entry.name}:`, e)
    }
  }

  return packages
}

function updatePackageDependencies(packages: PackageInfo[]): {
  updated: number
  added: Record<string, string[]>
} {
  const added: Record<string, string[]> = {}
  let updated = 0

  const packageMap = new Map<string, PackageInfo>()
  for (const pkg of packages) {
    packageMap.set(pkg.packageJson.name, pkg)
  }

  for (const pkg of packages) {
    const srcDir = join(pkg.path, 'src')
    if (!existsSync(srcDir)) {
      log(`  ⚠️  No src directory for ${pkg.name}`)
      continue
    }

    const tsFiles = getAllTsFiles(srcDir)
    const allImports = new Set<string>()

    for (const file of tsFiles) {
      const imports = extractSdkImports(file)
      for (const imp of imports) {
        allImports.add(imp)
      }
    }

    if (allImports.size === 0) {
      log(`  ℹ️  No SDK imports found in ${pkg.name}`)
      continue
    }

    const validImports = Array.from(allImports).filter(imp =>
      packageMap.has(imp),
    )

    if (validImports.length === 0) {
      log(`  ℹ️  No valid workspace SDK imports found in ${pkg.name}`)
      continue
    }

    if (!pkg.packageJson.dependencies) {
      pkg.packageJson.dependencies = {}
    }

    const missingDeps: string[] = []
    for (const dep of validImports) {
      if (pkg.packageJson.dependencies[dep]) {
        log(`  ℹ️  ${pkg.name} already has ${dep}`)
        continue
      }

      if (dep === pkg.packageJson.name) {
        continue
      }

      missingDeps.push(dep)
      pkg.packageJson.dependencies[dep] = 'workspace:*'
    }

    if (missingDeps.length > 0) {
      const sortedDeps = Object.fromEntries(
        Object.entries(pkg.packageJson.dependencies).sort(([a], [b]) =>
          a.localeCompare(b),
        ),
      )
      pkg.packageJson.dependencies = sortedDeps

      if (DRY_RUN) {
        info(`  🔍 DRY RUN: Would add to ${pkg.name}:`)
        for (const dep of missingDeps) {
          info(`    - ${dep}`)
        }
      } else {
        writeFileSync(
          pkg.packageJsonPath,
          `${JSON.stringify(pkg.packageJson, null, 2)}\n`,
          'utf8',
        )
        info(
          `  ✅ Updated ${pkg.name}: added ${missingDeps.length} dependency(ies)`,
        )
        for (const dep of missingDeps) {
          log(`    - ${dep}`)
        }
      }

      added[pkg.name] = missingDeps
      updated++
    }
  }

  return { updated, added }
}

async function main(): Promise<number> {
  info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  info('🤖 Update Package Dependencies')
  info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  if (DRY_RUN) info('🔍 DRY RUN MODE - No changes will be made\n')

  info('🔍 Step 1: Scanning packages…')
  const packages = scanPackages()
  info(`  📦 Found ${packages.length} packages\n`)

  info('🔍 Step 2: Analyzing imports and updating dependencies…')
  const { updated, added } = updatePackageDependencies(packages)
  info('')

  info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  info('✅ Update Complete!')
  info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
  info('📊 Summary:')
  info(`  - Packages updated: ${updated}`)
  if (Object.keys(added).length > 0) {
    info('  - Dependencies added:')
    for (const [pkgName, deps] of Object.entries(added)) {
      info(`    • ${pkgName}: ${deps.join(', ')}`)
    }
  }
  if (DRY_RUN) info('\n🔍 DRY RUN MODE - No changes were made')
  info('')

  return 0
}

main()
  .then(code => process.exit(code))
  .catch(e => {
    console.error('❌ Error:', e instanceof Error ? e.message : String(e))
    process.exit(1)
  })
