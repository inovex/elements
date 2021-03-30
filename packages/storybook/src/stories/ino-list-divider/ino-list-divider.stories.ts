import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import '../ino-list/ino-list.scss';

export default {
  title: 'Components (WIP)/ino-list-divider',
  component: 'ino-list-divider',
  decorators: [defaultDecorator],
};

export const Playground = (args) => html`
  <ino-list inset="${args.inset}">
    <ino-list-item text="Item 1"></ino-list-item>
    <ino-list-item text="Item 2"></ino-list-item>
    <ino-list-divider></ino-list-divider>
    <ino-list-item text="Item 3"></ino-list-item>
  </ino-list>
`;
Playground.args = {
  inset: false
}

export const Inset = () => html`
  <ino-list>
    <ino-list-item text="Save">
      <ino-icon slot="ino-list-item-leading" icon="save"></ino-icon>
    </ino-list-item>
    <ino-list-divider inset></ino-list-divider>
    <ino-list-item text="Star it!">
      <ino-icon slot="ino-list-item-leading" icon="flag"></ino-icon>
    </ino-list-item>
  </ino-list>
`;

export const InsetDense = () => html`
  <ino-list dense>
    <ino-list-item text="Save">
      <ino-icon slot="ino-list-item-leading" icon="save"></ino-icon>
    </ino-list-item>
    <ino-list-divider inset></ino-list-divider>
    <ino-list-item text="Star it!">
      <ino-icon slot="ino-list-item-leading" icon="flag"></ino-icon>
    </ino-list-item>
  </ino-list>
`;

export const BetweenLists = () => html`
  <ino-list class="divider-two-lists">
    <ino-list-item text="List 1 - item 1"></ino-list-item>
    <ino-list-item text="List 1 - item 2"></ino-list-item>
    <ino-list-item text="List 1 - item 3"></ino-list-item>
  </ino-list>
  <ino-list-divider between-lists></ino-list-divider>
  <ino-list class="divider-two-lists">
    <ino-list-item text="List 2 - item 1"></ino-list-item>
    <ino-list-item text="List 2 - item 2"></ino-list-item>
    <ino-list-item text="List 2 - item 3"></ino-list-item>
  </ino-list>
`;