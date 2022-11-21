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
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
