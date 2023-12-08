import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Prop,
} from '@stencil/core';
import classnames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

/**
 * @slot header - For the element to be placed in the card header
 * @slot content - For card content
 * @slot footer - For the element to be placed in the card footer
 *
 * The ino-card is a flexible and extensible component. It features a header, content, and footer slot that can be used to
 * fully customize the appearance of the card.
 */
@Component({
  tag: 'ino-card',
  styleUrl: 'ino-card.scss',
  shadow: false,
})
export class Card implements ComponentInterface {
  @Element() el: HTMLInoCardElement;

  /**
   * Selects the card and displays a check mark icon on top of the card
   */
  @Prop() selected = false;

  /**
   * Disables the hover effect if true
   */
  @Prop() disableElevation = false;

  render() {
    const hostClasses = classnames({
      'ino-elevate': !this.disableElevation,
    });

    const classList = classnames({
      'mdc-card': true,
      'mdc-card--outlined': true,
      'ino-card--selected': this.selected,
    });

    const hasHeader = hasSlotContent(this.el, 'header');
    const hasContent = hasSlotContent(this.el, 'content');
    const hasFooter = hasSlotContent(this.el, 'footer');

    return (
      <Host class={hostClasses}>
        <div class={classList}>
          <div class="ino-card__checkmark-container">
            {this.selected && (
              <div class="ino-card__checkmark">
                <ino-icon icon="checkmark" />
              </div>
            )}
          </div>
          {hasHeader && (
            <div class="ino-card__header">
              <slot name="header" />
            </div>
          )}
          {hasContent && (
            <div class="ino-card__content">
              <slot name="content" />
            </div>
          )}
          {hasFooter && (
            <div class="ino-card__footer">
              <slot name="footer" />
            </div>
          )}
        </div>
      </Host>
    );
  }
}
