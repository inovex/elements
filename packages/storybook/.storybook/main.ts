import { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-vite',
  },

  framework: {
    name: '@stencil/storybook-plugin',
    options: {},
  },

  staticDirs: ['../static', '../../elements/src/assets', '../../../assets/logo'],

  stories: ['../src/**/*.stories.ts', '../src/**/*.mdx'],

  addons: [
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
  ],

  docs: {},
};
export default config;
