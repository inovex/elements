import { Component, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-list',
  styleUrl: 'ino-list.scss',
  shadow: false
})
export class List {
  /**
   * Styles the list more dense, making it appear more compact.
   */
  @Prop() inoDense?: boolean;

  /**
   * Marks this element as list with items having two lines.
   */
  @Prop() inoTwoLines?: boolean;

  /**
   * Configures the leading tiles of each row to display images instead of icons.
   * This will make the graphics of the list items larger.
   */
  @Prop() inoAvatar = false;

  render() {
    const listClasses = classNames({
      'mdc-list': true,
      'mdc-list--dense': this.inoDense,
      'mdc-list--two-line': this.inoTwoLines,
      'mdc-list--avatar-list': this.inoAvatar
    });

    return (
      <ul class={listClasses} aria-orientation="vertical">
        <slot />
      </ul>
    );
  }
}
