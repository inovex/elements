import { boolean, select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-switch/readme.md';
import './ino-switch.scss';
import { INO_COLOR_SCHEMES } from '../../core/helpers/constants';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;

    if (
      el.tagName.toLowerCase() !== 'ino-switch' ||
      el.id !== 'custom-switch'
    ) {
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

export default {
  title: 'Input/<ino-switch>',

  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /*html*/ `
<div>
<h4>Customizable ino-switch</h4>
<div>
  <style>
      ino-switch.customizable-switch {
        --switch-toggled-on-color: ${text(
          '--switch-toggled-on-color',
          '#3d40f5',
          'Custom Properties',
        )};
        --switch-toggled-on-thumb-color: ${text(
          '--switch-toggled-on-thumb-color',
          '#3d40f5',
          'Custom Properties',
        )};
        --switch-toggled-on-track-color: ${text(
          '--switch-toggled-on-track-color',
          '#5d60f7',
          'Custom Properties',
        )};
        --switch-toggled-off-color: ${text(
          '--switch-toggled-off-color',
          '#c1c1c1',
          'Custom Properties',
        )};
        --switch-toggled-off-thumb-color: ${text(
          '--switch-toggled-off-thumb-color',
          '#fff',
          'Custom Properties',
        )};
        --switch-toggled-off-track-color: ${text(
          '--switch-toggled-off-track-color',
          '#777777',
          'Custom Properties',
        )};
        --switch-hover-color: ${text(
          '--switch-hover-color',
          '#5d60f7',
          'Custom Properties',
        )};
        --switch-hover-thumb-color: ${text(
          '--switch-hover-thumb-color',
          '#fff',
          'Custom Properties',
        )};
        --switch-hover-track-color: ${text(
          '--switch-hover-track-color',
          '#5d60f7',
          'Custom Properties',
        )};
        --switch-active-color: ${text(
          '--switch-active-color',
          '#0d10f3',
          'Custom Properties',
        )};
        --switch-active-thumb-color: ${text(
          '--switch-active-thumb-color',
          '#fff',
          'Custom Properties',
        )};
        --switch-active-track-color: ${text(
          '--switch-active-track-color',
          '#0d10f3',
          'Custom Properties',
        )};
        --switch-disabled-color: ${text(
          '--switch-disabled-color',
          '#c1c1c1',
          'Custom Properties',
        )};
        --switch-disabled-thumb-color: ${text(
          '--switch-disabled-thumb-color',
          '#c1c1c1',
          'Custom Properties',
        )};
        --switch-disabled-track-color: ${text(
          '--switch-disabled-track-color',
          '#c1c1c1',
          'Custom Properties',
        )};
      }
   </style>
   <ino-switch
     id="custom-switch"
     class="customizable-switch"
     checked="${boolean('checked', false)}"
     disabled="${boolean('disabled', false)}"
   >
      ${text('<slot />', 'Customizable Switch')}
   </ino-switch>
 </div>

 <h4>Color Schemes</h4>
 <div class="ino-switch-colors">
    ${INO_COLOR_SCHEMES.map(
      (color) =>
        `<ino-switch ino-color-scheme="${color}" checked>${color}</ino-switch>`,
    )
      .join()
      .replace(/,/g, '')}
</div>

<h4>States</h4>
 <div class="story-switch-states">
    <ino-switch checked>Checked</ino-switch>
    <ino-switch>Unchecked</ino-switch>
    <ino-switch disabled checked>Checked and Disabled</ino-switch>
    <ino-switch disabled>Disabled</ino-switch>
  </div>
</div>
`;
