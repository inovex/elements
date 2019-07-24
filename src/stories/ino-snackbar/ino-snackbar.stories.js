import { storiesOf } from "@storybook/html";
import { text, boolean } from '@storybook/addon-knobs';
import withStencilReadme from '../core/with-stencil-readme';
import componentReadme from '../../components/ino-snackbar/readme.md';
import './ino-snackbar.scss';
import CoreEvents from '@storybook/core-events';

import addons from '@storybook/addons';


function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = document.getElementById('custom-snackbar');
    if (e.target.innerHTML !== 'Show Snackbar') {
      return;
    }
    let temp = document.getElementById("snackbar-temp");
    document.body.appendChild(temp.content.cloneNode(true));
  };

  document.addEventListener('click', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('click', eventHandler);
  };
}

storiesOf('<ino-snackbar>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(story => {
  addons
    .getChannel()
    .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
   return story();
  })
  .add('Default usage', () => /*html*/`
    <div class="story-message-box">
      <div class="flex-parent-center">
        <div>
          <h4>Customizable Snackbar</h4>
          <ino-button id="show-button">Show Snackbar</ino-button>
          <template id="snackbar-temp">
            <ino-snackbar 
                id="custom-snackbar"
                ino-multiline="${boolean('ino-multiline', false)}"
                ino-message="${text('ino-message', 'Message deleted')}" 
                ino-action-text="${text('ino-action-text', 'Undo')}" 
                ino-action-on-bottom="${boolean('ino-action-on-bottom', false)}" 
                ino-align-start="${boolean('ino-align-start', false)}" />
          </template>
        </div>
      </div>
    </div>
  `);
