/// <reference lib="dom"/>
import { expect, test } from '@playwright/test';
import { goToStory } from '../test-utils';
import { readFileSync } from 'fs';

test.describe('ino-input-file', () => {
  test('should open file dialog on click', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input-file', 'default']);
    const inputFile = page.locator('ino-input-file');
    const fileChooserPromise = page.waitForEvent('filechooser');

    await expect(inputFile).toBeVisible();
    await inputFile.click();
    const fileChooser = await fileChooserPromise;
    expect(fileChooser).toBeTruthy();
    expect(fileChooser.isMultiple()).toBeFalsy();
  });

  test('should allow multiply files', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input-file', 'multiple']);
    const inputFile = page.locator('ino-input-file');
    const fileChooserPromise = page.waitForEvent('filechooser');

    await expect(inputFile).toBeVisible();
    await inputFile.click();
    const fileChooser = await fileChooserPromise;
    expect(fileChooser.isMultiple()).toBeTruthy();
  });

  test('should not open file dialog if disabled', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input-file', 'disabled']);
    const inputFile = page.locator('ino-input-file');
    const fileChooserPromise = page.waitForEvent('filechooser', {
      timeout: 1000,
    });
    await inputFile.click();

    let error = false;
    try {
      await fileChooserPromise;
    } catch {
      error = true;
    }
    expect(error).toBeTruthy();
  });

  test('should select file with drag and drop', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input-file', 'drag-and-drop']);
    const inputFile = page.locator('ino-input-file');
    const inputFileBtn = inputFile.locator('ino-button');
    const fileChooserPromise = page.waitForEvent('filechooser');

    await inputFileBtn.click();
    const fileChooser = await fileChooserPromise;
    expect(fileChooser).toBeTruthy();

    // Create the DataTransfer and File
    const buffer = btoa('Example file content'); // create a base64 string
    const dataTransfer = await page.evaluateHandle(async data => {
      const dt = new DataTransfer();
      const blobData = await fetch(data).then(res => res.blob());
      const file = new File([blobData], 'myFile.txt', {
        type: 'text/plain',
      });
      dt.items.add(file);
      return dt;
    }, `data:application/octet-stream;base64,${buffer}`);

    // Now dispatch
    await page.dispatchEvent('ino-input-file', 'drop', { dataTransfer });

    await expect(page.getByText('myFile.txt')).toBeVisible();
  });

  test('should display drag and drop area without secondary text', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input-file', 'drag-and-drop']);
    const inputFileBtn = page.locator('ino-input-file ino-button');
    const dndLabel = page.getByText('Drag your files here');

    await expect(dndLabel).toBeVisible();
    await expect(inputFileBtn).toBeVisible();
  });

  test('should display drag and drop area with secondary text', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-input-file', 'drag-and-drop-secondary-text']);
    const inputFileBtn = page.locator('ino-input-file ino-button');
    const dndLabel = page.getByText('click and drag here');
    const dndSecondLabel = page.getByText('click the button below');

    await expect(dndLabel).toBeVisible();
    await expect(dndSecondLabel).toBeVisible();
    await expect(inputFileBtn).toBeVisible();
  });
});
