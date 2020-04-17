import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  buildEs5: false, // see https://github.com/ionic-team/stencil/issues/253
  enableCache: true,
  namespace: 'inovex-elements',
  outputTargets: [
    { type: 'dist' },
    { type: 'docs-readme' },
    {
      type: 'angular',
      componentCorePackage: '@inovex/elements',
      directivesProxyFile: '../elements-angular/elements/src/directives/proxies.ts',
      directivesUtilsFile: '../elements-angular/elements/src/directives/proxies-utils.ts',
      directivesArrayFile: '../elements-angular/elements/src/directives/proxies-list.ts'
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [],
      includePaths: ['./src/components', '../../node_modules']
    })
  ],
  preamble: 'Crafted with ❤ by inovex GmbH'
};
