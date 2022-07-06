import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CAROUSEL = `
<ino-carousel>
    <ino-carousel-slide value="0" id="slide1"></ino-carousel-slide>
    <ino-carousel-slide value="1" id=slide2></ino-carousel-slide>
</ino-carousel>`;
const CAROUSEL = 'ino-carousel';
const DIV_SELECTOR = 'ino-carousel > div';

describe('ino-carousel', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_CAROUSEL);
    const carousel = await page.find(CAROUSEL);

    const slide_one = await page.find('#slide1');
    const slide_two = await page.find('#slide2');

    expect(slide_one).toHaveClass('ino-carousel-slide--selected');
    expect(slide_two).not.toHaveClass('ino-carousel-slide--selected');
    expect(carousel).toBeDefined();
  });

  describe('Properties', () => {
    it('should hide the buttons if inoHideButtons is set to true', async () => {
      const page = await setupPageWithContent(INO_CAROUSEL);
      const carousel = await page.find(CAROUSEL);

      await carousel.setAttribute('hide-buttons', true);
      await page.waitForChanges();

      const div = await page.find(DIV_SELECTOR);
      expect(div).toHaveClass('ino-carousel--no-buttons');
    });
  });
});

describe('InoCarousel', () => {
  let page: E2EPage;
  let inoCarousel: E2EElement;
  let inoCarouselWrapper: E2EElement;
  let iconArrowRight: E2EElement;
  let iconArrowLeft: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(`

    <ino-carousel>
      <ino-carousel-slide value="a"></ino-carousel-slide>
      <ino-carousel-slide value="b"></ino-carousel-slide>
      <ino-carousel-slide value="c"></ino-carousel-slide>
    </ino-carousel>
    `);
    inoCarousel = await page.find('ino-carousel');
    inoCarouselWrapper = await page.find('ino-carousel > div');
    iconArrowLeft = await page.find('.ino-carousel__left-arrow > ino-icon-button')
    iconArrowRight = await page.find('.ino-carousel__right-arrow > ino-icon-button')
  });

  async function simulateIconClick(icon: 'Left' | 'Right'): Promise<void> {
    switch (icon) {
      case 'Left':
        await iconArrowLeft.click();
        break;
      case 'Right':
        await iconArrowRight.click();
        break;
    }
    return page.waitForChanges();
  }

  it('should slide right upon clicking  right arrow icon', async () => {
    const eventSpy = await page.spyOnEvent('valueChange');
    await simulateIconClick('Right');
    expect(eventSpy).toHaveReceivedEventDetail('b');
  });

  it('should show first slide in carousel upon clicking right arrow icon if last slide is showing', async () => {
    inoCarousel.setAttribute('value', 'c');
    await page.waitForChanges()
    const eventSpy = await page.spyOnEvent('valueChange');
    await simulateIconClick('Right');
    expect(eventSpy).toHaveReceivedEventDetail('a');
  });

  it('should show last slide in carousel upon clicking left arrow icon if first slide is showing', async () => {
    inoCarousel.setAttribute('value', 'a');
    await page.waitForChanges()
    
    const eventSpy = await page.spyOnEvent('valueChange');
    await simulateIconClick('Left');
    expect(eventSpy).toHaveReceivedEventDetail('c');
  });

});
