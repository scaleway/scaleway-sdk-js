/**
 * Namespace resolution — maps returnTypeNamespace/listItemTypeNamespace
 * values (e.g. '@scaleway-internal/sdk-rdb/v1') to the public package name
 * and exported namespace (e.g. 'Rdbv1') needed for import statements.
 */

import { capitalize } from './config.ts'
import type { ReactQueriesConfig } from './config.ts'
import { discoverSdkPackages, discoverVersions, loadMetadata } from './discover.ts'

export interface ResolvedNamespace {
  /** Public package name for imports, e.g. '@scaleway/sdk-rdb'. */
  packageName: string
  /** Exported namespace, e.g. 'Rdbv1'. */
  ns: string
}

/**
 * Normalize a package name to its internal namespace prefix.
 *
 * Both `@scaleway/sdk-rdb` and `@scaleway-internal/sdk-rdb` map to the
 * same internal path `@scaleway-internal/sdk-rdb`, because the metadata's
 * `returnTypeNamespace` / `listItemTypeNamespace` values always use the
 * `@scaleway-internal/sdk-<slug>` form regardless of whether the package
 * is published as public (`@scaleway/sdk-*`) or internal
 * (`@scaleway-internal/sdk-*`).
 *
 * This lets us match a cross-package reference (e.g.
 * `@scaleway-internal/sdk-rdb/v1` found inside `sdk-rdb-admin`'s metadata)
 * to the package that actually owns it (`@scaleway/sdk-rdb`).
 */
function normalizePackagePath(packageName: string): string {
  return packageName.replace(/^@scaleway\/sdk-/, '@scaleway-internal/sdk-')
}

/**
 * Build a map of all known namespace paths → { packageName, ns }.
 *
 * Scans every SDK package's metadata to collect every returnTypeNamespace
 * and listItemTypeNamespace value that appears, mapping each to the public
 * package name and exported namespace of the package that owns it.
 * This lets us resolve cross-package type references (e.g. rdb_admin
 * referencing a type from rdb).
 *
 * A package only "owns" namespace paths whose prefix matches its own
 * normalized package name. This prevents a package from claiming a
 * cross-package reference that merely appears in its metadata — for
 * example, `@scaleway-internal/sdk-rdb/v1` appears in `sdk-rdb-admin`'s
 * metadata as a `listItemTypeNamespace`, but it is owned by `sdk-rdb`,
 * not by `sdk-rdb-admin`. Without this guard, whichever package is
 * iterated first would wrongly claim the path.
 */
export async function buildNamespaceResolver(config: ReactQueriesConfig): Promise<Map<string, ResolvedNamespace>> {
  const sdkPackages = discoverSdkPackages(config)
  const { metadataFileName } = config.naming
  const resolver = new Map<string, ResolvedNamespace>()

  for (const [packageName, pkgDir] of sdkPackages) {
    const versions = discoverVersions(pkgDir, metadataFileName)
    const ownPathPrefix = normalizePackagePath(packageName)

    for (const version of versions) {
      try {
        const metadata = await loadMetadata(pkgDir, version, metadataFileName)
        const ns = capitalize(metadata.folderName)

        for (const service of metadata.services) {
          for (const method of service.methods) {
            for (const nsPath of [method.returnTypeNamespace, method.listItemTypeNamespace]) {
              if (!nsPath || resolver.has(nsPath)) continue
              // Only register the path as owned by this package when it
              // actually matches this package's own namespace prefix.
              // Cross-package references (nsPath belongs to a different
              // package) are left for that package to claim when it is
              // iterated; if no package claims them, resolveTypeNamespace
              // falls back to the current package's namespace.
              if (nsPath.startsWith(`${ownPathPrefix}/`)) {
                resolver.set(nsPath, { packageName, ns })
              }
            }
          }
        }
      } catch (err) {
        console.warn(
          `⚠️  Failed to load metadata for ${packageName}/${version}:`,
          err instanceof Error ? err.message : err,
        )
      }
    }
  }

  return resolver
}

/**
 * Derive { packageName, ns } from a namespace path when the owning package
 * wasn't discovered by the resolver.
 *
 * Namespace paths follow the form `@<scope>/sdk-<slug>/<version>` where
 * `<scope>` is either `scaleway` or `scaleway-internal`. From this we can
 * derive:
 *  - the package name: `@<scope>/sdk-<slug>` (scope is preserved)
 *  - the exported namespace: `capitalize(camelCase(slug) + version)`
 *
 * For example:
 *  - `@scaleway-internal/sdk-rdb/v1` →
 *      { packageName: '@scaleway-internal/sdk-rdb', ns: 'Rdbv1' }
 *  - `@scaleway/sdk-rdb/v1` →
 *      { packageName: '@scaleway/sdk-rdb', ns: 'Rdbv1' }
 *
 * The scope is preserved because consumers don't mix `@scaleway` and
 * `@scaleway-internal` packages — an internal consumer only uses
 * `@scaleway-internal/sdk-*` packages, a public consumer only uses
 * `@scaleway/sdk-*`.
 *
 * This is only used as a last resort when the resolver map doesn't have
 * an explicit entry (e.g. the owning package isn't in the consumer's
 * dependencies). It is still better than falling back to the current
 * package's namespace, which would produce incorrect type qualifiers
 * like `RdbAdminv1.RdbV1ACLRule` instead of `Rdbv1.RdbV1ACLRule`.
 */
function deriveFromNamespacePath(nsPath: string): ResolvedNamespace | undefined {
  const match = nsPath.match(/^(@scaleway(?:-internal)?)\/sdk-([^/]+)\/(.+)$/)
  if (!match) return undefined

  const scope = match[1] // e.g. "@scaleway-internal" or "@scaleway"
  const slug = match[2] // e.g. "rdb", "rdb-admin", "baremetal"
  if (!slug) return undefined
  const version = match[3] // e.g. "v1", "v1alpha1"
  if (!version) return undefined

  // Convert kebab-case slug to camelCase (e.g. "rdb-admin" → "rdbAdmin")
  const camelSlug = slug.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())

  return {
    packageName: `${scope}/sdk-${slug}`,
    ns: capitalize(`${camelSlug}${version}`),
  }
}

/**
 * Resolve a returnTypeNamespace / listItemTypeNamespace to its
 * { packageName, ns } pair.
 *
 * Resolution order:
 * 1. Exact match in the resolver map (package was discovered).
 * 2. Derive from the namespace path itself (package wasn't discovered
 *    but the path follows the `@scaleway/sdk-<slug>/<version>` convention).
 * 3. Fall back to the current package's namespace.
 */
export function resolveTypeNamespace(
  typeNamespace: string | undefined,
  fallbackPackageName: string,
  fallbackNs: string,
  resolver: Map<string, ResolvedNamespace>,
): ResolvedNamespace {
  // Only resolve values that look like package paths (e.g. '@scaleway-internal/sdk-rdb/v1').
  // Some metadata entries contain the type name itself instead of a package path.
  if (!typeNamespace || !typeNamespace.startsWith('@')) {
    return { packageName: fallbackPackageName, ns: fallbackNs }
  }

  const resolved = resolver.get(typeNamespace)
  if (resolved) return resolved

  // Try to derive from the path itself — better than falling back to the
  // current package, which would produce wrong type qualifiers for
  // cross-package references whose owning package wasn't discovered.
  const derived = deriveFromNamespacePath(typeNamespace)
  if (derived) return derived

  // Last resort: the namespace path couldn't be resolved or derived
  return { packageName: fallbackPackageName, ns: fallbackNs }
}
