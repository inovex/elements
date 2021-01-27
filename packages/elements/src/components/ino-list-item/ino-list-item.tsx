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
 * @slot ino-leading - For the element to be prepended
 * @slot ino-trailing - For the element to be appended
 * @slot ino-primary - For the (text) element
 * @slot ino-secondary - For the secondary text element in a two-lined list
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
  @Prop() inoText?: string;

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
   * Emits when the list item is clicked.
   * Contains the element itself in `event.detail`
   */
  @Event() clickEl!: EventEmitter;

  @Listen('click')
  clickHandler() {
    if (!this.inoDisabled) {
      this.clickEl.emit(this.el);
    }
  }

  disconnectedCallback() {
    this.el.remove();
  }

  render() {
    const listItemClasses = classNames({
      'mdc-list-item': true,
      'mdc-list-item--selected': this.inoSelected,
      'mdc-list-item--activated': this.inoActivated,
      'mdc-list-item--disabled': this.inoDisabled,
    });

    const leadingSlotHasContent = hasSlotContent(this.el, 'ino-leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'ino-trailing');
    const secondarySlotHasContent = hasSlotContent(this.el, 'ino-secondary');

    const primaryContent = this.inoText || <slot name="ino-primary" />;
    const secondaryContent =
      this.inoSecondaryText ||
      (secondarySlotHasContent ? <slot name="ino-secondary" /> : null);

    return (
      <Host>
        <li class={listItemClasses}>
          <span class="mdc-list-item__ripple"></span>
          {leadingSlotHasContent && (
            <span class="mdc-list-item__graphic" role="presentation">
              <slot name="ino-leading" />
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
              <slot name="ino-trailing" />
            </span>
          )}
        </li>
      </Host>
    );
  }
}
