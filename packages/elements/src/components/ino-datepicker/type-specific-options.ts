import flatpickr from 'flatpickr';
import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect';
import { BaseOptions } from 'flatpickr/dist/types/options';

export type PickerTypeKeys = typeof PickerTypes[keyof typeof PickerTypes];

// Workaround until Stencil is using TS 4.1, use enum then
// see => https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export const PickerTypes = {
  Date: 'date',
  Month: 'month',
  Time: 'time',
  DateTime: 'datetime',
} as const;

type PartialFlatpickrOptions = Partial<BaseOptions>;

type TimePickerOptions = Pick<
  BaseOptions,
  | 'defaultHour'
  | 'defaultMinute'
  | 'enableTime'
  | 'time_24hr'
  | 'minuteIncrement'
  | 'hourIncrement'
  | 'noCalendar'
>;

type DatePickerOptions = Pick<
  BaseOptions,
  'dateFormat' | 'minDate' | 'maxDate' | 'mode'
>;

type MonthPickerOptions = Pick<BaseOptions, 'minDate' | 'maxDate' | 'plugins'>;

type PickerOption =
  | TimePickerOptions
  | DatePickerOptions
  | (TimePickerOptions & DatePickerOptions)
  | MonthPickerOptions;

export const getTypeSpecificOptions = (
  type: PickerTypeKeys,
  options: PartialFlatpickrOptions
): PickerOption => {
  switch (type) {
    case PickerTypes.Date:
      return createDatePickerOptions(options);
    case PickerTypes.Time:
      return createTimePickerOptions({
        ...options,
        noCalendar: true,
      });
    case PickerTypes.DateTime:
      return {
        ...createDatePickerOptions(options),
        ...createTimePickerOptions(options),
      };
    case PickerTypes.Month:
      return createMonthPickerOptions(options);
  }
};

const createMonthPickerOptions = ({
  minDate,
  maxDate,
  dateFormat,
}: PartialFlatpickrOptions): MonthPickerOptions => ({
  plugins: [
    monthSelectPlugin({
      dateFormat: dateFormat === 'd-m-Y' ? 'm.Y' : dateFormat,
    }),
  ],
  maxDate,
  minDate,
});

/**
 * Increments or decrements the given date
 * @param value The current date
 * @param format  The format of the date, needed for correct parsing
 * @param yearOffset Either 1 for incrementing or -1 for decrementing
 * @return The incremented/decremented date in the given format
 */
export const changeYearByOne = (
  value: string,
  format: string,
  yearOffset: -1 | 1
): string => {
  const currentDate = flatpickr.parseDate(value, format);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const newYear = year + yearOffset;
  const newDate = new Date(newYear, month, day);
  return flatpickr.formatDate(newDate, format);
};

const createTimePickerOptions = ({
  defaultHour,
  defaultMinute,
  enableTime,
  time_24hr,
  minuteIncrement,
  hourIncrement,
  noCalendar,
}: PartialFlatpickrOptions): TimePickerOptions => ({
  defaultHour,
  defaultMinute,
  enableTime,
  time_24hr,
  minuteIncrement,
  hourIncrement,
  noCalendar,
});

const createDatePickerOptions = ({
  dateFormat,
  minDate,
  maxDate,
  mode,
}: PartialFlatpickrOptions): DatePickerOptions => ({
  dateFormat,
  minDate,
  maxDate,
  mode,
});
