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
} from '@stencil/core';
import { hasSlotContent } from '../../util/component-utils';
import { MDCRipple } from '@material/ripple';

enum ListItemSlot {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LEADING = 'leading',
  TRAILING = 'trailing',
}

/**
 * A list item component that displays a single instance of choice in a list or menu. It functions as a wrapper around the material [list item](https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/) capabilities.
 *
 * This component is used as child of `ino-list` and `ino-menu` components.
 *
 * @slot leading - For the element to be prepended. It's also the fallback for the default slot.
 * @slot trailing - For the element to be appended
 * @slot primary - For the (text) element
 * @slot secondary - For the secondary text element in a two-lined list
 */
@Component({
  tag: 'ino-list-item',
  styleUrl: 'ino-list-item.scss',
  shadow: false,
})
export class ListItem implements ComponentInterface {
  private listItemEl: HTMLLIElement;
  private mdcRipple: MDCRipple;

  @Element() el!: HTMLInoListItemElement;
  /**
   * The primary text of this list item.
   */
  @Prop() text?: string;

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
   * and to mark it as permantently activated.
   */
  @Prop() activated?: boolean;

  /**
   * Styles the row in a disabled style.
   */
  @Prop() disabled?: boolean;

  /**
   * Allows the specification of native HTML attributes on the underlying HTML element
   */
  @Prop() attrs: JSXBase.HTMLAttributes<HTMLLIElement>;

  /**
   * Emits when the list item is clicked or
   * the enter/space key if pressed while the item is in focus.
   * Contains the element itself in `event.detail`
   */
  @Event() clickEl!: EventEmitter;

  componentDidLoad() {
    this.mdcRipple = new MDCRipple(this.listItemEl);
  }

  disconnectedCallback() {
    this.mdcRipple?.destroy();
  }

  componentWillRender(): void {
    if (this.text && this.hasPrimarySlot()) {
      console.warn(
        '[ino-list-item] primary slot is used together with the property "text".',
      );
    }
    if (this.secondaryText && this.hasSecondarySlot()) {
      console.warn(
        '[ino-list-item] secondary slot is used together with the property "secondary-text".',
      );
    }
  }

  @Listen('keydown', {})
  handleKeyDown(ev: KeyboardEvent) {
    if (!this.disabled && (ev.code === 'Enter' || ev.code === 'Space')) {
      this.clickEl.emit(this.el);
    }
  }

  @Listen('click', {})
  clickHandler(e: MouseEvent) {
    if (this.disabled) return;
    this.clickEl.emit(this.el);
    this.dispatchInputEvent(e);
  }

  private dispatchInputEvent(e: MouseEvent): void {
    const checkbox = this.el.querySelector('ino-checkbox');
    const radio = this.el.querySelector('ino-radio');
    if (checkbox == null && radio == null) {
      return;
    }
    const skip = ['INO-CHECKBOX', 'INO-RADIO'].includes(e.target['tagName']);
    if (skip) return;
    const ctrl = checkbox || radio;
    ctrl.shadowRoot
      .querySelector('input')
      .dispatchEvent(new CustomEvent('input'));
  }

  private hasDefaultSlot(): boolean {
    return this.el.children?.length > 0;
  }

  private hasLeadingSlot(): boolean {
    return hasSlotContent(this.el, ListItemSlot.LEADING);
  }

  private showLeadingSlot(): boolean {
    return this.hasLeadingSlot() || this.hasDefaultSlot();
  }

  private hasTrailingSlot(): boolean {
    return hasSlotContent(this.el, ListItemSlot.TRAILING);
  }

  private hasPrimarySlot(): boolean {
    return hasSlotContent(this.el, ListItemSlot.PRIMARY);
  }

  private hasSecondarySlot(): boolean {
    return hasSlotContent(this.el, ListItemSlot.SECONDARY);
  }

  render() {
    const listItemClasses: Record<string, boolean> = {
      'mdc-deprecated-list-item': true,
      'mdc-deprecated-list-item--selected': this.selected,
      'mdc-deprecated-list-item--activated': this.activated,
      'mdc-deprecated-list-item--disabled': this.disabled,
    };

    const primaryContent = this.text || <slot name="primary" />;
    const secondaryContent =
      this.secondaryText ||
      (this.hasSecondarySlot() ? <slot name="secondary" /> : null);

    const getLeadingSlot = () =>
      this.hasLeadingSlot() ? 'leading' : undefined;

    return (
      <Host>
        <li
          ref={(el) => (this.listItemEl = el)}
          class={listItemClasses}
          aria-disabled={this.disabled}
          {...this.attrs}
        >
          <span class="mdc-deprecated-list-item__ripple"></span>
          {this.showLeadingSlot() && (
            <span class="mdc-deprecated-list-item__graphic" role="presentation">
              <slot name={getLeadingSlot()} />
            </span>
          )}
          <span class="mdc-deprecated-list-item__text">
            {secondaryContent
              ? [
                  <span class="mdc-deprecated-list-item__primary-text">
                    {primaryContent}
                  </span>,
                  <span class="mdc-deprecated-list-item__secondary-text">
                    {secondaryContent}
                  </span>,
                ]
              : primaryContent}
          </span>
          {this.hasTrailingSlot() && (
            <span class="mdc-deprecated-list-item__meta">
              <slot name="trailing" />
            </span>
          )}
        </li>
      </Host>
    );
  }
}
