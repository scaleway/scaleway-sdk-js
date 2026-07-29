import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Config } from '../config.ts'
import { escapeRegExp } from '../helpers.ts'

type PkgInfo = {
  name: string
  path: string
  packageJsonPath: string
  packageJson: { name: string; dependencies?: Record<string, string> }
}

export type DepsOptions = { src: string; config: Config; dryRun?: boolean }

/**
 * Recursively collect all `.gen.ts` files under a directory, skipping `node_modules`.
 */
function getAllGenTsFiles(dir: string, files: string[] = []): string[] {
  if (!existsSync(dir)) return files
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory() && entry.name !== 'node_modules') getAllGenTsFiles(full, files)
    else if (entry.isFile() && entry.name.endsWith('.gen.ts')) files.push(full)
  }
  return files
}

/**
 * Sync `workspace:*` dependencies in each generated package's `package.json`.
 *
 * For every package under `src`:
 * - Scans all `.gen.ts` files for imports matching `config.sdkPackagePrefix`
 * - For each import that resolves to another workspace package, adds it as a
 *   `workspace:*` dependency if missing
 * - Sorts dependencies alphabetically and writes back the `package.json`
 *
 * @param options.src - Absolute path to the generated packages directory
 * @param options.config - Loaded configuration defining the SDK package prefix
 * @param options.dryRun - Report missing deps without writing (default: false)
 */
export const deps = async ({ src, config, dryRun = false }: DepsOptions): Promise<void> => {
  if (!existsSync(src)) throw new Error(`Directory not found: ${src}`)

  const prefix = escapeRegExp(config.sdkPackagePrefix)
  const importRegex = new RegExp(`from\\s+['"]((${prefix})[^'"]+)['"]`, 'g')

  const packages: PkgInfo[] = readdirSync(src, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .flatMap(e => {
      const packageJsonPath = join(src, e.name, 'package.json')
      if (!existsSync(packageJsonPath)) return []
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8')) as PkgInfo['packageJson']
      return [{ name: e.name, path: join(src, e.name), packageJsonPath, packageJson }]
    })

  const pkgMap = new Map(packages.map(p => [p.packageJson.name, p]))
  let updated = 0

  for (const pkg of packages) {
    const srcDir = join(pkg.path, 'src')
    if (!existsSync(srcDir)) continue

    const imports = new Set<string>()
    for (const file of getAllGenTsFiles(srcDir)) {
      const content = readFileSync(file, 'utf8')
      importRegex.lastIndex = 0
      let match: RegExpExecArray | null
      while ((match = importRegex.exec(content)) !== null) {
        const pkgName = match[1]?.split('/').slice(0, 2).join('/')
        if (pkgName && pkgMap.has(pkgName) && pkgName !== pkg.packageJson.name) imports.add(pkgName)
      }
    }

    const missing = [...imports].filter(imp => !pkg.packageJson.dependencies?.[imp])
    if (missing.length === 0) continue

    const allDeps = [
      ...Object.entries(pkg.packageJson.dependencies ?? {}),
      ...missing.map(d => [d, 'workspace:*'] as const),
    ]
    allDeps.sort(([a], [b]) => a.localeCompare(b))
    pkg.packageJson.dependencies = Object.fromEntries(allDeps)

    if (dryRun) {
      console.log(`  🔍 DRY RUN: Would add to ${pkg.name}: ${missing.join(', ')}`)
    } else {
      writeFileSync(pkg.packageJsonPath, `${JSON.stringify(pkg.packageJson, null, 2)}\n`, 'utf8')
      console.log(`  ✅ Updated ${pkg.name}: +${missing.length} deps`)
    }
    updated++
  }

  console.log(`\n📊 Packages updated: ${updated}`)
  if (dryRun) console.log('🔍 DRY RUN - no changes made')
}
