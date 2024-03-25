import{r as E,c as p,h as o,H as T,g as x}from"./index-2adc2792.js";import{c as m}from"./index-38c18b20-01ad82eb.js";import{h as S}from"./component-utils-757b8493-9ff506cf.js";import{a as y,b}from"./tslib.es6-973a6cc3-13adf902.js";import{M as v,a as C}from"./component-606576f6-f768b776.js";import{c as u}from"./ponyfill-495ec32d-1bdf70c7.js";/*!
 * Crafted with ❤ by inovex GmbH
 *//**
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
 */var c={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},r={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},s={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var A=s.ARIA_LIVE_DELAY_MS,f=r.ARIA_LIVE_LABEL_TEXT_ATTR;function O(a,t){t===void 0&&(t=a);var n=a.getAttribute("aria-live"),e=t.textContent.trim();!e||!n||(a.setAttribute("aria-live","off"),t.textContent="",t.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',t.setAttribute(f,e),setTimeout(function(){a.setAttribute("aria-live",n),t.removeAttribute(f),t.textContent=e},A))}/**
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
 */var h=c.OPENING,k=c.OPEN,_=c.CLOSING,I=r.REASON_ACTION,l=r.REASON_DISMISS,N=function(a){y(t,a);function t(n){var e=a.call(this,b(b({},t.defaultAdapter),n))||this;return e.opened=!1,e.animationFrame=0,e.animationTimer=0,e.autoDismissTimer=0,e.autoDismissTimeoutMs=s.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,e.closeOnEscape=!0,e}return Object.defineProperty(t,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return r},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(h),this.adapter.removeClass(k),this.adapter.removeClass(_)},t.prototype.open=function(){var n=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(_),this.adapter.addClass(h),this.adapter.announce(),this.runNextAnimationFrame(function(){n.adapter.addClass(k),n.animationTimer=setTimeout(function(){var e=n.getTimeoutMs();n.handleAnimationTimerEnd(),n.adapter.notifyOpened(),e!==s.INDETERMINATE&&(n.autoDismissTimer=setTimeout(function(){n.close(l)},e))},s.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(n){var e=this;n===void 0&&(n=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(n),this.adapter.addClass(c.CLOSING),this.adapter.removeClass(c.OPEN),this.adapter.removeClass(c.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){e.handleAnimationTimerEnd(),e.adapter.notifyClosed(n)},s.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.opened},t.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},t.prototype.setTimeoutMs=function(n){var e=s.MIN_AUTO_DISMISS_TIMEOUT_MS,i=s.MAX_AUTO_DISMISS_TIMEOUT_MS,d=s.INDETERMINATE;if(n===s.INDETERMINATE||n<=i&&n>=e)this.autoDismissTimeoutMs=n;else throw new Error(`
        timeoutMs must be an integer in the range `+e+"–"+i+`
        (or `+d+" to disable), but got '"+n+"'")},t.prototype.getCloseOnEscape=function(){return this.closeOnEscape},t.prototype.setCloseOnEscape=function(n){this.closeOnEscape=n},t.prototype.handleKeyDown=function(n){var e=n.key==="Escape"||n.keyCode===27;e&&this.getCloseOnEscape()&&this.close(l)},t.prototype.handleActionButtonClick=function(n){this.close(I)},t.prototype.handleActionIconClick=function(n){this.close(l)},t.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(c.OPENING),this.adapter.removeClass(c.CLOSING)},t.prototype.runNextAnimationFrame=function(n){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(n,0)})},t}(v);/**
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
 */var M=r.SURFACE_SELECTOR,L=r.LABEL_SELECTOR,g=r.ACTION_SELECTOR,D=r.DISMISS_SELECTOR,w=r.OPENING_EVENT,R=r.OPENED_EVENT,P=r.CLOSING_EVENT,z=r.CLOSED_EVENT,V=function(a){y(t,a);function t(){return a!==null&&a.apply(this,arguments)||this}return t.attachTo=function(n){return new t(n)},t.prototype.initialize=function(n){n===void 0&&(n=function(){return O}),this.announce=n()},t.prototype.initialSyncWithDOM=function(){var n=this;this.surfaceEl=this.root.querySelector(M),this.labelEl=this.root.querySelector(L),this.actionEl=this.root.querySelector(g),this.handleKeyDown=function(e){n.foundation.handleKeyDown(e)},this.handleSurfaceClick=function(e){var i=e.target;n.isActionButton(i)?n.foundation.handleActionButtonClick(e):n.isActionIcon(i)&&n.foundation.handleActionIconClick(e)},this.registerKeyDownHandler(this.handleKeyDown),this.registerSurfaceClickHandler(this.handleSurfaceClick)},t.prototype.destroy=function(){a.prototype.destroy.call(this),this.deregisterKeyDownHandler(this.handleKeyDown),this.deregisterSurfaceClickHandler(this.handleSurfaceClick)},t.prototype.open=function(){this.foundation.open()},t.prototype.close=function(n){n===void 0&&(n=""),this.foundation.close(n)},t.prototype.getDefaultFoundation=function(){var n=this,e={addClass:function(i){n.root.classList.add(i)},announce:function(){n.announce(n.labelEl)},notifyClosed:function(i){return n.emit(z,i?{reason:i}:{})},notifyClosing:function(i){return n.emit(P,i?{reason:i}:{})},notifyOpened:function(){return n.emit(R,{})},notifyOpening:function(){return n.emit(w,{})},removeClass:function(i){return n.root.classList.remove(i)}};return new N(e)},Object.defineProperty(t.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(n){this.foundation.setTimeoutMs(n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(n){this.foundation.setCloseOnEscape(n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(n){this.labelEl.textContent=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(n){this.actionEl.textContent=n},enumerable:!1,configurable:!0}),t.prototype.registerKeyDownHandler=function(n){this.listen("keydown",n)},t.prototype.deregisterKeyDownHandler=function(n){this.unlisten("keydown",n)},t.prototype.registerSurfaceClickHandler=function(n){this.surfaceEl.addEventListener("click",n)},t.prototype.deregisterSurfaceClickHandler=function(n){this.surfaceEl.removeEventListener("click",n)},t.prototype.isActionButton=function(n){return!!u(n,g)},t.prototype.isActionIcon=function(n){return!!u(n,D)},t}(C);const F='.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width: 480px), (max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0;}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size{width:36px;height:36px;padding:6px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px;}ino-snackbar{}ino-snackbar .ino-snackbar-layout-container{display:block;top:var(--ino-snackbar-top, 0);bottom:var(--ino-snackbar-bottom, auto);left:var(--ino-snackbar-left, auto);right:var(--ino-snackbar-right, 0)}ino-snackbar.ino-snackbar--type-info{--snackbar-color:#4655ff;--snackbar-color-light:#e2ecff}ino-snackbar.ino-snackbar--type-error{--snackbar-color:#ff2e54;--snackbar-color-light:#ffd6de}ino-snackbar.ino-snackbar--type-success{--snackbar-color:#6cf070;--snackbar-color-light:#d7fad8}ino-snackbar.ino-snackbar--type-warning{--snackbar-color:#ffa42e;--snackbar-color-light:#ffeed6}ino-snackbar .ino-snackbar-container{margin-top:5px;margin-right:5px;background-color:white;border:0.3px solid var(--snackbar-color);border-radius:15px;box-shadow:0 1px 2px var(--snackbar-color-light);justify-content:space-between;min-width:auto;max-width:350px;padding:16px 45px 16px 25px}ino-snackbar .ino-snackbar-container:before{display:none}ino-snackbar .ino-snackbar-close-btn{display:flex;position:absolute;top:0;right:0;width:22px;height:22px;border-radius:30px;padding:0;background-color:white;box-shadow:0 3px 6px rgba(0, 0, 0, 0.1607843137);pointer-events:auto;--ino-icon-button-icon-color:black !important;--ino-icon-button-size:22px;--ino-icon-button-icon-size:8px}ino-snackbar .ino-snackbar-icon-container{background-color:var(--snackbar-color-light);border-radius:50%;justify-content:center;align-items:center;height:30px;width:30px;color:var(--snackbar-color);font-weight:700}ino-snackbar .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-color-primary:var(--snackbar-color)}ino-snackbar.ino-snackbar--type-info .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar.ino-snackbar--type-error .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar.ino-snackbar--type-success .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar .ino-snackbar-message-container{display:flex;flex-direction:column;column-gap:7px;padding:0 0 0 20px}ino-snackbar .ino-snackbar-message-container .ino-snackbar-text-container{color:#74758b}ino-snackbar .ino-snackbar-message-container .ino-snackbar-action-container{margin-top:0.25rem}ino-snackbar .ino-snackbar-message-container .ino-snackbar-action-btn{border:none;background-color:transparent;color:var(--snackbar-color);font-size:12px;font-weight:600;cursor:pointer;padding-left:0;padding-top:5px}',B=F,U=class{constructor(a){E(this,a),this.actionClick=p(this,"actionClick",7),this.hideEl=p(this,"hideEl",7),this.setupTimeout=()=>{this.snackbarInstance.timeoutMs=-1,this.timeout>=0&&(this.nodeTimeout=setTimeout(()=>this.snackbarInstance.close(),this.timeout))},this.interruptTimeout=()=>{this.nodeTimeout&&clearTimeout(this.nodeTimeout)},this.handleSnackbarHide=t=>{this.hideEl.emit(),t.stopPropagation()},this.mapTypeToIconName=t=>{switch(t){case"success":return"snackbar-checkmark";case"error":return"!";case"info":return"i";case"warning":return"!";default:return"i"}},this.getAriaRole=()=>this.type==="error"&&this.actionText?"alertdialog":this.type==="error"?"alert":"status",this.message=void 0,this.actionText=void 0,this.type="info",this.timeout=5e3,this.stayVisibleOnHover=!1,this.a11yLabels={snackbarLabel:this.type,closeLabel:"Close notification"}}handleKeyUp(a){a.key==="Escape"&&this.hideEl.emit()}componentDidLoad(){this.snackbarInstance=new V(this.snackbarElement),this.snackbarElement.addEventListener("MDCSnackbar:closing",this.handleSnackbarHide),this.setupTimeout(),this.stayVisibleOnHover&&(this.snackbarElement.addEventListener("mouseenter",this.interruptTimeout),this.snackbarElement.addEventListener("mouseleave",this.setupTimeout)),this.snackbarInstance.open(),this.message&&console.warn('[ino-snackbar] The attribute "message" is deprecated, please use the default slot instead.')}disconnectedCallback(){var a;(a=this.snackbarInstance)===null||a===void 0||a.destroy(),this.snackbarElement.removeEventListener("MDCSnackbar:closing",this.handleSnackbarHide),this.snackbarElement.removeEventListener("mouseenter",this.interruptTimeout),this.snackbarElement.removeEventListener("mouseleave",this.setupTimeout)}render(){const a=!!this.actionText,t=S(this.el,"icon-slot"),n=m(`ino-snackbar--type-${this.type}`),e=m("mdc-snackbar","ino-snackbar-layout-container"),i={role:this.getAriaRole()};return i.role==="alertdialog"&&(i["aria-modal"]=!0,i["aria-label"]=this.a11yLabels.snackbarLabel),o(T,{key:"5945666b6d14b59a2b2ed761e74744c95fdb0a1c",class:n},o("div",Object.assign({key:"ebf5d96db1eb34c06b81eebccd82d361a7887768",ref:d=>this.snackbarElement=d,class:e},i),o("div",{key:"9dd2edc3d22b88fdc7c6c674d85941f6aaba4835",class:"mdc-snackbar__surface ino-snackbar-container"},o("div",{key:"6fb1b5a8d8decaea26582b44c141097304f19719",class:"mdc-snackbar__actions ino-snackbar-icon-container"},t?o("slot",{name:"icon-slot"}):this.type==="success"?o("ino-icon",{"aria-hidden":"true",class:"ino-snackbar-icon",icon:this.mapTypeToIconName(this.type)}):o("span",null,this.mapTypeToIconName(this.type))),o("div",{key:"35936fe3eeaa4797048f03a1088912d87acd2e5a",class:"mdc-snackbar__label ino-snackbar-message-container"},o("div",{key:"294425d340afefc2651180e48ecca73dd66e6fb2",class:"ino-snackbar-text-container"},this.message?this.message:o("slot",null)),a&&o("div",{class:"ino-snackbar-action-container"},o("button",{onClick:this.actionClick.emit,class:"ino-snackbar-action-btn"},this.actionText)))),o("ino-icon-button",{key:"4176cd7a58265071779deaf397ca225ed551d14a","aria-label":this.a11yLabels.closeLabel,onClick:this.handleSnackbarHide,icon:"close",class:"ino-snackbar-close-btn"})))}get el(){return x(this)}};U.style=B;export{U as ino_snackbar};
