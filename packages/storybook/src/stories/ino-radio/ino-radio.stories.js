import { storiesOf } from '@storybook/html';
import CoreEvents from '@storybook/core-events';
import addons from '@storybook/addons';

import { withActions } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import componentReadme from '_local-elements/src/components/ino-radio/readme.md';
import './ino-radio.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-radio') {
      return;
    }

    el.setAttribute('checked', true);
  };

  document.addEventListener('checkedChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChange', eventHandler);
  };
}

storiesOf('Input|<ino-radio>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions('checkedChange ino-radio'))
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })

  .add(
    'Default usage',
    () => /*html*/ `
    <div class="story-radio">
      <ino-radio
        checked="${boolean('checked', false)}"
        disabled="${boolean('disabled', false)}"
        name="radio-custom"
      >
        ${text('<slot />', 'Customizable Radio Button')}
      </ino-radio>
    </div>

    <h4>States</h4>
    <div class="story-radio">
      <ino-radio>Unchecked</ino-radio>
      <ino-radio checked>Checked</ino-radio>
      <ino-radio disabled>Disabled</ino-radio>
      <ino-radio checked disabled>Checked and Disabled</ino-radio>
    </div>
  `
  );
