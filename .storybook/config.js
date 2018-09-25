import { configure, addDecorator } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';

const version = require('../package.json').version;

// Add components
import '../dist/inovex-elements';

// Global sass file
import '../src/stories/core/global.scss';

// Add story composer to apply default styles
addDecorator((storyFn) => `<div class="ino-story-composer">${storyFn()}</div>`);

// Options
addDecorator(withOptions({
  name: 'INOVEX ELEMENTS v' + version,
  url: '/'
}));

addDecorator(withKnobs);

// Automatically import all files ending in *.stories.js
const req = require.context('../src/stories/', true, /stories.js$/);
function loadStories() {
  // Make getting started always default
  require('../src/stories/docs/index.stories');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module)
