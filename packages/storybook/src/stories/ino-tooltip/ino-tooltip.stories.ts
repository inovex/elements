import { html } from 'lit-html';
import { defaultDecorator, withColorScheme } from '../utils';
import { Story } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import './ino-tooltip.scss';

export default {
  title: `Notification/ino-tooltip`,
  component: 'ino-tooltip',
  decorators: [story => defaultDecorator(story, 'story-tooltip')],
};

export const Playground: Story<Components.InoTooltip> = args => html`
  <ino-button id="tooltip-target">Tooltip</ino-button>
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
  label: 'This is a tooltip text.',
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

export const Placements = () => html`
  <ino-tooltip label="This is a tooltip left" placement="left" for="tooltip-positions-target"></ino-tooltip>
  <ino-tooltip label="This is a tooltip right" placement="right" for="tooltip-positions-target"></ino-tooltip>
  <ino-tooltip label="This is a tooltip top" placement="top" for="tooltip-positions-target"></ino-tooltip>
  <ino-tooltip label="This is a tooltip bottom" placement="bottom" for="tooltip-positions-target"></ino-tooltip>
  <ino-button class="placement-button" id="tooltip-positions-target">Tooltip</ino-button>
`;

export const Triggers = () => html`
  <ino-button id="tooltip-mouseenter">Mouseenter</ino-button>
  <ino-tooltip placement="top" for="tooltip-mouseenter" label="This tooltip occurs on hover"></ino-tooltip>

  <ino-button id="tooltip-focus">Focus</ino-button>
  <ino-tooltip placement="top" for="tooltip-focus" label="This tooltip occurs on focus" trigger="focus"></ino-tooltip>

  <ino-button id="tooltip-click">Click</ino-button>
  <ino-tooltip placement="right" for="tooltip-click" label="This tooltip occurs on click" trigger="click"></ino-tooltip>
`;

export const Colors = () => html`
  <ino-button id="primary-tooltip" color-scheme="primary">Primary</ino-button>
  <ino-tooltip for="primary-tooltip" label="Primary color scheme" color-scheme="primary" placement="top"></ino-tooltip>

  <ino-button id="secondary-tooltip" color-scheme="secondary">Secondary</ino-button>
  <ino-tooltip for="secondary-tooltip" label="Secondary color scheme" color-scheme="secondary" placement="top"></ino-tooltip>

  <ino-button id="light-tooltip" color-scheme="grey">Light</ino-button>
  <ino-tooltip for="light-tooltip" label="Light color scheme" color-scheme="light" placement="top"></ino-tooltip>

  <ino-button id="transparent-tooltip" color-scheme="grey">Transparent</ino-button>
  <ino-tooltip for="transparent-tooltip" label="Transparent color scheme" color-scheme="transparent" placement="top"></ino-tooltip>
`;
