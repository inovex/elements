import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-menu.scss';

const InoMenuMeta = {
  title: 'Structure/ino-menu',
  component: 'ino-menu',
  render: (args) => html`
    <ino-card disable-elevation>
      <div class="row" slot="header">
        <p>Open Menu</p>
        <ino-icon-button icon="menu">
          <ino-menu placement="${args.placement}">
            <ino-list-item tabindex="0" text="Item 1"></ino-list-item>
            <ino-list-item tabindex="0" text="Item 2"></ino-list-item>
          </ino-menu>
        </ino-icon-button>
      </div>
    </ino-card>
  `,
  args: {
    placement: 'auto',
  },
} as Meta<Components.InoMenu>;

export default InoMenuMeta;

export const Default = Story({
  ...InoMenuMeta,
});

export const Placement = Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'left',
  },
});
