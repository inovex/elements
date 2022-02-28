import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { BaseOptions } from 'flatpickr/dist/types/options';
import { hasSlotContent } from '../../util/component-utils';
import { getDatepickerLocale } from './local';
import { createPicker, PickerOption, PickerTypeKeys } from './picker-factory';
import { Validator } from './validator';

/**
 * @slot icon-leading - Leading `ino-icon` of the underyling ino-input
 * @slot icon-trailing - Trailing `ino-icon` of the underyling ino-input (only for inline pickers)
 */
@Component({
  tag: 'ino-datepicker',
  styleUrl: 'ino-datepicker.scss',
  shadow: false,
})
export class Datepicker implements ComponentInterface {
  @Element() el!: HTMLElement;

  private flatpickr!: Instance;
  private inoInputEl?: HTMLInoInputElement;

  private validator: Validator;

  /**
   * Autofocuses this element.
   */
  @Prop({ attribute: 'autofocus' }) autoFocus?: boolean;

  /**
   * Optional id of an element to append the datepicker to.
   * Default is:
   *  * the host element for inline pickers
   *  * body for collapsable pickers
   */
  @Prop({ reflect: true }) appendTo?: string;
  @Watch('appendTo')
  appendToChanged(appendTo: string) {
    const appendToElement = document.querySelector(appendTo);
    appendToElement && this.redraw();
  }

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The input name of this element.
   */
  @Prop() name?: string;

  /**
   * The placeholder of the input element.
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
   * The currently selected date shown in the input field **unmanaged**. The given value
   * will not be formatted as date.
   */
  @Prop() value?: string = '';

  @Watch('value')
  valueChanged(value?: string) {
    this.validate(value);

    if (!this.disabled && this.isValid) {
      this.flatpickr?.setDate(value, true);
    }
  }

  /**
   * The minimum date that a user can start picking from (inclusive).
   */
  @Prop() min?: string;

  @Watch('min')
  minChanged(min: string) {
    this.validator.minDate = min;
    this.validate();
    this.flatpickr?.set('minDate', min);
  }

  /**
   * The maximum date that a user can pick to (inclusive).
   */
  @Prop() max?: string;

  @Watch('max')
  maxChanged(max: string) {
    this.validator.maxDate = max;
    this.validate();
    this.flatpickr?.set('maxDate', max);
  }

  /**
   * Styles the datepicker as outlined element.
   */
  @Prop() outline?: boolean;

  /**
   * Defines the label for this element.
   */
  @Prop() label?: string;

  /**
   * The helper text.
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
   * Displays the datepicker inlined.
   */
  @Prop() inline?: boolean;

  /**
   * If true, enables the user to choose two dates as an interval.
   * Only works with `type="date"`
   */
  @Prop() range?: boolean;

  @Watch('range')
  rangeChanged(val: boolean) {
    this.redraw();
    this.validator.isRanged = val;
    this.validate();
  }

  @Watch('disabled')
  @Watch('inline')
  disabledOrInlineChanged(newValue: boolean) {
    this.maybeCreate();
    this.validator.isDisabled = newValue;
    this.validate();
  }

  /**
   * Attach calendar overlay to body (true) or
   * Position the calendar inside the wrapper and inside the ino-datepicker (false)
   */
  @Prop() attachToBody = true;

  @Watch('attachToBody')
  attachToBodyChanged(attachToBody: boolean) {
    this.flatpickr?.set('static', !attachToBody);
  }


  /**
   * A string to change the date format.
   * Possible values are listed [here](https://flatpickr.js.org/formatting/).
   * The default value is `d-m-Y` which accepts values like `01-01-2019`.
   */
  @Prop() dateFormat? = 'd-m-Y';

  @Watch('dateFormat')
  dateFormatChanged(dateFormat: string) {
    this.validator.dateFormat = dateFormat;
    this.validate();
    this.flatpickr?.set('dateFormat', dateFormat);
  }

