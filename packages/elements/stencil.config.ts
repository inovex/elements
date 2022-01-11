import { Config } from '@stencil/core';
import { JsonDocs } from '@stencil/core/internal';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { promises as fs } from 'fs';
import { angularOutputTargetFix } from './angular-target-fix';

async function generateCustomElementsJson(docsData: JsonDocs) {
  const jsonData = {
    version: 1.2,
    tags: docsData.components.map((component) => ({
      name: component.tag,
      path: component.filePath,
      description: component.docs,

      attributes: component.props
        .filter((prop) => prop.attr)
        .map((prop) => ({
          name: prop.attr,
          type: prop.type,
          description: prop.docs,
          defaultValue: prop.default,
          required: prop.required,
        })),

      properties: component.props.map((prop) => ({
        name: prop.name,
        type: prop.type,
        description: prop.docs,
        defaultValue: prop.default,
        required: prop.required,
      })),

      events: component.events.map((event) => ({
        name: event.event,
        description: event.docs,
      })),

      methods: component.methods.map((method) => ({
        name: method.name,
        description: method.docs,
        signature: method.signature,
      })),

      slots: component.slots.map((slot) => ({
        name: slot.name,
        description: slot.docs,
      })),

      cssProperties: component.styles
        .filter((style) => style.annotation === 'prop')
        .map((style) => ({
          name: style.name,
          description: style.docs,
        })),

      cssParts: component.parts.map((part) => ({
        name: part.name,
        description: part.docs,
      })),
    })),
  };
  await fs.writeFile(
    '../storybook/custom-elements.json',
    JSON.stringify(jsonData, null, 2)
  );
}

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
  namespace: 'inovex-elements',
  outputTargets: [
    {
      type: 'dist',
      copy: [{ src: 'assets/ino-icon', dest: 'ino-icon' }],
    },
    { type: 'docs-readme' },
    {
      type: 'docs-custom',
      generator: generateCustomElementsJson,
    },
    angularOutputTarget({
      componentCorePackage: '@inovex.de/elements',
      directivesProxyFile:
        '../elements-angular/elements/src/directives/proxies.ts',
      directivesUtilsFile:
        '../elements-angular/elements/src/directives/proxies-utils.ts',
      directivesArrayFile:
        '../elements-angular/elements/src/directives/proxies-list.ts',
    }),
    angularOutputTargetFix({
      directivesUtilsFile:
        '../elements-angular/elements/src/directives/angular-component-lib/utils.ts',
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
