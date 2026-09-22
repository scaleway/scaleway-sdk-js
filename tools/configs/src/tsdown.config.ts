import { defineConfig } from 'tsdown'

export const defaultConfig = defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  unbundle: true,
  root: 'src',
  outDir: 'dist',
  minify: false,
  clean: true,
  platform: 'browser',
  treeshake: true,
  tsconfig: true,
  dts: { generator: 'tsgo' },
})
