const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  // We extend the default config by
  const copyWebpackPlugin = new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../dist/inovex-elements'),
      to: path.posix.join('static', 'inovex-elements'),
      ignore: ['.*']
    }
    // },
    // {
    //   from: path.resolve(__dirname, '../src/assets'),
    //   to: path.posix.join('static', 'assets'),
    //   ignore: ['.*']
    // }
  ]);


  // Sass Support
  defaultConfig.module.rules.push({
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
            path.resolve(__dirname, "../src/components"),
            path.resolve(__dirname, "../node_modules")
          ]
        }
    }],
  });

  if (defaultConfig.plugins) {
    defaultConfig.plugins.push(copyWebpackPlugin);
  } else {
    defaultConfig.plugins = [
      copyWebpackPlugin
    ];
  }

  return defaultConfig;
};
