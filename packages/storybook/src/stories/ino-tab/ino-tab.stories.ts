import { html } from 'lit-html';
import { defaultDecorator, withIconControl } from '../utils';
import { Story } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';

export default {
  title: `Structure/ino-tab`,
  component: 'ino-tab',
  decorators: [defaultDecorator],
};

export const Playground: Story<Components.InoTab> = args => html`
  <ino-tab
    icon="${args.icon}"
    indicator-content-width="${args.indicatorContentWidth}"
    label="${args.label}"
    stacked="${args.stacked}">
  </ino-tab>
`;
Playground.args = {
  indicatorContentWidth: false,
  label: 'Customizable Tab',
  stacked: false,
}
withIconControl(Playground, 'icon', 'info');

export const Variants = () => html`
  <div class="story-tab-variants">
    <ino-tab label="Default" icon="info"></ino-tab>
    <ino-tab label="Stacked" icon="info" stacked></ino-tab>
    <ino-tab-bar active-tab="0">
      <ino-tab label="Default active Tab" icon="info"></ino-tab>
    </ino-tab-bar>
    <ino-tab-bar active-tab="0">
      <ino-tab
        label="Active content width indicator"
        icon="info"
        indicator-content-width
      >
      </ino-tab>
    </ino-tab-bar>
  </div>
`;
