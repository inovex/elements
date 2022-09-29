import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
  EventEmitter,
  Event,
  State,
  Watch,
  Method
} from '@stencil/core';
import { generateUniqueId } from '../../util/component-utils';
import classNames from 'classnames';
import { SortDirection, SortDirectionChangeDetails } from '../../interface';

/**
 * @slot default - The search content (input field, list) within the popover.
 */
@Component({
  tag: 'ino-table-header-cell',
  styleUrl: 'ino-table-header-cell.scss',
  shadow: false
})
export class InoTableHeaderCell implements ComponentInterface {
  private tableHeaderCellId = `ino-table-header-cell-id_${generateUniqueId()}`;
  private popoverElement: HTMLInoPopoverElement;

  @Element() el: HTMLInoTableHeaderCellElement;

  /**
   * Marks the header as autofocused (used for searchable header cells).
   *
   * Use this in combination with the `data-ino-focus` attribute on
   * the actual search target element to focus a specific input element.
   */
  @Prop() autofocus = false;

  /**
   * Identifier of the search icon (default `search`).
   * Used for date or list search columns.
   */
  @Prop() searchIcon = 'search';

  /**
   * A unique identifier of the column (used for sorting).
   */
  @Prop() columnId?: string;

  /**
   * Name of the column.
   */
  @Prop() label: string;

  @Watch('label')
  labelChanged() {
    this.maybeSetMaxWidth();
  }

  /**
   * True, if the column has been searched for this column.
   * Persistent state to indicate the user that this column
   * has a search filter.
   */
  @Prop() searched = false;

  /**
   * If true, the cell is **not** sortable.
   * By default, table header cells are sortable.
   */
  @Prop() notSortable = false;

  /**
   * The current sort direction of the column.
   */
  @Prop() sortDirection?: SortDirection;

  /**
   * The initial sort direction state (default `desc`).
   *
   * By default, all columns are sorted descending followed by ascending.
   * To switch this order, set sort Start to asc.
   */
  @Prop() sortStart: SortDirection = 'desc';

  /**
   * Emits that the sort direction has been changed.
   */
  @Event() sortDirectionChange: EventEmitter<SortDirectionChangeDetails>;

  /**
   * Emits that the search field focused (true) or blurred (false).
   */
  @Event() searchFocusChange: EventEmitter<boolean>;

  /**
   * State that keeps track whether the popover (search) is active.
   */
  @State() searchActivated: boolean;

  /**
   * State that indicates whether the header cell is searchable.
   */
  @State() searchable: boolean;

  /**
   * Updates the search behaviour of this cell.
   *
   * @param searchable true, if the cell should be searchable, false otherwise.
   */
  @Method()
  async setSearchable(searchable: boolean) {
    this.searchable = searchable;
    this.searchable && this.create();
  }

  /**
   * Sets focus on the header cell.
   * If searchable, opens the popover and focuses the `data-ino-focus` target.
   */
  @Method()
  async setFocus() {
    this.el.focus();
    this.popoverElement?.getTippyInstance().then(tippy => tippy.show());
  }

  /**
   * Sets blur on the header cell. If searchable, closes the popover.
   */
  @Method()
  async setBlur() {
    this.el.blur();
    this.popoverElement?.getTippyInstance().then(tippy => tippy.hide());
  }

  private sortButtonClickHandler() {
    const sortOrder =
      this.sortStart === 'desc' ? ['desc', 'asc'] : ['asc', 'desc'];
    let sortDirection = sortOrder[0];
    if (this.sortDirection) {
      const targetIdx = sortOrder.indexOf(this.sortDirection) + 1;
      sortDirection =
        targetIdx >= sortOrder.length ? undefined : sortOrder[targetIdx];
    }

    this.sortDirectionChange.emit({
      columnId: this.columnId,
      sortDirection: sortDirection
    } as SortDirectionChangeDetails);
  }

  componentWillLoad() {
    // Before rendering the actual element, check for a default slot (children) which are interpereted
    // as search popover content. Note: Only works with a single slot.
    this.searchable = this.el.children.length > 0;
  }

  componentDidLoad() {
    this.create();
  }

  private create() {
    this.maybeSetMaxWidth();
    this.popoverElement?.getTippyInstance().then(tippy => {
      if (!tippy) {
        return;
      }
      tippy.setProps({
        onMount: () => this.searchFocusChange.emit(true),
        onHidden: () => this.searchFocusChange.emit(false),
        popperOptions: { ...tippy.popperOptions, strategy: 'fixed' }
      });
      this.autofocus && tippy.show();
    });
  }

  /**
   * Sets the max width to keep width when hover shows the search icon.
   */
  private maybeSetMaxWidth() {
    if (this.searchable && !this.el.style.getPropertyValue('max-width')) {
      this.el.style.setProperty(
        'max-width',
        window.getComputedStyle(this.el).width
      );
    }
  }

  render() {
    if (this.el.classList.contains('ino-table__cell--checkbox')) {
      return (
        <Host class="mdc-data-table__header-cell">
          <slot />
        </Host>
      );
    }

    const classes = classNames({
      'mdc-data-table__header-cell': true,
      'ino-table-header-cell--searchable': this.searchable,
      'ino-table-header-cell--sortable': !this.notSortable,
      'ino-table-header-cell--active': this.searchActivated,
      'ino-table-header-cell--searched': this.searched
    });

    return (
      <Host
        role="columnheader"
        class={classes}
        data-column-id={this.columnId ? this.columnId : generateUniqueId()}
        tabindex="-1"
        id={this.tableHeaderCellId}
      >
        {this.searchable ? (
          <ino-popover
            trigger="focus click"
            placement="bottom-start"
            controlled
            visible={this.searchActivated}
            onVisibleChanged={e => (this.searchActivated = e.detail)}
            ref={popover =>
              (this.popoverElement = popover as HTMLInoPopoverElement)
            }
            interactive
            distance={8}
            hideOnBlur
          >
            <div
              class="mdc-data-table__header-cell-wrapper"
              slot="popover-trigger"
              tabindex="0"
            >
              <ino-icon
                icon={this.searchIcon}
                class="ino-table-header-cell__search-icon"
              />
              <div class="mdc-data-table__header-cell-label">{this.label}</div>
            </div>

            <div class="ino-table-header-cell__popover-content">
              <slot />
            </div>
          </ino-popover>
        ) : (
          <div class="mdc-data-table__header-cell-wrapper" tabindex="-1">
            <div class="mdc-data-table__header-cell-label">{this.label}</div>
          </div>
        )}

        {!this.notSortable && (
          <ino-icon-button
            class={`sort-${this.sortDirection || 'none'}`}
            icon={this.sortIcon}
            onFocus={e => e.stopPropagation()}
            onClick={e => e.stopPropagation()}
            onClickEl={this.sortButtonClickHandler.bind(this)}
          />
        )}
      </Host>
    );
  }


  get sortIcon() {
    if(!this.sortDirection) return 'sort';
    return this.sortDirection == 'asc' ? 'sort_az' : 'sort_za';
  }
}
