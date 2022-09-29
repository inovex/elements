import { boolean, select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import findElementUpwards from '../../core/helpers/findElementUpwards';

import componentReadme from '_local-elements/src/components/ino-icon-button/readme.md';
import './ino-icon-button.scss';

import ICONS from '_local-elements/src/components/ino-icon/icons';

ICONS.push(''); // additionally: allow no icon

const eventToListen = 'click';
let managedIconButtonState = true;

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = findElementUpwards(e.target, 'ino-icon-button', 'custom');

    if (!el) {
      return;
    }

    const checkedIcons = ['star', 'favorite'];
    const uncheckedIcons = checkedIcons.map((icon) => `${icon}`);

    const elementIcon = el.getAttribute('ino-icon');

    const newIcon = checkedIcons.includes(elementIcon)
      ? `${elementIcon}`
      : uncheckedIcons.includes(elementIcon)
      ? elementIcon.substring(0, elementIcon.indexOf('_'))
      : elementIcon;

    el.setAttribute('ino-icon', newIcon);
  };

  const managedButtonHandler = function (e) {
    const el = findElementUpwards(e.target, 'ino-icon-button', 'managed');
    if (!el) {
      return;
    }

    managedIconButtonState = !managedIconButtonState;
    el.setAttribute('ino-activated', managedIconButtonState);
  };
  // == event block

  document.addEventListener(eventToListen, eventHandler);
  document.addEventListener(eventToListen, managedButtonHandler);

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener(eventToListen, eventHandler);
    document.removeEventListener(eventToListen, managedButtonHandler);
  };
}

export default {
  title: 'Buttons/<ino-icon-button>',
  parameters: {
    actions: {
      handles: [`${eventToListen} .customizable-icon-button ino-icon-button`],
    },
  },
  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /*html*/ `
    <div class="story-icon-button">
        <style>
        .customizable-icon-button {
          --ino-icon-button-size: ${text('--ino-icon-button-size', '48px')};
          --ino-icon-button-icon-size: ${text(
            '--ino-icon-button-icon-size',
            '24px'
          )};
          --ino-icon-button-icon-color: ${text(
            '--ino-icon-button-color',
            '#000000'
          )};
          --ino-icon-button-icon-active-color: ${text(
            '--ino-icon-button-active-color',
            '#000000'
          )};
          --ino-icon-button-background-color: ${text(
            '--ino-icon-button-background-color',
            'transparent'
          )};
          --ino-icon-button-background-active-color: ${text(
            '--ino-icon-button-background-active-color',
            '#000000'
          )};
        }
      </style>
      <div class="customizable-icon-button">
        <h4>Customizable icon button</h4>
        <ino-icon-button
          class="custom"
          ino-icon="${select('ino-icon', ICONS, 'star')}"
          ino-activated="${boolean('ino-activated', false)}"
          ino-filled="${boolean('ino-filled', false)}"
          disabled="${boolean('disabled', false)}">
        </ino-icon-button>
      </div>

      <h4>Filled</h4>
      <div class="flex-parent-center">
        <div class="flex-child">
          <h5>Primary</h5>
          <ino-icon-button ino-icon="time" ino-filled></ino-icon-button>
        </div>
      </div>

      <h4>States</h4>
      <div class="flex-parent-center">
        <div class="flex-child">
          <h5>Activated (Managed)</h5>
          <ino-icon-button class="managed" ino-icon="time" ino-color-scheme="primary" ino-activated></ino-icon-button>
        </div>

        <div class="flex-child">
          <h5>Activated (Managed, Filled)</h5>
          <ino-icon-button class="managed" ino-icon="time" ino-color-scheme="primary" ino-filled ino-activated></ino-icon-button>
        </div>
      </div>

      <h4>Variations</h4>
      <div class="flex-parent-center">
        <div class="flex-child">
          <h5>Filled primary</h5>
          <ino-icon-button ino-filled ino-color-scheme="primary" ino-icon="time"></ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>CSS Variables</h5>
          <ino-icon-button 
            style="
              --ino-icon-button-icon-color: white;
              --ino-icon-button-background-color: purple;
              --ino-icon-button-icon-active-color: white;
              --ino-icon-button-background-active-color: pink;
            " 
            ino-icon="time"
          >
          </ino-icon-button>
        </div>
        <div class="flex-child">
          <h5>Managed + Changing colors</h5>
          <ino-icon-button
            class="managed"
            style="
              --ino-icon-button-icon-color: gray;
              --ino-icon-button-background-color: transparent;
              --ino-icon-button-icon-active-color: red;
              --ino-icon-button-background-active-color: red;
            "
            ino-icon="time"
            ino-activated
          >
          </ino-icon-button>
        </div>
      </div>
    </div>
  `;
