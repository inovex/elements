import { storiesOf } from '@storybook/html';
import { select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-popover/readme.md';
import './ino-popover.scss';


storiesOf('<ino-popover>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-popover">
      <ino-button id="popover-target">Popover</ino-button>
      <ino-popover
        ino-for="${text('ino-for', 'popover-target')}"
        ino-placement="${select('ino-placement', ['top', 'right', 'bottom', 'left'], 'top')}"
        ino-trigger="${select('ino-trigger', ['hover', 'focus', 'click', 
          'hover focus', 'hover click', 'focus click', 'hover focus click'], 'hover focus'
        )}">
        <div class="styled-popover"><ino-icon ino-icon="users"></ino-icon> This is a styled popover.</div>
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
  `);