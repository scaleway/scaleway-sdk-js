import { readPackage } from 'read-pkg'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

const pkg = await readPackage()

const externalPkgs = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.optionalDependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

const external = (id: string) => {
  const match = (dependency: string) => new RegExp(`^${dependency}`).test(id)
  const isExternal = externalPkgs.some(match)
  const isBundled = pkg.bundleDependencies?.some(match) // alias of bundleDependencies package.json field array

  return isExternal && !isBundled
}

export const defaultConfig: UserConfig = defineConfig({
  build: {
    outDir: 'dist',
    target: 'baseline-widely-available',
    minify: false,
    ssr: true,
    emptyOutDir: true,
    lib: {
      name: pkg.name,
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: (format, filename) => {
        if (format === 'es') {
          return `${filename}.js`
        }

        return `${filename}.${format}`
      },
    },
    rolldownOptions: {
      external,
      optimization: {
        inlineConst: {
          mode: 'smart',
        },
        pifeForModuleWrappers: true,
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      platform: 'browser',
      preserveEntrySignatures: 'exports-only',
      treeshake: true,
      tsconfig: true,
    },
  },
})

export default defaultConfig
