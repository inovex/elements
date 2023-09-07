"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[259],{4022:(w,x,c)=>{function d(){return"_"+Math.random().toString(36).substr(2,9)}function f(s,m){return s.querySelector(`[slot="${m}"]`)}function u(s,m){var p;return m?s.querySelectorAll(`[slot="${m}"]`).length>0:0===(null===(p=s.querySelector("slot"))||void 0===p?void 0:p.assignedElements().length)}function g(s){var m;null===(m=s.querySelector("[data-ino-focus]"))||void 0===m||m.focus()}function b(s){s.stopPropagation(),s.preventDefault()}c.d(x,{a:()=>f,f:()=>g,g:()=>d,h:()=>u,p:()=>b})},259:(w,x,c)=>{c.r(x),c.d(x,{ino_dialog:()=>T});var d=c(2975),f=c(804),u=c(4022),g=c(2168),b=c(6348),s=c(194),m=c(9806),a={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},_={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},C={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},y=(()=>{return(i=y||(y={})).POLL_SCROLL_POS="poll_scroll_position",i.POLL_LAYOUT_CHANGE="poll_layout_change",y;var i})(),S=function(i){function e(t){var o=i.call(this,(0,g.a)((0,g.a)({},e.defaultAdapter),t))||this;return o.dialogOpen=!1,o.isFullscreen=!1,o.animationFrame=0,o.animationTimer=0,o.escapeKeyAction=_.CLOSE_ACTION,o.scrimClickAction=_.CLOSE_ACTION,o.autoStackButtons=!0,o.areButtonsStacked=!1,o.suppressDefaultPressSelector=_.SUPPRESS_DEFAULT_PRESS_SELECTOR,o.animFrame=new m.A,o.contentScrollHandler=function(){o.handleScrollEvent()},o.windowResizeHandler=function(){o.layout()},o.windowOrientationChangeHandler=function(){o.layout()},o}return(0,g._)(e,i),Object.defineProperty(e,"cssClasses",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(a.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(a.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(t){var o=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(a.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(a.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){o.adapter.addClass(a.OPEN),o.adapter.addBodyClass(a.SCROLL_LOCK),o.layout(),o.animationTimer=setTimeout(function(){o.handleAnimationTimerEnd(),o.adapter.trapFocus(o.adapter.getInitialFocusEl()),o.adapter.notifyOpened()},C.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var o=this;void 0===t&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(a.CLOSING),this.adapter.removeClass(a.OPEN),this.adapter.removeBodyClass(a.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){o.adapter.releaseFocus(),o.handleAnimationTimerEnd(),o.adapter.notifyClosed(t)},C.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(a.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){t.adapter.addClass(a.SURFACE_SCRIM_SHOWN)})},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(a.SURFACE_SCRIM_SHOWN),this.adapter.addClass(a.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(a.SURFACE_SCRIM_HIDING),this.adapter.removeClass(a.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.animFrame.request(y.POLL_LAYOUT_CHANGE,function(){t.layoutInternal()})},e.prototype.handleClick=function(t){if(this.adapter.eventTargetMatches(t.target,_.SCRIM_SELECTOR)&&""!==this.scrimClickAction)this.close(this.scrimClickAction);else{var n=this.adapter.getActionFromEvent(t);n&&this.close(n)}},e.prototype.handleKeydown=function(t){var o="Enter"===t.key||13===t.keyCode;if(o&&!this.adapter.getActionFromEvent(t)){var r=t.composedPath?t.composedPath()[0]:t.target,h=!this.suppressDefaultPressSelector||!this.adapter.eventTargetMatches(r,this.suppressDefaultPressSelector);o&&h&&this.adapter.clickDefaultButton()}},e.prototype.handleDocumentKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&""!==this.escapeKeyAction&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(y.POLL_SCROLL_POS,function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()})},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(a.OPENING),this.adapter.removeClass(a.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var o=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){o.animationFrame=0,clearTimeout(o.animationTimer),o.animationTimer=setTimeout(t,0)})},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(a.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(a.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(a.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(a.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(a.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(a.SCROLL_DIVIDER_HEADER):this.adapter.addClass(a.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(a.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(a.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(a.SCROLL_DIVIDER_FOOTER)},e}(g.M),l=S.strings,R=function(i){function e(){return null!==i&&i.apply(this,arguments)||this}return(0,g._)(e,i),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"escapeKeyAction",{get:function(){return this.foundation.getEscapeKeyAction()},set:function(t){this.foundation.setEscapeKeyAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scrimClickAction",{get:function(){return this.foundation.getScrimClickAction()},set:function(t){this.foundation.setScrimClickAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoStackButtons",{get:function(){return this.foundation.getAutoStackButtons()},set:function(t){this.foundation.setAutoStackButtons(t)},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var o,n;void 0===t&&(t=function(v,F){return new b.F(v,F)});var r=this.root.querySelector(l.CONTAINER_SELECTOR);if(!r)throw new Error("Dialog component requires a "+l.CONTAINER_SELECTOR+" container element");this.container=r,this.content=this.root.querySelector(l.CONTENT_SELECTOR),this.buttons=[].slice.call(this.root.querySelectorAll(l.BUTTON_SELECTOR)),this.defaultButton=this.root.querySelector("["+l.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory=t,this.buttonRipples=[];try{for(var h=(0,g.b)(this.buttons),E=h.next();!E.done;E=h.next())this.buttonRipples.push(new s.M(E.value))}catch(v){o={error:v}}finally{try{E&&!E.done&&(n=h.return)&&n.call(h)}finally{if(o)throw o.error}}},e.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap=function p(i,e,t){return e(i,{initialFocusEl:t})}(this.container,this.focusTrapFactory,this.getInitialFocusEl()||void 0),this.handleClick=this.foundation.handleClick.bind(this.foundation),this.handleKeydown=this.foundation.handleKeydown.bind(this.foundation),this.handleDocumentKeydown=this.foundation.handleDocumentKeydown.bind(this.foundation),this.handleOpening=function(){document.addEventListener("keydown",t.handleDocumentKeydown)},this.handleClosing=function(){document.removeEventListener("keydown",t.handleDocumentKeydown)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown),this.listen(l.OPENING_EVENT,this.handleOpening),this.listen(l.CLOSING_EVENT,this.handleClosing)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),this.unlisten(l.OPENING_EVENT,this.handleOpening),this.unlisten(l.CLOSING_EVENT,this.handleClosing),this.handleClosing(),this.buttonRipples.forEach(function(t){t.destroy()}),i.prototype.destroy.call(this)},e.prototype.layout=function(){this.foundation.layout()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){void 0===t&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,o={addBodyClass:function(n){return document.body.classList.add(n)},addClass:function(n){return t.root.classList.add(n)},areButtonsStacked:function(){return function I(i){var e=new Set;return[].forEach.call(i,function(t){return e.add(t.offsetTop)}),e.size>1}(t.buttons)},clickDefaultButton:function(){t.defaultButton&&!t.defaultButton.disabled&&t.defaultButton.click()},eventTargetMatches:function(n,r){return!!n&&(0,f.m)(n,r)},getActionFromEvent:function(n){if(!n.target)return"";var r=(0,f.c)(n.target,"["+l.ACTION_ATTRIBUTE+"]");return r&&r.getAttribute(l.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return t.getInitialFocusEl()},hasClass:function(n){return t.root.classList.contains(n)},isContentScrollable:function(){return function A(i){return!!i&&i.scrollHeight>i.offsetHeight}(t.content)},notifyClosed:function(n){return t.emit(l.CLOSED_EVENT,n?{action:n}:{})},notifyClosing:function(n){return t.emit(l.CLOSING_EVENT,n?{action:n}:{})},notifyOpened:function(){return t.emit(l.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(l.OPENING_EVENT,{})},releaseFocus:function(){t.focusTrap.releaseFocus()},removeBodyClass:function(n){return document.body.classList.remove(n)},removeClass:function(n){return t.root.classList.remove(n)},reverseButtons:function(){t.buttons.reverse(),t.buttons.forEach(function(n){n.parentElement.appendChild(n)})},trapFocus:function(){t.focusTrap.trapFocus()},registerContentEventHandler:function(n,r){t.content instanceof HTMLElement&&t.content.addEventListener(n,r)},deregisterContentEventHandler:function(n,r){t.content instanceof HTMLElement&&t.content.removeEventListener(n,r)},isScrollableContentAtTop:function(){return function D(i){return!!i&&0===i.scrollTop}(t.content)},isScrollableContentAtBottom:function(){return function L(i){return!!i&&Math.ceil(i.scrollHeight-i.scrollTop)===i.clientHeight}(t.content)},registerWindowEventHandler:function(n,r){window.addEventListener(n,r)},deregisterWindowEventHandler:function(n,r){window.removeEventListener(n,r)}};return new S(o)},e.prototype.getInitialFocusEl=function(){return this.root.querySelector("["+l.INITIAL_FOCUS_ATTRIBUTE+"]")},e}(g.c);const O="data-ino-dialog-action",T=class{constructor(i){(0,d.r)(this,i),this.close=(0,d.c)(this,"close",7),this.action=(0,d.c)(this,"action",7),this.open=!1}openChanged(i){var e,t;i?null===(e=this.mdcDialog)||void 0===e||e.open():null===(t=this.mdcDialog)||void 0===t||t.close()}handleKeyUp(i){"Escape"===i.key&&this.open&&this.dismissible&&this.close.emit("close")}componentWillRender(){if(this.mdcDialog&&this.open)return new Promise(i=>{this.mdcDialog.listen("MDCDialog:opened",()=>i(),{once:!0})})}componentWillLoad(){(this.attachTo?document.querySelector(this.attachTo):document.body)?.appendChild(this.el)}componentDidLoad(){var i;this.mdcDialog=new R(this.el.shadowRoot.querySelector(".mdc-dialog")),this.mdcDialog.scrimClickAction="",this.mdcDialog.escapeKeyAction="",this.mdcDialog.listen("click",this.handleDialogClick.bind(this)),this.open&&(null===(i=this.mdcDialog)||void 0===i||i.open())}disconnectedCallback(){var i;null===(i=this.mdcDialog)||void 0===i||i.destroy()}handleDialogClick(i){if(!i.target)return;const e=(0,f.c)(i.target,`[${O}]`);e&&this.close.emit(e.getAttribute(O))}render(){const i=(0,u.h)(this.el,"default"),e=(0,u.h)(this.el,"header"),t=(0,u.h)(this.el,"body"),o=(0,u.h)(this.el,"footer");return(0,d.h)(d.H,{class:{"ino-dialog--fullwidth":this.fullwidth}},(0,d.h)("div",{class:"mdc-dialog"},(0,d.h)("div",{class:"mdc-dialog__container"},(0,d.h)("div",{class:"mdc-dialog__surface",role:"alertdialog","aria-modal":"true"},(0,d.h)("div",{tabindex:"0"}),i?(0,d.h)("slot",null):(0,d.h)("div",null,e?(0,d.h)("slot",{name:"header"}):(0,d.h)("header",null,this.icon&&(0,d.h)("ino-icon",{icon:this.icon}),(0,d.h)("h1",null,this.headerText)),t?(0,d.h)("slot",{name:"body"}):(0,d.h)("section",{class:"body"},this.bodyText),o?(0,d.h)("slot",{name:"footer"}):(0,d.h)("footer",null,this.cancelText&&(0,d.h)("ino-button",{variant:"outlined",onClick:()=>this.close.emit("close")},this.cancelText),this.actionText&&(0,d.h)("ino-button",{type:"submit",onClick:()=>this.action.emit("submit")},this.actionText))))),(0,d.h)("div",{class:"mdc-dialog__scrim",onClick:()=>this.dismissible&&this.close.emit("close")})))}get el(){return(0,d.g)(this)}static get watchers(){return{open:["openChanged"]}}};T.style='.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0, 0, 0, 0.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0, 0, 0, 0.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-dialog__title-icon{}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media (max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media (min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.mdc-dialog .mdc-dialog__container{}}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media (max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media (max-width: 720px) and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media (max-width: 720px) and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media (max-width: 720px) and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media (max-width: 720px) and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media (max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media (max-width: 720px) and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media (max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media (min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right;}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right;}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px;}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0;}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left;}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}:host{}@media (max-width: 584px){:host .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media (min-width: 584px){:host .mdc-dialog__surface{max-width:552px}}:host .mdc-dialog__surface{min-width:480px}:host .mdc-dialog__surface{background-color:var(--ino-dialog-background-color, #fff)}:host .mdc-dialog__scrim{background-color:rgba(138, 161, 255, 0.25)}:host .mdc-dialog__surface-scrim{background-color:rgba(138, 161, 255, 0.25)}:host .mdc-dialog__scrim{backdrop-filter:blur(5px)}:host .mdc-dialog .mdc-dialog__container{height:var(--ino-dialog-height, auto);width:var(--ino-dialog-width, auto)}:host .mdc-dialog .mdc-dialog__surface{overflow:visible;min-height:unset;max-height:unset;height:100%;width:100%;border-radius:var(--ino-dialog-border-radius, 17px);box-shadow:var(--ino-dialog-box-shadow, 0px 0px 22px rgba(93, 91, 105, 0.35));border:var(--ino-dialog-border, 1px solid #2c02ff);padding:var(--ino-dialog-padding, 62px)}:host .mdc-dialog .mdc-dialog__surface header{display:flex;align-items:center;gap:2rem}:host .mdc-dialog .mdc-dialog__surface header ino-icon{--icon-width:2rem;--icon-height:2rem}:host .mdc-dialog .mdc-dialog__surface header h1{margin:0 0 0;font-weight:400}:host .mdc-dialog .mdc-dialog__surface section{margin:38px 0 0}:host .mdc-dialog .mdc-dialog__surface footer{margin-top:63px;display:flex;justify-content:space-around}:host(.ino-dialog--fullwidth){--ino-dialog-width:100%;--ino-dialog-height:calc(100% - 80px)}:host(.ino-dialog--fullwidth) .mdc-dialog{align-items:flex-end}:host(.ino-dialog--fullwidth) .mdc-dialog .mdc-dialog__container{justify-content:unset;transform:translateY(100%);transition:transform 300ms ease-in-out}:host(.ino-dialog--fullwidth) .mdc-dialog--open .mdc-dialog__container{transform:translateY(0px)}:host(.ino-dialog--fullwidth) .mdc-dialog .mdc-dialog__surface{border-bottom-left-radius:0;border-bottom-right-radius:0;max-width:100%}'}}]);