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
  @Element() el!: HTMLElement;
  /**
   * The primary text of this list item.
   */
  @Prop() text?: string;

  /**
   * Sets the secondary text of this list item.
   *
   * Requires `ino-two-lines` on the parent `ino-list` element.
   */
  @Prop() secondaryText?: string;

  /**
   * Styles the row in a selected style.
   *
   * In contrast to `inoActivated`, use this option to select one
   * or multiple items that are likely to change soon.
   */
  @Prop() selected?: boolean;

  /**
   * Styles the row in an activated style.
   *
   * In contrast to `inoSelected`, use this for only one item
   * and to mark it as permantently activated.
   */
  @Prop() activated?: boolean;

  /**
   * Styles the row in a disabled style.
   */
  @Prop() disabled?: boolean;

  /**
   * Emits when the list item is clicked.
   * Contains the element itself in `event.detail`
   */
  @Event() clickEl!: EventEmitter;

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
      'mdc-list-item': true,
      'mdc-list-item--selected': this.selected,
      'mdc-list-item--activated': this.activated,
      'mdc-list-item--disabled': this.disabled,
    });

    const primaryContent = this.text || <slot name="primary" />;
    const secondaryContent =
      this.secondaryText ||
      (secondarySlotHasContent ? <slot name="secondary" /> : null);

    return (
      <Host>
        <li class={listItemClasses}>
          <span class="mdc-list-item__ripple"></span>
          {leadingSlotHasContent && (
            <span class="mdc-list-item__graphic" role="presentation">
              <slot name="leading" />
            </span>
          )}
          <span class="mdc-list-item__text">
            {secondaryContent
              ? [
                  <span class="mdc-list-item__primary-text">
                    {primaryContent}
                  </span>,
                  <span class="mdc-list-item__secondary-text">
                    {secondaryContent}
                  </span>,
                ]
              : primaryContent}
          </span>
          {trailingSlotHasContent && (
            <span class="mdc-list-item__meta">
              <slot name="trailing" />
            </span>
          )}
        </li>
      </Host>
    );
  }
}
