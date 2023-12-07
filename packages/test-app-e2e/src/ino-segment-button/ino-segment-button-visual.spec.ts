import { test, expect } from '@playwright/test';

test('cross browser snapshot should be identical', async ({ page }) => {
  await page.goto('/components/ino-segment-button/ino-segment-button.html');
  const screenshotContainer = page.getByTestId('screenshot');
  expect(await screenshotContainer.screenshot()).toMatchSnapshot();
});
