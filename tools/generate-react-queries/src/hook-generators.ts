/**
 * Hook generators — turn metadata into React hook source code.
 *
 * Each public function produces the source code for one hook file
 * using template literal functions from ./template.ts.
 */

import type { QueriesMetadata, QueryMethod, ReactQueriesConfig, ServiceMetadata } from './config.ts'
import { capitalize, lowerCaseFirst } from './config.ts'
import { renderHook, renderReload } from './template.ts'

// --- Naming helpers (build hook names, import paths, and qualified types) ---

/** Derive all naming conventions for a given method + service combination. */
function resolveNames(
  method: QueryMethod,
  service: ServiceMetadata,
  metadata: QueriesMetadata,
  config: ReactQueriesConfig,
  sdkPackageName: string,
) {
  const { folderName } = metadata
  const rawTypes = new Set(config.filters.rawTypes)

  const apiImportName = `${folderName}${service.apiClass}`
  const apiHookName = `${config.naming.hookPrefix}${capitalize(apiImportName)}`
  const apiVarName = apiImportName.replace(/API$/, '')
  const apiImportPath = `${config.imports.apiSdkPath}/${lowerCaseFirst(apiImportName)}`

  const paramsType = method.paramsType
  const returnType = method.returnType
  const returnTypeNamespace = method.returnTypeNamespace
  const listItemType = method.listItemType
  const listItemTypeNamespace = method.listItemTypeNamespace

  return {
    folderName,
    apiHookName,
    apiVarName,
    apiImportPath,
    sdkPackageName,
    paramsType,
    returnType,
    returnTypeNamespace,
    listItemType,
    listItemTypeNamespace,
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
): string {
  const n = resolveNames(method, service, metadata, config, sdkPackageName)
  const hasParams = !!method.paramsType
  const hookSuffix = `${capitalize(metadata.folderName)}${service.apiClass}${capitalize(method.methodName)}Query`

  const needsNsImport = !n.rawTypes.has(n.returnType) || (hasParams && !n.rawTypes.has(n.paramsType))

  const keyArray = hasParams
    ? `"${n.apiVarName}", "${method.methodName}", ...Object.entries(params).flat(3).sort()`
    : `"${n.apiVarName}", "${method.methodName}"`

  return renderHook({
    apiHookName: n.apiHookName,
    apiImportPath: n.apiImportPath,
    needsNsImport,
    sdkPackageName: n.sdkPackageName,
    dataLoaderPackage: config.imports.dataLoaderPackage,
    generatedComment: config.generatedComment,
    hookName: `${config.naming.hookPrefix}${hookSuffix}`,
    paramsType: n.paramsType,
    returnType: n.returnType,
    returnTypeNamespace: n.returnTypeNamespace,
    listItemType: n.listItemType,
    listItemTypeNamespace: n.listItemTypeNamespace,
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
): string {
  const n = resolveNames(method, service, metadata, config, sdkPackageName)
  const hookSuffix = `${capitalize(metadata.folderName)}${service.apiClass}${capitalize(method.methodName)}AllQuery`

  // if on a AllQuery method then we append "[]" to the type returned
  const itemReturnedType = method.listItemType ? `${method.listItemType}[]` : n.returnType

  return renderHook({
    apiHookName: n.apiHookName,
    apiImportPath: n.apiImportPath,
    needsNsImport: true,
    sdkPackageName: n.sdkPackageName,
    dataLoaderPackage: config.imports.dataLoaderPackage,
    generatedComment: config.generatedComment,
    hookName: `${config.naming.hookPrefix}${hookSuffix}`,
    paramsType: n.paramsType,
    returnType: itemReturnedType,
    returnTypeNamespace: n.returnTypeNamespace,
    listItemType: n.listItemType,
    listItemTypeNamespace: n.listItemTypeNamespace,
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
): string {
  const n = resolveNames(method, service, metadata, config, sdkPackageName)
  const hookSuffix = `${capitalize(metadata.folderName)}${service.apiClass}${capitalize(method.methodName)}InfiniteQuery`

  return renderHook({
    apiHookName: n.apiHookName,
    apiImportPath: n.apiImportPath,
    needsNsImport: true,
    sdkPackageName: n.sdkPackageName,
    dataLoaderPackage: config.imports.dataLoaderPackage,
    generatedComment: config.generatedComment,
    hookName: `${config.naming.hookPrefix}${hookSuffix}`,
    paramsType: n.paramsType,
    returnType: n.returnType,
    returnTypeNamespace: n.returnTypeNamespace,
    listItemType: n.listItemType,
    listItemTypeNamespace: n.listItemTypeNamespace,
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
