import { storiesOf } from '@storybook/vue';
import { text, boolean } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/stencil-template-renderer';

import componentReadme from '../../components/ino-checkbox/readme.md';
import './ino-checkbox.scss';


storiesOf('<ino-checkbox>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default', () => ({
    render: h => (
      <div class="story-checkbox">
        <ino-checkbox
          checked={boolean('checked', false)}
          disabled={boolean('disabled', false)}
        >
          {text('<slot />', 'A standard checkbox')}
        </ino-checkbox>
        <ino-checkbox checked>Checked</ino-checkbox>
        <ino-checkbox disabled>Disabled</ino-checkbox>
        <ino-checkbox disabled checked>Checked and Disabled</ino-checkbox>
      </div>
    )
  }))
