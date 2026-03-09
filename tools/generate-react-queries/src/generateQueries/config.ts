/*
  # Information

  ## Use of _

  I use `_` to later transform into camelCase, but also to split namespaces and retrieve the path. For example:
  - `Block_v1alpha1_ExempleAPI`: becomes `useBlockv1alpha1ExempleAPIQuery` and `Blockv1alpha1.ExempleAPI`.
  - `Block_v1alpha1_API`: becomes `useBlockv1alpha1APIQuery` and `Blockv1alpha1.API`.

  ## Excluding Certain Queries

  - Use the `namespacesUseAPIMatrix` and include the full namespace, e.g., `"Blockv1alpha1.API"`, with the corresponding value in `APIProvider`.
    This behavior should evolve and be improved so that on the `APIProvider` side, a complete generation of namespaces provided by the SDK is achieved using the following naming pattern:
    - `Block_v1alpha1_ExempleAPI` → `blockV1alpha1ExempleAPI`.
    - `Block_v1alpha1_API` → `blockV1alpha1API`, returned by `useAPI`.

  - Use the `ignoredQueries` object and set the full namespace, e.g., `"Blockv1alpha1.API"`, as the key and the method to ignore, e.g., `"listMailboxes"`, as the value.
*/

import { Project } from 'ts-morph'

// Load the entry file
export const project = new Project()

// ignored className
export const ignoredClassnames = ['getServiceInfo']

export const customNS = new Map([
  ['Instancev1', 'InstanceV1UtilsAPI'],
  ['K8Sv1', 'K8SUtilsAPI'],
])

export const ignoredNamespaces = ['']

// We dont want these types to be suffixed by namespaces
export const rawStringTypes = ['string', 'Blob', 'string[]']

// We use this in case there are no main namespace for the query
export const fallbackNamespace = 'globals'
export const dirNameOfGenQueriesInNS = 'generated'
// const dirNameOfCustomQueriesInNS = 'custom'

// // We use this to not remove namespace directories that has only custom queries. We dont keep folders that has no queries inside
// export const onlyCustomNamespace = [
//   '',
//   // 'incidents', 'S3', 'SQS', 'SNS'
// ].filter(namespace => {
//   if (
//     existsSync(join(directoryOfSrcFolder, namespace.toLowerCase())) &&
//     readdirSync(join(directoryOfSrcFolder, namespace.toLowerCase())).length > 0
//   ) {
//     return true
//   }

//   stdout.write(
//     `!${namespace.toLowerCase()} namespace provided but no namespace folder found or do not have any file or folder inside. If you do not want this please ensure the folder is lowercased\n`,
//   )

//   return false
// })
