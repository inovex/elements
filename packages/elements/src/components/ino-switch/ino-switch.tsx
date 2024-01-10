import { MDCSwitch } from '@material/switch';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  Watch,
} from '@stencil/core';
import { MDCTextFieldHelperText } from '@material/textfield';

import { generateUniqueId, hasSlotContent } from '../../util/component-utils';
import { renderHiddenInput } from '../../util/helpers';
import { CssClasses } from '../internal-types';
import { FormInputWithHelperText } from '../base/form-input/form-input-with-helper-text';
import {
  helperTextTemplate,
  initHelperText,
  updateValidityOnErrorChanged,
} from '../base/form-input/helper-text';

/**
 * Input switches toggle the state of a single item. Compared to the input checkbox, their changes usually apply without any additional submission.
 *
 * @slot default - Label of the switch
 * @slot icon-on - Icon used for the checked state. The colors of the `color-scheme` will be used.
 * @slot icon-off - Icon used for the unchecked state. The colors of the `color-scheme` will be used.
 */
@Component({
  tag: 'ino-switch',
  styleUrl: 'ino-switch.scss',
  shadow: false,
})
export class Switch implements FormInputWithHelperText, ComponentInterface {
  @Element() el!: HTMLInoSwitchElement;

  private static HELPER_COUNTER = 0;

  private static generateHelperTextId() {
    return `switch-helper-text__${Switch.HELPER_COUNTER++}`;
  }

  private mdcSwitchEl: HTMLButtonElement;
  private mdcSwitch: MDCSwitch;
  private mdcHelperText: MDCTextFieldHelperText;
  private uniqueHelperId = Switch.generateHelperTextId();

  private switchId = `ino-switch-id_${generateUniqueId()}`;

  get helperTextInstance() {
    return this.mdcHelperText;
  }

  get nativeElement() {
    return this.mdcSwitchEl;
  }

  /**
   * Marks this element as checked. (**unmanaged**)
   */
  @Prop() checked?: boolean = false;

  @Watch('checked')
  checkedChanged(newChecked: boolean) {
    if (this.mdcSwitch != null) {
      this.mdcSwitch.selected = newChecked;
    }
  }

  /**
   * The label of this switch.
   */
  @Prop() label?: string;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * Displays the switch as invalid if set to true.
   * This functionality might be useful if the input validation is (additionally) handled by the backend.
   */
  @Prop() error?: boolean;

  @Watch('error')
  onErrorChanged(): void {
    updateValidityOnErrorChanged(this);
  }

  /**
   * The name of this element.
   */
  @Prop() name?: string;

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
  onHelperValidationChanged(): void {
    this.mdcHelperText?.foundationForTextField.setValidation(
      this.helperTextValidation,
    );
  }

  /**
   * Sets focus on the native `input`.
   * Use this method instead of the global `input.focus()`.
   */
  @Method()
  async setFocus() {
    this.nativeElement.focus();
  }

  /**
   * Sets blur on the native `input`.
   * Use this method instead of the global `input.blur()`.
   */
  @Method()
  async setBlur() {
    this.nativeElement.blur();
  }

  componentDidLoad() {
    this.mdcSwitch = new MDCSwitch(this.mdcSwitchEl);

    const hasLeadingSlot = hasSlotContent(this.el, 'leading');
    const hasTrailingSlot = hasSlotContent(this.el, 'trailing');

    if (hasLeadingSlot != hasTrailingSlot) {
      console.error(
        '[ino-switch] Two icons (leading & trailing) are required in order to use the icon switch.',
      );
    }

    this.initHelperText();
    this.handleInputProps();
  }

  private handleInputProps(): void {
    this.onErrorChanged();
  }

  private initHelperText(): void {
    this.mdcHelperText = initHelperText(this.el);
    this.onHelperTextPeristentChanged();
    this.onHelperValidationChanged();
  }

  disconnectedCallback() {
    this.mdcSwitch?.destroy();
  }

  /**
   * Emits when the user clicks on the switch to change the `checked` state. Contains the status in `event.detail`.
   */
  @Event() checkedChange!: EventEmitter;

  private handleChange = (e: MouseEvent) => {
    e.stopPropagation();

    if (this.disabled) return;

    this.checkedChange.emit(!this.checked);
  };

  render() {
    const { el, name, disabled } = this;

    const hiddenInput = renderHiddenInput(el, name, '', disabled);
    hiddenInput.checked = this.checked;

    const hasLeadingSlot = hasSlotContent(this.el, 'leading');
    const hasTrailingSlot = hasSlotContent(this.el, 'trailing');

    const hostClasses: CssClasses = {
      'ino-switch': true,
      'ino-switch__icon-toggle': hasLeadingSlot || hasTrailingSlot,
      'ino-switch__default': !hasLeadingSlot && !hasTrailingSlot,
      'ino-switch-disabled': this.disabled,
      'ino-switch-icon-disabled': this.disabled,
      'ino-switch--invalid': this.error,
    };

    const switchClasses: CssClasses = {
      'mdc-switch': true,
      'mdc-switch--selected': this.checked,
      'mdc-switch--unselected': !this.checked,
      'ino-switch__icon-toggle': hasLeadingSlot && hasTrailingSlot,
    };

    const iconClasses: CssClasses = {
      'mdc-switch__icons': true,
      'switch-icon': true,
    };

    const leadingIconClasses: CssClasses = {
      ...iconClasses,
      'switch-icon--selected': !this.checked,
      'switch-icon--unselected': this.checked,
    };

    const trailingIconClasses: CssClasses = {
      ...iconClasses,
      'switch-icon--selected': this.checked,
      'switch-icon--unselected': !this.checked,
    };

    return (
      <Host>
        <div class={hostClasses} onClick={this.handleChange}>
          <button
            id={this.switchId}
            ref={(el) => (this.mdcSwitchEl = el)}
            class={switchClasses}
            disabled={this.disabled}
            type="button"
            role="switch"
            aria-checked={this.checked}
          >
            {hasLeadingSlot && (
              <span class={leadingIconClasses}>
                <slot name="leading" />
              </span>
            )}
            <div class="mdc-switch__track" />
            <div class="mdc-switch__handle-track">
              <div class="mdc-switch__handle">
                <div class="mdc-switch__ripple" />
              </div>
            </div>
            {hasTrailingSlot && (
              <span class={trailingIconClasses}>
                <slot name="trailing" />
              </span>
            )}
          </button>
          <label htmlFor={this.switchId} onClick={(e) => e.stopPropagation()}>
            <span>{this.label}</span>
            <span
              style={{ display: this.label?.length > 0 ? 'none' : 'inline' }}
            >
              <slot />
            </span>
          </label>
        </div>
        {helperTextTemplate(this.uniqueHelperId, this.helperText)}
      </Host>
    );
  }
}
