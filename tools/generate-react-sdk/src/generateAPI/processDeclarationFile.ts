import { resolveModule } from './resolveModule.ts'
import type {
  ProcessDeclaration,
  ProcessDeclarationFileProps,
} from './types.ts'

// Recursive function to dive in all files
export function processDeclarationFile({
  sourceFile,
  namespace,
  result,
  packageName,
}: ProcessDeclarationFileProps): ProcessDeclaration {
  let copyOfResult = { ...result }
  // Export processing
  for (const exportDecl of sourceFile.getExportDeclarations()) {
    const moduleSpecifier = exportDecl.getModuleSpecifierValue()
    if (!moduleSpecifier) {
      break
    }

    const resolvedFile = resolveModule(sourceFile, moduleSpecifier)
    if (!resolvedFile) {
      break
    }

    copyOfResult = {
      ...copyOfResult,
      ...processDeclarationFile({
        namespace: `${namespace}_${exportDecl.getNamespaceExport()?.getName() ?? ''}`,
        packageName,
        result: copyOfResult,
        sourceFile: resolvedFile,
      }),
    }
  }

  // Import processing
  for (const importDecl of sourceFile.getImportDeclarations()) {
    const moduleSpecifier = importDecl.getModuleSpecifierValue()
    if (!moduleSpecifier) {
      break
    }

    const resolvedFile = resolveModule(sourceFile, moduleSpecifier)

    if (!resolvedFile) {
      break
    }

    // const newNS = `${namespace}_${importDecl.getNamespaceImport()?.getText() ?? ''}`

    copyOfResult = {
      ...copyOfResult,
      ...processDeclarationFile({
        namespace,
        packageName,
        result: copyOfResult,
        sourceFile: resolvedFile,
      }),
    }
  }

  for (const classDecl of sourceFile.getClasses()) {
    let className = classDecl.getName()
    if (className === 'InstanceV1UtilsAPI') {
      // instanceAPI is not well exported
      className = 'API'
    }
    if (
      className &&
      // theses API are manually set inside the SDK himself ...
      !['K8SUtilsAPI', 'InstanceV1UtilsAPI'].includes(className)
    ) {
      const prettyNamespace =
        namespace.split('_').filter(aNamespace => aNamespace.length > 0)[0] ??
        ''

      // Take what ends with `API` and is not part of the ignored APIs array.
      const namespaceApi = {
        [prettyNamespace]: {
          apis: [
            ...new Set([
              ...(copyOfResult[prettyNamespace]?.apis ?? []),
              className,
            ]),
          ],
          packageName,
        },
      }
      Object.assign(copyOfResult, namespaceApi)
    }
  }

  return copyOfResult
}
