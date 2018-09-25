import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';
import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-radio/readme.md';
import './ino-radio.scss';


// Stories
storiesOf('<ino-radio>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-radio">
      <ino-radio
        checked="${boolean('checked', false)}"
        disabled="${boolean('disabled', false)}"
        name="radio-0"
      >
        ${text('<slot />', 'Unchecked')}
      </ino-radio>
      <ino-radio checked name="radio-1">Checked</ino-radio>
      <ino-radio disabled name="radio-2">Disabled</ino-radio>
      <ino-radio checked disabled name="radio-3">Checked and Disabled</ino-radio>
    </div>
  `);
