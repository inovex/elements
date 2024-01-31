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

  staticDirs: [
    '../static',
    '../../elements/src/assets',
    '../../../assets/logo',
  ],

  stories: ['../src/**/*.stories.ts', '../src/**/*.stories.mdx'],

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
    '@storybook/addon-essentials',
    '@pxtrn/storybook-addon-docs-stencil',
  ],

  docs: {
    autodocs: true,
  },
};
export default config;
