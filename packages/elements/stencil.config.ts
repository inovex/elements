import { Config } from '@stencil/core';
import { JsonDocs } from '@stencil/core/internal';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { promises as fs } from 'fs';
import { angularOutputTargetFix } from './angular-target-fix';

async function generateCustomElementsJson(docsData: JsonDocs) {
  // Generate docs for storybook stencil plugin
  await fs.writeFile('../storybook/docs/elements-stencil-docs.json', JSON.stringify(docsData, null, 2));

  // Generate CEM manifest for storybook webcomponents
  const jsonData = {
    version: "1.0.0",
    modules: docsData.components.map((component) => ({
      kind: "javascript-module",
      path: component.filePath,
      declarations: [
        {
          kind: "class",
          name: component.fileName,
          tagName: component.tag,
          description: component.docs,

          attributes: component.props
            .filter((prop) => prop.attr)
            .map((prop) => ({
              name: prop.attr,
              type: {
                text: prop.type,
              },
              description: prop.docs,
              default: prop.default,
              required: prop.required,
            })),

          members: [
            ...component.props
            .filter((prop) => !prop.attr)
            .map((prop) => ({
              kind: "field",
              name: prop.name,
              type: {
                text: prop.type
              },
              description: prop.docs,
              default: prop.default,
              required: prop.required,
            })),

            ...component.methods.map((method) => ({
              kind: "method",
              name: method.name,
            })),
          ],

          events: component.events.map((event) => ({
            name: event.event,
            type: {
              text: event.detail,
            },
            description: event.docs,
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
        },
      ]
    })),
  };

  await fs.writeFile(
    '../storybook/docs/custom-elements-manifest.json',
    JSON.stringify(jsonData, null, 2)
  );
}

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
