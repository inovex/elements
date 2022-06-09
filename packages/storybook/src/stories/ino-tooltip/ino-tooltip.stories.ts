import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, withColorScheme } from '../utils';
import { TemplateGenerator } from '../template-generator';
import './ino-tooltip.scss';

export default {
  title: `Notification/ino-tooltip`,
  component: 'ino-tooltip',
  decorators: [(story) => decorateStoryWithClass(story, 'story-tooltip')],
  argTypes: {
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
  },
  args: {
    for: 'tooltip-target',
    defaultSlot: 'This is a tooltip text.',
    label: '',
    placement: 'bottom',
    trigger: 'mouseenter focus',
    colorScheme: 'primary',
    buttonLabel: 'Tooltip',
  },
} as Meta;

type InoTooltipExtended = Components.InoTooltip & {
  dafaultSlot: string,
  buttonLabel: string,
}

const template = new TemplateGenerator<InoTooltipExtended>(
  'ino-tooltip',
  args => html`
  <ino-button id="${args.for}">${args.buttonLabel}</ino-button>
  <ino-tooltip
    for="${args.for}"
    label="${args.label}"
    placement="${args.placement}"
    trigger="${args.trigger}"
    color-scheme="${args.colorScheme}"
  >${args.defaultSlot}</ino-tooltip>
`);

export const Playground = template.generatePlaygroundStory();
withColorScheme(Playground, 'colorScheme', 'transparent');

export const Placement = template.generateStoryForProp('placement', 'right', {
  for: 'tooltip-target-placement',
});
export const Trigger = template.generateStoryForProp('trigger', 'click', {
  for: 'tooltip-target-trigger',
  buttonLabel: 'Click',
});
export const ColorScheme = template.generateStoryForProp('colorScheme', 'secondary', {
  for: 'tooltip-target-color-scheme',
});