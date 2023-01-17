import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from './output-targets/vue-output-target';
import { JsonDocsOutputTarget } from './output-targets/json-docs-output-target';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { path } from "@stencil/core/compiler";

const angularDirectivesPath = path.join(__dirname, '../elements-angular/elements/src/directives');
const reactProxyPath =  path.join(__dirname,'../elements-react/src/components');

export const config: Config = {
  buildEs5: false,
  extras: {
    experimentalImportInjection: true,
    initializeNextTick: true
  },
  globalScript: path.join(__dirname, 'src/util/import-fonts.ts'),
  globalStyle: path.join(__dirname, 'src/global/styles.scss'),
  enableCache: true,
  sourceMap: false, //process.env.NODE_ENV === 'development',
  namespace: 'inovex-elements',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      copy: [{ src: 'assets/ino-icon', dest: 'ino-icon' }],
      esmLoaderPath: '../loader',
    },
    { type: 'docs-readme' },
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/inovex/elements//tree/master/packages/elements',
    },
    JsonDocsOutputTarget,
    react({
      componentCorePackage: '@inovex.de/elements',
      proxiesFile: `${reactProxyPath}/index.ts`,
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@inovex.de/elements',
      directivesProxyFile: `${angularDirectivesPath}/proxies.ts`,
      directivesUtilsFile: angularDirectivesPath,
      directivesArrayFile: `${angularDirectivesPath}/proxies-list.ts`,
    }),
    vueOutputTarget({
      componentCorePackage: '@inovex.de/elements',
      proxiesFile: path.join(__dirname, '../elements-vue/src/proxies.ts'),
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
            'ino-segment-group',
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
      includePaths: [ '../../node_modules'] .map((d) => path.join(__dirname, d)),
    }),
  ],
  preamble: 'Crafted with ❤ by inovex GmbH',
};
