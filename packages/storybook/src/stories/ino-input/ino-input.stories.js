import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-input/readme.md';
import './ino-input.scss';

import ICONS from '_local-elements/src/components/ino-icon/icons';

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
          ['text', 'number', 'password', 'email'],
          'text',
          'STANDARD'
        )}"
        step="${text('step', 5, ['step'], 'STANDARD')}"
        maxlength="${number('maxlength', 100, ['maxlength'], 'STANDARD')}"
        ino-label="${text('ino-label', 'Customizable input', 'STANDARD')}"
        placeholder="${text('placeholder', '', 'STANDARD')}"
        ino-outline="${boolean('ino-outline', false, 'STANDARD')}"
        disabled="${boolean('disabled', false, 'STANDARD')}"
        required="${boolean('required', false, 'STANDARD')}"
        ino-show-label-hint="${boolean('ino-show-label-hint', false, 'STANDARD')}"

        pattern="${text('pattern', '', 'STANDARD')}"
        ino-error="${boolean('ino-error', false, 'STANDARD')}"
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

        ino-helper-character-counter="${boolean(
        'ino-helper-character-counter',
        false,
      'HELPER TEXT'
         )}"
      >
      </ino-input>

      <h4>Types</h4>
      <ino-input placeholder="type = text"></ino-input>
      <ino-input type="number" placeholder="type = number"></ino-input>
      <ino-input type="number" placeholder="type = number with steps=5" step="5"></ino-input>
      <ino-input type="number" placeholder="type = number with step='any' (decimal numbers)" step="any"></ino-input>
      <ino-input type="password" placeholder="type = password"></ino-input>

      <h4 class="outline">Outlined</h4>
      <ino-input placeholder="Outline" ino-outline></ino-input>

      <h4>Datalist</h4>
      <ino-input ino-label="Datalist" ino-data-list="languages">
        <datalist id="languages">
          <option>HTML</option>
          <option>Java</option>
          <option>Perl</option>
          <option>PHP</option>
          <option>Ruby on Rails</option>
        </datalist>
      </ino-input>

      <h4>Number Formats</h4>
      <ino-input ino-decimal-places="2" placeholder="With 2 decimal places"></ino-input>
      <ino-input ino-thousands-separator placeholder="With thousands separator"></ino-input>

      <h4>Metadata</h4>
      <ino-input value="2,00" ino-decimal-places="2" ino-thousands-separator ino-unit="€" ino-label="Euro Input"></ino-input>
      <ino-input value="2" type="number" ino-unit="h" ino-label="Hours input"></ino-input>

      <h4>Labels</h4>
      <ino-input ino-label="Floating label"></ino-input>
      <ino-input ino-label="Floating label" value="With value"></ino-input>

      <ino-input ino-label="Outlined floating label" ino-outline></ino-input>
      <ino-input ino-label="Outlined floating label" value="With value" ino-outline></ino-input>

      <h4>Helper texts</h4>
      <ino-input placeholder="Helper text on focus (default)" ino-helper="Helper text"></ino-input>
      <ino-input placeholder="Persistent helper text" ino-helper="Persistent helper text" ino-helper-persistent></ino-input>
      <ino-input required placeholder="Validation message for required input" ino-helper="This field is required" ino-helper-validation></ino-input>
      <ino-input value="Length of 12" ino-helper-character-counter maxlength=25></ino-input>

      <h4>States</h4>
      <ino-input placeholder="Disabled" disabled></ino-input>
      <ino-input ino-label="Optional" ino-show-label-hint></ino-input>
      <ino-input ino-label="Required" required ino-show-label-hint></ino-input>

      <ino-input placeholder="Outline disabled" ino-outline disabled></ino-input>
      <ino-input ino-label="Outline optional" ino-outline ino-show-label-hint></ino-input>
      <ino-input ino-label="Outline required" ino-outline ino-show-label-hint required></ino-input>

      <h4>Icons</h4>
      <ino-input ino-icon-leading ino-label="Leading icon">
        <ino-icon slot="ino-icon-leading" ino-icon="search"></ino-icon>
      </ino-input>
      <ino-input ino-icon-trailing ino-label="Trailing icon">
        <ino-icon slot="ino-icon-trailing" ino-icon="search"></ino-icon>
      </ino-input>
      <ino-input ino-icon-leading ino-icon-trailing ino-label="Leading and Trailing icon">
       <ino-icon slot="ino-icon-leading" ino-icon="search"></ino-icon>
       <ino-icon slot="ino-icon-trailing" ino-icon="add"></ino-icon>
      </ino-input>
      <ino-input ino-icon-trailing ino-label="Clickable Icon">
        <ino-icon ino-clickable slot="ino-icon-trailing" ino-icon="search"></ino-icon>
      </ino-input>
     </div>
  `
  );
