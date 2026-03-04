import type { SourceFile } from 'ts-morph'

export type ProcessDeclarationFileProps = {
  sourceFile: SourceFile
  namespace: string
  result: ProcessDeclaration
  packageName: string
}

export type ProcessDeclaration = {
  [x: string]: {
    packageName: string
    apis: string[]
  }
}
