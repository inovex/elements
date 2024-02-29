import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { InoCarousel } from './ino-carousel';
import { InoCarouselSlide } from '../ino-carousel-slide/ino-carousel-slide';
import { IconButton } from '../ino-icon-button/ino-icon-button';
import { listenForEvent } from '../../util/test-utils';

const CAROUSEL = 'ino-carousel';
const LEFT_ARROW_SELECTOR = '.ino-carousel__arrow--left button';
const RIGHT_ARROW_SELECTOR = '.ino-carousel__arrow--right button';

describe('InoCarousel', () => {
  let page: SpecPage;
  let inoCarousel: HTMLInoCarouselElement;
  let iconArrowRight: HTMLElement;
  let iconArrowLeft: HTMLElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [InoCarousel, InoCarouselSlide, IconButton],
      html: `<ino-carousel value="a">
      <ino-carousel-slide value="a"></ino-carousel-slide>
      <ino-carousel-slide value="b"></ino-carousel-slide>
      <ino-carousel-slide value="c"></ino-carousel-slide>
    </ino-carousel>`,
    });

    inoCarousel = page.body.querySelector(CAROUSEL);
    iconArrowLeft = page.body.querySelector(LEFT_ARROW_SELECTOR);
    iconArrowRight = page.body.querySelector(RIGHT_ARROW_SELECTOR);
  });

  async function simulateIconClick(icon: 'Left' | 'Right'): Promise<void> {
    switch (icon) {
      case 'Left':
        iconArrowLeft.click();
        break;
      case 'Right':
        iconArrowRight.click();
        break;
    }
    return await page.waitForChanges();
  }

  it('should slide right upon clicking  right arrow icon', async () => {
    const { eventSpy, assertEventDetails } = listenForEvent(
      page,
      'valueChange',
    );
    await simulateIconClick('Right');
    expect(eventSpy).toHaveBeenCalled();
    assertEventDetails('b');
  });

  it('should show first slide in carousel upon clicking right arrow icon if last slide is showing', async () => {
    const { eventSpy, assertEventDetails } = listenForEvent(
      page,
      'valueChange',
    );
    inoCarousel.setAttribute('value', 'c');
    await page.waitForChanges();
    await simulateIconClick('Right');
    expect(eventSpy).toHaveBeenCalled();
    assertEventDetails('a');
  });

  it('should show last slide in carousel upon clicking left arrow icon if first slide is showing', async () => {
    const { eventSpy, assertEventDetails } = listenForEvent(
      page,
      'valueChange',
    );
    inoCarousel.setAttribute('value', 'a');
    await page.waitForChanges();

    await simulateIconClick('Left');
    expect(eventSpy).toHaveBeenCalled();
    assertEventDetails('c');
  });
});
