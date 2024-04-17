import { expect, Page, test } from '@playwright/test';
import { goToStory, setAttribute } from '../test-utils';

const DATE_PATTERN = /\d{2}\.\d{2}\.\d{4}/;
const DATE_TIME_PATTERN = /\d{2}\.\d{2}\.\d{4}\s\d{2}:\d{2}/;
const MONTH_PATTERN = /\d{2}\.\d{4}/;

const getDefaultLocators = (page: Page) => {
  const inoDatepicker = page.locator('ino-datepicker');
  const calendar = page.locator('.flatpickr-calendar');
  const calendarInputs = calendar.locator('input');
  const input = page.locator('ino-input input');
  const days = page.locator('.flatpickr-day');
  const invalidMarker = inoDatepicker.locator(
    'ino-input .mdc-text-field--invalid',
  );

  async function toggleCalendarPopup() {
    await inoDatepicker.click();
  }

  async function assertState(state: 'valid' | 'invalid') {
    if (state === 'valid')
      return expect(
        invalidMarker,
        'Expected datepicker to be valid',
      ).toBeHidden();
    if (state === 'invalid')
      return expect(
        invalidMarker,
        'Expected datepicker to be invalid',
      ).toBeVisible();
    throw new Error(`Unknown parameter ${state}.`);
  }

  return {
    inoDatepicker,
    calendar,
    calendarInputs,
    input,
    days,
    toggleCalendarPopup,
    assertState,
  };
};

