import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect';
import { BaseOptions } from 'flatpickr/dist/types/options';

export type PickerTypeOptions = 'date' | 'month' | 'time' | 'datetime';
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

export const getTypeSpecificOption = (
  type: PickerTypeOptions,
  options: PartialFlatpickrOptions
): PickerOption => {
  switch (type) {
    case 'date':
      return createDatePickerOptions(options);
    case 'time':
      return createTimePickerOptions({
        ...options,
        noCalendar: true,
      });
    case 'datetime':
      return {
        ...createDatePickerOptions(options),
        ...createTimePickerOptions(options),
      };
    case 'month':
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
