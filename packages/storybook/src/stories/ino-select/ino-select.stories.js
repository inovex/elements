import { storiesOf } from '@storybook/html';
import CoreEvents from '@storybook/core-events';
import addons from '@storybook/addons';

import { withActions } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-select/readme.md';
import './ino-select.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-select') {
      return;
    }

    el.setAttribute('value', e.detail);
  };

  document.addEventListener('valueChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('valueChange', eventHandler);
  };
}

storiesOf('<ino-select>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(
    withActions('valueChange .customizable-select', 'submit .form')
  )
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add('Default usage', () => {
    const optionsTemplate = /*html*/ `
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
    `;

    return /*html*/ `
      <div class="story-select">
        <ino-select class="customizable-select"
          name="${text('name', 'select-1')}"
          ino-outline="${boolean('ino-outline', false)}"
          ino-label="${text('ino-label', 'Customizable select')}"
          ino-prepend-default="${boolean('ino-prepend-default', false)}"
          ino-disable-default="${boolean('ino-disable-default', false)}"
          required="${boolean('required', false)}"
          ino-show-label-hint="${boolean('ino-show-label-hint', false)}"
        >
          ${optionsTemplate}
        </ino-select>

        <h4 class="outline">Outlined</h4>
        <ino-select ino-outline>
          ${optionsTemplate}
        </ino-select>

        <h4>Labels</h4>
        <ino-select>
          <option selected>No label</option>
          ${optionsTemplate}
        </ino-select>
        <ino-select ino-label="Floating label">
          <option value="" />
          ${optionsTemplate}
        </ino-select>

        <ino-select ino-label="Floating label outlined" ino-outline>
          ${optionsTemplate}
        </ino-select>

        <h4>States</h4>
        <ino-select disabled ino-label="Disabled select">
          ${optionsTemplate}
        </ino-select>
        <ino-select ino-label="Select with disabled option">
          ${optionsTemplate}
          <option disabled>Disabled option</option>
        </ino-select>

        <ino-select required ino-prepend-default ino-label="required select" ino-show-label-hint>
          ${optionsTemplate}
        </ino-select>

        <ino-select ino-prepend-default ino-label="optional select" ino-show-label-hint>
          ${optionsTemplate}
        </ino-select>

        <ino-select ino-prepend-default ino-label="With prepended disabled empty option">
          ${optionsTemplate}
        </ino-select>

        <ino-select ino-prepend-default ino-disable-default="false" ino-label="With prepended selectable empty option">
          ${optionsTemplate}
        </ino-select>
      </div>
    `;
  })
  .add(
    'Forms',
    () => /*html*/ `
    <div class="story-select">
      <h4>Required</h4>
      <p>The form should not submit since no option is selected and the select is required.</p>
      <form class="form" onSubmit="alert('Form submitted'); return false;">
          <ino-select ino-label="Form select" ino-prepend-default required>
            <option value="Test">Test</option>
          </ino-select>
          <ino-button type="submit">Submit</ino-button>
      </form>
    </div>
  `
  );
