import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';

import './ino-tooltip.scss';

const InoTooltipMeta = {
  title: 'Notification/ino-tooltip',
  component: 'ino-tooltip',
  argTypes: {
    for: {
      type: 'string',
    },
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
    colorScheme: {
      control: {
        type: 'select',
      },
      options: ['light', 'dark', 'primary'],
    },
    delay: {
      control: {
        type: 'object',
      },
    },
    message: {
      control: 'string',
    },
  },
  render: (args) => html`
    <ino-button id="${args.for}">Trigger Element</ino-button>
    <ino-tooltip
      header-text="${args.headerText}"
      for="${args.for}"
      placement="${args.placement}"
      trigger="${args.trigger}"
      color-scheme="${args.colorScheme}"
      delay=${typeof args.delay === 'number' ? args.delay : [args.delay]}
      arrow="${args.arrow}"
      >This is a tooltip</ino-tooltip
    >
  `,
  args: {
    headerText: '',
    for: 'tooltip-target',
    placement: 'top',
    trigger: 'mouseenter focus',
    colorScheme: 'primary',
    delay: 0,
    message: '',
    arrow: false,
  },
} as Meta<Components.InoTooltip>;
export default InoTooltipMeta;

export const Default = Story({
  ...InoTooltipMeta,
});

export const HeaderText = Story({
  ...Default,
  docsFromProperty: 'headerText',
  args: {
    headerText: 'HeaderText',
    for: 'tooltip-target-header',
  },
});

export const Placement = Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'right',
    for: 'tooltip-target-placement',
  },
});

export const Arrow = Story({
  ...Default,
  docsFromProperty: 'arrow',
  args: {
    arrow: true,
    for: 'tooltip-target-arrow',
  },
});

export const Trigger = Story({
  ...Default,
  docsFromProperty: 'trigger',
  args: {
    trigger: 'click',
    for: 'tooltip-target-trigger',
  },
});

export const ColorScheme = Story({
  ...Default,
  render: (args) => {
    const idLight = 'tooltip-light';
    const idDark = 'tooltip-dark';
    const idPrimary = 'tooltip-primary';

    return html`
      <ino-button id="${idLight}">Light</ino-button>
      <ino-tooltip
        color-scheme="light"
        for="${idLight}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        delay=${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
      <ino-button id="${idDark}">Dark</ino-button>
      <ino-tooltip
        color-scheme="dark"
        for="${idDark}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        delay=${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
      <ino-button id="${idPrimary}">Primary</ino-button>
      <ino-tooltip
        color-scheme="primary"
        for="${idPrimary}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        delay=${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
    `;
  },
});

export const Delay = Story({
  ...Default,
  docsFromProperty: 'delay',
  args: {
    delay: [500, 200],
    for: 'tooltip-target-delay',
  },
});
