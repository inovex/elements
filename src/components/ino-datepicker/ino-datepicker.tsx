import { Component, Element, Prop, State, Watch } from '@stencil/core';
import flatpickr from 'flatpickr';

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

  // Native pass-through properties

  @Prop() accesskey: string;
  @Prop() autofocus: boolean;
  @Prop() disabled: boolean;
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() required: boolean;
  @Prop() tabindex: string;
  @Prop({mutable: true}) value: string;

  /**
   * Min date (inclusive)
   */
  @Prop() min: string;
  @Watch('min')
  minChanged(value: string) {
    this.update('minDate', value);
  }

  /**
   * Max date (inclusive)
   */
  @Prop() max: string;
  @Watch('max')
  maxChanged(value: string) {
    this.update('maxDate', value);
  }


  // Individual attributes

  @Prop() inoType: 'date' | 'datetime' | 'time' = 'date';
  @Watch('inoType')
  inoTypeChanged() {
    this.create();
  }

  /**
   * The date format in which the resulting date is shown in the input field.
   * If used with time also provide an format for the time.
   */
  @Prop() inoDateFormat: string;
  @Watch('inoDateFormat')
  inoDateFormatChanged(value: string) {
    this.update('inoDateFormat', value);
  }

  /**
   * A simple date string containing the default date
   */
  @Prop() inoDefaultDate: string;
  @Watch('inoDefaultDate')
  inoDefaultDateChanged(value: string) {
    this.update('inoDefaultDate', value);
  }

  /**
   * A number containing the setted hour in the date-time picker
   */
  @Prop() inoDefaultHour: number = 12;
  @Watch('inoDefaultHour')
  inoDefaultHourChanged(value: string) {
    this.update('inoDefaultHour', value);
  }

  /**
   * A number containing the setted minutes in the date-time picker
   */
  @Prop() inoDefaultMinute: number = 0;
  @Watch('inoDefaultMinute')
  inoDefaultMinuteChanged(value: string) {
    this.update('inoDefaultMinute', value);
  }

  /**
   * True if the date is shown in 12-hours (AM, PM) instead of 24-hours zone.
   */
  @Prop() inoTwelfHourTime: boolean;
  @Watch('inoTwelfHourTime')
  inoTwelfHourTimeChanged(value: string) {
    this.update('inoTwelfHourTime', value);
  }

  // States
  @State() flatpickr = null;


  // Lifcycle

  componentDidLoad() {
    this.create();
  }

  // Private methods

  private create() {
    const options = {
      appendTo: this.el.querySelector('div.composer') as HTMLElement,
      defaultDate: this.inoDefaultDate,
      defaultHour: this.inoDefaultHour,
      defaultMinute: this.inoDefaultMinute,
      minDate: this.min,
      maxDate: this.max,
      enableTime: this.inoType !== 'date',
      noCalendar: this.inoType === 'time',
      ignoredFocusElements: [],
      time_24hr: !this.inoTwelfHourTime
    };
    if (this.inoDateFormat) {
      options['dateFormat'] = this.inoDateFormat;
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


  render() {
    return (
      <div class="composer">
        <ino-input type="text"
          placeholder={this.placeholder}
          disabled={this.disabled}
          accessKey={this.accesskey}
          autofocus={this.autofocus}
          name={this.name}
          required={this.required}
          tabindex={this.tabindex}></ino-input>
      </div>
    );
  }
}
