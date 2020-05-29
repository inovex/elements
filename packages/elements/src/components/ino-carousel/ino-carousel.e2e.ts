import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_CAROUSEL = `<ino-carousel><ino-carousel-slide></ino-carousel-slide></ino-carousel>`;
const SELECTOR = 'ino-carousel';

describe('ino-carousel', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_CAROUSEL);
    const carousel = await page.find(SELECTOR);

    expect(carousel).toBeDefined();
  });

  describe('Properties', () => {

  });

  describe('Events', () => {

  });
});
