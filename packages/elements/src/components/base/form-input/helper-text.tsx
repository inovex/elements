import { h } from '@stencil/core';
import { CssClasses } from '../../internal-types';
import { MDCTextFieldHelperText } from '@material/textfield';
import { FormInputWithHelperText } from './form-input-with-helper-text';
import { MDCSelectHelperText } from '@material/select';

export const helperTextTemplate = (
  id: string,
  text: string,
  additionalField?: JSXBase.HTMLAttributes<HTMLDivElement>,
): JSXBase.HTMLAttributes<HTMLDivElement> => {
  const classHelperText: CssClasses = {
    'mdc-text-field-helper-text': true,
    'mdc-text-field-helper-text--empty': text?.length === 0,
  };

  return (
    <div class="mdc-text-field-helper-line">
      <div class={classHelperText} id={id} aria-hidden="true">
        {text}
      </div>
      {additionalField}
    </div>
  );
};

export const initHelperText = (
  el: HTMLStencilElement | ShadowRoot,
): MDCTextFieldHelperText => {
  const helperTextEl = el.querySelector('.mdc-text-field-helper-text');
  return new MDCTextFieldHelperText(helperTextEl);
};

export const updateValidityOnErrorChanged = (
  comp: FormInputWithHelperText,
  customValidation?: {
    setValid: () => void;
    setInvalid: () => void;
  },
) => {
  if (comp.disabled) return;
  if (comp.error) {
    customValidation != null
      ? customValidation.setValid()
      : setValidForNativeElement(comp);
    comp.helperTextInstance.getDefaultFoundation().setValidation(true);
  } else {
    customValidation != null
      ? customValidation.setInvalid()
      : setInvalidForNativeElement(comp);
    comp.helperTextInstance
      .getDefaultFoundation()
      .setValidation(comp.helperTextValidation);
  }
};

const setValidForNativeElement = (comp: FormInputWithHelperText): void => {
  comp.nativeElement.setCustomValidity('custom-error');
};

const setInvalidForNativeElement = (comp: FormInputWithHelperText): void => {
  comp.nativeElement.setCustomValidity('');
};
