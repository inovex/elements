import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass, withIconControl } from '../utils';

import './ino-img.scss';

export default {
  title: 'Graphic/<ino-img>',
  component: 'ino-img',
  decorators: [(story) => decorateStoryWithClass(story)],
  argTypes: {
    decoding: {
      control: {
        type: 'select',
      },
      options: ['async', 'auto', 'sync'],
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
  },
} as Meta<Components.InoImg>;

const template = new TemplateGenerator<Components.InoImg>(
  'ino-img',
  args => html`
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
`);

export const Playground = template.generatePlaygroundStory();
withIconControl(Playground, 'fallbackIcon', 'image_not_available');
