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
 */
@Component({
  tag: 'ino-card',
  styleUrl: 'ino-card.scss',
  shadow: false,
})
export class Card implements ComponentInterface {
  @Element() el: HTMLElement;

  /**
   * Selects the card and displays a check mark icon on top of the card
   */
  @Prop() inoSelected: boolean = false;

  /**
   * Disables the hover effect if true
   */
  @Prop() inoDisableElevation: boolean = false;

  render() {
    const classList = classnames({
      'mdc-card': true,
      'mdc-card--outlined': true,
      'ino-card--selected': this.inoSelected,
    });

    const hasHeader = hasSlotContent(this.el, 'header');
    const hasContent = hasSlotContent(this.el, 'content');
    const hasFooter = hasSlotContent(this.el, 'footer');

    return (
      <Host>
        <div class={classList}>
          <div>
            {this.inoSelected && (
              <div class="ino-card__checkmark">
                <ino-icon ino-icon="checkmark"></ino-icon>
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
