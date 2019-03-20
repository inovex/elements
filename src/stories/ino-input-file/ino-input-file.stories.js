import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-input-file/readme.md';
import './ino-input-file.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-input-file') {
      return;
    }

    const fileNames = e.detail.files
      .map(f => [f.name, f.type, f.size + ' bytes'].join(', '))
      .join('\n');
    alert(fileNames);
  };

  document.addEventListener('changeFile', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('changeFile', eventHandler);
  };
}

storiesOf('<ino-input-file>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions('changeFile .customizable-input'))
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add(
    'Default usage',
    () => /*html*/ `
    <div class="story-input customizable-input">
      <ino-input-file
        accept="${text('accept', '')}"
        autofocus="${boolean('autofocus', false)}"
        disabled="${boolean('disabled', false)}"
        multiple="${boolean('multiple', false)}"
        required="${boolean('required', false)}"
        ino-label="${text('ino-label', 'Select a file to upload')}"
        ino-label-selected="${text('ino-label-selected', 'ausgewählt')}">
      </ino-input-file>
    </div>
  `
  );
