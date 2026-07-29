import { existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { cwd } from 'node:process'

export type Config = {
  /**
   * Npm scope used when generating package names for new products.
   * Example: "@scaleway-internal" → package name becomes "@scaleway-internal/sdk-foo".
   * Also used by the `setup` command to add dependencies to the SDK package.json.
   */
  scope: string
  /**
   * Prefix used to detect SDK cross-imports in generated `.gen.ts` files.
   * The `deps` command builds a regex from this to find `from "@scope/sdk-..."` imports
   * and sync them as `workspace:*` dependencies.
   * Example: "@scaleway-internal/sdk-"
   */
  sdkPackagePrefix: string
  /**
   * List of SDK packages to update when running the `sdk` command.
   * Each entry controls which generated packages are included and how they're
   * wired into the SDK package.json and index exports.
   */
  sdks: {
    /** Path (relative to cwd) to the SDK's package.json that will receive the generated deps. */
    path: string
    /** Path (relative to cwd) to the SDK's index.gen.ts that will re-export all generated packages. */
    index: string
    /**
     * When set, generated package directories whose name contains this suffix
     * are excluded from this SDK. Omit to include all packages.
     * Example: "admin" → "foo_admin" is excluded from the public SDK but
     * included in the admin SDK (which has no excludeSuffix).
     */
    excludeSuffix?: string
    /** Which dependency fields to populate in the SDK package.json. */
    depsTypes: ('devDependencies' | 'peerDependencies' | 'dependencies')[]
    /** Whether to rewrite the SDK's index.gen.ts with re-exports of all generated packages. */
    shouldUpdateIndex: boolean
    /** Package names to skip when adding dependencies to the SDK package.json. */
    ignoredPackages: string[]
  }[]
}

/**
 * Fallback config used when no `generate-packages.config.ts` is found.
 * Targets a single public SDK at `packages/sdk` that excludes `admin` packages,
 * using the `@scaleway` npm scope.
 */
const DEFAULT_CONFIG: Config = {
  scope: '@scaleway',
  sdkPackagePrefix: '@scaleway/sdk-',
  sdks: [
    {
      path: 'packages/sdk/package.json',
      index: 'packages/sdk/src/index.gen.ts',
      excludeSuffix: 'admin',
      depsTypes: ['dependencies'],
      shouldUpdateIndex: true,
      ignoredPackages: [],
    },
  ],
}

export const loadConfig = async (configPath?: string): Promise<Config> => {
  const resolvedPath = resolve(cwd(), configPath ?? 'generate-packages.config.ts')

  if (!existsSync(resolvedPath)) return resolvePaths(DEFAULT_CONFIG)

  const mod = await import(`file://${resolvedPath}`)
  return resolvePaths(mod.default ?? mod)
}

const resolvePaths = (config: Config): Config => ({
  ...config,
  sdks: config.sdks.map(s => ({ ...s, path: join(cwd(), s.path), index: join(cwd(), s.index) })),
})
