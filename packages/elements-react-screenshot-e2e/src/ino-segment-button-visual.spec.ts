/* eslint-disable playwright/no-conditional-in-test */
import { test, expect } from '@playwright/test';
import fs from 'fs';
import Jimp from 'jimp';

test('cross browser snapshot should be identical', async ({
  page,
  browserName,
}) => {
  await page.goto('/ino-segment-button');

  const rootContainer = page.getByTestId('container');
  expect(await rootContainer.screenshot()).toMatchSnapshot();
  const screenshot = await rootContainer.screenshot();
  let masterScreenshotPath =
    __dirname +
    '/../../test-app-e2e/src/ino-segment-button/ino-segment-button-visual.spec.ts-snapshots';

  if (browserName === 'firefox') {
    masterScreenshotPath +=
      '/cross-browser-snapshot-should-be-identical-1-firefox-win32.png';
  } else if (browserName === 'webkit') {
    masterScreenshotPath +=
      '/cross-browser-snapshot-should-be-identical-1-webkit-win32.png';
  } else {
    masterScreenshotPath +=
      '/cross-browser-snapshot-should-be-identical-1-chromium-win32.png';
  }

  const masterScreenshot = fs.readFileSync(masterScreenshotPath);

  const jimage1 = await Jimp.read(screenshot);
  const jimage2 = await Jimp.read(masterScreenshot);

  const diff = Jimp.diff(jimage1, jimage2, 0.1);
  expect(diff.percent).toBeLessThan(0.1);
});
