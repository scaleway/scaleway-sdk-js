/**
 * Hook generators — turn metadata into React hook source code using .tmpl templates.
 *
 * Each public function produces the source code for one hook file.
 * Templates live in ../templates/ and use {{var}} / {{#if}} / {{#unless}} syntax.
 */

import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type {
  QueriesMetadata,
  QueryMethod,
  ReactQueriesConfig,
  ServiceMetadata,
} from './config.ts'
import { capitalize, lowerCaseFirst } from './config.ts'
import { evaluate, parse } from './template.ts'

// --- Pre-parsed templates (parsed once at module load, evaluated many times) ---

const templatesDir = join(fileURLToPath(import.meta.url), '../../templates')
const hookTemplate = parse(
  readFileSync(join(templatesDir, 'hook.tmpl'), 'utf-8'),
)
const reloadTemplate = parse(
  readFileSync(join(templatesDir, 'reload.tmpl'), 'utf-8'),
)

// --- Naming helpers (build hook names, import paths, and qualified types) ---

/** Qualify a type with namespace prefix, unless it's a raw type (string, Blob, etc.). */
function nsType(ns: string, type: string, rawTypes: Set<string>): string {
  return rawTypes.has(type) ? type : `${ns}.${type}`
}

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

  const ns = capitalize(folderName)
  const paramsType = nsType(ns, method.paramsType, rawTypes)
  const returnType = nsType(ns, method.returnType, rawTypes)

  return {
    folderName,
    apiHookName,
    apiVarName,
    apiImportPath,
    sdkPackageName,
    ns,
    paramsType,
    returnType,
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

  const needsNsImport =
    n.returnType.startsWith(`${n.ns}.`) ||
    (hasParams && n.paramsType.startsWith(`${n.ns}.`))

  const keyArray = hasParams
    ? `"${n.apiVarName}", "${method.methodName}", ...Object.entries(params).flat(3).sort()`
    : `"${n.apiVarName}", "${method.methodName}"`

  return evaluate(hookTemplate, {
    apiHookName: n.apiHookName,
    apiImportPath: n.apiImportPath,
    needsNsImport,
    ns: n.ns,
    sdkPackageName: n.sdkPackageName,
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
): string {
  const n = resolveNames(method, service, metadata, config, sdkPackageName)
  const hookSuffix = `${capitalize(metadata.folderName)}${service.apiClass}${capitalize(method.methodName)}AllQuery`

  const rawItemType = method.listItemType
  const itemType = rawItemType
    ? nsType(n.ns, rawItemType, n.rawTypes)
    : n.returnType

  return evaluate(hookTemplate, {
    apiHookName: n.apiHookName,
    apiImportPath: n.apiImportPath,
    needsNsImport: true,
    ns: n.ns,
    sdkPackageName: n.sdkPackageName,
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
): string {
  const n = resolveNames(method, service, metadata, config, sdkPackageName)
  const hookSuffix = `${capitalize(metadata.folderName)}${service.apiClass}${capitalize(method.methodName)}InfiniteQuery`

  return evaluate(hookTemplate, {
    apiHookName: n.apiHookName,
    apiImportPath: n.apiImportPath,
    needsNsImport: true,
    ns: n.ns,
    sdkPackageName: n.sdkPackageName,
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

  return evaluate(reloadTemplate, {
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
        if (
          !(
            config.filters.skipCursorAllHooks &&
            method.paginationType === 'cursor'
          )
        ) {
          exports.push(
            `export { ${config.naming.hookPrefix}${serviceName}${baseName}AllQuery } from "./${config.naming.hookPrefix}${serviceName}${baseName}AllQuery"`,
          )
        }
      }

      if (method.hasWaiter) {
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
