import { expect, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-fab', () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-fab', 'default']);
  });

  test('should render with property mini', async ({ page }) => {
    const inoFab = page.locator('ino-fab');
    const { width, height } = await inoFab.boundingBox();
    await setAttribute(inoFab, 'mini', 'true');
    const { width: miniWidth, height: miniHeight } = await inoFab.boundingBox();

    expect(width).toBeGreaterThan(miniWidth);
    expect(height).toBeGreaterThan(miniHeight);
  });

  test('should render with property extended', async ({ page }) => {
    const inoFab = page.locator('ino-fab');
    const { width } = await inoFab.boundingBox();
    await setAttribute(inoFab, 'extended', 'true');
    await inoFab.click();
    const { width: extendedWidth } = await inoFab.boundingBox();

    expect(width).toBeLessThan(extendedWidth);
  });
});
