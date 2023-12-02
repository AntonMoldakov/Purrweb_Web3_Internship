module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'simple-import-sort', 'unused-imports', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }, { usePrettierrc: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'unused-imports/no-unused-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-empty-function': 'off',
    'no-console': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    JSX: true,
  },
};
