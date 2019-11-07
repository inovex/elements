import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-icon/readme.md';
import './ino-icon.scss';

import ICONS from '../../components/ino-icon/icons';
import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';


// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-input') {
      return;
    }

    const value = e.detail;
    const chips = Array.from(document.getElementsByTagName('ino-chip'));

    chips
      .filter(chip => !chip.getAttribute('ino-icon').includes(value))
      .forEach(chip => chip.style.display = 'none')

    chips
      .filter(chip => chip.getAttribute('ino-icon').includes(value))
      .forEach(chip => chip.style.display = 'block')
  };

  document.addEventListener('valueChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('valueChange', eventHandler);
  };
}

const iconChips = ICONS
  .sort()
  .filter(name => name.length >= 1)
  .map(name => /*html*/ `
              <ino-chip
                ino-label="${name}"
                ino-icon="${name}"
                ino-fill="outline"
               >
               </ino-chip>
            `
  )
  .join()
  .replace(/,/g, ''); // Remove commas


storiesOf('<ino-icon>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(
    withActions(
      'clickEl .customizable-icon',
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
    <div class="story-icon">
      <div class="flex-parent-center">
        <div class="flex-child">
            <h4>Customizable Icon</h4>
            <ino-icon
              class="customizable-icon"
              ino-icon="${select('ino-icon', ICONS, 'info')}"
              ino-clickable="${boolean('ino-clickable', false)}">
            </ino-icon>
        </div>
      </div>
      <div class="flex-parent-center">
        <h4 style="margin-bottom: 0">Different Icons</h4>
        <ino-input class="customizable-input" ino-icon="search"></ino-input>
        <ino-chip-set>
          ${iconChips}
        </ino-chip-set>
      </div>
    </div>
  `
  );
