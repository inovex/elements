
import { storiesOf } from '@storybook/html';
import { withActions } from '@storybook/addon-actions';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import { boolean, select } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import findElementUpwards from '../../core/helpers/findElementUpwards';

import componentReadme from '_local-elements/src/components/ino-icon-button/readme.md';
import './ino-icon-button.scss';

import ICONS from '_local-elements/src/components/ino-icon/icons';

ICONS.push(''); // additionally: allow no icon

const eventToListen = 'click';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = findElementUpwards(e.target, 'ino-icon-button', 'custom');

    if (!el) {
      return;
    }

    const checkedIcons = ['star', 'favorite'];
    const uncheckedIcons = checkedIcons.map(icon => `${icon}`);

    const elementIcon = el.getAttribute('ino-icon');

    const newIcon = checkedIcons.includes(elementIcon) ?
      `${elementIcon}` : uncheckedIcons.includes(elementIcon) ?
        elementIcon.substring(0, elementIcon.indexOf('_')) : elementIcon;

    el.setAttribute('ino-icon', newIcon);
  }
  // == event block

  document.addEventListener(eventToListen, eventHandler);

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener(eventToListen, eventHandler);
  }
}

storiesOf('<ino-icon-button>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions(
    `${eventToListen} .customizable-icon-button ino-icon-button` // this is just for the "ACTION LOGGER" panel
  ))
  .addDecorator(story => {
    addons.getChannel().emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add('Default usage', () => /*html*/`
    <div class="story-icon-button">
      <div class="customizable-icon-button">
        <h4>Customizable icon button</h4>
        <ino-icon-button
          class="custom"
          ino-icon="${select('ino-icon', ICONS, 'star')}"
          ino-color-scheme="${select(
            'ino-color-scheme',
            ['', 'primary', 'secondary', 'tertiary', 'success', 'warning',
            'error', 'light', 'dark'
            ],
            ''
          )}"
          disabled="${boolean('disabled', false)}">
        </ino-icon-button>
      </div>

      <h4>Colors</h4>
      <div class="flex-parent-center">
        <div class="flex-child">
          <h5>Primary</h5>
          <ino-icon-button ino-icon="star" ino-color-scheme="primary"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Secondary</h5>
          <ino-icon-button ino-icon="star" ino-color-scheme="secondary"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Tertiary</h5>
          <ino-icon-button ino-icon="star" ino-color-scheme="tertiary"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Success</h5>
          <ino-icon-button ino-icon="star" ino-color-scheme="success"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Warning</h5>
          <ino-icon-button ino-icon="star" ino-color-scheme="warning"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Error</h5>
          <ino-icon-button ino-icon="star" ino-color-scheme="error"></ino-icon-button>
        </div>
      </div>
    </div>
  `);
