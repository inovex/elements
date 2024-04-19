import { expect, Locator, Page, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-carousel', () => {
  async function assertSelected(slide: Locator) {
    await expect(slide).toHaveClass(/ino-carousel-slide--selected/);
  }

  async function assertUnselected(slide: Locator) {
    await expect(slide).not.toHaveClass(/ino-carousel-slide--selected/);
  }

  async function provideLocators(page: Page) {
    const inoCarousel = page.locator('ino-carousel');
    const [firstSlide, secondSlide, thirdSlide] = await page.locator('ino-carousel-slide').all();
    const [leftButton, rightButton] = await page.getByRole('button').all();

    return {
      inoCarousel,
      firstSlide,
      secondSlide,
      thirdSlide,
      leftButton,
      rightButton,
    };
  }

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Graphic', 'ino-carousel', 'default']);
    const inoCarousel = page.locator('ino-carousel');
    await setAttribute(inoCarousel, 'autoplay', 'false');
    await inoCarousel.hover();
  });

  test('should render with default values', async ({ page }) => {
    const { firstSlide } = await provideLocators(page);
    await expect(firstSlide).toBeVisible();
  });

  test('should hide the buttons if hide-buttons is true', async ({ page }) => {
    const locators = await provideLocators(page);
    await expect(locators.leftButton).toBeVisible();
    await expect(locators.rightButton).toBeVisible();

    await setAttribute(locators.inoCarousel, 'hide-buttons', 'true');

    await expect(locators.leftButton).toBeHidden();
    await expect(locators.rightButton).toBeHidden();
  });

  test('should change image on arrow click', async ({ page }) => {
    const locators = await provideLocators(page);
    await assertSelected(locators.firstSlide);
    await assertUnselected(locators.secondSlide);
    await assertUnselected(locators.thirdSlide);

    await locators.leftButton.click();
    await assertUnselected(locators.firstSlide);
    await assertUnselected(locators.secondSlide);
    await assertSelected(locators.thirdSlide);

    await locators.leftButton.click();
    await assertUnselected(locators.firstSlide);
    await assertSelected(locators.secondSlide);
    await assertUnselected(locators.thirdSlide);
  });
});
