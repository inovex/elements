import { BaseOptions } from 'flatpickr/dist/types/options';

export type TimePicker = Pick<
  BaseOptions,
  | 'defaultHour'
  | 'defaultMinute'
  | 'enableTime'
  | 'time_24hr'
  | 'minuteIncrement'
  | 'hourIncrement'
  | 'noCalendar'
  | 'static'
>;

export const createTimePickerOptions = ({
  defaultHour,
  defaultMinute,
  enableTime,
  time_24hr,
  minuteIncrement,
  hourIncrement,
  noCalendar,
  static: staticVal
}: Partial<BaseOptions>): TimePicker => ({
  defaultHour,
  defaultMinute,
  enableTime,
  time_24hr,
  minuteIncrement,
  hourIncrement,
  noCalendar,
  'static': staticVal
});
