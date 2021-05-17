import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import './ino-spinner.scss';
import { defaultDecorator, withColorScheme } from '../utils';
import { Story } from '@storybook/web-components';

export default {
  title: 'Notification/ino-spinner',
  component: 'ino-spinner',
  decorators: [defaultDecorator]
};

export const Playground: Story<Components.InoSpinner> = args => html`
  <ino-spinner
    color-scheme="${args.colorScheme}"
    height="${args.height}"
    modal="${args.modal}"
    type="${args.type}"
    width="${args.width}"
  >
  </ino-spinner>
`;
Playground.args = {
  modal: false,
  type: 'tile',
  height: 40,
  width: 40
}
Playground.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['circle', 'tile', 'bounce'],
    },
  }
}
withColorScheme(Playground, 'colorScheme', 'primary');

export const Colors = () => html`
  <div class="flex-parent">
    <div class="flex-child">
      <h5>primary</h5>
      <ino-spinner color-scheme="primary"></ino-spinner>
    </div>
    <div class="flex-child">
      <h5>secondary</h5>
      <ino-spinner color-scheme="secondary"></ino-spinner>
    </div>
    <div class="flex-child">
      <h5>success</h5>
      <ino-spinner color-scheme="success"></ino-spinner>
    </div>
    <div class="flex-child">
      <h5>warning</h5>
      <ino-spinner color-scheme="warning"></ino-spinner>
    </div>
    <div class="flex-child">
      <h5>error</h5>
      <ino-spinner color-scheme="error"></ino-spinner>
    </div>
    <div class="flex-child">
      <h5>light</h5>
      <ino-spinner color-scheme="light"></ino-spinner>
    </div>
    <div class="flex-child">
      <h5>dark</h5>
      <ino-spinner color-scheme="dark"></ino-spinner>
    </div>
  </div>
`;

export const Types = () => html`
  <div class="flex-parent">
    <div class="flex-child">
      <h5>tile</h5>
      <ino-spinner type="tile"></ino-spinner>
    </div>
    <div class="flex-child">
      <h5>bounce</h5>
      <ino-spinner type="bounce"></ino-spinner>
    </div>
    <div class="flex-child">
      <h5>circle</h5>
      <ino-spinner type="circle"></ino-spinner>
    </div>
  </div>
`;

// TODO: Breaks page
// export const AsModal = () => html`
//   <ino-spinner modal></ino-spinner>
// `;