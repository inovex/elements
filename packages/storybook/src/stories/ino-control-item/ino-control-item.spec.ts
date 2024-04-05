import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-control-item', () => {
  test('should render with checkbox which can be checked', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-control-item', 'default']);
    const checkbox = page.locator('ino-checkbox');
    const input = checkbox.locator('input[type="checkbox"]');
    await expect(checkbox).toBeVisible();
    await expect(input).not.toBeChecked();
    await checkbox.click();
    await expect(input).toBeChecked();
  });

  test('should render with radio which can be checked', async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-control-item', 'roles']);
    const radio = page.locator('ino-radio');
    const input = radio.locator('input[type="radio"]');
    await expect(radio).toBeVisible();
    await expect(input).not.toBeChecked();
    await radio.click();
    await expect(input).toBeChecked();
  });
});
