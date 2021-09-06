import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'Structure/ino-list-divider',
  component: 'ino-list-divider',
} as Meta;

export const Playground = (args) => html`
  <ino-list>
    <ino-list-item text="Item 1"></ino-list-item>
    <ino-list-item text="Item 2"></ino-list-item>
    <ino-list-divider
      inset="${args.inset}"
      between-lists="${args.betweenLists}"
      padded="${args.padded}"
    ></ino-list-divider>
    <ino-list-item text="Item 3"></ino-list-item>
  </ino-list>
`;
Playground.args = {
  inset: false,
  betweenLists: false,
  padded: false,
};

export const Inset = () => html`
  <ino-list>
    <ino-list-item text="Add to favorites">
      <ino-icon slot="leading" icon="favorite"></ino-icon>
    </ino-list-item>
    <ino-list-divider inset></ino-list-divider>
    <ino-list-item text="Star it!">
      <ino-icon slot="leading" icon="star"></ino-icon>
    </ino-list-item>
  </ino-list>
`;

export const BetweenLists = () => html`
  <ino-list>
    <ino-list-item text="List 1 - item 1"></ino-list-item>
    <ino-list-item text="List 1 - item 2"></ino-list-item>
    <ino-list-item text="List 1 - item 3"></ino-list-item>
  </ino-list>
  <ino-list-divider between-lists></ino-list-divider>
  <ino-list>
    <ino-list-item text="List 2 - item 1"></ino-list-item>
    <ino-list-item text="List 2 - item 2"></ino-list-item>
    <ino-list-item text="List 2 - item 3"></ino-list-item>
  </ino-list>
`;
