import { Component, Element, Event, EventEmitter, Prop, State, Watch } from '@stencil/core';
import flatpickr from 'flatpickr';

@Component({
  tag: 'ino-datepicker',
  styleUrls: [
    'ino-datepicker.scss',
    '../../../node_modules/flatpickr/dist/flatpickr.css'
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
    this.updateFlatpickr('minDate', value);
  }

  /**
   * Max date (inclusive)
   */
  @Prop() max: string;
  @Watch('max')
  maxChanged(value: string) {
    this.updateFlatpickr('maxDate', value);
  }


  // Individual attributes

  @Prop() inoType: 'date' | 'datetime' | 'time' = 'date';
  @Watch('inoType')
  inoTypeChanged(value: string) {
    this.updateFlatpickr('inoType', value);
  }

  /**
   * The date format in which the resulting date is shown in the input field.
   * If used with time also provide an format for the time.
   */
  @Prop() inoDateFormat: string;
  @Watch('inoDateFormat')
  inoDateFormatChanged(value: string) {
    this.updateFlatpickr('inoDateFormat', value);
  }

  /**
   * A simple date string containing the default date
   */
  @Prop() inoDefaultDate: string;
  @Watch('inoDefaultDate')
  inoDefaultDateChanged(value: string) {
    this.updateFlatpickr('inoDefaultDate', value);
  }

  /**
   * A number containing the setted hour in the date-time picker
   */
  @Prop() inoDefaultHour: number = 12;
  @Watch('inoDefaultHour')
  inoDefaultHourChanged(value: string) {
    this.updateFlatpickr('inoDefaultHour', value);
  }

  /**
   * A number containing the setted minutes in the date-time picker
   */
  @Prop() inoDefaultMinute: number = 0;
  @Watch('inoDefaultMinute')
  inoDefaultMinuteChanged(value: string) {
    this.updateFlatpickr('inoDefaultMinute', value);
  }

  /**
   * True if the date is shown in 12-hours (AM, PM) instead of 24-hours zone.
   */
  @Prop() inoTwelfHourTime: boolean;
  @Watch('inoTwelfHourTime')
  inoTwelfHourTimeChanged(value: string) {
    this.updateFlatpickr('inoTwelfHourTime', value);
  }

  // States

  @State() flatpickr = null;

  // Events

  @Event() inoChanged: EventEmitter;

  // Watchers

  @Watch('inoType')
  handleInoTypeChange() {
    this.createFlatpickr();
  }

  // Lifcycle

  componentDidLoad() {
    this.createFlatpickr();
  }

  // Private methods

  private createFlatpickr() {
    const target = this.el.querySelector('input');
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
      onChange: (selectedDates, a) => this.onDateChanged(selectedDates, a),
      time_24hr: !this.inoTwelfHourTime
    };

    if (this.inoDateFormat) {
      options['dateFormat'] = this.inoDateFormat;
    }

    this.flatpickr = flatpickr(target, options);
  }

  private onDateChanged(dateObj, dateStr) {
    this.inoChanged.emit(dateObj);
    this.value = dateStr;
  }

  private updateFlatpickr(option, value) {
    if (this.flatpickr) {
      this.flatpickr.set(option, value);
    }
  }


  render() {
    return (
      <div class="composer">
        <input type="text"
          placeholder={this.placeholder}
          disabled={this.disabled}
          accessKey={this.accesskey}
          autofocus={this.autofocus}
          name={this.name}
          required={this.required}
          tabindex={this.tabindex} />
      </div>
    );
  }
}
