import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-dialog', () => {
  let inoDialog: Locator;
  let mdcDialog: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Structure', 'ino-dialog', 'default']);
    inoDialog = page.locator('ino-dialog');
    mdcDialog = page.getByRole('dialog');
  });

  test('should close the dialog upon setting open to false', async () => {
    await setAttribute(inoDialog, 'open', 'false');
    await expect(mdcDialog).toBeHidden();
  });

  test('should open the dialog upon setting open to true', async () => {
    await setAttribute(inoDialog, 'open', 'true');
    await expect(mdcDialog).toBeVisible();
  });
});
