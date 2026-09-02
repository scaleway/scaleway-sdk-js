/**
 * Hook generators — turn metadata into React hook source code.
 *
 * Each public function produces the source code for one hook file
 * using template literal functions from ./template.ts.
 */

import type { QueriesMetadata, QueryMethod, ReactQueriesConfig, ServiceMetadata } from './config.ts'
import { capitalize, lowerCaseFirst } from './config.ts'
import { resolveTypeNamespace } from './namespace-resolver.ts'
import type { ResolvedNamespace } from './namespace-resolver.ts'
import { renderHook, renderReload } from './template.ts'

// --- Naming helpers (build hook names, import paths, and qualified types) ---

/** Qualify a type with namespace prefix, unless it's a raw type (string, Blob, etc.). */
function nsType(ns: string, type: string, rawTypes: Set<string>): string {
  return rawTypes.has(type) ? type : `${ns}.${type}`
}

/**
 * Collect all distinct namespace imports needed for a hook, keyed by package
 * name so we deduplicate when multiple types come from the same package.
 * Returns a sorted array for deterministic output.
 */
function collectNsImports(imports: Map<string, ResolvedNamespace>): ResolvedNamespace[] {
  return [...imports.values()].sort((a, b) => a.packageName.localeCompare(b.packageName))
}

/** Derive all naming conventions for a given method + service combination. */
function resolveNames(
  method: QueryMethod,
  service: ServiceMetadata,
  metadata: QueriesMetadata,
  config: ReactQueriesConfig,
  sdkPackageName: string,
  namespaceResolver: Map<string, ResolvedNamespace>,
) {
  const { folderName } = metadata
  const rawTypes = new Set(config.filters.rawTypes)

  const apiImportName = `${folderName}${service.apiClass}`
  const apiHookName = `${config.naming.hookPrefix}${capitalize(apiImportName)}`
  const apiVarName = apiImportName.replace(/API$/, '')
  const apiImportPath = `${config.imports.apiSdkPath}/${lowerCaseFirst(apiImportName)}`

  const ns = capitalize(folderName)

  // Resolve the namespace for the return type
  const returnNsInfo = resolveTypeNamespace(method.returnTypeNamespace, sdkPackageName, ns, namespaceResolver)
  const returnType = nsType(returnNsInfo.ns, method.returnType, rawTypes)

  return {
    folderName,
    apiHookName,
    apiVarName,
    apiImportPath,
    sdkPackageName,
    ns,
    paramsType: nsType(ns, method.paramsType, rawTypes),
    returnType,
    returnNsInfo,
    rawTypes,
  }
}

// --- Hook generators (one function per hook variant) ---

/** Generate a standard useQuery hook (also used for waiter hooks). */
export function generateQueryHook(
  method: QueryMethod,
  service: ServiceMetadata,
  metadata: QueriesMetadata,
  config: ReactQueriesConfig,
  sdkPackageName: string,
  namespaceResolver: Map<string, ResolvedNamespace>,
): string {
  const n = resolveNames(method, service, metadata, config, sdkPackageName, namespaceResolver)
  const hasParams = !!method.paramsType
  const hookSuffix = `${capitalize(metadata.folderName)}${service.apiClass}${capitalize(method.methodName)}Query`

  // Collect namespace imports: return type, and params type if it uses a namespace
  const nsImports = new Map<string, ResolvedNamespace>()
  if (!n.rawTypes.has(method.returnType)) {
    nsImports.set(n.returnNsInfo.packageName, n.returnNsInfo)
  }
  if (hasParams && !n.rawTypes.has(method.paramsType)) {
    nsImports.set(sdkPackageName, { packageName: sdkPackageName, ns: n.ns })
  }

  const keyArray = hasParams
    ? `"${n.apiVarName}", "${method.methodName}", ...Object.entries(params).flat(3).sort()`
    : `"${n.apiVarName}", "${method.methodName}"`

  return renderHook({
    apiHookName: n.apiHookName,
    apiImportPath: n.apiImportPath,
    nsImports: collectNsImports(nsImports),
    dataLoaderPackage: config.imports.dataLoaderPackage,
    generatedComment: config.generatedComment,
    hookName: `${config.naming.hookPrefix}${hookSuffix}`,
    paramsType: n.paramsType,
    returnType: n.returnType,
    apiVarName: n.apiVarName,
    methodName: method.methodName,
    hasParams,
    isAll: false,
    isInfinite: false,
    keyArray,
  })
}

/** Generate an "all" hook that fetches every page of a list method. */
export function generateAllQueryHook(
  method: QueryMethod,
  service: ServiceMetadata,
  metadata: QueriesMetadata,
  config: ReactQueriesConfig,
  sdkPackageName: string,
  namespaceResolver: Map<string, ResolvedNamespace>,
): string {
  const n = resolveNames(method, service, metadata, config, sdkPackageName, namespaceResolver)
  const hookSuffix = `${capitalize(metadata.folderName)}${service.apiClass}${capitalize(method.methodName)}AllQuery`

  // Resolve the namespace for the list item type
  const itemNsInfo = resolveTypeNamespace(method.listItemTypeNamespace, sdkPackageName, n.ns, namespaceResolver)

  const rawItemType = method.listItemType
  const itemType = rawItemType ? nsType(itemNsInfo.ns, rawItemType, n.rawTypes) : n.returnType

  // Collect namespace imports: params type, return type (if used), and list item type
  const nsImports = new Map<string, ResolvedNamespace>()
  if (!n.rawTypes.has(method.paramsType)) {
    nsImports.set(sdkPackageName, { packageName: sdkPackageName, ns: n.ns })
  }
  if (!n.rawTypes.has(method.returnType)) {
    nsImports.set(n.returnNsInfo.packageName, n.returnNsInfo)
  }
  if (rawItemType && !n.rawTypes.has(rawItemType)) {
    nsImports.set(itemNsInfo.packageName, itemNsInfo)
  }

  return renderHook({
    apiHookName: n.apiHookName,
    apiImportPath: n.apiImportPath,
    nsImports: collectNsImports(nsImports),
    dataLoaderPackage: config.imports.dataLoaderPackage,
    generatedComment: config.generatedComment,
    hookName: `${config.naming.hookPrefix}${hookSuffix}`,
    paramsType: n.paramsType,
    returnType: `${itemType}[]`,
    apiVarName: n.apiVarName,
    methodName: method.methodName,
    hasParams: true,
    isAll: true,
    isInfinite: false,
    keyArray: `"${n.apiVarName}", "${method.methodName}", "${config.naming.allKeySuffix}", ...Object.entries(params).flat(3).sort()`,
  })
}

