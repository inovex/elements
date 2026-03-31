// configures the "preview" iframe that renders your components
import { defineCustomElements } from '@inovex.de/elements/dist/loader';
import './global.scss';
import theme from './theme';
import docsJson from '../elements-stencil-docs.json';

import DocumentationTemplate from './DocumentationTemplate.mdx';

defineCustomElements(window);

// Build a lookup map from component tag → readme content
const readmeByTag = new Map<string, string>(
  docsJson.components.filter(c => c.readme?.trim()).map(c => [c.tag, c.readme]),
);

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
      // Replaces the behaviour of @pxtrn/storybook-addon-docs-stencil:
      // called by the <Description /> block to get the component-level readme.
      extractComponentDescription: (component: string) => readmeByTag.get(component) ?? null,
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
