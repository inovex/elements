import { Component, Element, Event, EventEmitter, Listen, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-list-item',
  styleUrl: 'ino-list-item.scss',
  shadow: false
})
export class ListItem {

  @Element() el!: HTMLElement;
  /**
   * The primary text of this list item (required).
   */
  @Prop() inoText!: string;

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
   * Emits when the list item is clicked.
   * Contains the element itself in `event.detail`
   */
  @Event() itemClick!: EventEmitter;

  @Listen('click')
  clickHandler(e) {
    this.itemClick.emit(this.el);
    e.stopPropagation();
  }

  componentDidUnload() {
    this.el.remove();
  }

  render() {
    const listItemClasses = classNames({
      'mdc-list-item': true,
      'mdc-list-item--selected': this.inoSelected,
      'mdc-list-item--activated': this.inoActivated
    });

    return (
      <li class={listItemClasses}>
        <span class="mdc-list-item__graphic" role="presentation">
          <slot name="ino-leading"></slot>
        </span>
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
        <span class="mdc-list-item__meta">
          <slot name="ino-trailing"></slot>
        </span>
      </li>
    );
  }
}
