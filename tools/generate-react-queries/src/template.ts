/**
 * Template functions — produce React hook source code as template literals.
 *
 * Each function returns the full file content for one hook type.
 * Variables are passed as typed objects, giving IDE support and type safety.
 */

interface HookVars {
  apiHookName: string
  apiImportPath: string
  needsNsImport: boolean
  ns: string
  sdkPackageName: string
  dataLoaderPackage: string
  generatedComment: string
  hookName: string
  paramsType: string
  returnType: string
  apiVarName: string
  methodName: string
  hasParams: boolean
  isAll: boolean
  isInfinite: boolean
  keyArray: string
}

interface ReloadVars {
  dataLoaderPackage: string
  generatedComment: string
  hookName: string
  reloadFnName: string
  asyncReloadFnName: string
  apiKey: string
}

export function renderHook(v: HookVars): string {
  const imports = [
    `import { ${v.apiHookName} } from "${v.apiImportPath}"`,
    v.needsNsImport ? `import type { ${v.ns} } from "${v.sdkPackageName}"` : '',
    v.isInfinite
      ? `import type { UseInfiniteDataLoaderConfig } from "${v.dataLoaderPackage}"
import { useInfiniteDataLoader } from "${v.dataLoaderPackage}"`
      : `import type { UseDataLoaderConfig } from "${v.dataLoaderPackage}"
import { useDataLoader } from "${v.dataLoaderPackage}"`,
  ]
    .filter(Boolean)
    .join('\n')

  let body: string

  if (v.isInfinite) {
    body = `export const ${v.hookName} = (
  params: ${v.paramsType},
  pageParamKey: keyof typeof params,
  dataloaderConfig?: UseInfiniteDataLoaderConfig<${v.returnType}, Error, typeof params, typeof pageParamKey>,
): ReturnType<typeof useInfiniteDataLoader<${v.returnType}, Error, typeof params, typeof pageParamKey>> => {
  const { ${v.apiVarName} } = ${v.apiHookName}()
  const key = [${v.keyArray}]

  return useInfiniteDataLoader(key, (requestParams) => ${v.apiVarName}.${v.methodName}(requestParams), params, pageParamKey, dataloaderConfig)
}`
  } else if (v.hasParams) {
    body = `export const ${v.hookName} = (
  params: ${v.paramsType},
  dataloaderConfig?: UseDataLoaderConfig<${v.returnType}, Error>,
): ReturnType<typeof useDataLoader<${v.returnType}, Error>> => {
  const { ${v.apiVarName} } = ${v.apiHookName}()
  const key = [${v.keyArray}]

  return useDataLoader(key, () => ${v.apiVarName}.${v.methodName}(params)${v.isAll ? '.all()' : ''}, dataloaderConfig)
}`
  } else {
    body = `export const ${v.hookName} = (
  dataloaderConfig?: UseDataLoaderConfig<${v.returnType}, Error>,
): ReturnType<typeof useDataLoader<${v.returnType}, Error>> => {
  const { ${v.apiVarName} } = ${v.apiHookName}()
  const key = [${v.keyArray}]

  return useDataLoader(key, () => ${v.apiVarName}.${v.methodName}(), dataloaderConfig)
}`
  }

  return `${imports}

${v.generatedComment}
${body}
`
}

export function renderReload(v: ReloadVars): string {
  return `import { useDataLoaderContext } from "${v.dataLoaderPackage}"

${v.generatedComment}
export const ${v.hookName} = (): { ${v.reloadFnName}: () => void; ${v.asyncReloadFnName}: () => Promise<void> } => {
  const dataLoader = useDataLoaderContext()
  const keyPrefix = ["${v.apiKey}"]

  return {
    ${v.reloadFnName}: () => dataLoader.reloadGroupActive(keyPrefix).catch(() => null),
    ${v.asyncReloadFnName}: () => dataLoader.reloadGroupActive(keyPrefix),
  }
}
`
}
