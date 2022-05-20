import { MDCSlider, MDCSliderChangeEventDetail, Thumb } from '@material/slider';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
  Watch,
  Method,
} from '@stencil/core';
import classNames from 'classnames';

import { ColorScheme } from '../types';
import {preventEvent} from "../../util/component-utils";

@Component({
  tag: 'ino-range',
  styleUrl: 'ino-range.scss',
  shadow: false,
})
export class Range implements ComponentInterface {
  private sliderEl: HTMLDivElement;
  private inputElStart: HTMLInputElement; // default knob
  private inputElEnd: HTMLInputElement; // is the right knob in ranged mode
  private sliderInstance!: MDCSlider;

  @Element() el!: HTMLInoRangeElement;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The name of the color scheme of this component.
   * Possible values: `primary` (default), `secondary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() colorScheme?: ColorScheme = 'primary';

  /**
   * Restricts the slider to only allow discrete values.
   */
  @Prop() discrete?: boolean;

  /**
   * Mark this slider to show the steps of the range.
   * Only applicable if `discrete` is enabled.
   */
  @Prop() markers?: boolean;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The min value of this element.
   */

  @Prop() min?: number = 0;

  /**
   * The max value of this element (**required**).
   */
  @Prop() max: number;

  /**
   * The value of this element.
   * Only applicable if not in ranged mode.
   */
  @Prop() value?: number;

  /**
   * Allows to input an interval.
   * Use `valueStart` and `valueEnd` to provide values.
   */
  @Prop() ranged = false;

  /**
   * The value of the left thumb.
   * Only applicable in ranged mode.
   */
  @Prop() valueStart?: number;

  /**
   * The value of the right thumb.
   * Only applicable in ranged mode.
   */
  @Prop() valueEnd?: number;

  @Watch('value')
  @Watch('valueEnd')
  handleValueChange(newValue: number) {
    this.sliderInstance.setValue(newValue);
  }

  @Watch('valueStart')
  handleRangedValueChanged(newValue: number) {
    this.sliderInstance.setValueStart(newValue);
  }

  /**
   * The step size for this element.
   * Only applicable if `discrete` is enabled.
   * Is used to calculate the number of markers.
   */
  @Prop() step?: number = 1;

  /**
   * Emits when the value changes (not in ranged mode).
   */
  @Event() valueChange!: EventEmitter<number>;

  /**
   * Emits when the start (left) value of the interval changes (in ranged mode).
   */
  @Event() valueStartChange!: EventEmitter<number>;

  /**
   * Emits when the end (right) value of the interval changes (in ranged mode).
   */
  @Event() valueEndChange!: EventEmitter<number>;

  componentDidLoad() {
    /**
     * this is required for the MDCSlider to work properly. The value attribute of the input element is hidden, which
     * prevents the underlying MDCSliderFoundation to be initialised properly as it is trying to acquire the values
     * of the min, max, and value attributes from the input element.
     */
    this.inputElEnd.setAttribute(
      'value',
      `${this.valueEnd || this.value || this.min}`
    );
    this.inputElStart?.setAttribute('value', `${this.valueStart}`);
    this.sliderInstance = new MDCSlider(this.sliderEl);

    this.sliderInstance.listen('MDCSlider:change', preventEvent);
    this.sliderInstance.listen('MDCSlider:input', this.handleInput);
  }

  disconnectedCallback() {
    this.sliderInstance?.unlisten('MDCSlider:change', preventEvent);
    this.sliderInstance?.unlisten('MDCSlider:input', this.handleInput);
    this.sliderInstance?.destroy();
  }

  private handleInput = (e: CustomEvent<MDCSliderChangeEventDetail>) => {
    e.stopPropagation();

    const { thumb, value } = e.detail;

    if (!this.ranged) {
      this.sliderInstance.setValue(this.value); // reset value to make it controlled
      this.valueChange.emit(value);
      return;
    }

    if (thumb === Thumb.START) {
      this.sliderInstance.setValueStart(this.valueStart); // reset value to make it controlled
      this.valueStartChange.emit(value);
      return;
    }

    if (thumb === Thumb.END) {
      this.sliderInstance.setValue(this.valueEnd); // reset value to make it controlled
      this.valueEndChange.emit(value);
      return;
    }
  };

  /**
   * Should be used to make the component accessible.
   * If the value is not user-friendly (e.g. a number to represent the day of the week),
   * use this method to set a function that maps the slider `value` to value of the `aria-valuetext` attribute (e.g. `0` => `monday`).
   *
   * e.g.:
   *
   * `const rangeEl = document.querySelector("ino-range")`
   * `rangeEl.setFnToMapValueToAriaText((value: number) => value + ". day in this week")`
   *
   * @param fn A function that maps the numeric value to a user-friendly string.
   */
  @Method()
  async setValueToAriaTextMapperFn(fn: (value: number) => string) {
    this.sliderInstance.setValueToAriaValueTextFn(fn);
  }

  render() {
    const hostClasses = classNames(
      `ino-range--color-scheme-${this.colorScheme}`
    );

    const sliderClasses = classNames({
      'mdc-slider': true,
      'mdc-slider--discrete': this.discrete,
      'mdc-slider--tick-marks': this.markers,
      'mdc-slider--disabled': this.disabled,
      'mdc-slider--range': this.ranged,
    });

    return (
      <Host class={hostClasses}>
        <div ref={(el) => (this.sliderEl = el)} class={sliderClasses}>
          {this.ranged && (
            <input
              ref={(el) => (this.inputElStart = el)}
              class="mdc-slider__input"
              type="range"
              min={this.min}
              max={this.valueEnd}
              value={this.valueStart || this.max || 0}
            />
          )}
          <input
            ref={(el) => (this.inputElEnd = el)}
            class="mdc-slider__input"
            type="range"
            min={this.ranged ? this.valueStart : this.min}
            max={this.max}
            step={this.step}
            value={this.valueEnd || this.value || this.min || 0}
            disabled={this.disabled}
            name={this.name}
            aria-label={this.name}
          />
          <div class="mdc-slider__track">
            <div class="mdc-slider__track--inactive" />
            <div class="mdc-slider__track--active">
              <div class="mdc-slider__track--active_fill" />
            </div>
            {this.markers && (
              <div class="mdc-slider__tick-marks">
                <div class="mdc-slider__tick-mark--active" />
              </div>
            )}
          </div>
          <div class="mdc-slider__thumb">
            {this.discrete && (
              <div class="mdc-slider__value-indicator-container" aria-hidden>
                <div class="mdc-slider__value-indicator">
                  <span class="mdc-slider__value-indicator-text">
                    {this.value || this.valueStart}
                  </span>
                </div>
              </div>
            )}
            <div class="mdc-slider__thumb-knob" />
          </div>
          {this.ranged && (
            <div class="mdc-slider__thumb">
              <div
                class="mdc-slider__value-indicator-container"
                aria-hidden="true"
              >
                <div class="mdc-slider__value-indicator">
                  <span class="mdc-slider__value-indicator-text">
                    {this.valueEnd}
                  </span>
                </div>
              </div>
              <div class="mdc-slider__thumb-knob"></div>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
