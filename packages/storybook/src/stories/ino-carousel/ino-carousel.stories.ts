import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';

import lightningImg from '../../assets/images/lightning.jpg';
import mountainsImg from '../../assets/images/mountains.jpg';
import nidarosImg from '../../assets/images/nidaros.jpg';

import './ino-carousel.scss';

const onSlideChanged = (ev: CustomEvent<string>) => {
  const carouselEl = ev.target as HTMLInoCarouselElement;
  carouselEl.value = ev.detail;
};

const InoCarouselMeta = {
  title: 'Graphic/<ino-carousel>',
  component: 'ino-carousel',
  render: (args) => html`
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
  `,
  args: {
    value: '0',
    autoplay: true,
    hideButtons: false,
    infinite: true,
    intermission: 2000,
    reverse: false,
  },
} as Meta<Components.InoCarousel>;

export default InoCarouselMeta;

export const Default = Story({
  ...InoCarouselMeta,
});

export const HideButtons = Story({
  ...Default,
  docsFromProperty: 'hideButtons',
  args: {
    hideButtons: true
  }
})

export const Reverse = Story({
  ...Default,
  docsFromProperty: 'reverse',
  args: {
    reverse: true
  }
})