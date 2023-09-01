"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4988],{89:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return commonjsGlobal},c:function(){return createCommonjsModule},g:function(){return getDefaultExportFromCjs}});/*!
 * Crafted with ❤ by inovex GmbH
 */ var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},2546:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:function(){return MDCTextField},a:function(){return MDCTextFieldHelperText},b:function(){return MDCTextFieldIcon}});var _tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9138),_component_f8e9fab9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5758),_component_5c60f27e_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(616),_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4218),_component_22010530_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),cssClasses$3={ROOT:"mdc-text-field-character-counter"},strings$3={ROOT_SELECTOR:"."+cssClasses$3.ROOT},MDCTextFieldCharacterCounterFoundation=function(_super){function MDCTextFieldCharacterCounterFoundation(adapter){return _super.call(this,(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)((0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)({},MDCTextFieldCharacterCounterFoundation.defaultAdapter),adapter))||this}return(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__._)(MDCTextFieldCharacterCounterFoundation,_super),Object.defineProperty(MDCTextFieldCharacterCounterFoundation,"cssClasses",{get:function(){return cssClasses$3},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldCharacterCounterFoundation,"strings",{get:function(){return strings$3},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldCharacterCounterFoundation,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue=function(currentLength,maxLength){currentLength=Math.min(currentLength,maxLength),this.adapter.setContent(currentLength+" / "+maxLength)},MDCTextFieldCharacterCounterFoundation}(_component_f8e9fab9_js__WEBPACK_IMPORTED_MODULE_0__.M),MDCTextFieldCharacterCounter=function(_super){function MDCTextFieldCharacterCounter(){return null!==_super&&_super.apply(this,arguments)||this}return(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__._)(MDCTextFieldCharacterCounter,_super),MDCTextFieldCharacterCounter.attachTo=function(root){return new MDCTextFieldCharacterCounter(root)},Object.defineProperty(MDCTextFieldCharacterCounter.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),MDCTextFieldCharacterCounter.prototype.getDefaultFoundation=function(){var _this=this;return new MDCTextFieldCharacterCounterFoundation({setContent:function(content){_this.root.textContent=content}})},MDCTextFieldCharacterCounter}(_component_f8e9fab9_js__WEBPACK_IMPORTED_MODULE_0__.a),strings$2={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},cssClasses$2={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},numbers={LABEL_SCALE:.75},VALIDATION_ATTR_WHITELIST=["pattern","min","max","required","step","minlength","maxlength"],ALWAYS_FLOAT_TYPES=["color","date","datetime-local","month","range","time","week"],POINTERDOWN_EVENTS=["mousedown","touchstart"],INTERACTION_EVENTS$1=["click","keydown"],MDCTextFieldFoundation=function(_super){function MDCTextFieldFoundation(adapter,foundationMap){void 0===foundationMap&&(foundationMap={});var _this=_super.call(this,(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)((0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)({},MDCTextFieldFoundation.defaultAdapter),adapter))||this;return _this.isFocused=!1,_this.receivedUserInput=!1,_this.valid=!0,_this.useNativeValidation=!0,_this.validateOnValueChange=!0,_this.helperText=foundationMap.helperText,_this.characterCounter=foundationMap.characterCounter,_this.leadingIcon=foundationMap.leadingIcon,_this.trailingIcon=foundationMap.trailingIcon,_this.inputFocusHandler=function(){_this.activateFocus()},_this.inputBlurHandler=function(){_this.deactivateFocus()},_this.inputInputHandler=function(){_this.handleInput()},_this.setPointerXOffset=function(evt){_this.setTransformOrigin(evt)},_this.textFieldInteractionHandler=function(){_this.handleTextFieldInteraction()},_this.validationAttributeChangeHandler=function(attributesList){_this.handleValidationAttributeChange(attributesList)},_this}return(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__._)(MDCTextFieldFoundation,_super),Object.defineProperty(MDCTextFieldFoundation,"cssClasses",{get:function(){return cssClasses$2},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldFoundation,"strings",{get:function(){return strings$2},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldFoundation,"numbers",{get:function(){return numbers},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldFoundation.prototype,"shouldAlwaysFloat",{get:function(){var type=this.getNativeInput().type;return ALWAYS_FLOAT_TYPES.indexOf(type)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldFoundation.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldFoundation.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldFoundation,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),MDCTextFieldFoundation.prototype.init=function(){var e_1,_a,e_2,_b;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var POINTERDOWN_EVENTS_1=(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.b)(POINTERDOWN_EVENTS),POINTERDOWN_EVENTS_1_1=POINTERDOWN_EVENTS_1.next();!POINTERDOWN_EVENTS_1_1.done;POINTERDOWN_EVENTS_1_1=POINTERDOWN_EVENTS_1.next()){var evtType=POINTERDOWN_EVENTS_1_1.value;this.adapter.registerInputInteractionHandler(evtType,this.setPointerXOffset)}}catch(e_1_1){e_1={error:e_1_1}}finally{try{POINTERDOWN_EVENTS_1_1&&!POINTERDOWN_EVENTS_1_1.done&&(_a=POINTERDOWN_EVENTS_1.return)&&_a.call(POINTERDOWN_EVENTS_1)}finally{if(e_1)throw e_1.error}}try{for(var INTERACTION_EVENTS_1=(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.b)(INTERACTION_EVENTS$1),INTERACTION_EVENTS_1_1=INTERACTION_EVENTS_1.next();!INTERACTION_EVENTS_1_1.done;INTERACTION_EVENTS_1_1=INTERACTION_EVENTS_1.next()){var evtType=INTERACTION_EVENTS_1_1.value;this.adapter.registerTextFieldInteractionHandler(evtType,this.textFieldInteractionHandler)}}catch(e_2_1){e_2={error:e_2_1}}finally{try{INTERACTION_EVENTS_1_1&&!INTERACTION_EVENTS_1_1.done&&(_b=INTERACTION_EVENTS_1.return)&&_b.call(INTERACTION_EVENTS_1)}finally{if(e_2)throw e_2.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},MDCTextFieldFoundation.prototype.destroy=function(){var e_3,_a,e_4,_b;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var POINTERDOWN_EVENTS_2=(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.b)(POINTERDOWN_EVENTS),POINTERDOWN_EVENTS_2_1=POINTERDOWN_EVENTS_2.next();!POINTERDOWN_EVENTS_2_1.done;POINTERDOWN_EVENTS_2_1=POINTERDOWN_EVENTS_2.next()){var evtType=POINTERDOWN_EVENTS_2_1.value;this.adapter.deregisterInputInteractionHandler(evtType,this.setPointerXOffset)}}catch(e_3_1){e_3={error:e_3_1}}finally{try{POINTERDOWN_EVENTS_2_1&&!POINTERDOWN_EVENTS_2_1.done&&(_a=POINTERDOWN_EVENTS_2.return)&&_a.call(POINTERDOWN_EVENTS_2)}finally{if(e_3)throw e_3.error}}try{for(var INTERACTION_EVENTS_2=(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.b)(INTERACTION_EVENTS$1),INTERACTION_EVENTS_2_1=INTERACTION_EVENTS_2.next();!INTERACTION_EVENTS_2_1.done;INTERACTION_EVENTS_2_1=INTERACTION_EVENTS_2.next()){var evtType=INTERACTION_EVENTS_2_1.value;this.adapter.deregisterTextFieldInteractionHandler(evtType,this.textFieldInteractionHandler)}}catch(e_4_1){e_4={error:e_4_1}}finally{try{INTERACTION_EVENTS_2_1&&!INTERACTION_EVENTS_2_1.done&&(_b=INTERACTION_EVENTS_2.return)&&_b.call(INTERACTION_EVENTS_2)}finally{if(e_4)throw e_4.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},MDCTextFieldFoundation.prototype.handleTextFieldInteraction=function(){var nativeInput=this.adapter.getNativeInput();nativeInput&&nativeInput.disabled||(this.receivedUserInput=!0)},MDCTextFieldFoundation.prototype.handleValidationAttributeChange=function(attributesList){var _this=this;attributesList.some(function(attributeName){return VALIDATION_ATTR_WHITELIST.indexOf(attributeName)>-1&&(_this.styleValidity(!0),_this.adapter.setLabelRequired(_this.getNativeInput().required),!0)}),attributesList.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},MDCTextFieldFoundation.prototype.notchOutline=function(openNotch){if(this.adapter.hasOutline()&&this.adapter.hasLabel()){if(openNotch){var labelWidth=this.adapter.getLabelWidth()*numbers.LABEL_SCALE;this.adapter.notchOutline(labelWidth)}else this.adapter.closeOutline()}},MDCTextFieldFoundation.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},MDCTextFieldFoundation.prototype.setTransformOrigin=function(evt){if(!(this.isDisabled()||this.adapter.hasOutline())){var touches=evt.touches,targetEvent=touches?touches[0]:evt,targetClientRect=targetEvent.target.getBoundingClientRect(),normalizedX=targetEvent.clientX-targetClientRect.left;this.adapter.setLineRippleTransformOrigin(normalizedX)}},MDCTextFieldFoundation.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},MDCTextFieldFoundation.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},MDCTextFieldFoundation.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var isValid=this.isValid();this.styleValidity(isValid),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},MDCTextFieldFoundation.prototype.getValue=function(){return this.getNativeInput().value},MDCTextFieldFoundation.prototype.setValue=function(value){if(this.getValue()!==value&&(this.getNativeInput().value=value),this.setcharacterCounter(value.length),this.validateOnValueChange){var isValid=this.isValid();this.styleValidity(isValid)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},MDCTextFieldFoundation.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},MDCTextFieldFoundation.prototype.setValid=function(isValid){this.valid=isValid,this.styleValidity(isValid);var shouldShake=!isValid&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(shouldShake)},MDCTextFieldFoundation.prototype.setValidateOnValueChange=function(shouldValidate){this.validateOnValueChange=shouldValidate},MDCTextFieldFoundation.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},MDCTextFieldFoundation.prototype.setUseNativeValidation=function(useNativeValidation){this.useNativeValidation=useNativeValidation},MDCTextFieldFoundation.prototype.isDisabled=function(){return this.getNativeInput().disabled},MDCTextFieldFoundation.prototype.setDisabled=function(disabled){this.getNativeInput().disabled=disabled,this.styleDisabled(disabled)},MDCTextFieldFoundation.prototype.setHelperTextContent=function(content){this.helperText&&this.helperText.setContent(content)},MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel=function(label){this.leadingIcon&&this.leadingIcon.setAriaLabel(label)},MDCTextFieldFoundation.prototype.setLeadingIconContent=function(content){this.leadingIcon&&this.leadingIcon.setContent(content)},MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel=function(label){this.trailingIcon&&this.trailingIcon.setAriaLabel(label)},MDCTextFieldFoundation.prototype.setTrailingIconContent=function(content){this.trailingIcon&&this.trailingIcon.setContent(content)},MDCTextFieldFoundation.prototype.setcharacterCounter=function(currentLength){if(this.characterCounter){var maxLength=this.getNativeInput().maxLength;if(-1===maxLength)throw Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(currentLength,maxLength)}},MDCTextFieldFoundation.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},MDCTextFieldFoundation.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},MDCTextFieldFoundation.prototype.styleValidity=function(isValid){var INVALID=MDCTextFieldFoundation.cssClasses.INVALID;if(isValid?this.adapter.removeClass(INVALID):this.adapter.addClass(INVALID),this.helperText){if(this.helperText.setValidity(isValid),!this.helperText.isValidation())return;var helperTextVisible=this.helperText.isVisible(),helperTextId=this.helperText.getId();helperTextVisible&&helperTextId?this.adapter.setInputAttr(strings$2.ARIA_DESCRIBEDBY,helperTextId):this.adapter.removeInputAttr(strings$2.ARIA_DESCRIBEDBY)}},MDCTextFieldFoundation.prototype.styleFocused=function(isFocused){var FOCUSED=MDCTextFieldFoundation.cssClasses.FOCUSED;isFocused?this.adapter.addClass(FOCUSED):this.adapter.removeClass(FOCUSED)},MDCTextFieldFoundation.prototype.styleDisabled=function(isDisabled){var _a=MDCTextFieldFoundation.cssClasses,DISABLED=_a.DISABLED,INVALID=_a.INVALID;isDisabled?(this.adapter.addClass(DISABLED),this.adapter.removeClass(INVALID)):this.adapter.removeClass(DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(isDisabled),this.trailingIcon&&this.trailingIcon.setDisabled(isDisabled)},MDCTextFieldFoundation.prototype.styleFloating=function(isFloating){var LABEL_FLOATING=MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;isFloating?this.adapter.addClass(LABEL_FLOATING):this.adapter.removeClass(LABEL_FLOATING)},MDCTextFieldFoundation.prototype.getNativeInput=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},MDCTextFieldFoundation}(_component_f8e9fab9_js__WEBPACK_IMPORTED_MODULE_0__.M),cssClasses$1={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},strings$1={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+cssClasses$1.ROOT},MDCTextFieldHelperTextFoundation=function(_super){function MDCTextFieldHelperTextFoundation(adapter){return _super.call(this,(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)((0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)({},MDCTextFieldHelperTextFoundation.defaultAdapter),adapter))||this}return(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__._)(MDCTextFieldHelperTextFoundation,_super),Object.defineProperty(MDCTextFieldHelperTextFoundation,"cssClasses",{get:function(){return cssClasses$1},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldHelperTextFoundation,"strings",{get:function(){return strings$1},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldHelperTextFoundation,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),MDCTextFieldHelperTextFoundation.prototype.getId=function(){return this.adapter.getAttr("id")},MDCTextFieldHelperTextFoundation.prototype.isVisible=function(){return"true"!==this.adapter.getAttr(strings$1.ARIA_HIDDEN)},MDCTextFieldHelperTextFoundation.prototype.setContent=function(content){this.adapter.setContent(content)},MDCTextFieldHelperTextFoundation.prototype.isPersistent=function(){return this.adapter.hasClass(cssClasses$1.HELPER_TEXT_PERSISTENT)},MDCTextFieldHelperTextFoundation.prototype.setPersistent=function(isPersistent){isPersistent?this.adapter.addClass(cssClasses$1.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(cssClasses$1.HELPER_TEXT_PERSISTENT)},MDCTextFieldHelperTextFoundation.prototype.isValidation=function(){return this.adapter.hasClass(cssClasses$1.HELPER_TEXT_VALIDATION_MSG)},MDCTextFieldHelperTextFoundation.prototype.setValidation=function(isValidation){isValidation?this.adapter.addClass(cssClasses$1.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(cssClasses$1.HELPER_TEXT_VALIDATION_MSG)},MDCTextFieldHelperTextFoundation.prototype.showToScreenReader=function(){this.adapter.removeAttr(strings$1.ARIA_HIDDEN)},MDCTextFieldHelperTextFoundation.prototype.setValidity=function(inputIsValid){var helperTextIsPersistent=this.adapter.hasClass(cssClasses$1.HELPER_TEXT_PERSISTENT),validationMsgNeedsDisplay=this.adapter.hasClass(cssClasses$1.HELPER_TEXT_VALIDATION_MSG)&&!inputIsValid;validationMsgNeedsDisplay?(this.showToScreenReader(),"alert"===this.adapter.getAttr(strings$1.ROLE)?this.refreshAlertRole():this.adapter.setAttr(strings$1.ROLE,"alert")):this.adapter.removeAttr(strings$1.ROLE),helperTextIsPersistent||validationMsgNeedsDisplay||this.hide()},MDCTextFieldHelperTextFoundation.prototype.hide=function(){this.adapter.setAttr(strings$1.ARIA_HIDDEN,"true")},MDCTextFieldHelperTextFoundation.prototype.refreshAlertRole=function(){var _this=this;this.adapter.removeAttr(strings$1.ROLE),requestAnimationFrame(function(){_this.adapter.setAttr(strings$1.ROLE,"alert")})},MDCTextFieldHelperTextFoundation}(_component_f8e9fab9_js__WEBPACK_IMPORTED_MODULE_0__.M),MDCTextFieldHelperText=function(_super){function MDCTextFieldHelperText(){return null!==_super&&_super.apply(this,arguments)||this}return(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__._)(MDCTextFieldHelperText,_super),MDCTextFieldHelperText.attachTo=function(root){return new MDCTextFieldHelperText(root)},Object.defineProperty(MDCTextFieldHelperText.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),MDCTextFieldHelperText.prototype.getDefaultFoundation=function(){var _this=this;return new MDCTextFieldHelperTextFoundation({addClass:function(className){return _this.root.classList.add(className)},removeClass:function(className){return _this.root.classList.remove(className)},hasClass:function(className){return _this.root.classList.contains(className)},getAttr:function(attr){return _this.root.getAttribute(attr)},setAttr:function(attr,value){return _this.root.setAttribute(attr,value)},removeAttr:function(attr){return _this.root.removeAttribute(attr)},setContent:function(content){_this.root.textContent=content}})},MDCTextFieldHelperText}(_component_f8e9fab9_js__WEBPACK_IMPORTED_MODULE_0__.a),strings={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},cssClasses={ROOT:"mdc-text-field__icon"},INTERACTION_EVENTS=["click","keydown"],MDCTextFieldIconFoundation=function(_super){function MDCTextFieldIconFoundation(adapter){var _this=_super.call(this,(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)((0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)({},MDCTextFieldIconFoundation.defaultAdapter),adapter))||this;return _this.savedTabIndex=null,_this.interactionHandler=function(evt){_this.handleInteraction(evt)},_this}return(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__._)(MDCTextFieldIconFoundation,_super),Object.defineProperty(MDCTextFieldIconFoundation,"strings",{get:function(){return strings},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldIconFoundation,"cssClasses",{get:function(){return cssClasses},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextFieldIconFoundation,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),MDCTextFieldIconFoundation.prototype.init=function(){var e_1,_a;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var INTERACTION_EVENTS_1=(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.b)(INTERACTION_EVENTS),INTERACTION_EVENTS_1_1=INTERACTION_EVENTS_1.next();!INTERACTION_EVENTS_1_1.done;INTERACTION_EVENTS_1_1=INTERACTION_EVENTS_1.next()){var evtType=INTERACTION_EVENTS_1_1.value;this.adapter.registerInteractionHandler(evtType,this.interactionHandler)}}catch(e_1_1){e_1={error:e_1_1}}finally{try{INTERACTION_EVENTS_1_1&&!INTERACTION_EVENTS_1_1.done&&(_a=INTERACTION_EVENTS_1.return)&&_a.call(INTERACTION_EVENTS_1)}finally{if(e_1)throw e_1.error}}},MDCTextFieldIconFoundation.prototype.destroy=function(){var e_2,_a;try{for(var INTERACTION_EVENTS_2=(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.b)(INTERACTION_EVENTS),INTERACTION_EVENTS_2_1=INTERACTION_EVENTS_2.next();!INTERACTION_EVENTS_2_1.done;INTERACTION_EVENTS_2_1=INTERACTION_EVENTS_2.next()){var evtType=INTERACTION_EVENTS_2_1.value;this.adapter.deregisterInteractionHandler(evtType,this.interactionHandler)}}catch(e_2_1){e_2={error:e_2_1}}finally{try{INTERACTION_EVENTS_2_1&&!INTERACTION_EVENTS_2_1.done&&(_a=INTERACTION_EVENTS_2.return)&&_a.call(INTERACTION_EVENTS_2)}finally{if(e_2)throw e_2.error}}},MDCTextFieldIconFoundation.prototype.setDisabled=function(disabled){this.savedTabIndex&&(disabled?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",strings.ICON_ROLE)))},MDCTextFieldIconFoundation.prototype.setAriaLabel=function(label){this.adapter.setAttr("aria-label",label)},MDCTextFieldIconFoundation.prototype.setContent=function(content){this.adapter.setContent(content)},MDCTextFieldIconFoundation.prototype.handleInteraction=function(evt){var isEnterKey="Enter"===evt.key||13===evt.keyCode;("click"===evt.type||isEnterKey)&&(evt.preventDefault(),this.adapter.notifyIconAction())},MDCTextFieldIconFoundation}(_component_f8e9fab9_js__WEBPACK_IMPORTED_MODULE_0__.M),MDCTextFieldIcon=function(_super){function MDCTextFieldIcon(){return null!==_super&&_super.apply(this,arguments)||this}return(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__._)(MDCTextFieldIcon,_super),MDCTextFieldIcon.attachTo=function(root){return new MDCTextFieldIcon(root)},Object.defineProperty(MDCTextFieldIcon.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),MDCTextFieldIcon.prototype.getDefaultFoundation=function(){var _this=this;return new MDCTextFieldIconFoundation({getAttr:function(attr){return _this.root.getAttribute(attr)},setAttr:function(attr,value){return _this.root.setAttribute(attr,value)},removeAttr:function(attr){return _this.root.removeAttribute(attr)},setContent:function(content){_this.root.textContent=content},registerInteractionHandler:function(evtType,handler){return _this.listen(evtType,handler)},deregisterInteractionHandler:function(evtType,handler){return _this.unlisten(evtType,handler)},notifyIconAction:function(){return _this.emit(MDCTextFieldIconFoundation.strings.ICON_EVENT,{},!0)}})},MDCTextFieldIcon}(_component_f8e9fab9_js__WEBPACK_IMPORTED_MODULE_0__.a),MDCTextField=function(_super){function MDCTextField(){return null!==_super&&_super.apply(this,arguments)||this}return(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__._)(MDCTextField,_super),MDCTextField.attachTo=function(root){return new MDCTextField(root)},MDCTextField.prototype.initialize=function(rippleFactory,lineRippleFactory,helperTextFactory,characterCounterFactory,iconFactory,labelFactory,outlineFactory){void 0===rippleFactory&&(rippleFactory=function(el,foundation){return new _component_5c60f27e_js__WEBPACK_IMPORTED_MODULE_1__.M(el,foundation)}),void 0===lineRippleFactory&&(lineRippleFactory=function(el){return new _component_22010530_js__WEBPACK_IMPORTED_MODULE_2__.a(el)}),void 0===helperTextFactory&&(helperTextFactory=function(el){return new MDCTextFieldHelperText(el)}),void 0===characterCounterFactory&&(characterCounterFactory=function(el){return new MDCTextFieldCharacterCounter(el)}),void 0===iconFactory&&(iconFactory=function(el){return new MDCTextFieldIcon(el)}),void 0===labelFactory&&(labelFactory=function(el){return new _component_22010530_js__WEBPACK_IMPORTED_MODULE_2__.M(el)}),void 0===outlineFactory&&(outlineFactory=function(el){return new _component_22010530_js__WEBPACK_IMPORTED_MODULE_2__.b(el)}),this.input=this.root.querySelector(strings$2.INPUT_SELECTOR);var labelElement=this.root.querySelector(strings$2.LABEL_SELECTOR);this.label=labelElement?labelFactory(labelElement):null;var lineRippleElement=this.root.querySelector(strings$2.LINE_RIPPLE_SELECTOR);this.lineRipple=lineRippleElement?lineRippleFactory(lineRippleElement):null;var outlineElement=this.root.querySelector(strings$2.OUTLINE_SELECTOR);this.outline=outlineElement?outlineFactory(outlineElement):null;var helperTextStrings=MDCTextFieldHelperTextFoundation.strings,nextElementSibling=this.root.nextElementSibling,hasHelperLine=nextElementSibling&&nextElementSibling.classList.contains(cssClasses$2.HELPER_LINE),helperTextEl=hasHelperLine&&nextElementSibling&&nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);this.helperText=helperTextEl?helperTextFactory(helperTextEl):null;var characterCounterStrings=MDCTextFieldCharacterCounterFoundation.strings,characterCounterEl=this.root.querySelector(characterCounterStrings.ROOT_SELECTOR);!characterCounterEl&&hasHelperLine&&nextElementSibling&&(characterCounterEl=nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR)),this.characterCounter=characterCounterEl?characterCounterFactory(characterCounterEl):null;var leadingIconEl=this.root.querySelector(strings$2.LEADING_ICON_SELECTOR);this.leadingIcon=leadingIconEl?iconFactory(leadingIconEl):null;var trailingIconEl=this.root.querySelector(strings$2.TRAILING_ICON_SELECTOR);this.trailingIcon=trailingIconEl?iconFactory(trailingIconEl):null,this.prefix=this.root.querySelector(strings$2.PREFIX_SELECTOR),this.suffix=this.root.querySelector(strings$2.SUFFIX_SELECTOR),this.ripple=this.createRipple(rippleFactory)},MDCTextField.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple&&this.lineRipple.destroy(),this.helperText&&this.helperText.destroy(),this.characterCounter&&this.characterCounter.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.trailingIcon&&this.trailingIcon.destroy(),this.label&&this.label.destroy(),this.outline&&this.outline.destroy(),_super.prototype.destroy.call(this)},MDCTextField.prototype.initialSyncWithDOM=function(){this.disabled=this.input.disabled},Object.defineProperty(MDCTextField.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(value){this.foundation.setValue(value)},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"disabled",{get:function(){return this.foundation.isDisabled()},set:function(disabled){this.foundation.setDisabled(disabled)},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(valid){this.foundation.setValid(valid)},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"required",{get:function(){return this.input.required},set:function(required){this.input.required=required},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"pattern",{get:function(){return this.input.pattern},set:function(pattern){this.input.pattern=pattern},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"minLength",{get:function(){return this.input.minLength},set:function(minLength){this.input.minLength=minLength},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"maxLength",{get:function(){return this.input.maxLength},set:function(maxLength){maxLength<0?this.input.removeAttribute("maxLength"):this.input.maxLength=maxLength},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"min",{get:function(){return this.input.min},set:function(min){this.input.min=min},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"max",{get:function(){return this.input.max},set:function(max){this.input.max=max},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"step",{get:function(){return this.input.step},set:function(step){this.input.step=step},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"helperTextContent",{set:function(content){this.foundation.setHelperTextContent(content)},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"leadingIconAriaLabel",{set:function(label){this.foundation.setLeadingIconAriaLabel(label)},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"leadingIconContent",{set:function(content){this.foundation.setLeadingIconContent(content)},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"trailingIconAriaLabel",{set:function(label){this.foundation.setTrailingIconAriaLabel(label)},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"trailingIconContent",{set:function(content){this.foundation.setTrailingIconContent(content)},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"useNativeValidation",{set:function(useNativeValidation){this.foundation.setUseNativeValidation(useNativeValidation)},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"prefixText",{get:function(){return this.prefix?this.prefix.textContent:null},set:function(prefixText){this.prefix&&(this.prefix.textContent=prefixText)},enumerable:!1,configurable:!0}),Object.defineProperty(MDCTextField.prototype,"suffixText",{get:function(){return this.suffix?this.suffix.textContent:null},set:function(suffixText){this.suffix&&(this.suffix.textContent=suffixText)},enumerable:!1,configurable:!0}),MDCTextField.prototype.focus=function(){this.input.focus()},MDCTextField.prototype.layout=function(){var openNotch=this.foundation.shouldFloat;this.foundation.notchOutline(openNotch)},MDCTextField.prototype.getDefaultFoundation=function(){var adapter=(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)((0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)((0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)((0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)((0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods());return new MDCTextFieldFoundation(adapter,this.getFoundationMap())},MDCTextField.prototype.getRootAdapterMethods=function(){var _this=this;return{addClass:function(className){return _this.root.classList.add(className)},removeClass:function(className){return _this.root.classList.remove(className)},hasClass:function(className){return _this.root.classList.contains(className)},registerTextFieldInteractionHandler:function(evtType,handler){_this.listen(evtType,handler)},deregisterTextFieldInteractionHandler:function(evtType,handler){_this.unlisten(evtType,handler)},registerValidationAttributeChangeHandler:function(handler){var observer=new MutationObserver(function(mutationsList){return handler(mutationsList.map(function(mutation){return mutation.attributeName}).filter(function(attributeName){return attributeName}))});return observer.observe(_this.input,{attributes:!0}),observer},deregisterValidationAttributeChangeHandler:function(observer){observer.disconnect()}}},MDCTextField.prototype.getInputAdapterMethods=function(){var _this=this;return{getNativeInput:function(){return _this.input},setInputAttr:function(attr,value){_this.input.setAttribute(attr,value)},removeInputAttr:function(attr){_this.input.removeAttribute(attr)},isFocused:function(){return document.activeElement===_this.input},registerInputInteractionHandler:function(evtType,handler){_this.input.addEventListener(evtType,handler,(0,_component_5c60f27e_js__WEBPACK_IMPORTED_MODULE_1__.a)())},deregisterInputInteractionHandler:function(evtType,handler){_this.input.removeEventListener(evtType,handler,(0,_component_5c60f27e_js__WEBPACK_IMPORTED_MODULE_1__.a)())}}},MDCTextField.prototype.getLabelAdapterMethods=function(){var _this=this;return{floatLabel:function(shouldFloat){_this.label&&_this.label.float(shouldFloat)},getLabelWidth:function(){return _this.label?_this.label.getWidth():0},hasLabel:function(){return Boolean(_this.label)},shakeLabel:function(shouldShake){_this.label&&_this.label.shake(shouldShake)},setLabelRequired:function(isRequired){_this.label&&_this.label.setRequired(isRequired)}}},MDCTextField.prototype.getLineRippleAdapterMethods=function(){var _this=this;return{activateLineRipple:function(){_this.lineRipple&&_this.lineRipple.activate()},deactivateLineRipple:function(){_this.lineRipple&&_this.lineRipple.deactivate()},setLineRippleTransformOrigin:function(normalizedX){_this.lineRipple&&_this.lineRipple.setRippleCenter(normalizedX)}}},MDCTextField.prototype.getOutlineAdapterMethods=function(){var _this=this;return{closeOutline:function(){_this.outline&&_this.outline.closeNotch()},hasOutline:function(){return Boolean(_this.outline)},notchOutline:function(labelWidth){_this.outline&&_this.outline.notch(labelWidth)}}},MDCTextField.prototype.getFoundationMap=function(){return{characterCounter:this.characterCounter?this.characterCounter.foundationForTextField:void 0,helperText:this.helperText?this.helperText.foundationForTextField:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForTextField:void 0,trailingIcon:this.trailingIcon?this.trailingIcon.foundationForTextField:void 0}},MDCTextField.prototype.createRipple=function(rippleFactory){var _this=this,isTextArea=this.root.classList.contains(cssClasses$2.TEXTAREA),isOutlined=this.root.classList.contains(cssClasses$2.OUTLINED);if(isTextArea||isOutlined)return null;var adapter=(0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)((0,_tslib_es6_799d2d3d_js__WEBPACK_IMPORTED_MODULE_3__.a)({},_component_5c60f27e_js__WEBPACK_IMPORTED_MODULE_1__.M.createAdapter(this)),{isSurfaceActive:function(){return(0,_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_4__.m)(_this.input,":active")},registerInteractionHandler:function(evtType,handler){_this.input.addEventListener(evtType,handler,(0,_component_5c60f27e_js__WEBPACK_IMPORTED_MODULE_1__.a)())},deregisterInteractionHandler:function(evtType,handler){_this.input.removeEventListener(evtType,handler,(0,_component_5c60f27e_js__WEBPACK_IMPORTED_MODULE_1__.a)())}});return rippleFactory(this.root,new _component_5c60f27e_js__WEBPACK_IMPORTED_MODULE_1__.b(adapter))},MDCTextField}(_component_f8e9fab9_js__WEBPACK_IMPORTED_MODULE_0__.a)},939:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return classnames}});/*!
 * Crafted with ❤ by inovex GmbH
 */ var classnames=(0,__webpack_require__(89).c)(function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()})}}]);