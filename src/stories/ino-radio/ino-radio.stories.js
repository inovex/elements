import { storiesOf } from '@storybook/vue';
import { text, boolean } from '@storybook/addon-knobs/vue';
import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-radio/readme.md';
import './ino-radio.scss';


// Stories
storiesOf('<ino-radio>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({ 
    render: h => (
      <div class="story-radio">
        <ino-radio
          checked={boolean('checked', false)}
          disabled={boolean('disabled', false)}
          name="radio-0"
        >
          {text('<slot />', 'Unchecked')}
        </ino-radio>
        <ino-radio checked name="radio-1">Checked</ino-radio>
        <ino-radio disabled name="radio-2">Disabled</ino-radio>
        <ino-radio checked disabled name="radio-3">Checked and Disabled</ino-radio>
      </div>
    )
  })
  )
