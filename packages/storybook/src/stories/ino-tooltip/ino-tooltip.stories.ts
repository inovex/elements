import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import { TemplateGenerator } from '../template-generator';
import './ino-tooltip.scss';

export default {
  title: 'Notification/ino-tooltip',
  component: 'ino-tooltip',
  decorators: [(story) => decorateStoryWithClass(story, 'story-tooltip')],
  args: {
    for: 'tooltip-target',
    placement: 'auto',
    trigger: 'mouseenter focus',
    colorScheme: 'primary',
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
  >This is a tooltip</ino-tooltip>
`);

export const Playground = template.generatePlaygroundStory();

export const Placement = template.generateStoryForProp('placement', 'right', {
  for: 'tooltip-target-placement',
});
export const Trigger = template.generateStoryForProp('trigger', 'click', {
  for: 'tooltip-target-trigger',
});
export const ColorScheme = template.generateStoryForProp('colorScheme', 'secondary', {
  for: 'tooltip-target-color-scheme',
});
