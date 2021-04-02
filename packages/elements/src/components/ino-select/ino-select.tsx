import { MDCSelect } from '@material/select';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  Watch,
  State,
} from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from "../../util/component-utils";

/**
 * @slot ino-icon-leading - For the icon to be prepended
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
  private nativeSelectElement?: HTMLSelectElement;
  private mdcSelectMenuWrapper?: HTMLDivElement;

  @Element() el!: HTMLElement;

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
   * otherwise a * marker is displayed if required
   */
  @Prop() showLabelHint?: boolean;

  /**
   * The label of this element
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

  @Watch('value')
  handleValueChange(value: string) {
    this.setSelectValue(value);
  }

  /**
   * Emits when a selection changes. Contains new value in `event.detail`.
   */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * Option Values to display inside hidden <select></select>
   *
   * @type {Array<string>}
   * @memberof Select
   */
  @State() mdcSelectMenuListOptionValues: Array<{
    value: string;
    selected: boolean;
    disabled: boolean;
  }> = [];

  componentDidLoad() {
    this.mdcSelectInstance = new MDCSelect(
      this.el.querySelector('.mdc-select')
    );

    // extract ino-options to create hidden a11y select element <select><option></option>/select>
    const mdcSelectMenuList = this.mdcSelectMenuWrapper.querySelector('ul');
    this.mdcSelectMenuListOptionValues = [
      ...mdcSelectMenuList.getElementsByTagName('ino-option'),
    ].map((listOption: HTMLInoOptionElement) => ({
      value: listOption.value,
      selected: listOption.selected,
      disabled: listOption.disabled,
    }));

    if (this.value) {
      this.setSelectValue(this.value);
    } else if (this.mdcSelectInstance?.value) {
      this.value = this.mdcSelectInstance.value;
    }
  }

  disconnectedCallback() {
    this.mdcSelectInstance?.destroy();
  }

  private setSelectValue(value: string) {
    if (this.nativeSelectElement) {
      this.nativeSelectElement.value = value;
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

  renderDropdownIcon = () => (
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
    const leadingSlotHasContent = hasSlotContent(this.el, 'ino-icon-leading');

    const classSelect = classNames({
      'mdc-select': true,
      'mdc-select--disabled': this.disabled,
      'mdc-select--outlined': this.outline,
      'mdc-select--filled': !this.outline,
      'mdc-select--required': this.required,
      'mdc-select--with-leading-icon': leadingSlotHasContent
    });

    return (
      <Host name={this.name}>
        <div class={classSelect}>
          <div class="mdc-select__anchor">
            {leadingSlotHasContent && (
              <span class="mdc-select__icon">
                <slot name="ino-icon-leading"></slot>
            </span>
            )}

            <div class="mdc-select__selected-text">{this.value}</div>
            <select
              class="ino-visually-hidden"
              ref={(el) => (this.nativeSelectElement = el)}
              required={this.required}
              disabled={this.disabled}
              name={this.label}
            >
              {this.required && <option value="">None</option>}
              {this.mdcSelectMenuListOptionValues.map((value) => {
                return (
                  <option
                    value={value.value}
                    disabled={value.disabled}
                    selected={value.selected}
                  >
                    {value}
                  </option>
                );
              })}
            </select>
            {this.renderDropdownIcon()}
            <ino-label
              outline={this.outline}
              text={this.label}
              required={this.required}
              disabled={this.disabled}
              show-hint={this.showLabelHint}
            />
          </div>
          <div
            class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
            ref={(el) => {
              this.mdcSelectMenuWrapper = el;
            }}
          >
            <ul class="mdc-list">
              <slot />
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
