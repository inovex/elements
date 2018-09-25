import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-checkbox/readme.md';
import './ino-checkbox.scss';


storiesOf('<ino-checkbox>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-checkbox">
      <ino-checkbox
        checked="${boolean('checked', false)}"
        disabled="${boolean('disabled', false)}"
      >
        ${text('<slot />', 'A standard checkbox')}
      </ino-checkbox>
      <ino-checkbox checked>Checked</ino-checkbox>
      <ino-checkbox disabled>Disabled</ino-checkbox>
      <ino-checkbox disabled checked>Checked and Disabled</ino-checkbox>
    </div>
  `);
