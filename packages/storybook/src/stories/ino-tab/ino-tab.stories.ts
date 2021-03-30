import { html } from 'lit-html';
import { defaultDecorator, withIconControl } from '../utils';

export default {
  title: `Components (WIP)/ino-tab`,
  component: 'ino-tab',
  decorators: [defaultDecorator],
};

export const Playground = (args) => html`
  <ino-tab
    label="${args.label}"
    icon="${args.icon}"
    stacked="${args.stacked}">
  </ino-tab>
`;
Playground.args = {
  label: 'Customizable Tab',
  stacked: false,
}

withIconControl(Playground, 'icon', 'info');

export const Variants = () => html`
  <div class="story-tab-variants">
    <ino-tab
        label="Default"
        icon="info"
        stacked="false">
    </ino-tab>
    <ino-tab
          label="Stacked"
          icon="info"
          stacked="true">
    </ino-tab>
    <ino-tab-bar active-tab="0">
      <ino-tab
            label="Default active Tab"
            icon="info"
            >
      </ino-tab>
    </ino-tab-bar>
    <ino-tab-bar active-tab="0">
      <ino-tab
            label="Active content width indicator"
            icon="info"
            indicator-content-width="true"
            >
      </ino-tab>
    </ino-tab-bar>
  </div>
`;
