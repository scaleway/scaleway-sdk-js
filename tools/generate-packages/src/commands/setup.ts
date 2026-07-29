import { execSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cwd } from 'node:process'
import type { Config } from '../config.ts'
import { snakeToSlug } from '../helpers.ts'
import type { PackageJSON } from '../types.ts'
import { deps as runDeps } from './deps.ts'
import { packages as runPackages } from './packages.ts'
import { sdk as runSdk } from './sdk.ts'

export type SetupOptions = {
  src: string
  config: Config
  sdk: string
  scope?: string
  dryRun?: boolean
  verbose?: boolean
  install?: boolean
}

/**
 * Recursively check if a directory tree contains any `.gen.ts` files.
 * Used to detect whether a product has generated code.
 */
function walkHasGenFiles(root: string): boolean {
  if (!existsSync(root)) return false
  const stack = [root]
  while (stack.length) {
    const p = stack.pop()
    if (!p) break
    const st = statSync(p)
    if (st.isDirectory()) for (const name of readdirSync(p)) stack.push(join(p, name))
    else if (p.endsWith('.gen.ts')) return true
  }
  return false
}

/**
 * Detect and onboard new products that have generated code but no `package.json`.
 *
 * Steps:
 * 1. Scan `src` for product directories that have `.gen.ts` files but no `package.json`
 * 2. Run the `packages` command to generate configs for those products
 * 3. Add the new products as `workspace:*` dependencies in the SDK `package.json`
 * 4. Run the `sdk` command to update exports and the `deps` command to sync cross-deps
 * 5. Run `pnpm install` + `manypkg fix` to update the lockfile
 *
 * @param options.src - Absolute path to the generated packages directory
 * @param options.config - Loaded configuration defining SDK targets and scope
 * @param options.sdk - Absolute path to the SDK package.json to update
 * @param options.scope - Override npm scope (defaults to `config.scope`)
 * @param options.dryRun - Preview detected products without making changes (default: false)
 * @param options.install - Run `pnpm install` at the end (default: true)
 * @returns Exit code (0 = success)
 */
export const setup = async ({
  src,
  config,
  sdk: sdkPkgPath,
  scope = config.scope,
  dryRun = false,
  install = true,
}: SetupOptions): Promise<number> => {
  if (!existsSync(src)) throw new Error(`Directory not found: ${src}`)

  // 1) Find new products (has .gen.ts but no package.json)
  const newProducts = readdirSync(src)
    .filter(name => statSync(join(src, name)).isDirectory())
    .map(name => ({
      name,
      hasGenFiles: walkHasGenFiles(join(src, name, 'src')),
      hasPackageJson: existsSync(join(src, name, 'package.json')),
    }))
    .filter(p => p.hasGenFiles && !p.hasPackageJson)

  console.log(`📦 New products: ${newProducts.length}`)
  if (newProducts.length) newProducts.forEach(p => console.log(`  - ${p.name}`))

  if (newProducts.length === 0) {
    console.log('✅ No new products to configure')
    return 0
  }

  if (dryRun) {
    console.log('🔍 DRY RUN: Would run packages + sdk + deps + install')
    return 0
  }

  // 2) Generate package configs
  console.log('⚙️  Generating package configs...')
  await runPackages({ src, runInstall: false })

  // 3) Add new products to SDK package.json
  console.log(`📝 Adding deps to ${sdkPkgPath} (scope: ${scope})...`)
  const sdkPkg = JSON.parse(readFileSync(sdkPkgPath, 'utf8')) as PackageJSON
  sdkPkg.dependencies = sdkPkg.dependencies ?? {}
  for (const p of newProducts) {
    const pkgName = `${scope}/sdk-${snakeToSlug(p.name)}`
    if (!sdkPkg.dependencies[pkgName]) {
      sdkPkg.dependencies[pkgName] = 'workspace:*'
      console.log(`  ✅ ${pkgName}`)
    }
  }
  sdkPkg.dependencies = Object.fromEntries(Object.entries(sdkPkg.dependencies).sort(([a], [b]) => a.localeCompare(b)))
  writeFileSync(sdkPkgPath, `${JSON.stringify(sdkPkg, null, 2)}\n`, 'utf8')

  // 4) Update SDK exports + sync deps
  console.log('📝 Updating SDK exports...')
  await runSdk({ src, config, runInstall: false })
  await runDeps({ src, config })

  // 5) Install
  if (install) {
    console.log('📦 Installing dependencies...')
    execSync('pnpm install --no-frozen-lockfile', { stdio: 'inherit', cwd: cwd() })
  }

  console.log(`✅ Setup complete: ${newProducts.length} product(s) configured`)
  return 0
}
