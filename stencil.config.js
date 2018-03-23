const sass = require('@stencil/sass');

exports.config = {
  namespace: 'components',
  outputTargets: [
    { type: 'www' },
    { type: 'dist' }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
