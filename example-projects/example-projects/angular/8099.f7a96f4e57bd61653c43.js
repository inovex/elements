(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[8099],{5897:(t,n,e)=>{"use strict";e.d(n,{a:()=>i,c:()=>a,g:()=>o});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function a(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}},8939:(t,n,e)=>{"use strict";e.d(n,{M:()=>d,_:()=>o,a:()=>a,b:()=>r,c:()=>l,d:()=>c,e:()=>s});var i=function(t,n){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},i(t,n)};function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var a=function(){return a=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},a.apply(this,arguments)};function r(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var i,o,a=e.call(t),r=[];try{for(;(void 0===n||n-- >0)&&!(i=a.next()).done;)r.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return r}function c(t,n,e){if(e||2===arguments.length)for(var i,o=0,a=n.length;o<a;o++)!i&&o in n||(i||(i=Array.prototype.slice.call(n,0,o)),i[o]=n[o]);return t.concat(i||Array.prototype.slice.call(n))}var d=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),l=function(){function t(t,n){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];this.root=t,this.initialize.apply(this,c([],s(e))),this.foundation=void 0===n?this.getDefaultFoundation():n,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(n){return new t(n,new d({}))},t.prototype.initialize=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(t,n,e){this.root.addEventListener(t,n,e)},t.prototype.unlisten=function(t,n,e){this.root.removeEventListener(t,n,e)},t.prototype.emit=function(t,n,e){var i;void 0===e&&(e=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:e,detail:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,e,!1,n),this.root.dispatchEvent(i)},t}()},4898:(t,n,e)=>{"use strict";e.d(n,{c:()=>i});var i=(0,e(5897).c)(function(t){!function(){var n={}.hasOwnProperty;function e(){for(var t=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if("string"===a||"number"===a)t.push(o);else if(Array.isArray(o)&&o.length){var r=e.apply(null,o);r&&t.push(r)}else if("object"===a)for(var s in o)n.call(o,s)&&o[s]&&t.push(s)}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e}()})},8099:(t,n,e)=>{"use strict";e.r(n),e.d(n,{ino_snackbar:()=>A});var i=e(648),o=e(4898),a=e(8939),r=e(8791),s=(e(5897),{CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"}),c={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},d={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},l=d.ARIA_LIVE_DELAY_MS,p=c.ARIA_LIVE_LABEL_TEXT_ATTR;function u(t,n){void 0===n&&(n=t);var e=t.getAttribute("aria-live"),i=n.textContent.trim();i&&e&&(t.setAttribute("aria-live","off"),n.textContent="",n.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',n.setAttribute(p,i),setTimeout(function(){t.setAttribute("aria-live",e),n.removeAttribute(p),n.textContent=i},l))}var m=s.OPENING,b=s.OPEN,f=s.CLOSING,h=c.REASON_ACTION,_=c.REASON_DISMISS,y=function(t){function n(e){var i=t.call(this,(0,a.a)((0,a.a)({},n.defaultAdapter),e))||this;return i.opened=!1,i.animationFrame=0,i.animationTimer=0,i.autoDismissTimer=0,i.autoDismissTimeoutMs=d.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,i.closeOnEscape=!0,i}return(0,a._)(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),n.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(m),this.adapter.removeClass(b),this.adapter.removeClass(f)},n.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(f),this.adapter.addClass(m),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(b),t.animationTimer=setTimeout(function(){var n=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),n!==d.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close(_)},n))},d.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},n.prototype.close=function(t){var n=this;void 0===t&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(s.CLOSING),this.adapter.removeClass(s.OPEN),this.adapter.removeClass(s.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},d.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},n.prototype.isOpen=function(){return this.opened},n.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},n.prototype.setTimeoutMs=function(t){var n=d.MIN_AUTO_DISMISS_TIMEOUT_MS,e=d.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===d.INDETERMINATE||t<=e&&t>=n))throw new Error("\n        timeoutMs must be an integer in the range "+n+"\u2013"+e+"\n        (or "+d.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs=t},n.prototype.getCloseOnEscape=function(){return this.closeOnEscape},n.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},n.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(_)},n.prototype.handleActionButtonClick=function(t){this.close(h)},n.prototype.handleActionIconClick=function(t){this.close(_)},n.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},n.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(s.OPENING),this.adapter.removeClass(s.CLOSING)},n.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},n}(a.M),k=c.SURFACE_SELECTOR,g=c.LABEL_SELECTOR,E=c.ACTION_SELECTOR,v=c.DISMISS_SELECTOR,x=c.OPENING_EVENT,T=c.OPENED_EVENT,O=c.CLOSING_EVENT,S=c.CLOSED_EVENT,C=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return(0,a._)(n,t),n.attachTo=function(t){return new n(t)},n.prototype.initialize=function(t){void 0===t&&(t=function(){return u}),this.announce=t()},n.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl=this.root.querySelector(k),this.labelEl=this.root.querySelector(g),this.actionEl=this.root.querySelector(E),this.handleKeyDown=function(n){t.foundation.handleKeyDown(n)},this.handleSurfaceClick=function(n){var e=n.target;t.isActionButton(e)?t.foundation.handleActionButtonClick(n):t.isActionIcon(e)&&t.foundation.handleActionIconClick(n)},this.registerKeyDownHandler(this.handleKeyDown),this.registerSurfaceClickHandler(this.handleSurfaceClick)},n.prototype.destroy=function(){t.prototype.destroy.call(this),this.deregisterKeyDownHandler(this.handleKeyDown),this.deregisterSurfaceClickHandler(this.handleSurfaceClick)},n.prototype.open=function(){this.foundation.open()},n.prototype.close=function(t){void 0===t&&(t=""),this.foundation.close(t)},n.prototype.getDefaultFoundation=function(){var t=this;return new y({addClass:function(n){t.root.classList.add(n)},announce:function(){t.announce(t.labelEl)},notifyClosed:function(n){return t.emit(S,n?{reason:n}:{})},notifyClosing:function(n){return t.emit(O,n?{reason:n}:{})},notifyOpened:function(){return t.emit(T,{})},notifyOpening:function(){return t.emit(x,{})},removeClass:function(n){return t.root.classList.remove(n)}})},Object.defineProperty(n.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(t){this.foundation.setTimeoutMs(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(t){this.foundation.setCloseOnEscape(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(t){this.labelEl.textContent=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(t){this.actionEl.textContent=t},enumerable:!1,configurable:!0}),n.prototype.registerKeyDownHandler=function(t){this.listen("keydown",t)},n.prototype.deregisterKeyDownHandler=function(t){this.unlisten("keydown",t)},n.prototype.registerSurfaceClickHandler=function(t){this.surfaceEl.addEventListener("click",t)},n.prototype.deregisterSurfaceClickHandler=function(t){this.surfaceEl.removeEventListener("click",t)},n.prototype.isActionButton=function(t){return Boolean((0,r.c)(t,E))},n.prototype.isActionIcon=function(t){return Boolean((0,r.c)(t,v))},n}(a.c);const A=class{constructor(t){(0,i.r)(this,t),this.actionClick=(0,i.c)(this,"actionClick",7),this.hideEl=(0,i.c)(this,"hideEl",7),this.type="info",this.timeout=5e3,this.stayVisibleOnHover=!1,this.setupTimeout=()=>{this.snackbarInstance.timeoutMs=-1,this.timeout>=0&&(this.nodeTimeout=setTimeout(()=>this.snackbarInstance.close(),this.timeout))},this.interruptTimeout=()=>{this.nodeTimeout&&clearTimeout(this.nodeTimeout)},this.handleSnackbarHide=t=>{this.hideEl.emit(),t.stopPropagation()},this.mapTypeToIconName=t=>{switch(t){case"success":return"snackbar-checkmark";case"error":return"snackbar-error";default:return"snackbar-information"}}}componentDidLoad(){this.snackbarInstance=new C(this.snackbarElement),this.snackbarElement.addEventListener("MDCSnackbar:closing",this.handleSnackbarHide),this.setupTimeout(),this.stayVisibleOnHover&&(this.snackbarElement.addEventListener("mouseenter",this.interruptTimeout),this.snackbarElement.addEventListener("mouseleave",this.setupTimeout)),this.snackbarInstance.open(),this.message&&console.warn('[ino-snackbar] The attribute "message" is deprecated, please use the default slot instead.')}disconnectedCallback(){var t;null===(t=this.snackbarInstance)||void 0===t||t.destroy(),this.snackbarElement.removeEventListener("MDCSnackbar:closing",this.handleSnackbarHide),this.snackbarElement.removeEventListener("mouseenter",this.interruptTimeout),this.snackbarElement.removeEventListener("mouseleave",this.setupTimeout)}render(){const t=Boolean(this.actionText),n=(0,o.c)(`ino-snackbar--type-${this.type}`),e=(0,o.c)("mdc-snackbar","ino-snackbar-layout-container");return(0,i.h)(i.H,{class:n},(0,i.h)("div",{ref:t=>this.snackbarElement=t,class:e,"aria-live":"assertive","aria-atomic":"true"},(0,i.h)("div",{class:"mdc-snackbar__surface ino-snackbar-container"},(0,i.h)("div",{class:"mdc-snackbar__actions ino-snackbar-icon-container"},(0,i.h)("ino-icon",{class:"ino-snackbar-icon",icon:this.mapTypeToIconName(this.type)})),(0,i.h)("div",{class:"mdc-snackbar__label ino-snackbar-message-container","aria-atomic":"false"},(0,i.h)("div",{class:"ino-snackbar-text-container"},this.message?this.message:(0,i.h)("slot",null)),t&&(0,i.h)("div",null,(0,i.h)("button",{onClick:this.actionClick.emit,class:"ino-snackbar-action-btn"},this.actionText)))),(0,i.h)("ino-icon-button",{onClick:this.handleSnackbarHide,icon:"close",class:"ino-snackbar-close-btn","color-scheme":"dark"})))}get el(){return(0,i.g)(this)}};A.style='.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width: 480px), (max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0;}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size{width:36px;height:36px;padding:6px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px;}ino-snackbar{}ino-snackbar .ino-snackbar-layout-container{display:block;top:var(--ino-snackbar-top, 0);bottom:var(--ino-snackbar-bottom, auto);left:var(--ino-snackbar-left, auto);right:var(--ino-snackbar-right, 0)}ino-snackbar.ino-snackbar--type-info{--snackbar-color:#3d40f5;--snackbar-color-light:#efeffe}ino-snackbar.ino-snackbar--type-error{--snackbar-color:#eb003b;--snackbar-color-light:#ffd2dd}ino-snackbar.ino-snackbar--type-success{--snackbar-color:#9ccd00;--snackbar-color-light:#edffb4}ino-snackbar .ino-snackbar-container{margin-top:5px;margin-right:5px;background-color:white;border:0.3px solid var(--snackbar-color);border-radius:15px;box-shadow:0 1px 2px var(--snackbar-color-light);justify-content:space-between;min-width:auto;max-width:350px;padding:16px 45px 16px 25px}ino-snackbar .ino-snackbar-container:hover~.ino-snackbar-close-btn{display:inline-flex}ino-snackbar .ino-snackbar-container:before{display:none}ino-snackbar .ino-snackbar-close-btn{display:none;position:absolute;top:0;right:0;width:22px;height:22px;border-radius:30px;padding:0;background-color:white;box-shadow:0 3px 6px #00000029;pointer-events:auto;--ino-icon-button-icon-color:black !important;--ino-icon-button-size:22px;--ino-icon-button-icon-size:8px}ino-snackbar .ino-snackbar-close-btn:hover{display:inline-flex}ino-snackbar .ino-snackbar-icon-container{background-color:var(--snackbar-color-light);border-radius:50%;justify-content:center;align-items:center;height:30px;width:30px}ino-snackbar .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-color-primary:var(--snackbar-color)}ino-snackbar.ino-snackbar--type-info .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar.ino-snackbar--type-error .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar.ino-snackbar--type-success .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar .ino-snackbar-message-container{display:flex;flex-direction:column;column-gap:7px;padding:0 0 0 20px}ino-snackbar .ino-snackbar-message-container .ino-snackbar-text-container{color:#74758b}ino-snackbar .ino-snackbar-message-container .ino-snackbar-action-btn{border:none;background-color:transparent;color:var(--snackbar-color);font-size:12px;font-weight:600;cursor:pointer;padding-left:0;padding-top:5px}'},8791:(t,n,e)=>{"use strict";function i(t,n){if(t.closest)return t.closest(n);for(var e=t;e;){if(o(e,n))return e;e=e.parentElement}return null}function o(t,n){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,n)}function a(t){if(null!==t.offsetParent)return t.scrollWidth;var n=t.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var e=n.scrollWidth;return document.documentElement.removeChild(n),e}e.d(n,{c:()=>i,e:()=>a,m:()=>o})}}]);