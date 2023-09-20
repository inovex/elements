import {
  Component,
  ComponentInterface,
  Element,
  Event,
  Host,
  h,
  Listen,
  EventEmitter,
  Prop,
  Watch
} from '@stencil/core';
import {
  SortDirectionChangeDetails,
  SortDirection
} from '../../interface';
import classNames from 'classnames';

/**
 * @slot default - Table content (data, not header)
 * @slot header-row - `<tr>` element containing the table header cells (td, th, ino-table-header-cell)
 * @slot loading-indicator - `<ino-progess-bar>` element used for an additional loading state.
 */
@Component({
  tag: 'ino-table',
  styleUrl: 'ino-table.scss',
  shadow: false
})
export class InoTable implements ComponentInterface {
  @Element() el: HTMLInoTableElement;

  /**
   * True, if the table is loading data.
   *
   * Use this in combination with a `ino-progress-bar` having `slot="loading-indicator"` to provide an
   * additional horizontal loading bar.
   */
  @Prop() loading?: boolean;

  /**
   * If true, disables row hover styling.
   *
   * Useful for simples tables with few rows or columns.
   */
  @Prop() noHover?: boolean;

  /**
   * Identifier of the column currently sorted by.
   *
   * Needs to match the column ids provided on `ino-table-header-cell` elements.
   */
  @Prop() sortColumnId?: string;

  @Watch('sortColumnId')
  sortColumnIdChanged(newSortColumnId: string, oldColumnId: string) {
    this.changeSortColumnId(oldColumnId, newSortColumnId);
  }

  /**
   * Direction of the column currently sorted by.
   *
   * @See Set `sort-start` attribute on the respective column to change the sort order.
   */
  @Prop() sortDirection?: SortDirection;

  @Watch('sortDirection')
  sortDirectionChanged(newSortDirection: string) {
    this.changeSortDirection(newSortDirection);
  }

  /**
   * True, if table header stays visible on vertical scroll
   *
   */
  @Prop() stickyHeader?: boolean = false;

  /**
   * Emits that the sort direction or column id has changed.
   */
  @Event() sortChange: EventEmitter<SortDirectionChangeDetails>;

  @Listen('sortDirectionChange')
  sortDirectionChangedHandler(e: CustomEvent) {
    this.sortChange.emit(e.detail);
  }

  componentDidLoad() {
    if (!this.sortColumnId != !this.sortDirection) {
      console.warn(
        'ino-table: sorting on table requires sortColumnId and sortDirection.'
      );
      return;
    }
    if (this.sortColumnId) {
      this.changeSortColumnId(undefined, this.sortColumnId);
    }
  }

  private changeSortColumnId(oldColumnId: string, newColumnId: string): void {
    const headerCells = this.getSortableHeaderColumnCells();
    if (headerCells.length < 1) {
      return;
    }
    const columnIds = headerCells.map(e => e.columnId);
    if (columnIds.indexOf(newColumnId) < 0) {
      console.warn(`${newColumnId} is no sortable column-id`);
    }

    // Reset old value
    if (oldColumnId && columnIds.indexOf(oldColumnId) >= 0) {
      const oldColumnCell = headerCells.find(e => e.columnId == oldColumnId);
      oldColumnCell?.removeAttribute('sort-direction');
    }

    // ColumnId changed => Set the sort direction on new columnId.
    this.changeSortDirection(this.sortDirection);
  }

  private changeSortDirection(newSortDirection?: string): void {
    const headerCells = this.getSortableHeaderColumnCells();
    if (headerCells.length < 1) {
      return;
    }
    const newColumnCell = headerCells.find(
      e => e.columnId == this.sortColumnId
    );
    if (newSortDirection) {
      newColumnCell?.setAttribute('sort-direction', newSortDirection);
    } else {
      newColumnCell?.removeAttribute('sort-direction');
    }
  }

  private getSortableHeaderColumnCells(): HTMLInoTableHeaderCellElement[] {
    const selector =
      'ino-table-header-cell:not([not-sortable]):not(.ino-table-cell__selector)';
    return Array.from(this.el.querySelectorAll(selector));
  }

  render() {
    const hasHeaderSlot =
      this.el.querySelectorAll('[slot=header-row]').length > 0;
    const tableClasses = classNames({
      'mdc-data-table': true,
      'mdc-data-table--in-progress': this.loading,
      'ino-table--no-header': !hasHeaderSlot,
      'ino-table--no-hover': this.noHover,
      'mdc-data-table--sticky-header': this.stickyHeader
    });

    return (
      <Host>
        <div class={tableClasses}>
          <div class="mdc-data-table__table-container">
            <table class="ino-table__table mdc-data-table__table">
              {hasHeaderSlot && (
                <thead class="ino-table__header">
                  <slot name="header-row" />
                </thead>
              )}
              <tbody class="mdc-data-table__content">
                <slot />
              </tbody>
            </table>
          </div>
          <div class="mdc-data-table__progress-indicator">
            <div class="mdc-data-table__scrim"></div>
            <slot name="loading-indicator" />
          </div>
        </div>
      </Host>
    );
  }
}
