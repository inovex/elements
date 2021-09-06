import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: `Structure/ino-nav-item`,
  component: 'ino-nav-item',
} as Meta;

export const Playground = (args) => html`
  <div class="story-list">
    <h4>Customizable nav item</h4>
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${args.text}"
        sub-text="${args.subText}"
        activated="${args.activated}"
        disabled="${args.disabled}"
      >
        <ino-icon icon="onboarding"></ino-icon>
      </ino-nav-item>
    </ino-list>
  </div>
`;
Playground.args = {
  text: 'Nav item',
  subText: 'Nav item sub text',
  activated: false,
  disabled: false,
};

export const States = () => html`
  <ino-list>
    <ino-nav-item text="Simple item"></ino-nav-item>
    <ino-nav-item text="Simple item 2"></ino-nav-item>
    <ino-nav-item activated text="Activated item"></ino-nav-item>
    <ino-nav-item disabled text="Disabled item"></ino-nav-item>
  </ino-list>
`;

export const TwoLines = () => html`
  <ino-list two-lines="true">
    <ino-nav-item text="Simple item" sub-text="Secondary Text"></ino-nav-item>
    <ino-nav-item
      text="Simple item 2"
      sub-text="Secondary Text 2"
    ></ino-nav-item>
  </ino-list>
`;

export const Graphic = () => html`
  <ino-list>
    <ino-nav-item text="Lorem ipsum dolor sit">
      <ino-icon icon="onboarding"></ino-icon>
    </ino-nav-item>
    <ino-nav-item text="Lorem ipsum dolor sit">
      <ino-img src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ratio-width="1" ratio-height="1"></ino-img>
    </ino-nav-item>
  </ino-list>
  </div>
`;
