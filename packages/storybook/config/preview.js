// configures the "preview" iframe that renders your components
import { applyPolyfills, defineCustomElements } from '@inovex.de/elements/dist/loader';

// Global sass file
import '../src/core/global.scss';

import { addParameters, setCustomElements } from '@storybook/web-components';
import theme from './theme';

import customElements from '../custom-elements.json';
setCustomElements(customElements);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

// Explicit order for the docs section
addParameters({
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
        ['Home', 'Framework Integration', 'Styleguide', 'Contributing'],
      ],
    },
  }
});
