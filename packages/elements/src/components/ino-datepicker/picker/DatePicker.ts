import { BaseOptions } from 'flatpickr/dist/types/options';

export type Datepicker = Pick<
  BaseOptions,
  'dateFormat' | 'minDate' | 'maxDate' | 'mode'
>;

export const createDatePickerOptions = ({
  dateFormat,
  minDate,
  maxDate,
  mode,
}: Partial<BaseOptions>): Datepicker => ({
  dateFormat,
  minDate,
  maxDate,
  mode,
});
