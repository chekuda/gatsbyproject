module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react'],
  // For fixing optiona chaining
  parser: '@babel/eslint-parser',
  rules: {
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'eol-last': ['error', 'always'],
    'react/prop-types': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': ['error'],
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
  },
}
