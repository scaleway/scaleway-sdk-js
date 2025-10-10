export type SDK = {
  path: string
  index: string
  type: 'public'
}

type PackageJSON = {
  name: string
  version: string
  path: string
  dependencies?: {
    [key: string]: string
  }
  devDependencies?: {
    [key: string]: string
  }
  peerDependencies?: {
    [key: string]: string
  }
  optionalDependencies?: {
    [key: string]: string
  }
}
