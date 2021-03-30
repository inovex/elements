// main point of configuration for storybook
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.ts',
    '../src/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
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
        "style-loader", 
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require('sass'),
            includePaths: [
              path.resolve(__dirname, "../src/stories"),
              path.resolve(__dirname, "../../elements/src/components"),
              path.resolve(__dirname, "../../../node_modules")
            ]
          }
        }
      ],
    });

    // Copy Plugin
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: './src/**/*.svg',
            to: 'assets',
            flatten: true,
          },
        ],
      }),
    );
    return config;
  },
};
