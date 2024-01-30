import { type UserConfig, defineConfig } from 'vite'

const defaultConfig: UserConfig = {
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '.reports/**',
        '**/.eslintrc.*',
        'dist',
        '**/examples/**',
        '**/packages/clients/src/api/*',
        '**/*.d.ts',
      ],
    },
  },
}

export default defineConfig(defaultConfig)
