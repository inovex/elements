import { MDCSelectHelperText } from '@material/select';
import { MDCTextFieldHelperText } from '@material/textfield';

export type FormInputWithHelperText = IsFormInput & HasHelperText;

export interface IsFormInput {
  /**
   * The optional floating label of this input field.
   */
  label?: string;

  /**
   * Marks this element as required.
   */
  required?: boolean;

  /**
   * Disables this element.
   */
  disabled?: boolean;

  /**
   * Displays the element as invalid if set to true.
   * This functionality might be useful if the input validation is (additionally) handled by the backend.
   */
  error?: boolean;

  /**
   * If true, an *optional* message is displayed if not required,
   * otherwise a * marker is displayed if required
   */
  showLabelHint?: boolean;

  /**
   * Sets focus on the native `input`.
   * Use this method instead of the global `input.focus()`.
   */
  setFocus(): void;

  /**
   * Sets blur on the native `input`.
   * Use this method instead of the global `input.blur()`.
   */
  setBlur(): void;

  nativeElement?: HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement;
}

export interface HasHelperText {
  /**
   * The optional helper text.
   */
  helperText?: string;

  /**
   * Displays the helper permanently.
   */
  helperTextPersistent?: boolean;

  /**
   * Styles the helper text as a validation message.
   */
  helperTextValidation?: boolean;

  helperTextInstance?: MDCTextFieldHelperText | MDCSelectHelperText;
}
