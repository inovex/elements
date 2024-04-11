import{r as n,c as i,h as l,H as o,g as c}from"./preview-AX_YvyRv.js";import{g as r}from"./component-utils-757b8493-Dk10tU6Q.js";import{c as s}from"./index-38c18b20-Bpdhy5BS.js";import"./iframe-LiFnAPgb.js";import"../sb-preview/runtime.js";import"./index--vP5QzB1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./elements-stencil-docs-A79BTi6O.js";import"./index-CvkKVlgN.js";import"./index-BHQg7lv3.js";import"./index-DrFu-skq.js";import"./jsx-runtime-S_zFEZ12.js";import"./index-BnTZpF8w.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const h="ino-table ino-table-header-cell{display:table-cell;vertical-align:middle;box-sizing:border-box;position:relative}ino-table ino-table-header-cell.mdc-data-table__header-cell{padding:2px 0 4px 0;border-bottom:2px solid #cac8d5;color:#b6b4c4}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{padding:0 10px;height:100%;border-radius:10px;border-color:#dfdee6;outline:0;margin-right:8px}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{display:flex;justify-content:space-between;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-wrapper{padding-right:36px}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-label{margin-right:4px;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-wrapper{cursor:pointer}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{overflow:hidden;text-overflow:ellipsis}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{--ino-icon-color:currentColor;--ino-icon-height:14px;--ino-icon-width:14px}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{transform:translateX(0px);will-change:transform;transition:transform 0.15s ease-in-out}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{transition:opacity 0.3s ease-in-out;will-change:opacity;width:0;opacity:0}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-wrapper{color:#4655ff;background:#dfdee6}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .ino-table-header-cell__search-icon{display:block;width:auto;opacity:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-label{transform:translateX(6px)}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__popover-content{border-radius:inherit;box-shadow:0px 25px 50px -12px rgba(45, 93, 255, 0.3019607843)}ino-table ino-table-header-cell.ino-table-header-cell--searched{border-bottom-color:#4655ff}ino-table ino-table-header-cell ino-icon-button ino-icon{will-change:transform;transition:transform 150ms ease;transform:scale(1)}ino-table ino-table-header-cell .sort-asc ino-icon,ino-table ino-table-header-cell .sort-desc ino-icon{transform:scale(0.8)}ino-table ino-table-header-cell ino-icon-button{position:absolute;right:14px;top:7px;--ino-icon-button-size:24px;--ino-icon-button-icon-size:22px;border-left:6px solid transparent}ino-table ino-table-header-cell .ino-popover{text-transform:initial}",d=h,b=class{constructor(e){n(this,e),this.sortDirectionChange=i(this,"sortDirectionChange",7),this.searchFocusChange=i(this,"searchFocusChange",7),this.tableHeaderCellId=`ino-table-header-cell-id_${r()}`,this.autofocus=!1,this.searchIcon="search",this.columnId=void 0,this.label=void 0,this.searched=!1,this.notSortable=!1,this.sortDirection=void 0,this.sortStart="desc",this.searchActivated=void 0,this.searchable=void 0}labelChanged(){this.maybeSetMaxWidth()}async setSearchable(e){this.searchable=e,this.searchable&&this.create()}async setFocus(){var e;this.el.focus(),(e=this.popoverElement)===null||e===void 0||e.getTippyInstance().then(a=>a.show())}async setBlur(){var e;this.el.blur(),(e=this.popoverElement)===null||e===void 0||e.getTippyInstance().then(a=>a.hide())}sortButtonClickHandler(){const e=this.sortStart==="desc"?["desc","asc"]:["asc","desc"];let a=e[0];if(this.sortDirection){const t=e.indexOf(this.sortDirection)+1;a=t>=e.length?void 0:e[t]}this.sortDirectionChange.emit({columnId:this.columnId,sortDirection:a})}componentWillLoad(){this.searchable=this.el.children.length>0}componentDidLoad(){this.create()}create(){var e;this.maybeSetMaxWidth(),(e=this.popoverElement)===null||e===void 0||e.getTippyInstance().then(a=>{a&&(a.setProps({onMount:()=>this.searchFocusChange.emit(!0),onHidden:()=>this.searchFocusChange.emit(!1),popperOptions:Object.assign(Object.assign({},a.popperOptions),{strategy:"fixed"})}),this.autofocus&&a.show())})}maybeSetMaxWidth(){this.searchable&&!this.el.style.getPropertyValue("max-width")&&this.el.style.setProperty("max-width",window.getComputedStyle(this.el).width)}render(){if(this.el.classList.contains("ino-table__cell--checkbox"))return l(o,{class:"mdc-data-table__header-cell"},l("slot",null));const e=s({"mdc-data-table__header-cell":!0,"ino-table-header-cell--searchable":this.searchable,"ino-table-header-cell--sortable":!this.notSortable,"ino-table-header-cell--active":this.searchActivated,"ino-table-header-cell--searched":this.searched});return l(o,{role:"columnheader",class:e,"data-column-id":this.columnId?this.columnId:r(),tabindex:"-1",id:this.tableHeaderCellId},this.searchable?l("ino-popover",{trigger:"focus click",placement:"bottom-start",controlled:!0,colorScheme:"light",visible:this.searchActivated,onVisibleChanged:a=>this.searchActivated=a.detail,ref:a=>this.popoverElement=a,interactive:!0,distance:8,hideOnBlur:!0},l("div",{class:"mdc-data-table__header-cell-wrapper",slot:"popover-trigger",tabindex:"0"},l("ino-icon",{icon:this.searchIcon,class:"ino-table-header-cell__search-icon"}),l("div",{class:"mdc-data-table__header-cell-label"},this.label)),l("div",{class:"ino-table-header-cell__popover-content"},l("slot",null))):l("div",{class:"mdc-data-table__header-cell-wrapper",tabindex:"-1"},l("div",{class:"mdc-data-table__header-cell-label"},this.label)),!this.notSortable&&l("ino-icon-button",{class:`sort-${this.sortDirection||"none"}`,icon:this.sortIcon,onFocus:a=>a.stopPropagation(),onClick:a=>a.stopPropagation(),onClickEl:this.sortButtonClickHandler.bind(this)}))}get sortIcon(){return this.sortDirection?this.sortDirection=="asc"?"sort_az":"sort_za":"sort"}get el(){return c(this)}static get watchers(){return{label:["labelChanged"]}}};b.style=d;export{b as ino_table_header_cell};
