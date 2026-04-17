/**
 * Types for metadata-based generation.
 * These types mirror the structure of metadata.gen.ts files in each SDK package.
 */

/** A single API method from metadata */
export interface MetadataMethod {
  methodName: string
  protoName: string
  paramsType: string
  returnType: string
  isList: boolean
  paginationType?: 'offset' | 'cursor' | 'none'
  pageParamKey?: string
  listItemType?: string
  isPrivate: boolean
  description?: string
  hasWaiter?: boolean
}

/** A service class (e.g. "API", "ZonedAPI") from metadata */
export interface MetadataService {
  apiClass: string
  methods: MetadataMethod[]
}

/** Top-level metadata from metadata.gen.ts */
export interface Metadata {
  namespace: string
  version: string
  folderName: string
  services: MetadataService[]
}

/** Processed result for code generation */
export type ProcessedMetadata = {
  [namespace: string]: {
    packageName: string
    apis: string[]
  }
}
