import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Prop,
  Watch
} from '@stencil/core';
import flatpickr from 'flatpickr';
import { BaseOptions } from 'flatpickr/dist/types/options';

@Component({
  tag: 'ino-datepicker',
  styleUrls: [
    '../../../node_modules/flatpickr/dist/flatpickr.css',
    'ino-datepicker.scss'
  ],
  shadow: false
})
export class Datepicker {
  @Element() el!: HTMLElement;

  private flatpickr!: any;

  /**
   * The accesskey of this element.
   */
  @Prop() accesskey?: string;

  /**
   * Autofocuses this element.
   */
  @Prop() autofocus?: boolean;

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
   * The tabindex of this element.
   */
  @Prop() tabindex?: string;

  /**
   * A pattern to check the input field on
   */
  @Prop() inoPattern?: string;

  /**
   * The currently selected date shown in the input field **unmanaged**. The given value
   * will not be formatted as date.
   */
  @Prop() value ? = '';

  @Watch('value')
  valueChanged(value: string) {
    if (this.flatpickr) {
      this.flatpickr.setDate(value);
    }
  }

  /**
   * The minimum date that a user can start picking from (inclusive).
   */
  @Prop() min?: string;

  @Watch('min')
  minChanged(value: string) {
    this.update('minDate', value);
  }

  /**
   * The maximum date that a user can pick to (inclusive).
   */
  @Prop() max?: string;

  @Watch('max')
  maxChanged(value: string) {
    this.update('maxDate', value);
  }

  /**
   * Styles the datepicker as outlined element.
   */
  @Prop() inoOutline?: boolean;

  /**
   * Defines the label for this element.
   */
  @Prop() inoLabel?: string;

  /**
   * The helper text.
   */
  @Prop() inoHelper?: string;

  /**
   * Displays the helper permanently.
   */
  @Prop() inoHelperPersistent?: boolean;

  /**
   * Styles the helper text as a validation message.
   */
  @Prop() inoHelperValidation?: boolean;

  /**
   * If true, enables the user to choose two dates as an interval
   */
  @Prop() inoRange?: boolean;

  @Watch('inoRange')
  inoRangeChanged() {
    this.create();
  }

  /**
   * A string to change the date format. The format decides which calendar is needed (date, time, or datetime).
   * Possible values are listed [here](https://flatpickr.js.org/formatting/).
   * The default value is `d-m-Y` which accepts values like `01.01.2019`.
   */
  @Prop() inoDateFormat ? = 'd-m-Y';

  @Watch('inoDateFormat')
  inoDateFormatChanged(dateFormat: string) {
    this.update('inoDateFormat', dateFormat);
    this.update('enableTime', this.requiresTimePicker());
    this.update('noCalendar', this.requiresNoDatePicker());
  }

  /**
   * A string/array containing the initial date. If you're using `inoRange = true` provide an array.
   */
  @Prop() inoDefaultDate?: string | string[];

  @Watch('inoDefaultDate')
  inoDefaultDateChanged(defaultDate: string) {
    this.update('inoDefaultDate', defaultDate);
  }

  /**
   * A number containing the initial hour in the date-time picker.
   * The default is `12`
   */
  @Prop() inoDefaultHour = 12;

  @Watch('inoDefaultHour')
  inoDefaultHourChanged(value: string) {
    this.update('inoDefaultHour', value);
  }

  /**
   * A number containing the initial minute in the date-time picker.
   * The default is `0`
   */
  @Prop() inoDefaultMinute ? = 0;

  @Watch('inoDefaultMinute')
  inoDefaultMinuteChanged(value: string) {
    this.update('inoDefaultMinute', value);
  }

  /**
   * If true, displays time picker in 12 hour mode with AM/PM selection.
   */
  @Prop() inoTwelfHourTime?: boolean;

  @Watch('inoTwelfHourTime')
  inoTwelfHourTimeChanged(value: string) {
    this.update('inoTwelfHourTime', value);
  }

  /**
   * Adjusts the step for the minute input (incl. scrolling)
   * Default is 5
   */
  @Prop() minuteStep = 5;

