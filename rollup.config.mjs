import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import inject from '@rollup/plugin-inject'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { dirname } from 'path'
import { readPackage } from 'read-pkg'
import dts from 'rollup-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'

const PROFILE = !!process.env.PROFILE

const pkg = await readPackage()

const targets = node => node ? `
  node > 14
` : `
  > 1%,
  last 2 versions,
  not IE > 0,
  not IE_Mob > 0
`
const externalDependencies= [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.optionalDependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

const external = id => {
  const match = dependency => new RegExp(dependency).test(id)
  const isExternal = externalDependencies.some(match)
  const isBundled = pkg.bundleDependencies?.some(match) // alias of bundledDependencies package.json field array

  return isExternal && ! isBundled
}

const plugins = ({node}) => [
  babel({
    babelHelpers: 'runtime',
    babelrc: false,
    exclude: 'node_modules/**',
    extensions: ['.ts'],
    plugins: [
      'babel-plugin-annotate-pure-calls',
      '@babel/plugin-transform-runtime',
    ],
    presets: [
      '@babel/preset-typescript',
      ['@babel/env', { loose: true, modules: false, targets: targets(node) }],
    ],
  }),
  node && inject({
    fetch: 'cross-fetch',
    Request: ['cross-fetch', 'Request'],
    Response: ['cross-fetch', 'Response'],
    Headers: ['cross-fetch', 'Headers'],
  }),
  commonjs(),
  nodeResolve({
    extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
    preferBuiltins: true,
  }),
  PROFILE &&
    visualizer({
      brotliSize: true,
      filename: '.reports/index.html',
      gzipSize: true,
      open: true,
    }),
].filter(Boolean)

export default [
  {
    external,
    input: './src/index.ts',
    output: {
      dir: dirname(pkg.module||pkg.main),
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: './src',
    },
    plugins: plugins({ node: false })
  },
  // specific build for node (inject cross-fetch & use cjs bundle)
  pkg.main !== pkg.module && {
    external,
    input: './src/index.ts',
    output: {
      file: pkg.main,
      format: 'cjs',
      inlineDynamicImports: true,
    },
    plugins: plugins({ node: true })
  },
  pkg.types && {
    input: './src/index.ts',
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [dts()],
  },
].filter(Boolean)
