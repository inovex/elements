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
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';
import { MDCRipple } from '@material/ripple';

/**
 * @slot leading - For the element to be prepended
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
   * Specifies the tabindex of the list item.
   */
  @Prop() tabIndex: number = -1;

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

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (!this.disabled && (ev.code === 'Enter' || ev.code === 'Space')) {
      this.clickEl.emit(this.el);
    }
  }

  @Listen('click')
  clickHandler() {
    if (!this.disabled) {
      this.clickEl.emit(this.el);
    }
  }

  render() {
    const leadingSlotHasContent = hasSlotContent(this.el, 'leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'trailing');
    const secondarySlotHasContent = hasSlotContent(this.el, 'secondary');

    const listItemClasses = classNames({
      'mdc-deprecated-list-item': true,
      'mdc-deprecated-list-item--selected': this.selected,
      'mdc-deprecated-list-item--activated': this.activated,
      'mdc-deprecated-list-item--disabled': this.disabled,
    });

    const primaryContent = this.text || <slot name="primary" />;
    const secondaryContent =
      this.secondaryText ||
      (secondarySlotHasContent ? <slot name="secondary" /> : null);

    return (
      <Host>
        <li ref={(el) => (this.listItemEl = el)} class={listItemClasses} tabindex={this.tabIndex}>
          <span class="mdc-deprecated-list-item__ripple"></span>
          {leadingSlotHasContent && (
            <span class="mdc-deprecated-list-item__graphic" role="presentation">
              <slot name="leading" />
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
          {trailingSlotHasContent && (
            <span class="mdc-deprecated-list-item__meta">
              <slot name="trailing" />
            </span>
          )}
        </li>
      </Host>
    );
  }
}
