/*! For license information please see 198.0f18f77c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[198],{"../elements/dist/esm/_commonjsHelpers-212d567a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs});var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-796d4780.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-table.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_table:()=>InoTable});var _index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../elements/dist/esm/index-2ff82bb8.js"),_index_796d4780_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../elements/dist/esm/index-796d4780.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js");const InoTable=class{constructor(hostRef){(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.sortChange=(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"sortChange",7),this.loading=void 0,this.noHover=void 0,this.sortColumnId=void 0,this.sortDirection=void 0,this.stickyHeader=!1}sortColumnIdChanged(newSortColumnId,oldColumnId){this.changeSortColumnId(oldColumnId,newSortColumnId)}sortDirectionChanged(newSortDirection){this.changeSortDirection(newSortDirection)}sortDirectionChangedHandler(e){this.sortChange.emit(e.detail)}componentDidLoad(){!this.sortColumnId==!this.sortDirection?this.sortColumnId&&this.changeSortColumnId(void 0,this.sortColumnId):console.warn("ino-table: sorting on table requires sortColumnId and sortDirection.")}changeSortColumnId(oldColumnId,newColumnId){const headerCells=this.getSortableHeaderColumnCells();if(headerCells.length<1)return;const columnIds=headerCells.map((e=>e.columnId));if(columnIds.indexOf(newColumnId)<0&&console.warn(`${newColumnId} is no sortable column-id`),oldColumnId&&columnIds.indexOf(oldColumnId)>=0){const oldColumnCell=headerCells.find((e=>e.columnId==oldColumnId));null==oldColumnCell||oldColumnCell.removeAttribute("sort-direction")}this.changeSortDirection(this.sortDirection)}changeSortDirection(newSortDirection){const headerCells=this.getSortableHeaderColumnCells();if(headerCells.length<1)return;const newColumnCell=headerCells.find((e=>e.columnId==this.sortColumnId));newSortDirection?null==newColumnCell||newColumnCell.setAttribute("sort-direction",newSortDirection):null==newColumnCell||newColumnCell.removeAttribute("sort-direction")}getSortableHeaderColumnCells(){return Array.from(this.el.querySelectorAll("ino-table-header-cell:not([not-sortable]):not(.ino-table-cell__selector)"))}render(){const hasHeaderSlot=this.el.querySelectorAll("[slot=header-row]").length>0,tableClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_1__.c)({"mdc-data-table":!0,"mdc-data-table--in-progress":this.loading,"ino-table--no-header":!hasHeaderSlot,"ino-table--no-hover":this.noHover,"mdc-data-table--sticky-header":this.stickyHeader});return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:tableClasses},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"mdc-data-table__table-container"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("table",{class:"ino-table__table mdc-data-table__table"},hasHeaderSlot&&(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("thead",{class:"ino-table__header"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"header-row"})),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("tbody",{class:"mdc-data-table__content"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"mdc-data-table__progress-indicator"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"mdc-data-table__scrim"}),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"loading-indicator"}))))}get el(){return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{sortColumnId:["sortColumnIdChanged"],sortDirection:["sortDirectionChanged"]}}};InoTable.style=".mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0, 0, 0, 0.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0;}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0;}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:rgba(61, 64, 245, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__pagination{border-top-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px;}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right;}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left;}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right;}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left;}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size{width:28px;height:28px;padding:2px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px;}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0;}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:0.32;position:absolute;top:0;width:100%}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px;}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg);}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0;}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px;}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0;}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0;}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:0.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#3d40f5;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #3d40f5));background-color:#3d40f5;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #3d40f5))}@keyframes mdc-checkbox-fade-in-background-8A000000FF3D40F500000000FF3D40F5{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#3d40f5;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #3d40f5));background-color:#3d40f5;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #3d40f5))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF3D40F500000000FF3D40F5{0%,80%{border-color:#3d40f5;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #3d40f5));background-color:#3d40f5;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #3d40f5))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF3D40F500000000FF3D40F5}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF3D40F500000000FF3D40F5}ino-table{height:100%;max-height:100%;width:100%}ino-table tr{border:none}ino-table tbody tr:nth-child(even){background-color:#f4f4f7}ino-table .ino-table__row--active td,ino-table .ino-table__row--active td:first-child,ino-table .ino-table__row--active td:last-child,ino-table .ino-table__row--active th,ino-table .ino-table__row--active th:first-child,ino-table .ino-table__row--active th:last-child{border-color:#6cf070}ino-table .ino-table__row--active:hover td,ino-table .ino-table__row--active:hover td:first-child,ino-table .ino-table__row--active:hover td:last-child,ino-table .ino-table__row--active:hover th,ino-table .ino-table__row--active:hover th:first-child,ino-table .ino-table__row--active:hover th:last-child{border-color:#6cf070 !important}ino-table .mdc-data-table:not(.ino-table--no-hover) tbody tr:not(.mdc-data-table__row--selected):hover:nth-child(even){background-color:#f4f4f7}ino-table .mdc-data-table:not(.ino-table--no-hover) tbody tr:not(.mdc-data-table__row--selected):hover td,ino-table .mdc-data-table:not(.ino-table--no-hover) tbody tr:not(.mdc-data-table__row--selected):hover td:first-child,ino-table .mdc-data-table:not(.ino-table--no-hover) tbody tr:not(.mdc-data-table__row--selected):hover td:last-child,ino-table .mdc-data-table:not(.ino-table--no-hover) tbody tr:not(.mdc-data-table__row--selected):hover th,ino-table .mdc-data-table:not(.ino-table--no-hover) tbody tr:not(.mdc-data-table__row--selected):hover th:first-child,ino-table .mdc-data-table:not(.ino-table--no-hover) tbody tr:not(.mdc-data-table__row--selected):hover th:last-child{border-color:#cac8d5}ino-table th,ino-table td,ino-table .mdc-data-table__header-cell{padding:0 10px;vertical-align:middle;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis}ino-table thead th,ino-table thead td,ino-table .mdc-data-table__header-cell{height:44px;border-top:2px solid transparent;border-bottom:2px solid #dbe0e5;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:0.875rem;font-weight:600;color:#c1c1c1;letter-spacing:0.32px}ino-table thead th:first-child,ino-table thead td:first-child,ino-table .mdc-data-table__header-cell:first-child{padding-left:2px}ino-table thead th:last-child,ino-table thead td:last-child,ino-table .mdc-data-table__header-cell:last-child{padding-right:2px}ino-table th{text-align:left}ino-table tbody th,ino-table tbody td{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:0.875rem;font-weight:500;height:calc(var(--ino-table-row-height, 48px) - 2px);padding:0 10px;border-top:2px solid transparent;border-bottom:2px solid transparent}ino-table tbody th:first-child,ino-table tbody td:first-child{border-left:2px solid transparent}ino-table tbody th:last-child,ino-table tbody td:last-child{border-right:2px solid transparent}ino-table tbody th:first-child,ino-table tbody td:first-child{border-radius:8px 0 0 8px}ino-table tbody th:last-child,ino-table tbody td:last-child{border-radius:0 8px 8px 0}ino-table .ino-table__cell--checkbox{padding:0}ino-table .ino-table__cell--checkbox ino-checkbox{--ino-checkbox-color:#9ccd00;--ino-checkbox-container-color-unchecked:#c1c1c1;--ino-checkbox-color-active:#9ccd00;--ino-checkbox-color-hover:#9ccd00}ino-table .ino-table__cell--numeric{text-align:right;padding-right:22px}ino-table .ino-table__table{border-collapse:separate;border-spacing:0 2px}ino-table .mdc-data-table{width:inherit;border-width:0;max-height:inherit}ino-table .mdc-data-table--in-progress .mdc-data-table__content{filter:grayscale(1) opacity(0.4) blur(1px)}ino-table .mdc-data-table__scrim{background:transparent}ino-table .mdc-data-table__progress-indicator{height:100%}ino-table .mdc-data-table:not(.ino-table--no-header) .mdc-data-table__progress-indicator{top:44px;height:2px;--ino-progress-bar-height:2px}"}}]);