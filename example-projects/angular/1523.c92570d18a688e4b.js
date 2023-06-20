"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[1523],{1523:($,_,g)=>{g.r(_),g.d(_,{ino_tab_bar:()=>P});var L,M=g(9671),v=g(7056),l=g(2168),d=g(194),w=g(804),O={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},W={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"},A=function o(e){this.adapter=e},x=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return(0,l._)(e,o),e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),r=this.calculateScrollEdges().right;return Math.round(r-t)},e.prototype.scrollToRTL=function(t){var r=this.calculateScrollEdges(),n=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(r.right-t);return{finalScrollPosition:a,scrollDelta:a-n}},e.prototype.incrementScrollRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r-t);return{finalScrollPosition:n,scrollDelta:n-r}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,t),r.right)},e}(A),N=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return(0,l._)(e,o),e.prototype.getScrollPositionRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(t-r)},e.prototype.scrollToRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(-t);return{finalScrollPosition:n,scrollDelta:n-r}},e.prototype.incrementScrollRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r-t);return{finalScrollPosition:n,scrollDelta:n-r}},e.prototype.getAnimatingScrollPosition=function(t,r){return t-r},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth();return{left:this.adapter.getScrollAreaOffsetWidth()-t,right:0}},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.max(Math.min(r.right,t),r.left)},e}(A),K=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return(0,l._)(e,o),e.prototype.getScrollPositionRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(r-t)},e.prototype.scrollToRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(t);return{finalScrollPosition:n,scrollDelta:r-n}},e.prototype.incrementScrollRTL=function(t){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r+t);return{finalScrollPosition:n,scrollDelta:r-n}},e.prototype.getAnimatingScrollPosition=function(t,r){return t+r},e.prototype.calculateScrollEdges=function(){return{left:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth(),right:0}},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.min(Math.max(r.right,t),r.left)},e}(A),y=function(o){function e(t){var r=o.call(this,(0,l.a)((0,l.a)({},e.defaultAdapter),t))||this;return r.isAnimating=!1,r}return(0,l._)(e,o),Object.defineProperty(e,"cssClasses",{get:function(){return O},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return W},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX();return this.adapter.getScrollAreaScrollLeft()-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){!this.isAnimating||!this.adapter.eventTargetMatchesSelector(t.target,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){0!==t&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(0!==t){var r=this.getIncrementScrollOperation(t);0!==r.scrollDelta&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition))}},e.prototype.scrollTo=function(t){this.isRTL()?this.scrollToImplRTL(t):this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if("none"===t)return 0;var r=/\((.+?)\)/.exec(t);if(!r)return 0;var a=(0,l.e)(r[1].split(","),6);return parseFloat(a[4])},e.prototype.clampScrollValue=function(t){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,t),r.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.scrollToImpl=function(t){var r=this.getScrollPosition(),n=this.clampScrollValue(t);this.animate({finalScrollPosition:n,scrollDelta:n-r})},e.prototype.scrollToImplRTL=function(t){var r=this.getRTLScroller().scrollToRTL(t);this.animate(r)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var r=this.getScrollPosition(),a=this.clampScrollValue(t+r);return{finalScrollPosition:a,scrollDelta:a-r}},e.prototype.animate=function(t){var r=this;0!==t.scrollDelta&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){r.adapter.addClass(e.cssClasses.ANIMATING),r.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(r,t):r-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var r=this.adapter.getScrollAreaScrollLeft();if(r<0)return this.adapter.setScrollAreaScrollLeft(t),new N(this.adapter);var n=this.adapter.computeScrollAreaClientRect(),a=this.adapter.computeScrollContentClientRect(),i=Math.round(a.right-n.right);return this.adapter.setScrollAreaScrollLeft(t),i===r?new K(this.adapter):new x(this.adapter)},e.prototype.isRTL=function(){return"rtl"===this.adapter.getScrollContentStyleValue("direction")},e}(l.M),Y=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return(0,l._)(e,o),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area=this.root.querySelector(y.strings.AREA_SELECTOR),this.content=this.root.querySelector(y.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction=function(){t.foundation.handleInteraction()},this.handleTransitionEnd=function(r){t.foundation.handleTransitionEnd(r)},this.area.addEventListener("wheel",this.handleInteraction,(0,d.a)()),this.area.addEventListener("touchstart",this.handleInteraction,(0,d.a)()),this.area.addEventListener("pointerdown",this.handleInteraction,(0,d.a)()),this.area.addEventListener("mousedown",this.handleInteraction,(0,d.a)()),this.area.addEventListener("keydown",this.handleInteraction,(0,d.a)()),this.content.addEventListener("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){o.prototype.destroy.call(this),this.area.removeEventListener("wheel",this.handleInteraction,(0,d.a)()),this.area.removeEventListener("touchstart",this.handleInteraction,(0,d.a)()),this.area.removeEventListener("pointerdown",this.handleInteraction,(0,d.a)()),this.area.removeEventListener("mousedown",this.handleInteraction,(0,d.a)()),this.area.removeEventListener("keydown",this.handleInteraction,(0,d.a)()),this.content.removeEventListener("transitionend",this.handleTransitionEnd)},e.prototype.getDefaultFoundation=function(){var t=this,r={eventTargetMatchesSelector:function(n,a){return(0,w.m)(n,a)},addClass:function(n){t.root.classList.add(n)},removeClass:function(n){t.root.classList.remove(n)},addScrollAreaClass:function(n){t.area.classList.add(n)},setScrollAreaStyleProperty:function(n,a){t.area.style.setProperty(n,a)},setScrollContentStyleProperty:function(n,a){t.content.style.setProperty(n,a)},getScrollContentStyleValue:function(n){return window.getComputedStyle(t.content).getPropertyValue(n)},setScrollAreaScrollLeft:function(n){return t.area.scrollLeft=n},getScrollAreaScrollLeft:function(){return t.area.scrollLeft},getScrollContentOffsetWidth:function(){return t.content.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area.offsetWidth},computeScrollAreaClientRect:function(){return t.area.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return function V(o,e){if(void 0===e&&(e=!0),e&&typeof L<"u")return L;var t=o.createElement("div");t.classList.add(O.SCROLL_TEST),o.body.appendChild(t);var r=t.offsetHeight-t.clientHeight;return o.body.removeChild(t),e&&(L=r),r}(document)}};return new y(r)},e.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},e}(l.c),F={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},B={CONTENT_SELECTOR:".mdc-tab-indicator__content"},h=function(o){function e(t){return o.call(this,(0,l.a)((0,l.a)({},e.defaultAdapter),t))||this}return(0,l._)(e,o),Object.defineProperty(e,"cssClasses",{get:function(){return F},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return B},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(l.M),H=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return(0,l._)(e,o),e.prototype.activate=function(){this.adapter.addClass(h.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(h.cssClasses.ACTIVE)},e}(h),j=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return(0,l._)(e,o),e.prototype.activate=function(t){if(t){var r=this.computeContentClientRect(),n=t.width/r.width,a=t.left-r.left;this.adapter.addClass(h.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+a+"px) scaleX("+n+")"),this.computeContentClientRect(),this.adapter.removeClass(h.cssClasses.NO_TRANSITION),this.adapter.addClass(h.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")}else this.adapter.addClass(h.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(h.cssClasses.ACTIVE)},e}(h),X=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return(0,l._)(e,o),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.content=this.root.querySelector(h.strings.CONTENT_SELECTOR)},e.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()},e.prototype.getDefaultFoundation=function(){var t=this,r={addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},computeContentClientRect:function(){return t.content.getBoundingClientRect()},setContentStyleProperty:function(n,a){t.content.style.setProperty(n,a)}};return this.root.classList.contains(h.cssClasses.FADE)?new H(r):new j(r)},e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e}(l.c),E={ACTIVE:"mdc-tab--active"},b={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"},C=function(o){function e(t){var r=o.call(this,(0,l.a)((0,l.a)({},e.defaultAdapter),t))||this;return r.focusOnActivate=!0,r}return(0,l._)(e,o),Object.defineProperty(e,"cssClasses",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(E.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(E.ACTIVE),this.adapter.setAttr(b.ARIA_SELECTED,"true"),this.adapter.setAttr(b.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(E.ACTIVE),this.adapter.setAttr(b.ARIA_SELECTED,"false"),this.adapter.setAttr(b.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),r=this.adapter.getOffsetLeft(),n=this.adapter.getContentOffsetWidth(),a=this.adapter.getContentOffsetLeft();return{contentLeft:r+a,contentRight:r+a+n,rootLeft:r,rootRight:r+t}},e}(l.M),k=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return(0,l._)(e,o),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,r){void 0===t&&(t=function(i,c){return new d.M(i,c)}),void 0===r&&(r=function(i){return new X(i)}),this.id=this.root.id;var n=new d.b(d.M.createAdapter(this));this.ripple=t(this.root,n);var a=this.root.querySelector(C.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator=r(a),this.content=this.root.querySelector(C.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),o.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this;return new C({setAttr:function(n,a){return t.root.setAttribute(n,a)},addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},activateIndicator:function(n){t.tabIndicator.activate(n)},deactivateIndicator:function(){t.tabIndicator.deactivate()},notifyInteracted:function(){return t.emit(C.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function(){return t.root.offsetLeft},getOffsetWidth:function(){return t.root.offsetWidth},getContentOffsetLeft:function(){return t.content.offsetLeft},getContentOffsetWidth:function(){return t.content.offsetWidth},focus:function(){return t.root.focus()}})},Object.defineProperty(e.prototype,"active",{get:function(){return this.foundation.isActive()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.foundation.setFocusOnActivate(t)},enumerable:!1,configurable:!0}),e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.computeIndicatorClientRect=function(){return this.tabIndicator.computeContentClientRect()},e.prototype.computeDimensions=function(){return this.foundation.computeDimensions()},e.prototype.focus=function(){this.root.focus()},e}(l.c),s={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},p={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32},T=new Set;T.add(s.ARROW_LEFT_KEY),T.add(s.ARROW_RIGHT_KEY),T.add(s.END_KEY),T.add(s.HOME_KEY),T.add(s.ENTER_KEY),T.add(s.SPACE_KEY);var S=new Map;S.set(p.ARROW_LEFT_KEYCODE,s.ARROW_LEFT_KEY),S.set(p.ARROW_RIGHT_KEYCODE,s.ARROW_RIGHT_KEY),S.set(p.END_KEYCODE,s.END_KEY),S.set(p.HOME_KEYCODE,s.HOME_KEY),S.set(p.ENTER_KEYCODE,s.ENTER_KEY),S.set(p.SPACE_KEYCODE,s.SPACE_KEY);var D=function(o){function e(t){var r=o.call(this,(0,l.a)((0,l.a)({},e.defaultAdapter),t))||this;return r.useAutomaticActivation=!1,r}return(0,l._)(e,o),Object.defineProperty(e,"strings",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var n,r=this.adapter.getPreviousActiveTabIndex();this.indexIsInRange(t)&&t!==r&&(-1!==r&&(this.adapter.deactivateTabAtIndex(r),n=this.adapter.getTabIndicatorClientRectAtIndex(r)),this.adapter.activateTabAtIndex(t,n),this.scrollIntoView(t),this.adapter.notifyTabActivated(t))},e.prototype.handleKeyDown=function(t){var r=this.getKeyFromEvent(t);if(void 0!==r)if(this.isActivationKey(r)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(r))return;var n=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),r);this.adapter.setActiveTab(n),this.scrollIntoView(n)}else{var a=this.adapter.getFocusedTabIndex();this.isActivationKey(r)?this.adapter.setActiveTab(a):(n=this.determineTargetFromKey(a,r),this.adapter.focusTabAtIndex(n),this.scrollIntoView(n))}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange(t)){if(0===t)return void this.adapter.scrollTo(0);if(t===this.adapter.getTabListLength()-1)return void this.adapter.scrollTo(this.adapter.getScrollContentWidth());if(this.isRTL())return void this.scrollIntoViewImplRTL(t);this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,r){var n=this.isRTL(),a=this.adapter.getTabListLength()-1,u=t;return r===s.END_KEY?u=a:r===s.ARROW_LEFT_KEY&&!n||r===s.ARROW_RIGHT_KEY&&n?u-=1:r===s.ARROW_RIGHT_KEY&&!n||r===s.ARROW_LEFT_KEY&&n?u+=1:u=0,u<0?u=a:u>a&&(u=0),u},e.prototype.calculateScrollIncrement=function(t,r,n,a){var i=this.adapter.getTabDimensionsAtIndex(r),m=i.contentLeft-n-a+p.EXTRA_SCROLL_AMOUNT;return r<t?Math.min(i.contentRight-n-p.EXTRA_SCROLL_AMOUNT,0):Math.max(m,0)},e.prototype.calculateScrollIncrementRTL=function(t,r,n,a,i){var c=this.adapter.getTabDimensionsAtIndex(r),I=i-c.contentLeft-n-p.EXTRA_SCROLL_AMOUNT;return r>t?Math.max(i-c.contentRight-n-a+p.EXTRA_SCROLL_AMOUNT,0):Math.min(I,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,r,n,a){var i=r.rootLeft-n,c=r.rootRight-n-a,f=i+c;return i<0||f<0?t-1:c>0||f>0?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,r,n,a,i){var c=i-r.rootLeft-a-n,f=i-r.rootRight-n,u=c+f;return c>0||u>0?t+1:f<0||u<0?t-1:-1},e.prototype.getKeyFromEvent=function(t){return T.has(t.key)?t.key:S.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===s.SPACE_KEY||t===s.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var r=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(t),i=this.findAdjacentTabIndexClosestToEdge(t,a,r,n);if(this.indexIsInRange(i)){var c=this.calculateScrollIncrement(t,i,r,n);this.adapter.incrementScroll(c)}},e.prototype.scrollIntoViewImplRTL=function(t){var r=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(t),i=this.adapter.getScrollContentWidth(),c=this.findAdjacentTabIndexClosestToEdgeRTL(t,a,r,n,i);if(this.indexIsInRange(c)){var f=this.calculateScrollIncrementRTL(t,c,r,n,i);this.adapter.incrementScroll(f)}},e}(l.M),R=D.strings,G=0,z=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return(0,l._)(e,o),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){var r,n;try{for(var a=(0,l.b)(this.tabList),i=a.next();!i.done;i=a.next())i.value.focusOnActivate=t}catch(f){r={error:f}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,r){void 0===t&&(t=function(n){return new k(n)}),void 0===r&&(r=function(n){return new Y(n)}),this.tabList=this.instantiateTabs(t),this.tabScroller=this.instantiatetabScroller(r)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction=function(n){t.foundation.handleTabInteraction(n)},this.handleKeyDown=function(n){t.foundation.handleKeyDown(n)},this.listen(C.strings.INTERACTED_EVENT,this.handleTabInteraction),this.listen("keydown",this.handleKeyDown);for(var r=0;r<this.tabList.length;r++)if(this.tabList[r].active){this.scrollIntoView(r);break}},e.prototype.destroy=function(){var t,r;o.prototype.destroy.call(this),this.unlisten(C.strings.INTERACTED_EVENT,this.handleTabInteraction),this.unlisten("keydown",this.handleKeyDown);try{for(var n=(0,l.b)(this.tabList),a=n.next();!a.done;a=n.next())a.value.destroy()}catch(c){t={error:c}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}this.tabScroller&&this.tabScroller.destroy()},e.prototype.getDefaultFoundation=function(){var t=this;return new D({scrollTo:function(n){t.tabScroller.scrollTo(n)},incrementScroll:function(n){t.tabScroller.incrementScroll(n)},getScrollPosition:function(){return t.tabScroller.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return"rtl"===window.getComputedStyle(t.root).getPropertyValue("direction")},setActiveTab:function(n){t.foundation.activateTab(n)},activateTabAtIndex:function(n,a){t.tabList[n].activate(a)},deactivateTabAtIndex:function(n){t.tabList[n].deactivate()},focusTabAtIndex:function(n){t.tabList[n].focus()},getTabIndicatorClientRectAtIndex:function(n){return t.tabList[n].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(n){return t.tabList[n].computeDimensions()},getPreviousActiveTabIndex:function(){for(var n=0;n<t.tabList.length;n++)if(t.tabList[n].active)return n;return-1},getFocusedTabIndex:function(){var n=t.getTabElements(),a=document.activeElement;return n.indexOf(a)},getIndexOfTabById:function(n){for(var a=0;a<t.tabList.length;a++)if(t.tabList[a].id===n)return a;return-1},getTabListLength:function(){return t.tabList.length},notifyTabActivated:function(n){return t.emit(R.TAB_ACTIVATED_EVENT,{index:n},!0)}})},e.prototype.activateTab=function(t){this.foundation.activateTab(t)},e.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)},e.prototype.getTabElements=function(){return[].slice.call(this.root.querySelectorAll(R.TAB_SELECTOR))},e.prototype.instantiateTabs=function(t){return this.getTabElements().map(function(r){return r.id=r.id||"mdc-tab-"+ ++G,t(r)})},e.prototype.instantiatetabScroller=function(t){var r=this.root.querySelector(R.TAB_SCROLLER_SELECTOR);return r?t(r):null},e}(l.c);const P=class{constructor(o){(0,v.r)(this,o),this.activeTabChange=(0,v.c)(this,"activeTabChange",7),this.activeTab=0,this.autoFocus=!1}activeTabChangedWatcher(o){this.mdcInstance&&this.mdcInstance.activateTab(o)}componentDidLoad(){this.mdcInstance=new z(this.el.querySelector(".mdc-tab-bar")),this.mdcInstance.focusOnActivate=this.autoFocus,this.mdcInstance.activateTab(this.activeTab)}disconnectedCallback(){var o;null===(o=this.mdcInstance)||void 0===o||o.destroy()}interactionHandler(o){var e=this;return(0,M.Z)(function*(){o.stopPropagation();const r=(yield Promise.all(Array.from(e.el.querySelectorAll("ino-tab")))).indexOf(o.detail);e.activeTabChange.emit(r)})()}render(){return(0,v.h)(v.H,null,(0,v.h)("div",{class:"mdc-tab-bar",role:"tablist"},(0,v.h)("div",{class:"mdc-tab-scroller"},(0,v.h)("div",{class:"mdc-tab-scroller__scroll-area"},(0,v.h)("div",{class:"mdc-tab-scroller__scroll-content"},(0,v.h)("slot",null))))))}get el(){return(0,v.g)(this)}static get watchers(){return{activeTab:["activeTabChangedWatcher"]}}};P.style=".mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}"}}]);