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
  @Prop() inoRole!: 'checkbox' | 'radio';

  /**
   * The id of this element.
   */
  @Prop() inoId?: string;

  /**
   * The primary text of this list item (required).
   */
  @Prop() inoText!: string;

  /**
   * Sets the secondary text of this list item.
   *
   * Requires `ino-two-lines` on the parent `ino-list` element.
   */
  @Prop() inoSecondaryText?: string;

  /**
   * Styles the row in a selected style.
   *
   * In contrast to `inoActivated`, use this option to select one
   * or multiple items that are likely to change soon.
   */
  @Prop() inoSelected?: boolean;

  /**
   * Styles the row in an activated style.
   *
   * In contrast to `inoSelected`, use this for only one item
   * and to mark it as permantently activated.
   */
  @Prop() inoActivated?: boolean;

  /**
   * Styles the row in a disabled style.
   */
  @Prop() inoDisabled?: boolean;

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
  @Prop() inoTrailing?: boolean;

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
    if (this.inoDisabled || e.target['tagName'] === 'INO-CHECKBOX') {
      return;
    }

    this.inputEl.shadowRoot
      .querySelector('input')
      .dispatchEvent(new CustomEvent('input'));
  };

  render() {
    const controlItemPosition = this.inoTrailing
      ? 'ino-trailing'
      : 'ino-leading';
    const slotPosition =
      this.el.children.length > 0
        ? this.inoTrailing
          ? 'ino-leading'
          : 'ino-trailing'
        : '';

    const controlItemProps = {
      slot: controlItemPosition,
      checked: this.checked,
      disabled: this.inoDisabled,
      name: this.name,
      value: this.value,
      onCheckedChange: this.changedHandler,
      ref: (inputEl) => (this.inputEl = inputEl),
    };

    return (
      <Host>
        <ino-list-item
          id={this.inoId}
          inoText={this.inoText}
          inoSecondaryText={this.inoSecondaryText}
          inoActivated={this.inoActivated}
          inoSelected={this.inoSelected}
          inoDisabled={this.inoDisabled}
          onClick={this.clickHandler}
        >
          {this.inoRole === 'checkbox' ? (
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
