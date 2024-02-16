import { expect, Locator, test } from '@playwright/test';
import { goToStory } from '../test-utils';
import { KeyValue } from '@inovex.de/elements';
import { AutoCompleteStoryOptions } from './utils';

test.describe('ino-autocomplete', () => {
  let inputEl: Locator;
  let menu: Locator;
  let inoAutocomplete: Locator;

  const getValueChangePromise = () =>
    inoAutocomplete.evaluate(
      () =>
        new Promise<KeyValue>((resolve) => {
          document.addEventListener('valueChange', (data: CustomEvent) =>
            resolve(data.detail),
          );
        }),
    );

  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['input', 'ino-autocomplete', 'default']);
    inoAutocomplete = page.locator('ino-autocomplete');
    inputEl = page.getByRole('combobox');
    menu = page.getByRole('listbox');
  });

  test('should hide menu on render', async () => {
    await expect(menu).toBeHidden();
  });

  test('should show menu if input is clicked', async () => {
    await inputEl.click();
    await expect(menu).toBeVisible();
  });

  test('should show menu if input is focused', async () => {
    await inputEl.focus();
    await expect(menu).toBeVisible();
  });

  test('should hide menu on input blur', async () => {
    await inputEl.focus();
    await inputEl.blur();
    await expect(menu).toBeHidden();
  });

  test('should show all options if there is no input', async () => {
    await inputEl.focus();
    await expect(menu.getByRole('option')).toHaveCount(
      AutoCompleteStoryOptions.length,
    );
  });

  test('should show the noOptionText if no options was found', async ({
    page,
  }) => {
    await inputEl.focus();
    await inputEl.fill('no match');
    await expect(menu.getByRole('option')).toHaveCount(0);

    const notFoundMsgEl = page.getByText('Found No Results for "no match"');
    expect(notFoundMsgEl).toBeTruthy();
  });

  test('should show only one input when typing "Ham"', async () => {
    await inputEl.focus();
    await inputEl.fill('Ham');
    await expect(menu.getByRole('option')).toHaveCount(1);
  });

  test('should receive key of the first item on ArrowDown and Enter', async () => {
    const valueChangePromise = getValueChangePromise();

    await inputEl.focus();
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('Enter');

    expect(await valueChangePromise).toEqual(AutoCompleteStoryOptions[0]);
  });

  test('should receive key of the second item on double ArrowDown and Enter', async () => {
    const valueChangePromise = getValueChangePromise();

    await inputEl.focus();
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('Enter');

    expect(await valueChangePromise).toEqual(AutoCompleteStoryOptions[1]);
  });

  test('should receive key of the last item on ArrowUp and Enter', async () => {
    const valueChangePromise = getValueChangePromise();
    await inputEl.focus();
    await inoAutocomplete.press('ArrowUp');
    await inoAutocomplete.press('Enter');
    expect(await valueChangePromise).toEqual(
      AutoCompleteStoryOptions[AutoCompleteStoryOptions.length - 1],
    );
  });

  test('should clear input on blur if its no option', async () => {
    await inputEl.click();
    await inputEl.fill('Option');
    await inputEl.blur();
    await expect(inputEl).toHaveValue('');
  });

  test('should emit null on blur if its a non-matched option', async () => {
    const valueChangePromise = getValueChangePromise();
    await inputEl.click();
    await inputEl.fill('No Option');
    await inputEl.blur();
    expect(await valueChangePromise).toBeNull();
  });

  test('should be able to select option that was added afterwards', async () => {
    const newOptions = AutoCompleteStoryOptions.concat({
      key: 'm',
      value: 'munich',
    });

    await inoAutocomplete.evaluate((autocomplete, newOptions) => {
      autocomplete['options'] = newOptions;
    }, newOptions);
    await inputEl.focus();

    await expect(menu.getByRole('option')).toHaveCount(newOptions.length);

    const valueChangePromise = getValueChangePromise();
    await inoAutocomplete.press('ArrowUp');
    await inoAutocomplete.press('Enter');

    expect(await valueChangePromise).toEqual(newOptions[newOptions.length - 1]);
  });
});
