"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[6091],{1421:(M,D,b)=>{b.d(D,{M:()=>C,_:()=>w,a:()=>g,b:()=>m,c:()=>S,d:()=>f,e:()=>y});var p=function(a,o){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,s){u.__proto__=s}||function(u,s){for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(u[c]=s[c])})(a,o)};function w(a,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function u(){this.constructor=a}p(a,o),a.prototype=null===o?Object.create(o):(u.prototype=o.prototype,new u)}var g=function(){return g=Object.assign||function(o){for(var u,s=1,c=arguments.length;s<c;s++)for(var h in u=arguments[s])Object.prototype.hasOwnProperty.call(u,h)&&(o[h]=u[h]);return o},g.apply(this,arguments)};function m(a){var o="function"==typeof Symbol&&Symbol.iterator,u=o&&a[o],s=0;if(u)return u.call(a);if(a&&"number"==typeof a.length)return{next:function(){return a&&s>=a.length&&(a=void 0),{value:a&&a[s++],done:!a}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(a,o){var u="function"==typeof Symbol&&a[Symbol.iterator];if(!u)return a;var c,R,s=u.call(a),h=[];try{for(;(void 0===o||o-- >0)&&!(c=s.next()).done;)h.push(c.value)}catch(l){R={error:l}}finally{try{c&&!c.done&&(u=s.return)&&u.call(s)}finally{if(R)throw R.error}}return h}function f(a,o,u){if(u||2===arguments.length)for(var h,s=0,c=o.length;s<c;s++)(h||!(s in o))&&(h||(h=Array.prototype.slice.call(o,0,s)),h[s]=o[s]);return a.concat(h||Array.prototype.slice.call(o))}"function"==typeof SuppressedError&&SuppressedError;var C=function(){function a(o){void 0===o&&(o={}),this.adapter=o}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}(),S=function(){function a(o,u){for(var s=[],c=2;c<arguments.length;c++)s[c-2]=arguments[c];this.root=o,this.initialize.apply(this,f([],y(s))),this.foundation=void 0===u?this.getDefaultFoundation():u,this.foundation.init(),this.initialSyncWithDOM()}return a.attachTo=function(o){return new a(o,new C({}))},a.prototype.initialize=function(){for(var o=[],u=0;u<arguments.length;u++)o[u]=arguments[u]},a.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},a.prototype.initialSyncWithDOM=function(){},a.prototype.destroy=function(){this.foundation.destroy()},a.prototype.listen=function(o,u,s){this.root.addEventListener(o,u,s)},a.prototype.unlisten=function(o,u,s){this.root.removeEventListener(o,u,s)},a.prototype.emit=function(o,u,s){var c;void 0===s&&(s=!1),"function"==typeof CustomEvent?c=new CustomEvent(o,{bubbles:s,detail:u}):(c=document.createEvent("CustomEvent")).initCustomEvent(o,s,!1,u),this.root.dispatchEvent(c)},a}()},6091:(M,D,b)=>{b.d(D,{M:()=>R,a:()=>g,b:()=>h});var p=b(1421),w=b(804);function g(l){return void 0===l&&(l=window),!!function m(l){void 0===l&&(l=window);var n=!1;try{var t={get passive(){return n=!0,!1}},e=function(){};l.document.addEventListener("test",e,t),l.document.removeEventListener("test",e,t)}catch{n=!1}return n}(l)&&{passive:!0}}var S,y={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},f={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},C={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},u=["touchstart","pointerdown","mousedown","keydown"],s=["touchend","pointerup","mouseup","contextmenu"],c=[],h=function(l){function n(t){var e=l.call(this,(0,p.a)((0,p.a)({},n.defaultAdapter),t))||this;return e.activationAnimationHasEnded=!1,e.activationTimer=0,e.fgDeactivationRemovalTimer=0,e.fgScale="0",e.frame={width:0,height:0},e.initialSize=0,e.layoutFrame=0,e.maxRadius=0,e.unboundedCoords={left:0,top:0},e.activationState=e.defaultActivationState(),e.activationTimerCallback=function(){e.activationAnimationHasEnded=!0,e.runDeactivationUXLogicIfReady()},e.activateHandler=function(i){e.activateImpl(i)},e.deactivateHandler=function(){e.deactivateImpl()},e.focusHandler=function(){e.handleFocus()},e.blurHandler=function(){e.handleBlur()},e.resizeHandler=function(){e.layout()},e}return(0,p._)(n,l),Object.defineProperty(n,"cssClasses",{get:function(){return y},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var i=n.cssClasses,r=i.ROOT,d=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(d),t.layoutInternal())})}},n.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(n.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(n.cssClasses.FG_DEACTIVATION));var e=n.cssClasses,i=e.ROOT,r=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},n.prototype.activate=function(t){this.activateImpl(t)},n.prototype.deactivate=function(){this.deactivateImpl()},n.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},n.prototype.setUnbounded=function(t){var e=n.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},n.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(n.cssClasses.BG_FOCUSED)})},n.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(n.cssClasses.BG_FOCUSED)})},n.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},n.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},n.prototype.registerRootHandlers=function(t){var e,i;if(t){try{for(var r=(0,p.b)(u),d=r.next();!d.done;d=r.next())this.adapter.registerInteractionHandler(d.value,this.activateHandler)}catch(A){e={error:A}}finally{try{d&&!d.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},n.prototype.registerDeactivationHandlers=function(t){var e,i;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=(0,p.b)(s),d=r.next();!d.done;d=r.next())this.adapter.registerDocumentInteractionHandler(d.value,this.deactivateHandler)}catch(A){e={error:A}}finally{try{d&&!d.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}},n.prototype.deregisterRootHandlers=function(){var t,e;try{for(var i=(0,p.b)(u),r=i.next();!r.done;r=i.next())this.adapter.deregisterInteractionHandler(r.value,this.activateHandler)}catch(v){t={error:v}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},n.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=(0,p.b)(s),r=i.next();!r.done;r=i.next())this.adapter.deregisterDocumentInteractionHandler(r.value,this.deactivateHandler)}catch(v){t={error:v}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},n.prototype.removeCssVars=function(){var t=this,e=n.strings;Object.keys(e).forEach(function(r){0===r.indexOf("VAR_")&&t.adapter.updateCssVariable(e[r],null)})},n.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent;if(!r||void 0===t||r.type===t.type){if(i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&c.length>0&&c.some(function(A){return e.adapter.containsEventTarget(A)}))return void this.resetActivationState();void 0!==t&&(c.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){c=[],!i.wasElementMadeActive&&void 0!==t&&(" "===t.key||32===t.keyCode)&&(i.wasElementMadeActive=e.checkElementMadeActive(t),i.wasElementMadeActive&&e.animateActivation()),i.wasElementMadeActive||(e.activationState=e.defaultActivationState())})}}}},n.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},n.prototype.animateActivation=function(){var t=this,e=n.strings,i=e.VAR_FG_TRANSLATE_START,r=e.VAR_FG_TRANSLATE_END,d=n.cssClasses,v=d.FG_DEACTIVATION,A=d.FG_ACTIVATION,H=n.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var F="",U="";if(!this.adapter.isUnbounded()){var x=this.getFgTranslationCoordinates(),L=x.startPoint,_=x.endPoint;F=L.x+"px, "+L.y+"px",U=_.x+"px, "+_.y+"px"}this.adapter.updateCssVariable(i,F),this.adapter.updateCssVariable(r,U),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(v),this.adapter.computeBoundingRect(),this.adapter.addClass(A),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},H)},n.prototype.getFgTranslationCoordinates=function(){var r,t=this.activationState;return r=t.wasActivatedByPointer?function o(l,n,t){if(!l)return{x:0,y:0};var v,A,r=n.x+t.left,d=n.y+t.top;return"touchstart"===l.type?(v=l.changedTouches[0].pageX-r,A=l.changedTouches[0].pageY-d):(v=l.pageX-r,A=l.pageY-d),{x:v,y:A}}(t.activationEvent,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2},{startPoint:r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},n.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=n.cssClasses.FG_DEACTIVATION,i=this.activationState;(i.hasDeactivationUXRun||!i.isActivated)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(e)},C.FG_DEACTIVATION_MS))},n.prototype.rmBoundedActivationClasses=function(){this.adapter.removeClass(n.cssClasses.FG_ACTIVATION),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},n.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},n.numbers.TAP_DELAY_MS)},n.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var i=(0,p.a)({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},n.prototype.animateDeactivation=function(t){(t.wasActivatedByPointer||t.wasElementMadeActive)&&this.runDeactivationUXLogicIfReady()},n.prototype.layoutInternal=function(){this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?e:Math.sqrt(Math.pow(this.frame.width,2)+Math.pow(this.frame.height,2))+n.numbers.PADDING;var r=Math.floor(e*n.numbers.INITIAL_ORIGIN_SCALE);this.initialSize=this.adapter.isUnbounded()&&r%2!=0?r-1:r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},n.prototype.updateLayoutCssVars=function(){var t=n.strings,i=t.VAR_LEFT,r=t.VAR_TOP,d=t.VAR_FG_SCALE;this.adapter.updateCssVariable(t.VAR_FG_SIZE,this.initialSize+"px"),this.adapter.updateCssVariable(d,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},n}(p.M),R=function(l){function n(){var t=null!==l&&l.apply(this,arguments)||this;return t.disabled=!1,t}return(0,p._)(n,l),n.attachTo=function(t,e){void 0===e&&(e={isUnbounded:void 0});var i=new n(t);return void 0!==e.isUnbounded&&(i.unbounded=e.isUnbounded),i},n.createAdapter=function(t){return{addClass:function(e){return t.root.classList.add(e)},browserSupportsCssVars:function(){return function a(l,n){void 0===n&&(n=!1);var e,t=l.CSS;if("boolean"==typeof S&&!n)return S;if(!t||"function"!=typeof t.supports)return!1;var r=t.supports("--css-vars","yes"),d=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return e=r||d,n||(S=e),e}(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(e){return t.root.contains(e)},deregisterDocumentInteractionHandler:function(e,i){return document.documentElement.removeEventListener(e,i,g())},deregisterInteractionHandler:function(e,i){return t.root.removeEventListener(e,i,g())},deregisterResizeHandler:function(e){return window.removeEventListener("resize",e)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return(0,w.m)(t.root,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(e,i){return document.documentElement.addEventListener(e,i,g())},registerInteractionHandler:function(e,i){return t.root.addEventListener(e,i,g())},registerResizeHandler:function(e){return window.addEventListener("resize",e)},removeClass:function(e){return t.root.classList.remove(e)},updateCssVariable:function(e,i){return t.root.style.setProperty(e,i)}}},Object.defineProperty(n.prototype,"unbounded",{get:function(){return Boolean(this.isUnbounded)},set:function(t){this.isUnbounded=Boolean(t),this.setUnbounded()},enumerable:!1,configurable:!0}),n.prototype.activate=function(){this.foundation.activate()},n.prototype.deactivate=function(){this.foundation.deactivate()},n.prototype.layout=function(){this.foundation.layout()},n.prototype.getDefaultFoundation=function(){return new h(n.createAdapter(this))},n.prototype.initialSyncWithDOM=function(){this.isUnbounded="mdcRippleIsUnbounded"in this.root.dataset},n.prototype.setUnbounded=function(){this.foundation.setUnbounded(Boolean(this.isUnbounded))},n}(p.c)},804:(M,D,b)=>{function p(m,y){if(m.closest)return m.closest(y);for(var f=m;f;){if(w(f,y))return f;f=f.parentElement}return null}function w(m,y){return(m.matches||m.webkitMatchesSelector||m.msMatchesSelector).call(m,y)}function g(m){if(null!==m.offsetParent)return m.scrollWidth;var f=m.cloneNode(!0);f.style.setProperty("position","absolute"),f.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(f);var C=f.scrollWidth;return document.documentElement.removeChild(f),C}b.d(D,{c:()=>p,e:()=>g,m:()=>w})}}]);