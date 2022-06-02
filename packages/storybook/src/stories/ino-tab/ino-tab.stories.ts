import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass, withIconControl } from '../utils';

export default {
  title: `Structure/ino-tab`,
  component: 'ino-tab',
  decorators: [(story) => decorateStoryWithClass(story)],
  args: {
    indicatorContentWidth: false,
    defaultSlot: 'Customizable Tab',
    label: '',
    stacked: false,
    icon: 'info',
  },
} as Meta<Components.InoTab>;

type InoTabExtended = Components.InoTab & {
  defaultSlot: string,
}

const template = new TemplateGenerator<InoTabExtended>(
  'ino-tab',
  args => html`
  <ino-tab
    icon="${args.icon}"
    indicator-content-width="${args.indicatorContentWidth}"
    label="${args.label}"
    stacked="${args.stacked}"
  >
    ${args.defaultSlot}
  </ino-tab>
`);

export const Playground = template.generatePlaygroundStory();
withIconControl(Playground, 'icon', 'info');

export const Icon = template.generateStoryForProp('icon', 'info');
export const Label = template.generateStoryForProp('label', '');
Label.args = {
  defaultSlot: 'Label',
}
export const Stacked = template.generateStoryForProp('stacked', true);
export const IndicatorContentWidth = template.generateStoryForProp('indicatorContentWidth', true);

