import { BaseOptions } from 'flatpickr/dist/types/options';
import { createDatePickerOptions, Datepicker } from './picker/DatePicker';
import { createMonthPickerOptions, MonthPicker } from './picker/MonthPicker';
import { createTimePickerOptions, TimePicker } from './picker/TimePicker';

export type PartialFlatpickrOptions = Partial<BaseOptions> & {
  onValueChange?: (value: string) => void;
};

export type PickerOption =
  | TimePicker
  | Datepicker
  | (TimePicker & Datepicker)
  | MonthPicker;

export type PickerTypeKeys = typeof PickerTypes[keyof typeof PickerTypes];

// Workaround until Stencil is using TS 4.1, use enum then
// see => https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export const PickerTypes = {
  Date: 'date',
  Month: 'month',
  Time: 'time',
  DateTime: 'datetime',
} as const;

export const createPicker = (
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
