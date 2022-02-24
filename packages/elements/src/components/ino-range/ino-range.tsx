import { MDCSlider, MDCSliderChangeEventDetail } from '@material/slider';
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
  private sliderInstance!: MDCSlider;

  @Element() el!: HTMLElement;

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

  @Watch('value')
  handleValueChange(newValue: number) {
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

  componentDidLoad() {
    /**
     * this is required for the MDCSlider to work properly. The value attribute of the input element is hidden, which
     * prevents the underlying MDCSliderFoundation to be initialised properly as it is trying to acquire the values
     * of the min, max, and value attributes from the input element.
     */
    this.inputEl.setAttribute('value', `${this.value || this.min}`);
    this.sliderInstance = new MDCSlider(this.rootEl);

    this.sliderInstance.listen('MDCSlider:change', this.handleChange);
    this.sliderInstance.listen('MDCSlider:input', this.handleInput);
  }

  disconnectedCallback() {
    this.sliderInstance?.unlisten('MDCSlider:change', this.handleChange);
    this.sliderInstance?.unlisten('MDCSlider:input', this.handleInput);
    this.sliderInstance?.destroy();
  }

  handleChange = (e: CustomEvent<MDCSliderChangeEventDetail>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  handleInput = (e: CustomEvent<MDCSliderChangeEventDetail>) => {
    this.sliderInstance.setValue(this.value); // reset value to make it controlled
    this.valueChange.emit(e.detail.value);
    e.stopPropagation();
  };

  /**
   * Should be used to make the component accessible.
   * If the value is not user-friendly (e.g. a number to represent the day of the week),
   * use this method to set a function that maps the slider `value` to value of the `aria-valuetext` attribute (e.g. `0` => `monday`).
   *
   * @param fn A function that maps the numeric value to a user-friendly string.
   */
  @Method()
  async setFnToMapValueToAriaText(fn: (value: number) => string) {
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
    });

    return (
      <Host class={hostClasses}>
        <div ref={(el) => (this.rootEl = el)} class={sliderClasses}>
          <input
            ref={(el) => (this.inputEl = el)}
            class="mdc-slider__input"
            type="range"
            min={this.min}
            max={this.max}
            value={this.value || this.min || 0}
            step={this.step}
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
                    {this.value || this.min}
                  </span>
                </div>
              </div>
            )}
            <div class="mdc-slider__thumb-knob" />
          </div>
        </div>
      </Host>
    );
  }
}
