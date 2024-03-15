import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-snackbar', () => {
  let showButton: Locator;
  let inoSnackbar: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Notification', 'ino-snackbar', 'default']);
    showButton = page.locator('button:has-text("Show Snackbar")');
    inoSnackbar = page.locator('ino-snackbar');
  });

  test('should display the snackbar when "Show Snackbar" button is clicked', async ({
    page,
  }) => {
    await showButton.click();
    const mdcSnackbar = await page.getByRole('status');
    await expect(mdcSnackbar).toBeVisible();
    await expect(inoSnackbar).toHaveAttribute('open', 'true');
  });

  test('should set "open" property to false when the close icon is clicked', async ({
    page,
  }) => {
    await showButton.click();
    const closeIcon = await page
      .getByLabel('Close notification')
      .getByRole('button');
    await closeIcon.click();
    await expect(inoSnackbar).toHaveAttribute('open', 'false');
  });
});

test.describe('ino-snackbar - Timeout', () => {
  let showButton: Locator;
  let inoSnackbar: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Notification', 'ino-snackbar', 'timeout']);
    showButton = page.locator('button:has-text("Show Snackbar")');
    inoSnackbar = page.locator('ino-snackbar');
  });

  test('should automatically close the snackbar after the default timeout period', async ({
    page,
  }) => {
    await showButton.click();
    await expect(inoSnackbar).toHaveAttribute('open', 'true');
    await page.waitForTimeout(5000);
    await expect(inoSnackbar).toHaveAttribute('open', 'false');
  });
});
