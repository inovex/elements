import { storiesOf } from '@storybook/html';
import CoreEvents from '@storybook/core-events';
import { withActions } from '@storybook/addon-actions';
import { number, text, boolean } from '@storybook/addon-knobs';
import addons from '@storybook/addons';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-textarea/readme.md';
import './ino-textarea.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-textarea') {
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

storiesOf('<ino-textarea>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(
    withActions(
      'input .customizable-textarea',
      'valueChange .customizable-textarea'
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
    <div class="story-textarea">
      <ino-textarea class="customizable-textarea"
        cols="${number('cols', 60)}"
        rows="${number('rows', 5)}"
        placeholder="${text('placeholder', '')}"
        value="${text('value', '')}"
        ino-label="${text('ino-label', 'Customizable textarea')}"
        minlength="${number('minlength', 0)}"
        maxlength="${number('maxlength', 30)}"
        disabled="${boolean('disabled', false)}"
        required="${boolean('required', false)}"
        autogrow="${boolean('autogrow', false)}">
      </ino-textarea>

      <h4>Labels</h4>
      <ino-textarea ino-label="Floating label" cols="30" rows="3"></ino-textarea>
      <ino-textarea ino-label="Floating label" value="With value" cols="30" rows="3"></ino-textarea>

      <h4>States</h4>
      <ino-textarea placeholder="Disabled" disabled cols="30" rows="3"></ino-textarea>
      <ino-textarea placeholder="Required" required cols="30" rows="3"></ino-textarea>
    </div>
  `
  );
