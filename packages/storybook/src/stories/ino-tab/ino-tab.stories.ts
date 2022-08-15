import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass, withIconControl } from '../utils';

export default {
  title: 'Structure/ino-tab',
  component: 'ino-tab',
  decorators: [(story) => decorateStoryWithClass(story)],
  args: {
    indicatorContentWidth: false,
    stacked: false,
    icon: 'info',
  },
} as Meta<Components.InoTab>;

const template = new TemplateGenerator<Components.InoTab>(
  'ino-tab',
  args => html`
  <ino-tab
    icon="${args.icon}"
    indicator-content-width="${args.indicatorContentWidth}"
    stacked="${args.stacked}"
  >
    Label
  </ino-tab>
`);

export const Playground = template.generatePlaygroundStory();
withIconControl(Playground, 'icon', 'info');

export const Stacked = template.generateStoryForProp('stacked', true);
export const IndicatorContentWidth = template.generateStoryForProp('indicatorContentWidth', true);

