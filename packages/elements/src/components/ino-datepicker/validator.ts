import { isAfter, isBefore, isEqual } from 'date-fns';
import flatpickr from 'flatpickr';

const NUMBERS_WITH_SPECIAL_CHARS = /(\d[^a-z]+)/g;

type Props = {
  disabled: boolean;
  required: boolean;
  dateFormat: string;
  isRanged: boolean;
  minDate?: string;
  maxDate?: string;
};

export class Validator {
  private _isDisabled: boolean;
  private _isRequired: boolean;
  private _dateFormat: string;
  private _minDate?: Date;
  private _maxDate?: Date;
  private _isRanged: boolean;

  constructor({
    disabled,
    required,
    dateFormat,
    isRanged,
    minDate,
    maxDate,
  }: Props) {
    this._isDisabled = disabled;
    this._isRequired = required;
    this._dateFormat = dateFormat;
    this._isRanged = isRanged;
    this.minDate = minDate;
    this.maxDate = maxDate;
  }

  /**
   * Validates the date in terms of format, require-state, disabled-state minimum date and maximum date.
   * @param value The value to be validated
   * @return true if the date is valid, false if the date is invalid
   */
  public validate = (value?: string): boolean => {
    if (this._isDisabled) {
      return true;
    }

    if (!value && this._isRequired) {
      return false;
    }

    if (!this.validateFormat(value)) {
      return false;
    }

    if (this._minDate && !this.validateMin(value)) {
      return false;
    }

    if (this._maxDate && !this.validateMax(value)) {
      return false;
    }

    return true;
  };

  private validateMin = (value: string): boolean =>
    this._isRanged
      ? this.validateMinRange(value)
      : this.validateMinSingle(value);

  private validateMinSingle = (value: string): boolean => {
    const parsedDate: Date = this.parseDate(value);
    return (
      isEqual(parsedDate, this._minDate) || isAfter(parsedDate, this._minDate)
    );
  };

  private validateMinRange = (value: string): boolean => {
    return !Validator.convertToRangeArray(value)
      .map(this.validateMinSingle)
      .includes(false);
  };

  private validateMax = (value: string): boolean =>
    this._isRanged
      ? this.validateMaxRange(value)
      : this.validateMaxSingle(value);

  private validateMaxSingle = (value: string): boolean => {
    const parsedDate: Date = this.parseDate(value);
    return (
      isEqual(parsedDate, this._maxDate) || isBefore(parsedDate, this._maxDate)
    );
  };

  private validateMaxRange = (value: string): boolean => {
    return !Validator.convertToRangeArray(value)
      .map(this.validateMaxRange)
      .includes(false);
  };

  private validateFormat = (value: string): boolean =>
    this._isRanged
      ? this.validateFormatRange(value)
      : this.validateFormatSingle(value);

  private validateFormatSingle = (value: string): boolean => {
    try {
      const parsedDate: Date = this.parseDate(value);
      const formattedDate: string = flatpickr.formatDate(
        parsedDate,
        this._dateFormat
      );
      return formattedDate == value;
    } catch (_) {
      throw new Error(
        `Value (${value}) could not be parsed. Make sure to provide a date in the following format: ${this._dateFormat}`
      );
    }
  };

  private validateFormatRange = (value: string): boolean => {
    return !Validator.convertToRangeArray(value)
      .map(this.validateFormatSingle)
      .includes(false);
  };

  private parseDate = (value: string): Date => {
    const parsedDate = flatpickr.parseDate(value, this._dateFormat);

    if (!parsedDate) {
      throw new Error(`Could not parse Date ${value}`);
    }

    return parsedDate;
  };

  set isDisabled(value: boolean) {
    this._isDisabled = value;
  }

  set isRequired(value: boolean) {
    this._isRequired = value;
  }

  set dateFormat(value: string) {
    this._dateFormat = value;
  }

  set minDate(value: string | undefined) {
    if (!value) {
      this._minDate = undefined;
      return;
    }

    try {
      this._minDate = this.parseDate(value);
    } catch (_) {
      throw new Error(
        `Minimum date (${value}) could not be parsed. Make sure to provide a date in the following format: ${this._dateFormat}`
      );
    }
  }

  set maxDate(value: string | undefined) {
    if (!value) {
      this._maxDate = undefined;
      return;
    }

    try {
      this._maxDate = this.parseDate(value);
    } catch (_) {
      throw new Error(
        `Maximum date (${value}) could not be parsed. Make sure to provide a date in the following format: ${this._dateFormat}`
      );
    }
  }

  set isRanged(value: boolean) {
    this._isRanged = value;
  }

  /**
   * Converts a range string to an array with these values
   * @param value The range as a string (e.g., "01.01.2020 to 31.01.2020")
   * @returns The range as a string array with two items (e.g., ["01.01.2020", "31.01.2020"])
   */
  private static convertToRangeArray = (value: string): string[] =>
    value.match(NUMBERS_WITH_SPECIAL_CHARS).map((match) => match.trim());
}
