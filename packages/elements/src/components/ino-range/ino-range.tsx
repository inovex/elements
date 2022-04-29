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

@Component({
  tag: 'ino-range',
  styleUrl: 'ino-range.scss',
  shadow: false,
})
export class Range implements ComponentInterface {
  private rootEl: HTMLDivElement;
  private inputEl: HTMLInputElement;
  private inputEl2: HTMLInputElement;
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
  @Prop() colorScheme: ColorScheme = 'primary';

  /**
   * Restricts the slider to only allow discrete values.
   */
  @Prop() discrete?: boolean;

  /**
  * Enables the ranged knob if set to true
  */
  @Prop() ranged = false;

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
   * The value of this element. (**unmanaged**, default=`min`)
   */
  @Prop() value?: number;

  /**
   * The value of the ranged element. (**unmanaged**, default=`min`)
   */
  @Prop() rangedValue?: number;

  @Watch('value')
  handleValueChange(newValue: number) {
    console.log('value', newValue)
    if(this.ranged) {
      this.sliderInstance.setValueStart(newValue)
    } else {
      this.sliderInstance.setValue(newValue);
    }
  }

  @Watch('rangedValue')
  handleRangedValueChanged(newValue: number) {
    console.log('ranged value', newValue)
      this.sliderInstance.setValue(newValue);
  }

  /**
   * The step size for this element.
   * Only applicable if `discrete` is enabled.
   * Is used to calculate the number of markers (if enabled).
   */
  @Prop() step?: number = 1;

  /**
   * Emits when the value changes. Contains new value in `event.detail`.
   */
  @Event() valueChange!: EventEmitter<number>;

  @Event() rangedValueChange!: EventEmitter<number>;


  componentDidLoad() {
    /**
     * this is required for the MDCSlider to work properly. The value attribute of the input element is hidden, which
     * prevents the underlying MDCSliderFoundation to be initialised properly as it is trying to acquire the values
     * of the min, max, and value attributes from the input element.
     */
    console.log(this.value, this.rangedValue)
    this.inputEl.setAttribute('value', `${this.value || this.min}`);
    this.inputEl2?.setAttribute('value',  `${this.rangedValue}`)
    this.sliderInstance = new MDCSlider(this.rootEl);
    console.log(this.sliderInstance)

    this.sliderInstance.listen('MDCSlider:change', this.handleChange);
    this.sliderInstance.listen('MDCSlider:input', this.handleInput);
  }

  disconnectedCallback() {
    this.sliderInstance?.unlisten('MDCSlider:change', this.handleChange);
    this.sliderInstance?.unlisten('MDCSlider:input', this.handleInput);
    this.sliderInstance?.destroy();
  }

  private handleChange = (e: CustomEvent<MDCSliderChangeEventDetail>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  private handleInput = (e: CustomEvent<MDCSliderChangeEventDetail>) => {
    e.stopPropagation();

    const { thumb, value } = e.detail;

    if(!this.ranged) {
      this.sliderInstance.setValue(this.value); // reset value to make it controlled
      this.valueChange.emit(value);
      return;
    }

    if(thumb === Thumb.START) {
      this.sliderInstance.setValueStart(this.value);
      this.valueChange.emit(value)
    }

    if(thumb === Thumb.END) { // default
      this.sliderInstance.setValue(this.rangedValue); // reset value to make it controlled
      this.rangedValueChange.emit(value);
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
        <div ref={(el) => (this.rootEl = el)} class={sliderClasses}>
          <input
            ref={(el) => (this.inputEl = el)}
            class="mdc-slider__input"
            type="range"
            min={this.min}
            max={this.ranged ? this.rangedValue : this.max}
            step={this.step}
            value={this.value || this.min || 0}
            disabled={this.disabled}
            name={this.name}
            aria-label={this.name}
          />
          {this.ranged && (
            <input
              ref={(el) => (this.inputEl2 = el)}
              class="mdc-slider__input"
              type="range"
              min={this.value}
              max={this.max}
              value={this.rangedValue || this.max || 0}
            />
          )}
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
                    {this.value || this.min}
                  </span>
                </div>
              </div>
            )}
            <div class="mdc-slider__thumb-knob" />
          </div>

          {this.ranged && (<div class="mdc-slider__thumb">
            <div class="mdc-slider__thumb-knob"></div>
          </div>)}
        </div>
      </Host>
    );
  }
}
