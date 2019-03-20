import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-input/readme.md';
import './ino-input.scss';

import ICONS from '../../components/ino-icon/icons';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-input') {
      return;
    }

    e.target.setAttribute('value', e.detail);
  };

  document.addEventListener('valueChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('valueChange', eventHandler);
  };
}

storiesOf('<ino-input>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(
    withActions(
      'inoIconClick .customizable-input',
      'valueChange .customizable-input'
    )
  )
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add(
    'Default usage',
    () => /*html*/ `
    <div class="story-input">
      <ino-input class="customizable-input" id="customizable-input" valueChange={action('value-changes')}
        type="${select(
          'type',
          ['text', 'number', 'password'],
          'text',
          'STANDARD'
        )}"
        step="${number('step', 5, ['step'], 'STANDARD')}"
        ino-label="${text('ino-label', 'Customizable input', 'STANDARD')}"
        placeholder="${text('placeholder', '', 'STANDARD')}"
        ino-outline="${boolean('ino-outline', false, 'STANDARD')}"
        disabled="${boolean('disabled', false, 'STANDARD')}"
        required="${boolean('required', false, 'STANDARD')}"

        ino-helper="${text('ino-helper', 'Helper message', 'HELPER TEXT')}"
        ino-helper-persistent="${boolean(
          'ino-helper-persistent',
          false,
          'HELPER TEXT'
        )}"
        ino-helper-validation="${boolean(
          'ino-helper-validation',
          false,
          'HELPER TEXT'
        )}"

        ino-icon="${select('ino-icon', ICONS, '', 'ICONS')}"
        ino-icon-trailing="${boolean('ino-icon-trailing', false, 'ICONS')}"
        ino-icon-clickable="${boolean('ino-icon-clickable', false, 'ICONS')}">
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
  `
  );
