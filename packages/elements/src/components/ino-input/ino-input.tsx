import { MDCTextField } from '@material/textfield';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCTextFieldIcon } from '@material/textfield/icon';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  Watch,
  h,
  Method,
} from '@stencil/core';
import classNames from 'classnames';
import currency from 'currency.js';
import { hasSlotContent } from '../../util/component-utils';
import { getPrecision } from '../../util/math-utils';

/**
 * @slot icon-leading - For the icon to be prepended
 * @slot icon-trailing - For the icon to be appended
 */
@Component({
  tag: 'ino-input',
  styleUrl: 'ino-input.scss',
  shadow: false,
})
export class Input implements ComponentInterface {
  /**
   * Native Input Element
   */
  private nativeInputEl?: HTMLInputElement;

  private cursorPosition = 0;

  /**
   * An internal auto generated id for the helper field.
   */
  private uniqueHelperId = Input.generateHelperTextId();

  /**
   * An internal instance of the material design textfield.
   */
  private textfield: MDCTextField;

  /**
   * An internal instance of an textfield helper text instance (if neccessary).
   */
  private helperText: MDCTextFieldHelperText;

  /**
   * An internal instance of an textfield icon instance (if neccessary).
   */
  private icon: MDCTextFieldIcon;

  @Element() el!: HTMLElement;

  /**
   * The autocomplete property of this element.
   */
  @Prop() autocomplete?: string;

  /**
   * The autofocus of this element.
   */
  @Prop() autoFocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The min value of this element.
   */
  @Prop() min?: string;

  /**
   * The max value of this element.
   */
  @Prop() max?: string;

  /**
   * Limits the number of possible characters to the given number
   */
  @Prop() maxlength?: number;

  /**
   * The step value of this element. Use `any` for decimal numbers
   */
  @Prop() step?: number | 'any' = 1;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The validation pattern of this element.
   */
  @Prop() pattern?: string;

  /**
   * The placeholder of this element.
   */
  @Prop() placeholder?: string;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * The size of this element.
   */
  @Prop() size?: number;

  /**
   * The type of this element (default = text).
   */
  @Prop() type?: string = 'text';

  /**
   * The value of this element. (**unmanaged**)
   */
  @Prop() value = '';

  /**
   * Shows a dot as a thousands separator. Only works on 'text' type input.
   */
  @Prop() thousandsSeparator?: boolean;

  /**
   * The number of decimal places. Only works on 'text' type input.
   */
  @Prop() decimalPlaces?: number;

  /**
   * Displays the given unit at the end of the input field.
   */
  @Prop() unit: string;

  @Watch('value')
  valueChanged(newValue: string) {
    if (this.textfield && this.nativeInputEl) {
      const parsedInput = this.parseInput(newValue);
      this.textfield.value = parsedInput;
      this.nativeInputEl.value = parsedInput;

      // setSelectionRange does not work on number input
      if (this.type !== 'number' && this.type !== 'email') {
        this.nativeInputEl.setSelectionRange(
          this.cursorPosition,
          this.cursorPosition
        );
      }
    }
  }

  /**
   * If true, an *optional* message is displayed if not required,
   * otherwise a * marker is displayed if required
   */
  @Prop() showLabelHint?: boolean;

  /**
   * Styles the input field as outlined element.
   */
  @Prop() outline?: boolean;

  /**
   * The optional floating label of this input field.
   */
  @Prop() label?: string;

  /**
   * The optional helper text.
   */
  @Prop() helper?: string;

  /**
   * Displays the helper permanently.
   */
  @Prop() helperPersistent?: boolean;

  /**
   * Styles the helper text as a validation message.
   */
  @Prop() helperValidation?: boolean;

  /**
   * Displays the number of characters. The maxlength-property must be set.
   * This helper text will be displayed persistently.
   */
  @Prop() helperCharacterCounter?: boolean;

  /**
   * The id of the datalist child
   */
  @Prop() dataList?: string;

  /**
   * Displays the input field as invalid if set to true.
   * If the property is not set or set to false, the validation is handled by the `pattern` property.
   * This functionality might be useful if the input validation is (additionally) handled by the backend.
   */
  @Prop() error?: boolean;

