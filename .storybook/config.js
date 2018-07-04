import { configure, addDecorator } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/vue';
import Vue from 'vue';

// Add components
import '../dist/stencil-components';

// Global sass file
import '../src/stories/core/global.scss';

// Add story composer to apply default styles
import storyComposer from '../src/stories/core/story-composer';
addDecorator(storyComposer);

// Ignore all web components in Vue.js starting with "ino-"
Vue.config.ignoredElements = [
  /^ino-/,
];

// Options
setOptions({
  name: 'inovex elements',
  url: '/'
})

addDecorator(withKnobs);

// Automatically import all files ending in *.stories.js
const req = require.context('../src/stories/', true, /stories.js$/);
function loadStories() {
  // Make getting started always default
  require('../src/stories/getting-started/index.stories');

  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module)
