import { isAfter, isBefore, isEqual } from 'date-fns';
import flatpickr from 'flatpickr';

const NUMBERS_WITH_SPECIAL_CHARS = /(\d[^a-z]+)/g;

export function validateRange(value: string, format: string): boolean {
  return !value
    .match(NUMBERS_WITH_SPECIAL_CHARS)
    .map(match => hasCorrectFormat(match.trim(), format))
    .includes(false);
}

export function validateSingle(value: string, format: string, minDateStr?: string, maxDateStr?: string): boolean {

  let isValid: boolean;

  try {
    const inputDate: Date = flatpickr.parseDate(value, format);
    isValid = validateMin(inputDate, format, minDateStr) && validateMax(inputDate, format, maxDateStr) && hasCorrectFormat(value, format);
  } catch (e) {
    isValid = false; // Error occurred while parsing
  }

  return isValid;
}

function validateMin(date: Date, format: string, minDateStr?: string): boolean {

  if (!minDateStr) {
    return true;
  }

  const minDate = flatpickr.parseDate(minDateStr, format);

  return isEqual(date, minDate) || isAfter(date, minDate);
}

function validateMax(date: Date, format: string, maxDateStr?: string): boolean {

  if (!maxDateStr) {
    return true;
  }

  const maxDate = flatpickr.parseDate(maxDateStr, format);

  return isEqual(date, maxDate) || isBefore(date, maxDate);
}

function hasCorrectFormat(value: string, format: string): boolean {
  const parsedDate: Date = flatpickr.parseDate(value, format);
  const formattedDate: string = flatpickr.formatDate(parsedDate, format);

  return formattedDate == value;
}
