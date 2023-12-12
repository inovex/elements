import { test, expect } from '@playwright/test';

test('disabled range should not be useable', async ({ page }) => {
  await page.goto('/components/ino-range/ino-range.html');

  const container = page.getByTestId('disabled');

  await expect(container.getByRole('slider')).toBeDisabled();
});

test('discrete Slider should be useable', async ({ page }) => {
  await page.goto('/components/ino-range/ino-range.html');
  const container = page.getByTestId('discrete');
  const valueDisplay = container.getByTestId('display-value');
  const sliderThumb = container.locator('.mdc-slider__thumb-knob');
  const thumbBoundingBox = await sliderThumb.boundingBox();

  await expect(container.getByRole('slider')).toBeEnabled();
  // eslint-disable-next-line playwright/no-conditional-in-test
  if (thumbBoundingBox === null) {
    expect(1 + 1).toBe(3);
    return;
  }
  const startPoint = {
    x: thumbBoundingBox.x + thumbBoundingBox.width / 2,
    y: thumbBoundingBox.y + thumbBoundingBox.height / 2,
  };

  await page.mouse.move(startPoint.x, startPoint.y);
  await page.mouse.down();
  await page.mouse.move(startPoint.x - 50, startPoint.y);
  await page.mouse.up();
  await expect(valueDisplay).toHaveText('46');
  await page.mouse.move(startPoint.x - 50, startPoint.y);
  await page.mouse.down();
  await page.mouse.move(startPoint.x + 100, startPoint.y);
  await page.mouse.up();
  await expect(valueDisplay).toHaveText('58');
});

test('ranged Slider should be useable', async ({ page }) => {
  await page.goto('/components/ino-range/ino-range.html');
  await page.waitForTimeout(1000);
  const container = page.getByTestId('ranged');
  const startValueDisplay = container.getByTestId('display-value');
  const endValueDisplay = container.getByTestId('display-second-value');

  const rangedSliderThumbs = await container
    .locator('.mdc-slider__thumb-knob')
    .all();

  const firstThumbBoundingBox = await rangedSliderThumbs[0].boundingBox();
  const secondThumbBoundingBox = await rangedSliderThumbs[1].boundingBox();
  // eslint-disable-next-line playwright/no-conditional-in-test
  if (firstThumbBoundingBox === null || secondThumbBoundingBox === null) {
    expect(1 + 1).toBe(3);
    return;
  }
  const firstStartPoint = {
    x: firstThumbBoundingBox.x + firstThumbBoundingBox.width / 2,
    y: firstThumbBoundingBox.y + firstThumbBoundingBox.height / 2,
  };

  const secondStartpoint = {
    x: secondThumbBoundingBox.x + secondThumbBoundingBox.width / 2,
    y: secondThumbBoundingBox.y + secondThumbBoundingBox.height / 2,
  };

  await page.mouse.move(firstStartPoint.x, firstStartPoint.y);
  await page.mouse.down();
  await page.mouse.move(firstStartPoint.x - 50, firstStartPoint.y);
  await page.mouse.up();
  await expect(startValueDisplay).toHaveText('46');
  await page.mouse.move(secondStartpoint.x, secondStartpoint.y);
  await page.mouse.down();
  await page.mouse.move(secondStartpoint.x + 100, secondStartpoint.y);
  await page.mouse.up();
  await expect(endValueDisplay).toHaveText('78');
});
