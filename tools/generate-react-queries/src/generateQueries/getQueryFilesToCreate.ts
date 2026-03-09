import { customNS, fallbackNamespace } from './config.ts'
import { getQueryFileContent } from './getQueryFileContent.ts'
import { getReloadFileContent } from './getReloadFileContent.ts'
import type { FileToCreateWithNamespace, TransformedResult } from './types.ts'

// For each entry, a file will be created in the `generated` folder in the format `use + Key of transformedResult + Query.ts`, and the file will be filled with the content.
export const getQueryFilesToCreate = ({
  transformedResult,
  apiPath,
}: {
  transformedResult: TransformedResult
  apiPath: string
}) => {
  // For each namespace extract unique apis to generate useReload hooks
  const apisByNamespace = new Map<string, undefined | Set<string>>()

  const filesToCreate = Object.entries(
    transformedResult,
  ).reduce<FileToCreateWithNamespace>(
    (filesToCreate, [fileName, methodInfo]) => {
      let finalFileName = `use${fileName}Query.ts`
      const product = methodInfo.namespaces[0] ?? ''
      let name = methodInfo.namespaces[1] ?? ''

      // this if is only here to handle custom namespace like instance and k8s
      // they have a manual export name *UtilsAPI which is an extends of the API Class
      if (
        [...customNS.keys()].includes(product) &&
        customNS.get(product) === name
      ) {
        finalFileName = finalFileName.replace(name, 'API')
        name = 'API'
      }

      const namespace = methodInfo.namespaces[0] ?? fallbackNamespace
      const apiToUse = product + name

      const nsSet = apisByNamespace.get(namespace) ?? new Set<string>()
      nsSet.add(apiToUse)
      apisByNamespace.set(namespace, nsSet)

      return Object.assign(filesToCreate, {
        [namespace]: [
          ...(filesToCreate[namespace] ?? []),
          {
            fileContent: getQueryFileContent({
              apiPath,
              apiToUse,
              fileName: finalFileName.split('.')[0] ?? '',
              isAll: methodInfo.isAll,
              isInfinite: methodInfo.isInfinite,
              mainNamespace: methodInfo.namespaces[0] ?? '',
              methodParamsType: methodInfo.paramsType,
              methodReturnType: methodInfo.returnType,
              methodToUse: methodInfo.methodName,
              packageName: methodInfo.packageName,
            }),
            fileName: finalFileName,
          },
        ],
      })
    },
    {},
  )

  // Generate useReload hooks
  return apisByNamespace
    .entries()
    .reduce<FileToCreateWithNamespace>((filesToCreate, [namespace, apis]) => {
      if (!apis) {
        return filesToCreate
      }
      return Object.assign(filesToCreate, {
        [namespace]: [
          ...(filesToCreate[namespace] ?? []),
          ...apis.values().map(apiToUse => ({
            fileContent: getReloadFileContent({ apiToUse }),
            fileName: `use${apiToUse}Reload.ts`,
          })),
        ],
      })
    }, filesToCreate)
}
