import tsPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
      '**/examples/',
      '**/vite.config.ts',
      'vite.config.ts',
      'packages/clients/.eslintrc.cjs',
      'eslint.config.mjs',
      'packages/clients/src/vendor/base64/index.js',
    ],
  },
  {
    files: ['packages_generated/**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: null, 
      },
    },
    plugins: {
      'unused-imports': unusedImports,
      import: importPlugin,
    },
    rules: {
      'object-shorthand': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'all',
          argsIgnorePattern: 'defaults|request',
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
      'no-useless-escape': 'off',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },
]
