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
   * and to mark it as permanently activated.
   */
  @Prop() activated?: boolean;

  /**
   * Styles the row in a disabled style.
   */
  @Prop() disabled?: boolean;

  /**
   * Styles the list more dense, making it appear more compact.
   */
  @Prop() dense?: boolean;

  /**
   * Marks this element as list with items having two lines.
   */
  @Prop() twoLines?: boolean;

  /**
   * Configures the leading tiles of each row to display images instead of icons.
   * This will make the graphics of the list items larger.
   */
  @Prop() avatar?: boolean = false;

  /**
   * For a11y: If list item is interactive then set role type
   */
  @Prop() role: 'listitem' | 'menuitem' | 'option' = 'listitem';

  /**
   * Emits when the list item is clicked or
   * the enter/space key if pressed while the item is in focus.
   * Contains the element itself in `event.detail`
   */
  @Event() clickEl!: EventEmitter;

  componentDidLoad() {
    this.mdcRipple = new MDCRipple(this.el);
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
    const isInteractive = this.activated || this.selected || this.disabled;

    const listItemClasses = classNames({
      'mdc-list-item': true,
      'mdc-list-item--selected': this.selected,
      'mdc-list-item--activated': this.activated,
      'mdc-list-item--disabled': this.disabled,
      'mdc-list-item--two-lines': this.twoLines,
      'mdc-list-item--with-leading-avatar': this.avatar,
      'mdc-list-item--non-interactive': !isInteractive,
    });

    const primaryContent = this.text || <slot />;
    const secondaryContent =
      this.secondaryText ||
      (secondarySlotHasContent ? <slot name="secondary" /> : null);

    return (
        <Host
          class={listItemClasses}
          data-evolution="true"
          aria-disabled={this.disabled}
          role={this.role}
        >
          {isInteractive && (<span class="mdc-list-item__ripple"></span>)}
          {leadingSlotHasContent && (
            <span class="mdc-list-item__start">
              <slot name="leading" />
            </span>
          )}
          <span class="mdc-list-item__content">
            <span class="mdc-list-item__primary-text">{
              primaryContent
            }</span>
            {secondaryContent && (
              <span class="mdc-list-item__secondary-text">{
                secondaryContent
              }</span>
            )}
          </span>
          {trailingSlotHasContent && (
            <span class="mdc-list-item__end">
              <slot name="trailing" />
            </span>
          )}
        </Host>
    );
  }
}
