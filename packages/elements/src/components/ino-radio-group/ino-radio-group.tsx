import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  Watch,
  h,
  Listen,
  EventEmitter,
  Event,
  Method,
} from '@stencil/core';
import { Alignment } from '../types';
import { CssClasses } from '../internal-types';
import { FormInputWithHelperText } from '../base/form-input/form-input-with-helper-text';
import {
  helperTextTemplate,
  initHelperText,
  updateValidityOnErrorChanged,
} from '../base/form-input/helper-text';
import { MDCTextFieldHelperText } from '@material/textfield';
import { JSX, State } from '@stencil/core/internal';

/**
 * A wrapper component to be used for a group of ino-radio-buttons. This component manages the single selection functionality of a group of ino-radio-buttons.
 *
 * @slot default - One or more `ino-radio`
 */
@Component({
  tag: 'ino-radio-group',
  styleUrl: 'ino-radio-group.scss',
  shadow: false,
})
export class RadioGroup implements FormInputWithHelperText, ComponentInterface {
  @Element() el!: HTMLInoRadioGroupElement;

  private static HELPER_COUNTER = 0;

  private static generateHelperTextId() {
    return `radio-group-helper-text__${RadioGroup.HELPER_COUNTER++}`;
  }

  private radioGroupNativeElement: HTMLDivElement;
  private hiddenInput: HTMLInputElement;
  private mdcHelperText: MDCTextFieldHelperText;
  private uniqueHelperId = RadioGroup.generateHelperTextId();

  get helperTextInstance() {
    return this.mdcHelperText;
  }

  get nativeElement() {
    return this.hiddenInput;
  }

  /**
   * The value of the radio group.
   * If there is an ino-radio child with the given value, the radio-button will be checked and the other radio-buttons unchecked.
   */
  @Prop() value?: string | number | null;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  @Watch('disabled')
  onDisabledChanged() {
    this.getRadios().then((radios) =>
      radios.forEach((radio) => (radio.disabled = this.disabled)),
    );
  }

  /**
   * Sets the alignment of the radios to either vertical or horizontal.
   */
  @Prop() alignment: Alignment = 'horizontal';

  @Watch('value')
  onValueChanged() {
    this.hiddenInput.value = this.value != null ? (this.value as string) : '';
    this.updateRadios();
  }

  /**
   * Displays the range input as invalid if set to true.
   * This functionality might be useful if the input validation is (additionally) handled by the backend.
   */
  @Prop() error?: boolean;

