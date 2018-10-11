import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

import componentReadme from '../../components/ino-checkbox/readme.md';
import withStencilReadme from '../core/with-stencil-readme';

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
      <ino-checkbox indeterminate>Indeterminated</ino-checkbox>
    </div>
  `);
