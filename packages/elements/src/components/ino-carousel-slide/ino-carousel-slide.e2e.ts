import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CAROUSEL = `<ino-carousel><ino-carousel-slide></ino-carousel-slide></ino-carousel>`;
const SELECTOR = 'ino-carousel-slide';

describe('ino-carousel-slide', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_CAROUSEL);
    const carousel = await page.find(SELECTOR);

    expect(carousel).toBeDefined();
  });

  describe('Properties', () => {
    it('should select the slide upon setting inoSelected to true', async () => {
      const page = await setupPageWithContent(INO_CAROUSEL);
      const slide = await page.find('ino-carousel-slide');

      await slide.setAttribute('ino-selected', true);
      await page.waitForChanges();

      expect(slide).toHaveClass('ino-carousel-slide--selected');
    });
  });
});
