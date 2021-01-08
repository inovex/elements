import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-table-row',
  styleUrl: 'ino-table-row.scss',
  shadow: false,
})
export class InoTableRow implements ComponentInterface {
  @Element() el: HTMLElement;

  /**
   * Indicates that the row is a header row
   */
  @Prop() inoHeaderRow: boolean = false;

  /**
   * Indicates whether the row is selected or not
   */
  @Prop() inoSelected: boolean = false;

  componentDidLoad(): void {
    this.el.querySelectorAll('ino-table-cell').forEach((cell) => {
      if (this.inoHeaderRow) {
        cell.classList.add('mdc-data-table__header-cell');
        cell.classList.add('ino-table__header-cell');
      } else {
        cell.classList.add('mdc-data-table__cell');
      }
    });
  }

  render() {
    const rowClasses = classNames({
      'mdc-data-table__header-row': this.inoHeaderRow,
      'mdc-data-table__row': !this.inoHeaderRow,
      'mdc-data-table__row--selected': this.inoSelected && !this.inoHeaderRow,
    });

    return (
      <Host class={rowClasses}>
        <slot />
      </Host>
    );
  }
}
