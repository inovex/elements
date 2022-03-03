module.exports = {
  extends: ['../../.eslintrc.js', 'plugin:@stencil/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-no-null'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/unbound-method': 'error',
    'comma-dangle': 'off',
    'import/no-unassigned-import': 'off',
    'no-cond-assign': 'off',
    'no-console': 'off',
    'no-null/no-null': 'off',
    'no-throw-literal': 'off',
    'react/jsx-no-bind': 'off',
    '@stencil/strict-boolean-conditions': 'off',
    '@stencil/dependency-suggestions': 'off',
    '@stencil/prefer-vdom-listener': 'off'
  },
  ignorePatterns: ['stencil.config.ts'],
};
