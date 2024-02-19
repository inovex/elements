import{r as O,c as P,h as o,H as M,g as I}from"./preview-5c92b5d0.js";import{c as g}from"./index-796d4780-671f1753.js";import{g as T,h as v}from"./component-utils-02a98646-9ff506cf.js";import{r as L}from"./helpers-8b0cd51e-253c2746.js";import{a as C,e as k,c as R,d as F,b as S}from"./tslib.es6-973a6cc3-d9af4c86.js";import{M as A,a as X}from"./component-606576f6-c5301b69.js";import{M as z,b as G}from"./component-9cb04f14-51e1aa86.js";import"./iframe-2f2a7141.js";import"../sb-preview/runtime.js";import"./index-473285c6.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-6f259965.js";import"./index-d78a1aed.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-c02bab85.js";import"./index-3b365be5.js";import"./_commonjsHelpers-212d567a-5c26fd6e.js";import"./ponyfill-495ec32d-1bdf70c7.js";/*!
 * Crafted with ❤ by inovex GmbH
 *//**
 * @license
 * Copyright 2021 Google Inc.
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
 */var u;(function(i){i.PROCESSING="mdc-switch--processing",i.SELECTED="mdc-switch--selected",i.UNSELECTED="mdc-switch--unselected"})(u||(u={}));var x;(function(i){i.RIPPLE=".mdc-switch__ripple"})(x||(x={}));/**
 * @license
 * Copyright 2021 Google Inc.
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
 */function j(i,e,c){var t=B(i,e),s=t.getObservers(e);return s.push(c),function(){s.splice(s.indexOf(c),1)}}var y=new WeakMap;function B(i,e){var c=new Map;y.has(i)||y.set(i,{isEnabled:!0,getObservers:function(r){var n=c.get(r)||[];return c.has(r)||c.set(r,n),n},installedProperties:new Set});var t=y.get(i);if(t.installedProperties.has(e))return t;var s=q(i,e)||{configurable:!0,enumerable:!0,value:i[e],writable:!0},d=S({},s),a=s.get,l=s.set;if("value"in s){delete d.value,delete d.writable;var h=s.value;a=function(){return h},s.writable&&(l=function(r){h=r})}return a&&(d.get=function(){return a.call(this)}),l&&(d.set=function(r){var n,p,b=a?a.call(this):r;if(l.call(this,r),t.isEnabled&&(!a||r!==b))try{for(var m=k(t.getObservers(e)),w=m.next();!w.done;w=m.next()){var _=w.value;_(r,b)}}catch(f){n={error:f}}finally{try{w&&!w.done&&(p=m.return)&&p.call(m)}finally{if(n)throw n.error}}}),t.installedProperties.add(e),Object.defineProperty(i,e,d),t}function q(i,e){for(var c=i,t;c&&(t=Object.getOwnPropertyDescriptor(c,e),!t);)c=Object.getPrototypeOf(c);return t}function N(i,e){var c=y.get(i);c&&(c.isEnabled=e)}/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var U=function(i){C(e,i);function e(c){var t=i.call(this,c)||this;return t.unobserves=new Set,t}return e.prototype.destroy=function(){i.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(c,t){var s,d,a=this,l=[];try{for(var h=k(Object.keys(t)),r=h.next();!r.done;r=h.next()){var n=r.value,p=t[n].bind(this);l.push(this.observeProperty(c,n,p))}}catch(m){s={error:m}}finally{try{r&&!r.done&&(d=h.return)&&d.call(h)}finally{if(s)throw s.error}}var b=function(){var m,w;try{for(var _=k(l),f=_.next();!f.done;f=_.next()){var E=f.value;E()}}catch(D){m={error:D}}finally{try{f&&!f.done&&(w=_.return)&&w.call(_)}finally{if(m)throw m.error}}a.unobserves.delete(b)};return this.unobserves.add(b),b},e.prototype.observeProperty=function(c,t,s){return j(c,t,s)},e.prototype.setObserversEnabled=function(c,t){N(c,t)},e.prototype.unobserve=function(){var c,t;try{for(var s=k(R([],F(this.unobserves))),d=s.next();!d.done;d=s.next()){var a=d.value;a()}}catch(l){c={error:l}}finally{try{d&&!d.done&&(t=s.return)&&t.call(s)}finally{if(c)throw c.error}}},e}(A);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var H=function(i){C(e,i);function e(c){var t=i.call(this,c)||this;return t.handleClick=t.handleClick.bind(t),t}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(U),W=function(i){C(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.init=function(){i.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(u.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(u.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,u.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,u.SELECTED),this.toggleClass(!this.adapter.state.selected,u.UNSELECTED)},e.prototype.toggleClass=function(c,t){c?this.adapter.addClass(t):this.adapter.removeClass(t)},e}(H);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var Y=function(i){C(e,i);function e(c,t){var s=i.call(this,c,t)||this;return s.root=c,s}return e.attachTo=function(c){return new e(c)},e.prototype.initialize=function(){this.ripple=new z(this.root,this.createRippleFoundation())},e.prototype.initialSyncWithDOM=function(){var c=this.root.querySelector(x.RIPPLE);if(!c)throw new Error("Switch "+x.RIPPLE+" element is required.");this.rippleElement=c,this.root.addEventListener("click",this.foundation.handleClick),this.foundation.initFromDOM()},e.prototype.destroy=function(){i.prototype.destroy.call(this),this.ripple.destroy(),this.root.removeEventListener("click",this.foundation.handleClick)},e.prototype.getDefaultFoundation=function(){return new W(this.createAdapter())},e.prototype.createAdapter=function(){var c=this;return{addClass:function(t){c.root.classList.add(t)},hasClass:function(t){return c.root.classList.contains(t)},isDisabled:function(){return c.root.disabled},removeClass:function(t){c.root.classList.remove(t)},setAriaChecked:function(t){return c.root.setAttribute("aria-checked",t)},setDisabled:function(t){c.root.disabled=t},state:this}},e.prototype.createRippleFoundation=function(){return new G(this.createRippleAdapter())},e.prototype.createRippleAdapter=function(){var c=this;return S(S({},z.createAdapter(this)),{computeBoundingRect:function(){return c.rippleElement.getBoundingClientRect()},isUnbounded:function(){return!0}})},e}(X);const $='.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%);}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%);}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0;}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%);}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0;}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mdc-switch{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-switch .mdc-switch__ripple::before,.mdc-switch .mdc-switch__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch .mdc-switch__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-switch .mdc-switch__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch .mdc-switch__ripple::before,.mdc-switch .mdc-switch__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before,.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:#3d40f5;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-hover-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-focus-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-pressed-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle::before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:0.38;opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:0.04;opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:0.1;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:0.04;opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:0.1;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:0.12;opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch:enabled .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-track-color, #cfcffd)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-hover-track-color, #cfcffd)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-focus-track-color, #cfcffd)}.mdc-switch:enabled:active .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-pressed-track-color, #cfcffd)}.mdc-switch:disabled .mdc-switch__track::after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track::before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-switch:enabled .mdc-switch__shadow{}.mdc-switch:disabled .mdc-switch__shadow{}.mdc-switch:disabled .mdc-switch__handle::after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}ino-switch{display:flex;align-items:center;gap:10px}ino-switch:not(.ino-switch-disabled) .mdc-switch{cursor:pointer}ino-switch.ino-switch-disabled .mdc-switch{cursor:default;pointer-events:none}ino-switch .mdc-switch__ripple{display:none}ino-switch.ino-switch__default{height:22px;--mdc-switch-selected-handle-color:white;--mdc-switch-selected-hover-handle-color:white;--mdc-switch-selected-focus-handle-color:white;--mdc-switch-selected-pressed-handle-color:white;--mdc-switch-selected-track-color:#2c02ff;--mdc-switch-selected-hover-track-color:#2c02ff;--mdc-switch-selected-focus-track-color:#2c02ff;--mdc-switch-selected-pressed-track-color:#2c02ff;--mdc-switch-unselected-focus-track-color:#a3a0b3;--mdc-switch-unselected-hover-track-color:#a3a0b3;--mdc-switch-track-height:20px;--mdc-switch-track-width:36px;--mdc-switch-track-shape:18px;--mdc-switch-handle-height:16px;--mdc-switch-handle-width:16px;--mdc-switch-handle-shape:14px;--mdc-switch-selected-icon-size:10px;--mdc-switch-unselected-icon-size:10px;--mdc-switch-handle-surface-color:white;--mdc-switch-unselected-handle-color:white;--mdc-switch-unselected-track-color:#cac8d5;--mdc-switch-unselected-hover-handle-color:white;--mdc-switch-unselected-focus-handle-color:white;--mdc-switch-unselected-pressed-handle-color:white;--mdc-switch-disabled-selected-handle-color:#dfdee6;--mdc-switch-disabled-selected-track-color:transparent;--mdc-switch-disabled-unselected-track-color:transparent;--mdc-switch-disabled-unselected-handle-color:#dfdee6;--mdc-switch-disabled-track-opacity:1;--mdc-switch-disabled-handle-opacity:1}ino-switch.ino-switch__default .mdc-switch--selected:focus .mdc-switch__track,ino-switch.ino-switch__default .mdc-switch--unselected:focus .mdc-switch__track{border:1.5px solid white;margin:-1.5px;box-shadow:0 0 0 5px rgba(45, 93, 255, 0.3019607843)}ino-switch.ino-switch__default .mdc-switch--selected .mdc-switch__handle{margin-left:-2px}ino-switch.ino-switch__default .mdc-switch--unselected .mdc-switch__handle{margin-left:2px}ino-switch.ino-switch__default .mdc-switch:disabled .mdc-switch__track{border:2px solid #dfdee6;margin:-1.5px}ino-switch.ino-switch__icon-toggle .mdc-switch{display:flex;align-items:center;justify-content:center;height:36px;width:104px;--mdc-switch-selected-handle-color:white;--mdc-switch-selected-hover-handle-color:white;--mdc-switch-selected-focus-handle-color:white;--mdc-switch-selected-pressed-handle-color:white;--mdc-switch-selected-track-color:#dfdee6;--mdc-switch-selected-hover-track-color:#dfdee6;--mdc-switch-selected-focus-track-color:#dfdee6;--mdc-switch-selected-pressed-track-color:#dfdee6;--mdc-switch-track-height:36px;--mdc-switch-track-width:104px;--mdc-switch-track-shape:18px;--mdc-switch-handle-height:28px;--mdc-switch-handle-width:48px;--mdc-switch-handle-shape:14px;--mdc-switch-selected-icon-size:20px;--mdc-switch-unselected-icon-size:20px;--mdc-switch-handle-surface-color:white;--mdc-switch-unselected-handle-color:white;--mdc-switch-unselected-track-color:#dfdee6;--mdc-switch-unselected-focus-track-color:#dfdee6;--mdc-switch-unselected-hover-track-color:#dfdee6;--mdc-switch-disabled-selected-track-color:#f3f3f5;--mdc-switch-disabled-selected-handle-color:white;--mdc-switch-disabled-unselected-handle-color:white;--mdc-switch-disabled-unselected-track-color:#f3f3f5;--mdc-switch-disabled-track-opacity:1;--mdc-switch-unselected-hover-handle-color:white;--mdc-switch-unselected-focus-handle-color:white;--mdc-switch-unselected-pressed-handle-color:white}ino-switch.ino-switch__icon-toggle .mdc-switch .switch-icon{display:flex;justify-content:center;align-items:center;height:28px;width:48px;color:#7e7b91;fill:#7e7b91}ino-switch.ino-switch__icon-toggle .mdc-switch .switch-icon ino-icon{--icon-width:20px;--icon-height:20px;--icon-color:#7e7b91}ino-switch.ino-switch__icon-toggle .mdc-switch .switch-icon--selected ino-icon{--icon-color:#0d10f3;color:#0d10f3;fill:#0d10f3}ino-switch.ino-switch__icon-toggle .mdc-switch .switch-icon--unselected::after{content:"";position:absolute;top:0;left:0;background-color:transparent;transition:background-color 300ms linear;width:100%;height:100%;border-radius:32px;z-index:-1}ino-switch.ino-switch__icon-toggle .mdc-switch:hover .switch-icon--unselected::after{background-color:#f4f4f7}ino-switch.ino-switch__icon-toggle .mdc-switch.mdc-switch .mdc-switch__track{position:absolute}ino-switch.ino-switch__icon-toggle .mdc-switch.mdc-switch--selected .mdc-switch__handle{margin-left:-4px}ino-switch.ino-switch__icon-toggle .mdc-switch.mdc-switch--unselected .mdc-switch__handle{margin-left:4px}ino-switch.ino-switch-disabled.ino-switch__icon-toggle .switch-icon--selected ino-icon{--icon-color:#b6b4c4;color:#b6b4c4;fill:#b6b4c4}',J=class{constructor(i){O(this,i),this.checkedChange=P(this,"checkedChange",7),this.switchId=`ino-switch-id_${T()}`,this.handleChange=e=>{e.stopPropagation(),!this.disabled&&this.checkedChange.emit(!this.checked)},this.checked=!1,this.disabled=void 0,this.name=void 0}checkedChanged(i){this.mdcSwitch&&(this.mdcSwitch.selected=i)}componentDidLoad(){this.mdcSwitch=new Y(this.mdcSwitchEl);const i=v(this.el,"leading"),e=v(this.el,"trailing");i!=e&&console.error("[ino-switch] Two icons (leading & trailing) are required in order to use the icon switch.")}disconnectedCallback(){var i;(i=this.mdcSwitch)===null||i===void 0||i.destroy()}render(){const{el:i,name:e,disabled:c}=this,t=L(i,e,"",c);t.checked=this.checked;const s=v(this.el,"leading"),d=v(this.el,"trailing"),a=g("ino-switch",s||d?"ino-switch__icon-toggle":"ino-switch__default",{"ino-switch-disabled":this.disabled,"ino-switch-icon-disabled":this.disabled}),l=g("mdc-switch",this.checked?"mdc-switch--selected":"mdc-switch--unselected",{"mdc-switch":!0,"ino-switch__icon-toggle":s&&d}),h=g("mdc-switch__icons","switch-icon"),r=g(h,this.checked?"switch-icon--unselected":"switch-icon--selected"),n=g(h,this.checked?"switch-icon--selected":"switch-icon--unselected");return o(M,{class:a,checked:this.checked,disabled:this.disabled,onClick:this.handleChange},o("button",{id:this.switchId,ref:p=>this.mdcSwitchEl=p,class:l,disabled:this.disabled,type:"button",role:"switch","aria-checked":this.checked},s&&o("span",{class:r},o("slot",{name:"leading"})),o("div",{class:"mdc-switch__track"}),o("div",{class:"mdc-switch__handle-track"},o("div",{class:"mdc-switch__handle"},o("div",{class:"mdc-switch__ripple"}))),d&&o("span",{class:n},o("slot",{name:"trailing"}))),o("label",{htmlFor:this.switchId,onClick:p=>p.stopPropagation()},o("slot",null)))}get el(){return I(this)}static get watchers(){return{checked:["checkedChanged"]}}};J.style=$;export{J as ino_switch};