  /**
   * A string/array containing the initial date of the datepicker overlay. If you're using `inoRange = true` provide an array.
   * If a `value` is given, this will be ignored.
   */
  @Prop() defaultDate?: string | string[];

  @Watch('defaultDate')
  defaultDateChanged(defaultDate: string) {
    this.flatpickr?.set('defaultDate', defaultDate);
  }

  /**
   * A number containing the initial hour in the date-time picker overlay.
   * If a `value` is given, this will be ignored.
   */
  @Prop() defaultHour = 12;

  @Watch('defaultHour')
  defaultHourChanged(value: string) {
    this.flatpickr?.set('defaultHour', value);
  }

  /**
   * A number containing the initial minute in the date-time picker overlay.
   * If a `value` is given, this will be ignored.
   */
  @Prop() defaultMinute? = 0;

  @Watch('defaultMinute')
  defaultMinuteChanged(value: string) {
    this.flatpickr?.set('defaultMinute', value);
  }

  /**
   * If true, displays time picker in 12 hour mode with AM/PM selection.
   */
  @Prop() twelveHourTime?: boolean;

  @Watch('twelveHourTime')
  twelveHourTimeChanged(value: boolean) {
    this.flatpickr?.set('time_24hr', !value);
  }

  /**
   * Selects the correct picker corresponding to the given type.
   */
  @Prop() type?: PickerTypeKeys = 'date';

  @Watch('type')
  typeChanged() {
    this.redraw();
  }

  /**
   * Adjusts the step for the minute input (incl. scrolling)
   * Default is 5
   */
  @Prop() minuteStep = 5;

  @Watch('minuteStep')
  minuteStepChanged(value: number) {
    this.flatpickr?.set('minuteIncrement', value);
  }

  /**
   * Adjusts the step for the hour input (incl. scrolling)
   * Default is 1
   */
  @Prop() hourStep = 1;

  @State() isValid: boolean = true;

  @Watch('hourStep')
  hourStepChanged(value: number) {
    this.flatpickr?.set('hourIncrement', value);
  }

  @Listen('click')
  inoInputClickedHandler(e) {
    const target = e.target;

    if (this.disabled || !this.inoInputEl.contains(target)) {
      return;
    }

    this.toggleFlatpickr();
  }

  @Listen('clickEl')
  iconClickedHandler() {
    this.focusInputField();
    this.toggleFlatpickr();
  }

  focusInputField = () => {
    const currentFocus: Element = document.activeElement;
    const input = this.el.querySelector('input') as HTMLInputElement;

    // Don't change focus if current focus is an input field (e.g. time picker)
    if (currentFocus.tagName !== 'input') {
      input.focus();
    }
  };

  /**
   * Displays the datepicker as invalid if set to true.
   * If the property is not set or set to false,
   * the validation is handled by the default validation.
   */
  @Prop() error?: boolean;

  @Watch('error')
  errorHandler(value?: boolean) {
    if (this.disabled || !this.flatpickr) {
      return;
    }

    switch (value) {
      case true:
      case false:
        this.isValid = !value;
        break;
      default:
        this.validate();
    }
  }

  /**
   * Emits when the value of the datepicker changes.
   * The value can be found in `event.detail`
   */
  @Event() valueChange!: EventEmitter<string>;


  /**
   * Redraws the datepicker.
   */
  @Method()
  async redraw(): Promise<void> {
    this.maybeDispose();
    this.maybeCreate();
  }

  /**
   * Sets focus on the native `input`.
   * Use this method instead of the global `input.focus()`.
   */
  @Method()
  async setFocus() {
    this.inoInputEl?.setFocus();
  }

  /**
   * Sets blur on the native `input`.
   * Use this method instead of the global `input.blur()`.
   */
  @Method()
  async setBlur() {
    this.inoInputEl?.setBlur();
  }

