import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/components/ino-segment-button.html');

  expect(await page.locator('ino-segment-button').isVisible());
});
