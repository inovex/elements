// configures the "preview" iframe that renders your components
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/dist/loader';

import './global.scss';
import {
  extractArgTypes,
  extractComponentDescription,
  setStencilDocJson,
} from '@pxtrn/storybook-addon-docs-stencil';
import docsJson from '../elements-stencil-docs.json';
import theme from './theme';

// Instead of using the custom elements manifest, use @pxtrn/storybook-addon-docs-stencil to extract argTypes of
// custom elements of the stencil generated json docs. This works better  for (attributes / props), methods, events, slots.
// Enforce @pxtrn/storybook-addon-docs-stencil to use component description instead of component readme
// see https://github.com/pixtron/storybook-addon-docs-stencil/blob/e87eece216d22d0643057cf15aedb168d83734b7/src/index.ts#L215
docsJson.components.forEach((c) => (c.readme = null));
setStencilDocJson(docsJson);

// Alternative with a custom elements schema:
// import customElements from '../docs/custom-elements-manifest.json';
// import { setCustomElements } from '@storybook/web-components';
// setCustomElements(customElements);

applyPolyfills().then(() => defineCustomElements(window));

const isInDevEnvironment = process && process.env.NODE_ENV === 'development';

// Explicit order for the docs section
export const parameters = {
  viewMode: 'docs',
  controls: {
    hideNoControlsWarning: true,
  },
  docs: {
    extractArgTypes,
    extractComponentDescription,
    theme,
    // NEW: HIDE DECORATORS FROM STORY OUTPUT,
    // FIXME: disabled all decorator functions which are currently used for event handling
    source: {
      // excludeDecorators: true,
    },
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
  // using storybook-addon-themes https://storybook.js.org/addons/storybook-addon-themes
  ...(isInDevEnvironment && {
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'inovex-elements-theme', color: '#ffffff' },
        { name: 'dark', class: 'inovex-elements-theme-dark', color: '#000000' },
      ],
    },
  }),
};
