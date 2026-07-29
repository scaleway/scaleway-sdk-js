import { execSync } from 'node:child_process'
import type { Dirent } from 'node:fs'
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cwd, exit } from 'node:process'
import type { Config } from '../config.ts'
import type { PackageJSON } from '../types.ts'

export type SdkOptions = { src: string; config: Config; runInstall?: boolean }

/**
 * Read all generated packages from a directory, optionally filtering out
 * directories whose name contains `excludeSuffix`.
 */
const getGeneratedPackages = (dir: string, excludeSuffix?: string): PackageJSON[] | null => {
  try {
    return readdirSync(dir, { withFileTypes: true })
      .filter((d: Dirent) => d.isDirectory())
      .filter((d: Dirent) => !excludeSuffix || !d.name.includes(excludeSuffix))
      .flatMap((d: Dirent) => {
        const pkgPath = join(dir, d.name, 'package.json')
        if (!existsSync(pkgPath)) return []
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf8')) as PackageJSON
        return [{ name: pkg.name, version: pkg.version, path: d.name }]
      })
  } catch (error) {
    console.error('Error reading generated packages:', error)
    return null
  }
}

/**
 * Update global SDK packages with all generated packages as dependencies.
 *
 * For each SDK defined in the config:
 * - Reads all generated package directories (optionally filtering by `excludeSuffix`)
 * - Rebuilds the dependency list from scratch (adds new, removes stale)
 * - Rewrites the SDK's `index.gen.ts` to re-export all generated packages
 * - Skips packages listed in `ignoredPackages`
 *
 * @param options.src - Absolute path to the generated packages directory
 * @param options.config - Loaded configuration defining SDK targets and filters
 * @param options.runInstall - Run `pnpm install` after updating (default: true)
 */
export const sdk = async ({ src, config, runInstall = true }: SdkOptions): Promise<void> => {
  console.log('Starting SDK package update process...')

  for (const s of config.sdks) {
    const generatedPackages = getGeneratedPackages(src, s.excludeSuffix)
    if (!generatedPackages || generatedPackages.length === 0) {
      console.warn('No generated packages found. Nothing to update.')
      exit(1)
    }

    const validPackages = generatedPackages.filter(p => !s.ignoredPackages.includes(p.name))
    const validNames = new Set(validPackages.map(p => p.name))

    const sdkPkg = JSON.parse(readFileSync(s.path, 'utf8')) as PackageJSON

    // Rebuild each dependency section: keep non-SDK deps, replace SDK deps with current set
    for (const depType of s.depsTypes) {
      const field =
        depType === 'dependencies'
          ? 'dependencies'
          : depType === 'peerDependencies'
            ? 'peerDependencies'
            : 'devDependencies'
      const existing = sdkPkg[field] ?? {}
      const kept = Object.fromEntries(
        Object.entries(existing).filter(([name]) => !name.startsWith(config.sdkPackagePrefix)),
      )
      const added = Object.fromEntries(
        validNames.size > 0 ? validPackages.map(p => [p.name, 'workspace:*' as const]) : [],
      )
      sdkPkg[field] = { ...kept, ...added }
    }

    writeFileSync(s.path, `${JSON.stringify(sdkPkg, null, 2)}\n`, 'utf8')
    console.log(`Updated ${s.path} with ${validPackages.length} packages`)

    if (s.shouldUpdateIndex) {
      const indexContent =
        '// Auto-generated exports from all SDK packages\n\n' +
        validPackages.map(p => `export * from '${p.name}'\n`).join('')
      writeFileSync(s.index, indexContent, 'utf8')
      console.log(`Updated ${s.index} with exports for ${validPackages.length} packages`)
    }
  }

  if (runInstall) {
    console.log('📦 Updating pnpm-lock.yaml...')
    execSync('pnpm install --no-frozen-lockfile', { stdio: 'inherit', cwd: cwd() })
    console.log('✅ Dependencies updated')
  }
}
