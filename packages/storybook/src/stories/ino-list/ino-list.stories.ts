import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';

export default {
  title: 'Structure/ino-list ',
  component: 'ino-list',
};

export const Playground = (args) => html`
  <ino-list
    dense="${args.dense}"
    two-lines="${args.twoLines}"
    avatar="${args.avatar}"
    >
      <ino-list-item text="First text item"></ino-list-item>
      <ino-list-item text="Second text item"></ino-list-item>
      <ino-list-item text="Third text item"></ino-list-item>
  </ino-list>
`;
Playground.args = {
  dense: false,
  twoLines: false,
  avatar: false,
}

const exampleImg = html`
  <ino-img
    slot="leading"
    src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
    ratio-width="1"
    ratio-height="1"
  ></ino-img>
`;

export const TwoLines = () => html`
  <ino-list two-lines>
    <ino-list-item text="First text item" secondary-text="Secondary"></ino-list-item>
    <ino-list-item text="Second text item" secondary-text="Secondary"></ino-list-item>
    <ino-list-item text="Third text item" secondary-text="Secondary"></ino-list-item>
  </ino-list>
`;

export const Dense = () => html`
  <h4>Default</h4>
  <ino-list dense class="first-list">
    <ino-list-item text="First text item"></ino-list-item>
    <ino-list-item text="Second text item"></ino-list-item>
    <ino-list-item text="Third text item"></ino-list-item>
  </ino-list>

  <h4>Dense and Two Lines</h4>
  <ino-list dense two-lines>
    <ino-list-item text="First text item" secondary-text="Secondary"></ino-list-item>
    <ino-list-item text="Second text item" secondary-text="Secondary"></ino-list-item>
    <ino-list-item text="Third text item" secondary-text="Secondary"></ino-list-item>
  </ino-list>
`;

export const Avatar = () => html`
  <h4>Default</h4>
  <ino-list avatar>
    <ino-list-item text="First text item">
      ${exampleImg}
    </ino-list-item>
    <ino-list-item text="Second text item">
      ${exampleImg}
    </ino-list-item>
  </ino-list>

  <h4>Avatar and Dense</h4>
  <ino-list avatar dense>
    <ino-list-item text="First text item">
      ${exampleImg}
    </ino-list-item>
    <ino-list-item text="Second text item">
      ${exampleImg}
    </ino-list-item>
  </ino-list>

  <h4>Avatar and Two Lines</h4>
  <ino-list avatar two-lines>
    <ino-list-item text="First text item" secondary-text="Secondary">
      ${exampleImg}
    </ino-list-item>
    <ino-list-item text="Second text item" secondary-text="Secondary">
      ${exampleImg}
    </ino-list-item>
  </ino-list>
`;
