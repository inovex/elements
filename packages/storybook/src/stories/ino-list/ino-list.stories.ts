import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';

export default {
  title: 'Structure/ino-list ',
  component: 'ino-list',
  args: {
    dense: false,
    twoLines: false,
    avatar: false,
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
    dense="${args.dense}"
    two-lines="${args.twoLines}"
    avatar="${args.avatar}"
  >
    <ino-list-item text="First text item" secondary-text="${args.twoLines ? 'Secondary Text' : ''}">${args.avatar? exampleImg : ""}</ino-list-item>
    <ino-list-item text="Second text item" secondary-text="${args.twoLines ? 'Secondary Text' : ''}">${args.avatar? exampleImg : ""}</ino-list-item>
    <ino-list-item text="Third text item" secondary-text="${args.twoLines ? 'Secondary Text' : ''}">${args.avatar? exampleImg : ""}</ino-list-item>
</ino-list>
`);

export const Playground = template.generatePlaygroundStory();

export const TwoLines = template.generateStoryForProp('twoLines', true);
export const Dense = template.generateStoryForProp('dense', true);
export const Avatar = template.generateStoryForProp('avatar', true);
