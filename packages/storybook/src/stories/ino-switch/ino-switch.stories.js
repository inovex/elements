import { storiesOf } from '@storybook/html';

import { boolean, select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-switch/readme.md';
import './ino-switch.scss';
import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';
import { INO_COLOR_SCHEMES } from '../../core/helpers/constants';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;

    if (el.tagName.toLowerCase() !== 'ino-switch' || el.id !== 'custom-switch') {
      return;
    }

    el.setAttribute('checked', e.detail);
  };

  document.addEventListener('checkedChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChange', eventHandler);
  };
}

storiesOf('Input|<ino-switch>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add(
    'Default usage',
    () => /*html*/ `
    <div>
    <h4>Customizable ino-switch</h4>
    <div>
       <ino-switch
         id="custom-switch"
         class="customizable-switch"
         ino-color-scheme="${select('ino-color-scheme', INO_COLOR_SCHEMES, 'primary')}"
         checked="${boolean('checked', false)}"
         disabled="${boolean('disabled', false)}"
       >
          ${text('<slot />', 'Customizable Switch')}
       </ino-switch>
     </div>

     <h4>Color Schemes</h4>
     <div class="ino-switch-colors">
        ${INO_COLOR_SCHEMES
            .map(color => `<ino-switch ino-color-scheme="${color}" checked>${color}</ino-switch>`)
            .join()
            .replace(/,/g, '')
        }
    </div>

    <h4>States</h4>
     <div class="story-switch-states">
        <ino-switch checked>Checked</ino-switch>
        <ino-switch>Unchecked</ino-switch>
        <ino-switch disabled checked>Checked and Disabled</ino-switch>
        <ino-switch disabled>Disabled</ino-switch>
      </div>
    </div>
  `
  );
