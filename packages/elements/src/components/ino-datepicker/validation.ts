import { isAfter, isBefore, isEqual } from 'date-fns';
import flatpickr from 'flatpickr';

const NUMBERS_WITH_SPECIAL_CHARS = /(\d[^a-z]+)/g;

export const validateRange = (value: string, format: string): boolean =>
  !value
    .match(NUMBERS_WITH_SPECIAL_CHARS)
    .map((match) => validateFormat(match.trim(), format))
    .includes(false);

export const validateSingle = (
  value: string,
  format: string,
  minDateStr?: string,
  maxDateStr?: string
): boolean =>
  validateMin(value, format, minDateStr) &&
  validateMax(value, format, maxDateStr) &&
  validateFormat(value, format);

export const validateMin = (
  value: string,
  format: string,
  minDateStr?: string
): boolean => {
  if (!minDateStr) {
    return true;
  }
  console.log('input min', { value, format });
  const parsedDate: Date = parseDate(value, format);
  const minDate = flatpickr.parseDate(minDateStr, format);
  console.log('ValidateMin:', { parsedDate, minDate });
  return isEqual(parsedDate, minDate) || isAfter(parsedDate, minDate);
};

export const validateMax = (
  value: string,
  format: string,
  maxDateStr?: string
): boolean => {
  if (!maxDateStr) {
    return true;
  }
  const parsedDate: Date = parseDate(value, format);
  const maxDate = parseDate(maxDateStr, format);
  console.log('ValidateMin:', { parsedDate, maxDate });
  return isEqual(parsedDate, maxDate) || isBefore(parsedDate, maxDate);
};

const validateFormat = (value: string, format: string): boolean => {
  const parsedDate: Date = parseDate(value, format);
  const formattedDate: string = flatpickr.formatDate(parsedDate, format);
  console.log('ValidateMin:', { parsedDate, formattedDate });
  return formattedDate == value;
};

const parseDate = (value: string, format: string): Date => {
  try {
    return flatpickr.parseDate(value, format);
  } catch (e) {
    throw new Error(`An Error occured while parsing: ${e}`);
  }
};
