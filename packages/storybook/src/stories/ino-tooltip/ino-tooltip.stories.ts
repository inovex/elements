import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import { TemplateGenerator } from '../template-generator';
import './ino-tooltip.scss';

export default {
  title: `Notification/ino-tooltip`,
  component: 'ino-tooltip',
  decorators: [(story) => decorateStoryWithClass(story, 'story-tooltip')],
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
      control: 'string'
    }
  },
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
} as Meta;

const template = new TemplateGenerator<Components.InoTooltip>(
  'ino-tooltip',
  args => html`
  <ino-button id="${args.for}">Trigger Element</ino-button>
  <ino-tooltip
    header-text="${args.headerText}"
    for="${args.for}"
    placement="${args.placement}"
    trigger="${args.trigger}"
    color-scheme="${args.colorScheme}"
    delay=${typeof args.delay === 'number'? args.delay : [args.delay]}
    arrow="${args.arrow}"
  >This is a tooltip</ino-tooltip>
`);

export const Playground = template.generatePlaygroundStory();

export const HeaderText = template.generateStoryForProp('headerText', 'Headline', {
  for: 'tooltip-target-header'
});

export const Placement = template.generateStoryForProp('placement', 'right', {
  for: 'tooltip-target-placement'
});

export const Arrow = template.generateStoryForProp('arrow', true, {
  for: 'tooltip-target-arrow'
});

export const Trigger = template.generateStoryForProp('trigger', 'click', {
  for: 'tooltip-target-trigger',
});

const templateColors = new TemplateGenerator<Components.InoTooltip>(
  'ino-tooltip',
  (args) => {

    const idLight = 'tooltip-light';
    const idDark = 'tooltip-dark';
    const idPrimary = 'tooltip-primary'

    return html`
      <ino-button id="${idLight}">Light</ino-button>
      <ino-tooltip
        color-scheme="light"
        for="${idLight}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        delay=${typeof args.delay === 'number'? args.delay : [args.delay]}
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
        delay=${typeof args.delay === 'number'? args.delay : [args.delay]}
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
        delay=${typeof args.delay === 'number'? args.delay : [args.delay]}
        arrow="${args.arrow}"
      >
        This is a tooltip 
      </ino-tooltip>
    `;
  }
);

export const ColorSchemes = templateColors.generateStoryForProp('colorScheme', 'light');

export const Delay = template.generateStoryForProp('delay', [500, 200], {
  for: 'tooltip-target-delay',
});
