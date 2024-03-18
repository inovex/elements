import{a as s,b as u}from"./tslib.es6-973a6cc3-d9af4c86.js";import{a as d,M as l}from"./component-606576f6-c5301b69.js";import{e as f}from"./ponyfill-495ec32d-1bdf70c7.js";import{a as c}from"./component-1547fc0f-d3084494.js";/*!
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
 */var I=function(r){s(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.attachTo=function(n){return new t(n)},t.prototype.shake=function(n){this.foundation.shake(n)},t.prototype.float=function(n){this.foundation.float(n)},t.prototype.setRequired=function(n){this.foundation.setRequired(n)},t.prototype.getWidth=function(){return this.foundation.getWidth()},t.prototype.getDefaultFoundation=function(){var n=this,i={addClass:function(e){return n.root.classList.add(e)},removeClass:function(e){return n.root.classList.remove(e)},getWidth:function(){return f(n.root)},registerInteractionHandler:function(e,a){return n.listen(e,a)},deregisterInteractionHandler:function(e,a){return n.unlisten(e,a)}};return new c(i)},t}(d);/**
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
 */var o={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var p=function(r){s(t,r);function t(n){var i=r.call(this,u(u({},t.defaultAdapter),n))||this;return i.transitionEndHandler=function(e){i.handleTransitionEnd(e)},i}return Object.defineProperty(t,"cssClasses",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},t.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},t.prototype.activate=function(){this.adapter.removeClass(o.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(o.LINE_RIPPLE_ACTIVE)},t.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},t.prototype.deactivate=function(){this.adapter.addClass(o.LINE_RIPPLE_DEACTIVATING)},t.prototype.handleTransitionEnd=function(n){var i=this.adapter.hasClass(o.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&i&&(this.adapter.removeClass(o.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(o.LINE_RIPPLE_DEACTIVATING))},t}(l);/**
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
 */var L=function(r){s(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.attachTo=function(n){return new t(n)},t.prototype.activate=function(){this.foundation.activate()},t.prototype.deactivate=function(){this.foundation.deactivate()},t.prototype.setRippleCenter=function(n){this.foundation.setRippleCenter(n)},t.prototype.getDefaultFoundation=function(){var n=this,i={addClass:function(e){return n.root.classList.add(e)},removeClass:function(e){return n.root.classList.remove(e)},hasClass:function(e){return n.root.classList.contains(e)},setStyle:function(e,a){return n.root.style.setProperty(e,a)},registerEventHandler:function(e,a){return n.listen(e,a)},deregisterEventHandler:function(e,a){return n.unlisten(e,a)}};return new p(i)},t}(d);export{I as M,L as a};
