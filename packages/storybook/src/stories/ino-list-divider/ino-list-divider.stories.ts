import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';

const InoListDividerMeta = {
  title: 'Structure/ino-list-divider',
  component: 'ino-list-divider',
  render: (args) => html`
    <ino-list>
      <ino-list-item text="Item 2"></ino-list-item>
      <ino-list-divider
        inset="${args.inset}"
        between-lists="${args.betweenLists}"
        padded="${args.padded}"
      ></ino-list-divider>
      <ino-list-item text="Item 3"></ino-list-item>
    </ino-list>
  `,
  args: {
    inset: false,
    betweenLists: false,
    padded: false,
    slot: false,
  },
} as Meta<Components.InoListDivider>;

export default InoListDividerMeta;

export const Default = Story({
  ...InoListDividerMeta,
});

export const Padded = Story({
  ...Default,
  docsFromProperty: 'padded',
  args: {
    padded: true,
  },
});

export const Inset = Story({
  ...Default,
  docsFromProperty: 'inset',
  render: (args) => html`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider
        inset="${args.inset}"
        between-lists="${args.betweenLists}"
      ></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  `,
  args: {
    inset: true,
  },
});

export const BetweenLists = Story({
  ...Default,
  docsFromProperty: 'betweenLists',
  render: (args) => html`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider
        inset="${args.inset}"
        between-lists="${args.betweenLists}"
      ></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  `,
  args: {
    betweenLists: true,
  },
});
