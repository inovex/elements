import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'inovex-elements',
  outputTargets: [{
    type: 'dist',
    serviceWorker: false
  }],
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
