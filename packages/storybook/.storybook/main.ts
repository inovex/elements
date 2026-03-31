import { dirname, join } from 'path';
import { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  core: {
    builder: getAbsolutePath('@storybook/builder-vite'),
  },

  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },

  staticDirs: ['../static', '../../elements/src/assets', '../../../assets/logo'],

  stories: ['../src/**/*.stories.ts', '../src/**/*.mdx'],

  addons: [
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

  docs: {},

  features: {
    buildStoriesJson: true, // generate index.json including all story ids that are used by the tests
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
