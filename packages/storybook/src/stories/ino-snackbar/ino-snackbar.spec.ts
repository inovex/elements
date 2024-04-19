import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-snackbar', () => {
  let showButton: Locator;
  let inoSnackbar: Locator;

  test.beforeEach(async ({ page }) => {
    showButton = page.getByRole('button', { name: 'Show Snackbar' });
    inoSnackbar = page.getByRole('button', { name: 'Some Action' });
  });

  test('should not be visible if open is set to false', async ({ page }) => {
    await goToStory(page, ['Notification', 'ino-snackbar', 'default']);
    await expect(inoSnackbar).toBeHidden();
  });

  test('should display the snackbar when "Show Snackbar" button is clicked', async ({ page }) => {
    await goToStory(page, ['Notification', 'ino-snackbar', 'default']);
    await showButton.click();
    await expect(inoSnackbar).toBeVisible();
  });

  test('should close the snackbar when the close icon is clicked', async ({ page }) => {
    await goToStory(page, ['Notification', 'ino-snackbar', 'default']);
    await showButton.click();
    const closeIcon = page.getByLabel('Close notification').getByRole('button');
    await closeIcon.click();
    await expect(inoSnackbar).toBeHidden();
  });

  test('should close the snackbar when ESC is pressed', async ({ page }) => {
    await goToStory(page, ['Notification', 'ino-snackbar', 'default']);
    await showButton.click();
    await page.press('body', 'Escape');
    await expect(inoSnackbar).toBeHidden();
  });

  test('should automatically close the snackbar after the default timeout period', async ({ page }) => {
    await goToStory(page, ['Notification', 'ino-snackbar', 'timeout']);
    await showButton.click();
    await expect(inoSnackbar).toBeVisible();
    await expect(inoSnackbar).toBeHidden(); // should automatically be hidden
  });
});
