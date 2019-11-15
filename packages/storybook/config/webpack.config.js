const path = require('path');

module.exports = ({config}) => {
  config.module.rules.push({
    test: [/\.(stories.js)$/],
    loaders: [require.resolve('@storybook/source-loader')],
    include: [path.resolve(__dirname, '../src/stories')],
    enforce: 'pre',
  });
  config.resolve.extensions.push(".ts", ".tsx");

  // Sass Support
  config.module.rules.push({
    test: /\.scss$/,
    use: [{
        loader: "style-loader"
    }, {
        loader: "css-loader"
    }, {
        loader: "sass-loader",
        options: {
          includePaths: [
            path.resolve(__dirname, "../src/stories"),
            path.resolve(__dirname, "../../core/src/components"),
            path.resolve(__dirname, "../../../node_modules")
          ]
        }
    }],
  });
  return config;
};
