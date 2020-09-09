import { select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-popover/readme.md';
import './ino-popover.scss';

export default {
  title: 'Notification/<ino-popover>',
  decorators: [withStencilReadme(componentReadme)],
};

export const DefaultUsage = () => /*html*/ `
    <div class="story-popover">
      <ino-button id="popover-target">Popover</ino-button>
      <ino-popover
        ino-for="${text('ino-for', 'popover-target')}"
        ino-placement="${select('ino-placement', ['top', 'right', 'bottom', 'left'], 'top')}"
        ino-color-scheme="${select(
          'ino-color-scheme',
          ['primary', 'secondary', 'light', 'transparent'],
          'transparent'
        )}"
        ino-trigger="${select(
          'ino-trigger',
          [
            'mouseenter',
            'focus',
            'click',
            'mouseenter focus',
            'mouseenter click',
            'focus click',
            'mouseenter focus click',
          ],
          'mouseenter focus'
        )}">
        <div class="styled-popover"><ino-icon ino-icon="user"></ino-icon> This is a styled popover.</div>
      </ino-popover>

      <h4>Placements</h4>
      <ino-popover ino-placement="left" ino-for="popover-positions-target">This is a simple popover on the left</ino-popover>
      <ino-popover ino-placement="right" ino-for="popover-positions-target">This is a simple popover on the right</ino-popover>
      <ino-popover ino-placement="top" ino-for="popover-positions-target">This is a simple popover on the top</ino-popover>
      <ino-popover ino-placement="bottom" ino-for="popover-positions-target">This is a simple popover on the bottom</ino-popover>
      <ino-button class="placement-button" id="popover-positions-target">Popover</ino-button>

      <h4>Triggers</h4>
      <ino-button id="popover-hover-focus">Hover & focus</ino-button>
      <ino-popover ino-for="popover-hover-focus">This popover occurs on hover and focus.</ino-popover>

      <ino-button id="popover-click">Click</ino-button>
      <ino-popover ino-for="popover-click" ino-trigger="click">This popover occurs on click.</ino-popover>
    </div>
  `;

DefaultUsage.storyName = 'Default usage';
