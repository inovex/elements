const sass = require('@stencil/sass');

exports.config = {
  namespace: 'inovex-elements',
  outputTargets: [
    { type: 'www', baseUrl: process.env['CI_COMMIT_REF_NAME'] ? '/' + process.env['CI_COMMIT_REF_NAME'] + '/doc' : '/' },
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
