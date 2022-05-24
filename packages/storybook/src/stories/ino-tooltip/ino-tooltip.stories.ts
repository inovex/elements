import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, withColorScheme } from '../utils';
import './ino-tooltip.scss';

export default {
  title: `Notification/ino-tooltip`,
  component: 'ino-tooltip',
  decorators: [(story) => decorateStoryWithClass(story, 'story-tooltip')],
} as Meta;

export const Playground: Story<Components.InoTooltip> = (args) => html`
  <ino-button id="tooltip-target">Tooltip</ino-button>
  <ino-tooltip
    for="${args.for}"
    label="${args.label}"
    placement="${args.placement}"
    trigger="${args.trigger}"
    color-scheme="${args.colorScheme}"
  >${args.defaultSlot}</ino-tooltip>
`;
Playground.args = {
  for: 'tooltip-target',
  defaultSlot: 'This is a tooltip text.',
  label: '',
  placement: 'bottom',
  trigger: 'mouseenter focus',
};
Playground.argTypes = {
  placement: {
    control: {
      type: 'select',
    },
    options: ['top', 'right', 'bottom', 'left'],
  },
  trigger: {
    control: {
      type: 'select',
    },
    options: [
      'mouseenter',
      'focus',
      'click',
      'mouseenter focus',
      'mouseenter click',
      'focus click',
      'mouseenter focus click',
    ],
  },
};
withColorScheme(Playground, 'colorScheme', 'transparent');

export const Placements = () => html`
  <ino-tooltip
    placement="left"
    for="tooltip-positions-target"
  >This is a tooltip left</ino-tooltip>
  <ino-tooltip
    placement="right"
    for="tooltip-positions-target"
  >This is a tooltip right</ino-tooltip>
  <ino-tooltip
    placement="top"
    for="tooltip-positions-target"
  >This is a tooltip top</ino-tooltip>
  <ino-tooltip
    placement="bottom"
    for="tooltip-positions-target"
  >This is a tooltip bottom</ino-tooltip>
  <ino-button class="placement-button" id="tooltip-positions-target"
    >Tooltip</ino-button
  >
`;

export const Triggers = () => html`
  <ino-button id="tooltip-mouseenter">Mouseenter</ino-button>
  <ino-tooltip
    placement="top"
    for="tooltip-mouseenter"
  >This tooltip occurs on hover</ino-tooltip>

  <ino-button id="tooltip-focus">Focus</ino-button>
  <ino-tooltip
    placement="top"
    for="tooltip-focus"
    trigger="focus"
  >This tooltip occurs on focus</ino-tooltip>

  <ino-button id="tooltip-click">Click</ino-button>
  <ino-tooltip
    placement="right"
    for="tooltip-click"
    trigger="click"
  >This tooltip occurs on click</ino-tooltip>
`;

export const Colors = () => html`
  <ino-button id="primary-tooltip" color-scheme="primary">Primary</ino-button>
  <ino-tooltip
    for="primary-tooltip"
    color-scheme="primary"
    placement="top"
  >Primary color scheme</ino-tooltip>

  <ino-button id="secondary-tooltip" color-scheme="secondary"
    >Secondary</ino-button
  >
  <ino-tooltip
    for="secondary-tooltip"
    color-scheme="secondary"
    placement="top"
  >Secondary color scheme</ino-tooltip>

  <ino-button id="light-tooltip" color-scheme="grey">Light</ino-button>
  <ino-tooltip
    for="light-tooltip"
    color-scheme="light"
    placement="top"
  >Light color scheme</ino-tooltip>

  <ino-button id="transparent-tooltip" color-scheme="grey"
    >Transparent</ino-button
  >
  <ino-tooltip
    for="transparent-tooltip"
    color-scheme="transparent"
    placement="top"
  >Transparent color scheme</ino-tooltip>
`;
