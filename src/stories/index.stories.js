/* eslint-disable react/react-in-jsx-scope */

// Storybook
import Vue from 'vue';
import { addDecorator } from '@storybook/vue';

// Storybook addons
import { withKnobs } from '@storybook/addon-knobs/vue';

// Web Components
import '../../dist/stencil-components';

// Story imports
import SectionGettingStarted from './getting-started/index';
import SectionStyleguide from './styleguide/index';
import SectionButton from './ino-button/index';
import SectionCard from './ino-card/index';
import SectionCheckbox from './ino-checkbox/index';
import SectionChip from './ino-chip/index';

Vue.config.ignoredElements = [
  /^ino-/, // ignore all web components in Vue.js starting with "ino-"
];

addDecorator(withKnobs);

SectionGettingStarted.addStory();
SectionStyleguide.addStory();
SectionButton.addStory();
SectionCard.addStory();
SectionCheckbox.addStory();
SectionChip.addStory();

/* eslint-enable react/react-in-jsx-scope */
