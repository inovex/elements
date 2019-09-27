import { addParameters, configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import inovexTheme from './theme'


import { applyPolyfills, defineCustomElements } from '../dist/loader';
applyPolyfills().then(() => {
  defineCustomElements(window);
});

// Global sass file
import '../src/stories/core/global.scss';

// Add story composer to apply default styles
addDecorator((storyFn) => `<div class="ino-story-composer">${storyFn()}</div>`);

// Options
addParameters({
  options: {
    theme: inovexTheme
  }
});

addDecorator(withKnobs);

// Automatically import all files ending in *.stories.js
const req = require.context('../src/stories/', true, /.stories.(ts|js)$/);
function loadStories() {
  // Make getting started always default
  require('../src/stories/docs/index.stories');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module)
