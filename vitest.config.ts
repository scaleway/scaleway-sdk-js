import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'cobertura'],
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
})
