import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-segment-group', () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-segment-group', 'default']);
  });

  test('should have three segment buttons in group', async ({ page }) => {
    const group = page.locator('ino-segment-group');
    const buttons = group.locator('ino-segment-button');

    await expect(group).toBeVisible();
    await expect(group).toHaveAttribute('value', 'opt-2');
    await expect(buttons).toHaveCount(4);
  });

  test('should click on button to change value', async ({ page }) => {
    const group = page.locator('ino-segment-group');
    const buttons = group.locator('ino-segment-button');

    await expect(group).toHaveAttribute('value', 'opt-2');
    await buttons.nth(0).click();
    await expect(group).toHaveAttribute('value', 'opt-1');
    await buttons.nth(1).click();
    await expect(group).toHaveAttribute('value', 'opt-2');
    await buttons.nth(2).click();
    await expect(group).toHaveAttribute('value', 'opt-3');
    await buttons.nth(3).click();
    await expect(group).toHaveAttribute('value', 'opt-4');
  });
});
