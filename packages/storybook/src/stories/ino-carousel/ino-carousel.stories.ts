import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';

import lightningImg from '../../assets/images/lightning.jpg';
import mountainsImg from '../../assets/images/mountains.jpg';
import nidarosImg from '../../assets/images/nidaros.jpg';

import { decorateStoryWithClass } from '../utils';

import './ino-carousel.scss';

export default {
  title: 'Graphic/<ino-carousel>',
  component: 'ino-carousel',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-carousel'),
  ],
  args: {
    value: 0,
    autoplay: true,
    hideButtons: false,
    infinite: true,
    intermission: 2000,
    reverse: false,
  },
} as Meta;

const onSlideChanged = (ev: CustomEvent<string>) => {
  const carouselEl = ev.target as HTMLInoCarouselElement;
  carouselEl.value = ev.detail;
}

const template = new TemplateGenerator<Components.InoCarousel>(
  'ino-carousel',
  args => html`
  <div class="ino-carousel-example">
    <ino-carousel
      class="customizable-carousel"
      value="${args.value}"
      autoplay="${args.autoplay}"
      hide-buttons="${args.hideButtons}"
      infinite="${args.infinite}"
      intermission="${args.intermission}"
      reverse="${args.reverse}"
      @valueChange="${onSlideChanged}"
    >
      <ino-carousel-slide src=${lightningImg} value="0"></ino-carousel-slide>
      <ino-carousel-slide src=${mountainsImg} value="1"></ino-carousel-slide>
      <ino-carousel-slide src=${nidarosImg} value="2"></ino-carousel-slide>
    </ino-carousel>
  </div>
`);

export const Playground = template.generatePlaygroundStory();

export const HideButtons = template.generateStoryForProp('hideButtons', true);
export const Reverse = template.generateStoryForProp('reverse', true);
