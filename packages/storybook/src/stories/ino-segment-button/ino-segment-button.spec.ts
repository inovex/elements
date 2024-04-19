import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';

test.describe('ino-segment-button', () => {
  test('should check segment button on click', async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-segment-button', 'default']);
    const button = page.locator('ino-segment-button');

    await expect(button).toHaveAttribute('checked', 'false');
    await button.click();
    await expect(button).not.toHaveAttribute('checked', 'false');
    await button.click();
    await expect(button).not.toHaveAttribute('checked', 'false');
  });

  test('should not check disabled segment button on click', async ({ page }) => {
    await goToStory(page, ['Buttons', 'ino-segment-button', 'disabled']);
    const button = page.locator('ino-segment-button');

    await expect(button).toHaveAttribute('checked', 'false');
    await button.click();
    await expect(button).toHaveAttribute('checked', 'false');
  });

  test('should render dense segment button', async ({ page }) => {
    const button = page.locator('ino-segment-button');

    await goToStory(page, ['Buttons', 'ino-segment-button', 'default']);
    const bBox = await button.boundingBox();
    await goToStory(page, ['Buttons', 'ino-segment-button', 'dense']);
    const bBoxDense = await button.boundingBox();

    expect(bBoxDense.width).toBeLessThan(bBox.width);
    expect(bBoxDense.height).toBeLessThan(bBox.height);
  });
});
