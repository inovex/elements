import flatpickr from 'flatpickr';
import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect';
import { Instance } from 'flatpickr/dist/types/instance';
import { BaseOptions } from 'flatpickr/dist/types/options';
import { PartialFlatpickrOptions } from '../picker-factory';

export type MonthPicker = Pick<
  BaseOptions,
  'minDate' | 'maxDate' | 'plugins' | 'onReady' | 'onDestroy'
>;

type OnValueChangeFn = PartialFlatpickrOptions['onValueChange'];

/**
 * Handles the functionality of the arrows inside the flatpickers, in case of a month picker.
 * Usually these are used for changing months but in the month picker they change the year,
 * so a custom functionality is necessary.
 * When pressing an arrow a new date with the corresponding year is returned as event
 * The yearOffset indicates weather the year is decremented (-1) or incremented(1).
 */
const monthChangeHandler = (
  instance: Instance,
  yearOffset: -1 | 1,
  onValueChange: OnValueChangeFn
) => {
  const currentDate = instance.selectedDates[0];

  // No date selected yet
  if (!currentDate || instance.selectedDates.length !== 1) {
    return;
  }

  const formattedDate = changeYearByOne(
    currentDate,
    instance.config.dateFormat,
    yearOffset
  );

  onValueChange(formattedDate);
};

/**
 * Increments or decrements the given date
 * @param value The current date
 * @param format  The format of the date, needed for correct parsing
 * @param yearOffset Either 1 for incrementing or -1 for decrementing
 * @return The incremented/decremented date in the given format
 */
const changeYearByOne = (
  value: Date,
  format: string,
  yearOffset: -1 | 1
): string => {
  const year = value.getFullYear();
  const month = value.getMonth();
  const day = value.getDate();
  const newYear = year + yearOffset;
  const newDate = new Date(newYear, month, day);
  return flatpickr.formatDate(newDate, format);
};

const monthChangePrevHandler = (
  instance: Instance,
  onValueChange: OnValueChangeFn
) => monthChangeHandler(instance, -1, onValueChange);

const monthChangeNextHandler = (
  instance: Instance,
  onValueChange: OnValueChangeFn
) => monthChangeHandler(instance, 1, onValueChange);

export const createMonthPickerOptions = ({
  minDate,
  maxDate,
  dateFormat,
  onValueChange,
}: PartialFlatpickrOptions): MonthPicker => {
  if (!onValueChange) {
    throw new Error(
      `No 'onValueChange' function passed to the MonthPicker. This should not happen.`
    );
  }

  return {
    plugins: [
      monthSelectPlugin({
        dateFormat: dateFormat === 'd-m-Y' ? 'm.Y' : dateFormat,
      }),
    ],
    maxDate,
    minDate,
    onReady: (_, __, instance) => {
      instance.prevMonthNav.addEventListener('click', () =>
        monthChangePrevHandler(instance, onValueChange)
      );
      instance.nextMonthNav.addEventListener('click', () =>
        monthChangeNextHandler(instance, onValueChange)
      );
    },
    onDestroy: (_, __, instance) => {
      instance.prevMonthNav.removeEventListener('click', () =>
        monthChangePrevHandler(instance, onValueChange)
      );
      instance.nextMonthNav.removeEventListener('click', () =>
        monthChangeNextHandler(instance, onValueChange)
      );
    },
  };
};
