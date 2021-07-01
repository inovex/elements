// configures the "preview" iframe that renders your components
import { applyPolyfills, defineCustomElements } from '@inovex.de/elements/dist/loader';

// Global sass file
import './global.scss';

import { addParameters, setCustomElements } from '@storybook/web-components';
import theme from './theme';

import customElements from '../custom-elements.json';
setCustomElements(customElements);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

// Explicit order for the docs section
addParameters({
  viewMode: 'docs',
  controls: {
    hideNoControlsWarning: true
  },
  docs: {
    theme
  },
  options: {
    panelPosition: 'bottom',
    storySort: {
      order: [
        'Docs',
        ['Welcome', 'Changelog', 'Framework Integration', 'Styleguide', 'Contributing'],
      ],
    },
  }
});
