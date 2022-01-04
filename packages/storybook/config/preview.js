// configures the "preview" iframe that renders your components
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/dist/loader';

import './global.scss';

import { setCustomElements } from '@storybook/web-components';
import { extractArgTypes, setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docsJson from '../docs/stencil-documentation.json';
import theme from './theme';
import customElements from '../docs/custom-elements-manifest.json';

// Set custom elements for descriptions and stencil docs for @pxtrn/storybook-addon-docs-stencil
// plugin to extract the argTypes
setCustomElements(customElements);
setStencilDocJson(docsJson);

applyPolyfills().then(() => defineCustomElements(window));

// Explicit order for the docs section
export const parameters = {
  viewMode: 'docs',
  controls: {
    hideNoControlsWarning: true,
  },
  docs: {
    extractArgTypes,
    theme,
  },
  options: {
    panelPosition: 'bottom',
    storySort: {
      order: [
        'Docs',
        [
          'Welcome',
          'Changelog',
          'Framework Integration',
          'Styleguide',
          'Contributing',
        ],
      ],
    },
  },
};