test.describe('ino-datepicker', () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, ['Input', 'ino-datepicker', 'default']);
    const inoDatepicker = page.locator('ino-datepicker');
    await setAttribute(inoDatepicker, 'value', '');
    await setAttribute(inoDatepicker, 'min', '');
    await setAttribute(inoDatepicker, 'max', '');
  });

  test('should open flatpickr on click', async ({ page }) => {
    const { inoDatepicker, calendar, input } = getDefaultLocators(page);

    await expect(calendar).toBeHidden();
    await expect(inoDatepicker).toBeVisible();
    await expect(input).toBeVisible();
    await inoDatepicker.click();
    await expect(calendar).toBeVisible();
  });

  test('should display flatpickr inline', async ({ page }) => {
    await goToStory(page, ['Input', 'ino-datepicker', 'inline']);
    const { inoDatepicker, calendar, input } = getDefaultLocators(page);

    await expect(inoDatepicker).toBeVisible();
    await expect(input).toBeVisible();
    await expect(calendar).toBeVisible();
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
    const { inoDatepicker, calendar, input } = getDefaultLocators(page);

    await setAttribute(inoDatepicker, 'disabled', 'true');

    await expect(calendar).toBeHidden();
    await expect(input).toBeDisabled();
    await inoDatepicker.click();
    await expect(calendar).toBeHidden();
  });

  test.describe('Types', () => {
    test('should render date picker', async ({ page }) => {
      const { inoDatepicker, calendar, input, days } = getDefaultLocators(page);

      await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');
      await setAttribute(inoDatepicker, 'type', 'date');

      await expect(calendar).toBeHidden();
      await inoDatepicker.click();
      await expect(calendar).toBeVisible();

      await expect(days).toHaveCount(42);
      await calendar.click();
      await expect(input).toHaveValue(DATE_PATTERN);
    });

    test('should render time picker', async ({ page }) => {
      const {
        inoDatepicker,
        calendar,
        calendarInputs,
        input,
        toggleCalendarPopup,
      } = getDefaultLocators(page);

      await setAttribute(inoDatepicker, 'date-format', 'H:i');
      await setAttribute(inoDatepicker, 'type', 'time');

      await expect(calendar).toBeHidden();
      await toggleCalendarPopup();
      await expect(calendar).toBeVisible();

      await expect(calendarInputs).toHaveCount(2);
      await calendarInputs.first().fill('08');
      await calendarInputs.last().fill('30');
      await toggleCalendarPopup();
      await expect(input).toHaveValue('08:30');
    });

    test('should render datetime picker', async ({ page }) => {
      const {
        inoDatepicker,
        calendar,
        calendarInputs,
        input,
        days,
        toggleCalendarPopup,
      } = getDefaultLocators(page);

      await setAttribute(inoDatepicker, 'date-format', 'd.m.Y H:i');
      await setAttribute(inoDatepicker, 'type', 'datetime');

      await expect(calendar).toBeHidden();
      await toggleCalendarPopup();
      await expect(calendar).toBeVisible();

      await expect(days).toHaveCount(42);
      await expect(calendarInputs).toHaveCount(3);
      await days.nth(0).click();
      await expect(input).toHaveValue(DATE_TIME_PATTERN);
    });

    test('should render month picker', async ({ page }) => {
      const { inoDatepicker, calendar, input, toggleCalendarPopup } =
        getDefaultLocators(page);
      const flatpickrMoths = calendar.locator('.flatpickr-monthSelect-month');

      await setAttribute(inoDatepicker, 'date-format', 'm.Y');
      await setAttribute(inoDatepicker, 'type', 'month');

      await expect(calendar).toBeHidden();
      await toggleCalendarPopup();
      await expect(calendar).toBeVisible();

      await expect(flatpickrMoths).toHaveCount(12);
      await flatpickrMoths.nth(0).click();
      await expect(input).toHaveValue(MONTH_PATTERN);
    });

    test('should render date range picker', async ({ page }) => {
      const { inoDatepicker, calendar, input, days, toggleCalendarPopup } =
        getDefaultLocators(page);

      await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');
      await setAttribute(inoDatepicker, 'type', 'date');
      await setAttribute(inoDatepicker, 'range', 'true');

      await expect(calendar).toBeHidden();
      await toggleCalendarPopup();
      await expect(calendar).toBeVisible();

      await expect(days).toHaveCount(42);
      await days.nth(10).click();
      await days.nth(17).click();
      await expect(input).toHaveValue(
        /\d{2}\.\d{2}\.\d{4} to \d{2}\.\d{2}\.\d{4}/,
      );
    });
  });

  test.describe('Min and Max', () => {
    test('should cannot select date before min', async ({ page }) => {
      const { inoDatepicker, input, days, toggleCalendarPopup } =
        getDefaultLocators(page);

      await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');
      await setAttribute(inoDatepicker, 'min', '10.06.2024');

      await toggleCalendarPopup();
      await days.nth(5).click();
      await expect(input).not.toHaveValue(DATE_PATTERN);
      await days.nth(20).click();
      await expect(input).toHaveValue(DATE_PATTERN);
    });

    test('should cannot select date after max', async ({ page }) => {
      const { inoDatepicker, input, days, toggleCalendarPopup } =
        getDefaultLocators(page);

      await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');
      await setAttribute(inoDatepicker, 'min', '01.06.2024');
      await setAttribute(inoDatepicker, 'max', '15.06.2024');

      await toggleCalendarPopup();
      await days.nth(25).click();
      await expect(input).not.toHaveValue(DATE_PATTERN);
      await days.nth(10).click();
      await expect(input).toHaveValue(DATE_PATTERN);
    });
  });

  test.describe('Invalid inputs', () => {
    test('should not enter invalid dates', async ({ page }) => {
      const { inoDatepicker, input, assertState } = getDefaultLocators(page);

      await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');
      await setAttribute(inoDatepicker, 'min', '10.06.2024');
      await setAttribute(inoDatepicker, 'max', '15.06.2024');

      await input.fill('01.06.2024');
      await assertState('invalid');

      await input.fill('16.06.2024');
      await assertState('invalid');

      await input.fill('15.06.2024');
      await assertState('valid');
      await expect(input).toHaveValue('15.06.2024');
    });

    test('should not enter invalid date format', async ({ page }) => {
      const { inoDatepicker, input, assertState } = getDefaultLocators(page);

      await setAttribute(inoDatepicker, 'date-format', 'd.m.Y');

      await input.fill('ABC');
      await assertState('invalid');

      await input.fill('15/06-2024');
      await assertState('invalid');

      await input.fill('15.06.2024');
      await assertState('valid');
      await expect(input).toHaveValue('15.06.2024');
    });
  });
});
