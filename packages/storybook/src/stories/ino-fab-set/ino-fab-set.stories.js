import { boolean, select, text } from '@storybook/addon-knobs';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-fab-set/readme.md';

import ICONS from '_local-elements/src/components/ino-icon/icons';
import './ino-fab-set.scss';

const tooltipPlacementOptions = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'none',
];

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;

    if (el.tagName !== 'INO-FAB-SET') return;

    const newState =
      el.getAttribute('ino-open-dial') === 'false' ? 'true' : 'false';
    el.setAttribute('ino-open-dial', newState);
  };

  document.addEventListener('click', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('click', eventHandler);
  };
}

export default {
  title: 'Buttons/<ino-fab-set>',
  parameters: {
    actions: {
      handles: ['click ino-fab'],
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
    <div class="story-fab-set">
      <ino-fab-set
      ino-open-dial="${boolean('ino-open-dial', false)}"
      ino-top-bottom-location="${select(
        'ino-top-bottom-location',
        ['top', 'bottom'],
        'bottom',
        'FAB-set'
      )}"
      ino-left-right-location="${select(
        'in-left-right-location',
        ['left', 'right'],
        'left',
        'FAB-set'
      )}"
      ino-dial-direction="${select(
        'ino-dial-direction',
        ['top', 'bottom', 'left', 'right'],
        'top',
        'FAB-set'
      )}">

        <ino-fab
          ino-icon="${select('ino-icon-fab1', ICONS, 'star', 'First FAB')}"
          ino-label="${text('ino-label-fab1', 'Label 1', 'First FAB')}"
          ino-mini="${boolean('ino-mini-fab1', true, 'First FAB')}"
        ></ino-fab>
        <ino-fab
          ino-icon="${select('ino-icon-fab2', ICONS, 'favorite', 'Second FAB')}"
          ino-label="${text('ino-label-fab2', 'Label 2', 'Second FAB')}"
          ino-mini="${boolean('ino-mini-fab2', true, 'Second FAB')}"
        ></ino-fab>
        <ino-fab
          ino-icon="${select('ino-icon-fab3', ICONS, 'info', 'Third FAB')}"
          ino-label="${text('ino-label-fab3', 'Label 3', 'Third FAB')}"
          ino-mini="${boolean('ino-mini-fab3', true, 'Third FAB')}"
        ></ino-fab>
      </ino-fab-set>
    </div>
  `;
