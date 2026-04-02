// configures the "preview" iframe that renders your components
import { defineCustomElements } from '@inovex.de/elements/dist/loader';
import './global.scss';
import theme from './theme';
import docsJson from '../elements-stencil-docs.json';

import DocumentationTemplate from './DocumentationTemplate.mdx';

defineCustomElements(window);

// Explicit order for the docs section
const preview = {
  parameters: {
    viewMode: 'docs',
    layout: 'centered',
    controls: {
      hideNoControlsWarning: true,
    },
    docs: {
      theme,
      source: {
        format: 'html',
      },
      page: DocumentationTemplate,
    },
    options: {
      panelPosition: 'bottom',
      storySort: {
        order: [
          'Docs',
          [
            'Welcome',
            'Changelog',
            ['Framework Integration', ['Angular', 'React', 'Vue']],
            'Styleguide',
            'Contributing',
          ],
        ],
      },
    },
  },

  tags: ['autodocs'],
};
export default preview;
