import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget as react } from '@stencil/react-output-target';

const angularDiretivesPath = '../elements-angular/elements/src/directives';
const reactProxyPath = '../elements-react/src/components';

export const config: Config = {
  buildEs5: false,
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
  sourceMap: process.env.NODE_ENV === 'development',
  namespace: 'inovex-elements',
  outputTargets: [
    react({
      componentCorePackage: '@inovex.de/elements',
      proxiesFile: `${reactProxyPath}/index.ts`,
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      copy: [{ src: 'assets/ino-icon', dest: 'ino-icon' }],
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
  ],
  plugins: [
    sass({
      injectGlobalPaths: [],
      includePaths: ['./src/components', '../../node_modules'],
    }),
  ],
  preamble: 'Crafted with ❤ by inovex GmbH',
};
