(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[9918],{4173:function(e,t,a){var l=a(3103),n=a(9859);l({global:!0,forced:n.globalThis!==n},{globalThis:n})},1231:function(e,t,a){"use strict";a.d(t,{a:function(){return l},c:function(){return r},g:function(){return n}});a(4173),a(1372);var l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof a.g?a.g:"undefined"!==typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function r(e,t,a){return a={path:t,exports:{},require:function(e,t){return o()}},e(a,a.exports),a.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},3257:function(e,t,a){"use strict";a.d(t,{a:function(){return n},f:function(){return o},g:function(){return l},h:function(){return r},p:function(){return i}});a(8188),a(8233);
/*!
 * Crafted with ❤ by inovex GmbH
 */
function l(){return"_"+Math.random().toString(36).substr(2,9)}function n(e,t){return e.querySelector('[slot="'.concat(t,'"]'))}function r(e,t){var a;return t?e.querySelectorAll('[slot="'.concat(t,'"]')).length>0:0===(null===(a=e.querySelector("slot"))||void 0===a?void 0:a.assignedElements().length)}function o(e){var t;null===(t=e.querySelector("[data-ino-focus]"))||void 0===t||t.focus()}function i(e){e.stopPropagation(),e.preventDefault()}},9776:function(e,t,a){"use strict";a.d(t,{c:function(){return r}});var l=a(6632),n=(a(6728),a(8188),a(8233),a(9529),a(1235),a(6781),a(1231)),r=(0,n.c)((function(e){
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=(0,l.Z)(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}))},9918:function(e,t,a){"use strict";a.r(t),a.d(t,{ino_table_header_cell:function(){return d}});var l=a(21),n=a(6706),r=a(4567),o=a(6812),i=a(1297),c=a(3257),s=a(9776),h=(a(1231),"ino-table ino-table-header-cell{display:table-cell;vertical-align:middle;box-sizing:border-box;position:relative}ino-table ino-table-header-cell.mdc-data-table__header-cell{padding:2px 0 4px 0}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{padding:0 10px;height:100%;border-radius:10px;outline:0;margin-right:8px}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{display:flex;justify-content:space-between;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-wrapper{padding-right:36px}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-label{margin-right:4px;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-wrapper{cursor:pointer}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{overflow:hidden;text-overflow:ellipsis}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{--ino-icon-color:currentColor;--ino-icon-height:14px;--ino-icon-width:14px}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{transform:translateX(0px);will-change:transform;transition:transform 0.15s ease-in-out}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{transition:opacity 0.3s ease-in-out;will-change:opacity;width:0;opacity:0}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-wrapper{color:#3d40f5;background:rgba(193, 193, 193, 0.32)}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .ino-table-header-cell__search-icon{display:block;width:auto;opacity:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-label{transform:translateX(6px)}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__popover-content{border-radius:inherit;box-shadow:0px 25px 50px -12px rgba(30, 33, 37, 0.25)}ino-table ino-table-header-cell.ino-table-header-cell--searched{border-bottom-color:#3d40f5}ino-table ino-table-header-cell ino-icon-button ino-icon{will-change:transform;transition:transform 150ms ease;transform:scale(1)}ino-table ino-table-header-cell .sort-asc ino-icon,ino-table ino-table-header-cell .sort-desc ino-icon{transform:scale(0.8)}ino-table ino-table-header-cell ino-icon-button{position:absolute;right:14px;top:7px;--ino-icon-button-size:24px;--ino-icon-button-icon-size:22px;border-left:6px solid transparent}ino-table ino-table-header-cell .ino-popover{text-transform:initial}"),d=function(){function e(t){(0,r.Z)(this,e),(0,i.r)(this,t),this.sortDirectionChange=(0,i.c)(this,"sortDirectionChange",7),this.searchFocusChange=(0,i.c)(this,"searchFocusChange",7),this.tableHeaderCellId="ino-table-header-cell-id_".concat((0,c.g)()),this.autofocus=!1,this.searchIcon="search",this.searched=!1,this.notSortable=!1,this.sortStart="desc"}return(0,o.Z)(e,[{key:"labelChanged",value:function(){this.maybeSetMaxWidth()}},{key:"setSearchable",value:function(){var e=(0,n.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.searchable=t,this.searchable&&this.create();case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setFocus",value:function(){var e=(0,n.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.el.focus(),null===(t=this.popoverElement)||void 0===t||t.getTippyInstance().then((function(e){return e.show()}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setBlur",value:function(){var e=(0,n.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.el.blur(),null===(t=this.popoverElement)||void 0===t||t.getTippyInstance().then((function(e){return e.hide()}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"sortButtonClickHandler",value:function(){var e="desc"===this.sortStart?["desc","asc"]:["asc","desc"],t=e[0];if(this.sortDirection){var a=e.indexOf(this.sortDirection)+1;t=a>=e.length?void 0:e[a]}this.sortDirectionChange.emit({columnId:this.columnId,sortDirection:t})}},{key:"componentWillLoad",value:function(){this.searchable=this.el.children.length>0}},{key:"componentDidLoad",value:function(){this.create()}},{key:"create",value:function(){var e,t=this;this.maybeSetMaxWidth(),null===(e=this.popoverElement)||void 0===e||e.getTippyInstance().then((function(e){e&&(e.setProps({onMount:function(){return t.searchFocusChange.emit(!0)},onHidden:function(){return t.searchFocusChange.emit(!1)},popperOptions:Object.assign(Object.assign({},e.popperOptions),{strategy:"fixed"})}),t.autofocus&&e.show())}))}},{key:"maybeSetMaxWidth",value:function(){this.searchable&&!this.el.style.getPropertyValue("max-width")&&this.el.style.setProperty("max-width",window.getComputedStyle(this.el).width)}},{key:"render",value:function(){var e=this;if(this.el.classList.contains("ino-table__cell--checkbox"))return(0,i.h)(i.H,{class:"mdc-data-table__header-cell"},(0,i.h)("slot",null));var t=(0,s.c)({"mdc-data-table__header-cell":!0,"ino-table-header-cell--searchable":this.searchable,"ino-table-header-cell--sortable":!this.notSortable,"ino-table-header-cell--active":this.searchActivated,"ino-table-header-cell--searched":this.searched});return(0,i.h)(i.H,{role:"columnheader",class:t,"data-column-id":this.columnId?this.columnId:(0,c.g)(),tabindex:"-1",id:this.tableHeaderCellId},this.searchable?(0,i.h)("ino-popover",{trigger:"focus click",placement:"bottom-start",controlled:!0,"color-scheme":"transparent",visible:this.searchActivated,onVisibleChanged:function(t){return e.searchActivated=t.detail},ref:function(t){return e.popoverElement=t},interactive:!0,distance:8,hideOnBlur:!0},(0,i.h)("div",{class:"mdc-data-table__header-cell-wrapper",slot:"popover-trigger",tabindex:"0"},(0,i.h)("ino-icon",{icon:this.searchIcon,class:"ino-table-header-cell__search-icon"}),(0,i.h)("div",{class:"mdc-data-table__header-cell-label"},this.label)),(0,i.h)("div",{class:"ino-table-header-cell__popover-content"},(0,i.h)("slot",null))):(0,i.h)("div",{class:"mdc-data-table__header-cell-wrapper",tabindex:"-1"},(0,i.h)("div",{class:"mdc-data-table__header-cell-label"},this.label)),!this.notSortable&&(0,i.h)("ino-icon-button",{class:"sort-".concat(this.sortDirection||"none"),icon:this.sortIcon,onFocus:function(e){return e.stopPropagation()},onClick:function(e){return e.stopPropagation()},onClickEl:this.sortButtonClickHandler.bind(this)}))}},{key:"sortIcon",get:function(){return this.sortDirection?"asc"==this.sortDirection?"sort_az":"sort_za":"sort"}},{key:"el",get:function(){return(0,i.g)(this)}}],[{key:"watchers",get:function(){return{label:["labelChanged"]}}}]),e}();d.style=h}}]);
//# sourceMappingURL=9918-legacy.7ba82918.js.map