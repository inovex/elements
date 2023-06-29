"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[9625],{1770:function(t,e,i){i.d(e,{A:function(){return o}});i(9321),i(8188),i(8673),i(6886),i(1939),i(6728);var o=function(){function t(){this.rafIDs=new Map}return t.prototype.request=function(t,e){var i=this;this.cancel(t);var o=requestAnimationFrame((function(o){i.rafIDs.delete(t),e(o)}));this.rafIDs.set(t,o)},t.prototype.cancel=function(t){var e=this.rafIDs.get(t);e&&(cancelAnimationFrame(e),this.rafIDs.delete(t))},t.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach((function(e,i){t.cancel(i)}))},t.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach((function(e,i){t.push(i)})),t},t}()},3257:function(t,e,i){i.d(e,{a:function(){return n},f:function(){return r},g:function(){return o},h:function(){return a},p:function(){return d}});i(8188),i(8233);
/*!
 * Crafted with ❤ by inovex GmbH
 */
function o(){return"_"+Math.random().toString(36).substr(2,9)}function n(t,e){return t.querySelector('[slot="'.concat(e,'"]'))}function a(t,e){var i;return e?t.querySelectorAll('[slot="'.concat(e,'"]')).length>0:0===(null===(i=t.querySelector("slot"))||void 0===i?void 0:i.assignedElements().length)}function r(t){var e;null===(e=t.querySelector("[data-ino-focus]"))||void 0===e||e.focus()}function d(t){t.stopPropagation(),t.preventDefault()}},9229:function(t,e,i){i.d(e,{F:function(){return n}});i(1372),i(8188),i(1939),i(2501),i(5342);var o="mdc-dom-focus-sentinel",n=function(){function t(t,e){void 0===e&&(e={}),this.root=t,this.options=e,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var t=this.getFocusableElements(this.root);if(0===t.length)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(t,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+o)).forEach((function(t){t.parentElement.removeChild(t)})),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(t){var e=this,i=this.createSentinel(),o=this.createSentinel();i.addEventListener("focus",(function(){var i=e.getFocusableElements(t);i.length>0&&i[i.length-1].focus()})),o.addEventListener("focus",(function(){var i=e.getFocusableElements(t);i.length>0&&i[0].focus()})),t.insertBefore(i,t.children[0]),t.appendChild(o)},t.prototype.focusInitialElement=function(t,e){var i=0;e&&(i=Math.max(t.indexOf(e),0)),t[i].focus()},t.prototype.getFocusableElements=function(t){var e=[].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return e.filter((function(t){var e="true"===t.getAttribute("aria-disabled")||null!=t.getAttribute("disabled")||null!=t.getAttribute("hidden")||"true"===t.getAttribute("aria-hidden"),i=t.tabIndex>=0&&t.getBoundingClientRect().width>0&&!t.classList.contains(o)&&!e,n=!1;if(i){var a=getComputedStyle(t);n="none"===a.display||"hidden"===a.visibility}return i&&!n}))},t.prototype.createSentinel=function(){var t=document.createElement("div");return t.setAttribute("tabindex","0"),t.setAttribute("aria-hidden","true"),t.classList.add(o),t},t}()},9625:function(t,e,i){i.r(e),i.d(e,{ino_dialog:function(){return T}});var o=i(4567),n=i(6812),a=(i(8188),i(3244),i(8673),i(6886),i(6781),i(1372),i(2501),i(6728),i(1939),i(1297)),r=i(7775),d=i(3257),c=i(9132),l=i(9229),s=i(5998),m=i(1770);
/*!
 * Crafted with ❤ by inovex GmbH
 */
/**
 * @license
 * Copyright 2016 Google Inc.
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
 */
function u(t,e,i){return e(t,{initialFocusEl:i})}function g(t){return!!t&&t.scrollHeight>t.offsetHeight}function h(t){return!!t&&0===t.scrollTop}function p(t){return!!t&&Math.ceil(t.scrollHeight-t.scrollTop)===t.clientHeight}function f(t){var e=new Set;return[].forEach.call(t,(function(t){return e.add(t.offsetTop)})),e.size>1}
/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var _,y={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},b={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},v={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};(function(t){t["POLL_SCROLL_POS"]="poll_scroll_position",t["POLL_LAYOUT_CHANGE"]="poll_layout_change"})(_||(_={}));var x=function(t){function e(i){var o=t.call(this,(0,c.a)((0,c.a)({},e.defaultAdapter),i))||this;return o.dialogOpen=!1,o.isFullscreen=!1,o.animationFrame=0,o.animationTimer=0,o.escapeKeyAction=b.CLOSE_ACTION,o.scrimClickAction=b.CLOSE_ACTION,o.autoStackButtons=!0,o.areButtonsStacked=!1,o.suppressDefaultPressSelector=b.SUPPRESS_DEFAULT_PRESS_SELECTOR,o.animFrame=new m.A,o.contentScrollHandler=function(){o.handleScrollEvent()},o.windowResizeHandler=function(){o.layout()},o.windowOrientationChangeHandler=function(){o.layout()},o}return(0,c._)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return y},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return v},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(y.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(y.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(t){var e=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(y.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(y.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame((function(){e.adapter.addClass(y.OPEN),e.adapter.addBodyClass(y.SCROLL_LOCK),e.layout(),e.animationTimer=setTimeout((function(){e.handleAnimationTimerEnd(),e.adapter.trapFocus(e.adapter.getInitialFocusEl()),e.adapter.notifyOpened()}),v.DIALOG_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(y.CLOSING),this.adapter.removeClass(y.OPEN),this.adapter.removeBodyClass(y.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout((function(){e.adapter.releaseFocus(),e.handleAnimationTimerEnd(),e.adapter.notifyClosed(t)}),v.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(y.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame((function(){t.adapter.addClass(y.SURFACE_SCRIM_SHOWN)}))},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(y.SURFACE_SCRIM_SHOWN),this.adapter.addClass(y.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(y.SURFACE_SCRIM_HIDING),this.adapter.removeClass(y.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.animFrame.request(_.POLL_LAYOUT_CHANGE,(function(){t.layoutInternal()}))},e.prototype.handleClick=function(t){var e=this.adapter.eventTargetMatches(t.target,b.SCRIM_SELECTOR);if(e&&""!==this.scrimClickAction)this.close(this.scrimClickAction);else{var i=this.adapter.getActionFromEvent(t);i&&this.close(i)}},e.prototype.handleKeydown=function(t){var e="Enter"===t.key||13===t.keyCode;if(e){var i=this.adapter.getActionFromEvent(t);if(!i){var o=t.composedPath?t.composedPath()[0]:t.target,n=!this.suppressDefaultPressSelector||!this.adapter.eventTargetMatches(o,this.suppressDefaultPressSelector);e&&n&&this.adapter.clickDefaultButton()}}},e.prototype.handleDocumentKeydown=function(t){var e="Escape"===t.key||27===t.keyCode;e&&""!==this.escapeKeyAction&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(_.POLL_SCROLL_POS,(function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()}))},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(y.OPENING),this.adapter.removeClass(y.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(y.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(y.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(y.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(y.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(y.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(y.SCROLL_DIVIDER_HEADER):this.adapter.addClass(y.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(y.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(y.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(y.SCROLL_DIVIDER_FOOTER)},e}(c.M),E=x.strings,C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,c._)(e,t),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"escapeKeyAction",{get:function(){return this.foundation.getEscapeKeyAction()},set:function(t){this.foundation.setEscapeKeyAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scrimClickAction",{get:function(){return this.foundation.getScrimClickAction()},set:function(t){this.foundation.setScrimClickAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoStackButtons",{get:function(){return this.foundation.getAutoStackButtons()},set:function(t){this.foundation.setAutoStackButtons(t)},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var e,i;void 0===t&&(t=function(t,e){return new l.F(t,e)});var o=this.root.querySelector(E.CONTAINER_SELECTOR);if(!o)throw new Error("Dialog component requires a "+E.CONTAINER_SELECTOR+" container element");this.container=o,this.content=this.root.querySelector(E.CONTENT_SELECTOR),this.buttons=[].slice.call(this.root.querySelectorAll(E.BUTTON_SELECTOR)),this.defaultButton=this.root.querySelector("["+E.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory=t,this.buttonRipples=[];try{for(var n=(0,c.b)(this.buttons),a=n.next();!a.done;a=n.next()){var r=a.value;this.buttonRipples.push(new s.M(r))}}catch(d){e={error:d}}finally{try{a&&!a.done&&(i=n.return)&&i.call(n)}finally{if(e)throw e.error}}},e.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap=u(this.container,this.focusTrapFactory,this.getInitialFocusEl()||void 0),this.handleClick=this.foundation.handleClick.bind(this.foundation),this.handleKeydown=this.foundation.handleKeydown.bind(this.foundation),this.handleDocumentKeydown=this.foundation.handleDocumentKeydown.bind(this.foundation),this.handleOpening=function(){document.addEventListener("keydown",t.handleDocumentKeydown)},this.handleClosing=function(){document.removeEventListener("keydown",t.handleDocumentKeydown)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown),this.listen(E.OPENING_EVENT,this.handleOpening),this.listen(E.CLOSING_EVENT,this.handleClosing)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),this.unlisten(E.OPENING_EVENT,this.handleOpening),this.unlisten(E.CLOSING_EVENT,this.handleClosing),this.handleClosing(),this.buttonRipples.forEach((function(t){t.destroy()})),t.prototype.destroy.call(this)},e.prototype.layout=function(){this.foundation.layout()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){void 0===t&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,e={addBodyClass:function(t){return document.body.classList.add(t)},addClass:function(e){return t.root.classList.add(e)},areButtonsStacked:function(){return f(t.buttons)},clickDefaultButton:function(){t.defaultButton&&!t.defaultButton.disabled&&t.defaultButton.click()},eventTargetMatches:function(t,e){return!!t&&(0,r.m)(t,e)},getActionFromEvent:function(t){if(!t.target)return"";var e=(0,r.c)(t.target,"["+E.ACTION_ATTRIBUTE+"]");return e&&e.getAttribute(E.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return t.getInitialFocusEl()},hasClass:function(e){return t.root.classList.contains(e)},isContentScrollable:function(){return g(t.content)},notifyClosed:function(e){return t.emit(E.CLOSED_EVENT,e?{action:e}:{})},notifyClosing:function(e){return t.emit(E.CLOSING_EVENT,e?{action:e}:{})},notifyOpened:function(){return t.emit(E.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(E.OPENING_EVENT,{})},releaseFocus:function(){t.focusTrap.releaseFocus()},removeBodyClass:function(t){return document.body.classList.remove(t)},removeClass:function(e){return t.root.classList.remove(e)},reverseButtons:function(){t.buttons.reverse(),t.buttons.forEach((function(t){t.parentElement.appendChild(t)}))},trapFocus:function(){t.focusTrap.trapFocus()},registerContentEventHandler:function(e,i){t.content instanceof HTMLElement&&t.content.addEventListener(e,i)},deregisterContentEventHandler:function(e,i){t.content instanceof HTMLElement&&t.content.removeEventListener(e,i)},isScrollableContentAtTop:function(){return h(t.content)},isScrollableContentAtBottom:function(){return p(t.content)},registerWindowEventHandler:function(t,e){window.addEventListener(t,e)},deregisterWindowEventHandler:function(t,e){window.removeEventListener(t,e)}};return new x(e)},e.prototype.getInitialFocusEl=function(){return this.root.querySelector("["+E.INITIAL_FOCUS_ATTRIBUTE+"]")},e}(c.c),S='.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0, 0, 0, 0.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0, 0, 0, 0.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-dialog__title-icon{}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media (max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media (min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.mdc-dialog .mdc-dialog__container{}}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media (max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media (max-width: 720px) and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media (max-width: 720px) and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media (max-width: 720px) and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media (max-width: 720px) and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media (max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media (max-width: 720px) and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media (max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media (min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right;}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right;}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px;}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0;}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left;}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}:host{}@media (max-width: 584px){:host .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media (min-width: 584px){:host .mdc-dialog__surface{max-width:552px}}:host .mdc-dialog__surface{min-width:480px}:host .mdc-dialog__surface{background-color:var(--ino-dialog-background-color, #fff)}:host .mdc-dialog__scrim{background-color:rgba(138, 161, 255, 0.25)}:host .mdc-dialog__surface-scrim{background-color:rgba(138, 161, 255, 0.25)}:host .mdc-dialog__scrim{backdrop-filter:blur(5px)}:host .mdc-dialog .mdc-dialog__container{height:var(--ino-dialog-height, auto);width:var(--ino-dialog-width, auto)}:host .mdc-dialog .mdc-dialog__surface{overflow:visible;min-height:unset;max-height:unset;height:100%;width:100%;border-radius:var(--ino-dialog-border-radius, 17px);box-shadow:var(--ino-dialog-box-shadow, 0px 0px 22px rgba(93, 91, 105, 0.35));border:var(--ino-dialog-border, 1px solid #2c02ff);padding:var(--ino-dialog-padding, 62px)}:host .mdc-dialog .mdc-dialog__surface header{display:flex;align-items:center;gap:2rem}:host .mdc-dialog .mdc-dialog__surface header ino-icon{--icon-width:2rem;--icon-height:2rem}:host .mdc-dialog .mdc-dialog__surface header h1{margin:0 0 0;font-weight:400}:host .mdc-dialog .mdc-dialog__surface section{margin:38px 0 0}:host .mdc-dialog .mdc-dialog__surface footer{margin-top:63px;display:flex;justify-content:space-around}:host(.ino-dialog--fullwidth){--ino-dialog-width:100%;--ino-dialog-height:calc(100% - 80px)}:host(.ino-dialog--fullwidth) .mdc-dialog{align-items:flex-end}:host(.ino-dialog--fullwidth) .mdc-dialog .mdc-dialog__container{justify-content:unset;transform:translateY(100%);transition:transform 300ms ease-in-out}:host(.ino-dialog--fullwidth) .mdc-dialog--open .mdc-dialog__container{transform:translateY(0px)}:host(.ino-dialog--fullwidth) .mdc-dialog .mdc-dialog__surface{border-bottom-left-radius:0;border-bottom-right-radius:0;max-width:100%}',w="data-ino-dialog-action",T=function(){function t(e){(0,o.Z)(this,t),(0,a.r)(this,e),this.close=(0,a.c)(this,"close",7),this.action=(0,a.c)(this,"action",7),this.open=!1}return(0,n.Z)(t,[{key:"openChanged",value:function(t){var e,i;t?null===(e=this.mdcDialog)||void 0===e||e.open():null===(i=this.mdcDialog)||void 0===i||i.close()}},{key:"handleKeyUp",value:function(t){"Escape"===t.key&&this.open&&this.dismissible&&this.close.emit("close")}},{key:"componentWillRender",value:function(){var t=this;if(this.mdcDialog&&this.open)return new Promise((function(e){t.mdcDialog.listen("MDCDialog:opened",(function(){return e()}),{once:!0})}))}},{key:"componentWillLoad",value:function(){var t=this.attachTo?document.querySelector(this.attachTo):document.body;null===t||void 0===t||t.appendChild(this.el)}},{key:"componentDidLoad",value:function(){var t;this.mdcDialog=new C(this.el.shadowRoot.querySelector(".mdc-dialog")),this.mdcDialog.scrimClickAction="",this.mdcDialog.escapeKeyAction="",this.mdcDialog.listen("click",this.handleDialogClick.bind(this)),this.open&&(null===(t=this.mdcDialog)||void 0===t||t.open())}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.mdcDialog)||void 0===t||t.destroy()}},{key:"handleDialogClick",value:function(t){if(t.target){var e=(0,r.c)(t.target,"[".concat(w,"]"));e&&this.close.emit(e.getAttribute(w))}}},{key:"render",value:function(){var t=this,e=(0,d.h)(this.el,"default"),i=(0,d.h)(this.el,"header"),o=(0,d.h)(this.el,"body"),n=(0,d.h)(this.el,"footer");return(0,a.h)(a.H,{class:{"ino-dialog--fullwidth":this.fullwidth}},(0,a.h)("div",{class:"mdc-dialog"},(0,a.h)("div",{class:"mdc-dialog__container"},(0,a.h)("div",{class:"mdc-dialog__surface",role:"alertdialog","aria-modal":"true"},(0,a.h)("div",{tabindex:"0"}),e?(0,a.h)("slot",null):(0,a.h)("div",null,i?(0,a.h)("slot",{name:"header"}):(0,a.h)("header",null,this.icon&&(0,a.h)("ino-icon",{icon:this.icon}),(0,a.h)("h1",null,this.headerText)),o?(0,a.h)("slot",{name:"body"}):(0,a.h)("section",{class:"body"},this.bodyText),n?(0,a.h)("slot",{name:"footer"}):(0,a.h)("footer",null,this.cancelText&&(0,a.h)("ino-button",{variant:"outlined",onClick:function(){return t.close.emit("close")}},this.cancelText),this.actionText&&(0,a.h)("ino-button",{type:"submit",onClick:function(){return t.action.emit("submit")}},this.actionText))))),(0,a.h)("div",{class:"mdc-dialog__scrim",onClick:function(){return t.dismissible&&t.close.emit("close")}})))}},{key:"el",get:function(){return(0,a.g)(this)}}],[{key:"watchers",get:function(){return{open:["openChanged"]}}}]),t}();
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */T.style=S}}]);
//# sourceMappingURL=9625-legacy.f7b0756e.js.map