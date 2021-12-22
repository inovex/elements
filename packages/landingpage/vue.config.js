const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/elements/',
  transpileDependencies: true,
  runtimeCompiler: true,
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].template = './public/index.html';
        return args;
      });
  }
})
