import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';

export default {
  title: 'Structure/ino-list ',
  component: 'ino-list',
  args: {
    role: null,
    multiselect: false,
  }
} as Meta<Components.InoList>;

const exampleImg = html
`
      <ino-img
      slot="leading"
      src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
      ratio-width="1"
      ratio-height="1"
    ></ino-img>
    `;

const template = new TemplateGenerator<Components.InoList>(
  'ino-list',
  args => html`
  <ino-list
    multiselect="${args.multiselect}"
    role="${args.role}"
  >
    <ino-list-item two-lines="true" >First text item</ino-list-item>
    <ino-list-item text="Second text item" two-lines="true"  avatar="true">${exampleImg}</ino-list-item>
    <ino-list-item text="Third text item" two-lines="true" avatar="true" secondary-text="Secondary Text">${exampleImg}</ino-list-item>
</ino-list>
`);

export const Playground = template.generatePlaygroundStory();
