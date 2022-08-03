// main point of configuration for storybook
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['../static', '../../elements/src/assets'],
  stories: ['../src/**/*.stories.ts', '../src/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
  ],
  features: {
    storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
    interactionsDebugger: true,
  },
  webpackFinal: config => {
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

    // Copy Plugin
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: './src/**/*.svg',
            to: 'assets/[name][ext]',
          },
        ],
      })
    );
    return config;
  },
};
