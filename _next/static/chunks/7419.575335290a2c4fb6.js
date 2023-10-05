"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7419],{5220:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){/*!
 * Crafted with ❤ by inovex GmbH
 */ function generateUniqueId(){return"_"+Math.random().toString(36).substr(2,9)}function getSlotContent(el,slotName){return el.querySelector(`[slot="${slotName}"]`)}function hasSlotContent(el,slotName){var _a;return slotName?el.querySelectorAll(`[slot="${slotName}"]`).length>0:(null===(_a=el.querySelector("slot"))||void 0===_a?void 0:_a.assignedElements().length)===0}function focusIfExists(el){var _a;null===(_a=el.querySelector("[data-ino-focus]"))||void 0===_a||_a.focus()}function preventEvent(event){event.stopPropagation(),event.preventDefault()}__webpack_require__.d(__webpack_exports__,{a:function(){return getSlotContent},f:function(){return focusIfExists},g:function(){return generateUniqueId},h:function(){return hasSlotContent},p:function(){return preventEvent}})},7419:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_popover:function(){return Popover}});var _index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9444),_index_796d4780_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(939),_tippy_esm_f3ab50e2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4515),_component_utils_02a98646_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5220),_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4218);__webpack_require__(89);/*!
 * Crafted with ❤ by inovex GmbH
 */ let hideOnPopperBlur={name:"hideOnPopperBlur",defaultValue:!0,fn:instance=>({onCreate(){instance.popper.addEventListener("focusout",event=>{instance.props.hideOnPopperBlur&&event.relatedTarget&&!instance.popper.contains(event.relatedTarget)&&instance.hide()})}})},hideOnEsc={name:"hideOnEsc",defaultValue:!0,fn({hide}){function onKeyDown(e){"Escape"===e.key&&hide()}return{onShow(){document.addEventListener("keydown",onKeyDown)},onHide(){document.removeEventListener("keydown",onKeyDown)}}}},Popover=class{constructor(hostRef){(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.visibleChanged=(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"visibleChanged",7),this.placement="auto",this.arrow=!1,this.attachToBody=!1,this.for=void 0,this.hideOnBlur=!1,this.hideOnEsc=!1,this.distance=10,this.colorScheme="primary",this.interactive=!1,this.followCursor=!1,this.trigger="mouseenter focus",this.delay=0,this.controlled=!1,this.visible=!1}placementChanged(){var _a;null===(_a=this.tippyInstance)||void 0===_a||_a.setProps({placement:this.placement})}bodyChanged(){this.create()}forChanged(){this.create()}hideOnBlurChanged(){this.create()}hideOnEscChanged(){this.create()}distanceChanged(){var _a;null===(_a=this.tippyInstance)||void 0===_a||_a.setProps({offset:[0,this.distance]})}interactiveChanged(){this.create()}followCursorChanged(){this.create()}triggerChanged(){var _a;null===(_a=this.tippyInstance)||void 0===_a||_a.setProps({trigger:this.trigger})}onDelayChange(){var _a;null===(_a=this.tippyInstance)||void 0===_a||_a.setProps({delay:this.delay})}async getTippyInstance(){return this.tippyInstance}controlledChanged(){this.create()}visibleChangeHandler(show){var _a,_b;this.controlled&&(show?null===(_a=this.tippyInstance)||void 0===_a||_a.show():null===(_b=this.tippyInstance)||void 0===_b||_b.hide())}componentDidLoad(){this.create()}create(){var _a;null===(_a=this.tippyInstance)||void 0===_a||_a.destroy(),!this.target&&this.for&&console.warn(`The element with the id '${this.for}' could not be found.`);let plugins=[];this.hideOnBlur&&plugins.push(hideOnPopperBlur),this.hideOnEsc&&plugins.push(hideOnEsc);let shouldFollowCursor="boolean"==typeof this.followCursor&&this.followCursor||["horizontal","vertical","initial"].includes(this.followCursor);shouldFollowCursor&&plugins.push(_tippy_esm_f3ab50e2_js__WEBPACK_IMPORTED_MODULE_2__.f);let options={allowHTML:!0,theme:this.colorScheme,animation:"scale-subtle",appendTo:this.attachToBody?document.body:this.popoverContainer,arrow:!!this.arrow&&_tippy_esm_f3ab50e2_js__WEBPACK_IMPORTED_MODULE_2__.R,content:this.popoverContent,duration:100,delay:this.delay,followCursor:!!shouldFollowCursor&&this.followCursor,placement:this.placement,trigger:this.trigger,offset:[0,this.distance],plugins:[...plugins,{fn:()=>({onMount:()=>{let datepickers=Array.from(this.el.querySelectorAll("ino-datepicker"));null==datepickers||datepickers.forEach(datepicker=>datepicker.redraw());let target=this.popoverContent.querySelector("ino-input[data-ino-focus],ino-datepicker[data-ino-focus],  ino-textarea[data-ino-focus]");null==target||target.setFocus()},onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}})}],onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}};this.interactive&&(options.interactive=!0),this.tippyInstance=(0,_tippy_esm_f3ab50e2_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.target,options)}get target(){let slotContent=(0,_component_utils_02a98646_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.el,"popover-trigger");return slotContent||(this.for?document.getElementById(this.for):this.el.parentElement)}handlePopoverClick(e){if(!e.target)return;let element=(0,_ponyfill_495ec32d_js__WEBPACK_IMPORTED_MODULE_5__.c)(e.target,"[data-ino-close]");element&&this.tippyInstance.hide()}render(){let popoverClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_1__.c)("ino-popover","ino-popover__content");return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"popover-trigger"}),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{ref:ref=>this.popoverContainer=ref},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:popoverClasses,role:"tooltip",ref:ref=>this.popoverContent=ref,onClick:this.handlePopoverClick.bind(this)},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}get el(){return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{placement:["placementChanged"],attachToBody:["bodyChanged"],for:["forChanged"],hideOnBlur:["hideOnBlurChanged"],hideOnEsc:["hideOnEscChanged"],distance:["distanceChanged"],interactive:["interactiveChanged"],followCursor:["followCursorChanged"],trigger:["triggerChanged"],delay:["onDelayChange"],controlled:["controlledChanged"],visible:["visibleChangeHandler"]}}};Popover.style='.tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}.tippy-box[data-placement^=top]>.tippy-svg-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg{top:16px;transform:rotate(180deg)}.tippy-box[data-placement^=bottom]>.tippy-svg-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.tippy-box[data-placement^=left]>.tippy-svg-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg{transform:rotate(90deg);top:calc(50% - 3px);left:11px}.tippy-box[data-placement^=right]>.tippy-svg-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg{transform:rotate(-90deg);top:calc(50% - 3px);right:11px}.tippy-svg-arrow{width:16px;height:16px;fill:#333;text-align:initial}.tippy-svg-arrow,.tippy-svg-arrow>svg{position:absolute}.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.tippy-box{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;border-radius:10px;z-index:9999}.tippy-content{border-radius:10px}.tippy-box[data-theme~=light]{box-shadow:0 0 15px 0 rgba(93, 91, 105, 0.3);background:#fff;color:#000}.tippy-box[data-theme~=light] .tippy-content{background-color:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow{fill:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow svg{fill:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow svg{filter:drop-shadow(0 -6px 3px rgba(93, 91, 105, 0.3))}.tippy-box[data-theme~=dark]{background:#5D5B69;color:#fff}.tippy-box[data-theme~=dark] .tippy-content{background-color:#5D5B69}.tippy-box[data-theme~=dark]>.tippy-svg-arrow{fill:#5D5B69}.tippy-box[data-theme~=dark]>.tippy-svg-arrow svg{fill:#5D5B69}.tippy-box[data-theme~=primary]{background:#beccff;color:#2d02ff}.tippy-box[data-theme~=primary] .tippy-content{background-color:#beccff}.tippy-box[data-theme~=primary]>.tippy-svg-arrow{fill:#beccff}.tippy-box[data-theme~=primary]>.tippy-svg-arrow svg{fill:#beccff}.tippy-content{padding:0}'},4218:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){/*!
 * Crafted with ❤ by inovex GmbH
 */ /**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ function closest(element,selector){if(element.closest)return element.closest(selector);for(var el=element;el;){if(matches(el,selector))return el;el=el.parentElement}return null}function matches(element,selector){return(element.matches||element.webkitMatchesSelector||element.msMatchesSelector).call(element,selector)}function estimateScrollWidth(element){if(null!==element.offsetParent)return element.scrollWidth;var clone=element.cloneNode(!0);clone.style.setProperty("position","absolute"),clone.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(clone);var scrollWidth=clone.scrollWidth;return document.documentElement.removeChild(clone),scrollWidth}__webpack_require__.d(__webpack_exports__,{c:function(){return closest},e:function(){return estimateScrollWidth},m:function(){return matches}})}}]);