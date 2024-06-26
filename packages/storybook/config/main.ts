import { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-vite',
  },

  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },

  staticDirs: ['../static', '../../elements/src/assets', '../../../assets/logo'],

  stories: ['../src/**/*.stories.ts', '../src/**/*.stories.mdx'],

  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { docs: false }, // docs addon is added explicitly below, so we can disable it here
    },
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@pxtrn/storybook-addon-docs-stencil',
  ],

  docs: {
    autodocs: true,
  },

  features: {
    buildStoriesJson: true, // generate index.json including all story ids that are used by the tests
  },
};
export default config;
