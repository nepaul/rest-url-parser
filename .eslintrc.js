module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    jest: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
    describe: 'readonly',
    test: 'readonly',
    expect: 'readonly',
    it: 'readonly',
  },
  extends: ['airbnb-base', 'prettier'],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.d.ts'],
      },
    },
  },
  plugins: ['no-loops', 'prettier'],
  rules: {
    'no-loops/no-loops': 'error',
    'prettier/prettier': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
  },
};
