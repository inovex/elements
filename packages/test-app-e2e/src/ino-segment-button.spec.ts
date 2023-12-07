import { test, expect } from '@playwright/test';

test('Button should return true on click', async ({ page }) => {
  await page.goto('/components/ino-segment-button.html');

  const container = page.getByTestId('normal');
  const button = container.getByText('My Button');
  const text = container.getByText('not checked');

  await button.click();
  await expect(text).toBeHidden();

  await expect(container.getByText('true')).toBeVisible();
  await expect(container.locator('button.button--active')).toBeVisible();
});

test('Should not emit event on already checked', async ({ page }) => {
  await page.goto('/components/ino-segment-button.html');

  const container = page.getByTestId('checked');
  const button = container.locator('button.button--active');
  await expect(button).toBeVisible();

  const text = container.getByText('not checked');
  await button.click();
  await expect(text).toBeVisible();
});

test('Should not emit event on disabled', async ({ page }) => {
  await page.goto('/components/ino-segment-button.html');

  const container = page.getByTestId('disabled');
  await expect(
    container.locator('ino-segment-button.ino-segment-button--disabled'),
  ).toBeVisible();
  const button = container.locator('button');
  await expect(button).toBeDisabled();
});
