module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'prettier',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    'react-native',
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'index.js',
    'metro.config.js',
    'babel.config.js',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        indent: [
          'error',
          2,
          {
            SwitchCase: 1,
          },
        ],
        quotes: [
          'error',
          'single',
          {
            avoidEscape: true,
          },
        ],
        semi: ['error', 'always'],
        'no-use-before-define': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        'react/jsx-filename-extension': [
          1,
          {extensions: ['.js', '.jsx', '.ts', '.tsx']},
        ],
        'import/extensions': [0],
      },
    },
  ],
};
