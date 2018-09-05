import { Component, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-list-item',
  styleUrl: 'ino-list-item.scss',
  shadow: false
})
export class ListItem {
  /**
   * The primary text of this list item (required).
   */
  @Prop() inoText: string;

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
   * or multiple items that are likely change soon.
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
   * The name of the leading icon of this list item.
   */
  @Prop() inoLeadingIcon?: string;


  render() {
    const listItemClasses = classNames({
      'mdc-list-item': true,
      'mdc-list-item--selected': this.inoSelected,
      'mdc-list-item--activated': this.inoActivated
    });

    return (
      <li class={listItemClasses}>
        {this.inoLeadingIcon &&
          <span class="mdc-list-item__graphic" role="presentation">
            <ino-icon class="ino-list-item__icon" ino-icon={this.inoLeadingIcon}></ino-icon>
          </span>
        }
        <span class="mdc-list-item__text">
          {
            this.inoSecondaryText
              ? ([
                <span class="mdc-list-item__primary-text">{this.inoText}</span>,
                this.inoSecondaryText && <span class="mdc-list-item__secondary-text">{this.inoSecondaryText}</span>
              ])
              : this.inoText
          }
        </span>
      </li>
    );
  }
}
