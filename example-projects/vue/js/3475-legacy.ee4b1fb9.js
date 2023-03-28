"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[3475],{3475:function(t,e,n){n.r(e),n.d(e,{ino_tab_bar:function(){return F}});var r,o=n(21),i=n(6706),a=n(4567),c=n(6812),l=(n(7950),n(8188),n(3244),n(8673),n(6886),n(9321),n(2501),n(3450),n(7233),n(1297)),s=n(6308),u=n(7456),d=n(6912),f=n(7775),h={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},p={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"},g=function(){function t(t){this.adapter=t}return t}(),T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s._)(e,t),e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),e=this.calculateScrollEdges().right;return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.calculateScrollEdges(),n=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(e.right-t);return{finalScrollPosition:r,scrollDelta:r-n}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(e-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),e=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-e}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.left,t),e.right)},e}(g),S=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s._)(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(t-e)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(e-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.getAnimatingScrollPosition=function(t,e){return t-e},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),e=this.adapter.getScrollAreaOffsetWidth();return{left:e-t,right:0}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.max(Math.min(e.right,t),e.left)},e}(g),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s._)(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(t);return{finalScrollPosition:n,scrollDelta:e-n}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(e+t);return{finalScrollPosition:n,scrollDelta:e-n}},e.prototype.getAnimatingScrollPosition=function(t,e){return t+e},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),e=this.adapter.getScrollAreaOffsetWidth();return{left:t-e,right:0}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.right,t),e.left)},e}(g),y=function(t){function e(n){var r=t.call(this,(0,s.a)((0,s.a)({},e.defaultAdapter),n))||this;return r.isAnimating=!1,r}return(0,s._)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),e=this.adapter.getScrollAreaScrollLeft();return e-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;this.isAnimating&&this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)&&(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){0!==t&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(0!==t){var e=this.getIncrementScrollOperation(t);0!==e.scrollDelta&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition))}},e.prototype.scrollTo=function(t){this.isRTL()?this.scrollToImplRTL(t):this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if("none"===t)return 0;var e=/\((.+?)\)/.exec(t);if(!e)return 0;var n=e[1],r=(0,s.d)(n.split(","),6),o=r[4];return parseFloat(o)},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.left,t),e.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),e=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-e}},e.prototype.scrollToImpl=function(t){var e=this.getScrollPosition(),n=this.clampScrollValue(t),r=n-e;this.animate({finalScrollPosition:n,scrollDelta:r})},e.prototype.scrollToImplRTL=function(t){var e=this.getRTLScroller().scrollToRTL(t);this.animate(e)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var e=this.getScrollPosition(),n=t+e,r=this.clampScrollValue(n),o=r-e;return{finalScrollPosition:r,scrollDelta:o}},e.prototype.animate=function(t){var n=this;0!==t.scrollDelta&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame((function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")})),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),e=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var e=this.adapter.getScrollAreaScrollLeft();if(e<0)return this.adapter.setScrollAreaScrollLeft(t),new S(this.adapter);var n=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),o=Math.round(r.right-n.right);return this.adapter.setScrollAreaScrollLeft(t),o===e?new m(this.adapter):new T(this.adapter)},e.prototype.isRTL=function(){return"rtl"===this.adapter.getScrollContentStyleValue("direction")},e}(u.M);function v(t,e){if(void 0===e&&(e=!0),e&&"undefined"!==typeof r)return r;var n=t.createElement("div");n.classList.add(h.SCROLL_TEST),t.body.appendChild(n);var o=n.offsetHeight-n.clientHeight;return t.body.removeChild(n),e&&(r=o),o}
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
 */var b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s._)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area=this.root.querySelector(y.strings.AREA_SELECTOR),this.content=this.root.querySelector(y.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction=function(){t.foundation.handleInteraction()},this.handleTransitionEnd=function(e){t.foundation.handleTransitionEnd(e)},this.area.addEventListener("wheel",this.handleInteraction,(0,d.a)()),this.area.addEventListener("touchstart",this.handleInteraction,(0,d.a)()),this.area.addEventListener("pointerdown",this.handleInteraction,(0,d.a)()),this.area.addEventListener("mousedown",this.handleInteraction,(0,d.a)()),this.area.addEventListener("keydown",this.handleInteraction,(0,d.a)()),this.content.addEventListener("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.area.removeEventListener("wheel",this.handleInteraction,(0,d.a)()),this.area.removeEventListener("touchstart",this.handleInteraction,(0,d.a)()),this.area.removeEventListener("pointerdown",this.handleInteraction,(0,d.a)()),this.area.removeEventListener("mousedown",this.handleInteraction,(0,d.a)()),this.area.removeEventListener("keydown",this.handleInteraction,(0,d.a)()),this.content.removeEventListener("transitionend",this.handleTransitionEnd)},e.prototype.getDefaultFoundation=function(){var t=this,e={eventTargetMatchesSelector:function(t,e){return(0,f.m)(t,e)},addClass:function(e){t.root.classList.add(e)},removeClass:function(e){t.root.classList.remove(e)},addScrollAreaClass:function(e){t.area.classList.add(e)},setScrollAreaStyleProperty:function(e,n){t.area.style.setProperty(e,n)},setScrollContentStyleProperty:function(e,n){t.content.style.setProperty(e,n)},getScrollContentStyleValue:function(e){return window.getComputedStyle(t.content).getPropertyValue(e)},setScrollAreaScrollLeft:function(e){return t.area.scrollLeft=e},getScrollAreaScrollLeft:function(){return t.area.scrollLeft},getScrollContentOffsetWidth:function(){return t.content.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area.offsetWidth},computeScrollAreaClientRect:function(){return t.area.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return v(document)}};return new y(e)},e.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},e}(u.a),A={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},E={CONTENT_SELECTOR:".mdc-tab-indicator__content"},C=function(t){function e(n){return t.call(this,(0,s.a)((0,s.a)({},e.defaultAdapter),n))||this}return(0,s._)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return A},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(u.M),L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s._)(e,t),e.prototype.activate=function(){this.adapter.addClass(C.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(C.cssClasses.ACTIVE)},e}(C),R=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s._)(e,t),e.prototype.activate=function(t){if(t){var e=this.computeContentClientRect(),n=t.width/e.width,r=t.left-e.left;this.adapter.addClass(C.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+n+")"),this.computeContentClientRect(),this.adapter.removeClass(C.cssClasses.NO_TRANSITION),this.adapter.addClass(C.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")}else this.adapter.addClass(C.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(C.cssClasses.ACTIVE)},e}(C),I=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s._)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.content=this.root.querySelector(C.strings.CONTENT_SELECTOR)},e.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},computeContentClientRect:function(){return t.content.getBoundingClientRect()},setContentStyleProperty:function(e,n){t.content.style.setProperty(e,n)}};return this.root.classList.contains(C.cssClasses.FADE)?new L(e):new R(e)},e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e}(u.a),_={ACTIVE:"mdc-tab--active"},O={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"},w=function(t){function e(n){var r=t.call(this,(0,s.a)((0,s.a)({},e.defaultAdapter),n))||this;return r.focusOnActivate=!0,r}return(0,s._)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return O},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(_.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(_.ACTIVE),this.adapter.setAttr(O.ARIA_SELECTED,"true"),this.adapter.setAttr(O.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(_.ACTIVE),this.adapter.setAttr(O.ARIA_SELECTED,"false"),this.adapter.setAttr(O.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),e=this.adapter.getOffsetLeft(),n=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:e+r,contentRight:e+r+n,rootLeft:e,rootRight:e+t}},e}(u.M),P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s._)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e){void 0===t&&(t=function(t,e){return new d.M(t,e)}),void 0===e&&(e=function(t){return new I(t)}),this.id=this.root.id;var n=new d.b(d.M.createAdapter(this));this.ripple=t(this.root,n);var r=this.root.querySelector(w.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator=e(r),this.content=this.root.querySelector(w.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,e={setAttr:function(e,n){return t.root.setAttribute(e,n)},addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},activateIndicator:function(e){t.tabIndicator.activate(e)},deactivateIndicator:function(){t.tabIndicator.deactivate()},notifyInteracted:function(){return t.emit(w.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function(){return t.root.offsetLeft},getOffsetWidth:function(){return t.root.offsetWidth},getContentOffsetLeft:function(){return t.content.offsetLeft},getContentOffsetWidth:function(){return t.content.offsetWidth},focus:function(){return t.root.focus()}};return new w(e)},Object.defineProperty(e.prototype,"active",{get:function(){return this.foundation.isActive()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.foundation.setFocusOnActivate(t)},enumerable:!1,configurable:!0}),e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.computeIndicatorClientRect=function(){return this.tabIndicator.computeContentClientRect()},e.prototype.computeDimensions=function(){return this.foundation.computeDimensions()},e.prototype.focus=function(){this.root.focus()},e}(u.a),x={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},D={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32},N=new Set;
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
 */N.add(x.ARROW_LEFT_KEY),N.add(x.ARROW_RIGHT_KEY),N.add(x.END_KEY),N.add(x.HOME_KEY),N.add(x.ENTER_KEY),N.add(x.SPACE_KEY);var W=new Map;W.set(D.ARROW_LEFT_KEYCODE,x.ARROW_LEFT_KEY),W.set(D.ARROW_RIGHT_KEYCODE,x.ARROW_RIGHT_KEY),W.set(D.END_KEYCODE,x.END_KEY),W.set(D.HOME_KEYCODE,x.HOME_KEY),W.set(D.ENTER_KEYCODE,x.ENTER_KEY),W.set(D.SPACE_KEYCODE,x.SPACE_KEY);var K=function(t){function e(n){var r=t.call(this,(0,s.a)((0,s.a)({},e.defaultAdapter),n))||this;return r.useAutomaticActivation=!1,r}return(0,s._)(e,t),Object.defineProperty(e,"strings",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return D},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var e,n=this.adapter.getPreviousActiveTabIndex();this.indexIsInRange(t)&&t!==n&&(-1!==n&&(this.adapter.deactivateTabAtIndex(n),e=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,e),this.scrollIntoView(t),this.adapter.notifyTabActivated(t))},e.prototype.handleKeyDown=function(t){var e=this.getKeyFromEvent(t);if(void 0!==e)if(this.isActivationKey(e)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(e))return;var n=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),e);this.adapter.setActiveTab(n),this.scrollIntoView(n)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey(e))this.adapter.setActiveTab(r);else{n=this.determineTargetFromKey(r,e);this.adapter.focusTabAtIndex(n),this.scrollIntoView(n)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){this.indexIsInRange(t)&&(0!==t?t!==this.adapter.getTabListLength()-1?this.isRTL()?this.scrollIntoViewImplRTL(t):this.scrollIntoViewImpl(t):this.adapter.scrollTo(this.adapter.getScrollContentWidth()):this.adapter.scrollTo(0))},e.prototype.determineTargetFromKey=function(t,e){var n=this.isRTL(),r=this.adapter.getTabListLength()-1,o=e===x.END_KEY,i=e===x.ARROW_LEFT_KEY&&!n||e===x.ARROW_RIGHT_KEY&&n,a=e===x.ARROW_RIGHT_KEY&&!n||e===x.ARROW_LEFT_KEY&&n,c=t;return o?c=r:i?c-=1:a?c+=1:c=0,c<0?c=r:c>r&&(c=0),c},e.prototype.calculateScrollIncrement=function(t,e,n,r){var o=this.adapter.getTabDimensionsAtIndex(e),i=o.contentLeft-n-r,a=o.contentRight-n,c=a-D.EXTRA_SCROLL_AMOUNT,l=i+D.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(c,0):Math.max(l,0)},e.prototype.calculateScrollIncrementRTL=function(t,e,n,r,o){var i=this.adapter.getTabDimensionsAtIndex(e),a=o-i.contentLeft-n,c=o-i.contentRight-n-r,l=c+D.EXTRA_SCROLL_AMOUNT,s=a-D.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(l,0):Math.min(s,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,e,n,r){var o=e.rootLeft-n,i=e.rootRight-n-r,a=o+i,c=o<0||a<0,l=i>0||a>0;return c?t-1:l?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,e,n,r,o){var i=o-e.rootLeft-r-n,a=o-e.rootRight-n,c=i+a,l=i>0||c>0,s=a<0||c<0;return l?t+1:s?t-1:-1},e.prototype.getKeyFromEvent=function(t){return N.has(t.key)?t.key:W.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===x.SPACE_KEY||t===x.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var e=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),o=this.findAdjacentTabIndexClosestToEdge(t,r,e,n);if(this.indexIsInRange(o)){var i=this.calculateScrollIncrement(t,o,e,n);this.adapter.incrementScroll(i)}},e.prototype.scrollIntoViewImplRTL=function(t){var e=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),o=this.adapter.getScrollContentWidth(),i=this.findAdjacentTabIndexClosestToEdgeRTL(t,r,e,n,o);if(this.indexIsInRange(i)){var a=this.calculateScrollIncrementRTL(t,i,e,n,o);this.adapter.incrementScroll(a)}},e}(u.M),V=K.strings,M=0,Y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s._)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){var e,n;try{for(var r=(0,s.b)(this.tabList),o=r.next();!o.done;o=r.next()){var i=o.value;i.focusOnActivate=t}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,e){void 0===t&&(t=function(t){return new P(t)}),void 0===e&&(e=function(t){return new b(t)}),this.tabList=this.instantiateTabs(t),this.tabScroller=this.instantiatetabScroller(e)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction=function(e){t.foundation.handleTabInteraction(e)},this.handleKeyDown=function(e){t.foundation.handleKeyDown(e)},this.listen(w.strings.INTERACTED_EVENT,this.handleTabInteraction),this.listen("keydown",this.handleKeyDown);for(var e=0;e<this.tabList.length;e++)if(this.tabList[e].active){this.scrollIntoView(e);break}},e.prototype.destroy=function(){var e,n;t.prototype.destroy.call(this),this.unlisten(w.strings.INTERACTED_EVENT,this.handleTabInteraction),this.unlisten("keydown",this.handleKeyDown);try{for(var r=(0,s.b)(this.tabList),o=r.next();!o.done;o=r.next()){var i=o.value;i.destroy()}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}this.tabScroller&&this.tabScroller.destroy()},e.prototype.getDefaultFoundation=function(){var t=this,e={scrollTo:function(e){t.tabScroller.scrollTo(e)},incrementScroll:function(e){t.tabScroller.incrementScroll(e)},getScrollPosition:function(){return t.tabScroller.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return"rtl"===window.getComputedStyle(t.root).getPropertyValue("direction")},setActiveTab:function(e){t.foundation.activateTab(e)},activateTabAtIndex:function(e,n){t.tabList[e].activate(n)},deactivateTabAtIndex:function(e){t.tabList[e].deactivate()},focusTabAtIndex:function(e){t.tabList[e].focus()},getTabIndicatorClientRectAtIndex:function(e){return t.tabList[e].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(e){return t.tabList[e].computeDimensions()},getPreviousActiveTabIndex:function(){for(var e=0;e<t.tabList.length;e++)if(t.tabList[e].active)return e;return-1},getFocusedTabIndex:function(){var e=t.getTabElements(),n=document.activeElement;return e.indexOf(n)},getIndexOfTabById:function(e){for(var n=0;n<t.tabList.length;n++)if(t.tabList[n].id===e)return n;return-1},getTabListLength:function(){return t.tabList.length},notifyTabActivated:function(e){return t.emit(V.TAB_ACTIVATED_EVENT,{index:e},!0)}};return new K(e)},e.prototype.activateTab=function(t){this.foundation.activateTab(t)},e.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)},e.prototype.getTabElements=function(){return[].slice.call(this.root.querySelectorAll(V.TAB_SELECTOR))},e.prototype.instantiateTabs=function(t){return this.getTabElements().map((function(e){return e.id=e.id||"mdc-tab-"+ ++M,t(e)}))},e.prototype.instantiatetabScroller=function(t){var e=this.root.querySelector(V.TAB_SCROLLER_SELECTOR);return e?t(e):null},e}(u.a),k=".mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}",F=function(){function t(e){(0,a.Z)(this,t),(0,l.r)(this,e),this.activeTabChange=(0,l.c)(this,"activeTabChange",7),this.activeTab=0,this.autoFocus=!1}return(0,c.Z)(t,[{key:"activeTabChangedWatcher",value:function(t){this.mdcInstance&&this.mdcInstance.activateTab(t)}},{key:"componentDidLoad",value:function(){this.mdcInstance=new Y(this.el.querySelector(".mdc-tab-bar")),this.mdcInstance.focusOnActivate=this.autoFocus,this.mdcInstance.activateTab(this.activeTab)}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.mdcInstance)||void 0===t||t.destroy()}},{key:"interactionHandler",value:function(){var t=(0,i.Z)((0,o.Z)().mark((function t(e){var n,r;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.stopPropagation(),t.next=3,Promise.all(Array.from(this.el.querySelectorAll("ino-tab")));case 3:n=t.sent,r=n.indexOf(e.detail),this.activeTabChange.emit(r);case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"render",value:function(){return(0,l.h)(l.H,null,(0,l.h)("div",{class:"mdc-tab-bar",role:"tablist"},(0,l.h)("div",{class:"mdc-tab-scroller"},(0,l.h)("div",{class:"mdc-tab-scroller__scroll-area"},(0,l.h)("div",{class:"mdc-tab-scroller__scroll-content"},(0,l.h)("slot",null))))))}},{key:"el",get:function(){return(0,l.g)(this)}}],[{key:"watchers",get:function(){return{activeTab:["activeTabChangedWatcher"]}}}]),t}();
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
 */F.style=k}}]);
//# sourceMappingURL=3475-legacy.ee4b1fb9.js.map