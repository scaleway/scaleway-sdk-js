module.exports = {
  extends: [
    'airbnb/hooks',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    curly: 'error',
    'import/order': [
      // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/order.md
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc',
        },
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],
    // Here we override airbnb default with our repos dev patterns
    // https://github.com/airbnb/javascript/blob/81157eec2309449b31f36bf8940493623f2530c6/packages/eslint-config-airbnb-base/rules/imports.js#L71
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/.jest/**',
          '**/.storybook/**',
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          '**/__stories__/**', // stories pattern
          'test.{js,jsx,ts,tsx}', // repos with a single test file
          'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.{js,ts,mjs,mts}', // jest config
          '**/jest.setup.{js,ts,mjs,mts}', // jest setup
          '**/webpack.config.{js,ts,mjs,mts}', // webpack config
          '**/webpack.config.*.{js,ts,mjs,mts}', // webpack config
          '**/rollup.config.{js,ts,mjs,mts}', // rollup config
          '**/rollup.config.*.{js,ts,mjs,mts}', // rollup config
        ],
        optionalDependencies: false,
      },
    ],
    // We allow named and default export
    'import/prefer-default-export': 'off',
    // This allows us to reenable ForOfStatement.
    // While this has been disabled in airbnb configuration it's native to the browsers we support
    // so the original argument about weight is no up to date https://github.com/airbnb/javascript/issues/1271
    'no-restricted-syntax': [
      // https://eslint.org/docs/rules/no-restricted-syntax#disallow-specified-syntax-no-restricted-syntax
      'error',
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement',
      },
      {
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement',
      },
      {
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement',
      },
      {
        message: '`export *` is forbidden.',
        selector: 'ExportAllDeclaration',
      },
    ],
    // This is to have a more breathable codebase
    'padding-line-between-statements': [
      // https://eslint.org/docs/rules/padding-line-between-statements
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
    ],
    // As we don't really care about the function type
    'react/function-component-definition': 'off',

    // These are rules soon to be enabled by airbnb react config
    // We're getting a head start
    'react/no-adjacent-inline-elements': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
    'prefer-object-has-own': 'error', // https://eslint.org/docs/rules/prefer-object-has-own

    // Prevent uneeded rerender with object as default props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/c8f2813758dea1759ba5ab8caf1920cae9417a43/docs/rules/no-object-type-as-default-prop.md
    'react/no-object-type-as-default-prop': 'error',

    // We don't use babel-preset-airbnb so we can make those changes
    'react/static-property-placement': ['error', 'static public field'],
    'react/state-in-constructor': ['error', 'never'],

    // To have consistent ordering in proptypes
    'react/sort-prop-types': [
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
      'error',
      { ignoreCase: true, requiredFirst: false, sortShapeProp: true },
    ],
    // Same but for imports
    'sort-imports': [
      // https://eslint.org/docs/rules/sort-imports
      'error',
      {
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none'],
      },
    ],
    'sort-keys': 'off',
    'no-constant-binary-expression': 'error',
    'react/jsx-key': 'error',
  },
}
