import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';

/**
 * @deprecated Use the component `ino-list-item` together with the component `ino-checkbox` or `ino-radio` instead.
 *
 * A list item component that displays a single instance of choice in a list or menu with a control element (radio-button or checkbox). It functions as a wrapper around the material [list item](https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/) capabilities.
 *
 * This component is used as child of `ino-list` and `ino-menu` components.
 *
 * #### Restrictions
 * Please note that only text is supported as a trailing element. However, your icons can be placed at the leading position. To do so, use the `trailing`-Property and declare your icon inside of the element
 *
 * @slot default - Any element
 */
@Component({
  tag: 'ino-control-item',
  styleUrl: 'ino-control-item.scss',
  shadow: false,
})
export class InoControlItem implements ComponentInterface {
  @Element() el!: HTMLInoControlItemElement;

  /**
   * The type of control element
   *
   * Valid options are 'checkbox' or 'radio'
   */
  @Prop() role!: string | null;

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

  @State() controlSlot: 'leading' | 'trailing' = 'leading';

  @State() defaultSlot: 'leading' | 'trailing' | undefined = 'trailing';

  @State() roleIntern: string;

  @Watch('trailing')
  onTrailingChanged(): void {
    this.updateSlots();
  }

  @Watch('role')
  onRoleChanged(): void {
    if (this.role !== null) {
      this.updateRole();
    }
  }

  private updateSlots(): void {
    this.controlSlot = this.trailing ? 'trailing' : 'leading';
    this.defaultSlot =
      this.el.children.length > 0
        ? this.trailing
          ? 'leading'
          : 'trailing'
        : undefined;
  }

  private updateRole(): void {
    this.roleIntern = this.role;
    this.el.removeAttribute('role');
  }

  private changedHandler = (e: CustomEvent<boolean>) => {
    e.stopPropagation();
    this.checkedChange.emit(e.detail);
  };

  componentWillLoad(): void | Promise<void> {
    this.updateSlots();
    this.updateRole();
  }

  componentDidLoad() {
    if (!['checkbox', 'radio'].includes(this.roleIntern))
      console.warn(
        `Given role ${this.roleIntern} is not valid, fallbacks to role radio`,
      );
  }

  render() {
    const controlItemProps = {
      slot: this.controlSlot,
      checked: this.checked,
      disabled: this.disabled,
      name: this.name,
      value: this.value,
      onCheckedChange: this.changedHandler,
    };

    return (
      <Host>
        <ino-list-item
          text={this.text}
          secondaryText={this.secondaryText}
          activated={this.activated}
          selected={this.selected}
          disabled={this.disabled}
        >
          {this.roleIntern === 'checkbox' ? (
            <ino-checkbox
              {...controlItemProps}
              indeterminate={this.indeterminate}
            />
          ) : (
            <ino-radio {...controlItemProps} />
          )}
          <span slot={this.defaultSlot}>
            <slot></slot>
          </span>
        </ino-list-item>
      </Host>
    );
  }
}
