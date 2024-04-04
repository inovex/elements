import { expect, Locator, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-select - Properties', () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-select', 'default']);
  });

  test('should render with the disabled property set to true', async ({ page }) => {
    const inoSelect = page.locator('ino-select');
    await setAttribute(inoSelect, 'disabled', 'true');
    await inoSelect.click();
    await expect(inoSelect.locator('li').first()).toBeHidden();
  });

  test('should render with the required property set to true', async ({ page }) => {
    const inoSelect = page.locator('ino-select');
    await setAttribute(inoSelect, 'required', 'true');
    await expect(inoSelect.locator('input[required]')).toBeAttached();
  });
});

test.describe('ino-select - Form integration', () => {
  let inoSelect: Locator;
  let submitBtn: Locator;
  let notification: Locator;

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-select', 'form']);
    inoSelect = page.locator('ino-select');
    submitBtn = page.locator('ino-button');
    notification = page.getByText(/Form submitted/i);
  });

  test('should submit if select is required and value is set', async () => {
    await inoSelect.click();
    await inoSelect.locator('ino-option').first().click();
    await submitBtn.click();
    await expect(notification).toBeVisible();
  });

  test('should not submit if select is required and no value is set', async () => {
    await submitBtn.click();
    await expect(notification).toBeHidden();
  });
});
