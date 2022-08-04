import{r as x,c as N,h as m,H as W,g as K}from"./index.c4fd3317.js";import{_ as f,e as V,M as A,b as D,a as v,c as y}from"./component-97c8fef9.061cf906.js";import{a as p,b as Y,M as P}from"./component-780a5882.fd4d53f9.js";import{m as F}from"./ponyfill-495ec32d.2f34f215.js";/*!
 * Crafted with ❤ by inovex GmbH
 *//**
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
 */var w={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},H={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var _=function(){function o(e){this.adapter=e}return o}();/**
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
 */var B=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),r=this.calculateScrollEdges().right;return Math.round(r-t)},e.prototype.scrollToRTL=function(t){var r=this.calculateScrollEdges(),n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(r.right-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.incrementScrollRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r-t);return{finalScrollPosition:n,scrollDelta:n-r}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-r}},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,t),r.right)},e}(_);/**
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
 */var j=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(t-r)},e.prototype.scrollToRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(-t);return{finalScrollPosition:n,scrollDelta:n-r}},e.prototype.incrementScrollRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r-t);return{finalScrollPosition:n,scrollDelta:n-r}},e.prototype.getAnimatingScrollPosition=function(t,r){return t-r},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:r-t,right:0}},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.max(Math.min(r.right,t),r.left)},e}(_);/**
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
 */var X=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(r-t)},e.prototype.scrollToRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(t);return{finalScrollPosition:n,scrollDelta:r-n}},e.prototype.incrementScrollRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r+t);return{finalScrollPosition:n,scrollDelta:r-n}},e.prototype.getAnimatingScrollPosition=function(t,r){return t+r},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:t-r,right:0}},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.min(Math.max(r.right,t),r.left)},e}(_);/**
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
 */var R=function(o){f(e,o);function e(t){var r=o.call(this,v(v({},e.defaultAdapter),t))||this;return r.isAnimating=!1,r}return Object.defineProperty(e,"cssClasses",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return r-t},e.prototype.handleInteraction=function(){!this.isAnimating||this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var r=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(r,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var r=this.getIncrementScrollOperation(t);r.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var r=/\((.+?)\)/.exec(t);if(!r)return 0;var n=r[1],i=V(n.split(","),6),a=i[4];return parseFloat(a)},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,t),r.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-r}},e.prototype.scrollToImpl=function(t){var r=this.getScrollPosition(),n=this.clampScrollValue(t),i=n-r;this.animate({finalScrollPosition:n,scrollDelta:i})},e.prototype.scrollToImplRTL=function(t){var r=this.getRTLScroller().scrollToRTL(t);this.animate(r)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var r=this.getScrollPosition(),n=t+r,i=this.clampScrollValue(n),a=i-r;return{finalScrollPosition:i,scrollDelta:a}},e.prototype.animate=function(t){var r=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){r.adapter.addClass(e.cssClasses.ANIMATING),r.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(r,t):r-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var r=this.adapter.getScrollAreaScrollLeft();if(r<0)return this.adapter.setScrollAreaScrollLeft(t),new j(this.adapter);var n=this.adapter.computeScrollAreaClientRect(),i=this.adapter.computeScrollContentClientRect(),a=Math.round(i.right-n.right);return this.adapter.setScrollAreaScrollLeft(t),a===r?new X(this.adapter):new B(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(y);/**
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
 */var I;function k(o,e){if(e===void 0&&(e=!0),e&&typeof I!="undefined")return I;var t=o.createElement("div");t.classList.add(w.SCROLL_TEST),o.body.appendChild(t);var r=t.offsetHeight-t.clientHeight;return o.body.removeChild(t),e&&(I=r),r}/**
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
 */var z=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area=this.root.querySelector(R.strings.AREA_SELECTOR),this.content=this.root.querySelector(R.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction=function(){t.foundation.handleInteraction()},this.handleTransitionEnd=function(r){t.foundation.handleTransitionEnd(r)},this.area.addEventListener("wheel",this.handleInteraction,p()),this.area.addEventListener("touchstart",this.handleInteraction,p()),this.area.addEventListener("pointerdown",this.handleInteraction,p()),this.area.addEventListener("mousedown",this.handleInteraction,p()),this.area.addEventListener("keydown",this.handleInteraction,p()),this.content.addEventListener("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.area.removeEventListener("wheel",this.handleInteraction,p()),this.area.removeEventListener("touchstart",this.handleInteraction,p()),this.area.removeEventListener("pointerdown",this.handleInteraction,p()),this.area.removeEventListener("mousedown",this.handleInteraction,p()),this.area.removeEventListener("keydown",this.handleInteraction,p()),this.content.removeEventListener("transitionend",this.handleTransitionEnd)},e.prototype.getDefaultFoundation=function(){var t=this,r={eventTargetMatchesSelector:function(n,i){return F(n,i)},addClass:function(n){t.root.classList.add(n)},removeClass:function(n){t.root.classList.remove(n)},addScrollAreaClass:function(n){t.area.classList.add(n)},setScrollAreaStyleProperty:function(n,i){t.area.style.setProperty(n,i)},setScrollContentStyleProperty:function(n,i){t.content.style.setProperty(n,i)},getScrollContentStyleValue:function(n){return window.getComputedStyle(t.content).getPropertyValue(n)},setScrollAreaScrollLeft:function(n){return t.area.scrollLeft=n},getScrollAreaScrollLeft:function(){return t.area.scrollLeft},getScrollContentOffsetWidth:function(){return t.content.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area.offsetWidth},computeScrollAreaClientRect:function(){return t.area.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return k(document)}};return new R(r)},e.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},e}(A);/**
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
 */var G={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},q={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var d=function(o){f(e,o);function e(t){return o.call(this,v(v({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return G},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(y);/**
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
 */var U=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(d.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(d.cssClasses.ACTIVE)},e}(d);/**
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
 */var $=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass(d.cssClasses.ACTIVE);return}var r=this.computeContentClientRect(),n=t.width/r.width,i=t.left-r.left;this.adapter.addClass(d.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+i+"px) scaleX("+n+")"),this.computeContentClientRect(),this.adapter.removeClass(d.cssClasses.NO_TRANSITION),this.adapter.addClass(d.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(d.cssClasses.ACTIVE)},e}(d);/**
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
 */var J=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.content=this.root.querySelector(d.strings.CONTENT_SELECTOR)},e.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()},e.prototype.getDefaultFoundation=function(){var t=this,r={addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},computeContentClientRect:function(){return t.content.getBoundingClientRect()},setContentStyleProperty:function(n,i){t.content.style.setProperty(n,i)}};return this.root.classList.contains(d.cssClasses.FADE)?new U(r):new $(r)},e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e}(A);/**
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
 */var E={ACTIVE:"mdc-tab--active"},b={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
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
 */var C=function(o){f(e,o);function e(t){var r=o.call(this,v(v({},e.defaultAdapter),t))||this;return r.focusOnActivate=!0,r}return Object.defineProperty(e,"cssClasses",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(E.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(E.ACTIVE),this.adapter.setAttr(b.ARIA_SELECTED,"true"),this.adapter.setAttr(b.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){!this.isActive()||(this.adapter.removeClass(E.ACTIVE),this.adapter.setAttr(b.ARIA_SELECTED,"false"),this.adapter.setAttr(b.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),r=this.adapter.getOffsetLeft(),n=this.adapter.getContentOffsetWidth(),i=this.adapter.getContentOffsetLeft();return{contentLeft:r+i,contentRight:r+i+n,rootLeft:r,rootRight:r+t}},e}(y);/**
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
 */var Q=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,r){t===void 0&&(t=function(a,l){return new P(a,l)}),r===void 0&&(r=function(a){return new J(a)}),this.id=this.root.id;var n=new Y(P.createAdapter(this));this.ripple=t(this.root,n);var i=this.root.querySelector(C.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator=r(i),this.content=this.root.querySelector(C.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,r={setAttr:function(n,i){return t.root.setAttribute(n,i)},addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},activateIndicator:function(n){t.tabIndicator.activate(n)},deactivateIndicator:function(){t.tabIndicator.deactivate()},notifyInteracted:function(){return t.emit(C.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function(){return t.root.offsetLeft},getOffsetWidth:function(){return t.root.offsetWidth},getContentOffsetLeft:function(){return t.content.offsetLeft},getContentOffsetWidth:function(){return t.content.offsetWidth},focus:function(){return t.root.focus()}};return new C(r)},Object.defineProperty(e.prototype,"active",{get:function(){return this.foundation.isActive()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.foundation.setFocusOnActivate(t)},enumerable:!1,configurable:!0}),e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.computeIndicatorClientRect=function(){return this.tabIndicator.computeContentClientRect()},e.prototype.computeDimensions=function(){return this.foundation.computeDimensions()},e.prototype.focus=function(){this.root.focus()},e}(A);/**
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
 */var c={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},h={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
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
 */var T=new Set;T.add(c.ARROW_LEFT_KEY);T.add(c.ARROW_RIGHT_KEY);T.add(c.END_KEY);T.add(c.HOME_KEY);T.add(c.ENTER_KEY);T.add(c.SPACE_KEY);var S=new Map;S.set(h.ARROW_LEFT_KEYCODE,c.ARROW_LEFT_KEY);S.set(h.ARROW_RIGHT_KEYCODE,c.ARROW_RIGHT_KEY);S.set(h.END_KEYCODE,c.END_KEY);S.set(h.HOME_KEYCODE,c.HOME_KEY);S.set(h.ENTER_KEYCODE,c.ENTER_KEY);S.set(h.SPACE_KEYCODE,c.SPACE_KEY);var M=function(o){f(e,o);function e(t){var r=o.call(this,v(v({},e.defaultAdapter),t))||this;return r.useAutomaticActivation=!1,r}return Object.defineProperty(e,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var r=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===r)){var n;r!==-1&&(this.adapter.deactivateTabAtIndex(r),n=this.adapter.getTabIndicatorClientRectAtIndex(r)),this.adapter.activateTabAtIndex(t,n),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var r=this.getKeyFromEvent(t);if(r!==void 0)if(this.isActivationKey(r)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(r))return;var n=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),r);this.adapter.setActiveTab(n),this.scrollIntoView(n)}else{var i=this.adapter.getFocusedTabIndex();if(this.isActivationKey(r))this.adapter.setActiveTab(i);else{var n=this.determineTargetFromKey(i,r);this.adapter.focusTabAtIndex(n),this.scrollIntoView(n)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(!!this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,r){var n=this.isRTL(),i=this.adapter.getTabListLength()-1,a=r===c.END_KEY,l=r===c.ARROW_LEFT_KEY&&!n||r===c.ARROW_RIGHT_KEY&&n,u=r===c.ARROW_RIGHT_KEY&&!n||r===c.ARROW_LEFT_KEY&&n,s=t;return a?s=i:l?s-=1:u?s+=1:s=0,s<0?s=i:s>i&&(s=0),s},e.prototype.calculateScrollIncrement=function(t,r,n,i){var a=this.adapter.getTabDimensionsAtIndex(r),l=a.contentLeft-n-i,u=a.contentRight-n,s=u-h.EXTRA_SCROLL_AMOUNT,g=l+h.EXTRA_SCROLL_AMOUNT;return r<t?Math.min(s,0):Math.max(g,0)},e.prototype.calculateScrollIncrementRTL=function(t,r,n,i,a){var l=this.adapter.getTabDimensionsAtIndex(r),u=a-l.contentLeft-n,s=a-l.contentRight-n-i,g=s+h.EXTRA_SCROLL_AMOUNT,L=u-h.EXTRA_SCROLL_AMOUNT;return r>t?Math.max(g,0):Math.min(L,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,r,n,i){var a=r.rootLeft-n,l=r.rootRight-n-i,u=a+l,s=a<0||u<0,g=l>0||u>0;return s?t-1:g?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,r,n,i,a){var l=a-r.rootLeft-i-n,u=a-r.rootRight-n,s=l+u,g=l>0||s>0,L=u<0||s<0;return g?t+1:L?t-1:-1},e.prototype.getKeyFromEvent=function(t){return T.has(t.key)?t.key:S.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===c.SPACE_KEY||t===c.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var r=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),i=this.adapter.getTabDimensionsAtIndex(t),a=this.findAdjacentTabIndexClosestToEdge(t,i,r,n);if(!!this.indexIsInRange(a)){var l=this.calculateScrollIncrement(t,a,r,n);this.adapter.incrementScroll(l)}},e.prototype.scrollIntoViewImplRTL=function(t){var r=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),i=this.adapter.getTabDimensionsAtIndex(t),a=this.adapter.getScrollContentWidth(),l=this.findAdjacentTabIndexClosestToEdgeRTL(t,i,r,n,a);if(!!this.indexIsInRange(l)){var u=this.calculateScrollIncrementRTL(t,l,r,n,a);this.adapter.incrementScroll(u)}},e}(y);/**
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
 */var O=M.strings,Z=0,tt=function(o){f(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){var r,n;try{for(var i=D(this.tabList),a=i.next();!a.done;a=i.next()){var l=a.value;l.focusOnActivate=t}}catch(u){r={error:u}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,r){t===void 0&&(t=function(n){return new Q(n)}),r===void 0&&(r=function(n){return new z(n)}),this.tabList=this.instantiateTabs(t),this.tabScroller=this.instantiatetabScroller(r)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction=function(n){t.foundation.handleTabInteraction(n)},this.handleKeyDown=function(n){t.foundation.handleKeyDown(n)},this.listen(C.strings.INTERACTED_EVENT,this.handleTabInteraction),this.listen("keydown",this.handleKeyDown);for(var r=0;r<this.tabList.length;r++)if(this.tabList[r].active){this.scrollIntoView(r);break}},e.prototype.destroy=function(){var t,r;o.prototype.destroy.call(this),this.unlisten(C.strings.INTERACTED_EVENT,this.handleTabInteraction),this.unlisten("keydown",this.handleKeyDown);try{for(var n=D(this.tabList),i=n.next();!i.done;i=n.next()){var a=i.value;a.destroy()}}catch(l){t={error:l}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}this.tabScroller&&this.tabScroller.destroy()},e.prototype.getDefaultFoundation=function(){var t=this,r={scrollTo:function(n){t.tabScroller.scrollTo(n)},incrementScroll:function(n){t.tabScroller.incrementScroll(n)},getScrollPosition:function(){return t.tabScroller.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setActiveTab:function(n){t.foundation.activateTab(n)},activateTabAtIndex:function(n,i){t.tabList[n].activate(i)},deactivateTabAtIndex:function(n){t.tabList[n].deactivate()},focusTabAtIndex:function(n){t.tabList[n].focus()},getTabIndicatorClientRectAtIndex:function(n){return t.tabList[n].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(n){return t.tabList[n].computeDimensions()},getPreviousActiveTabIndex:function(){for(var n=0;n<t.tabList.length;n++)if(t.tabList[n].active)return n;return-1},getFocusedTabIndex:function(){var n=t.getTabElements(),i=document.activeElement;return n.indexOf(i)},getIndexOfTabById:function(n){for(var i=0;i<t.tabList.length;i++)if(t.tabList[i].id===n)return i;return-1},getTabListLength:function(){return t.tabList.length},notifyTabActivated:function(n){return t.emit(O.TAB_ACTIVATED_EVENT,{index:n},!0)}};return new M(r)},e.prototype.activateTab=function(t){this.foundation.activateTab(t)},e.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)},e.prototype.getTabElements=function(){return[].slice.call(this.root.querySelectorAll(O.TAB_SELECTOR))},e.prototype.instantiateTabs=function(t){return this.getTabElements().map(function(r){return r.id=r.id||"mdc-tab-"+ ++Z,t(r)})},e.prototype.instantiatetabScroller=function(t){var r=this.root.querySelector(O.TAB_SCROLLER_SELECTOR);return r?t(r):null},e}(A);const et=".mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}",rt=class{constructor(o){x(this,o),this.activeTabChange=N(this,"activeTabChange",7),this.activeTab=0,this.autoFocus=!1}activeTabChangedWatcher(o){this.mdcInstance&&this.mdcInstance.activateTab(o)}componentDidLoad(){this.mdcInstance=new tt(this.el.querySelector(".mdc-tab-bar")),this.mdcInstance.focusOnActivate=this.autoFocus,this.mdcInstance.activateTab(this.activeTab)}disconnectedCallback(){var o;(o=this.mdcInstance)===null||o===void 0||o.destroy()}async interactionHandler(o){o.stopPropagation();const t=(await Promise.all(Array.from(this.el.querySelectorAll("ino-tab")))).indexOf(o.detail);this.activeTabChange.emit(t)}render(){return m(W,null,m("div",{class:"mdc-tab-bar",role:"tablist"},m("div",{class:"mdc-tab-scroller"},m("div",{class:"mdc-tab-scroller__scroll-area"},m("div",{class:"mdc-tab-scroller__scroll-content"},m("slot",null))))))}get el(){return K(this)}static get watchers(){return{activeTab:["activeTabChangedWatcher"]}}};rt.style=et;export{rt as ino_tab_bar};