  @Watch('error')
  onErrorChanged(): void {
    updateValidityOnErrorChanged(this);
    this.updateRadios();
    this.touched = this.error;
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
   * Sets focus on the native element.
   * Use this method instead of the global `input.focus()`.
   */
  @Method()
  async setFocus() {
    this.radioGroupNativeElement.focus();
  }

  /**
   * Sets blur on the native element.
   * Use this method instead of the global `input.blur()`.
   */
  @Method()
  async setBlur() {
    this.radioGroupNativeElement.blur();
  }

  @Listen('checkedChange')
  handleCheckedChange(ev: CustomEvent) {
    const target = ev.target as HTMLInoRadioElement;
    this.valueChange.emit(target.value);
  }

  @Listen('mouseover')
  handleMouseOver(ev: Event) {
    const target = ev.target as HTMLInoRadioElement;
    this.addHoverAnimation(target);
  }

  @Listen('mouseout')
  handleMouseOut() {
    this.removeHoverAnimation();
  }

  componentDidLoad() {
    this.initHelperText();
    this.handleInputProps();
  }

  /**
   * Emits if the user clicks or navigates (via keyboard) to a `<ino-radio>` element within the radio group.
   * Contains the `value` of the selected `<ino-radio>`.
   */
  @Event() valueChange!: EventEmitter<number | string>;

  /**
   * Allows key navigation once radio group has been focused.
   */
  @Listen('keydown', {})
  async handleKeyDown(ev: KeyboardEvent) {
    if (!ev.key.startsWith('Arrow')) return;

    ev.preventDefault();

    const radios = await this.getRadios();
    const checkedRadio = radios.find((radio) => Boolean(radio.checked));

    if (checkedRadio == null) {
      this.valueChange.emit(radios[0].value);
      return;
    }

    let nextRadioButton: HTMLInoRadioElement;

    switch (ev.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextRadioButton =
          (checkedRadio.nextElementSibling as HTMLInoRadioElement) ?? radios[0];
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextRadioButton =
          (checkedRadio.previousElementSibling as HTMLInoRadioElement) ??
          radios[radios.length - 1];
        break;
    }

    this.valueChange.emit(nextRadioButton.value);
  }

  @State() touched = false;

  @Watch('touched')
  onTouchedChanged() {
    this.updateRadios();
  }

  private handleInputProps(): void {
    this.onDisabledChanged();
    this.onErrorChanged();
    this.onValueChanged();
  }

  private initHelperText(): void {
    this.mdcHelperText = initHelperText(this.el);
    this.onHelperTextPeristentChanged();
    this.onHelperTextValidationChanged();
  }

  /**
   * Adds a hover animation to the currently checked ino radio
   */
  private async addHoverAnimation(hoveredRadio: HTMLInoRadioElement) {
    const radios = await this.getRadios();
    const checkedRadio = radios.find((radio) => Boolean(radio.checked));

    if (checkedRadio == null || hoveredRadio === checkedRadio) {
      return;
    }

    checkedRadio.classList.add('ino-checked-hover');
  }

  private async removeHoverAnimation() {
    const radios = await this.getRadios();
    const checkedRadio = radios.find((radio) =>
      radio.classList.contains('ino-checked-hover'),
    );

    if (checkedRadio == null) {
      return;
    }

    checkedRadio.classList.remove('ino-checked-hover');
  }

  private async updateRadios() {
    const value = this.value;
    /**
     * Make sure we get all radios first
     * so values are up to date prior
     * to caching the radio group value
     */
    const radios = await this.getRadios();

    let hasChecked = false;
    const markRadiosAsInvalid =
      this.error || (this.required && !this.isValueSet() && this.touched);

    // Walk the DOM in reverse order, since the last selected one wins!
    for (const radio of radios) {
      if (radio.checked) {
        radio.classList.remove('ino-checked-hover');
      }

      if (!hasChecked && radio.value === value) {
        // correct value for this radio
        // but this radio isn't checked yet
        // and we haven't found a checked yet
        hasChecked = true;
        radio.checked = true;
      } else {
        // this radio doesn't have the correct value
        // or the radio group has been already checked
        radio.checked = false;
      }

      if (markRadiosAsInvalid) {
        radio.classList.add('ino-radio--invalid');
      } else {
        radio.classList.remove('ino-radio--invalid');
      }
    }

    // Reset value if
    if (!hasChecked) {
      console.warn(`No ino-radio button with value=${value} was found.`);
    }
  }

  private isValueSet(): boolean {
    return this.value != null && (this.value as string).length > 0;
  }

  private getRadios() {
    return Promise.all(Array.from(this.el.querySelectorAll('ino-radio')));
  }

  render() {
    const hostClasses: CssClasses = {
      'ino-radio-group-wrapper': true,
      'ino-radio-group-wrapper--vertical': this.alignment === 'vertical',
      'ino-radio-group-wrapper--horizontal': this.alignment === 'horizontal',
      'ino-radio-group-wrapper--invalid': this.error,
      'ino-radio-group-wrapper--touched': this.touched,
    };

    const hiddenInput = (): JSX.Element => (
      <input
        required={this.required}
        class="hidden"
        ref={(el) => (this.hiddenInput = el)}
      />
    );

    return (
      <Host>
        <div
          class={hostClasses}
          tabIndex={0}
          ref={(el) => (this.radioGroupNativeElement = el)}
          onFocusout={(e: FocusEvent) => {
            if (!this.el.contains(e.relatedTarget as HTMLElement)) {
              this.touched = true;
            }
          }}
        >
          {hiddenInput()}
          <slot></slot>
        </div>
        {helperTextTemplate(this.uniqueHelperId, this.helperText)}
      </Host>
    );
  }
}