  connectedCallback() {
    this.validator = new Validator({
      dateFormat: this.dateFormat,
      disabled: this.disabled,
      isRanged: this.range,
      minDate: this.min,
      maxDate: this.max,
    });
    this.maybeCreate();
  }

  componentDidLoad() {
    this.maybeCreate();
  }

  disconnectedCallback() {
    this.maybeDispose();
  }

  private toggleFlatpickr() {
    // If the datepicker could not be initialized (for example in dialogs), do it now
    this.maybeCreate();
    this.flatpickr.toggle();
  }

  private validate(value: string = this.value) {
    this.isValid = !this.error && this.validator.validate(value);
  }

  private maybeCreate() {
    if (this.flatpickr || this.disabled) {
      return;
    }
    const target = this.el.querySelector('ino-input') as HTMLElement;

    if (this.disabled || !target) {
      return;
    }

    const sharedOptions: Partial<BaseOptions> = {
      allowInput: true,
      clickOpens: false,
      prevArrow: '<ino-icon class="ino-datepicker__icon" icon="arrow_left"></ino-icon>',
      nextArrow: '<ino-icon class="ino-datepicker__icon" icon="arrow_right"></ino-icon>',
      ignoredFocusElements: [],
      wrap: false,
      locale: getDatepickerLocale(this.el),
      onValueUpdate: (_, newValue) => this.valueChange.emit(newValue),
    };

    if (this.appendTo) {
      sharedOptions.appendTo = document.getElementById(this.appendTo)
    }
    if (this.inline) {
      sharedOptions.appendTo = sharedOptions.appendTo ?? this.el;
      sharedOptions.inline = true;
    }


    const typeSpecificOptions: PickerOption = createPicker(this.type, {
      defaultHour: !this.value && this.defaultHour,
      defaultMinute: !this.value && this.defaultMinute,
      defaultDate: !this.value && this.defaultDate,
      enableTime: true,
      time_24hr: !this.twelveHourTime,
      minuteIncrement: this.minuteStep,
      hourIncrement: this.hourStep,
      dateFormat: this.dateFormat,
      minDate: this.min,
      maxDate: this.max,
      mode: this.range ? 'range' : 'single',
      static: !this.attachToBody,
      onValueChange: (value: string) => this.valueChange.emit(value),
    });

    const options = { ...sharedOptions, ...typeSpecificOptions };
    this.flatpickr = flatpickr(target, options);

    if (this.value) {
      this.flatpickr?.setDate(this.value);
    }
    this.value && this.errorHandler(this.error);
  }

  private maybeDispose() {
    this.flatpickr?.destroy();
    this.flatpickr = null;
  }

  render() {
    const hasTrailingIcon = hasSlotContent(this.el, 'icon-trailing');
    const hasLeadingIcon = hasSlotContent(this.el, 'icon-leading');

    return (
      <Host>
        <ino-input
          type="text"
          autocomplete="off"
          disabled={this.disabled}
          autoFocus={this.autoFocus}
          name={this.name}
          required={this.required}
          label={this.label}
          error={!this.isValid}
          icon-leading
          value={this.value}
          helper={this.helper}
          placeholder={this.placeholder}
          outline={this.outline}
          helper-persistent={this.helperPersistent}
          helper-validation={this.helperValidation}
          show-label-hint={this.showLabelHint}
          onValueChange={(e) => this.valueChange.emit(e.detail)}
          ref={(inoInputEl) => (this.inoInputEl = inoInputEl)}
        >
          {hasLeadingIcon && <slot name="icon-leading"></slot>}
          {!this.inline && (
            <ino-icon
              clickable={!this.disabled}
              icon={this.type === 'time' ? 'time' : 'calendar'}
              slot={'icon-trailing'}
            ></ino-icon>
          )}
          {this.inline && hasTrailingIcon && (
            <slot name="icon-trailing"></slot>
          )}
        </ino-input>
      </Host>
    );
  }
}
