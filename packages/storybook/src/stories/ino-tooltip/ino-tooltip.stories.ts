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
      options: ['primary', 'secondary', 'light', 'transparent'],
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
    for: 'tooltip-target',
    placement: 'auto',
    trigger: 'mouseenter focus',
    colorScheme: 'primary',
    delay: 0,
    message: '',
  },
} as Meta;

const template = new TemplateGenerator<Components.InoTooltip>(
  'ino-tooltip',
  args => html`
  <ino-button id="${args.for}">Trigger Element</ino-button>
  <ino-tooltip
    for="${args.for}"
    placement="${args.placement}"
    trigger="${args.trigger}"
    color-scheme="${args.colorScheme}"
    delay=${typeof args.delay === 'number'? args.delay : [args.delay]}
  >This is a tooltip for</ino-tooltip>
`);

export const Playground = template.generatePlaygroundStory();

export const Placement = template.generateStoryForProp('placement', 'right', {
  for: 'tooltip-target-placement'
});
export const Trigger = template.generateStoryForProp('trigger', 'click', {
  for: 'tooltip-target-trigger',
});
export const Delay = template.generateStoryForProp('delay', [500, 200], {
  for: 'tooltip-target-delay',
});
