import { test, expect } from '@playwright/test';

test('cross browser snapshot should be identical', async ({ page }) => {
  await page.goto(
    '/components/ino-segment-button/ino-segment-button-visual.html',
  );
  const container = page.getByTestId('container');
  expect(await container.screenshot()).toMatchSnapshot();
});
