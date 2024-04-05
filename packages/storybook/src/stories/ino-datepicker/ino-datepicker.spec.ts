import { expect, Page, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

const DATE_PATTERN = /\d{2}\.\d{2}\.\d{4}/;

const getDefaultLocators = (page: Page) => ({
  inoDatepicker: page.locator('ino-datepicker'),
  flatpickrCal: page.locator('.flatpickr-calendar'),
  input: page.locator('ino-input input'),
});

test.beforeEach(async ({ page }) => {
  await goToStory(page, ['Input', 'ino-datepicker', 'default']);
  const inoDatepicker = page.locator('ino-datepicker');
  await setAttribute(inoDatepicker, 'value', '');
  await setAttribute(inoDatepicker, 'min', '');
  await setAttribute(inoDatepicker, 'max', '');
});

test.describe('ino-datepicker - Basics', () => {
  test('should open flatpickr on click', async ({ page }) => {
    const { inoDatepicker, flatpickrCal, input } = getDefaultLocators(page);

    await expect(flatpickrCal).toBeHidden();
    await expect(inoDatepicker).toBeVisible();
    await expect(input).toBeVisible();
    await inoDatepicker.click();
    await expect(flatpickrCal).toBeVisible();
  });

  test('should display flatpickr inline', async ({ page }) => {
    const { inoDatepicker, flatpickrCal, input } = getDefaultLocators(page);

    await setAttribute(inoDatepicker, 'inline', 'true');
    await inoDatepicker.focus();

    await expect(inoDatepicker).toBeVisible();
    await expect(input).toBeVisible();
    await expect(flatpickrCal).toBeVisible();
  });

  test('should allow empty values', async ({ page }) => {
    const { inoDatepicker, input } = getDefaultLocators(page);

    await setAttribute(inoDatepicker, 'value', '2024-06-21');
    await expect(input).toHaveValue('2024-06-21');
    await setAttribute(inoDatepicker, 'value', '');
    await expect(input).toHaveValue('');
    await setAttribute(inoDatepicker, 'value', '2024-06-21');
    await input.fill('');
    await expect(input).toHaveValue('');
  });

  test('should render disabled state correctly', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-datepicker', 'default']);
    const { inoDatepicker, flatpickrCal, input } = getDefaultLocators(page);

    await setAttribute(inoDatepicker, 'disabled', 'true');

    await expect(flatpickrCal).toBeHidden();
    await expect(input).toBeDisabled();
    await inoDatepicker.click();
    await expect(flatpickrCal).toBeHidden();
  });
});

test.describe('ino-datepicker - Different types', () => {
  test('should render date picker', async ({ page }) => {
    const { inoDatepicker, flatpickrCal, input } = getDefaultLocators(page);
    const flatpickrDays = flatpickrCal.locator('.flatpickr-day');

    await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');
    await setAttribute(inoDatepicker, 'type', 'date');

    await expect(flatpickrCal).toBeHidden();
    await inoDatepicker.click();
    await expect(flatpickrCal).toBeVisible();

    await expect(flatpickrDays).toHaveCount(42);
    await flatpickrCal.click();
    await expect(input).toHaveValue(DATE_PATTERN);
  });

  test('should render time picker', async ({ page }) => {
    const { inoDatepicker, flatpickrCal, input } = getDefaultLocators(page);
    const flatpickrTimeInputs = flatpickrCal.locator('input');

    await setAttribute(inoDatepicker, 'date-format', 'H:i');
    await setAttribute(inoDatepicker, 'type', 'time');

    await expect(flatpickrCal).toBeHidden();
    await inoDatepicker.click();
    await expect(flatpickrCal).toBeVisible();

    await expect(flatpickrTimeInputs).toHaveCount(2);
    await flatpickrTimeInputs.first().fill('08');
    await flatpickrTimeInputs.last().fill('30');
    await inoDatepicker.click();
    await expect(input).toHaveValue('08:30');
  });

  test('should render datetime picker', async ({ page }) => {
    const { inoDatepicker, flatpickrCal, input } = getDefaultLocators(page);
    const flatpickrDays = flatpickrCal.locator('.flatpickr-day');

    await setAttribute(inoDatepicker, 'date-format', 'd.m.Y H:i');
    await setAttribute(inoDatepicker, 'type', 'datetime');

    await expect(flatpickrCal).toBeHidden();
    await inoDatepicker.click();
    await expect(flatpickrCal).toBeVisible();

    await expect(flatpickrDays).toHaveCount(42);
    await expect(flatpickrCal.locator('input')).toHaveCount(3);
    await flatpickrCal.click();
    await expect(input).toHaveValue(/\d{2}\.\d{2}\.\d{4}\s\d{2}:\d{2}/);
  });

  test('should render month picker', async ({ page }) => {
    const { inoDatepicker, flatpickrCal, input } = getDefaultLocators(page);
    const flatpickrMoths = flatpickrCal.locator('.flatpickr-monthSelect-month');

    await setAttribute(inoDatepicker, 'date-format', 'm.Y');
    await setAttribute(inoDatepicker, 'type', 'month');

    await expect(flatpickrCal).toBeHidden();
    await inoDatepicker.click();
    await expect(flatpickrCal).toBeVisible();

    await expect(flatpickrMoths).toHaveCount(12);
    await flatpickrCal.click();
    await expect(input).toHaveValue(/\d{2}\.\d{4}/);
  });

  test('should render date range picker', async ({ page }) => {
    const { inoDatepicker, flatpickrCal, input } = getDefaultLocators(page);
    const flatpickrDays = flatpickrCal.locator('.flatpickr-day');

    await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');
    await setAttribute(inoDatepicker, 'type', 'date');
    await setAttribute(inoDatepicker, 'range', 'true');

    await expect(flatpickrCal).toBeHidden();
    await inoDatepicker.click();
    await expect(flatpickrCal).toBeVisible();

    await expect(flatpickrDays).toHaveCount(42);
    await flatpickrDays.nth(10).click();
    await flatpickrDays.nth(17).click();
    await expect(input).toHaveValue(
      /\d{2}\.\d{2}\.\d{4} to \d{2}\.\d{2}\.\d{4}/,
    );
  });
});

