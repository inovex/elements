"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[9918],{1231:function(e,t,a){a.d(t,{a:function(){return l},c:function(){return n},g:function(){return o}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof a.g?a.g:"undefined"!==typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function n(e,t,a){return a={path:t,exports:{},require:function(e,t){return r()}},e(a,a.exports),a.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},3257:function(e,t,a){
/*!
 * Crafted with ❤ by inovex GmbH
 */
function l(){return"_"+Math.random().toString(36).substr(2,9)}function o(e,t){return e.querySelector(`[slot="${t}"]`)}function n(e,t){var a;return t?e.querySelectorAll(`[slot="${t}"]`).length>0:0===(null===(a=e.querySelector("slot"))||void 0===a?void 0:a.assignedElements().length)}function r(e){var t;null===(t=e.querySelector("[data-ino-focus]"))||void 0===t||t.focus()}function i(e){e.stopPropagation(),e.preventDefault()}a.d(t,{a:function(){return o},f:function(){return r},g:function(){return l},h:function(){return n},p:function(){return i}})},9776:function(e,t,a){a.d(t,{c:function(){return o}});a(6728);var l=a(1231),o=(0,l.c)((function(e){
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function a(){for(var e=[],l=0;l<arguments.length;l++){var o=arguments[l];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var r=a.apply(null,o);r&&e.push(r)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)t.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}))},9918:function(e,t,a){a.r(t),a.d(t,{ino_table_header_cell:function(){return i}});var l=a(1297),o=a(3257),n=a(9776);a(1231);
/*!
 * Crafted with ❤ by inovex GmbH
 */
const r="ino-table ino-table-header-cell{display:table-cell;vertical-align:middle;box-sizing:border-box;position:relative}ino-table ino-table-header-cell.mdc-data-table__header-cell{padding:2px 0 4px 0}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{padding:0 10px;height:100%;border-radius:10px;outline:0;margin-right:8px}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{display:flex;justify-content:space-between;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-wrapper{padding-right:36px}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-label{margin-right:4px;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-wrapper{cursor:pointer}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{overflow:hidden;text-overflow:ellipsis}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{--ino-icon-color:currentColor;--ino-icon-height:14px;--ino-icon-width:14px}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{transform:translateX(0px);will-change:transform;transition:transform 0.15s ease-in-out}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{transition:opacity 0.3s ease-in-out;will-change:opacity;width:0;opacity:0}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-wrapper{color:#3d40f5;background:rgba(193, 193, 193, 0.32)}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .ino-table-header-cell__search-icon{display:block;width:auto;opacity:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-label{transform:translateX(6px)}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__popover-content{border-radius:inherit;box-shadow:0px 25px 50px -12px rgba(30, 33, 37, 0.25)}ino-table ino-table-header-cell.ino-table-header-cell--searched{border-bottom-color:#3d40f5}ino-table ino-table-header-cell ino-icon-button ino-icon{will-change:transform;transition:transform 150ms ease;transform:scale(1)}ino-table ino-table-header-cell .sort-asc ino-icon,ino-table ino-table-header-cell .sort-desc ino-icon{transform:scale(0.8)}ino-table ino-table-header-cell ino-icon-button{position:absolute;right:14px;top:7px;--ino-icon-button-size:24px;--ino-icon-button-icon-size:22px;border-left:6px solid transparent}ino-table ino-table-header-cell .ino-popover{text-transform:initial}",i=class{constructor(e){(0,l.r)(this,e),this.sortDirectionChange=(0,l.c)(this,"sortDirectionChange",7),this.searchFocusChange=(0,l.c)(this,"searchFocusChange",7),this.tableHeaderCellId=`ino-table-header-cell-id_${(0,o.g)()}`,this.autofocus=!1,this.searchIcon="search",this.searched=!1,this.notSortable=!1,this.sortStart="desc"}labelChanged(){this.maybeSetMaxWidth()}async setSearchable(e){this.searchable=e,this.searchable&&this.create()}async setFocus(){var e;this.el.focus(),null===(e=this.popoverElement)||void 0===e||e.getTippyInstance().then((e=>e.show()))}async setBlur(){var e;this.el.blur(),null===(e=this.popoverElement)||void 0===e||e.getTippyInstance().then((e=>e.hide()))}sortButtonClickHandler(){const e="desc"===this.sortStart?["desc","asc"]:["asc","desc"];let t=e[0];if(this.sortDirection){const a=e.indexOf(this.sortDirection)+1;t=a>=e.length?void 0:e[a]}this.sortDirectionChange.emit({columnId:this.columnId,sortDirection:t})}componentWillLoad(){this.searchable=this.el.children.length>0}componentDidLoad(){this.create()}create(){var e;this.maybeSetMaxWidth(),null===(e=this.popoverElement)||void 0===e||e.getTippyInstance().then((e=>{e&&(e.setProps({onMount:()=>this.searchFocusChange.emit(!0),onHidden:()=>this.searchFocusChange.emit(!1),popperOptions:Object.assign(Object.assign({},e.popperOptions),{strategy:"fixed"})}),this.autofocus&&e.show())}))}maybeSetMaxWidth(){this.searchable&&!this.el.style.getPropertyValue("max-width")&&this.el.style.setProperty("max-width",window.getComputedStyle(this.el).width)}render(){if(this.el.classList.contains("ino-table__cell--checkbox"))return(0,l.h)(l.H,{class:"mdc-data-table__header-cell"},(0,l.h)("slot",null));const e=(0,n.c)({"mdc-data-table__header-cell":!0,"ino-table-header-cell--searchable":this.searchable,"ino-table-header-cell--sortable":!this.notSortable,"ino-table-header-cell--active":this.searchActivated,"ino-table-header-cell--searched":this.searched});return(0,l.h)(l.H,{role:"columnheader",class:e,"data-column-id":this.columnId?this.columnId:(0,o.g)(),tabindex:"-1",id:this.tableHeaderCellId},this.searchable?(0,l.h)("ino-popover",{trigger:"focus click",placement:"bottom-start",controlled:!0,"color-scheme":"transparent",visible:this.searchActivated,onVisibleChanged:e=>this.searchActivated=e.detail,ref:e=>this.popoverElement=e,interactive:!0,distance:8,hideOnBlur:!0},(0,l.h)("div",{class:"mdc-data-table__header-cell-wrapper",slot:"popover-trigger",tabindex:"0"},(0,l.h)("ino-icon",{icon:this.searchIcon,class:"ino-table-header-cell__search-icon"}),(0,l.h)("div",{class:"mdc-data-table__header-cell-label"},this.label)),(0,l.h)("div",{class:"ino-table-header-cell__popover-content"},(0,l.h)("slot",null))):(0,l.h)("div",{class:"mdc-data-table__header-cell-wrapper",tabindex:"-1"},(0,l.h)("div",{class:"mdc-data-table__header-cell-label"},this.label)),!this.notSortable&&(0,l.h)("ino-icon-button",{class:`sort-${this.sortDirection||"none"}`,icon:this.sortIcon,onFocus:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),onClickEl:this.sortButtonClickHandler.bind(this)}))}get sortIcon(){return this.sortDirection?"asc"==this.sortDirection?"sort_az":"sort_za":"sort"}get el(){return(0,l.g)(this)}static get watchers(){return{label:["labelChanged"]}}};i.style=r}}]);
//# sourceMappingURL=9918.9a963384.js.map