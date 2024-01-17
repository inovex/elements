import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';

const exampleImg = html`
  <ino-img
    slot="leading"
    src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
    ratio-width="1"
    ratio-height="1"
  ></ino-img>
`;

const InoListMeta = {
  title: 'Structure/ino-list ',
  component: 'ino-list',
  render: (args) => html`
    <ino-list
      dense="${args.dense}"
      two-lines="${args.twoLines}"
      avatar="${args.avatar}"
    >
      <ino-list-item
        text="First text item"
        secondary-text="${args.twoLines ? 'Secondary Text' : ''}"
        >${args.avatar ? exampleImg : ''}</ino-list-item
      >
      <ino-list-item
        text="Second text item"
        secondary-text="${args.twoLines ? 'Secondary Text' : ''}"
        >${args.avatar ? exampleImg : ''}</ino-list-item
      >
      <ino-list-item
        text="Third text item"
        secondary-text="${args.twoLines ? 'Secondary Text' : ''}"
        >${args.avatar ? exampleImg : ''}</ino-list-item
      >
    </ino-list>
  `,
  args: {
    dense: false,
    twoLines: false,
    avatar: false,
  },
} as Meta<Components.InoList>;

export default InoListMeta;

export const Default = Story({
  ...InoListMeta,
});

export const TwoLines = Story({
  ...Default,
  docsFromProperty: 'twoLines',
  args: {
    twoLines: true,
  },
});

export const Dense = Story({
  ...Default,
  docsFromProperty: 'dense',
  args: {
    dense: true,
  },
});

export const Avatar = Story({
  ...Default,
  docsFromProperty: 'avatar',
  args: {
    avatar: true,
  },
});
