import { Components } from '@inovex.de/elements';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { defaultDecorator, withColorScheme } from '../utils';
import './ino-range.scss';

export default {
  title: 'Input/<ino-range>',
  component: 'ino-range',
  decorators: [(story) => defaultDecorator(story, 'story-range')],
};

export const Playground: Story<Components.InoRange> = (args) => html`
  <ino-range
    class="customizable-range"
    disabled="${args.disabled}"
    min="${args.min}"
    max="${args.max}"
    name="${args.name}"
    discrete="${args.discrete}"
    markers="${args.markers}"
    value="${args.value}"
    step="${args.step}"
    color-scheme="${args.colorScheme}"
  >
  </ino-range>
`;

Playground.args = {
  disabled: false,
  discrete: false,
  min: 0,
  max: 100,
  name: '',
  markers: false,
  value: 50,
  step: 1,
};
withColorScheme(Playground, 'colorScheme');

export const Colors = () => html`
  <div class="flex-parent">
    <div class="flex-child">
      <h5>primary</h5>
      <ino-range color-schem="primary" min="0" max="100" value="50"></ino-range>
    </div>
    <div class="flex-child">
      <h5>secondary</h5>
      <ino-range
        color-scheme="secondary"
        min="0"
        max="100"
        value="50"
      ></ino-range>
    </div>
    <div class="flex-child">
      <h5>success</h5>
      <ino-range
        color-scheme="success"
        min="0"
        max="100"
        value="50"
      ></ino-range>
    </div>
    <div class="flex-child">
      <h5>warning</h5>
      <ino-range
        color-scheme="warning"
        min="0"
        max="100"
        value="50"
      ></ino-range>
    </div>
    <div class="flex-child">
      <h5>error</h5>
      <ino-range color-scheme="error" min="0" max="100" value="50"></ino-range>
    </div>
    <div class="flex-child">
      <h5>light</h5>
      <ino-range color-scheme="light" min="0" max="100" value="50"></ino-range>
    </div>
    <div class="flex-child">
      <h5>dark</h5>
      <ino-range color-scheme="dark" min="0" max="100" value="50"></ino-range>
    </div>
  </div>
`;

export const SteppedRange = () => html`
  <ino-range
    color-scheme="primary"
    min="0"
    max="100"
    value="50"
    step="20"
    discrete
    markers
  ></ino-range>
`;
