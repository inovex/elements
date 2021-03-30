import { html } from 'lit-html';
import { defaultDecorator, withColorScheme, withIconControl } from '../utils';

export default {
  title: `Components (WIP)/ino-tooltip`,
  component: 'ino-tooltip',
  decorators: [defaultDecorator],
};

export const Playground = (args) => html`
  <button id="tooltip-target">Tooltip</button>
  <ino-tooltip
    for="${args.for}"
    label="${args.label}"
    placement="${args.placement}"
    trigger="${args.trigger}"
    color-scheme="${args.colorScheme}">
  </ino-tooltip>
`;
Playground.args = {
  for: 'tooltip-target',
  label: 'This is a customaziable tooltip text.',
  placement: 'bottom',
  trigger: 'mouseenter focus'
};
Playground.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['top', 'right', 'bottom', 'left']
    }
  },
  trigger: {
    control: {
      type: 'select',
      options: ['mouseenter', 'focus', 'click', 'mouseenter focus', 'mouseenter click', 'focus click', 'mouseenter focus click']
    }
  }
}

withColorScheme(Playground, 'colorScheme', 'transparent');

export const Placements = args => html`
  <ino-tooltip label="This is a tooltip left" placement="left" for="tooltip-positions-target"></ino-tooltip>
  <ino-tooltip label="This is a tooltip right" placement="right" for="tooltip-positions-target"></ino-tooltip>
  <ino-tooltip label="This is a tooltip top" placement="top" for="tooltip-positions-target"></ino-tooltip>
  <ino-tooltip label="This is a tooltip bottom" placement="bottom" for="tooltip-positions-target"></ino-tooltip>
  <button class="placement-button" id="tooltip-positions-target">Tooltip</button>
`;

export const Triggers = args => html`
  <button id="tooltip-mouseenter">Mouseenter</button>
  <ino-tooltip placement="top" for="tooltip-mouseenter" label="This tooltip occurs on hover"></ino-tooltip>

  <button id="tooltip-focus">Focus</button>
  <ino-tooltip placement="top" for="tooltip-focus" label="This tooltip occurs on focus" trigger="focus"></ino-tooltip>

  <button id="tooltip-click">Click</button>
  <ino-tooltip placement="right" for="tooltip-click" label="This tooltip occurs on click" trigger="click"></ino-tooltip>
`;

export const Colors = args => html`
  <button id="primary-tooltip" color-scheme="primary">Primary</button>
  <ino-tooltip for="primary-tooltip" label="Primary color scheme" color-scheme="primary" placement="top"></ino-tooltip>

  <button id="secondary-tooltip" color-scheme="secondary">Secondary</button>
  <ino-tooltip for="secondary-tooltip" label="Secondary color scheme" color-scheme="secondary" placement="top"></ino-tooltip>

  <button id="light-tooltip" color-scheme="grey">Light</button>
  <ino-tooltip for="light-tooltip" label="Light color scheme" color-scheme="light" placement="top"></ino-tooltip>

  <button id="transparent-tooltip" color-scheme="grey">Transparent</button>
  <ino-tooltip for="transparent-tooltip" label="Transparent color scheme" color-scheme="transparent" placement="top"></ino-tooltip>
`;
