import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from './vue-output-target';

const angularDirectivesPath = '../elements-angular/elements/src/directives';

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
      directivesProxyFile: `${angularDirectivesPath}/proxies.ts`,
      directivesUtilsFile: angularDirectivesPath,
      directivesArrayFile: `${angularDirectivesPath}/proxies-list.ts`,
    }),
    vueOutputTarget({
      componentCorePackage: '@inovex.de/elements',
      proxiesFile: '../elements-vue/src/proxies.ts',
      includeDefineCustomElements: false,
      componentModels: [
        {
          elements: [
            'ino-checkbox',
            'ino-radio',
            'ino-switch',
            'ino-segment-button',
            'ino-control-item',
          ],
          targetAttr: 'checked',
          event: 'v-checked-change',
          externalEvent: 'checkedChange',
        },
        {
          elements: [
            'ino-autocomplete',
            'ino-datepicker',
            'ino-input',
            'ino-range',
            'ino-select',
            'ino-textarea',
          ],
          targetAttr: 'value',
          event: 'v-value-change',
          externalEvent: 'valueChange',
        },
      ],
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
