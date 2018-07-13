const sass = require('@stencil/sass');

exports.config = {
  namespace: 'inovex-elements',
  outputTargets: [
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