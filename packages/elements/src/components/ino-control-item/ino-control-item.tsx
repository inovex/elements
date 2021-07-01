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

/**
 * @slot default - Any element
 */
@Component({
  tag: 'ino-control-item',
  styleUrl: 'ino-control-item.scss',
  shadow: false,
})
export class InoControlItem implements ComponentInterface {
  private inputEl: HTMLInputElement;

  @Element() el!: HTMLElement;

  /**
   * The type of control element
   */
  @Prop() role!: 'checkbox' | 'radio';

  /**
   * The primary text of this list item (required).
   */
  @Prop() text!: string;

  /**
   * Sets the secondary text of this list item.
   *
   * Requires `two-lines` on the parent `ino-list` element.
   */
  @Prop() secondaryText?: string;

  /**
   * Styles the row in a selected style.
   *
   * In contrast to `activated`, use this option to select one
   * or multiple items that are likely to change soon.
   */
  @Prop() selected?: boolean;

  /**
   * Styles the row in an activated style.
   *
   * In contrast to `selected`, use this for only one item
   * and to mark it as permanently activated.
   */
  @Prop() activated?: boolean;

  /**
   * Marks this element as checked. (**unmanaged**)
   */
  @Prop() checked?: boolean = false;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The value of this element.
   */
  @Prop() value?: string;

  /**
   * Marks this element as indeterminate (**unmanaged**)
   * Checkbox only
   */
  @Prop() indeterminate?: boolean;

  /**
   * Places the checkbox at the end of the item
   */
  @Prop() trailing?: boolean;

  /**
   * Emits when the user clicks on the checkbox or the list item to change the checked state. Contains the status in `event.detail`.
   */
  @Event() checkedChange!: EventEmitter;

  changedHandler = (e: CustomEvent<boolean>) => {
    e.stopPropagation();
    this.checkedChange.emit(e.detail);
  };

  clickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    if (this.disabled || e.target['tagName'] === 'INO-CHECKBOX') {
      return;
    }

    this.inputEl.shadowRoot
      .querySelector('input')
      .dispatchEvent(new CustomEvent('input'));
  };

  render() {
    const controlItemPosition = this.trailing ? 'trailing' : 'leading';
    const slotPosition =
      this.el.children.length > 0
        ? this.trailing
          ? 'leading'
          : 'trailing'
        : '';

    const controlItemProps = {
      slot: controlItemPosition,
      checked: this.checked,
      disabled: this.disabled,
      name: this.name,
      value: this.value,
      onCheckedChange: this.changedHandler,
      ref: (inputEl) => (this.inputEl = inputEl),
    };

    return (
      <Host>
        <ino-list-item
          text={this.text}
          secondaryText={this.secondaryText}
          activated={this.activated}
          selected={this.selected}
          disabled={this.disabled}
          onClick={this.clickHandler}
        >
          {this.role === 'checkbox' ? (
            <ino-checkbox
              {...controlItemProps}
              indeterminate={this.indeterminate}
            />
          ) : (
            <ino-radio {...controlItemProps} />
          )}
          <span slot={slotPosition}>
            <slot></slot>
          </span>
        </ino-list-item>
      </Host>
    );
  }
}
