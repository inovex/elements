import { expect, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-img-list', () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Graphic', 'ino-img-list', 'default']);
  });

  test('should render items with same dimensions', async ({ page }) => {
    const inoImgList = page.locator('ino-img-list');
    await expect(inoImgList).toBeVisible();
    const images = inoImgList.getByRole('img');

    const { width: defaultWidth, height: defaultHeight } = await images
      .first()
      .boundingBox();
    for (const img of await images.all()) {
      const { width, height } = await img.boundingBox();
      expect(height).toEqual(defaultHeight);
      expect(width).toEqual(defaultWidth);
    }
  });

  test('should render with inoMasonry set to true', async ({ page }) => {
    const inoImgList = page.locator('ino-img-list');
    const libertyImg = inoImgList
      .getByRole('img')
      .and(inoImgList.getByAltText('liberty'));
    const { height: defaultHeight } = await libertyImg.boundingBox();

    await setAttribute(inoImgList, 'masonry', 'true');
    await expect(inoImgList).toBeVisible();
    await libertyImg.hover();

    const { height } = await libertyImg.boundingBox();
    expect(height).toBeGreaterThan(defaultHeight);
  });

  /*
  test('should render with inoEncloseLabel set to true', async () => {
    await setAttribute(inoImgList, 'enclose-label', 'true');
  });
  // */
});
