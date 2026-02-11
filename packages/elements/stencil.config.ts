import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import AngularOutputTarget from './output-targets/angular';
import ReactOutputTarget from './output-targets/react';
import VueOutputTarget from './output-targets/vue';
import JsonDocsOutputTarget from './output-targets/json-docs';
import { join } from 'path';

export const config: Config = {
  extras: {
    initializeNextTick: true,
    enableImportInjection: true, // required for vite
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
      sourceCodeBaseUrl: 'https://github.com/inovex/elements//tree/master/packages/elements',
    },
    JsonDocsOutputTarget,
    AngularOutputTarget,
    ReactOutputTarget,
    VueOutputTarget,
  ],
  plugins: [
    sass({
      includePaths: ['../../node_modules'].map(d => join(__dirname, d)),
      silenceDeprecations: ['global-builtin', 'if-function', 'color-functions', 'slash-div'], // TODO: will be done with migration
    }),
  ],
  testing: {
    setupFilesAfterEnv: ['./setupSpecTests.ts'],
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    // explicitly cache it in node_modules to make it easier to cache it in CI
    cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
  },
  preamble: 'Crafted with ❤ by inovex GmbH',
};
