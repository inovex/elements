import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';

// @ts-ignore
import lightningImg from '../../assets/images/lightning.jpg';
// @ts-ignore
import mountainsImg from '../../assets/images/mountains.jpg';
// @ts-ignore
import nidarosImg from '../../assets/images/nidaros.jpg';

import { defaultDecorator } from '../utils';

import './ino-carousel.scss';

export default {
  title: 'Graphic/<ino-carousel>',
  component: 'ino-carousel',
  decorators: [
    defaultDecorator,
    (story) => {
      useEffect(() => {
        const eventHandler = function (e: any) {
          if (e.target.tagName.toLowerCase() !== 'ino-icon-button') {
            return;
          }
          const iconButton: HTMLInoIconButtonElement = e.target;

          const carousel: HTMLInoCarouselElement = iconButton.closest(
            'ino-carousel'
          );
          const isLeftArrow = iconButton.icon === 'arrow_left';
          carousel.value = mod(carousel.value + (isLeftArrow ? -1 : 1), 3);
        };

        const mod = (a, b) => ((a % b) + b) % b;

        document.addEventListener('clickEl', eventHandler);

        return () => {
          document.removeEventListener('clickEl', eventHandler);
        };
      });
      return story();
    },
  ],
};

export const Playground: Story<Components.InoCarousel> = (args) => html`
  <h3>Customizable carousel</h3>
  <div class="ino-carousel-example">
    <ino-carousel
      class="customizable-carousel"
      value="${args.value}"
      autoplay="${args.autoplay}"
      animated="${args.animated}"
      hide-buttons="${args.hideButtons}"
      infinite="${args.infinite}"
      intermission="${args.intermission}"
      reverse="${args.reverse}"
    >
      <ino-carousel-slide src=${lightningImg} value="0"> </ino-carousel-slide>
      <ino-carousel-slide src=${mountainsImg} value="1"></ino-carousel-slide>
      <ino-carousel-slide src=${nidarosImg} value="2"></ino-carousel-slide>
    </ino-carousel>
  </div>
`;

Playground.args = {
  value: 0,
  autoplay: false,
  animated: false,
  hideButtons: false,
  infinite: false,
  intermission: 5000,
  reverse: false,
};

export const Autoplay = () => html`
  <ino-carousel intermission="2000" autoplay animated infinite value="0">
    <ino-carousel-slide src=${lightningImg} value="0"></ino-carousel-slide>
    <ino-carousel-slide src=${mountainsImg} value="1"></ino-carousel-slide>
    <ino-carousel-slide src=${nidarosImg} value="2"></ino-carousel-slide>
  </ino-carousel>
`;
