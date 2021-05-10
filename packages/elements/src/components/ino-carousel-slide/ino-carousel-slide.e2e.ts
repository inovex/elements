import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CAROUSEL = `<ino-carousel><ino-carousel-slide></ino-carousel-slide></ino-carousel>`;

describe('ino-carousel-slide', () => {
  describe('Properties', () => {
    it('should select the slide upon setting inoSelected to true', async () => {
      const page = await setupPageWithContent(INO_CAROUSEL);
      const slide = await page.find('ino-carousel-slide');

      await slide.setAttribute('selected', true);
      await page.waitForChanges();

      expect(slide).toHaveClass('ino-carousel-slide--selected');
    });
  });
});
