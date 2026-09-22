import { base, ignorePatterns, react } from '@scaleway/oxlint-config'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [base, react],
  options: {
    reportUnusedDisableDirectives: 'warn',
    typeAware: true,
    typeCheck: false,
  },
  ignorePatterns: [
    ...ignorePatterns,
    '**/app.config.d.ts',
    '**/package.config.d.ts',
    '**/*.mjs',
    'packages_generated/**',
    'examples/**',
    'tools/generate-react-sdk/src/types.generated.ts',
    'packages/client/src/vendor/**',
  ],
  rules: {
    'eslint/no-console': 'warn',
    'eslint/no-unused-vars': 'error',

    // Downgrade base-preset error rules to warn (to be fixed and re-enabled as error)
    // typescript rules
  },
  overrides: [
    {
      files: ['tools/**', 'tsdown.config.ts', 'packages/configuration-loader/**'],
      rules: {
        'import/no-nodejs-modules': 'off',
      },
    },
    {
      files: ['tools/pnpm-auto-release/**'],
      rules: {
        'node/no-process-env': 'off',
      },
    },
  ],
})
