import { defineConfig } from 'tsdown'

export const defaultConfig = defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  unbundle: true,
  target: 'baseline-widely-available',
  platform: 'neutral',
  /*TODO: fix publint */
  publint: false,
  exports: false,
  root: 'src',
  outDir: 'dist',
  minify: false,
  clean: true,
  treeshake: true,
  tsconfig: true,
  dts: { generator: 'tsgo' },
})
