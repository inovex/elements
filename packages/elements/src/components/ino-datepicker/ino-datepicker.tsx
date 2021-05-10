import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { BaseOptions } from 'flatpickr/dist/types/options';
import { getDatepickerLocale } from './local';
import { createPicker, PickerOption, PickerTypeKeys } from './picker-factory';
import { Validator } from './validator';

@Component({
  tag: 'ino-datepicker',
  styleUrl: 'ino-datepicker.scss',
  shadow: false,
})
export class Datepicker implements ComponentInterface {
  @Element() el!: HTMLElement;

  private flatpickr!: Instance;

  private inputEl: HTMLInoInputElement;

  private validator: Validator;

  /**
   * Autofocuses this element.
   */
  @Prop({ attribute: 'autofocus' }) autoFocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The input name of this element.
   */
  @Prop() name?: string;

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
   * If true, enables the user to choose two dates as an interval.
   * Only works with inoType="date"
   */
  @Prop() range?: boolean;

  @Watch('range')
  inoRangeChanged(val: boolean) {
    this.create();
    this.validator.isRanged = val;
    this.validate();
  }

  @Watch('disabled')
  disabledChanged(newValue: boolean) {
    this.create();
    this.validator.isDisabled = newValue;
    this.validate();
  }

  /**
   * A string to change the date format.
   * Possible values are listed [here](https://flatpickr.js.org/formatting/).
   * The default value is `d-m-Y` which accepts values like `01-01-2019`.
   */
  @Prop() dateFormat? = 'd-m-Y';

  @Watch('dateFormat')
  inoDateFormatChanged(dateFormat: string) {
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
  inoDefaultDateChanged(defaultDate: string) {
    this.flatpickr?.set('defaultDate', defaultDate);
  }

  /**
   * A number containing the initial hour in the date-time picker overlay.
   * If a `value` is given, this will be ignored.
   */
  @Prop() defaultHour = 12;

  @Watch('defaultHour')
  inoDefaultHourChanged(value: string) {
    this.flatpickr?.set('defaultHour', value);
  }

  /**
   * A number containing the initial minute in the date-time picker overlay.
   * If a `value` is given, this will be ignored.
   */
  @Prop() defaultMinute? = 0;

  @Watch('defaultMinute')
  inoDefaultMinuteChanged(value: string) {
    this.flatpickr?.set('defaultMinute', value);
  }

  /**
   * If true, displays time picker in 12 hour mode with AM/PM selection.
   */
  @Prop() twelveHourTime?: boolean;

  @Watch('twelveHourTime')
  inoTwelveHourTimeChanged(value: boolean) {
    this.flatpickr?.set('time_24hr', !value);
  }

  /**
   * Selects the correct picker corresponding to the given type.
   */
  @Prop() type?: PickerTypeKeys = 'date';

  @Watch('type')
  inoTypeChanged() {
    this.create();
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

    if (this.disabled || !this.inputEl.contains(target)) {
      return;
    }

    this.flatpickr.toggle();
  }

  /**
   * Emits when the value of the datepicker changes.
   * The value can be found in `event.detail`
   */
  @Event() valueChange!: EventEmitter<string>;

  connectedCallback() {
    this.validator = new Validator({
      dateFormat: this.dateFormat,
      disabled: this.disabled,
      isRanged: this.range,
      minDate: this.min,
      maxDate: this.max,
    });
  }

  componentDidLoad() {
    this.create();
  }

  disconnectedCallback() {
    this.dispose();
  }

  private validate(value: string = this.value) {
    this.isValid = this.validator.validate(value);
  }

  private create() {
    this.dispose();

    if (this.disabled) {
      return;
    }

    const sharedOptions: Partial<BaseOptions> = {
      allowInput: !this.range,
      clickOpens: false,
      ignoredFocusElements: [],
      locale: getDatepickerLocale(this.el),
      onValueUpdate: (_, newValue) => this.valueChange.emit(newValue),
    };

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
      onValueChange: (value: string) => this.valueChange.emit(value),
    });

    const options = { ...sharedOptions, ...typeSpecificOptions };

    const target = this.el.querySelector('ino-input > div') as HTMLElement;
    this.flatpickr = flatpickr(target, options);

    if (this.value) {
      this.flatpickr?.setDate(this.value);
    }
  }

  private dispose() {
    this.flatpickr?.destroy();
  }

  render() {
    return (
      <Host>
        <ino-input
          ref={(el) => (this.inputEl = el)}
          type="text"
          autocomplete="off"
          disabled={this.disabled}
          autoFocus={this.autoFocus}
          name={this.name}
          required={this.required}
          ino-label={this.label}
          ino-error={!this.isValid}
          ino-icon-leading
          value={this.value}
          ino-helper={this.helper}
          ino-outline={this.outline}
          ino-helper-persistent={this.helperPersistent}
          ino-helper-validation={this.helperValidation}
          ino-show-label-hint={this.showLabelHint}
          onValueChange={(e) => this.valueChange.emit(e.detail)}
        >
          <ino-icon
            ino-clickable={!this.disabled}
            slot={'icon-leading'}
            ino-icon={this.type === 'time' ? 'time' : 'calendar'}
          />
        </ino-input>
      </Host>
    );
  }
}
