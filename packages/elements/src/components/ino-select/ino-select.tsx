import { MDCSelect, MDCSelectEventDetail } from '@material/select';
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
import { generateUniqueId, hasSlotContent } from '../../util/component-utils';

/**
 * A component providing single-option select menus. It functions as a wrapper around the material design's [select](https://github.com/material-components/material-components-web/tree/master/packages/mdc-select) component.
 * #### Additional Hints
 * Use the custom `ino-option` component to add options to the select component. The `label` attribute sets an optional floating label for this element.
 *
 * @slot icon-leading - For the icon to be prepended
 * @slot default - One or more `ino-option(-group)`*
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

  /**
   * An internal auto generated id for the helper field.
   */
  private selectElId = generateUniqueId();

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
   * Makes the input text and container slightly smaller.
   */
  @Prop() dense = false;

  /**
   * The value of this element. (**unmanaged**)
   */
  @Prop() value?: string = '';

  /**
   * A helper text to display below the select element.
   * By default, non-validation helper text is always visible.
   */
  @Prop() helper?: string;

  /**
   * Indicates the helper text is a validation message.
   * By default validation message is hidden unless the select is invalid.
   */
  @Prop() helperValidation?: boolean;

  /**
   * When the helper text is serving as a validation message,
   * make it permanently visible regardless of the select's validity.
   */
  @Prop() helperPersistent?: boolean;

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
  handleInput(e: CustomEvent<MDCSelectEventDetail>) {
    e.preventDefault();
    const detailValue = e.detail?.value;

    if (detailValue !== this.value) {
      this.valueChange.emit(detailValue);
    }
  }

  private renderDropdownIcon = () => (
    <span class="mdc-select__dropdown-icon">
      <span class="mdc-select__dropdown-icon-graphic">
        <svg
          class="mdc-select__dropdown-icon-inactive"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 -960 960 960"
        >
          <path d="M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z" />
        </svg>
        <svg
          class="mdc-select__dropdown-icon-active"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 -960 960 960"
        >
          <path d="M480-529 324-373q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-529Z" />
        </svg>
      </span>
    </span>
  );

  render() {
    const leadingSlotHasContent = hasSlotContent(this.el, 'icon-leading');
    const hasHelperText = Boolean(this.helper);

    const inoSelectClasses = classNames({
      'ino-select-outlined': this.outline,
      'ino-select-dense': this.dense,
      'ino-select--has-helpertext': hasHelperText,
      'ino-select--has-helpertext-persistent': this.helperPersistent,
    });

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
      'mdc-select-helper-text--validation-msg-persistent':
        this.helperPersistent,
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
          <div
            class="mdc-select__anchor"
            role="combobox"
            tabindex="0"
            aria-labelledby={`label-${this.selectElId}`}
            aria-required={this.required}
          >
            {leadingSlotHasContent && (
              <span class="mdc-select__icon">
                <slot name="icon-leading"></slot>
              </span>
            )}
            <div class="mdc-select__selected-text"></div>
            {this.renderDropdownIcon()}
            <ino-label
              id={`label-${this.selectElId}`}
              outline={this.outline}
              text={this.label}
              required={this.required}
              disabled={this.disabled}
              show-hint={this.showLabelHint}
            />
          </div>
          <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
            <ul
              role="listbox"
              tabindex="-1"
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
