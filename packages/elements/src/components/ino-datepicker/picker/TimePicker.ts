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
>;

export const createTimePickerOptions = ({
  defaultHour,
  defaultMinute,
  enableTime,
  time_24hr,
  minuteIncrement,
  hourIncrement,
  noCalendar,
}: Partial<BaseOptions>): TimePicker => ({
  defaultHour,
  defaultMinute,
  enableTime,
  time_24hr,
  minuteIncrement,
  hourIncrement,
  noCalendar,
});
