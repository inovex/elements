import { MDCSelect } from '@material/select';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  forceUpdate,
  h,
  Host,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

/**
 * @slot icon-leading - For the icon to be prepended
 * @slot default - One or more `ino-option(-group)`
 */
@Component({
  tag: 'ino-select',
  styleUrl: 'ino-select.scss',
  shadow: false,
})
export class Select implements ComponentInterface {
  // An internal instance of the material design form field.
  private mdcSelectInstance?: MDCSelect;
  private mdcSelectContainerEl?: HTMLDivElement;
  private mdcOptionsListEl?: HTMLUListElement;
  private nativeInputElement?: HTMLInputElement;
  private optionsObserver: MutationObserver;

  @Element() el!: HTMLInoSelectElement;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * If true, an *optional* message is displayed if not required,
   * otherwise a * marker is displayed if required.
   */
  @Prop() showLabelHint?: boolean;

  /**
   * The label of this element.
   */
  @Prop() label?: string;

  /**
   * Styles this select box as outlined element.
   */
  @Prop() outline?: boolean;

  /**
   * The value of this element. (**unmanaged**)
   */
  @Prop() value?: string = '';

  /**
   * A helper text to display below the select element.
   */
  @Prop() helper?: string;

  /**
   * Displays the helper text permanently.
   */
  @Prop() helperPersistent?: boolean;

  /**
   * Styles the helper text as a validation message.
   */
  @Prop() helperValidation?: boolean;

  @Watch('value')
  handleValueChange(value: string) {
    this.setSelectValue(value);
  }

  /**
   * Displays the select as invalid if set to true.
   * If the property is not set or set to false,
   * the validation is handled by the default validation.
   */
  @Prop() error?: boolean;

  @Watch('error')
  errorHandler(value?: boolean) {
    // The error property is necessary, because the default validation on form submit does not seem to work in angular projects.
    if (this.disabled || !this.mdcSelectInstance) {
      return;
    }

    if (value) {
      this.mdcSelectInstance.valid = false;
      this.mdcSelectInstance.useDefaultValidation = false;
    } else {
      this.mdcSelectInstance.valid = true;
      this.mdcSelectInstance.useDefaultValidation = true;
      this.nativeInputElement?.checkValidity();
    }
  }

  /**
   * Emits when a selection changes. Contains new value in `event.detail`.
   */
  @Event() valueChange!: EventEmitter<string>;

  connectedCallback() {
    // in case of usage e.g. in a popover this is necessary
    this.create();
    this.optionsObserver = new MutationObserver(() => {
      forceUpdate(this.el);
    });
  }

  componentDidLoad() {
    this.create();
    this.optionsObserver.observe(this.mdcOptionsListEl, { childList: true });
  }

  componentDidUpdate() {
    // This adjusts the dimensions, whenever a property changes, e.g. the label gets translated to another language
    this.mdcSelectInstance?.layoutOptions();
    this.mdcSelectInstance?.layout();
  }

  disconnectedCallback() {
    this.mdcSelectInstance?.destroy();
    this.optionsObserver?.disconnect();
  }

  private create = () => {
    if (!this.mdcSelectContainerEl) {
      return;
    }

    this.mdcSelectInstance = new MDCSelect(this.mdcSelectContainerEl);

    if (this.value) {
      this.setSelectValue(this.value);
    } else if (this.mdcSelectInstance?.value) {
      this.value = this.mdcSelectInstance.value;
    }

    this.errorHandler(this.error);
    this.mdcSelectInstance.layout();
  };

  private setSelectValue(value: string) {
    if (this.nativeInputElement) {
      this.nativeInputElement.value = value;
    }
    if (this.mdcSelectInstance) {
      this.mdcSelectInstance.value = value;
    }
  }

  @Listen('MDCSelect:change')
  handleInput(e) {
    e.preventDefault();
    if (this.mdcSelectInstance && this.mdcSelectInstance.value !== undefined) {
      const value = this.mdcSelectInstance.value;
      this.valueChange.emit(value);
    }
  }

  private renderDropdownIcon = () => (
    <span class="mdc-select__dropdown-icon">
      <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5">
        <polygon
          class="mdc-select__dropdown-icon-inactive"
          stroke="none"
          fill-rule="evenodd"
          points="7 10 12 15 17 10"
        ></polygon>
        <polygon
          class="mdc-select__dropdown-icon-active"
          stroke="none"
          fill-rule="evenodd"
          points="7 15 12 10 17 15"
        ></polygon>
      </svg>
    </span>
  );

  render() {
    const leadingSlotHasContent = hasSlotContent(this.el, 'icon-leading');

    const inoSelectClasses = classNames({
      'ino-select-outlined': this.outline
    })

    const classSelect = classNames({
      'mdc-select': true,
      'mdc-select--disabled': this.disabled,
      'mdc-select--outlined': this.outline,
      'mdc-select--filled': !this.outline,
      'mdc-select--required': this.required,
      'mdc-select--with-leading-icon': leadingSlotHasContent,
    });

    const helperTextClasses = classNames({
      'mdc-select-helper-text': true,
      'mdc-select-helper-text--validation-msg-persistent': this
        .helperPersistent,
      'mdc-select-helper-text--validation-msg': this.helperValidation,
    });

    const hiddenInput = this.required ? (
      <input
        class="ino-hidden-input"
        aria-hidden
        ref={(el) => (this.nativeInputElement = el)}
        required={this.required}
        disabled={this.disabled}
      ></input>
    ) : (
      ''
    );

    return (
      <Host class={inoSelectClasses} name={this.name}>
        <div class={classSelect} ref={(el) => (this.mdcSelectContainerEl = el)}>
          {hiddenInput}
          <div class="mdc-select__anchor" aria-required={this.required}>
            {leadingSlotHasContent && (
              <span class="mdc-select__icon">
                <slot name="icon-leading"></slot>
              </span>
            )}
            <div class="mdc-select__selected-text"></div>
            {this.renderDropdownIcon()}
            <ino-label
              outline={this.outline}
              text={this.label}
              required={this.required}
              disabled={this.disabled}
              show-hint={this.showLabelHint}
            />
          </div>
          <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
            <ul
              class="mdc-deprecated-list"
              ref={(el) => (this.mdcOptionsListEl = el)}
            >
              <slot />
            </ul>
          </div>
        </div>
        {this.helper && <p class={helperTextClasses}>{this.helper}</p>}
      </Host>
    );
  }
}