test.describe('ino-datepicker - Min and Max', () => {
  test('should cannot select date before min', async ({ page }) => {
    const { inoDatepicker, flatpickrCal, input } = getDefaultLocators(page);
    const flatpickrDays = flatpickrCal.locator('.flatpickr-day');

    await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');
    await setAttribute(inoDatepicker, 'min', '10.06.2024');

    await inoDatepicker.click();
    await flatpickrDays.nth(5).click();
    await expect(input).not.toHaveValue(DATE_PATTERN);
    await flatpickrDays.nth(20).click();
    await expect(input).toHaveValue(DATE_PATTERN);
  });

  test('should cannot select date after max', async ({ page }) => {
    const { inoDatepicker, flatpickrCal, input } = getDefaultLocators(page);
    const flatpickrDays = flatpickrCal.locator('.flatpickr-day');

    await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');
    await setAttribute(inoDatepicker, 'min', '01.06.2024');
    await setAttribute(inoDatepicker, 'max', '15.06.2024');

    await inoDatepicker.click();
    await flatpickrDays.nth(25).click();
    await expect(input).not.toHaveValue(DATE_PATTERN);
    await flatpickrDays.nth(10).click();
    await expect(input).toHaveValue(DATE_PATTERN);
  });
});

test.describe('ino-datepicker - Invalid inputs', () => {
  test('should not enter invalid dates', async ({ page }) => {
    const { inoDatepicker, input } = getDefaultLocators(page);

    await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');
    await setAttribute(inoDatepicker, 'min', '10.06.2024');
    await setAttribute(inoDatepicker, 'max', '15.06.2024');

    await input.fill('01.06.2024');
    await inoDatepicker.click();
    await page.locator('ino-input ino-icon').click();
    await expect(input).toHaveValue('');

    await input.fill('16.06.2024');
    await inoDatepicker.click();
    await page.locator('ino-input ino-icon').click();
    await expect(input).toHaveValue('');

    await input.fill('15.06.2024');
    await inoDatepicker.click();
    await page.locator('ino-input ino-icon').click();
    await expect(input).toHaveValue('15.06.2024');
  });

  test('should not enter invalid date format', async ({ page }) => {
    const { inoDatepicker, input } = getDefaultLocators(page);
    const inoInputIcon = page.locator('ino-input ino-icon');

    await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');

    await input.fill('ABC');
    await inoDatepicker.click();
    await inoInputIcon.click();
    await expect(input).toHaveValue('');

    await input.fill('15/06-2024');
    await inoDatepicker.click();
    await inoInputIcon.click();
    await expect(input).toHaveValue('15.06.2024');
  });
});
