/*! For license information please see 9480.6caed33f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[9480],{"../elements/dist/esm/ino-tooltip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_tooltip:()=>Tooltip});__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../elements/dist/esm/index-dbb9ab19.js"),_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../elements/dist/esm/index-b7e5b0c5.js"),_tippy_esm_b9178e7b_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../elements/dist/esm/tippy.esm-b9178e7b.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Tooltip=function(){function Tooltip(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Tooltip),(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.colorScheme="primary",this.placement="auto",this.trigger="mouseenter focus",this.retrieveTarget=function(){return _this.for?document.getElementById(_this.for):_this.el.parentElement}}var _dispose,_create,_componentDidLoad,_getTippyInstance,_triggerChanged,_forChanged,_placementChanged;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Tooltip,[{key:"placementChanged",value:(_placementChanged=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,this.create();case 2:case"end":return _context.stop()}}),_callee,this)}))),function placementChanged(){return _placementChanged.apply(this,arguments)})},{key:"forChanged",value:(_forChanged=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,this.create();case 2:case"end":return _context2.stop()}}),_callee2,this)}))),function forChanged(){return _forChanged.apply(this,arguments)})},{key:"triggerChanged",value:(_triggerChanged=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(){return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,this.create();case 2:case"end":return _context3.stop()}}),_callee3,this)}))),function triggerChanged(){return _triggerChanged.apply(this,arguments)})},{key:"getTippyInstance",value:(_getTippyInstance=_asyncToGenerator(regeneratorRuntime.mark((function _callee4(){return regeneratorRuntime.wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return _context4.abrupt("return",this.tooltipInstance);case 1:case"end":return _context4.stop()}}),_callee4,this)}))),function getTippyInstance(){return _getTippyInstance.apply(this,arguments)})},{key:"componentDidLoad",value:(_componentDidLoad=_asyncToGenerator(regeneratorRuntime.mark((function _callee5(){return regeneratorRuntime.wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return _context5.next=2,this.create();case 2:case"end":return _context5.stop()}}),_callee5,this)}))),function componentDidLoad(){return _componentDidLoad.apply(this,arguments)})},{key:"create",value:(_create=_asyncToGenerator(regeneratorRuntime.mark((function _callee6(){var options;return regeneratorRuntime.wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:return _context6.next=2,this.dispose();case 2:if(this.target=this.retrieveTarget(),this.target){_context6.next=7;break}return _context6.next=6,new Promise((function(resolve){return setTimeout(resolve,1e3)}));case 6:this.target=this.retrieveTarget();case 7:if(this.target){_context6.next=9;break}throw new Error("Target with the ID '"+this.for+"' could not be found in this document.");case 9:options={content:this.el,duration:100,placement:this.placement,trigger:this.trigger},this.tooltipInstance=(0,_tippy_esm_b9178e7b_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.target,options),this.target.addEventListener("keyup",this.onEnterTarget.bind(this)),this.target.addEventListener("blur",this.onLeaveTarget.bind(this),!0),this.trigger.includes("hover")&&this.target.addEventListener("mouseleave",this.onLeaveTarget.bind(this));case 14:case"end":return _context6.stop()}}),_callee6,this)}))),function create(){return _create.apply(this,arguments)})},{key:"dispose",value:(_dispose=_asyncToGenerator(regeneratorRuntime.mark((function _callee7(){return regeneratorRuntime.wrap((function _callee7$(_context7){for(;;)switch(_context7.prev=_context7.next){case 0:if(!this.tooltipInstance){_context7.next=6;break}return _context7.next=3,this.tooltipInstance.destroy();case 3:this.target.removeEventListener("keyup",this.onEnterTarget.bind(this)),this.target.removeEventListener("blur",this.onLeaveTarget.bind(this),!0),this.target.removeEventListener("mouseleave",this.onLeaveTarget.bind(this));case 6:case"end":return _context7.stop()}}),_callee7,this)}))),function dispose(){return _dispose.apply(this,arguments)})},{key:"onEnterTarget",value:function onEnterTarget(e){"Tab"!==e.code||this.trigger.includes("click")||this.tooltipInstance.show(),"Escape"===e.code&&this.tooltipInstance.hide()}},{key:"onLeaveTarget",value:function onLeaveTarget(){this.tooltipInstance.hide()}},{key:"render",value:function render(){var hostClasses=(0,_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_8__.c)("ino-tooltip--color-scheme-"+this.colorScheme);return(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:hostClasses},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"ino-tooltip__composer",role:"tooltip"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"ino-tooltip__inner"},this.label?this.label:(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",null))))}},{key:"el",get:function get(){return(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}],[{key:"watchers",get:function get(){return{placement:["placementChanged"],for:["forChanged"],trigger:["triggerChanged"]}}}]),Tooltip}();Tooltip.style="ino-tooltip .ino-tooltip__composer{font-size:0.8rem;text-align:center;letter-spacing:0;padding:4px 8px;border-radius:6px}ino-tooltip.ino-tooltip--color-scheme-primary .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}ino-tooltip.ino-tooltip--color-scheme-transparent .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}"}}]);
//# sourceMappingURL=9480.6caed33f.iframe.bundle.js.map