import type { ClassDeclaration } from 'ts-morph'
import { SyntaxKind } from 'ts-morph'
import { ignoredClassnames, rawStringTypes } from './config.ts'
import type { ApiClassEntry } from './types.ts'

// Function to clean the type: remove `import(...)` and keep only the type name.
function cleanType(type: string): string {
  // Extract the type without import(...) and spaces
  const match = type.match(/(?:import\(".*"\)\.)?(\w+(\[\])?)/)

  return match ? (match[1] ?? '') : type.trim()
}
// Function to extract the methods, the type of the first parameter, and their return types in a class
export function extractClassMethods(
  classDecl: ClassDeclaration,
  namespaces: string[],
  packageName: string,
): ApiClassEntry {
  const methods: ApiClassEntry = {}

  // Copy without the class; we could have filtered out the last element, but this way it makes the code more readable.
  const namespaceWithoutClass = [...namespaces]
  namespaces.push(classDecl.getName() ?? '')

  for (const member of classDecl.getMembers()) {
    // Filter only on property
    if (
      member.isKind(SyntaxKind.PropertyDeclaration) &&
      (member.getName().startsWith('get') ||
        member.getName().startsWith('list') ||
        member.getName().startsWith('search'))
    ) {
      const propertyName = member.getName()
      // Do not include
      if (ignoredClassnames.includes(propertyName)) {
        // oxlint-disable-next-line eslint/no-continue
        continue
      }

      // Retrieve the name of the return type (usually `Promise<import(...).THE_INTERESTING_PART>`). For lists, there's an additional part with `& { all: () => Promise<.....> }`.
      let returnType = member
        .getType()
        .getCallSignatures()[0]
        ?.getReturnType()
        .getText()

      // First parameter of the function: remove `Readonly<>` and strip the long `import(....)` text, keeping only the type at the end.
      let paramsType =
        member
          .getType()
          .getCallSignatures()[0]
          ?.getParameters()[0]
          ?.getDeclarations()[0]
          ?.getType()
          .getText() ?? ''
      if (paramsType.startsWith('Readonly<') && paramsType.endsWith('>')) {
        paramsType = paramsType.slice(8, -1)
        paramsType = cleanType(paramsType)
        paramsType = rawStringTypes.includes(paramsType)
          ? paramsType
          : [...namespaceWithoutClass, paramsType].join('.')
      }

      if (returnType) {
        // Verify if the type has all method
        // Verify if the type has all method
        // const allMatch = returnType.match(/& \{ all: \(\) => Promise<(.*?)>; /)
        const allMatch = returnType.match(
          /& \{[^}]*all: \(\) => Promise<(.*?)>;[^}]*\}/,
        )
        if (allMatch?.[1]) {
          // Extract the type in the Promise (before & {all...})
          const mainPromiseMatch = returnType.match(/^Promise<([^>]+)>/)
          if (mainPromiseMatch?.[1]) {
            const mainType = cleanType(mainPromiseMatch[1])
            methods[propertyName] = {
              isAll: false,
              isInfinite: false,
              methodName: propertyName,
              namespaces,
              packageName,
              paramsType,
              returnType: rawStringTypes.includes(mainType)
                ? mainType
                : [...namespaceWithoutClass, mainType].join('.'),
            }
            methods[`${propertyName}Infinite`] = {
              isAll: false,
              isInfinite: true,
              methodName: propertyName,
              namespaces,
              packageName,
              paramsType,
              returnType: rawStringTypes.includes(mainType)
                ? mainType
                : [...namespaceWithoutClass, mainType].join('.'),
            }
          }

          // Extract the all method return type
          const allType = cleanType(allMatch[1])
          methods[`${propertyName}All`] = {
            isAll: true,
            isInfinite: false,
            methodName: propertyName,
            namespaces,
            packageName,
            paramsType,
            returnType: rawStringTypes.includes(allType)
              ? allType
              : [...namespaceWithoutClass, allType].join('.'),
          }
        } else {
          // Not list case : Extract the type in Promise<>
          if (returnType.startsWith('Promise<') && returnType.endsWith('>')) {
            // Retirer `Promise<` et `>`
            returnType = returnType.slice(8, -1)
          }
          const cleanedReturnType = cleanType(returnType)
          methods[propertyName] = {
            isAll: false,
            isInfinite: false,
            methodName: propertyName,
            namespaces,
            packageName,
            paramsType,
            returnType: rawStringTypes.includes(cleanedReturnType)
              ? cleanedReturnType
              : [...namespaceWithoutClass, cleanedReturnType].join('.'),
          }
        }
      }
    }
  }

  /* Example after processing :
   {
    "listDediboxHostings": {
      "methodName": "listDediboxHostings",
      "returnType": "Webhostingv1alpha1.ListDediboxHostingsResponse",
      "paramsType": "Webhostingv1alpha1.DediboxApiListDediboxHostingsRequest",
      "namespaces": [
        "Webhosting",
        "v1alpha1",
        "DediboxAPI"
      ],
      "isAll": false
    },
    "listDediboxHostingsAll": {
      "methodName": "listDediboxHostings",
      "returnType": "Webhostingv1alpha1.DediboxHosting[]",
      "paramsType": "Webhostingv1alpha1.DediboxApiListDediboxHostingsRequest",
      "namespaces": [
        "Webhosting",
        "v1alpha1",
        "DediboxAPI"
      ],
      "isAll": true
    }
  }
  */
  return methods
}
