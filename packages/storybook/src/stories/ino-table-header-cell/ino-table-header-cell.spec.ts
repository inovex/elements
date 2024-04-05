import { expect, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-table-header-cell', () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-table-header-cell', 'default']);
  });

  test('should render header cell with default options', async ({ page }) => {
    const headerCell = page.locator('ino-table-header-cell');
    const icons = headerCell.locator('ino-icon');
    const popoverInput = headerCell.locator('ino-popover input');

    await expect(icons).toHaveCount(2);
    await expect(icons.first()).toBeHidden();
    await expect(icons.last()).toBeVisible();
    await expect(headerCell).toHaveText('Label');
    await expect(popoverInput).toBeHidden();

    await headerCell.hover();
    await expect(icons.first()).toBeVisible();
    await expect(icons.last()).toBeVisible();
    await expect(popoverInput).toBeHidden();

    await headerCell.click();
    await expect(popoverInput).toBeVisible();
    await expect(popoverInput).toBeEnabled();
  });

  test('should make header cell not sortable', async ({ page }) => {
    const headerCell = page.locator('ino-table-header-cell');
    const icons = headerCell.locator('ino-icon');

    await expect(icons).toHaveCount(2);
    await setAttribute(headerCell, 'not-sortable', 'true');
    await expect(icons).toHaveCount(1);
    await expect(icons).toBeHidden();
  });
});
