import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { a as generateUniqueId } from "./component-utils-1c4ae7be.6d485fb9.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
const inoTableHeaderCellCss = "ino-table ino-table-header-cell{display:table-cell;vertical-align:middle;box-sizing:border-box;position:relative}ino-table ino-table-header-cell.mdc-data-table__header-cell{padding:2px 0 4px 0}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{padding:0 10px;height:100%;border-radius:10px;outline:0;margin-right:8px}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{display:flex;justify-content:space-between;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-wrapper{padding-right:36px}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-label{margin-right:4px;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-wrapper{cursor:pointer}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{overflow:hidden;text-overflow:ellipsis}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{--ino-icon-color:currentColor;--ino-icon-height:14px;--ino-icon-width:14px}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{transform:translateX(0px);will-change:transform;transition:transform 0.15s ease-in-out}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{transition:opacity 0.3s ease-in-out;will-change:opacity;width:0;opacity:0}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-wrapper{color:#3d40f5;background:rgba(193, 193, 193, 0.32)}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .ino-table-header-cell__search-icon{display:block;width:auto;opacity:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-label{transform:translateX(6px)}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__popover-content{border-radius:inherit;box-shadow:0px 25px 50px -12px rgba(30, 33, 37, 0.25)}ino-table ino-table-header-cell.ino-table-header-cell--searched{border-bottom-color:#3d40f5}ino-table ino-table-header-cell ino-icon-button ino-icon{will-change:transform;transition:transform 150ms ease;transform:scale(1)}ino-table ino-table-header-cell .sort-asc ino-icon,ino-table ino-table-header-cell .sort-desc ino-icon{transform:scale(0.8)}ino-table ino-table-header-cell ino-icon-button{position:absolute;right:14px;top:7px;--ino-icon-button-size:24px;--ino-icon-button-icon-size:22px;border-left:6px solid transparent}ino-table ino-table-header-cell .ino-popover{text-transform:initial}";
let InoTableHeaderCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sortDirectionChange = createEvent(this, "sortDirectionChange", 7);
    this.searchFocusChange = createEvent(this, "searchFocusChange", 7);
    this.tableHeaderCellId = `ino-table-header-cell-id_${generateUniqueId()}`;
    this.autofocus = false;
    this.searchIcon = "search";
    this.searched = false;
    this.notSortable = false;
    this.sortStart = "desc";
  }
  labelChanged() {
    this.maybeSetMaxWidth();
  }
  async setSearchable(searchable) {
    this.searchable = searchable;
    this.searchable && this.create();
  }
  async setFocus() {
    var _a;
    this.el.focus();
    (_a = this.popoverElement) === null || _a === void 0 ? void 0 : _a.getTippyInstance().then((tippy) => tippy.show());
  }
  async setBlur() {
    var _a;
    this.el.blur();
    (_a = this.popoverElement) === null || _a === void 0 ? void 0 : _a.getTippyInstance().then((tippy) => tippy.hide());
  }
  sortButtonClickHandler() {
    const sortOrder = this.sortStart === "desc" ? ["desc", "asc"] : ["asc", "desc"];
    let sortDirection = sortOrder[0];
    if (this.sortDirection) {
      const targetIdx = sortOrder.indexOf(this.sortDirection) + 1;
      sortDirection = targetIdx >= sortOrder.length ? void 0 : sortOrder[targetIdx];
    }
    this.sortDirectionChange.emit({
      columnId: this.columnId,
      sortDirection
    });
  }
  componentWillLoad() {
    this.searchable = this.el.children.length > 0;
  }
  componentDidLoad() {
    this.create();
  }
  create() {
    var _a;
    this.maybeSetMaxWidth();
    (_a = this.popoverElement) === null || _a === void 0 ? void 0 : _a.getTippyInstance().then((tippy) => {
      if (!tippy) {
        return;
      }
      tippy.setProps({
        onMount: () => this.searchFocusChange.emit(true),
        onHidden: () => this.searchFocusChange.emit(false),
        popperOptions: Object.assign(Object.assign({}, tippy.popperOptions), { strategy: "fixed" })
      });
      this.autofocus && tippy.show();
    });
  }
  maybeSetMaxWidth() {
    if (this.searchable && !this.el.style.getPropertyValue("max-width")) {
      this.el.style.setProperty("max-width", window.getComputedStyle(this.el).width);
    }
  }
  render() {
    if (this.el.classList.contains("ino-table__cell--checkbox")) {
      return h(Host, { class: "mdc-data-table__header-cell" }, h("slot", null));
    }
    const classes = classnames({
      "mdc-data-table__header-cell": true,
      "ino-table-header-cell--searchable": this.searchable,
      "ino-table-header-cell--sortable": !this.notSortable,
      "ino-table-header-cell--active": this.searchActivated,
      "ino-table-header-cell--searched": this.searched
    });
    return h(Host, { role: "columnheader", class: classes, "data-column-id": this.columnId ? this.columnId : generateUniqueId(), tabindex: "-1", id: this.tableHeaderCellId }, this.searchable ? h("ino-popover", { trigger: "focus click", placement: "bottom-start", "color-scheme": "transparent", controlled: true, visible: this.searchActivated, onVisibleChanged: (e) => this.searchActivated = e.detail, ref: (popover) => this.popoverElement = popover, interactive: true, distance: 8, hideOnBlur: true }, h("div", { class: "mdc-data-table__header-cell-wrapper", slot: "popover-trigger", tabindex: "0" }, h("ino-icon", { icon: this.searchIcon, class: "ino-table-header-cell__search-icon" }), h("div", { class: "mdc-data-table__header-cell-label" }, this.label)), h("div", { class: "ino-table-header-cell__popover-content" }, h("slot", null))) : h("div", { class: "mdc-data-table__header-cell-wrapper", tabindex: "-1" }, h("div", { class: "mdc-data-table__header-cell-label" }, this.label)), !this.notSortable && h("ino-icon-button", { colorScheme: "dark", class: `sort-${this.sortDirection || "none"}`, icon: this.sortIcon, onFocus: (e) => e.stopPropagation(), onClick: (e) => e.stopPropagation(), onClickEl: this.sortButtonClickHandler.bind(this) }));
  }
  get sortIcon() {
    if (!this.sortDirection)
      return "sort";
    return this.sortDirection == "asc" ? "sort_az" : "sort_za";
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "label": ["labelChanged"]
    };
  }
};
InoTableHeaderCell.style = inoTableHeaderCellCss;
export { InoTableHeaderCell as ino_table_header_cell };
