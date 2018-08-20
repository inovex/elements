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
          onInput={action('input change emitted')}
          type={select('type', ['text', 'number', 'password'], 'text', 'STANDARDS')}
          placeholder={text('placeholder', '', 'STANDARDS')}
          ino-outline={boolean('ino-outline', false, 'INOVEX')}
          ino-label={text('ino-label', 'Customizable input', 'INOVEX')}
          ino-helper={text('ino-helper', 'Helper message', 'INOVEX')}
          ino-helper-persistent={boolean('ino-helper-persistent', false, 'INOVEX')}
          ino-helper-validation={boolean('ino-helper-validation', false, 'INOVEX')}
          disabled={boolean('disabled', false, 'STANDARDS')}
          required={boolean('required', false, 'STANDARDS')}>
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

        <h4>Helper texts</h4>
        <ino-input placeholder="Helper text on focus (default)" ino-helper="Helper text"></ino-input>
        <ino-input placeholder="Persistent helper text" ino-helper="Persistent helper text" ino-helper-persistent></ino-input>
        <ino-input required placeholder="Validation message for required input" ino-helper="This field is required" ino-helper-validation></ino-input>

        <h4>States</h4>
        <ino-input placeholder="Disabled" disabled></ino-input>
        <ino-input placeholder="Required" required></ino-input>

        <ino-input placeholder="Outline disabled" ino-outline disabled></ino-input>
        <ino-input placeholder="Outline required" ino-outline required></ino-input>
      </div>
    )
  }));