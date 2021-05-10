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
  @Prop() headerRow: boolean = false;

  /**
   * Indicates whether the row is selected or not
   */
  @Prop() selected: boolean = false;

  componentDidLoad(): void {
    this.el.querySelectorAll('ino-table-cell').forEach((cell) => {
      if (this.headerRow) {
        cell.classList.add('mdc-data-table__header-cell');
        cell.classList.add('ino-table__header-cell');
      } else {
        cell.classList.add('mdc-data-table__cell');
      }
    });
  }

  render() {
    const rowClasses = classNames({
      'mdc-data-table__header-row': this.headerRow,
      'mdc-data-table__row': !this.headerRow,
      'mdc-data-table__row--selected': this.selected && !this.headerRow,
    });

    return (
      <Host class={rowClasses}>
        <slot />
      </Host>
    );
  }
}
