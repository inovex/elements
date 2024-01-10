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
import { preventEvent } from '../../util/component-utils';
import { CssClasses } from '../internal-types';
import {
  helperTextTemplate,
  initHelperText,
  updateValidityOnErrorChanged,
} from '../base/form-input/helper-text';
import { FormInputWithHelperText } from '../base/form-input/form-input-with-helper-text';
import { MDCTextFieldHelperText } from '@material/textfield';

/**
 * A range component that allows the user select a number using a slider. It functions as a wrapper around the material [Slider](https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider) component.
 */
@Component({
  tag: 'ino-range',
  styleUrl: 'ino-range.scss',
  shadow: false,
})
export class Range implements FormInputWithHelperText, ComponentInterface {
  private static HELPER_COUNTER = 0;

  private static generateHelperTextId() {
    return `range-helper-text__${Range.HELPER_COUNTER++}`;
  }

  private sliderEl: HTMLDivElement;
  private inputElStart: HTMLInputElement; // default knob
  private inputElEnd: HTMLInputElement; // is the right knob in ranged mode
  private sliderInstance!: MDCSlider;
  private mdcHelperText: MDCTextFieldHelperText;
  private uniqueHelperId = Range.generateHelperTextId();

  get helperTextInstance() {
    return this.mdcHelperText;
  }

  get nativeElement() {
    return this.ranged ? this.inputElStart : this.inputElEnd;
  }

  @Element() el!: HTMLInoRangeElement;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

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
    this.sliderInstance?.setValue(newValue);
  }

  @Watch('valueStart')
  handleRangedValueChanged(newValue: number) {
    this.sliderInstance?.setValueStart(newValue);
  }

  /**
   * The step size for this element.
   * Only applicable if `discrete` is enabled.
   * Is used to calculate the number of markers.
   */
  @Prop() step?: number = 1;

  /**
   * Displays the range input as invalid if set to true.
   * This functionality might be useful if the input validation is (additionally) handled by the backend.
   */
  @Prop() error?: boolean;

  @Watch('error')
  onErrorChanged(): void {
    updateValidityOnErrorChanged(this);
  }

  /**
   * The optional helper text.
   */
  @Prop() helperText?: string;

  /**
   * Displays the helper permanently.
   */
  @Prop() helperTextPersistent?: boolean;

  @Watch('helperTextPersistent')
  onHelperTextPeristentChanged(): void {
    this.mdcHelperText?.foundationForTextField.setPersistent(
      this.helperTextPersistent,
    );
  }

  /**
   * Styles the helper text as a validation message.
   */
  @Prop() helperTextValidation?: boolean;

  @Watch('helperTextValidation')
  onHelperTextValidationChanged(): void {
    this.mdcHelperText?.foundationForTextField.setValidation(
      this.helperTextValidation,
    );
  }

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

  /**
   * Sets focus on the native `input`.
   * Use this method instead of the global `input.focus()`.
   */
  @Method()
  async setFocus() {
    this.nativeElement?.focus();
  }

  /**
   * Sets blur on the native `input`.
   * Use this method instead of the global `input.blur()`.
   */
  @Method()
  async setBlur() {
    this.nativeElement?.blur();
  }

  componentDidLoad() {
    /**
     * this is required for the MDCSlider to work properly. The value attribute of the input element is hidden, which
     * prevents the underlying MDCSliderFoundation to be initialised properly as it is trying to acquire the values
     * of the min, max, and value attributes from the input element.
     */
    this.inputElEnd.setAttribute(
      'value',
      `${this.valueEnd || this.value || this.min}`,
    );
    this.inputElStart?.setAttribute('value', `${this.valueStart}`);
    this.sliderInstance = new MDCSlider(this.sliderEl);

    this.sliderInstance.listen('MDCSlider:change', preventEvent);
    this.sliderInstance.listen('MDCSlider:input', this.handleInput);

    this.mdcHelperText = initHelperText(this.el);
    this.initHelperText();
    this.handleInputProps();
  }

  private handleInputProps(): void {
    this.onErrorChanged();
  }

  private initHelperText(): void {
    this.mdcHelperText = initHelperText(this.el);
    this.onHelperTextPeristentChanged();
    this.onHelperTextValidationChanged();
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
    const sliderClasses: CssClasses = {
      'mdc-slider': true,
      'mdc-slider--discrete': this.discrete,
      'mdc-slider--tick-marks': this.markers,
      'mdc-slider--disabled': this.disabled,
      'mdc-slider--range': this.ranged,
    };

    return (
      <Host>
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
            {this.discrete &&
              Range.renderValueIndicator(this.value || this.valueStart)}
            <div class="mdc-slider__thumb-knob" />
          </div>
          {this.ranged && (
            <div class="mdc-slider__thumb">
              {this.discrete && Range.renderValueIndicator(this.valueEnd)}
              <div class="mdc-slider__thumb-knob"></div>
            </div>
          )}
        </div>
        {helperTextTemplate(this.uniqueHelperId, this.helperText)}
      </Host>
    );
  }

  private static renderValueIndicator(value?: number) {
    return (
      <div class="mdc-slider__value-indicator-container" aria-hidden>
        <div class="mdc-slider__value-indicator">
          <span class="mdc-slider__value-indicator-text">{value}</span>
        </div>
      </div>
    );
  }
}
