import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import './ino-menu.scss';

export default {
  title: `Structure/ino-menu`,
  component: 'ino-menu',
  decorators: [(story) => defaultDecorator(story, 'story-ino-menu')],
};

export const Playground = (args) => html`
  <ino-card ino-disable-elevation>
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
`;
Playground.args = {
  placement: 'auto',
};
Playground.argTypes = {
  placement: {
    type: 'select',
  },
  options: ['auto', 'top', 'right', 'bottom', 'left'],
};
