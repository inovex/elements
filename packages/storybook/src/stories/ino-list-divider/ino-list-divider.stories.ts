import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';

export default {
  title: 'Structure/ino-list-divider',
  component: 'ino-list-divider',
  args: {
    inset: false,
    betweenLists: false,
    padded: false,
    slot: false,
  }
} as Meta<Components.InoListDivider>;

const template = new TemplateGenerator<Components.InoListDivider>(
  'ino-list-divider',
  args => html`
  <ino-list>
    <ino-list-item text="Item 2"></ino-list-item>
    <ino-list-divider
      inset="${args.inset}"
      between-lists="${args.betweenLists}"
      padded="${args.padded}"
    ></ino-list-divider>
    <ino-list-item text="Item 3"></ino-list-item>
  </ino-list>
`);
export const Playground = template.generatePlaygroundStory();
export const Padded = template.generateStoryForProp('padded', true);

const templateInsert = new TemplateGenerator<Components.InoListDivider>(
  'ino-list-divider',
  args => html`
<ino-list>
  <ino-list-item text="Add to favorites">
    <ino-icon slot="leading" icon="favorite"></ino-icon>
  </ino-list-item>
  <ino-list-divider inset="${args.inset}" between-lists="${args.betweenLists}"></ino-list-divider>
  <ino-list-item text="Star it!">
    <ino-icon slot="leading" icon="star"></ino-icon>
  </ino-list-item>
</ino-list>
`);
export const Insert = templateInsert.generateStoryForProp('inset', true);

const templateBetweenLists = new TemplateGenerator<Components.InoListDivider>(
  'ino-list-divider',
  args => html`
<ino-list>
  <ino-list-item text="List 1 - item 1"></ino-list-item>
  <ino-list-item text="List 1 - item 2"></ino-list-item>
  <ino-list-item text="List 1 - item 3"></ino-list-item>
</ino-list>
<ino-list-divider between-lists="${args.betweenLists}"></ino-list-divider>
<ino-list>
  <ino-list-item text="List 2 - item 1"></ino-list-item>
  <ino-list-item text="List 2 - item 2"></ino-list-item>
  <ino-list-item text="List 2 - item 3"></ino-list-item>
</ino-list>
`);
export const BetweenLists = templateBetweenLists.generateStoryForProp('betweenLists', true);

