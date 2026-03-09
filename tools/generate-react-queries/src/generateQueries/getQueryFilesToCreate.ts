import { customNS, fallbackNamespace } from './config.ts'
import { getQueryFileContent } from './getQueryFileContent.ts'
import type { FileToCreateWithNamespace, TransformedResult } from './types.ts'

// For each entry, a file will be created in the `generated` folder in the format `use + Key of transformedResult + Query.ts`, and the file will be filled with the content.
export const getQueryFilesToCreate = ({
  transformedResult,
  apiPath,
}: {
  transformedResult: TransformedResult
  apiPath: string
}) =>
  Object.entries(transformedResult).reduce<FileToCreateWithNamespace>(
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

      const apiToUse = product + name

      return {
        ...filesToCreate,
        [methodInfo.namespaces[0] ?? fallbackNamespace]: [
          ...(filesToCreate[methodInfo.namespaces[0] ?? fallbackNamespace] ??
            []),
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
      }
    },
    {},
  )
