import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { defaultDecorator } from '../utils';

import './ino-fab-set.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;

    if (el.tagName !== 'INO-FAB-SET') {
      return;
    }

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
  component: 'ino-fab-set',
  parameters: {
    actions: {
      handles: ['click ino-fab'],
    },
  },
  decorators: [
    defaultDecorator,
    (story) => {
      useEffect(() => {
        const clickHandler = function (e) {
          if (e.target.tagName !== 'INO-FAB-SET') {
            return;
          }
          const el = e.target as HTMLInoFabSetElement;
          el.openDial = !el.openDial;
        };

        document.addEventListener('click', clickHandler);
        return () => {
          document.removeEventListener('click', clickHandler);
        };
      });

      return story();
    },
  ],
};

export const Playground: Story<Components.InoFabSet> = (args) => html`
  <ino-fab-set
    open-dial="${args.openDial}"
    top-bottom-location="${args.topBottomLocation}"
    left-right-location="${args.leftRightLocation}"
    dial-direction="${args.dialDirection}"
  >
    <ino-fab label="First FAB">
      <ino-icon slot="icon-leading" icon="star"></ino-icon>
    </ino-fab>
    <ino-fab label="Second FAB">
      <ino-icon slot="icon-leading" icon="favorite"></ino-icon>
    </ino-fab>
    <ino-fab label="Third FAB">
      <ino-icon slot="icon-leading" icon="info"></ino-icon>
    </ino-fab>
  </ino-fab-set>
`;

Playground.args = {
  openDial: false,
  dialDirection: 'top',
  leftRightLocation: 'left',
  topBottomLocation: 'bottom',
};

const VERTICAL_POSITION_OPTIONS = ['top', 'bottom'];
const HORIZONTAL_POSITION_OPTIONS = ['left', 'right'];

Playground.argTypes = {
  topBottomLocation: {
    control: {
      type: 'select',
    },
    options: VERTICAL_POSITION_OPTIONS,
  },
  leftRightLocation: {
    control: {
      type: 'select',
    },
    options: HORIZONTAL_POSITION_OPTIONS,
  },
  dialDirection: {
    control: {
      type: 'select',
    },
    options: [...VERTICAL_POSITION_OPTIONS, ...HORIZONTAL_POSITION_OPTIONS],
  },
};
