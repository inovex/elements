import{_ as f,a as p,c as m,M as C}from"./component-97c8fef9.061cf906.js";import{F as E}from"./focus-trap-ee7050ec.2579e912.js";import{M as O}from"./component-5bb46374.0386aca6.js";/*!
 * Crafted with ❤ by inovex GmbH
 *//**
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
 */function v(o,e){return e(o,{skipInitialFocus:!0})}/**
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
 */var r={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},T={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var d=function(o){f(e,o);function e(t){var n=o.call(this,p(p({},e.defaultAdapter),t))||this;return n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(e,"strings",{get:function(){return T},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return r},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(r.OPEN),this.adapter.addClass(r.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(r.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(r.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(r.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(r.OPENING)||this.adapter.hasClass(r.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(r.CLOSING)},e.prototype.handleKeydown=function(t){var n=t.keyCode,a=t.key,s=a==="Escape"||n===27;s&&this.close()},e.prototype.handleTransitionEnd=function(t){var n=r.OPENING,a=r.CLOSING,s=r.OPEN,i=r.ANIMATE,l=r.ROOT,h=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,l);!h||(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(i),this.adapter.removeClass(n),this.adapter.removeClass(a))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(m);/**
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
 */var y=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(d);/**
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
 */var u=d.cssClasses,c=d.strings,N=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"open",{get:function(){return this.foundation.isOpen()},set:function(t){t?this.foundation.open():this.foundation.close()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"list",{get:function(){return this.innerList},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,n){t===void 0&&(t=function(s){return new E(s)}),n===void 0&&(n=function(s){return new O(s)});var a=this.root.querySelector(c.LIST_SELECTOR);a&&(this.innerList=n(a),this.innerList.wrapFocus=!0),this.focusTrapFactory=t},e.prototype.initialSyncWithDOM=function(){var t=this,n=u.MODAL,a=c.SCRIM_SELECTOR;this.scrim=this.root.parentNode.querySelector(a),this.scrim&&this.root.classList.contains(n)&&(this.handleScrimClick=function(){return t.foundation.handleScrimClick()},this.scrim.addEventListener("click",this.handleScrimClick),this.focusTrap=v(this.root,this.focusTrapFactory)),this.handleKeydown=function(s){t.foundation.handleKeydown(s)},this.handleTransitionEnd=function(s){t.foundation.handleTransitionEnd(s)},this.listen("keydown",this.handleKeydown),this.listen("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("transitionend",this.handleTransitionEnd),this.innerList&&this.innerList.destroy();var t=u.MODAL;this.scrim&&this.handleScrimClick&&this.root.classList.contains(t)&&(this.scrim.removeEventListener("click",this.handleScrimClick),this.open=!1)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},elementHasClass:function(i,l){return i.classList.contains(l)},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){var i=t.previousFocus;i&&i.focus&&t.root.contains(document.activeElement)&&i.focus()},focusActiveNavigationItem:function(){var i=t.root.querySelector(c.LIST_ITEM_ACTIVATED_SELECTOR);i&&i.focus()},notifyClose:function(){t.emit(c.CLOSE_EVENT,{},!0)},notifyOpen:function(){t.emit(c.OPEN_EVENT,{},!0)},trapFocus:function(){t.focusTrap.trapFocus()},releaseFocus:function(){t.focusTrap.releaseFocus()}},a=u.DISMISSIBLE,s=u.MODAL;if(this.root.classList.contains(a))return new d(n);if(this.root.classList.contains(s))return new y(n);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+a+" and "+s+".")},e}(C);export{N as M};
