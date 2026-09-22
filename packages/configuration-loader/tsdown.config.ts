import { tsdownConfig } from '@repo/configs'
import { defineConfig, mergeConfig } from 'tsdown'

export default mergeConfig(
  tsdownConfig,
  defineConfig({
    entry: ['src/**/*.ts', '!src/**/*.test.ts', '!src/**/__tests__/**'],
  }),
)
