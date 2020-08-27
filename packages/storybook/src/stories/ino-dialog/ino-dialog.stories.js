import { storiesOf } from '@storybook/html';

import componentReadme from '_local-elements/src/components/ino-dialog/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';
import './ino-dialog.scss';

function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    console.log(el);
    if (el.id === 'open-dialog-btn') {
      const dialog = document.getElementById('demo-dialog-1');
      dialog.inoOpen = true;
    }
    if(el.id === 'close-dialog-btn') {
      const dialog = document.getElementById('demo-dialog-1');
      dialog.inoOpen = false;
    }
  };

  const checkedChangeHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-segment-button') {
      return;
    }
    const group = el.closest('ino-segment-group');
    group.setAttribute('value', el.getAttribute('value'));
  };

  document.addEventListener('checkedChange', checkedChangeHandler);

  document.addEventListener('click', eventHandler);
  document.addEventListener('clickEl', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('click', eventHandler);
    document.removeEventListener('clickEl', eventHandler);
    document.removeEventListener('checkedChange', checkedChangeHandler);
  };
}

storiesOf('structure/<ino-dialog>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add('Default usage', () => /*html*/`

     <ino-button id="open-dialog-btn">Open Dialog</ino-button>
     <ino-dialog id="demo-dialog-1">
        <div class="ino-dialog-header" slot="header">
            <div class="ino-dialog-title">
                <h3>Select your favourite characters:</h3>
            </div>
            <ino-icon-button ino-icon="close" id="close-dialog-btn"></ino-icon-button>
        </div>
        <div class="ino-dialog-content">
            <ino-segment-group value="2" id="dense-segment-grp">
              <ino-segment-button ino-dense value="1">Morty</ino-segment-button>
              <ino-segment-button ino-dense value="2">Pickle Rick</ino-segment-button>
              <ino-segment-button ino-dense value="3">Squanchy</ino-segment-button>
              <ino-segment-button ino-dense value="4">Beth</ino-segment-button>
              <ino-segment-button ino-dense value="5">Jerry</ino-segment-button>
              <ino-segment-button ino-dense value="6">Summer</ino-segment-button>
          </ino-segment-group>
        </div>
        <div class="ino-dialog-footer" slot="footer">
          <ino-button ino-icon="remove" id="close-dialog-btn" style="--button-color-primary: red; --button-color-primary-light: rgba(255, 0, 0, 0.7); --button-color-primary-dark: red">Cancel</ino-button>
          <ino-button ino-icon="mail" id="close-dialog-btn">Submit</ino-button>
        </div>
     </ino-dialog>
  `);
