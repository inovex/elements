import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';

/**
 *
 * A list divider component that either divides two lists or list items. It functions as a wrapper around the material [list divider](https://github.com/material-components/material-components-web/blob/master/packages/mdc-divider/) capabilities.
 *
 * This component is used as child of `ino-list` and `ino-menu` components.
 */
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
  @Prop() betweenLists?: boolean;

  /**
   * Increases margin on each side of the divider to match meta content
   * in `ino-list-item`.
   *
   * Only applicable if `betweenList` is `false`.
   */
  @Prop() padded?: boolean;

  /**
   * Increases leading margin to match leading column in `ino-list-item`.
   *
   * Only applicable if `betweenList` is `false`.
   */
  @Prop() inset?: boolean;

  render() {
    const dividerClasses = classNames({
      'mdc-deprecated-list-divider': true,
      'mdc-deprecated-list-divider--inset-leading':
        !this.betweenLists && (this.padded || this.inset),
      'mdc-deprecated-list-divider--inset-trailing':
        !this.betweenLists && this.padded,
    });

    return (
      <Host>
        {this.betweenLists ? (
          <hr class={dividerClasses} />
        ) : (
          <li role="separator" class={dividerClasses} />
        )}
      </Host>
    );
  }
}
