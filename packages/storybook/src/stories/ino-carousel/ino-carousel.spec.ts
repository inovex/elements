import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-carousel', () => {
  let inoCarousel: Locator;
  let firstSlide: Locator;
  let secondSlide: Locator;
  let thirdSlide: Locator;
  let leftButton: Locator;
  let rightButton: Locator;

  async function assertSelected(slide: Locator) {
    await expect(slide).toHaveClass(/ino-carousel-slide--selected/);
  }

  async function assertUnselected(slide: Locator) {
    await expect(slide).not.toHaveClass(/ino-carousel-slide--selected/);
  }

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Graphic', 'ino-carousel', 'default']);
    inoCarousel = page.locator('ino-carousel');

    [firstSlide, secondSlide, thirdSlide] = await page
      .locator('ino-carousel-slide')
      .all();
    [leftButton, rightButton] = await page.getByRole('button').all();

    await setAttribute(inoCarousel, 'autoplay', 'false');
  });

  test('should render with default values', async () => {
    await expect(firstSlide).toBeVisible();
  });

  test('should hide the buttons if inoHideButtons is set to true', async () => {
    await expect(leftButton).toBeVisible();
    await expect(rightButton).toBeVisible();
    await setAttribute(inoCarousel, 'hide-buttons', 'true');
    await expect(leftButton).toBeHidden();
    await expect(rightButton).toBeHidden();
  });

  test('should change image on arrow click', async () => {
    await assertSelected(firstSlide);
    await assertUnselected(secondSlide);
    await assertUnselected(thirdSlide);

    await leftButton.click();
    await assertUnselected(firstSlide);
    await assertUnselected(secondSlide);
    await assertSelected(thirdSlide);

    await leftButton.click();
    await assertUnselected(firstSlide);
    await assertSelected(secondSlide);
    await assertUnselected(thirdSlide);
  });
});
