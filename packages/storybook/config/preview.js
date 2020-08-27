// configures the "preview" iframe that renders your components
import { addDecorator } from '@storybook/html';

import { applyPolyfills, defineCustomElements } from '@inovex/elements/dist/loader';
// Global sass file
import '../src/core/global.scss';

applyPolyfills().then(() => {
  defineCustomElements(window);
});

// Add story composer to apply default styles
addDecorator((storyFn) => `<div class="ino-story-composer">${storyFn()}</div>`);
