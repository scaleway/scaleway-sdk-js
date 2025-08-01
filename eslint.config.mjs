import scwTypescript from '@scaleway/eslint-config-react/typescript'
import typescriptParser from '@typescript-eslint/parser'
import tsdoc from 'eslint-plugin-tsdoc'

const scwPlugins = scwTypescript.reduce((acc, config) => {
  return { ...acc, ...config.plugins }
}, {})

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
      '**/examples/',
      '**/vite.config.ts',
      'packages/clients/.eslintrc.cjs',
      'packages/client/.eslintrc.cjs',
      'eslint.config.mjs',
      'packages/clients/src/vendor/base64/index.js',
      'packages/client/src/vendor/base64/index.js',
      'packages/configuration-loader/.eslintrc.cjs',
      'scripts/generatePackages.ts',
      'scripts/*.ts',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',
      parser: typescriptParser,
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
    plugins: {
      tsdoc,
      ...scwPlugins,
    },
    rules: {
      'tsdoc/syntax': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'enumMember',
          format: ['PascalCase'],
        },
      ],
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'error',
      'no-await-in-loop': 'off',
      '@typescript-eslint/no-namespace': 'off',
    },
  },

  ...scwTypescript.map(config => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...config.rules,
      //new rules
      'no-restricted-syntax': 'warn',
      'no-useless-escape': 'warn',
      'max-classes-per-file': 'warn',
      'no-underscore-dangle': 'warn',
      'no-await-in-loop': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'warn',
      '@typescript-eslint/ban-types': 'warn',
    },
  })),

  ...scwTypescript.map(config => ({
    ...config,
    files: [
      './packages/clients/src/scw/**/*.ts',
      './packages/clients/src/internal/**/*.ts',
    ],
    rules: {
      ...config.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  })),

  ...scwTypescript.map(config => ({
    ...config,
    files: [
      '**/*.test.ts',
      '__tests__/**/*.ts',
      '**/vite.config.ts',
      'vitest.config.ts',
    ],
    rules: {
      ...config.rules,
      'import/no-extraneous-dependencies': 'off',
    },
  })),

  ...scwTypescript.map(config => ({
    ...config,
    files: [
      'packages_generated/dedibox/src/v1/*.ts',
      'packages/clients/src/api/dedibox/v1/*.ts',
    ],
    rules: {
      ...config.rules,
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'max-classes-per-file': 'off',
      'no-restricted-syntax': 'off',
    },
  })),
]
