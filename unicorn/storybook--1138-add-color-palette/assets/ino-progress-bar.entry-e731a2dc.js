import{r as _,h as m,H as y,g as h}from"./preview-c90dab79.js";import{a as u,e as v,b as g}from"./tslib.es6-973a6cc3-d9af4c86.js";import{M as A,a as C}from"./component-606576f6-c5301b69.js";import{g as S}from"./util-a712b6e1-0369ce49.js";import{c as X}from"./index-796d4780-671f1753.js";import"./iframe-a11ccfcf.js";import"../sb-preview/runtime.js";import"./index-473285c6.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-a0365730.js";import"./index-40e4e4aa.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-03a90deb.js";import"./index-c5023152.js";import"./_commonjsHelpers-212d567a-5c26fd6e.js";/*!
 * Crafted with ❤ by inovex GmbH
 *//**
 * @license
 * Copyright 2017 Google Inc.
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
 */var o={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},l={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},c={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var p=function(t){u(e,t);function e(r){var i=t.call(this,g(g({},e.defaultAdapter),r))||this;return i.observer=null,i}return Object.defineProperty(e,"cssClasses",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var r=this;this.determinate=!this.adapter.hasClass(o.INDETERMINATE_CLASS),this.adapter.addClass(o.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(i){var a,n;if(!r.determinate)try{for(var s=v(i),d=s.next();!d.done;d=s.next()){var f=d.value;f.contentRect&&r.calculateAndSetDimensions(f.contentRect.width)}}catch(b){a={error:b}}finally{try{d&&!d.done&&(n=s.return)&&n.call(s)}finally{if(a)throw a.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(r){if(this.determinate=r,this.determinate){this.adapter.removeClass(o.INDETERMINATE_CLASS),this.adapter.setAttribute(l.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(l.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(l.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(o.INDETERMINATE_CLASS),this.adapter.removeAttribute(l.ARIA_VALUENOW),this.adapter.removeAttribute(l.ARIA_VALUEMAX),this.adapter.removeAttribute(l.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(r){this.progress=r,this.determinate&&(this.setPrimaryBarProgress(r),this.adapter.setAttribute(l.ARIA_VALUENOW,r.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(r){this.buffer=r,this.determinate&&this.setBufferBarProgress(r)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(o.CLOSED_CLASS),this.adapter.removeClass(o.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(l.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(o.CLOSED_CLASS),this.adapter.setAttribute(l.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(o.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(o.CLOSED_CLASS)&&this.adapter.addClass(o.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(o.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(o.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(r){var i="scaleX("+r+")",a=typeof window<"u"?S(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(a,i)},e.prototype.setBufferBarProgress=function(r){var i=r*100+"%";this.adapter.setBufferBarStyle(l.FLEX_BASIS,i)},e.prototype.calculateAndSetDimensions=function(r){var i=r*c.PRIMARY_HALF,a=r*c.PRIMARY_FULL,n=r*c.SECONDARY_QUARTER,s=r*c.SECONDARY_HALF,d=r*c.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",a+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",d+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-d+"px"),this.restartAnimation()},e}(A);/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var x=function(t){u(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.attachTo=function(r){return new e(r)},Object.defineProperty(e.prototype,"determinate",{set:function(r){this.foundation.setDeterminate(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"progress",{set:function(r){this.foundation.setProgress(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{set:function(r){this.foundation.setBuffer(r)},enumerable:!1,configurable:!0}),e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(){this.foundation.close()},e.prototype.initialSyncWithDOM=function(){var r=this;this.root.addEventListener("transitionend",function(){r.foundation.handleTransitionEnd()})},e.prototype.getDefaultFoundation=function(){var r=this,i={addClass:function(a){r.root.classList.add(a)},forceLayout:function(){r.root.getBoundingClientRect()},setBufferBarStyle:function(a,n){var s=r.root.querySelector(p.strings.BUFFER_BAR_SELECTOR);s&&s.style.setProperty(a,n)},setPrimaryBarStyle:function(a,n){var s=r.root.querySelector(p.strings.PRIMARY_BAR_SELECTOR);s&&s.style.setProperty(a,n)},hasClass:function(a){return r.root.classList.contains(a)},removeAttribute:function(a){r.root.removeAttribute(a)},removeClass:function(a){r.root.classList.remove(a)},setAttribute:function(a,n){r.root.setAttribute(a,n)},setStyle:function(a,n){r.root.style.setProperty(a,n)},attachResizeObserver:function(a){var n=window.ResizeObserver;if(n){var s=new n(a);return s.observe(r.root),s}return null},getWidth:function(){return r.root.offsetWidth}};return new p(i)},e}(C);const E=`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress,.mdc-linear-progress[dir=rtl]{}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#3d40f5;border-color:var(--mdc-theme-primary, #3d40f5)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host{--progress-bar--bar-color:#4655ff}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}:host .mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}:host .mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}:host .mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}:host .mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}:host .mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}:host .mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}:host .mdc-linear-progress__primary-bar{transform:scaleX(0)}:host .mdc-linear-progress__secondary-bar{display:none}:host .mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}:host .mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}:host .mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] :host .mdc-linear-progress,:host .mdc-linear-progress[dir=rtl]{}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host .mdc-linear-progress--closed{opacity:0}:host .mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}:host .mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,:host .mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#3d40f5;border-color:var(--mdc-theme-primary, #3d40f5)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host .mdc-linear-progress__bar-inner{border-color:var(--progress-bar--bar-color)}:host .mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23dfdee6'/%3E%3C/svg%3E")}:host .mdc-linear-progress__buffer-bar{background-color:#dfdee6}`,R=class{constructor(t){_(this,t),this.initializeComponent=()=>{this.mdcProgress=new x(this.el.shadowRoot.querySelector(".mdc-linear-progress")),this.mdcProgress.determinate=!this.indeterminate,this.mdcProgress.progress=this.progress,this.mdcProgress.buffer=this.buffer},this.buffer=0,this.indeterminate=!1,this.label=void 0,this.progress=0}bufferChanged(t){this.mdcProgress.buffer=t}indeterminateChanged(t){this.mdcProgress.determinate=!t}progressChanged(t){this.mdcProgress.progress=t}componentDidLoad(){this.initializeComponent()}disconnectedCallback(){var t;(t=this.mdcProgress)===null||t===void 0||t.destroy()}render(){const t=X({"mdc-linear-progress":!0});return m(y,null,m("div",{role:"progressbar",class:t,"aria-label":this.label,"aria-valuemin":"0","aria-valuemax":"1"},m("div",{class:"mdc-linear-progress__buffer"},m("div",{class:"mdc-linear-progress__buffer-bar"}),m("div",{class:"mdc-linear-progress__buffer-dots"})),m("div",{class:"mdc-linear-progress__bar mdc-linear-progress__primary-bar"},m("span",{class:"mdc-linear-progress__bar-inner"})),m("div",{class:"mdc-linear-progress__bar mdc-linear-progress__secondary-bar"},m("span",{class:"mdc-linear-progress__bar-inner"}))))}get el(){return h(this)}static get watchers(){return{buffer:["bufferChanged"],indeterminate:["indeterminateChanged"],progress:["progressChanged"]}}};R.style=E;export{R as ino_progress_bar};
