import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  buildEs5: false, // see https://github.com/ionic-team/stencil/issues/253
  enableCache: true,
  namespace: 'inovex-elements',
  outputTargets: [
    { type: 'dist' },
    { type: 'docs-readme' }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['./src/components/styles/mdc.customize.scss'],
      includePaths: ['./src/components', './node_modules']
    })
  ],
  preamble: 'Crafted with ❤ by inovex GmbH'
};
