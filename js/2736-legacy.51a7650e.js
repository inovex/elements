"use strict";(self["webpackChunk_inovex_de_elements_landingpage"]=self["webpackChunk_inovex_de_elements_landingpage"]||[]).push([[2736],{11169:function(t,e,n){n.d(e,{M:function(){return p}});var i=n(89105),o=n(30161),r=n(54060);
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
function s(t,e){return e(t,{skipInitialFocus:!0})}
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
 */var a={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},u={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"},c=function(t){function e(n){var o=t.call(this,(0,i.a)((0,i.a)({},e.defaultAdapter),n))||this;return o.animationFrame_=0,o.animationTimer_=0,o}return(0,i._)(e,t),Object.defineProperty(e,"strings",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(a.OPEN),this.adapter.addClass(a.ANIMATE),this.runNextAnimationFrame_((function(){t.adapter.addClass(a.OPENING)})),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(a.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(a.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(a.OPENING)||this.adapter.hasClass(a.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(a.CLOSING)},e.prototype.handleKeydown=function(t){var e=t.keyCode,n=t.key,i="Escape"===n||27===e;i&&this.close()},e.prototype.handleTransitionEnd=function(t){var e=a.OPENING,n=a.CLOSING,i=a.OPEN,o=a.ANIMATE,r=a.ROOT,s=this.isElement_(t.target)&&this.adapter.elementHasClass(t.target,r);s&&(this.isClosing()?(this.adapter.removeClass(i),this.closed_(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened_(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(e),this.adapter.removeClass(n))},e.prototype.opened_=function(){},e.prototype.closed_=function(){},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},e.prototype.isElement_=function(t){return Boolean(t.classList)},e}(i.M),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i._)(e,t),e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened_=function(){this.adapter.trapFocus()},e.prototype.closed_=function(){this.adapter.releaseFocus()},e}(c),f=c.cssClasses,d=c.strings,p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i._)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"open",{get:function(){return this.foundation.isOpen()},set:function(t){t?this.foundation.open():this.foundation.close()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"list",{get:function(){return this.list_},enumerable:!0,configurable:!0}),e.prototype.initialize=function(t,e){void 0===t&&(t=function(t){return new o.F(t)}),void 0===e&&(e=function(t){return new r.a(t)});var n=this.root.querySelector("."+r.M.cssClasses.ROOT);n&&(this.list_=e(n),this.list_.wrapFocus=!0),this.focusTrapFactory_=t},e.prototype.initialSyncWithDOM=function(){var t=this,e=f.MODAL,n=d.SCRIM_SELECTOR;this.scrim_=this.root.parentNode.querySelector(n),this.scrim_&&this.root.classList.contains(e)&&(this.handleScrimClick_=function(){return t.foundation.handleScrimClick()},this.scrim_.addEventListener("click",this.handleScrimClick_),this.focusTrap_=s(this.root,this.focusTrapFactory_)),this.handleKeydown_=function(e){return t.foundation.handleKeydown(e)},this.handleTransitionEnd_=function(e){return t.foundation.handleTransitionEnd(e)},this.listen("keydown",this.handleKeydown_),this.listen("transitionend",this.handleTransitionEnd_)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("transitionend",this.handleTransitionEnd_),this.list_&&this.list_.destroy();var t=f.MODAL;this.scrim_&&this.handleScrimClick_&&this.root.classList.contains(t)&&(this.scrim_.removeEventListener("click",this.handleScrimClick_),this.open=!1)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},elementHasClass:function(t,e){return t.classList.contains(e)},saveFocus:function(){return t.previousFocus_=document.activeElement},restoreFocus:function(){var e=t.previousFocus_;e&&e.focus&&t.root.contains(document.activeElement)&&e.focus()},focusActiveNavigationItem:function(){var e=t.root.querySelector("."+r.M.cssClasses.LIST_ITEM_ACTIVATED_CLASS);e&&e.focus()},notifyClose:function(){return t.emit(d.CLOSE_EVENT,{},!0)},notifyOpen:function(){return t.emit(d.OPEN_EVENT,{},!0)},trapFocus:function(){return t.focusTrap_.trapFocus()},releaseFocus:function(){return t.focusTrap_.releaseFocus()}},n=f.DISMISSIBLE,i=f.MODAL;if(this.root.classList.contains(n))return new c(e);if(this.root.classList.contains(i))return new l(e);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+n+" and "+i+".")},e}(i.b)},89105:function(t,e,n){n.d(e,{M:function(){return c},_:function(){return o},a:function(){return r},b:function(){return l},c:function(){return s},d:function(){return u},e:function(){return a}});n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(64660);var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},i(t,e)};function o(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var r=function(){return r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function s(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,o,r=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(i=r.next()).done)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r["return"])&&n.call(r)}finally{if(o)throw o.error}}return s}function u(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(a(arguments[e]));return t}
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
 */var c=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),l=function(){function t(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root=t,this.initialize.apply(this,u(n)),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new c({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(t,e,n){this.root.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"===typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(t,n,!1,e)),this.root.dispatchEvent(i)},t}();
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
 */},30161:function(t,e,n){n.d(e,{F:function(){return o}});n(41539),n(54747),n(47042),n(57327);var i="mdc-dom-focus-sentinel",o=function(){function t(t,e){void 0===e&&(e={}),this.root=t,this.options=e,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var t=this.getFocusableElements(this.root);if(0===t.length)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root,t),this.options.skipInitialFocus||this.focusInitialElement(t,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+i)).forEach((function(t){t.parentElement.removeChild(t)})),this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(t,e){var n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",(function(){e.length>0&&e[e.length-1].focus()})),i.addEventListener("focus",(function(){e.length>0&&e[0].focus()})),t.insertBefore(n,t.children[0]),t.appendChild(i)},t.prototype.focusInitialElement=function(t,e){var n=0;e&&(n=Math.max(t.indexOf(e),0)),t[n].focus()},t.prototype.getFocusableElements=function(t){var e=[].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return e.filter((function(t){var e="true"===t.getAttribute("aria-disabled")||null!=t.getAttribute("disabled")||null!=t.getAttribute("hidden")||"true"===t.getAttribute("aria-hidden"),n=t.tabIndex>=0&&t.getBoundingClientRect().width>0&&!t.classList.contains(i)&&!e,o=!1;if(n){var r=getComputedStyle(t);o="none"===r.display||"hidden"===r.visibility}return n&&!o}))},t.prototype.createSentinel=function(){var t=document.createElement("div");return t.setAttribute("tabindex","0"),t.setAttribute("aria-hidden","true"),t.classList.add(i),t},t}()},78134:function(t,e,n){
/**
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
 */
function i(t,e){if(t.closest)return t.closest(e);var n=t;while(n){if(o(n,e))return n;n=n.parentElement}return null}function o(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function r(t){var e=t;if(null!==e.offsetParent)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}n.d(e,{c:function(){return i},e:function(){return r},m:function(){return o}})},64660:function(t,e,n){var i=n(82109),o=n(17854),r=n(47293),s=n(43157),a=n(70111),u=n(47908),c=n(26244),l=n(86135),f=n(65417),d=n(81194),p=n(5112),h=n(7392),m=p("isConcatSpreadable"),y=9007199254740991,v="Maximum allowed index exceeded",_=o.TypeError,E=h>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=d("concat"),C=function(t){if(!a(t))return!1;var e=t[m];return void 0!==e?!!e:s(t)},g=!E||!b;i({target:"Array",proto:!0,forced:g},{concat:function(t){var e,n,i,o,r,s=u(this),a=f(s,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?s:arguments[e],C(r)){if(o=c(r),d+o>y)throw _(v);for(n=0;n<o;n++,d++)n in r&&l(a,d,r[n])}else{if(d>=y)throw _(v);l(a,d++,r)}return a.length=d,a}})}}]);
//# sourceMappingURL=2736-legacy.51a7650e.js.map