/** Generate an infinite query hook for paginated list methods. */
export function generateInfiniteQueryHook(
  method: QueryMethod,
  service: ServiceMetadata,
  metadata: QueriesMetadata,
  config: ReactQueriesConfig,
  sdkPackageName: string,
  namespaceResolver: Map<string, ResolvedNamespace>,
): string {
  const n = resolveNames(method, service, metadata, config, sdkPackageName, namespaceResolver)
  const hookSuffix = `${capitalize(metadata.folderName)}${service.apiClass}${capitalize(method.methodName)}InfiniteQuery`

  // Collect namespace imports: params type and return type
  const nsImports = new Map<string, ResolvedNamespace>()
  if (!n.rawTypes.has(method.paramsType)) {
    nsImports.set(sdkPackageName, { packageName: sdkPackageName, ns: n.ns })
  }
  if (!n.rawTypes.has(method.returnType)) {
    nsImports.set(n.returnNsInfo.packageName, n.returnNsInfo)
  }

  return renderHook({
    apiHookName: n.apiHookName,
    apiImportPath: n.apiImportPath,
    nsImports: collectNsImports(nsImports),
    dataLoaderPackage: config.imports.dataLoaderPackage,
    generatedComment: config.generatedComment,
    hookName: `${config.naming.hookPrefix}${hookSuffix}`,
    paramsType: n.paramsType,
    returnType: n.returnType,
    apiVarName: n.apiVarName,
    methodName: method.methodName,
    hasParams: true,
    isAll: false,
    isInfinite: true,
    keyArray: `"${n.apiVarName}", "${method.methodName}", ...Object.entries(params).flat(3).sort()`,
  })
}

/** Generate a reload hook that invalidates all queries for a service. */
export function generateReloadHook(
  service: ServiceMetadata,
  metadata: QueriesMetadata,
  config: ReactQueriesConfig,
): string {
  const { folderName } = metadata
  const apiImportName = `${folderName}${service.apiClass}`

  return renderReload({
    dataLoaderPackage: config.imports.dataLoaderPackage,
    generatedComment: config.generatedComment,
    hookName: `${config.naming.hookPrefix}${capitalize(apiImportName)}Reload`,
    reloadFnName: `${config.naming.reloadPrefix}${capitalize(apiImportName)}`,
    asyncReloadFnName: `async${capitalize(config.naming.reloadPrefix)}${capitalize(apiImportName)}`,
    apiKey: apiImportName.replace(/API$/, ''),
  })
}

/** Generate the barrel index.ts that re-exports all hooks for a namespace. */
export function generateIndexFile(
  services: ServiceMetadata[],
  metadata: QueriesMetadata,
  config: ReactQueriesConfig,
): string {
  const { folderName } = metadata
  const skipMethods = new Set(config.filters.skipMethods)
  const exports: string[] = []

  for (const service of services) {
    const serviceName = `${capitalize(folderName)}${service.apiClass}`

    for (const method of service.methods) {
      if (skipMethods.has(method.methodName)) continue
      if (config.filters.skipPrivateMethods && method.isPrivate) continue

      const baseName = capitalize(method.methodName)
      exports.push(
        `export { ${config.naming.hookPrefix}${serviceName}${baseName}Query } from "./${config.naming.hookPrefix}${serviceName}${baseName}Query"`,
      )

      if (method.isList) {
        exports.push(
          `export { ${config.naming.hookPrefix}${serviceName}${baseName}InfiniteQuery } from "./${config.naming.hookPrefix}${serviceName}${baseName}InfiniteQuery"`,
        )
        if (!(config.filters.skipCursorAllHooks && method.paginationType === 'cursor')) {
          exports.push(
            `export { ${config.naming.hookPrefix}${serviceName}${baseName}AllQuery } from "./${config.naming.hookPrefix}${serviceName}${baseName}AllQuery"`,
          )
        }
      }

      if (method.hasWaiter && !config.filters.skipWaiters) {
        const waiterName = `${config.naming.waiterPrefix}${capitalize(method.methodName.replace(/^get/, ''))}`
        exports.push(
          `export { ${config.naming.hookPrefix}${serviceName}${waiterName}Query } from "./${config.naming.hookPrefix}${serviceName}${waiterName}Query"`,
        )
      }
    }

    exports.push(
      `export { ${config.naming.hookPrefix}${serviceName}Reload } from "./${config.naming.hookPrefix}${serviceName}Reload"`,
    )
  }

  return `${config.generatedComment}

${exports.join('\n')}
`
}
