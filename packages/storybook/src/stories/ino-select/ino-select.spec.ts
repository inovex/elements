import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-select', () => {
  let inoSelect: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-select', 'default']);
    inoSelect = page.locator('ino-select');
  });

  test('should render with the disabled property set to true', async () => {
    await setAttribute(inoSelect, 'disabled', 'true');
    await inoSelect.click();
    await expect(inoSelect.locator('li').first()).toBeHidden();
  });

  test('should render with the required property set to true', async () => {
    await setAttribute(inoSelect, 'required', 'true');
    await expect(inoSelect.locator('input[required]')).toBeAttached();
  });

  test('should render as an outlined element if inoOutlined is true', async () => {
    const bBoxDefault = await inoSelect.boundingBox();
    await setAttribute(inoSelect, 'outline', 'true');
    const bBoxOutline = await inoSelect.boundingBox();

    expect(bBoxOutline.height).toBe(bBoxDefault.height);
    expect(bBoxOutline.width).toBeGreaterThan(bBoxDefault.width);
  });
});
