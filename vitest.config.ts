import { defineConfig, mergeConfig } from 'vitest/config'
import { defaultConfig } from './vite.config'

export const defaultVitestConfig = mergeConfig(
  defaultConfig,
  defineConfig({
    test: {
      coverage: {
        enabled: true,
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        exclude: [
          '.reports/**',
          '**/.eslintrc.json.*',
          'dist',
          '**/examples/**',
          '**/packages/clients/src/api/*',
          '**/*.d.ts',
        ],
      },
    },
  }),
)

export default defaultVitestConfig
