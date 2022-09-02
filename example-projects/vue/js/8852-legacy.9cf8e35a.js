(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[8852],{74016:function(t,e,n){"use strict";n.d(e,{M:function(){return p}});var i=n(20601),o=n(6356),r=n(13312);
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
 */var a={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},c={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"},u=function(t){function e(n){var o=t.call(this,(0,i.a)((0,i.a)({},e.defaultAdapter),n))||this;return o.animationFrame=0,o.animationTimer=0,o}return(0,i._)(e,t),Object.defineProperty(e,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(a.OPEN),this.adapter.addClass(a.ANIMATE),this.runNextAnimationFrame((function(){t.adapter.addClass(a.OPENING)})),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(a.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(a.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(a.OPENING)||this.adapter.hasClass(a.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(a.CLOSING)},e.prototype.handleKeydown=function(t){var e=t.keyCode,n=t.key,i="Escape"===n||27===e;i&&this.close()},e.prototype.handleTransitionEnd=function(t){var e=a.OPENING,n=a.CLOSING,i=a.OPEN,o=a.ANIMATE,r=a.ROOT,s=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,r);s&&(this.isClosing()?(this.adapter.removeClass(i),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(e),this.adapter.removeClass(n))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(i.M),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i._)(e,t),e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(u),f=u.cssClasses,d=u.strings,p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,i._)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"open",{get:function(){return this.foundation.isOpen()},set:function(t){t?this.foundation.open():this.foundation.close()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"list",{get:function(){return this.innerList},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,e){void 0===t&&(t=function(t){return new o.F(t)}),void 0===e&&(e=function(t){return new r.M(t)});var n=this.root.querySelector(d.LIST_SELECTOR);n&&(this.innerList=e(n),this.innerList.wrapFocus=!0),this.focusTrapFactory=t},e.prototype.initialSyncWithDOM=function(){var t=this,e=f.MODAL,n=d.SCRIM_SELECTOR;this.scrim=this.root.parentNode.querySelector(n),this.scrim&&this.root.classList.contains(e)&&(this.handleScrimClick=function(){return t.foundation.handleScrimClick()},this.scrim.addEventListener("click",this.handleScrimClick),this.focusTrap=s(this.root,this.focusTrapFactory)),this.handleKeydown=function(e){t.foundation.handleKeydown(e)},this.handleTransitionEnd=function(e){t.foundation.handleTransitionEnd(e)},this.listen("keydown",this.handleKeydown),this.listen("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("transitionend",this.handleTransitionEnd),this.innerList&&this.innerList.destroy();var t=f.MODAL;this.scrim&&this.handleScrimClick&&this.root.classList.contains(t)&&(this.scrim.removeEventListener("click",this.handleScrimClick),this.open=!1)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){t.root.classList.add(e)},removeClass:function(e){t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},elementHasClass:function(t,e){return t.classList.contains(e)},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){var e=t.previousFocus;e&&e.focus&&t.root.contains(document.activeElement)&&e.focus()},focusActiveNavigationItem:function(){var e=t.root.querySelector(d.LIST_ITEM_ACTIVATED_SELECTOR);e&&e.focus()},notifyClose:function(){t.emit(d.CLOSE_EVENT,{},!0)},notifyOpen:function(){t.emit(d.OPEN_EVENT,{},!0)},trapFocus:function(){t.focusTrap.trapFocus()},releaseFocus:function(){t.focusTrap.releaseFocus()}},n=f.DISMISSIBLE,i=f.MODAL;if(this.root.classList.contains(n))return new u(e);if(this.root.classList.contains(i))return new l(e);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+n+" and "+i+".")},e}(i.c)},20601:function(t,e,n){"use strict";n.d(e,{M:function(){return u},_:function(){return o},a:function(){return r},b:function(){return s},c:function(){return l},d:function(){return c},e:function(){return a}});n(52506),n(34115),n(634),n(58188),n(20796),n(28673),n(6886),n(32501),n(18178);var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)};function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var r=function(){return r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function s(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,o,r=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(i=r.next()).done)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r["return"])&&n.call(r)}finally{if(o)throw o.error}}return s}function c(t,e,n){if(n||2===arguments.length)for(var i,o=0,r=e.length;o<r;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return t.concat(i||Array.prototype.slice.call(e))}
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
 */var u=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),l=function(){function t(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root=t,this.initialize.apply(this,c([],a(n))),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new u({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(t,e,n){this.root.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"===typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(t,n,!1,e)),this.root.dispatchEvent(i)},t}();
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
 */},6356:function(t,e,n){"use strict";n.d(e,{F:function(){return o}});n(58188),n(1939),n(32501),n(95342);var i="mdc-dom-focus-sentinel",o=function(){function t(t,e){void 0===e&&(e={}),this.root=t,this.options=e,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var t=this.getFocusableElements(this.root);if(0===t.length)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(t,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+i)).forEach((function(t){t.parentElement.removeChild(t)})),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(t){var e=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",(function(){var n=e.getFocusableElements(t);n.length>0&&n[n.length-1].focus()})),i.addEventListener("focus",(function(){var n=e.getFocusableElements(t);n.length>0&&n[0].focus()})),t.insertBefore(n,t.children[0]),t.appendChild(i)},t.prototype.focusInitialElement=function(t,e){var n=0;e&&(n=Math.max(t.indexOf(e),0)),t[n].focus()},t.prototype.getFocusableElements=function(t){var e=[].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return e.filter((function(t){var e="true"===t.getAttribute("aria-disabled")||null!=t.getAttribute("disabled")||null!=t.getAttribute("hidden")||"true"===t.getAttribute("aria-hidden"),n=t.tabIndex>=0&&t.getBoundingClientRect().width>0&&!t.classList.contains(i)&&!e,o=!1;if(n){var r=getComputedStyle(t);o="none"===r.display||"hidden"===r.visibility}return n&&!o}))},t.prototype.createSentinel=function(){var t=document.createElement("div");return t.setAttribute("tabindex","0"),t.setAttribute("aria-hidden","true"),t.classList.add(i),t},t}()},80822:function(t,e,n){"use strict";
/*!
 * Crafted with ❤ by inovex GmbH
 */
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
function i(t,e){if(t.closest)return t.closest(e);var n=t;while(n){if(o(n,e))return n;n=n.parentElement}return null}function o(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function r(t){var e=t;if(null!==e.offsetParent)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}n.d(e,{c:function(){return i},e:function(){return r},m:function(){return o}})},20796:function(t,e,n){var i=n(38423);i("iterator")}}]);
//# sourceMappingURL=8852-legacy.9cf8e35a.js.map