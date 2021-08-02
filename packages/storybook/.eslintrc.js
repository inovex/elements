module.exports = {
  extends: ['../../.eslintrc.js'],
  plugins: [
    'progress',
    '@typescript-eslint',
    'import',
    'json',
    'html',
    'jsx-a11y',
    'prettier',
  ],
  env: {
    'jest/globals': true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    extraFileExtensions: ['.html', '.md', '.json', '.svg', '.tag'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'html/html-extensions': ['.html'],
    'import/core-modules': ['enzyme'],
    'import/ignore': ['node_modules\\/(?!@storybook)'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.mjs', '.d.ts'],
        paths: ['node_modules/', 'node_modules/@types/'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'react/require-default-props': 'off',
        'react/prop-types': 'off', // we should use types
        'react/forbid-prop-types': 'off', // we should use types
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'vars-on-top': 'off',
        'no-var': 'off', // this is how typescript works
        'spaced-comment': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'progress/activate': 1,
    'class-methods-use-this': 'off',
    'import/default': 'error',
    'import/extensions': [
      'error',
      'never',
      {
        ignorePackages: true,
        json: 'always',
        md: 'always',
        svg: 'always',
        tag: 'always',
      },
    ],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'examples/**',
          'examples-native/**',
          '**/example/**',
          '*.js',
          '**/*.test.js',
          '**/*.stories.*',
          '**/scripts/*.js',
          '**/stories/**/*.js',
          '**/__tests__/**/*.js',
          '**/.storybook/**/*.*',
        ],
        peerDependencies: true,
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@storybook'],
      },
    ],
    'import/prefer-default-export': 'off',
    'json/*': ['error', 'allowComments'],
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['A', 'LinkTo', 'Link'],
        specialLink: ['overrideParams', 'kind', 'story', 'to'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        controlComponents: ['CustomInput'],
        depth: 3,
        labelAttributes: ['label'],
        labelComponents: ['CustomInputLabel'],
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'max-classes-per-file': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash.isequal',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.uniqueId',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.mergewith',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.pick',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
        ],
        // catch-all for any lodash modularized.
        // The CVE is listed against the entire family for lodash < 4.17.11
        patterns: ['lodash.*'],
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__STORYBOOK_CLIENT_API__',
          '__STORYBOOK_ADDONS_CHANNEL__',
          '__STORYBOOK_STORY_STORE__',
        ],
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/jsx-fragments': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: true,
        allowFunctions: true,
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/sort-comp': [
      'error',
      {
        groups: {
          staticLifecycle: [
            'displayName',
            'propTypes',
            'defaultProps',
            'getDerivedStateFromProps',
          ],
        },
        order: [
          'staticLifecycle',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(DerivedStateFromProps|SnapshotBeforeUpdate$)).+$/',
          'instance-methods',
          'instance-variables',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
  },
};
