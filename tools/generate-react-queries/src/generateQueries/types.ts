export type MethodEntry = {
  packageName: string
  methodName: string
  returnType: string
  paramsType: string
  namespaces: string[]
  isAll: boolean
  isInfinite: boolean
}

export type ApiClassEntry = {
  [x: string]: MethodEntry
}

export type FileToCreateWithNamespace = {
  // key is the namespace it must be lowerCamelCase
  [x: string]: {
    fileName: string
    fileContent: string
  }[]
}

export type RawResult = Record<string, ApiClassEntry>
export type TransformedResult = Record<string, MethodEntry>
