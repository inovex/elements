// configures the "preview" iframe that renders your components
import { defineCustomElements } from '@inovex.de/elements/dist/loader';

import './global.scss';
import theme from './theme';

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
      // NEW: HIDE DECORATORS FROM STORY OUTPUT,
      // FIXME: disabled all decorator functions which are currently used for event handling
      source: {
        format: 'html',
      },
      toc: {
        // 👈 Enables the table of contents for components stories
        contentsSelector: '.sbdocs-content:not(div:has(#changelog)):not(div:has(#typography))', // disables toc on changelog & typography
        headingSelector: 'h3', // only selects h3 headlines
        ignoreSelector: '.docs-story > * :is(h3)', // ignore h3 headlines in stories
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
