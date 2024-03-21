import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-option', () => {
  let inoOption: Locator;
  let inoSelect: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-option', 'default']);
    inoOption = page.locator('ino-option');
    inoSelect = page.locator('ino-select');
  });

  test('should be select an option', async () => {
    await inoSelect.click();
    await inoOption.click();
    await expect(inoSelect.locator('.mdc-select__selected-text')).toHaveText(
      await inoOption.textContent(),
    );
  });

  test('should be disabled', async () => {
    await setAttribute(inoOption, 'disabled', 'true');
    await inoSelect.click();
    await inoOption.click();
    await expect(
      inoSelect.locator('.mdc-select__selected-text'),
    ).not.toHaveText(await inoOption.textContent());
  });

  test('should be selected', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-option', 'selected-option']);
    await expect(inoSelect.locator('.mdc-select__selected-text')).toHaveText(
      await inoOption.textContent(),
    );
  });
});
