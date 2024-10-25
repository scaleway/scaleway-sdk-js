import tsdoc from "eslint-plugin-tsdoc";
import typescriptParser from "@typescript-eslint/parser";
import scwTypescript from '@scaleway/eslint-config-react/typescript';

export default [
  ...scwTypescript,
  {
    ignores: [
      "**/node_modules/",
      "**/dist/",
      "**/examples/",
      "**/vite.config.ts"
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
      parser: typescriptParser,
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
    plugins: {
      tsdoc,
    },
    rules: {
      "tsdoc/syntax": "warn",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "enumMember",
          format: ["PascalCase"],
        },
      ],
      "import/prefer-default-export": "off",
      "import/no-default-export": "error",
      "no-await-in-loop": "off",
      "@typescript-eslint/no-namespace": "off",

    },
  },
  {
    files: [
      "packages/clients/src/scw/**/*.ts",
      "packages/clients/src/internal/**/*.ts",
    ],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
    },
  },
  {
    files: ["**/*.test.ts", "__tests__/**/*.ts", "**/vite.config.ts"],
    rules: {
      "import/no-extraneous-dependencies": "off",
    },
  },
  {
    files: ["packages/clients/src/api/dedibox/v1/*.ts"],
    rules: {
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "off",
    },
  }
];
