import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CAROUSEL = `
<ino-carousel>
    <ino-carousel-slide value="0"></ino-carousel-slide>
    <ino-carousel-slide value="1"></ino-carousel-slide>
</ino-carousel>`;
const SELECTOR = 'ino-carousel';

describe('ino-carousel', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_CAROUSEL);
    const carousel = await page.find(SELECTOR);

    expect(carousel).toBeDefined();
  });

  describe('Properties', () => {
    it('should switch to the next slide automatically if inoAutoplay is set to true', async () => {
    });

    it('should render with inoAnimated set to true', async () => {

    });

    it('should hide the buttons if inoHideButtons is set to true', async () => {

    });
  });

  describe('Events', () => {

  });
});
