import { storiesOf } from '@storybook/html';
import CoreEvents from '@storybook/core-events';
import addons from '@storybook/addons';

import { withActions } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';
import componentReadme from '../../components/ino-radio/readme.md';
import './ino-radio.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-radio') {
      return;
    }

    el.setAttribute('checked', e.detail);
  };

  document.addEventListener('checkedChanges', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChanges', eventHandler);
  };
};

storiesOf('<ino-radio>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions(
    'checkedChanges ino-radio'
  ))
  .addDecorator(story => {
    addons.getChannel().emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })

  .add('Default usage', () => /*html*/`
    <div class="story-radio">
      <ino-radio
        checked="${boolean('checked', false)}"
        disabled="${boolean('disabled', false)}"
        name="radio-0"
      >
        ${text('<slot />', 'Unchecked')}
      </ino-radio>
      <ino-radio checked name="radio-1">Checked</ino-radio>
      <ino-radio disabled name="radio-2">Disabled</ino-radio>
      <ino-radio checked disabled name="radio-3">Checked and Disabled</ino-radio>
    </div>
  `);
