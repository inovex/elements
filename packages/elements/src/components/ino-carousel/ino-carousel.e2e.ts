import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CAROUSEL = `
<ino-carousel>
    <ino-carousel-slide value="0" id="slide1"></ino-carousel-slide>
    <ino-carousel-slide value="1" id=slide2></ino-carousel-slide>
</ino-carousel>`;
const CAROUSEL = 'ino-carousel';
const DIV_SELECTOR = 'ino-carousel > div'

describe('ino-carousel', () => {

  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_CAROUSEL);
    const carousel = await page.find(CAROUSEL);

    let slide_one = await page.find('#slide1');
    let slide_two = await page.find('#slide2');

    expect(slide_one).toHaveClass('ino-carousel-slide--selected');
    expect(slide_two).not.toHaveClass('ino-carousel-slide--selected');
    expect(carousel).toBeDefined();
  });

  describe('Properties', () => {
    it('should hide the buttons if inoHideButtons is set to true', async () => {
      const page = await setupPageWithContent(INO_CAROUSEL);
      const carousel = await page.find(CAROUSEL);

      await carousel.setAttribute('ino-hide-buttons', true);
      await page.waitForChanges();

      const div = await page.find(DIV_SELECTOR);
      expect(div).toHaveClass('ino-carousel--no-buttons');
    });
  });
});
