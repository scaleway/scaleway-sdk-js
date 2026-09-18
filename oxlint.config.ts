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
    'eslint/no-unused-vars': 'warn',

    // Downgrade base-preset error rules to warn (to be fixed and re-enabled as error)
    // eslint rules
    'eslint/no-await-in-loop': 'warn',
    'eslint/prefer-named-capture-group': 'warn',
    'eslint/require-unicode-regexp': 'warn',
    // typescript rules
    'typescript/explicit-member-accessibility': 'warn',
    'typescript/no-unnecessary-condition': 'warn',
    'typescript/no-unnecessary-type-parameters': 'warn',
    'typescript/no-unsafe-type-assertion': 'warn',
    'typescript/only-throw-error': 'warn',
    'typescript/parameter-properties': 'warn',
    'typescript/promise-function-async': 'warn',
    'typescript/strict-boolean-expressions': 'warn',
    // unicorn rules
    'unicorn/error-message': 'warn',
    'unicorn/prefer-type-error': 'warn',
  },
  overrides: [
    {
      files: ['tools/**', 'vite.config.ts', 'packages/configuration-loader/**'],
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
