import { storiesOf } from '@storybook/vue';

import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-input/readme.md';
import './ino-input.scss';

storiesOf('<ino-input>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render :h => (
      <div class="story-input">
        <ino-input class="customizable-input" 
          onChange={action('change emitted')}
          onKeyup={action('keyup emitted')}
          placeholder={text('placeholder', '')}
          type={select('type', ['text', 'number', 'password'])}
          ino-outline={boolean('ino-outline', false)}
          ino-label={text('ino-label', 'Customizable input')}
          disabled={boolean('disabled', false)}
          required={boolean('required', false)}>
        </ino-input>

        <h4>Types</h4>
        <ino-input placeholder="type = text"></ino-input>
        <ino-input type="number" placeholder="type = number"></ino-input>
        <ino-input type="password" placeholder="type = password"></ino-input>

        <h4 class="outline">Outlined</h4>
        <ino-input placeholder="Outline" ino-outline></ino-input>

        <h4>Labels</h4>
        <ino-input ino-label="Floating label"></ino-input>
        <ino-input ino-label="Floating label" value="With value"></ino-input>

        <ino-input ino-label="Outlined floating label" ino-outline></ino-input>
        <ino-input ino-label="Outlined floating label" value="With value" ino-outline></ino-input>

        <h4>States</h4>
        <ino-input placeholder="Disabled" disabled></ino-input>
        <ino-input placeholder="Required" required></ino-input>

        <ino-input placeholder="Outline disabled" ino-outline disabled></ino-input>
        <ino-input placeholder="Outline required" ino-outline required></ino-input>
      </div>
    )
  }));