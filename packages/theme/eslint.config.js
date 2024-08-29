import base from '@repo/eslint-config/base.js';

export default [
  ...base,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/design-tokens/*.ts'],
    rules: {
      'sort-keys-fix/sort-keys-fix': 'off',
    },
  },
  {
    files: ['**/lib/theme.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },
];
