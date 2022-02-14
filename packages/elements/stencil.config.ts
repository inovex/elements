import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

const angularDiretivesPath =  '../elements-angular/elements/src/directives';

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
    slotChildNodesFix: true,
  },
  globalScript: './src/util/import-fonts.ts',
  enableCache: true,
  namespace: 'inovex-elements',
  outputTargets: [
    {
      type: 'dist',
      copy: [{ src: 'assets/ino-icon', dest: 'ino-icon' }],
      esmLoaderPath: '../dist/loader'
    },
    { type: 'docs-readme' },
    {
      type: 'docs-json',
      file: '../storybook/elements-stencil-docs.json',
    },
    angularOutputTarget({
      componentCorePackage: '@inovex.de/elements',
      directivesProxyFile: `${angularDiretivesPath}/proxies.ts`,
      directivesUtilsFile: angularDiretivesPath,
      directivesArrayFile: `${angularDiretivesPath}/proxies-list.ts`,
    }),
    reactOutputTarget({
      componentCorePackage: '@inovex.de/elements',
      proxiesFile: '../elements-react17/dist/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: [],
      includePaths: ['./src/components', '../../node_modules'],
    }),
  ],
  preamble: 'Crafted with ❤ by inovex GmbH',
};
