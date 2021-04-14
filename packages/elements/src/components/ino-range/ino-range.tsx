import { MDCSlider } from '@material/slider';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core';
import classNames from 'classnames';

import { ColorScheme } from '../types';

@Component({
  tag: 'ino-range',
  styleUrl: 'ino-range.scss',
  shadow: false,
})
export class Range implements ComponentInterface {
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
   * Only applicable if `discrete=true`
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
  @Prop() max?: number;

  /**
   * The value of this element. (**unmanaged**, default=`min`)
   */
  @Prop() value?: number;

  /**
   * The step size for this element.
   * Only applicable if ino-discrete is true.
   */
  @Prop() step?: number = 1;

  /**
   * Emits when the value changes. Contains new value in `event.detail`.
   */
  @Event() valueChange!: EventEmitter;

  componentDidLoad() {
    const sliderElement = this.el.querySelector('.mdc-slider');
    /**
     * this is required for the MDCSlider to work properly. The value attribute of the input element is hidden, which
     * prevents the underlying MDCSliderFoundation to be initialised properly as it is trying to acquire the values
     * of the min, max, and value attributes from the input element.
     */
    sliderElement
      .querySelector('input')
      .setAttribute('value', `${this.value || this.min}`);
    this.sliderInstance = new MDCSlider(sliderElement);
    this.sliderInstance.listen(
      'MDCSlider:change',
      this.handleChange.bind(this)
    );
    this.sliderInstance.listen('MDCSlider:input', this.handleInput.bind(this));
  }

  disconnectedCallback() {
    this.sliderInstance?.unlisten(
      'MDCSlider:change',
      this.handleChange.bind(this)
    );
    this.sliderInstance?.unlisten(
      'MDCSlider:input',
      this.handleInput.bind(this)
    );
    this.sliderInstance?.destroy();
  }

  handleChange(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  handleInput(e) {
    const value = e.detail.value;
    this.sliderInstance.setValue(value);
    this.valueChange.emit(value);
    e.stopPropagation();
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
        <div class={sliderClasses}>
          <input
            class="mdc-slider__input"
            type="range"
            min={this.min}
            max={this.max}
            value={this.value}
            step={this.step}
            disabled={this.disabled}
            name={this.name}
            aria-label={this.name}
          />
          <div class="mdc-slider__track">
            <div class="mdc-slider__track--inactive"></div>
            <div class="mdc-slider__track--active">
              <div class="mdc-slider__track--active_fill"></div>
            </div>
          </div>
          <div class="mdc-slider__thumb">
            {this.discrete && (
              <div class="mdc-slider__value-indicator-container">
                <div class="mdc-slider__value-indicator">
                  <span class="mdc-slider__value-indicator-text">
                    {this.value || this.min}
                  </span>
                </div>
              </div>
            )}
            <div class="mdc-slider__thumb-knob"></div>
          </div>
        </div>
      </Host>
    );
  }
}
