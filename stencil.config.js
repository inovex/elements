const sass = require('@stencil/sass');

exports.config = {
  namespace: 'stencil-components',
  outputTargets: [
    // TODO: Remove type www after storybook is main consumer. 
    { type: 'www' }, 
    { 
      type: 'dist',
      serviceWorker: false
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        './src/components/styles/mdc.customize.scss'
      ],
      includePaths: [
        './src/components',
        './node_modules'
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
