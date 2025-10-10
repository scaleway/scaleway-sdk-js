// ESLint flat config for GENERATED code (packages_generated/)
// More permissive rules suitable for generated TypeScript files

import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  {
    files: ['packages_generated/**/*.ts'],
    ignores: [
      'packages_generated/**/vite.config.ts',
      'packages_generated/**/dist/**',
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'import': importPlugin,
      'unused-imports': unusedImports,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
    rules: {
      // Required: Disable base rules - they are replaced by unused-imports plugin
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      
      // Code optimization
      'object-shorthand': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      
      // Import management (unused-imports plugin)
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: 'defaults|request',
      }],
      'sort-imports': ['error', {
        ignoreDeclarationSort: true,
      }],
      'import/order': ['error', {
        alphabetize: { order: 'asc' },
      }],
      
      // Disable strict rules for generated code
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-useless-escape': 'off',
      'import/no-unresolved': 'off',
    },
  },
]

