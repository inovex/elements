import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-carousel', () => {
  let inoCarousel: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['graphic', 'ino-carousel', 'default']);
    inoCarousel = page.locator('ino-carousel');
    await inoCarousel.evaluate((e) => e.setAttribute('autoplay', 'false'));
  });

  test('should render with default values', async () => {
    await expect(inoCarousel.locator('.ino-carousel-slide--selected')).toBeVisible();
  });

  test('should hide the buttons if inoHideButtons is set to true', async () => {
    await inoCarousel.evaluate((e) => e.setAttribute('hide-buttons', 'true'));
    await expect(inoCarousel.getByRole('button')).toHaveCount(0);
  });
});
