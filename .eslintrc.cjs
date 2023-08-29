module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', 'prettier', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
      },
    },
  ],
};
