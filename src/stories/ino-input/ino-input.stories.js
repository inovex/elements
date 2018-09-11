import { storiesOf } from '@storybook/vue';

import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-input/readme.md';
import inputFileReadme from '../../components/ino-input-file/readme.md';
import './ino-input.scss';

import ICONS from '../../components/ino-icon/icons';


storiesOf('<ino-input>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render :h => (
      <div class="story-input">
        <ino-input class="customizable-input"
          onInput={action('input change emitted')}
          type={select('type', ['text', 'number', 'password'], 'text', 'STANDARD')}
          step={number('step', 5, ['step'], 'STANDARD')}
          ino-label={text('ino-label', 'Customizable input', 'STANDARD')}
          placeholder={text('placeholder', '', 'STANDARD')}
          ino-outline={boolean('ino-outline', false, 'STANDARD')}
          disabled={boolean('disabled', false, 'STANDARD')}
          required={boolean('required', false, 'STANDARD')}

          ino-helper={text('ino-helper', 'Helper message', 'HELPER TEXT')}
          ino-helper-persistent={boolean('ino-helper-persistent', false, 'HELPER TEXT')}
          ino-helper-validation={boolean('ino-helper-validation', false, 'HELPER TEXT')}

          ino-icon={select('ino-icon', ICONS, '', 'ICONS')}
          ino-icon-trailing={boolean('ino-icon-trailing', false, 'ICONS')}
          ino-icon-clickable={boolean('ino-icon-clickable', false, 'ICONS')}
          onInoIconClicked={action('icon click emitted')}>
        </ino-input>

        <h4>Types</h4>
        <ino-input placeholder="type = text"></ino-input>
        <ino-input type="number" placeholder="type = number"></ino-input>
        <ino-input type="number" placeholder="type = number with steps=5" step="5"></ino-input>
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

        <h4>Icons</h4>
        <ino-input ino-icon="add" ino-label="Leading icon"></ino-input>
        <ino-input ino-icon="add" ino-icon-trailing ino-label="Trailing icon"></ino-input>
        <ino-input ino-icon="add" ino-icon-clickable ino-label="Clickable icon"></ino-input>
      </div>
    )
  }));

storiesOf('<ino-input>', module)
  .addDecorator(renderTemplate(inputFileReadme))
  .add('File input', () => ({
    render :h => (
      <div class="story-input">
        <ino-input-file
          accept={text('accept', '')}
          autofocus={boolean('autofocus', false)}
          disabled={boolean('disabled', false)}
          multiple={boolean('multiple', false)}
          required={boolean('required', false)}
          ino-label={text('ino-label', 'Durchsuchen')}
          ino-label-selected={text('ino-label-selected', 'ausgewählt')}>
        </ino-input-file>
      </div>
    )
  }));
