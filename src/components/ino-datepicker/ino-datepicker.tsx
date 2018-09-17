import { Component, Element, Listen, Prop, State, Watch } from '@stencil/core';
import { DatepickerType } from '../types';

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
  @Element() el: HTMLElement;

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
   * The value of this element.
   */
  @Prop() value?: string;
  @Watch('value')
  valueChanged(value: string) {
    this.internalValue = value;
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
   * The type (`date`, `datetime`, `time` or `range`) of this date picker element.
   * Default is `date`.
   */
  @Prop() inoType: DatepickerType = 'date';
  @Watch('inoType')
  inoTypeChanged() {
    this.create();
  }

  /**
   * A simple date string that sets the default date.
   */
  @Prop() inoDefaultDate?: string;
  @Watch('inoDefaultDate')
  inoDefaultDateChanged(value: string) {
    this.update('inoDefaultDate', value);
  }

  /**
   * A number containing the initial hour in the date-time picker.
   */
  @Prop() inoDefaultHour: number = 12;
  @Watch('inoDefaultHour')
  inoDefaultHourChanged(value: string) {
    this.update('inoDefaultHour', value);
  }

  /**
   * A number containing the initial minute in the date-time picker.
   */
  @Prop() inoDefaultMinute: number = 0;
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
   */
  @Prop() minuteStep?: number = 5;
  @Watch('minuteStep')
  minuteStepChanged(value: number) {
    this.update('minuteIncrement', value);
  }

  /**
   * Adjusts the step for the hour input (incl. scrolling)
   */
  @Prop() hourStep?: number = 1;
  @Watch('hourStep')
  hourStepChanged(value: number) {
    this.update('hourIncrement', value);
  }


  @State() flatpickr = null;
  @State() internalValue = null;

  @Listen('inoIconClicked')
  inoIconClickedHandler() {
    this.flatpickr.open();
  }

  componentWillLoad() {
    if (this.value) {
      this.internalValue = this.value;
    } else if (this.inoDefaultDate) {
      this.internalValue = this.inoDefaultDate;
    }
  }

  componentDidLoad() {
    this.create();
  }

  private readonly PATTERNS = {
    'date': '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])',
    'time': '(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])'
  };

  private create() {
    const options: Partial<BaseOptions> = {
      allowInput: true,
      clickOpens: false,
      defaultDate: this.inoDefaultDate,
      defaultHour: this.inoDefaultHour,
      defaultMinute: this.inoDefaultMinute,
      minDate: this.min,
      maxDate: this.max,
      minuteIncrement: this.minuteStep,
      hourIncrement: this.hourStep,
      enableTime: this.inoType === 'time' || this.inoType === 'datetime',
      noCalendar: this.inoType === 'time',
      ignoredFocusElements: [],
      time_24hr: !this.inoTwelfHourTime,
      // Set the value immediately to ensure an upgraded input label
      onValueUpdate: (_, value) => this.internalValue = value
    };

    if (this.inoType === 'range') {
      options.mode = this.inoType;
    }

    this.dispose();
    const target = this.el.querySelector('input');
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

  private inputPattern() {
    if (this.inoType === 'date') {
      return this.PATTERNS.date;
    }
    if (this.inoType === 'time') {
      return this.PATTERNS.time;
    }
    if (this.inoType === 'range') {
      return this.PATTERNS.date + ' to ' + this.PATTERNS.date;
    }
    return this.PATTERNS.date + ' ' + this.PATTERNS.time;
  }

  render() {
    return (
      <div>
        <ino-input type="text"
          autocomplete="off"
          disabled={this.disabled}
          accessKey={this.accesskey}
          autofocus={this.autofocus}
          name={this.name}
          pattern={this.inputPattern()}
          required={this.required}
          tabindex={this.tabindex}
          value={this.internalValue}
          ino-label={this.inoLabel}
          ino-icon="date_range"
          ino-icon-clickable
          ino-helper={this.inoHelper}
          ino-outline={this.inoOutline}
          ino-helper-persistent={this.inoHelperPersistent}
          ino-helper-validation={this.inoHelperValidation}>
        </ino-input>
      </div>
    );
  }
}
