"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[5925],{356:(v,f,d)=>{d.d(f,{M:()=>E,a:()=>l,b:()=>m});var a=d(8435),p=d(804),h={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},c=function(o){function t(e){var r=o.call(this,(0,a.a)((0,a.a)({},t.defaultAdapter),e))||this;return r.shakeAnimationEndHandler=function(){r.handleShakeAnimationEnd()},r}return(0,a._)(t,o),Object.defineProperty(t,"cssClasses",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},t.prototype.getWidth=function(){return this.adapter.getWidth()},t.prototype.shake=function(e){var r=t.cssClasses.LABEL_SHAKE;e?this.adapter.addClass(r):this.adapter.removeClass(r)},t.prototype.float=function(e){var r=t.cssClasses,n=r.LABEL_FLOAT_ABOVE,s=r.LABEL_SHAKE;e?this.adapter.addClass(n):(this.adapter.removeClass(n),this.adapter.removeClass(s))},t.prototype.setRequired=function(e){var r=t.cssClasses.LABEL_REQUIRED;e?this.adapter.addClass(r):this.adapter.removeClass(r)},t.prototype.handleShakeAnimationEnd=function(){this.adapter.removeClass(t.cssClasses.LABEL_SHAKE)},t}(a.M),E=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return(0,a._)(t,o),t.attachTo=function(e){return new t(e)},t.prototype.shake=function(e){this.foundation.shake(e)},t.prototype.float=function(e){this.foundation.float(e)},t.prototype.setRequired=function(e){this.foundation.setRequired(e)},t.prototype.getWidth=function(){return this.foundation.getWidth()},t.prototype.getDefaultFoundation=function(){var e=this;return new c({addClass:function(n){return e.root.classList.add(n)},removeClass:function(n){return e.root.classList.remove(n)},getWidth:function(){return(0,p.e)(e.root)},registerInteractionHandler:function(n,s){return e.listen(n,s)},deregisterInteractionHandler:function(n,s){return e.unlisten(n,s)}})},t}(a.b),i={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},u=function(o){function t(e){var r=o.call(this,(0,a.a)((0,a.a)({},t.defaultAdapter),e))||this;return r.transitionEndHandler=function(n){r.handleTransitionEnd(n)},r}return(0,a._)(t,o),Object.defineProperty(t,"cssClasses",{get:function(){return i},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},t.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},t.prototype.activate=function(){this.adapter.removeClass(i.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(i.LINE_RIPPLE_ACTIVE)},t.prototype.setRippleCenter=function(e){this.adapter.setStyle("transform-origin",e+"px center")},t.prototype.deactivate=function(){this.adapter.addClass(i.LINE_RIPPLE_DEACTIVATING)},t.prototype.handleTransitionEnd=function(e){var r=this.adapter.hasClass(i.LINE_RIPPLE_DEACTIVATING);"opacity"===e.propertyName&&r&&(this.adapter.removeClass(i.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(i.LINE_RIPPLE_DEACTIVATING))},t}(a.M),l=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return(0,a._)(t,o),t.attachTo=function(e){return new t(e)},t.prototype.activate=function(){this.foundation.activate()},t.prototype.deactivate=function(){this.foundation.deactivate()},t.prototype.setRippleCenter=function(e){this.foundation.setRippleCenter(e)},t.prototype.getDefaultFoundation=function(){var e=this;return new u({addClass:function(n){return e.root.classList.add(n)},removeClass:function(n){return e.root.classList.remove(n)},hasClass:function(n){return e.root.classList.contains(n)},setStyle:function(n,s){return e.root.style.setProperty(n,s)},registerEventHandler:function(n,s){return e.listen(n,s)},deregisterEventHandler:function(n,s){return e.unlisten(n,s)}})},t}(a.b),L={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},_={NOTCH_ELEMENT_PADDING:8},C={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},y=function(o){function t(e){return o.call(this,(0,a.a)((0,a.a)({},t.defaultAdapter),e))||this}return(0,a._)(t,o),Object.defineProperty(t,"strings",{get:function(){return L},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),t.prototype.notch=function(e){var r=t.cssClasses.OUTLINE_NOTCHED;e>0&&(e+=_.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(e),this.adapter.addClass(r)},t.prototype.closeNotch=function(){this.adapter.removeClass(t.cssClasses.OUTLINE_NOTCHED),this.adapter.removeNotchWidthProperty()},t}(a.M),m=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return(0,a._)(t,o),t.attachTo=function(e){return new t(e)},t.prototype.initialSyncWithDOM=function(){this.notchElement=this.root.querySelector(L.NOTCH_ELEMENT_SELECTOR);var e=this.root.querySelector("."+c.cssClasses.ROOT);e?(e.style.transitionDuration="0s",this.root.classList.add(C.OUTLINE_UPGRADED),requestAnimationFrame(function(){e.style.transitionDuration=""})):this.root.classList.add(C.NO_LABEL)},t.prototype.notch=function(e){this.foundation.notch(e)},t.prototype.closeNotch=function(){this.foundation.closeNotch()},t.prototype.getDefaultFoundation=function(){var e=this;return new y({addClass:function(n){return e.root.classList.add(n)},removeClass:function(n){return e.root.classList.remove(n)},setNotchWidthProperty:function(n){e.notchElement.style.setProperty("width",n+"px")},removeNotchWidthProperty:function(){e.notchElement.style.removeProperty("width")}})},t}(a.b)},1208:(v,f,d)=>{function a(){return"_"+Math.random().toString(36).substr(2,9)}function p(i,u){return i.querySelector(`[slot="${u}"]`)}function h(i,u){var l;return u?i.querySelectorAll(`[slot="${u}"]`).length>0:0===(null===(l=i.querySelector("slot"))||void 0===l?void 0:l.assignedElements().length)}function c(i){var u;null===(u=i.querySelector("[data-ino-focus]"))||void 0===u||u.focus()}function E(i){i.stopPropagation(),i.preventDefault()}d.d(f,{a:()=>p,f:()=>c,g:()=>a,h:()=>h,p:()=>E})}}]);