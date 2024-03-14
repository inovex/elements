import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-snackbar', () => {
  let showButton: Locator;
  let inoSnackbar: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Notification', 'ino-snackbar', 'default']);
    showButton = page.locator('button:has-text("Show Snackbar")');
    await showButton.click();
    
  });

  test('should display the snackbar when the open property is set to true', async () => {
    await expect(inoSnackbar).toBeVisible();
  //TODO get the locator for the snackbar right
  });

  test('should hide the snackbar when the open property is set to false', async () => {
    await showButton.click();
    await setAttribute(inoSnackbar, 'open', 'false');
    await expect(inoSnackbar).toBeHidden();
  });

  test('should auto-hide the snackbar after a specified timeout', async ({
    page,
  }) => {
    await setAttribute(inoSnackbar, 'timeout', '5000');
    await showButton.click();
    await page.waitForTimeout(5000);
    await expect(inoSnackbar).toBeHidden();
  });
});
