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
import { hasSlotContent } from '../../util/component-utils';
import { getPrecision } from '../../util/math-utils';
import { InputType, UserInputInterceptor } from '../types';

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
  @Element() el!: HTMLElement;

  private nativeInputEl?: HTMLInputElement;
  private cursorPosition = 0;

  /**
   * A function called to intercept the user input.
   */
  private userInputInterceptorFn: UserInputInterceptor;

  /**
   * An internal auto generated id for the helper field.
   */
  private uniqueHelperId = Input.generateHelperTextId();

  /**
   * An internal instance of the material design textfield.
   */
  private mdcTextfield: MDCTextField;

  /**
   * An internal instance of an textfield helper text instance (if neccessary).
   */
  private mdcHelperText: MDCTextFieldHelperText;

  /**
   * An internal instance of an textfield icon instance (if neccessary).
   */
  private mdcTextfieldIcon: MDCTextFieldIcon;

  /**
   * Simple static construct to generate unique helper text ids.
   */
  private static HELPER_COUNTER = 0;
  static generateHelperTextId() {
    return `input-helper-text__${Input.HELPER_COUNTER++}`;
  }

  /**
   * The autocomplete property of this element.
   */
  @Prop() autocomplete?: string;

  /**
   * The autofocus of this element.
   */
  @Prop() autoFocus?: boolean;

  /**
   * The id of the datalist child
   */
  @Prop() dataList?: string;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * Displays the input field as invalid if set to true.
   * If the property is not set or set to false, the validation is handled by the `pattern` property.
   * This functionality might be useful if the input validation is (additionally) handled by the backend.
   */
  @Prop() error?: boolean;

  @Watch('error')
  errorHandler(invalid?: boolean) {
    if (this.disabled || !this.mdcTextfield) {
      return;
    }

    if (invalid) {
      this.mdcTextfield.valid = false;
      this.mdcTextfield.useNativeValidation = false;
    } else {
      this.mdcTextfield.valid = true;
      this.mdcTextfield.useNativeValidation = true;
      this.nativeInputEl.checkValidity();
    }
  }

  /**
   * The optional helper text.
   */
  @Prop() helper?: string;

  /**
   * Displays the number of characters. The maxlength-property must be set.
   * This helper text will be displayed persistently.
   */
  @Prop() helperCharacterCounter?: boolean;

  /**
   * Displays the helper permanently.
   */
  @Prop() helperPersistent?: boolean;

  /**
   * Styles the helper text as a validation message.
   */
  @Prop() helperValidation?: boolean;

  /**
   * The optional floating label of this input field.
   */
  @Prop({ mutable: true }) label?: string;

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
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * Styles the input field as outlined element.
   */
  @Prop() outline?: boolean;

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
   * If true, an *optional* message is displayed if not required,
   * otherwise a * marker is displayed if required
   */
  @Prop() showLabelHint?: boolean;

  /**
   * The size of this element.
   */
  @Prop() size?: number;

  /**
   * The step value of this element. Use `any` for decimal numbers
   */
  @Prop() step?: number | 'any' = 1;

  /**
   * The type of this element (default = text).
   */
  @Prop() type?: InputType = 'text';

  /**
   * Displays the given unit at the end of the input field.
   */
  @Prop() unit: string;

  /**
   * The value of this element. (**unmanaged**)
   */
  @Prop({ mutable: true }) value = '';

  @Watch('value')
  valueChanged(newValue: string) {
    this.textfieldValue = newValue || '';

    // setSelectionRange does not work on number input
    if (this.nativeInputEl && !['number', 'email'].includes(this.type)) {
      this.nativeInputEl.setSelectionRange(
        this.cursorPosition,
        this.cursorPosition
      );
    }
  }

  // ----
  // Events and listeners
  // ----

  /**
   * Emits when the input field is blurred and validates email input
   */
  @Event({ bubbles: false }) inoBlur!: EventEmitter<void>;

  /**
   * Emits when the input field is focused
   */
  @Event({ bubbles: false }) inoFocus!: EventEmitter<void>;

  /**
   * Emits when the user types something in.
   * Contains typed input in `event.detail`
   */
  @Event() valueChange!: EventEmitter<string>;

  @Listen('change')
  handleChange(e: Event) {
    e.stopPropagation();
  }

  @Listen('focus')
  focusListener() {
    this.mdcTextfield?.focus();
  }

  @Listen('input')
  handleInput(e: Event) {
    e.stopImmediatePropagation();
    e.stopPropagation();
  }

  // ----
  // Lifecycle methods
  // ----

  componentDidLoad() {
    this.mdcTextfield = new MDCTextField(
      this.el.querySelector('.mdc-text-field')
    );

    if (this.type === 'email') {
      this.mdcTextfield.useNativeValidation = false;
    }

    if (this.helper) {
      const helperTextEl = document.querySelector(
        '.mdc-text-field-helper-text'
      );
      this.mdcHelperText = new MDCTextFieldHelperText(helperTextEl);
    }

    if (
      hasSlotContent(this.el, 'ino-icon-leading') ||
      hasSlotContent(this.el, 'ino-icon-trailing')
    ) {
      this.mdcTextfieldIcon = new MDCTextFieldIcon(
        this.el.querySelector('.mdc-text-field__icon')
      );
    }
    this.textfieldValue = this.value || '';

    if (this.autoFocus) {
      this.setFocus();
    }

    if (this.dataList) {
      this.nativeInputEl.setAttribute('list', this.dataList);
      // see https://github.com/ionic-team/stencil/issues/1582
    }

    this.errorHandler(this.error);
    this.el.setAttribute('tabindex', '-1');
  }

  componentDidRender() {
    // This adjusts the dimensions, whenever a property changes, e.g. the label gets translated to another language.
    this.mdcTextfield?.layout();
  }

  disconnectedCallback() {
    this.mdcTextfield?.destroy();
    this.mdcHelperText?.destroy();
    this.mdcTextfieldIcon?.destroy();
  }

  // ----
  // Methods
  // ----

  /**
   * Returns the native input element used under the hood.
   */
  @Method()
  async getInputElement() {
    return this.nativeInputEl;
  }

  /**
   * Sets focus on the native `input`.
   * Use this method instead of the global `input.focus()`.
   */
  @Method()
  async setFocus() {
    this.mdcTextfield?.getDefaultFoundation().activateFocus();
    this.mdcTextfield?.focus();
  }

  /**
   * Sets blur on the native `input`.
   * Use this method instead of the global `input.blur()`.
   */
  @Method()
  async setBlur() {
    this.nativeInputEl?.blur();
  }

  /**
   * Sets an interceptor to manipulate user input before emitting a
   * `valueChange` event.
   *
   * @internal
   */
  @Method()
  async setUserInputInterceptor(fn: UserInputInterceptor) {
    this.userInputInterceptorFn = fn;
  }

  // ----
  // Native input event handler
  // ----

  private handleNativeInputChange = (e) => {
    let value = e.target.value;
    if (this.userInputInterceptorFn) {
      value = this.userInputInterceptorFn(value);
    }
    this.textfieldValue = value || '';
    if (value != this.value) {
      this.cursorPosition = e.target.selectionStart;
      this.valueChange.emit(value);
    }
  };

  private handleBlur = (e) => {
    if (this.type === 'email') {
      this.mdcTextfield.valid = this.nativeInputEl.checkValidity();
    }
    this.inoBlur.emit(e);
  };

  private handleFocus = (e) => {
    this.inoFocus.emit(e);
  };

  private handleInputNumberArrowClick = (shouldIncrement: boolean) => {
    let stepWithFallback = this.step && this.step !== 'any' ? this.step : 1;
    stepWithFallback = shouldIncrement
      ? stepWithFallback
      : stepWithFallback * -1;

    const value = Number(this.value.replace(',', '.'));
    const precision = value ? getPrecision(value) : 0;
    const opts = {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    };
    const formattedValue = new Intl.NumberFormat([], opts).format(
      value + Number(stepWithFallback)
    );
    this.valueChange.emit(formattedValue);
  };

  // ----
  // Internal getters and setters
  // ----

  private get textfieldValue(): string {
    return this.mdcTextfield?.value;
  }

  private set textfieldValue(value: string) {
    if (this.mdcTextfield) {
      this.mdcTextfield.value = value;
    }
    if (this.nativeInputEl) {
      this.nativeInputEl.value = value;
    }
  }

  // ----
  // Rendering
  // ----

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

  private characterCounterTemplate() {
    return (
      <div class="mdc-text-field-character-counter">
        {`${this.value?.length} / ${this.maxlength}`}
      </div>
    );
  }

  render() {
    const hasHelperText = Boolean(this.helper);
    const hasCharacterCounter = Boolean(
      this.helperCharacterCounter && !Number.isNaN(this.maxlength)
    );

    const leadingIconSlot = hasSlotContent(this.el, 'icon-leading');
    const trailingIconSlot = hasSlotContent(this.el, 'icon-trailing');

    const classTextfield = classNames({
      'ino-input__composer': true,
      'mdc-text-field': true,
      'mdc-text-field--disabled': this.disabled,
      'mdc-text-field--focused': this.autoFocus,
      'mdc-text-field--filled': !this.outline,
      'mdc-text-field--outlined': this.outline,
      'mdc-text-field--box': !this.outline,
      'mdc-text-field--with-leading-icon': leadingIconSlot,
      'mdc-text-field--with-trailing-icon': trailingIconSlot || this.unit,
      'mdc-text-field--no-label': !this.label,
    });

    return (
      <Host>
        <label class={classTextfield}>
          <ino-label
            outline={this.outline}
            text={this.label}
            required={this.required}
            show-hint={this.showLabelHint}
            disabled={this.disabled}
          />
          {leadingIconSlot && (
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
            value={this.value}
            aria-controls={this.helper && this.uniqueHelperId}
            aria-describedby={this.helper && this.uniqueHelperId}
            onInput={this.handleNativeInputChange.bind(this)}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            list={this.dataList}
          />
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
          {trailingIconSlot && (
            <span class={'mdc-text-field__icon mdc-text-field__icon--trailing'}>
              <slot name={'icon-trailing'} />
            </span>
          )}
        </label>
        <div class="mdc-text-field-helper-line">
          {hasHelperText && this.helperTextTemplate()}
          {hasCharacterCounter && this.characterCounterTemplate()}
        </div>
      </Host>
    );
  }
}
