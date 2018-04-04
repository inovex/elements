const sass = require('@stencil/sass');

exports.config = {
  namespace: 'stencil-components',
  outputTargets: [
    { type: 'www' },
    { 
      type: 'dist',
      serviceWorker: false
    }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
