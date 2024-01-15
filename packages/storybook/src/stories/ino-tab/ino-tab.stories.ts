import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { getIcons } from '../utils';
import Story from '../StoryWrapper';

const InoTabMeta = {
  title: 'Structure/ino-tab',
  component: 'ino-tab',
  render: (args) => html`
    <ino-tab
      icon="${args.icon}"
      indicator-content-width="${args.indicatorContentWidth}"
      stacked="${args.stacked}"
      a11y-controls="${args.a11yControls}"
    >
      Label
    </ino-tab>
  `,
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: getIcons(),
    }
  },
  args: {
    indicatorContentWidth: false,
    stacked: false,
    icon: 'info',
    a11yControls: 'panel-id',
  },
} as Meta<Components.InoTab>;

export default InoTabMeta;

export const Default = Story({
  ...InoTabMeta,
});

export const Stacked = Story({
  ...Default,
  docsFromProperty: 'stacked',
  args: {
    stacked: true,
  }
});

export const IndicatorContentWidth = Story({
  ...Default,
  docsFromProperty: 'indicatorContentWidth',
  args: {
    indicatorContentWidth: true,
  }
});
