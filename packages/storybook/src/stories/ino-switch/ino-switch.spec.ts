import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-switch', () => {
  test('should be checked', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-switch', 'default']);
    const inoSwitch = page.locator('ino-switch');
    const input = inoSwitch.locator('input[type=hidden]');

    await expect(input).toHaveJSProperty('checked', false);
    await inoSwitch.click();
    await expect(input).toHaveJSProperty('checked', true);
  });

  test('should be stay unchecked if disabled', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-switch', 'disabled']);
    const inoSwitch = page.locator('ino-switch');
    const input = inoSwitch.locator('input[type=hidden]');

    await expect(input).toHaveJSProperty('checked', false);
    await inoSwitch.click();
    await expect(input).toHaveJSProperty('checked', false);
  });
});
