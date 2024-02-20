import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import AngularOutputTarget from './output-targets/angular';
import ReactOutputTarget from './output-targets/react';
import VueOutputTarget from './output-targets/vue';
import JsonDocsOutputTarget from './output-targets/json-docs';
import { join } from 'path';

export const config: Config = {
  buildEs5: false,
  extras: {
    initializeNextTick: true,
    // we need this flag to enable our components to be lazy loaded in vite environments (e.g. our storybook)
    // see: https://github.com/storybookjs/storybook/issues/25704
    experimentalImportInjection: true,
    appendChildSlotFix: true,
    enableImportInjection: true,
    lifecycleDOMEvents:true,
  },
  globalScript: join(__dirname, 'src/util/import-fonts.ts'),
  globalStyle: join(__dirname, 'src/global/styles.scss'),
  tsconfig: join(__dirname, 'tsconfig.lib.json'),
  enableCache: true,
  sourceMap: process.env.NODE_ENV === 'development',
  namespace: 'inovex-elements',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      copy: [{ src: 'assets/ino-icon', dest: 'ino-icon' }],
    },
    { type: 'docs-readme' },
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl:
        'https://github.com/inovex/elements//tree/master/packages/elements',
    },
    JsonDocsOutputTarget,
    AngularOutputTarget,
    ReactOutputTarget,
    VueOutputTarget,
  ],
  plugins: [
    sass({
      includePaths: ['../../node_modules'].map((d) => join(__dirname, d)),
    }),
  ],
  testing: {
    transformIgnorePatterns: [
      'node_modules/?!(@material)/'
    ],
  },
  preamble: 'Crafted with ❤ by inovex GmbH',
};
