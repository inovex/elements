import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import { getIcons } from '../utils';

import './ino-img.scss';

const InoImgMeta = {
  title: 'Graphic/ino-img',
  component: 'ino-img',
  render: args => html`
    <ino-img
      class="customizable-img"
      alt="${args.alt}"
      decoding="${args.decoding}"
      height="${args.height}"
      sizes="${args.sizes}"
      src="${args.src}"
      srcset="${args.srcset}"
      width="${args.width}"
      usemap="${args.usemap}"
      ratio-width="${args.ratioWidth}"
      ratio-height="${args.ratioHeight}"
      rounded="${args.rounded}"
      fallback-icon="${args.fallbackIcon}"
    >
    </ino-img>
  `,
  argTypes: {
    fallbackIcon: {
      control: {
        type: 'select',
      },
      options: getIcons(),
    },
  },
  args: {
    alt: 'Alternative Text',
    decoding: 'async',
    height: 100,
    src: 'https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png',
    width: 100,
    ratioWidth: 1,
    ratioHeight: 1,
    rounded: false,
    srcset: '',
    usemap: '',
    fallbackIcon: 'image_not_available',
  },
} as Meta<Components.InoImg>;

export default InoImgMeta;

export const Default = Story({
  ...InoImgMeta,
});

export const Rounded = Story({
  ...Default,
  docsFromProperty: 'rounded',
  args: {
    rounded: true,
  },
});

export const FallbackIcon = Story({
  ...Default,
  docsFromProperty: 'fallbackIcon',
  args: {
    src: 'https://cdn-images-1/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png',
  },
});
