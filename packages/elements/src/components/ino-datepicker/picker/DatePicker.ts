import { BaseOptions } from 'flatpickr/dist/types/options';

export type Datepicker = Pick<
  BaseOptions,
  'dateFormat' | 'minDate' | 'maxDate' | 'mode' | 'defaultDate' | 'static'
>;

export const createDatePickerOptions = ({
  dateFormat,
  defaultDate,
  minDate,
  maxDate,
  mode,
  static: staticVal,
}: Partial<BaseOptions>): Datepicker => ({
  defaultDate,
  dateFormat,
  minDate,
  maxDate,
  mode,
  'static': staticVal,
});
