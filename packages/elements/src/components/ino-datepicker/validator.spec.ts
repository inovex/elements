import { Validator } from './validator';

describe('DateValidator', () => {
  let dateValidator: Validator;

  beforeEach(() => {
    dateValidator = new Validator({
      disabled: false,
      required: false,
      isRanged: false,
      dateFormat: 'd.m.Y',
    });
  });

  it('should be valid if disabled', () => {
    dateValidator.isDisabled = true;
    expect(dateValidator.validate('ABC')).toBe(true);
  });

  it('should be invalid if required and empty value', () => {
    dateValidator.isRequired = true;
    expect(dateValidator.validate('')).toBe(false);
  });

  it('should be valid if in right format', () => {
    expect(dateValidator.validate('01.01.2020')).toBe(true);
  });

  it('should be invalid if in wrong format', () => {
    expect(dateValidator.validate('01-01-2020')).toBe(false);
  });

  it('should be valid if range in correct format', () => {
    dateValidator.isRanged = true;
    expect(dateValidator.validate('01.01.2020 to 02.01.2020')).toBe(true);
  });

  it('should be invalid if range in incorrect format', () => {
    dateValidator.isRanged = true;
    expect(dateValidator.validate('01-01-2020 to 02-01-2020')).toBe(false);
  });

  it('should be invalid if first date in range is in wrong format', () => {
    dateValidator.isRanged = true;
    expect(dateValidator.validate('01-01-2020 to 02.01.2020')).toBe(false);
  });

  it('should be invalid if second date in range is in wrong format', () => {
    dateValidator.isRanged = true;
    expect(dateValidator.validate('01.01.2020 to 02-01-2020')).toBe(false);
  });

  it('should be valid if value is equal to min date', () => {
    dateValidator.minDate = '01.01.2020';
    expect(dateValidator.validate('01.01.2020')).toBe(true);
  });

  it('should be valid if value is after min date', () => {
    dateValidator.minDate = '01.01.2020';
    expect(dateValidator.validate('02.01.2020')).toBe(true);
  });

  it('should be invalid if value is before min date', () => {
    dateValidator.minDate = '01.01.2020';
    expect(dateValidator.validate('31.12.2019')).toBe(false);
  });

  it('should be valid if value is equal to max date', () => {
    dateValidator.maxDate = '01.01.2020';
    expect(dateValidator.validate('01.01.2020')).toBe(true);
  });

  it('should be valid if value is before max date', () => {
    dateValidator.maxDate = '01.01.2020';
    expect(dateValidator.validate('31.12.2019')).toBe(true);
  });

  it('should be invalid if value is after max date', () => {
    dateValidator.maxDate = '01.01.2020';
    expect(dateValidator.validate('02.01.2020')).toBe(false);
  });

  it('should throw error if minDate cannot be parsed', () => {
    expect(() => {
      dateValidator.minDate = 'ABC';
    }).toThrow();
  });

  it('should throw error if maxDate cannot be parsed', () => {
    expect(() => {
      dateValidator.maxDate = 'ABC';
    }).toThrow();
  });

  it('should throw error if value cannot be parsed', () => {
    expect(() => {
      dateValidator.validate('ABC');
    }).toThrow();
  });
});
