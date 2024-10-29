module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    require.resolve('./shared'),
  ],
  plugins: ['deprecation', '@typescript-eslint'],
  rules: {
    // Enforce T[] instead of Array<T>
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    // Avoid toString which are going to generate [object Object]
    '@typescript-eslint/no-base-to-string': 'error',
    // (someCondition === true) => (someCondition)
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    // https://github.com/typescript-eslint/typescript-eslint/issues/4619
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    // We favor object defaults instead of default props in TS
    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/#you-may-not-need-defaultprops
    // https://twitter.com/dan_abramov/status/1133878326358171650
    'react/require-default-props': 'off',
    'react/prop-types': 'off',

    // To allow <>{expression}</>
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  },
}
