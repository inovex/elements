/*! For license information please see 4231.ac04ec70.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[4231],{"../elements/dist/esm/component-e50f7445.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>MDCFoundation,a:()=>MDCComponent});__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../elements/dist/esm/tslib.es6-6a05a97f.js"),MDCFoundation=function(){function MDCFoundation(adapter){void 0===adapter&&(adapter={}),this.adapter=adapter}return Object.defineProperty(MDCFoundation,"cssClasses",{get:function get(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(MDCFoundation,"strings",{get:function get(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(MDCFoundation,"numbers",{get:function get(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(MDCFoundation,"defaultAdapter",{get:function get(){return{}},enumerable:!1,configurable:!0}),MDCFoundation.prototype.init=function(){},MDCFoundation.prototype.destroy=function(){},MDCFoundation}(),MDCComponent=function(){function MDCComponent(root,foundation){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];this.root=root,this.initialize.apply(this,(0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_1__.c)([],(0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_1__.d)(args))),this.foundation=void 0===foundation?this.getDefaultFoundation():foundation,this.foundation.init(),this.initialSyncWithDOM()}return MDCComponent.attachTo=function(root){return new MDCComponent(root,new MDCFoundation({}))},MDCComponent.prototype.initialize=function(){for(var _args=[],_i=0;_i<arguments.length;_i++)_args[_i]=arguments[_i]},MDCComponent.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},MDCComponent.prototype.initialSyncWithDOM=function(){},MDCComponent.prototype.destroy=function(){this.foundation.destroy()},MDCComponent.prototype.listen=function(evtType,handler,options){this.root.addEventListener(evtType,handler,options)},MDCComponent.prototype.unlisten=function(evtType,handler,options){this.root.removeEventListener(evtType,handler,options)},MDCComponent.prototype.emit=function(evtType,evtData,shouldBubble){var evt;void 0===shouldBubble&&(shouldBubble=!1),"function"==typeof CustomEvent?evt=new CustomEvent(evtType,{bubbles:shouldBubble,detail:evtData}):(evt=document.createEvent("CustomEvent")).initCustomEvent(evtType,shouldBubble,!1,evtData),this.root.dispatchEvent(evt)},MDCComponent}()},"../elements/dist/esm/component-eb32b848.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>MDCRipple,a:()=>applyPassive,b:()=>MDCRippleFoundation});__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.some.js"),__webpack_require__("../../node_modules/core-js/modules/web.timers.js");var _tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../elements/dist/esm/tslib.es6-6a05a97f.js"),_component_e50f7445_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../elements/dist/esm/component-e50f7445.js"),_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../elements/dist/esm/ponyfill-495ec32d.js");function applyPassive(globalObj){return void 0===globalObj&&(globalObj=window),!!function supportsPassiveOption(globalObj){void 0===globalObj&&(globalObj=window);var passiveSupported=!1;try{var options={get passive(){return passiveSupported=!0,!1}},handler=function handler(){};globalObj.document.addEventListener("test",handler,options),globalObj.document.removeEventListener("test",handler,options)}catch(err){passiveSupported=!1}return passiveSupported}(globalObj)&&{passive:!0}}var supportsCssVariables_,cssClasses={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},strings={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},numbers={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};var ACTIVATION_EVENT_TYPES=["touchstart","pointerdown","mousedown","keydown"],POINTER_DEACTIVATION_EVENT_TYPES=["touchend","pointerup","mouseup","contextmenu"],activatedTargets=[],MDCRippleFoundation=function(_super){function MDCRippleFoundation(adapter){var _this=_super.call(this,(0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_7__.a)((0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_7__.a)({},MDCRippleFoundation.defaultAdapter),adapter))||this;return _this.activationAnimationHasEnded=!1,_this.activationTimer=0,_this.fgDeactivationRemovalTimer=0,_this.fgScale="0",_this.frame={width:0,height:0},_this.initialSize=0,_this.layoutFrame=0,_this.maxRadius=0,_this.unboundedCoords={left:0,top:0},_this.activationState=_this.defaultActivationState(),_this.activationTimerCallback=function(){_this.activationAnimationHasEnded=!0,_this.runDeactivationUXLogicIfReady()},_this.activateHandler=function(e){_this.activateImpl(e)},_this.deactivateHandler=function(){_this.deactivateImpl()},_this.focusHandler=function(){_this.handleFocus()},_this.blurHandler=function(){_this.handleBlur()},_this.resizeHandler=function(){_this.layout()},_this}return(0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_7__._)(MDCRippleFoundation,_super),Object.defineProperty(MDCRippleFoundation,"cssClasses",{get:function get(){return cssClasses},enumerable:!1,configurable:!0}),Object.defineProperty(MDCRippleFoundation,"strings",{get:function get(){return strings},enumerable:!1,configurable:!0}),Object.defineProperty(MDCRippleFoundation,"numbers",{get:function get(){return numbers},enumerable:!1,configurable:!0}),Object.defineProperty(MDCRippleFoundation,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},browserSupportsCssVars:function browserSupportsCssVars(){return!0},computeBoundingRect:function computeBoundingRect(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function containsEventTarget(){return!0},deregisterDocumentInteractionHandler:function deregisterDocumentInteractionHandler(){},deregisterInteractionHandler:function deregisterInteractionHandler(){},deregisterResizeHandler:function deregisterResizeHandler(){},getWindowPageOffset:function getWindowPageOffset(){return{x:0,y:0}},isSurfaceActive:function isSurfaceActive(){return!0},isSurfaceDisabled:function isSurfaceDisabled(){return!0},isUnbounded:function isUnbounded(){return!0},registerDocumentInteractionHandler:function registerDocumentInteractionHandler(){},registerInteractionHandler:function registerInteractionHandler(){},registerResizeHandler:function registerResizeHandler(){},removeClass:function removeClass(){},updateCssVariable:function updateCssVariable(){}}},enumerable:!1,configurable:!0}),MDCRippleFoundation.prototype.init=function(){var _this=this,supportsPressRipple=this.supportsPressRipple();if(this.registerRootHandlers(supportsPressRipple),supportsPressRipple){var _a=MDCRippleFoundation.cssClasses,ROOT_1=_a.ROOT,UNBOUNDED_1=_a.UNBOUNDED;requestAnimationFrame((function(){_this.adapter.addClass(ROOT_1),_this.adapter.isUnbounded()&&(_this.adapter.addClass(UNBOUNDED_1),_this.layoutInternal())}))}},MDCRippleFoundation.prototype.destroy=function(){var _this=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION));var _a=MDCRippleFoundation.cssClasses,ROOT_2=_a.ROOT,UNBOUNDED_2=_a.UNBOUNDED;requestAnimationFrame((function(){_this.adapter.removeClass(ROOT_2),_this.adapter.removeClass(UNBOUNDED_2),_this.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},MDCRippleFoundation.prototype.activate=function(evt){this.activateImpl(evt)},MDCRippleFoundation.prototype.deactivate=function(){this.deactivateImpl()},MDCRippleFoundation.prototype.layout=function(){var _this=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){_this.layoutInternal(),_this.layoutFrame=0}))},MDCRippleFoundation.prototype.setUnbounded=function(unbounded){var UNBOUNDED=MDCRippleFoundation.cssClasses.UNBOUNDED;unbounded?this.adapter.addClass(UNBOUNDED):this.adapter.removeClass(UNBOUNDED)},MDCRippleFoundation.prototype.handleFocus=function(){var _this=this;requestAnimationFrame((function(){return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)}))},MDCRippleFoundation.prototype.handleBlur=function(){var _this=this;requestAnimationFrame((function(){return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)}))},MDCRippleFoundation.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},MDCRippleFoundation.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},MDCRippleFoundation.prototype.registerRootHandlers=function(supportsPressRipple){var e_1,_a;if(supportsPressRipple){try{for(var ACTIVATION_EVENT_TYPES_1=(0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_7__.b)(ACTIVATION_EVENT_TYPES),ACTIVATION_EVENT_TYPES_1_1=ACTIVATION_EVENT_TYPES_1.next();!ACTIVATION_EVENT_TYPES_1_1.done;ACTIVATION_EVENT_TYPES_1_1=ACTIVATION_EVENT_TYPES_1.next()){var evtType=ACTIVATION_EVENT_TYPES_1_1.value;this.adapter.registerInteractionHandler(evtType,this.activateHandler)}}catch(e_1_1){e_1={error:e_1_1}}finally{try{ACTIVATION_EVENT_TYPES_1_1&&!ACTIVATION_EVENT_TYPES_1_1.done&&(_a=ACTIVATION_EVENT_TYPES_1.return)&&_a.call(ACTIVATION_EVENT_TYPES_1)}finally{if(e_1)throw e_1.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},MDCRippleFoundation.prototype.registerDeactivationHandlers=function(evt){var e_2,_a;if("keydown"===evt.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var POINTER_DEACTIVATION_EVENT_TYPES_1=(0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_7__.b)(POINTER_DEACTIVATION_EVENT_TYPES),POINTER_DEACTIVATION_EVENT_TYPES_1_1=POINTER_DEACTIVATION_EVENT_TYPES_1.next();!POINTER_DEACTIVATION_EVENT_TYPES_1_1.done;POINTER_DEACTIVATION_EVENT_TYPES_1_1=POINTER_DEACTIVATION_EVENT_TYPES_1.next()){var evtType=POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;this.adapter.registerDocumentInteractionHandler(evtType,this.deactivateHandler)}}catch(e_2_1){e_2={error:e_2_1}}finally{try{POINTER_DEACTIVATION_EVENT_TYPES_1_1&&!POINTER_DEACTIVATION_EVENT_TYPES_1_1.done&&(_a=POINTER_DEACTIVATION_EVENT_TYPES_1.return)&&_a.call(POINTER_DEACTIVATION_EVENT_TYPES_1)}finally{if(e_2)throw e_2.error}}},MDCRippleFoundation.prototype.deregisterRootHandlers=function(){var e_3,_a;try{for(var ACTIVATION_EVENT_TYPES_2=(0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_7__.b)(ACTIVATION_EVENT_TYPES),ACTIVATION_EVENT_TYPES_2_1=ACTIVATION_EVENT_TYPES_2.next();!ACTIVATION_EVENT_TYPES_2_1.done;ACTIVATION_EVENT_TYPES_2_1=ACTIVATION_EVENT_TYPES_2.next()){var evtType=ACTIVATION_EVENT_TYPES_2_1.value;this.adapter.deregisterInteractionHandler(evtType,this.activateHandler)}}catch(e_3_1){e_3={error:e_3_1}}finally{try{ACTIVATION_EVENT_TYPES_2_1&&!ACTIVATION_EVENT_TYPES_2_1.done&&(_a=ACTIVATION_EVENT_TYPES_2.return)&&_a.call(ACTIVATION_EVENT_TYPES_2)}finally{if(e_3)throw e_3.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},MDCRippleFoundation.prototype.deregisterDeactivationHandlers=function(){var e_4,_a;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var POINTER_DEACTIVATION_EVENT_TYPES_2=(0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_7__.b)(POINTER_DEACTIVATION_EVENT_TYPES),POINTER_DEACTIVATION_EVENT_TYPES_2_1=POINTER_DEACTIVATION_EVENT_TYPES_2.next();!POINTER_DEACTIVATION_EVENT_TYPES_2_1.done;POINTER_DEACTIVATION_EVENT_TYPES_2_1=POINTER_DEACTIVATION_EVENT_TYPES_2.next()){var evtType=POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;this.adapter.deregisterDocumentInteractionHandler(evtType,this.deactivateHandler)}}catch(e_4_1){e_4={error:e_4_1}}finally{try{POINTER_DEACTIVATION_EVENT_TYPES_2_1&&!POINTER_DEACTIVATION_EVENT_TYPES_2_1.done&&(_a=POINTER_DEACTIVATION_EVENT_TYPES_2.return)&&_a.call(POINTER_DEACTIVATION_EVENT_TYPES_2)}finally{if(e_4)throw e_4.error}}},MDCRippleFoundation.prototype.removeCssVars=function(){var _this=this,rippleStrings=MDCRippleFoundation.strings;Object.keys(rippleStrings).forEach((function(key){0===key.indexOf("VAR_")&&_this.adapter.updateCssVariable(rippleStrings[key],null)}))},MDCRippleFoundation.prototype.activateImpl=function(evt){var _this=this;if(!this.adapter.isSurfaceDisabled()){var activationState=this.activationState;if(!activationState.isActivated){var previousActivationEvent=this.previousActivationEvent;if(!(previousActivationEvent&&void 0!==evt&&previousActivationEvent.type!==evt.type))activationState.isActivated=!0,activationState.isProgrammatic=void 0===evt,activationState.activationEvent=evt,activationState.wasActivatedByPointer=!activationState.isProgrammatic&&(void 0!==evt&&("mousedown"===evt.type||"touchstart"===evt.type||"pointerdown"===evt.type)),void 0!==evt&&activatedTargets.length>0&&activatedTargets.some((function(target){return _this.adapter.containsEventTarget(target)}))?this.resetActivationState():(void 0!==evt&&(activatedTargets.push(evt.target),this.registerDeactivationHandlers(evt)),activationState.wasElementMadeActive=this.checkElementMadeActive(evt),activationState.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){activatedTargets=[],activationState.wasElementMadeActive||void 0===evt||" "!==evt.key&&32!==evt.keyCode||(activationState.wasElementMadeActive=_this.checkElementMadeActive(evt),activationState.wasElementMadeActive&&_this.animateActivation()),activationState.wasElementMadeActive||(_this.activationState=_this.defaultActivationState())})))}}},MDCRippleFoundation.prototype.checkElementMadeActive=function(evt){return void 0===evt||"keydown"!==evt.type||this.adapter.isSurfaceActive()},MDCRippleFoundation.prototype.animateActivation=function(){var _this=this,_a=MDCRippleFoundation.strings,VAR_FG_TRANSLATE_START=_a.VAR_FG_TRANSLATE_START,VAR_FG_TRANSLATE_END=_a.VAR_FG_TRANSLATE_END,_b=MDCRippleFoundation.cssClasses,FG_DEACTIVATION=_b.FG_DEACTIVATION,FG_ACTIVATION=_b.FG_ACTIVATION,DEACTIVATION_TIMEOUT_MS=MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var translateStart="",translateEnd="";if(!this.adapter.isUnbounded()){var _c=this.getFgTranslationCoordinates(),startPoint=_c.startPoint,endPoint=_c.endPoint;translateStart=startPoint.x+"px, "+startPoint.y+"px",translateEnd=endPoint.x+"px, "+endPoint.y+"px"}this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START,translateStart),this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END,translateEnd),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(FG_DEACTIVATION),this.adapter.computeBoundingRect(),this.adapter.addClass(FG_ACTIVATION),this.activationTimer=setTimeout((function(){_this.activationTimerCallback()}),DEACTIVATION_TIMEOUT_MS)},MDCRippleFoundation.prototype.getFgTranslationCoordinates=function(){var startPoint,_a=this.activationState,activationEvent=_a.activationEvent;return{startPoint:startPoint={x:(startPoint=_a.wasActivatedByPointer?function getNormalizedEventCoords(evt,pageOffset,clientRect){if(!evt)return{x:0,y:0};var normalizedX,normalizedY,x=pageOffset.x,y=pageOffset.y,documentX=x+clientRect.left,documentY=y+clientRect.top;if("touchstart"===evt.type){var touchEvent=evt;normalizedX=touchEvent.changedTouches[0].pageX-documentX,normalizedY=touchEvent.changedTouches[0].pageY-documentY}else{var mouseEvent=evt;normalizedX=mouseEvent.pageX-documentX,normalizedY=mouseEvent.pageY-documentY}return{x:normalizedX,y:normalizedY}}(activationEvent,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2}).x-this.initialSize/2,y:startPoint.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady=function(){var _this=this,FG_DEACTIVATION=MDCRippleFoundation.cssClasses.FG_DEACTIVATION,_a=this.activationState,hasDeactivationUXRun=_a.hasDeactivationUXRun,isActivated=_a.isActivated;(hasDeactivationUXRun||!isActivated)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(FG_DEACTIVATION),this.fgDeactivationRemovalTimer=setTimeout((function(){_this.adapter.removeClass(FG_DEACTIVATION)}),numbers.FG_DEACTIVATION_MS))},MDCRippleFoundation.prototype.rmBoundedActivationClasses=function(){var FG_ACTIVATION=MDCRippleFoundation.cssClasses.FG_ACTIVATION;this.adapter.removeClass(FG_ACTIVATION),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},MDCRippleFoundation.prototype.resetActivationState=function(){var _this=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return _this.previousActivationEvent=void 0}),MDCRippleFoundation.numbers.TAP_DELAY_MS)},MDCRippleFoundation.prototype.deactivateImpl=function(){var _this=this,activationState=this.activationState;if(activationState.isActivated){var state=(0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_7__.a)({},activationState);activationState.isProgrammatic?(requestAnimationFrame((function(){_this.animateDeactivation(state)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){_this.activationState.hasDeactivationUXRun=!0,_this.animateDeactivation(state),_this.resetActivationState()})))}},MDCRippleFoundation.prototype.animateDeactivation=function(_a){var wasActivatedByPointer=_a.wasActivatedByPointer,wasElementMadeActive=_a.wasElementMadeActive;(wasActivatedByPointer||wasElementMadeActive)&&this.runDeactivationUXLogicIfReady()},MDCRippleFoundation.prototype.layoutInternal=function(){var _this=this;this.frame=this.adapter.computeBoundingRect();var maxDim=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?maxDim:function getBoundedRadius(){return Math.sqrt(Math.pow(_this.frame.width,2)+Math.pow(_this.frame.height,2))+MDCRippleFoundation.numbers.PADDING}();var initialSize=Math.floor(maxDim*MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&initialSize%2!=0?this.initialSize=initialSize-1:this.initialSize=initialSize,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},MDCRippleFoundation.prototype.updateLayoutCssVars=function(){var _a=MDCRippleFoundation.strings,VAR_FG_SIZE=_a.VAR_FG_SIZE,VAR_LEFT=_a.VAR_LEFT,VAR_TOP=_a.VAR_TOP,VAR_FG_SCALE=_a.VAR_FG_SCALE;this.adapter.updateCssVariable(VAR_FG_SIZE,this.initialSize+"px"),this.adapter.updateCssVariable(VAR_FG_SCALE,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(VAR_LEFT,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(VAR_TOP,this.unboundedCoords.top+"px"))},MDCRippleFoundation}(_component_e50f7445_js__WEBPACK_IMPORTED_MODULE_8__.M),MDCRipple=function(_super){function MDCRipple(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.disabled=!1,_this}return(0,_tslib_es6_6a05a97f_js__WEBPACK_IMPORTED_MODULE_7__._)(MDCRipple,_super),MDCRipple.attachTo=function(root,opts){void 0===opts&&(opts={isUnbounded:void 0});var ripple=new MDCRipple(root);return void 0!==opts.isUnbounded&&(ripple.unbounded=opts.isUnbounded),ripple},MDCRipple.createAdapter=function(instance){return{addClass:function addClass(className){return instance.root.classList.add(className)},browserSupportsCssVars:function browserSupportsCssVars(){return function supportsCssVariables(windowObj,forceRefresh){void 0===forceRefresh&&(forceRefresh=!1);var supportsCssVars,CSS=windowObj.CSS;if("boolean"==typeof supportsCssVariables_&&!forceRefresh)return supportsCssVariables_;if(!CSS||"function"!=typeof CSS.supports)return!1;var explicitlySupportsCssVars=CSS.supports("--css-vars","yes"),weAreFeatureDetectingSafari10plus=CSS.supports("(--css-vars: yes)")&&CSS.supports("color","#00000000");return supportsCssVars=explicitlySupportsCssVars||weAreFeatureDetectingSafari10plus,forceRefresh||(supportsCssVariables_=supportsCssVars),supportsCssVars}(window)},computeBoundingRect:function computeBoundingRect(){return instance.root.getBoundingClientRect()},containsEventTarget:function containsEventTarget(target){return instance.root.contains(target)},deregisterDocumentInteractionHandler:function deregisterDocumentInteractionHandler(evtType,handler){return document.documentElement.removeEventListener(evtType,handler,applyPassive())},deregisterInteractionHandler:function deregisterInteractionHandler(evtType,handler){return instance.root.removeEventListener(evtType,handler,applyPassive())},deregisterResizeHandler:function deregisterResizeHandler(handler){return window.removeEventListener("resize",handler)},getWindowPageOffset:function getWindowPageOffset(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function isSurfaceActive(){return(0,_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_9__.m)(instance.root,":active")},isSurfaceDisabled:function isSurfaceDisabled(){return Boolean(instance.disabled)},isUnbounded:function isUnbounded(){return Boolean(instance.unbounded)},registerDocumentInteractionHandler:function registerDocumentInteractionHandler(evtType,handler){return document.documentElement.addEventListener(evtType,handler,applyPassive())},registerInteractionHandler:function registerInteractionHandler(evtType,handler){return instance.root.addEventListener(evtType,handler,applyPassive())},registerResizeHandler:function registerResizeHandler(handler){return window.addEventListener("resize",handler)},removeClass:function removeClass(className){return instance.root.classList.remove(className)},updateCssVariable:function updateCssVariable(varName,value){return instance.root.style.setProperty(varName,value)}}},Object.defineProperty(MDCRipple.prototype,"unbounded",{get:function get(){return Boolean(this.isUnbounded)},set:function set(unbounded){this.isUnbounded=Boolean(unbounded),this.setUnbounded()},enumerable:!1,configurable:!0}),MDCRipple.prototype.activate=function(){this.foundation.activate()},MDCRipple.prototype.deactivate=function(){this.foundation.deactivate()},MDCRipple.prototype.layout=function(){this.foundation.layout()},MDCRipple.prototype.getDefaultFoundation=function(){return new MDCRippleFoundation(MDCRipple.createAdapter(this))},MDCRipple.prototype.initialSyncWithDOM=function(){var root=this.root;this.isUnbounded="mdcRippleIsUnbounded"in root.dataset},MDCRipple.prototype.setUnbounded=function(){this.foundation.setUnbounded(Boolean(this.isUnbounded))},MDCRipple}(_component_e50f7445_js__WEBPACK_IMPORTED_MODULE_8__.a)},"../elements/dist/esm/ponyfill-495ec32d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function closest(element,selector){if(element.closest)return element.closest(selector);for(var el=element;el;){if(matches(el,selector))return el;el=el.parentElement}return null}function matches(element,selector){return(element.matches||element.webkitMatchesSelector||element.msMatchesSelector).call(element,selector)}function estimateScrollWidth(element){var htmlEl=element;if(null!==htmlEl.offsetParent)return htmlEl.scrollWidth;var clone=htmlEl.cloneNode(!0);clone.style.setProperty("position","absolute"),clone.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(clone);var scrollWidth=clone.scrollWidth;return document.documentElement.removeChild(clone),scrollWidth}__webpack_require__.d(__webpack_exports__,{c:()=>closest,e:()=>estimateScrollWidth,m:()=>matches})},"../elements/dist/esm/tslib.es6-6a05a97f.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>__extends,a:()=>_assign,b:()=>__values,c:()=>__spreadArray,d:()=>__read,e:()=>__rest});__webpack_require__("../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js");var _extendStatics=function extendStatics(d,b){return _extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])},_extendStatics(d,b)};function __extends(d,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function __(){this.constructor=d}_extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var _assign=function __assign(){return _assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},_assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}function __values(o){var s="function"==typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"==typeof o.length)return{next:function next(){return o&&i>=o.length&&(o=void 0),{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar}function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}"function"==typeof SuppressedError&&SuppressedError}}]);