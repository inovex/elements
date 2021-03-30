import { html } from 'lit-html';
import './ino-spinner.scss';
import { defaultDecorator, withColorScheme, maybeCreateStoryArgs } from '../utils';

export default {
  title: 'Components (WIP)/ino-spinner',
  component: 'ino-spinner',
  decorators: [defaultDecorator]
};

const withSpinnerType = (story: any, propertyName: string, defaultValue?: string) => {
  maybeCreateStoryArgs(story);
  story.args[propertyName] = defaultValue || '';
  story.argTypes[propertyName] = {
    control: {
      type: 'select',
      options: ['circle', 'tile', 'bounce'],
    },
  }
}

export const Playground = (args) => {
  return html`
    <ino-spinner
      modal="${args.modal}"
      type="${args.type}"
      color-scheme="${args.colorScheme}"
    >
    </ino-spinner>
  `;
}
Playground.args = {
  modal: false,
}

withColorScheme(Playground, 'colorScheme', 'primary');
withSpinnerType(Playground, 'type', 'tile');

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

export const Dimensions = () => html`
  <div class="flex-parent">
    <div class="flex-child">
      <h5>Size (60px x 60px)</h5>
      <ino-spinner style="height: 60px; width: 60px;"></ino-spinner>
    </div>
  </div>
`;
