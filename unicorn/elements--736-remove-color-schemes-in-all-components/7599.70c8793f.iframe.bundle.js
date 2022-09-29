/*! For license information please see 7599.70c8793f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[7599],{"../elements/dist/esm/_commonjsHelpers-212d567a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/component-utils-1c4ae7be.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>generateUniqueId,f:()=>focusIfExists,g:()=>getSlotContent,h:()=>hasSlotContent,m:()=>moveCursorToEnd,p:()=>preventEvent});__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js");function generateUniqueId(){return"_"+Math.random().toString(36).substr(2,9)}function getSlotContent(el,slotName){return el.querySelector('[slot="'+slotName+'"]')}function hasSlotContent(el,slotName){var _a;return slotName?el.querySelectorAll('[slot="'+slotName+'"]').length>0:0===(null===(_a=el.querySelector("slot"))||void 0===_a?void 0:_a.assignedElements().length)}function focusIfExists(el){var _a;null===(_a=el.querySelector("[data-ino-focus]"))||void 0===_a||_a.focus()}function moveCursorToEnd(el){var len=el.value.length;el.setSelectionRange&&(el.focus(),el.setSelectionRange(len,len))}function preventEvent(event){event.stopPropagation(),event.preventDefault()}},"../elements/dist/esm/index-b7e5b0c5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-table-header-cell.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_table_header_cell:()=>InoTableHeaderCell});__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../elements/dist/esm/index-dbb9ab19.js"),_component_utils_1c4ae7be_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../elements/dist/esm/component-utils-1c4ae7be.js"),_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../elements/dist/esm/index-b7e5b0c5.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var InoTableHeaderCell=function(){function InoTableHeaderCell(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,InoTableHeaderCell),(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.r)(this,hostRef),this.sortDirectionChange=(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.c)(this,"sortDirectionChange",7),this.searchFocusChange=(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.c)(this,"searchFocusChange",7),this.tableHeaderCellId="ino-table-header-cell-id_"+(0,_component_utils_1c4ae7be_js__WEBPACK_IMPORTED_MODULE_7__.a)(),this.autofocus=!1,this.searchIcon="search",this.searched=!1,this.notSortable=!1,this.sortStart="desc"}var _setBlur,_setFocus,_setSearchable;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(InoTableHeaderCell,[{key:"labelChanged",value:function labelChanged(){this.maybeSetMaxWidth()}},{key:"setSearchable",value:(_setSearchable=_asyncToGenerator(regeneratorRuntime.mark((function _callee(searchable){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.searchable=searchable,this.searchable&&this.create();case 2:case"end":return _context.stop()}}),_callee,this)}))),function setSearchable(_x){return _setSearchable.apply(this,arguments)})},{key:"setFocus",value:(_setFocus=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(){var _a;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.el.focus(),null===(_a=this.popoverElement)||void 0===_a||_a.getTippyInstance().then((function(tippy){return tippy.show()}));case 2:case"end":return _context2.stop()}}),_callee2,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"setBlur",value:(_setBlur=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(){var _a;return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:this.el.blur(),null===(_a=this.popoverElement)||void 0===_a||_a.getTippyInstance().then((function(tippy){return tippy.hide()}));case 2:case"end":return _context3.stop()}}),_callee3,this)}))),function setBlur(){return _setBlur.apply(this,arguments)})},{key:"sortButtonClickHandler",value:function sortButtonClickHandler(){var sortOrder="desc"===this.sortStart?["desc","asc"]:["asc","desc"],sortDirection=sortOrder[0];if(this.sortDirection){var targetIdx=sortOrder.indexOf(this.sortDirection)+1;sortDirection=targetIdx>=sortOrder.length?void 0:sortOrder[targetIdx]}this.sortDirectionChange.emit({columnId:this.columnId,sortDirection})}},{key:"componentWillLoad",value:function componentWillLoad(){this.searchable=this.el.children.length>0}},{key:"componentDidLoad",value:function componentDidLoad(){this.create()}},{key:"create",value:function create(){var _a,_this=this;this.maybeSetMaxWidth(),null===(_a=this.popoverElement)||void 0===_a||_a.getTippyInstance().then((function(tippy){tippy&&(tippy.setProps({onMount:function onMount(){return _this.searchFocusChange.emit(!0)},onHidden:function onHidden(){return _this.searchFocusChange.emit(!1)},popperOptions:Object.assign(Object.assign({},tippy.popperOptions),{strategy:"fixed"})}),_this.autofocus&&tippy.show())}))}},{key:"maybeSetMaxWidth",value:function maybeSetMaxWidth(){this.searchable&&!this.el.style.getPropertyValue("max-width")&&this.el.style.setProperty("max-width",window.getComputedStyle(this.el).width)}},{key:"render",value:function render(){var _this2=this;if(this.el.classList.contains("ino-table__cell--checkbox"))return(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)(_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.H,{class:"mdc-data-table__header-cell"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)("slot",null));var classes=(0,_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_8__.c)({"mdc-data-table__header-cell":!0,"ino-table-header-cell--searchable":this.searchable,"ino-table-header-cell--sortable":!this.notSortable,"ino-table-header-cell--active":this.searchActivated,"ino-table-header-cell--searched":this.searched});return(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)(_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.H,{role:"columnheader",class:classes,"data-column-id":this.columnId?this.columnId:(0,_component_utils_1c4ae7be_js__WEBPACK_IMPORTED_MODULE_7__.a)(),tabindex:"-1",id:this.tableHeaderCellId},this.searchable?(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)("ino-popover",{trigger:"focus click",placement:"bottom-start",controlled:!0,visible:this.searchActivated,onVisibleChanged:function onVisibleChanged(e){return _this2.searchActivated=e.detail},ref:function ref(popover){return _this2.popoverElement=popover},interactive:!0,distance:8,hideOnBlur:!0},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)("div",{class:"mdc-data-table__header-cell-wrapper",slot:"popover-trigger",tabindex:"0"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)("ino-icon",{icon:this.searchIcon,class:"ino-table-header-cell__search-icon"}),(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)("div",{class:"mdc-data-table__header-cell-label"},this.label)),(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)("div",{class:"ino-table-header-cell__popover-content"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)("slot",null))):(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)("div",{class:"mdc-data-table__header-cell-wrapper",tabindex:"-1"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)("div",{class:"mdc-data-table__header-cell-label"},this.label)),!this.notSortable&&(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.h)("ino-icon-button",{class:"sort-"+(this.sortDirection||"none"),icon:this.sortIcon,onFocus:function onFocus(e){return e.stopPropagation()},onClick:function onClick(e){return e.stopPropagation()},onClickEl:this.sortButtonClickHandler.bind(this)}))}},{key:"sortIcon",get:function get(){return this.sortDirection?"asc"==this.sortDirection?"sort_az":"sort_za":"sort"}},{key:"el",get:function get(){return(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_6__.g)(this)}}],[{key:"watchers",get:function get(){return{label:["labelChanged"]}}}]),InoTableHeaderCell}();InoTableHeaderCell.style="ino-table ino-table-header-cell{display:table-cell;vertical-align:middle;box-sizing:border-box;position:relative}ino-table ino-table-header-cell.mdc-data-table__header-cell{padding:2px 0 4px 0}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{padding:0 10px;height:100%;border-radius:10px;outline:0;margin-right:8px}ino-table ino-table-header-cell .mdc-data-table__header-cell-wrapper{display:flex;justify-content:space-between;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-wrapper{padding-right:36px}ino-table ino-table-header-cell.ino-table-header-cell--sortable .mdc-data-table__header-cell-label{margin-right:4px;flex-grow:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-wrapper{cursor:pointer}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{overflow:hidden;text-overflow:ellipsis}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{--ino-icon-color:currentColor;--ino-icon-height:14px;--ino-icon-width:14px}ino-table ino-table-header-cell.ino-table-header-cell--searchable .mdc-data-table__header-cell-label{transform:translateX(0px);will-change:transform;transition:transform 0.15s ease-in-out}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__search-icon{transition:opacity 0.3s ease-in-out;will-change:opacity;width:0;opacity:0}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-wrapper,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-wrapper{color:#3d40f5;background:rgba(193, 193, 193, 0.32)}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .ino-table-header-cell__search-icon,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .ino-table-header-cell__search-icon{display:block;width:auto;opacity:1}ino-table ino-table-header-cell.ino-table-header-cell--searchable:hover .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable:focus-within .mdc-data-table__header-cell-label,ino-table ino-table-header-cell.ino-table-header-cell--searchable.ino-table-header-cell--active .mdc-data-table__header-cell-label{transform:translateX(6px)}ino-table ino-table-header-cell.ino-table-header-cell--searchable .ino-table-header-cell__popover-content{border-radius:inherit;box-shadow:0px 25px 50px -12px rgba(30, 33, 37, 0.25)}ino-table ino-table-header-cell.ino-table-header-cell--searched{border-bottom-color:#3d40f5}ino-table ino-table-header-cell ino-icon-button ino-icon{will-change:transform;transition:transform 150ms ease;transform:scale(1)}ino-table ino-table-header-cell .sort-asc ino-icon,ino-table ino-table-header-cell .sort-desc ino-icon{transform:scale(0.8)}ino-table ino-table-header-cell ino-icon-button{position:absolute;right:14px;top:7px;--ino-icon-button-size:24px;--ino-icon-button-icon-size:22px;border-left:6px solid transparent}ino-table ino-table-header-cell .ino-popover{text-transform:initial}"}}]);
//# sourceMappingURL=7599.70c8793f.iframe.bundle.js.map