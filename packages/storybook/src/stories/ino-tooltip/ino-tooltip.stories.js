import { storiesOf } from '@storybook/html';
import { select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-tooltip/readme.md';
import './ino-tooltip.scss';


storiesOf('<ino-tooltip>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-tooltip">
      <ino-button id="tooltip-target">Tooltip</ino-button>
      <ino-tooltip
        ino-for="${text('ino-for', 'tooltip-target')}"
        ino-label="${text('ino-label', 'This is a customaziable tooltip text.')}"
        ino-placement="${select('ino-placement', ['top', 'right', 'bottom', 'left'], 'top')}"
        ino-trigger="${select('ino-trigger', ['hover', 'focus', 'click',
          'hover focus', 'hover click', 'focus click', 'hover focus click'], 'hover focus'
        )}">
      </ino-tooltip>

      <h4>Placements</h4>
      <ino-tooltip ino-label="This is a tooltip left" ino-placement="left" ino-for="tooltip-positions-target"></ino-tooltip>
      <ino-tooltip ino-label="This is a tooltip right" ino-placement="right" ino-for="tooltip-positions-target"></ino-tooltip>
      <ino-tooltip ino-label="This is a tooltip top" ino-placement="top" ino-for="tooltip-positions-target"></ino-tooltip>
      <ino-tooltip ino-label="This is a tooltip bottom" ino-placement="bottom" ino-for="tooltip-positions-target"></ino-tooltip>
      <ino-button class="placement-button" id="tooltip-positions-target">Tooltip</ino-button>

      <h4>Triggers</h4>
      <ino-button id="tooltip-hover-focus">Hover & focus</ino-button>
      <ino-tooltip ino-for="tooltip-hover-focus" ino-label="This tooltip occurs on hover and focus"></ino-tooltip>

      <ino-button id="tooltip-click">Click</ino-button>
      <ino-tooltip ino-for="tooltip-click" ino-label="This tooltip occurs on click" ino-trigger="click"></ino-tooltip>

      <h4>Colors</h4>
      <ino-button id="primary-tooltip" ino-color-scheme="primary">Primary</ino-button>
      <ino-tooltip ino-for="primary-tooltip" ino-label="Primary color scheme" ino-color-scheme="primary"></ino-tooltip>

      <ino-button id="secondary-tooltip" ino-color-scheme="secondary">Secondary</ino-button>
      <ino-tooltip ino-for="secondary-tooltip" ino-label="Secondary color scheme" ino-color-scheme="secondary"></ino-tooltip>

      <ino-button id="light-tooltip" ino-color-scheme="light">Light</ino-button>
      <ino-tooltip ino-for="light-tooltip" ino-label="Light color scheme" ino-color-scheme="light"></ino-tooltip>

      <ino-button id="transparent-tooltip" ino-fill="transparent">Transparent</ino-button>
      <ino-tooltip ino-for="transparent-tooltip" ino-label="Contrast color scheme" ino-color-scheme="transparent"></ino-tooltip>
    </div>
  `);
