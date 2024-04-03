import { expect, Page, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

test.describe('ino-range', () => {
  const move = async (page: Page, targetPercentage: number) => {
    const slider = page.locator('.mdc-slider');
    const knob = slider.locator('.mdc-slider__thumb-knob');
    const knobBox = await knob.boundingBox();
    const sliderBox = await slider.boundingBox();

    // Start from the middle of the slider's thumb
    const start = {
      x: knobBox.x + knobBox.width / 2,
      y: knobBox.y + knobBox.height / 2,
    };
    // Slide it to some endpoint determined by the target percentage
    const end = {
      x: sliderBox.x + sliderBox.width * targetPercentage,
      y: knobBox.y + knobBox.height / 2,
    };

    await page.mouse.move(start.x, start.y);
    await page.mouse.down();
    await page.mouse.move(end.x, end.y);
    await page.mouse.up();
  };

  test('should not move thumb knob when is disabled', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-range', 'default']);
    const inoRange = page.locator('ino-range');
    const input = inoRange.getByRole('slider');
    await expect(input).toHaveValue('70');

    await setAttribute(inoRange, 'disabled', 'disabled');
    await expect(input).toBeDisabled();

    await move(page, 0.1);
    await expect(input).toHaveValue('70');
  });

  test('should move thumb knob', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-range', 'default']);
    const input = page.getByRole('slider');
    await expect(input).toHaveValue('70');

    await move(page, 0.95);
    await expect(input).toHaveValue('95');
    await move(page, 0.17);
    await expect(input).toHaveValue('17');
  });

  test('should apply custom step value', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-range', 'default']);
    const inoRange = page.locator('ino-range')
    await setAttribute(inoRange, 'step', '10');
    const input = page.getByRole('slider');
    await expect(input).toHaveValue('70');

    await move(page, 0.61);
    await expect(input).toHaveValue('60');
    await move(page, 0.86);
    await expect(input).toHaveValue('90');
  });
});
