"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[5826],{6277:(_,h,o)=>{o.d(h,{a:()=>s,c:()=>c,g:()=>l});var s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function l(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function c(t,r,n){return t(n={path:r,exports:{},require:function(e,a){return function d(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},8728:(_,h,o)=>{o.d(h,{c:()=>l});var l=(0,o(6277).c)(function(c){!function(){var d={}.hasOwnProperty;function t(){for(var r=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var a=typeof e;if("string"===a||"number"===a)r.push(e);else if(Array.isArray(e)){if(e.length){var i=t.apply(null,e);i&&r.push(i)}}else if("object"===a){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){r.push(e.toString());continue}for(var b in e)d.call(e,b)&&e[b]&&r.push(b)}}}return r.join(" ")}c.exports?(t.default=t,c.exports=t):window.classNames=t}()})},5826:(_,h,o)=>{o.r(h),o.d(h,{ino_table_header_cell:()=>n});var s=o(9671),l=o(2975),c=o(4022),d=o(8728);o(6277);const n=class{constructor(e){(0,l.r)(this,e),this.sortDirectionChange=(0,l.c)(this,"sortDirectionChange",7),this.searchFocusChange=(0,l.c)(this,"searchFocusChange",7),this.tableHeaderCellId=`ino-table-header-cell-id_${(0,c.g)()}`,this.autofocus=!1,this.searchIcon="search",this.searched=!1,this.notSortable=!1,this.sortStart="desc"}labelChanged(){this.maybeSetMaxWidth()}setSearchable(e){var a=this;return(0,s.Z)(function*(){a.searchable=e,a.searchable&&a.create()})()}setFocus(){var e=this;return(0,s.Z)(function*(){var a;e.el.focus(),null===(a=e.popoverElement)||void 0===a||a.getTippyInstance().then(i=>i.show())})()}setBlur(){var e=this;return(0,s.Z)(function*(){var a;e.el.blur(),null===(a=e.popoverElement)||void 0===a||a.getTippyInstance().then(i=>i.hide())})()}sortButtonClickHandler(){const e="desc"===this.sortStart?["desc","asc"]:["asc","desc"];let a=e[0];if(this.sortDirection){const i=e.indexOf(this.sortDirection)+1;a=i>=e.length?void 0:e[i]}this.sortDirectionChange.emit({columnId:this.columnId,sortDirection:a})}componentWillLoad(){this.searchable=this.el.children.length>0}componentDidLoad(){this.create()}create(){var e;this.maybeSetMaxWidth(),null===(e=this.popoverElement)||void 0===e||e.getTippyInstance().then(a=>{a&&(a.setProps({onMount:()=>this.searchFocusChange.emit(!0),onHidden:()=>this.searchFocusChange.emit(!1),popperOptions:Object.assign(Object.assign({},a.popperOptions),{strategy:"fixed"})}),this.autofocus&&a.show())})}maybeSetMaxWidth(){this.searchable&&!this.el.style.getPropertyValue("max-width")&&this.el.style.setProperty("max-width",window.getComputedStyle(this.el).width)}render(){if(this.el.classList.contains("ino-table__cell--checkbox"))return(0,l.h)(l.H,{class:"mdc-data-table__header-cell"},(0,l.h)("slot",null));const e=(0,d.c)({"mdc-data-table__header-cell":!0,"ino-table-header-cell--searchable":this.searchable,"ino-table-header-cell--sortable":!this.notSortable,"ino-table-header-cell--active":this.searchActivated,"ino-table-header-cell--searched":this.searched});return(0,l.h)(l.H,{role:"columnheader",class:e,"data-column-id":this.columnId?this.columnId:(0,c.g)(),tabindex:"-1",id:this.tableHeaderCellId},this.searchable?(0,l.h)("ino-popover",{trigger:"focus click",placement:"bottom-start",controlled:!0,"color-scheme":"transparent",visible:this.searchActivated,onVisibleChanged:a=>this.searchActivated=a.detail,ref:a=>this.popoverElement=a,interactive:!0,distance:8,hideOnBlur:!0},(0,l.h)("div",{class:"mdc-data-table__header-cell-wrapper",slot:"popover-trigger",tabindex:"0"},(0,l.h)("ino-icon",{icon:this.searchIcon,class:"ino-table-header-cell__search-icon"}),(0,l.h)("div",{class:"mdc-data-table__header-cell-label"},this.label)),(0,l.h)("div",{class:"ino-table-header-cell__popover-content"},(0,l.h)("slot",null))):(0,l.h)("div",{class:"mdc-data-table__header-cell-wrapper",tabindex:"-1"},(0,l.h)("div",{class:"mdc-data-table__header-cell-label"},this.label)),!this.notSortable&&(0,l.h)("ino-icon-button",{class:`sort-${this.sortDirection||"none"}`,icon:this.sortIcon,onFocus:a=>a.stopPropagation(),onClick:a=>a.stopPropagation(),onClickEl:this.sortButtonClickHandler.bind(this)}))}get sortIcon(){return this.sortDirection?"asc"==this.sortDirection?"sort_az":"sort_za":"sort"}get el(){return(0,l.g)(this)}static get watchers(){return{label:["labelChanged"]}}};n.style="ino-table ino-table-header-cell{display:table-cell;vertical-align:middle;box-sizing:border-box;position:relative}ino-table ino-table-header-cell.mdc-data-table__header-cell{padding:2px 0 4px 0}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{padding:0 10px;height:100%;border-radius:10px;outline:0;margin-right:8px}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{display:flex;justify-content:space-between;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-wrapper{padding-right:36px}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-label{margin-right:4px;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-wrapper{cursor:pointer}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{overflow:hidden;text-overflow:ellipsis}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{--ino-icon-color:currentColor;--ino-icon-height:14px;--ino-icon-width:14px}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{transform:translateX(0px);will-change:transform;transition:transform 0.15s ease-in-out}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{transition:opacity 0.3s ease-in-out;will-change:opacity;width:0;opacity:0}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-wrapper{color:#3d40f5;background:rgba(193, 193, 193, 0.32)}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .ino-table-header-cell__search-icon{display:block;width:auto;opacity:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-label{transform:translateX(6px)}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__popover-content{border-radius:inherit;box-shadow:0px 25px 50px -12px rgba(30, 33, 37, 0.25)}ino-table ino-table-header-cell.ino-table-header-cell--searched{border-bottom-color:#3d40f5}ino-table ino-table-header-cell ino-icon-button ino-icon{will-change:transform;transition:transform 150ms ease;transform:scale(1)}ino-table ino-table-header-cell .sort-asc ino-icon,ino-table ino-table-header-cell .sort-desc ino-icon{transform:scale(0.8)}ino-table ino-table-header-cell ino-icon-button{position:absolute;right:14px;top:7px;--ino-icon-button-size:24px;--ino-icon-button-icon-size:22px;border-left:6px solid transparent}ino-table ino-table-header-cell .ino-popover{text-transform:initial}"}}]);