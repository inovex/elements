"use strict";(self["webpackChunk_inovex_de_elements_landingpage"]=self["webpackChunk_inovex_de_elements_landingpage"]||[]).push([[9638],{9638:function(t,e,n){n.d(e,{M:function(){return s},a:function(){return d},b:function(){return E}});var r=n(7201),o=n(7458),i={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},a=function(t){function e(n){var o=t.call(this,(0,r.a)((0,r.a)({},e.defaultAdapter),n))||this;return o.shakeAnimationEndHandler_=function(){return o.handleShakeAnimationEnd_()},o}return(0,r._)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return i},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,r=n.LABEL_FLOAT_ABOVE,o=n.LABEL_SHAKE;t?this.adapter.addClass(r):(this.adapter.removeClass(r),this.adapter.removeClass(o))},e.prototype.setRequired=function(t){var n=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleShakeAnimationEnd_=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(r.M),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,r._)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.shake=function(t){this.foundation.shake(t)},e.prototype.float=function(t){this.foundation.float(t)},e.prototype.setRequired=function(t){this.foundation.setRequired(t)},e.prototype.getWidth=function(){return this.foundation.getWidth()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},getWidth:function(){return(0,o.e)(t.root)},registerInteractionHandler:function(e,n){return t.listen(e,n)},deregisterInteractionHandler:function(e,n){return t.unlisten(e,n)}};return new a(e)},e}(r.b),u={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},c=function(t){function e(n){var o=t.call(this,(0,r.a)((0,r.a)({},e.defaultAdapter),n))||this;return o.transitionEndHandler_=function(t){return o.handleTransitionEnd(t)},o}return(0,r._)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.activate=function(){this.adapter.removeClass(u.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(u.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(u.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var e=this.adapter.hasClass(u.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter.removeClass(u.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(u.LINE_RIPPLE_DEACTIVATING))},e}(r.M),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,r._)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.setRippleCenter=function(t){this.foundation.setRippleCenter(t)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},setStyle:function(e,n){return t.root.style.setProperty(e,n)},registerEventHandler:function(e,n){return t.listen(e,n)},deregisterEventHandler:function(e,n){return t.unlisten(e,n)}};return new c(e)},e}(r.b),l={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},f={NOTCH_ELEMENT_PADDING:8},p={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},h=function(t){function e(n){return t.call(this,(0,r.a)((0,r.a)({},e.defaultAdapter),n))||this}return(0,r._)(e,t),Object.defineProperty(e,"strings",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=f.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(r.M),E=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,r._)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.notchElement_=this.root.querySelector(l.NOTCH_ELEMENT_SELECTOR);var t=this.root.querySelector("."+a.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root.classList.add(p.OUTLINE_UPGRADED),requestAnimationFrame((function(){t.style.transitionDuration=""}))):this.root.classList.add(p.NO_LABEL)},e.prototype.notch=function(t){this.foundation.notch(t)},e.prototype.closeNotch=function(){this.foundation.closeNotch()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},setNotchWidthProperty:function(e){return t.notchElement_.style.setProperty("width",e+"px")},removeNotchWidthProperty:function(){return t.notchElement_.style.removeProperty("width")}};return new h(e)},e}(r.b)}}]);
//# sourceMappingURL=9638.b627ebb1.js.map