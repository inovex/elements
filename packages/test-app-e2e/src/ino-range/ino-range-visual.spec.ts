import { test, expect } from '@playwright/test';

test('cross browser snapshot should be identical', async ({ page }) => {
  await page.goto('/components/ino-range/ino-range-visual.html');
  const container = page.getByTestId('container');
  expect(await container.screenshot()).toMatchSnapshot();
});