  @Watch('minuteStep')
  minuteStepChanged(value: number) {
    this.update('minuteIncrement', value);
  }

  /**
   * Adjusts the step for the hour input (incl. scrolling)
   * Default is 1
   */
  @Prop() hourStep = 1;

  @Watch('hourStep')
  hourStepChanged(value: number) {
    this.update('hourIncrement', value);
  }

  @Listen('click')
  inoIconClickedHandler() {
    this.flatpickr.toggle();
  }

  /**
   * Emits when the value of the datepicker changes.
   * The value can be found in `event.detail`
   */
  @Event() valueChange!: EventEmitter<string>;

  componentDidLoad() {
    this.create();
  }

  private create() {
    const options: Partial<BaseOptions> = {
      allowInput: true,
      clickOpens: false,
      defaultDate: this.inoDefaultDate || [], // hacky: seems to be a bug in flatpickr when not providing an
      // empty array, flatpickr checks always for the length of this value
      defaultHour: this.inoDefaultHour,
      defaultMinute: this.inoDefaultMinute,
      minDate: this.min,
      maxDate: this.max,
      minuteIncrement: this.minuteStep,
      hourIncrement: this.hourStep,
      mode: this.inoRange ? 'range' : 'single',
      enableTime: this.requiresTimePicker(),
      noCalendar: this.requiresNoDatePicker(),
      ignoredFocusElements: [],
      time_24hr: !this.inoTwelfHourTime,
      dateFormat: this.inoDateFormat,
      onValueUpdate: (_, newValue) => {
        // this callback is only called when the user selects a date/time from the flatpickr
        this.valueChange.emit(newValue);
        this.flatpickr.setDate(this.value);
      }
    };

    this.dispose();
    const target = this.el.querySelector('ino-input') as HTMLElement;
    this.flatpickr = flatpickr(target, options);
  }

  private update(option, value) {
    if (this.flatpickr) {
      this.flatpickr.set(option, value);
    }
  }

  private dispose() {
    if (this.flatpickr) {
      this.flatpickr.destroy();
    }
  }

  private static readonly FORMATTING_OPTIONS = {
    time: ['H', 'h', 'i', 'S', 's', 'K'],
    date: ['d', 'D', 'l', 'j', 'J', 'w', 'F', 'm', 'n', 'M', 'U', 'y', 'Y', 'Z']
  };

  /**
   * Checks if a time picker is necessary for the current date format
   * Is necessary when a time format option is included in `inoDateFormat`
   */
  private requiresTimePicker() {
    return Datepicker.FORMATTING_OPTIONS.time.some(char =>
      this.inoDateFormat!.includes(char)
    );
  }

  /**
   * Checks if a date picker is necessary for the current date format
   * Is not necessary when no date format option is included in `inoDateFormat` and a time picker is enabled
   */
  private requiresNoDatePicker() {
    return (
      this.requiresTimePicker() &&
      !Datepicker.FORMATTING_OPTIONS.date.some(char =>
        this.inoDateFormat!.includes(char)
      )
    );
  }

  render() {
    return (
      <div>
        <ino-input
          type="text"
          autocomplete="off"
          disabled={this.disabled}
          accessKey={this.accesskey}
          autofocus={this.autofocus}
          name={this.name}
          required={this.required}
          tabindex={this.tabindex}
          ino-label={this.inoLabel}
          pattern={
            this.inoPattern && this.inoPattern !== ''
              ? this.inoPattern
              : undefined
          }
          value={this.value}
          ino-icon="date_range"
          ino-icon-clickable
          ino-helper={this.inoHelper}
          ino-outline={this.inoOutline}
          ino-helper-persistent={this.inoHelperPersistent}
          ino-helper-validation={this.inoHelperValidation}
          onValueChange={e => {
            // This callback is only called when the user types into the textfield.
            // When the user selects a date from the flatpickr, this is NOT called
            // because flatpickr controls the input field and prevents emitting.
            this.valueChange.emit(e.detail);
          }}
        />
      </div>
    );
  }
}
