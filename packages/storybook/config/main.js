import { dirname, join } from 'path';
// main point of configuration for storybook
const path = require('path');

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  core: {},

  staticDirs: [
    '../static',
    '../../elements/src/assets',
    '../../../assets/logo',
  ],

  stories: ['../src/**/*.stories.ts', '../src/**/*.stories.mdx'],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@pxtrn/storybook-addon-docs-stencil'),
  ],

  managerEntries: [require.resolve('../addons/post-current-story.tsx')],

  typescript: {
    compilerOptions: {
      typeRoots: ['node_modules/@types', '../src/types'],
    },
  },

  webpackFinal: (config) => {
    config.devServer = {
      watchContentBase: true,
      contentBase: path.join(__dirname, 'src'),
      historyApiFallback: true,
    };

    // Sass Support
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, '../src/stories'),
                path.resolve(__dirname, '../../elements/src/components'),
                path.resolve(__dirname, '../../../node_modules'),
              ],
            },
          },
        },
      ],
    });

    // Story Description
    config.module.rules.push({
      test: /\.stories\.ts/,
      use: [{ loader: 'story-description-loader', options: { isTSX: true } }],
    });

    return config;
  },

  framework: {
    name: getAbsolutePath('@storybook/web-components-webpack5'),
    options: {},
  },

  docs: {
    autodocs: true,
  },
};
export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
