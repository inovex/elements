import { MDCSlider } from '@material/slider';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h
} from '@stencil/core';
import classNames from 'classnames';

import { ColorScheme } from '../types';

@Component({
  tag: 'ino-range',
  styleUrl: 'ino-range.scss',
  shadow: false
})
export class Range implements ComponentInterface {
  private sliderInstance!: MDCSlider;

  @Element() el!: HTMLElement;

  /**
   * Restricts the slider to only allow discrete values.
   */
  @Prop() inoDiscrete?: boolean;

  /**
   * Mark this slider to show the steps of the range.
   * Only applicable if ino-discrete is true
   */
  @Prop() inoMarkers?: boolean;

  @Watch('inoMarkers')
  inoMarkersChangeHandler() {
    this.reload();
  }

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The min value of this element.
   */
  @Prop() min?: number;

  @Watch('min')
  minChangeHandler(newValue: number) {
    this.sliderInstance.min = newValue;
  }

  /**
   * The max value of this element.
   */
  @Prop() max?: number;

  @Watch('max')
  maxChangeHandler(newValue: number) {
    this.sliderInstance.max = newValue;
  }

  /**
   * The value of this element. (**unmanaged**)
   */

  @Prop() value?: number;

  /**
   * Emits when the value changes. Contains new value in `event.detail`.
   */
  @Event() valueChange!: EventEmitter;

  @Watch('value')
  valueChangeHandler(newValue: number) {
    if (this.sliderInstance) {
      this.sliderInstance.value = newValue;
    }
  }

  handleChange(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  handleInput(e) {
    const value = e.detail.foundation.value_;
    this.sliderInstance.value = value;
    this.valueChange.emit(value);
    e.stopPropagation();
  }

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  @Watch('disabled')
  disabledChangeHandler(newValue: boolean) {
    this.sliderInstance.disabled = newValue;
  }

  /**
   * The step size for this element (default = 1)
   */
  @Prop() step?: number = 1;

  @Watch('step')
  stepChangeHandler(newValue: number) {
    this.sliderInstance.step = newValue;
  }

  /**
   * The name of the color scheme of this component.
   * Possible values: `primary` (default), `secondary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: ColorScheme = 'primary';

  componentDidLoad() {
    this.load();
  }

  disconnectedCallback() {
    this.unload();
  }

  private load() {
    const sliderElement = this.el.querySelector('.mdc-slider');
    this.sliderInstance = new MDCSlider(sliderElement);
    this.sliderInstance.listen(
      'MDCSlider:change',
      this.handleChange.bind(this)
    );
    this.sliderInstance.listen('MDCSlider:input', this.handleInput.bind(this));
  }

  private unload() {
    this.sliderInstance.unlisten(
      'MDCSlider:change',
      this.handleChange.bind(this)
    );
    this.sliderInstance.unlisten(
      'MDCSlider:input',
      this.handleInput.bind(this)
    );
    this.sliderInstance.destroy();
  }

  private reload() {
    const oldValue = this.sliderInstance.value;
    this.unload();
    setTimeout(_ => this.load()); // hacky?

    this.sliderInstance.value = oldValue;
  }

  render() {
    const sliderClasses = classNames({
      'mdc-slider': true,
      'mdc-slider--discrete': this.inoDiscrete,
      'mdc-slider--display-markers': this.inoMarkers
    });

    return (
      <Host>
        <div
          class={sliderClasses}
          tabindex="0"
          role="slider"
          aria-valuemin={this.min}
          aria-valuemax={this.max}
          aria-valuenow={this.value}
          aria-label={this.name}
          aria-disabled={this.disabled}
          data-step={this.step}
        >
          <div class="mdc-slider__track-container">
            <div class="mdc-slider__track" />
            {this.inoMarkers && this.inoDiscrete && (
              <div class="mdc-slider__track-marker-container" />
            )}
          </div>
          <div class="mdc-slider__thumb-container">
            {this.inoDiscrete && (
              <div class="mdc-slider__pin">
                <span class="mdc-slider__pin-value-marker">{this.value}</span>
              </div>
            )}
            <svg class="mdc-slider__thumb" width="21" height="21">
              <circle cx="10.5" cy="10.5" r="7.875" />
            </svg>
            <div class="mdc-slider__focus-ring" />
          </div>
        </div>
      </Host>
    );
  }
}
