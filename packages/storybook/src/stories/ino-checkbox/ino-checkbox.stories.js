import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import { withActions } from '@storybook/addon-actions';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import componentReadme from '_local-elements/src/components/ino-button/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-checkbox.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-checkbox') {
      return;
    }

    el.setAttribute('checked', e.detail);

    if (el.getAttribute('indeterminate') === 'true') {
      el.setAttribute('indeterminate', 'false');
    }
  };

  document.addEventListener('checkedChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChange', eventHandler);
  };
}

storiesOf('<ino-checkbox>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions('checkedChange .customizable-checkbox'))
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add(
    'Default usage',
    () => /*html*/ `
    <div class="story-checkbox">
      <ino-checkbox
        class="customizable-checkbox"
        name="customizable-checkbox"
        value="placeholder-value"
        checked="${boolean('checked', false)}"
        disabled="${boolean('disabled', false)}"
        indeterminate="${boolean('indeterminate', false)}"
      >
        ${text('<slot />', 'Customizable checkbox')}
      </ino-checkbox>
      
      <div class="story-checkbox-states">
        <ino-checkbox checked>Checked</ino-checkbox>
        <ino-checkbox>Unchecked</ino-checkbox>
        <ino-checkbox indeterminate>Indeterminated</ino-checkbox>
        <ino-checkbox disabled checked>Checked and Disabled</ino-checkbox>
        <ino-checkbox disabled>Disabled</ino-checkbox>
        <ino-checkbox disabled indeterminate>Indeterminated and Disabled</ino-checkbox>
      </div>
    </div>
  `
  );
