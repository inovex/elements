import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-fab', () => {
  let inoFab: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-fab', 'default']);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('load');
    inoFab = page.locator('ino-fab');
  });

  test('should render with property mini', async () => {
    const { width, height } = await inoFab.boundingBox();
    await setAttribute(inoFab, 'mini', 'true');
    const { width: miniWidth, height: miniHeight } = await inoFab.boundingBox();

    expect(width).toBeGreaterThan(miniWidth);
    expect(height).toBeGreaterThan(miniHeight);
  });

  test('should render with property extended', async () => {
    const { width } = await inoFab.boundingBox();
    await setAttribute(inoFab, 'extended', 'true');
    await inoFab.click();
    const { width: extendedWidth } = await inoFab.boundingBox();

    expect(width).toBeLessThan(extendedWidth);
  });
});
