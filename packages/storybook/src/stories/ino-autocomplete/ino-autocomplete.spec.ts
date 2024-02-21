import { expect, Locator, test } from '@playwright/test';
import { goToStory, setProperty } from '../test-utils';
import { KeyValue } from '@inovex.de/elements';
import { AutoCompleteStoryOptions } from './utils';

test.describe('ino-autocomplete', () => {
  let inputEl: Locator;
  let menu: Locator;
  let options: Locator;
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
    options = menu.getByRole('option');
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
    await expect(options).toHaveCount(AutoCompleteStoryOptions.length);
  });

  test('should show the noOptionText if no options was found', async ({
    page,
  }) => {
    await inputEl.focus();
    await inputEl.fill('no match');
    await expect(options).toHaveCount(0);

    const notFoundMsgEl = page.getByText('Found No Results for "no match"');
    await expect(notFoundMsgEl).toBeVisible();
  });

  test('should show only one input when typing "Ham"', async () => {
    await inputEl.focus();
    await inputEl.fill('Ham');
    await expect(options).toHaveCount(1);
  });

  test('should receive key of the first item on ArrowDown and Enter', async () => {
    await inputEl.focus();
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('Enter');

    await expect(inputEl).toHaveValue('Hamburg');
  });

  test('should receive key of the second item on double ArrowDown and Enter', async () => {
    await inputEl.focus();
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('ArrowDown');
    await inoAutocomplete.press('Enter');

    await expect(inputEl).toHaveValue('Berlin');
  });

  test('should receive key of the last item on ArrowUp and Enter', async () => {
    await inputEl.focus();
    await inoAutocomplete.press('ArrowUp');
    await inoAutocomplete.press('Enter');
    await expect(inputEl).toHaveValue('Karlsruhe');
  });

  test('should clear input on blur if its no option', async () => {
    await inputEl.click();
    await inputEl.fill('Option');
    await inputEl.blur();
    await expect(inputEl).toHaveValue('');
  });

  test('should emit null on blur if its a non-matched option', async () => {
    test.fixme(true, 'Should be a spec test');

    const valueChangePromise = getValueChangePromise();
    await inputEl.click();
    await inputEl.fill('No Option');
    await inputEl.blur();
    expect(await valueChangePromise).toBeNull();
  });

  test('should be able to select option that was added afterwards', async () => {
    const newOptions = AutoCompleteStoryOptions.concat({
      key: 'm',
      value: 'Munich',
    });

    await expect(inoAutocomplete).toBeVisible();
    await setProperty(inoAutocomplete, 'options', newOptions);
    await inputEl.focus();
    await expect(options).toHaveCount(newOptions.length);

    await inoAutocomplete.press('ArrowUp');
    await inoAutocomplete.press('Enter');
    await expect(inputEl).toHaveValue('Munich');
  });
});
