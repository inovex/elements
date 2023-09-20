import { JsonDocs, OutputTargetDocsCustom } from '@stencil/core/internal';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

const storybookElementsJsonPath = resolve(
  __dirname,
  '..',
  '..',
  'storybook',
  'elements-stencil-docs.json'
);

type ComponentProps = keyof JsonDocs['components'][number];

const KEYS_TO_DELETE: ComponentProps[] = [
  'dirPath',
  'readmePath',
  'usagesDir',
];

export const JsonDocsOutputTarget: OutputTargetDocsCustom = {
  type: 'docs-custom',
  generator: async (docs: JsonDocs) => {

    // delete timestamp to prevent merge conflicts & unused properties
    delete docs.timestamp;
    docs.components.forEach((component) => {
      KEYS_TO_DELETE.forEach((key) => delete component[key]);
      component.filePath = component.filePath.replace('../../packages/elements', '.')
    });

    writeFileSync(storybookElementsJsonPath, JSON.stringify(docs, null, 2));
  },
};
