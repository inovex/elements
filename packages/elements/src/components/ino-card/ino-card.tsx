import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
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
          <div class="ino-card__header">
            <slot name="header"/>
          </div>
          <div class="ino-card__content">
            <slot name="content"/>
          </div>
          <div class="ino-card__footer">
            <slot name="footer"/>
          </div>
        </div>
      </Host>
    );
  }
}
