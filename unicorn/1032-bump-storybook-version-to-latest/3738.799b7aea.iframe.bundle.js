/*! For license information please see 3738.799b7aea.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[3738],{"../elements/dist/esm/component-0de62b97.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>MDCFloatingLabel,a:()=>MDCLineRipple,b:()=>MDCNotchedOutline});var _tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../elements/dist/esm/tslib.es6-973a6cc3.js"),_component_606576f6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../elements/dist/esm/component-606576f6.js"),_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../elements/dist/esm/ponyfill-495ec32d.js"),cssClasses$2={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},MDCFloatingLabelFoundation=function(_super){function MDCFloatingLabelFoundation(adapter){var _this=_super.call(this,(0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.b)((0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.b)({},MDCFloatingLabelFoundation.defaultAdapter),adapter))||this;return _this.shakeAnimationEndHandler=function(){_this.handleShakeAnimationEnd()},_this}return(0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.a)(MDCFloatingLabelFoundation,_super),Object.defineProperty(MDCFloatingLabelFoundation,"cssClasses",{get:function(){return cssClasses$2},enumerable:!1,configurable:!0}),Object.defineProperty(MDCFloatingLabelFoundation,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),MDCFloatingLabelFoundation.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},MDCFloatingLabelFoundation.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},MDCFloatingLabelFoundation.prototype.getWidth=function(){return this.adapter.getWidth()},MDCFloatingLabelFoundation.prototype.shake=function(shouldShake){var LABEL_SHAKE=MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;shouldShake?this.adapter.addClass(LABEL_SHAKE):this.adapter.removeClass(LABEL_SHAKE)},MDCFloatingLabelFoundation.prototype.float=function(shouldFloat){var _a=MDCFloatingLabelFoundation.cssClasses,LABEL_FLOAT_ABOVE=_a.LABEL_FLOAT_ABOVE,LABEL_SHAKE=_a.LABEL_SHAKE;shouldFloat?this.adapter.addClass(LABEL_FLOAT_ABOVE):(this.adapter.removeClass(LABEL_FLOAT_ABOVE),this.adapter.removeClass(LABEL_SHAKE))},MDCFloatingLabelFoundation.prototype.setRequired=function(isRequired){var LABEL_REQUIRED=MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;isRequired?this.adapter.addClass(LABEL_REQUIRED):this.adapter.removeClass(LABEL_REQUIRED)},MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd=function(){var LABEL_SHAKE=MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;this.adapter.removeClass(LABEL_SHAKE)},MDCFloatingLabelFoundation}(_component_606576f6_js__WEBPACK_IMPORTED_MODULE_1__.M),MDCFloatingLabel=function(_super){function MDCFloatingLabel(){return null!==_super&&_super.apply(this,arguments)||this}return(0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.a)(MDCFloatingLabel,_super),MDCFloatingLabel.attachTo=function(root){return new MDCFloatingLabel(root)},MDCFloatingLabel.prototype.shake=function(shouldShake){this.foundation.shake(shouldShake)},MDCFloatingLabel.prototype.float=function(shouldFloat){this.foundation.float(shouldFloat)},MDCFloatingLabel.prototype.setRequired=function(isRequired){this.foundation.setRequired(isRequired)},MDCFloatingLabel.prototype.getWidth=function(){return this.foundation.getWidth()},MDCFloatingLabel.prototype.getDefaultFoundation=function(){var _this=this;return new MDCFloatingLabelFoundation({addClass:function(className){return _this.root.classList.add(className)},removeClass:function(className){return _this.root.classList.remove(className)},getWidth:function(){return(0,_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_2__.e)(_this.root)},registerInteractionHandler:function(evtType,handler){return _this.listen(evtType,handler)},deregisterInteractionHandler:function(evtType,handler){return _this.unlisten(evtType,handler)}})},MDCFloatingLabel}(_component_606576f6_js__WEBPACK_IMPORTED_MODULE_1__.a),cssClasses$1={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},MDCLineRippleFoundation=function(_super){function MDCLineRippleFoundation(adapter){var _this=_super.call(this,(0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.b)((0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.b)({},MDCLineRippleFoundation.defaultAdapter),adapter))||this;return _this.transitionEndHandler=function(evt){_this.handleTransitionEnd(evt)},_this}return(0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.a)(MDCLineRippleFoundation,_super),Object.defineProperty(MDCLineRippleFoundation,"cssClasses",{get:function(){return cssClasses$1},enumerable:!1,configurable:!0}),Object.defineProperty(MDCLineRippleFoundation,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),MDCLineRippleFoundation.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},MDCLineRippleFoundation.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},MDCLineRippleFoundation.prototype.activate=function(){this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(cssClasses$1.LINE_RIPPLE_ACTIVE)},MDCLineRippleFoundation.prototype.setRippleCenter=function(xCoordinate){this.adapter.setStyle("transform-origin",xCoordinate+"px center")},MDCLineRippleFoundation.prototype.deactivate=function(){this.adapter.addClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING)},MDCLineRippleFoundation.prototype.handleTransitionEnd=function(evt){var isDeactivating=this.adapter.hasClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);"opacity"===evt.propertyName&&isDeactivating&&(this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING))},MDCLineRippleFoundation}(_component_606576f6_js__WEBPACK_IMPORTED_MODULE_1__.M),MDCLineRipple=function(_super){function MDCLineRipple(){return null!==_super&&_super.apply(this,arguments)||this}return(0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.a)(MDCLineRipple,_super),MDCLineRipple.attachTo=function(root){return new MDCLineRipple(root)},MDCLineRipple.prototype.activate=function(){this.foundation.activate()},MDCLineRipple.prototype.deactivate=function(){this.foundation.deactivate()},MDCLineRipple.prototype.setRippleCenter=function(xCoordinate){this.foundation.setRippleCenter(xCoordinate)},MDCLineRipple.prototype.getDefaultFoundation=function(){var _this=this;return new MDCLineRippleFoundation({addClass:function(className){return _this.root.classList.add(className)},removeClass:function(className){return _this.root.classList.remove(className)},hasClass:function(className){return _this.root.classList.contains(className)},setStyle:function(propertyName,value){return _this.root.style.setProperty(propertyName,value)},registerEventHandler:function(evtType,handler){return _this.listen(evtType,handler)},deregisterEventHandler:function(evtType,handler){return _this.unlisten(evtType,handler)}})},MDCLineRipple}(_component_606576f6_js__WEBPACK_IMPORTED_MODULE_1__.a),strings={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},numbers={NOTCH_ELEMENT_PADDING:8},cssClasses={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},MDCNotchedOutlineFoundation=function(_super){function MDCNotchedOutlineFoundation(adapter){return _super.call(this,(0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.b)((0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.b)({},MDCNotchedOutlineFoundation.defaultAdapter),adapter))||this}return(0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.a)(MDCNotchedOutlineFoundation,_super),Object.defineProperty(MDCNotchedOutlineFoundation,"strings",{get:function(){return strings},enumerable:!1,configurable:!0}),Object.defineProperty(MDCNotchedOutlineFoundation,"cssClasses",{get:function(){return cssClasses},enumerable:!1,configurable:!0}),Object.defineProperty(MDCNotchedOutlineFoundation,"numbers",{get:function(){return numbers},enumerable:!1,configurable:!0}),Object.defineProperty(MDCNotchedOutlineFoundation,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),MDCNotchedOutlineFoundation.prototype.notch=function(notchWidth){var OUTLINE_NOTCHED=MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;notchWidth>0&&(notchWidth+=numbers.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(notchWidth),this.adapter.addClass(OUTLINE_NOTCHED)},MDCNotchedOutlineFoundation.prototype.closeNotch=function(){var OUTLINE_NOTCHED=MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(OUTLINE_NOTCHED),this.adapter.removeNotchWidthProperty()},MDCNotchedOutlineFoundation}(_component_606576f6_js__WEBPACK_IMPORTED_MODULE_1__.M),MDCNotchedOutline=function(_super){function MDCNotchedOutline(){return null!==_super&&_super.apply(this,arguments)||this}return(0,_tslib_es6_973a6cc3_js__WEBPACK_IMPORTED_MODULE_0__.a)(MDCNotchedOutline,_super),MDCNotchedOutline.attachTo=function(root){return new MDCNotchedOutline(root)},MDCNotchedOutline.prototype.initialSyncWithDOM=function(){this.notchElement=this.root.querySelector(strings.NOTCH_ELEMENT_SELECTOR);var label=this.root.querySelector("."+MDCFloatingLabelFoundation.cssClasses.ROOT);label?(label.style.transitionDuration="0s",this.root.classList.add(cssClasses.OUTLINE_UPGRADED),requestAnimationFrame((function(){label.style.transitionDuration=""}))):this.root.classList.add(cssClasses.NO_LABEL)},MDCNotchedOutline.prototype.notch=function(notchWidth){this.foundation.notch(notchWidth)},MDCNotchedOutline.prototype.closeNotch=function(){this.foundation.closeNotch()},MDCNotchedOutline.prototype.getDefaultFoundation=function(){var _this=this;return new MDCNotchedOutlineFoundation({addClass:function(className){return _this.root.classList.add(className)},removeClass:function(className){return _this.root.classList.remove(className)},setNotchWidthProperty:function(width){_this.notchElement.style.setProperty("width",width+"px")},removeNotchWidthProperty:function(){_this.notchElement.style.removeProperty("width")}})},MDCNotchedOutline}(_component_606576f6_js__WEBPACK_IMPORTED_MODULE_1__.a)},"../elements/dist/esm/component-utils-02a98646.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function generateUniqueId(){return"_"+Math.random().toString(36).substr(2,9)}function getSlotContent(el,slotName){return el.querySelector(`[slot="${slotName}"]`)}function hasSlotContent(el,slotName){var _a;return slotName?el.querySelectorAll(`[slot="${slotName}"]`).length>0:0===(null===(_a=el.querySelector("slot"))||void 0===_a?void 0:_a.assignedElements().length)}function focusIfExists(el){var _a;null===(_a=el.querySelector("[data-ino-focus]"))||void 0===_a||_a.focus()}function preventEvent(event){event.stopPropagation(),event.preventDefault()}__webpack_require__.d(__webpack_exports__,{a:()=>getSlotContent,f:()=>focusIfExists,g:()=>generateUniqueId,h:()=>hasSlotContent,p:()=>preventEvent})}}]);