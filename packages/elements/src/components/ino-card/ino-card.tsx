import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'ino-card',
  styleUrl: 'ino-card.scss',
  shadow: false
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
      'ino-card--selected': this.inoSelected
    });

    const hasHeader = Boolean(this.el.querySelector('[slot="header"]'));
    const hasContent = Boolean(this.el.querySelector('[slot="content"]'));
    const hasFooter = Boolean(this.el.querySelector('[slot="footer"]'));

    return (
      <Host>
        <div class={classList}>
          <div>
            {this.inoSelected && (
              <div class='ino-card__checkmark'>
                <ino-icon ino-icon="checkmark"></ino-icon>
              </div>
            )}
          </div>
          {hasHeader && (
            <div class="ino-card__header">
              <slot name="header"/>
            </div>
          )}
          {hasContent && (
            <div class="ino-card__content">
              <slot name="content"/>
            </div>
          )}
          {hasFooter && (
            <div class="ino-card__footer">
              <slot name="footer"/>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
