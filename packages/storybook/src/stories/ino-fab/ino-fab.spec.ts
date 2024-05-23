import { expect, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-fab', () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-fab', 'default']);
  });

  test('should render with small variant', async ({ page }) => {
    const inoFab = page.locator('ino-fab');
    const { width, height } = await inoFab.boundingBox();
    await setAttribute(inoFab, 'variant', 'small');
    await inoFab.click();
    const { width: miniWidth, height: miniHeight } = await inoFab.boundingBox();

    expect(width).toBeGreaterThan(miniWidth);
    expect(height).toBeGreaterThan(miniHeight);
  });

  test('should render with extended variant', async ({ page }) => {
    const inoFab = page.locator('ino-fab');
    const { width } = await inoFab.boundingBox();
    await setAttribute(inoFab, 'variant', 'extended');
    await inoFab.click();
    const { width: extendedWidth } = await inoFab.boundingBox();

    expect(width).toBeLessThan(extendedWidth);
  });
});