  @Watch('error')
  errorHandler(value?: boolean) {
    if (this.disabled) return;

    if (value) {
      this.textfield.valid = false;
      this.textfield.useNativeValidation = false;
    } else {
      this.textfield.valid = true;
      this.textfield.useNativeValidation = true;
      this.nativeInputEl.checkValidity();
    }
  }

  @Listen('focus')
  focusListener() {
    this.textfield.focus();
  }

  /**
   * Returns the native input element used under the hood.
   */
  @Method()
  async getInputElement() {
    return this.nativeInputEl;
  }

  /**
   * Simple static construct to generate unique helper text ids.
   */
  private static HELPER_COUNTER = 0;

  static generateHelperTextId() {
    return `input-helper-text__${Input.HELPER_COUNTER++}`;
  }

  componentDidLoad() {
    this.textfield = new MDCTextField(this.el.querySelector('.mdc-text-field'));

    if (this.type === 'email') {
      this.textfield.useNativeValidation = false;
    }
    if (this.helper) {
      this.helperText = new MDCTextFieldHelperText(
        document.querySelector('.mdc-text-field-helper-text')
      );
    }

    const leadingSlotHasContent = hasSlotContent(this.el, 'icon-leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'icon-trailing');

    if (leadingSlotHasContent || trailingSlotHasContent) {
      this.icon = new MDCTextFieldIcon(
        this.el.querySelector('.mdc-text-field__icon')
      );
    }

    if (this.value && this.textfield) {
      this.textfield.value = this.value;
    }

    if (this.autoFocus) {
      this.textfield.focus();
    }

    if (this.dataList) {
      this.nativeInputEl.setAttribute('list', this.dataList);
      // see https://github.com/ionic-team/stencil/issues/1582
    }

    this.errorHandler(this.error);
    this.el.setAttribute('tabindex', '-1');
  }

  disconnectedCallback() {
    this.textfield?.destroy();
    this.helperText?.destroy();
    this.icon?.destroy();
  }

  private handleNativeInputChange(e) {
    this.cursorPosition = e.target.selectionStart;
    this.valueChange.emit(e.target.value);

    if (this.nativeInputEl) {
      this.nativeInputEl.value = this.parseInput(this.value);
    }
  }

  /**
   * Emits when the user types something in.
   * Contains typed input in `event.detail`
   */
  @Event() valueChange!: EventEmitter<string>;

  @Listen('change')
  handleChange(e: Event) {
    e.stopPropagation();
  }

  @Listen('input')
  handleInput(e) {
    e.stopImmediatePropagation();
    e.stopPropagation();
  }

  /**
   * Emits when the input field is blurred and validates email input
   */
  @Event({ bubbles: false }) inoBlur!: EventEmitter<void>;
  private handleBlur = (e) => {
    if (this.type === 'email') {
      this.textfield.valid = this.nativeInputEl.checkValidity();
    }
    this.inoBlur.emit(e);
  };

  /**
   * Emits when the input field is focused
   */
  @Event({ bubbles: false }) inoFocus!: EventEmitter<void>;
  private handleFocus = (e) => {
    this.inoFocus.emit(e);
  };

  private handleInputNumberArrowClick = (shouldIncrement: boolean) => {
    const stepWithFallback = this.step && this.step !== 'any' ? this.step : 1;

    const precisionOfValue = this.value ? getPrecision(Number(this.value)) : 0;
    const formattedValue = currency(this.value, {
      precision: precisionOfValue,
    });

    const newValue = shouldIncrement
      ? formattedValue.add(stepWithFallback)
      : formattedValue.subtract(stepWithFallback);

    this.valueChange.emit(newValue.toString());
  };

  private helperTextTemplate() {
    const classHelperText = classNames({
      'mdc-text-field-helper-text': true,
      'mdc-text-field-helper-text--persistent': this.helperPersistent,
      'mdc-text-field-helper-text--validation-msg': !!this.helperValidation,
    });

    return (
      <div class={classHelperText} id={this.uniqueHelperId} aria-hidden="true">
        {this.helper}
      </div>
    );
  }

  /**
   * Formats the given input according to the Props decimalPlaces or thousandsSeparator
   * @param val The value which should be formatted
   * @return if the val can be formatted, returns the formatted string, else returns the original input val
   */
  private parseInput(val?: string): string {
    const canBeFormatted =
      Boolean(val) &&
      this.type === 'text' &&
      Boolean(this.decimalPlaces || this.thousandsSeparator);

    if (!canBeFormatted) {
      return val;
    }

    const formatOptions = {
      separator: this.thousandsSeparator ? '.' : '',
      decimal: ',',
      precision: this.decimalPlaces | 0,
    };

    const formattedValue: string = currency(val, formatOptions).format();

    // Compute the new cursor position after . was added
    if (this.thousandsSeparator) {
      const numberOfAddedCharacters: number = Math.abs(
        val.length - formattedValue.length
      );

      if (numberOfAddedCharacters !== 0) {
        this.nativeInputEl.setSelectionRange(
          this.cursorPosition + numberOfAddedCharacters,
          this.cursorPosition + numberOfAddedCharacters
        );
      }
    }

    return formattedValue;
  }

  private characterCounterTemplate() {
    return (
      <div class="mdc-text-field-character-counter">
        {`${this.value.length} / ${this.maxlength}`}
      </div>
    );
  }

  render() {
    const hasHelperText = Boolean(this.helper);
    const hasCharacterCounter = Boolean(
      this.helperCharacterCounter && !Number.isNaN(this.maxlength)
    );

    const leadingSlotHasContent = hasSlotContent(this.el, 'icon-leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'icon-trailing');

    const classTextfield = classNames({
      'ino-input__composer': true,
      'mdc-text-field': true,
      'mdc-text-field--disabled': this.disabled,
      'mdc-text-field--focused': this.autoFocus,
      'mdc-text-field--filled': !this.outline,
      'mdc-text-field--outlined': this.outline,
      'mdc-text-field--box': !this.outline,
      'mdc-text-field--with-leading-icon': leadingSlotHasContent,
      'mdc-text-field--with-trailing-icon': trailingSlotHasContent || this.unit,
      'mdc-text-field--no-label': !this.label,
    });

    return (
      <Host>
        <div class={classTextfield}>
          {leadingSlotHasContent && (
            <span class={'mdc-text-field__icon mdc-text-field__icon--leading'}>
              <slot name={'icon-leading'}></slot>
            </span>
          )}
          <input
            ref={(el) => (this.nativeInputEl = el)}
            class="mdc-text-field__input"
            autocomplete={this.autocomplete}
            autofocus={this.autoFocus}
            disabled={this.disabled}
            min={this.min}
            max={this.max}
            maxLength={this.maxlength}
            step={this.step}
            name={this.name}
            pattern={this.pattern}
            placeholder={this.placeholder}
            required={this.required}
            size={this.size}
            type={this.type}
            value={this.parseInput(this.value)}
            aria-controls={this.helper && this.uniqueHelperId}
            aria-describedby={this.helper && this.uniqueHelperId}
            onInput={this.handleNativeInputChange.bind(this)}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            list={this.dataList}
          />
          <slot />
          {this.unit && (
            <span class="mdc-text-field__affix mdc-text-field__affix--suffix">
              {this.unit}
            </span>
          )}
          {this.type === 'number' && (
            <div class={'arrow-container'}>
              <ino-icon
                class={'ino-num-arrows up'}
                onClick={() => this.handleInputNumberArrowClick(true)}
                icon="_input_number_arrow_down"
              />
              <ino-icon
                class={'ino-num-arrows down'}
                onClick={() => this.handleInputNumberArrowClick(false)}
                icon="_input_number_arrow_down"
              />
            </div>
          )}
          <ino-label
            outline={this.outline}
            text={this.label}
            required={this.required}
            show-hint={this.showLabelHint}
            disabled={this.disabled}
          />
          {trailingSlotHasContent && (
            <span class={'mdc-text-field__icon mdc-text-field__icon--trailing'}>
              <slot name={'icon-trailing'}/>
            </span>
          )}
        </div>
        <div class="mdc-text-field-helper-line">
          {hasHelperText && this.helperTextTemplate()}
          {hasCharacterCounter && this.characterCounterTemplate()}
        </div>
      </Host>
    );
  }
}
