import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { angularOutputTargetFix } from './angular-target-fix';

export const config: Config = {
  buildEs5: 'prod',
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true
  },
  testing: {
    browserHeadless: false,
    browserSlowMo: 2000,
    browserDevtools: true
  },
  globalStyle: './src/components/styles/variables.scss',
  globalScript: './src/util/import-fonts.ts',
  enableCache: true,
  namespace: 'inovex-elements',
  outputTargets: [
    { type: 'dist' },
    { type: 'docs-readme' },
    angularOutputTarget({
      componentCorePackage: '@inovex.de/elements',
      directivesProxyFile:
        '../elements-angular/elements/src/directives/proxies.ts',
      directivesUtilsFile:
        '../elements-angular/elements/src/directives/proxies-utils.ts',
      directivesArrayFile:
        '../elements-angular/elements/src/directives/proxies-list.ts'
    }),
    angularOutputTargetFix({
      directivesUtilsFile:
        '../elements-angular/elements/src/directives/angular-component-lib/utils.ts'
    })
  ],
  plugins: [
    sass({
      injectGlobalPaths: [],
      includePaths: ['./src/components', '../../node_modules']
    })
  ],
  preamble: 'Crafted with ❤ by inovex GmbH'
};
