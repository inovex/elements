import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from './vue-output-target';
import { JsonDocsOutputTarget } from './json-docs-output-target';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import wrappedIconsRollup from './plugins/rollup-plugin-wrappedIcons';

const angularDirectivesPath = '../elements-angular/elements/src/directives';
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
    experimentalImportInjection: true,
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
    JsonDocsOutputTarget,
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
      // external event names (valueChange, checkedChange, ...) have to be mapped to vue event names
      // see elements-vue/src/index.ts
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
            'ino-carousel',
            'ino-datepicker',
            'ino-input',
            'ino-radio-group',
            'ino-range',
            'ino-select',
            'ino-textarea',
          ],
          targetAttr: 'value',
          event: 'v-value-change',
          externalEvent: 'valueChange',
        },
        {
          elements: 'ino-range',
          targetAttr: 'valueStart',
          event: 'v-value-start-change',
          externalEvent: 'valueStartChange',
        },
        {
          elements: 'ino-range',
          targetAttr: 'valueEnd',
          event: 'v-value-end-change',
          externalEvent: 'valueEndChange',
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
  rollupPlugins: {
    after: [wrappedIconsRollup()],
  },
  preamble: 'Crafted with ❤ by inovex GmbH',
};
