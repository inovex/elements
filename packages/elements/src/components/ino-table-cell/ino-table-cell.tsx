import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from '@stencil/core';
import classNames from 'classnames';

/**
 * @slot default - The cell value
 */
@Component({
  tag: 'ino-table-cell',
  styleUrl: 'ino-table-cell.scss',
  shadow: false,
})
export class InoTableCell implements ComponentInterface {
  @Element() el: HTMLElement;

  /**
   * Indicates that the cell contains numeric values
   */
  @Prop() numeric: boolean = false;

  render() {
    const cellClasses = classNames({
      'mdc-data-table__cell--numeric': this.numeric,
    });

    return (
      <Host class={cellClasses}>
        <slot />
      </Host>
    );
  }
}
