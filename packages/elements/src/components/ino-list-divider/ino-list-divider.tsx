import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-list-divider',
  styleUrl: 'ino-list-divider.scss',
  shadow: false,
})
export class ListDivider implements ComponentInterface {
  /**
   * Marks the divider as a separator between two `ino-list`
   * instead of `ino-list-item` elements.
   */
  @Prop() inoBetweenLists?: boolean;

  /**
   * Increases margin on each side of the divider to match meta content
   * in `ino-list-item`.
   *
   * Only applicable if `inoBetweenList` is `false`.
   */
  @Prop() inoPadded?: boolean;

  /**
   * Increases leading margin to match leading column in `ino-list-item`.
   *
   * Only applicable if `inoBetweenList` is `false`.
   */
  @Prop() inoInset?: boolean;

  render() {
    const dividerClasses = classNames({
      'mdc-list-divider': true,
      'mdc-list-divider--padded': !this.inoBetweenLists && this.inoPadded,
      'mdc-list-divider--inset': !this.inoBetweenLists && this.inoInset,
    });

    return (
      <Host>
        {this.inoBetweenLists ? (
          <hr class={dividerClasses} />
        ) : (
          <li role="separator" class={dividerClasses} />
        )}
      </Host>
    );
  }
}
