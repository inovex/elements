import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-carousel', () => {
  let inoCarousel: Locator;
  let selectedSlide: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['graphic', 'ino-carousel', 'default']);
    inoCarousel = page.locator('ino-carousel');
    selectedSlide = inoCarousel.locator('.ino-carousel-slide--selected');
    await setAttribute(inoCarousel, 'autoplay', 'false');
  });

  test('should render with default values', async () => {
    await expect(
      inoCarousel.locator('.ino-carousel-slide--selected'),
    ).toBeVisible();
  });

  test('should hide the buttons if inoHideButtons is set to true', async () => {
    await expect(inoCarousel.getByRole('button')).toHaveCount(2);
    await setAttribute(inoCarousel, 'hide-buttons', 'true');
    await expect(inoCarousel.getByRole('button')).toHaveCount(0);
  });

  test('should change image on arrow click', async () => {
    const imageBefore = await selectedSlide.innerHTML();
    const arrowButtons = inoCarousel.getByRole('button');

    await arrowButtons.first().click(); // click left
    expect(imageBefore).not.toEqual(await selectedSlide.innerHTML());

    await arrowButtons.last().click(); // click right
    expect(imageBefore).toEqual(await selectedSlide.innerHTML());
  });
});
