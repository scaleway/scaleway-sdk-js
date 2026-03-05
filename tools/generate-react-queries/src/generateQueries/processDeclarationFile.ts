import type { SourceFile } from 'ts-morph'
import { extractClassMethods } from './extractClassMethods.ts'
import { capitalizeFirstLetter, toCamelCase } from './helpers.ts'
import { resolveModule } from './resolveModule.ts'
import type { RawResult } from './types.ts'

// Recursive function to dive in all files
export function processDeclarationFile(
  sourceFile: SourceFile,
  namespace: string,
  result: RawResult,
  packageName: string,
): RawResult {
  let copyOfResult = { ...result }
  // Export processing
  // biome-ignore lint/complexity/noForEach: ok
  sourceFile.getExportDeclarations().forEach(exportDecl => {
    const moduleSpecifier = exportDecl.getModuleSpecifierValue()
    if (!moduleSpecifier) {
      return
    }

    const resolvedFile = resolveModule(sourceFile, moduleSpecifier)
    if (!resolvedFile) {
      return
    }

    copyOfResult = {
      ...copyOfResult,
      ...processDeclarationFile(
        resolvedFile,
        `${namespace}_${exportDecl.getNamespaceExport()?.getName() ?? ''}`,
        copyOfResult,
        packageName,
      ),
    }
  })

  // Import processing
  // biome-ignore lint/complexity/noForEach: ok
  sourceFile.getImportDeclarations().forEach(importDecl => {
    const moduleSpecifier = importDecl.getModuleSpecifierValue()
    if (!moduleSpecifier) {
      return
    }

    const resolvedFile = resolveModule(sourceFile, moduleSpecifier)
    if (!resolvedFile) {
      return
    }

    copyOfResult = {
      ...copyOfResult,
      ...processDeclarationFile(
        resolvedFile,
        `${namespace}_${importDecl.getNamespaceImport()?.getText() ?? ''}`,
        copyOfResult,
        packageName,
      ),
    }
  })

  // Extract methods in classes
  // biome-ignore lint/complexity/noForEach: ok
  sourceFile.getClasses().forEach(classDecl => {
    const className = classDecl.getName()
    const prettyNamespace = namespace
      .split('_')
      .filter(aNamespace => aNamespace.length > 0)
    // Take what ends with `API` and is not part of the ignored APIs array.
    if (className?.endsWith('API')) {
      const res = extractClassMethods(
        classDecl,
        // Split with underscores and remove empty strings to get a type in the form of Blockv1alpha1. + ReturnType => Block.v1alpha.Volume.
        prettyNamespace,
        packageName,
      )
      const scope = capitalizeFirstLetter(
        toCamelCase(`${namespace}_${className}`).replaceAll('_', ''),
      )
      // Save the property in camelCase to create the file later.
      copyOfResult[scope] = res
    }
  })

  return copyOfResult
}
