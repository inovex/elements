import { boolean, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import componentReadme from '_local-elements/src/components/ino-radio/readme.md';
import './ino-radio.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-radio') {
      return;
    }

    el.setAttribute('checked', true);
  };

  document.addEventListener('checkedChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChange', eventHandler);
  };
}

export default {
  title: 'Input/<ino-radio>',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio'],
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
<div class="story-radio">
  <style>
          ino-radio.customizable-radio {
            --radio-unchecked-color: ${text(
              '--radio-unchecked-color',
              '#c1c1c1',
              'Custom Properties'
            )};
            --radio-checked-color: ${text(
              '--radio-checked-color',
              '#3d40f5',
              'Custom Properties'
            )};
            --radio-hover-color: ${text(
              '--radio-hover-color',
              '#5d60f7',
              'Custom Properties'
            )};
            --radio-active-color: ${text(
              '--radio-active-color',
              '#0d10f3',
              'Custom Properties'
            )};
            --radio-disabled-inner-circle-color: ${text(
              '--radio-disabled-inner-circle-color',
              '#777777',
              'Custom Properties'
            )};
            --radio-disabled-outer-circle-color: ${text(
              '--radio-disabled-outer-circle-color',
              '#c1c1c1',
              'Custom Properties'
            )};
          }
      </style>
        <ino-radio
          class="customizable-radio"
    checked="${boolean('checked', false)}"
    disabled="${boolean('disabled', false)}"
    name="radio-custom"
  >
    ${text('<slot />', 'Customizable Radio Button')}
  </ino-radio>
</div>

<h4>States</h4>
<div class="story-radio">
  <ino-radio>Unchecked</ino-radio>
  <ino-radio checked>Checked</ino-radio>
  <ino-radio disabled>Disabled</ino-radio>
  <ino-radio checked disabled>Checked and Disabled</ino-radio>
</div>
`;
