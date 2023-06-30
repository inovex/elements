// main point of configuration for storybook
const path = require('path');
module.exports = {
  staticDirs: ['../static', '../../elements/src/assets', '../../../assets/logo'],
  stories: ['../src/**/*.stories.ts', '../src/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials', '@pxtrn/storybook-addon-docs-stencil', "@storybook/addon-mdx-gfm"],
  // managerEntries: ['./addons/post-current-story'], could not resolve
  typescript: {
    compilerOptions: {
      "typeRoots": ["node_modules/@types", "../src/types"]
    }
  },
  webpackFinal: config => {
    config.devServer = {
      watchContentBase: true,
      contentBase: path.join(__dirname, 'src'),
      historyApiFallback: true
    };

    // Sass Support
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../src/stories'), path.resolve(__dirname, '../../elements/src/components'), path.resolve(__dirname, '../../../node_modules')]
          }
        }
      }]
    });

    // Story Description
    config.module.rules.push({
      test: /\.stories\.ts/,
      use: [{
        loader: "story-description-loader",
        options: {
          isTSX: true
        }
      }]
    });
    return config;
  },
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};