import { StorybookConfig } from '@storybook/web-components';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/web-components-vite',
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
