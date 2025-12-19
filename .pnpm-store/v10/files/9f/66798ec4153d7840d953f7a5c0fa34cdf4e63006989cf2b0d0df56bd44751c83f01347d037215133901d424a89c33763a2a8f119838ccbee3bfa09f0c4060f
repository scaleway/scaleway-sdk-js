import { rules } from '@emotion/eslint-plugin'
import { fixupPluginRules } from '@eslint/compat'

export default [
  {
    plugins: {
      '@emotion': fixupPluginRules({ rules }),
    },

    rules: {
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['css'],
        },
      ],

      '@emotion/import-from-emotion': 'error',
      '@emotion/no-vanilla': 'error',
      '@emotion/styled-import': 'error',
      '@emotion/syntax-preference': ['error', 'string'],
    },
  },
]
