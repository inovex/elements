import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { _ as __extends, e as __read, M as MDCComponent, b as __values, a as __assign, c as MDCFoundation } from "./component-97c8fef9.061cf906.js";
import { a as applyPassive, b as MDCRippleFoundation, M as MDCRipple } from "./component-780a5882.fd4d53f9.js";
import { m as matches } from "./ponyfill-495ec32d.2f34f215.js";
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
var cssClasses$2 = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
};
var strings$4 = {
  AREA_SELECTOR: ".mdc-tab-scroller__scroll-area",
  CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content"
};
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
var MDCTabScrollerRTL = function() {
  function MDCTabScrollerRTL2(adapter) {
    this.adapter = adapter;
  }
  return MDCTabScrollerRTL2;
}();
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
var MDCTabScrollerRTLDefault = function(_super) {
  __extends(MDCTabScrollerRTLDefault2, _super);
  function MDCTabScrollerRTLDefault2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTabScrollerRTLDefault2.prototype.getScrollPositionRTL = function() {
    var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
    var right = this.calculateScrollEdges().right;
    return Math.round(right - currentScrollLeft);
  };
  MDCTabScrollerRTLDefault2.prototype.scrollToRTL = function(scrollX) {
    var edges = this.calculateScrollEdges();
    var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue(edges.right - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };
  MDCTabScrollerRTLDefault2.prototype.incrementScrollRTL = function(scrollX) {
    var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue(currentScrollLeft - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };
  MDCTabScrollerRTLDefault2.prototype.getAnimatingScrollPosition = function(scrollX) {
    return scrollX;
  };
  MDCTabScrollerRTLDefault2.prototype.calculateScrollEdges = function() {
    var contentWidth = this.adapter.getScrollContentOffsetWidth();
    var rootWidth = this.adapter.getScrollAreaOffsetWidth();
    return {
      left: 0,
      right: contentWidth - rootWidth
    };
  };
  MDCTabScrollerRTLDefault2.prototype.clampScrollValue = function(scrollX) {
    var edges = this.calculateScrollEdges();
    return Math.min(Math.max(edges.left, scrollX), edges.right);
  };
  return MDCTabScrollerRTLDefault2;
}(MDCTabScrollerRTL);
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
var MDCTabScrollerRTLNegative = function(_super) {
  __extends(MDCTabScrollerRTLNegative2, _super);
  function MDCTabScrollerRTLNegative2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTabScrollerRTLNegative2.prototype.getScrollPositionRTL = function(translateX) {
    var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
    return Math.round(translateX - currentScrollLeft);
  };
  MDCTabScrollerRTLNegative2.prototype.scrollToRTL = function(scrollX) {
    var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue(-scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };
  MDCTabScrollerRTLNegative2.prototype.incrementScrollRTL = function(scrollX) {
    var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue(currentScrollLeft - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };
  MDCTabScrollerRTLNegative2.prototype.getAnimatingScrollPosition = function(scrollX, translateX) {
    return scrollX - translateX;
  };
  MDCTabScrollerRTLNegative2.prototype.calculateScrollEdges = function() {
    var contentWidth = this.adapter.getScrollContentOffsetWidth();
    var rootWidth = this.adapter.getScrollAreaOffsetWidth();
    return {
      left: rootWidth - contentWidth,
      right: 0
    };
  };
  MDCTabScrollerRTLNegative2.prototype.clampScrollValue = function(scrollX) {
    var edges = this.calculateScrollEdges();
    return Math.max(Math.min(edges.right, scrollX), edges.left);
  };
  return MDCTabScrollerRTLNegative2;
}(MDCTabScrollerRTL);
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
var MDCTabScrollerRTLReverse = function(_super) {
  __extends(MDCTabScrollerRTLReverse2, _super);
  function MDCTabScrollerRTLReverse2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTabScrollerRTLReverse2.prototype.getScrollPositionRTL = function(translateX) {
    var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
    return Math.round(currentScrollLeft - translateX);
  };
  MDCTabScrollerRTLReverse2.prototype.scrollToRTL = function(scrollX) {
    var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue(scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: currentScrollLeft - clampedScrollLeft
    };
  };
  MDCTabScrollerRTLReverse2.prototype.incrementScrollRTL = function(scrollX) {
    var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue(currentScrollLeft + scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: currentScrollLeft - clampedScrollLeft
    };
  };
  MDCTabScrollerRTLReverse2.prototype.getAnimatingScrollPosition = function(scrollX, translateX) {
    return scrollX + translateX;
  };
  MDCTabScrollerRTLReverse2.prototype.calculateScrollEdges = function() {
    var contentWidth = this.adapter.getScrollContentOffsetWidth();
    var rootWidth = this.adapter.getScrollAreaOffsetWidth();
    return {
      left: contentWidth - rootWidth,
      right: 0
    };
  };
  MDCTabScrollerRTLReverse2.prototype.clampScrollValue = function(scrollX) {
    var edges = this.calculateScrollEdges();
    return Math.min(Math.max(edges.right, scrollX), edges.left);
  };
  return MDCTabScrollerRTLReverse2;
}(MDCTabScrollerRTL);
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
var MDCTabScrollerFoundation = function(_super) {
  __extends(MDCTabScrollerFoundation2, _super);
  function MDCTabScrollerFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCTabScrollerFoundation2.defaultAdapter), adapter)) || this;
    _this.isAnimating = false;
    return _this;
  }
  Object.defineProperty(MDCTabScrollerFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTabScrollerFoundation2, "strings", {
    get: function() {
      return strings$4;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTabScrollerFoundation2, "defaultAdapter", {
    get: function() {
      return {
        eventTargetMatchesSelector: function() {
          return false;
        },
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        addScrollAreaClass: function() {
          return void 0;
        },
        setScrollAreaStyleProperty: function() {
          return void 0;
        },
        setScrollContentStyleProperty: function() {
          return void 0;
        },
        getScrollContentStyleValue: function() {
          return "";
        },
        setScrollAreaScrollLeft: function() {
          return void 0;
        },
        getScrollAreaScrollLeft: function() {
          return 0;
        },
        getScrollContentOffsetWidth: function() {
          return 0;
        },
        getScrollAreaOffsetWidth: function() {
          return 0;
        },
        computeScrollAreaClientRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        computeScrollContentClientRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        computeHorizontalScrollbarHeight: function() {
          return 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTabScrollerFoundation2.prototype.init = function() {
    var horizontalScrollbarHeight = this.adapter.computeHorizontalScrollbarHeight();
    this.adapter.setScrollAreaStyleProperty("margin-bottom", -horizontalScrollbarHeight + "px");
    this.adapter.addScrollAreaClass(MDCTabScrollerFoundation2.cssClasses.SCROLL_AREA_SCROLL);
  };
  MDCTabScrollerFoundation2.prototype.getScrollPosition = function() {
    if (this.isRTL()) {
      return this.computeCurrentScrollPositionRTL();
    }
    var currentTranslateX = this.calculateCurrentTranslateX();
    var scrollLeft = this.adapter.getScrollAreaScrollLeft();
    return scrollLeft - currentTranslateX;
  };
  MDCTabScrollerFoundation2.prototype.handleInteraction = function() {
    if (!this.isAnimating) {
      return;
    }
    this.stopScrollAnimation();
  };
  MDCTabScrollerFoundation2.prototype.handleTransitionEnd = function(evt) {
    var evtTarget = evt.target;
    if (!this.isAnimating || !this.adapter.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation2.strings.CONTENT_SELECTOR)) {
      return;
    }
    this.isAnimating = false;
    this.adapter.removeClass(MDCTabScrollerFoundation2.cssClasses.ANIMATING);
  };
  MDCTabScrollerFoundation2.prototype.incrementScroll = function(scrollXIncrement) {
    if (scrollXIncrement === 0) {
      return;
    }
    this.animate(this.getIncrementScrollOperation(scrollXIncrement));
  };
  MDCTabScrollerFoundation2.prototype.incrementScrollImmediate = function(scrollXIncrement) {
    if (scrollXIncrement === 0) {
      return;
    }
    var operation = this.getIncrementScrollOperation(scrollXIncrement);
    if (operation.scrollDelta === 0) {
      return;
    }
    this.stopScrollAnimation();
    this.adapter.setScrollAreaScrollLeft(operation.finalScrollPosition);
  };
  MDCTabScrollerFoundation2.prototype.scrollTo = function(scrollX) {
    if (this.isRTL()) {
      this.scrollToImplRTL(scrollX);
      return;
    }
    this.scrollToImpl(scrollX);
  };
  MDCTabScrollerFoundation2.prototype.getRTLScroller = function() {
    if (!this.rtlScrollerInstance) {
      this.rtlScrollerInstance = this.rtlScrollerFactory();
    }
    return this.rtlScrollerInstance;
  };
  MDCTabScrollerFoundation2.prototype.calculateCurrentTranslateX = function() {
    var transformValue = this.adapter.getScrollContentStyleValue("transform");
    if (transformValue === "none") {
      return 0;
    }
    var match = /\((.+?)\)/.exec(transformValue);
    if (!match) {
      return 0;
    }
    var matrixParams = match[1];
    var _a = __read(matrixParams.split(","), 6), tx = _a[4];
    return parseFloat(tx);
  };
  MDCTabScrollerFoundation2.prototype.clampScrollValue = function(scrollX) {
    var edges = this.calculateScrollEdges();
    return Math.min(Math.max(edges.left, scrollX), edges.right);
  };
  MDCTabScrollerFoundation2.prototype.computeCurrentScrollPositionRTL = function() {
    var translateX = this.calculateCurrentTranslateX();
    return this.getRTLScroller().getScrollPositionRTL(translateX);
  };
  MDCTabScrollerFoundation2.prototype.calculateScrollEdges = function() {
    var contentWidth = this.adapter.getScrollContentOffsetWidth();
    var rootWidth = this.adapter.getScrollAreaOffsetWidth();
    return {
      left: 0,
      right: contentWidth - rootWidth
    };
  };
  MDCTabScrollerFoundation2.prototype.scrollToImpl = function(scrollX) {
    var currentScrollX = this.getScrollPosition();
    var safeScrollX = this.clampScrollValue(scrollX);
    var scrollDelta = safeScrollX - currentScrollX;
    this.animate({
      finalScrollPosition: safeScrollX,
      scrollDelta
    });
  };
  MDCTabScrollerFoundation2.prototype.scrollToImplRTL = function(scrollX) {
    var animation = this.getRTLScroller().scrollToRTL(scrollX);
    this.animate(animation);
  };
  MDCTabScrollerFoundation2.prototype.getIncrementScrollOperation = function(scrollX) {
    if (this.isRTL()) {
      return this.getRTLScroller().incrementScrollRTL(scrollX);
    }
    var currentScrollX = this.getScrollPosition();
    var targetScrollX = scrollX + currentScrollX;
    var safeScrollX = this.clampScrollValue(targetScrollX);
    var scrollDelta = safeScrollX - currentScrollX;
    return {
      finalScrollPosition: safeScrollX,
      scrollDelta
    };
  };
  MDCTabScrollerFoundation2.prototype.animate = function(animation) {
    var _this = this;
    if (animation.scrollDelta === 0) {
      return;
    }
    this.stopScrollAnimation();
    this.adapter.setScrollAreaScrollLeft(animation.finalScrollPosition);
    this.adapter.setScrollContentStyleProperty("transform", "translateX(" + animation.scrollDelta + "px)");
    this.adapter.computeScrollAreaClientRect();
    requestAnimationFrame(function() {
      _this.adapter.addClass(MDCTabScrollerFoundation2.cssClasses.ANIMATING);
      _this.adapter.setScrollContentStyleProperty("transform", "none");
    });
    this.isAnimating = true;
  };
  MDCTabScrollerFoundation2.prototype.stopScrollAnimation = function() {
    this.isAnimating = false;
    var currentScrollPosition = this.getAnimatingScrollPosition();
    this.adapter.removeClass(MDCTabScrollerFoundation2.cssClasses.ANIMATING);
    this.adapter.setScrollContentStyleProperty("transform", "translateX(0px)");
    this.adapter.setScrollAreaScrollLeft(currentScrollPosition);
  };
  MDCTabScrollerFoundation2.prototype.getAnimatingScrollPosition = function() {
    var currentTranslateX = this.calculateCurrentTranslateX();
    var scrollLeft = this.adapter.getScrollAreaScrollLeft();
    if (this.isRTL()) {
      return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
    }
    return scrollLeft - currentTranslateX;
  };
  MDCTabScrollerFoundation2.prototype.rtlScrollerFactory = function() {
    var initialScrollLeft = this.adapter.getScrollAreaScrollLeft();
    this.adapter.setScrollAreaScrollLeft(initialScrollLeft - 1);
    var newScrollLeft = this.adapter.getScrollAreaScrollLeft();
    if (newScrollLeft < 0) {
      this.adapter.setScrollAreaScrollLeft(initialScrollLeft);
      return new MDCTabScrollerRTLNegative(this.adapter);
    }
    var rootClientRect = this.adapter.computeScrollAreaClientRect();
    var contentClientRect = this.adapter.computeScrollContentClientRect();
    var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
    this.adapter.setScrollAreaScrollLeft(initialScrollLeft);
    if (rightEdgeDelta === newScrollLeft) {
      return new MDCTabScrollerRTLReverse(this.adapter);
    }
    return new MDCTabScrollerRTLDefault(this.adapter);
  };
  MDCTabScrollerFoundation2.prototype.isRTL = function() {
    return this.adapter.getScrollContentStyleValue("direction") === "rtl";
  };
  return MDCTabScrollerFoundation2;
}(MDCFoundation);
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
var horizontalScrollbarHeight_;
function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult) {
  if (shouldCacheResult === void 0) {
    shouldCacheResult = true;
  }
  if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== "undefined") {
    return horizontalScrollbarHeight_;
  }
  var el = documentObj.createElement("div");
  el.classList.add(cssClasses$2.SCROLL_TEST);
  documentObj.body.appendChild(el);
  var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  documentObj.body.removeChild(el);
  if (shouldCacheResult) {
    horizontalScrollbarHeight_ = horizontalScrollbarHeight;
  }
  return horizontalScrollbarHeight;
}
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
var MDCTabScroller = function(_super) {
  __extends(MDCTabScroller2, _super);
  function MDCTabScroller2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTabScroller2.attachTo = function(root) {
    return new MDCTabScroller2(root);
  };
  MDCTabScroller2.prototype.initialize = function() {
    this.area = this.root.querySelector(MDCTabScrollerFoundation.strings.AREA_SELECTOR);
    this.content = this.root.querySelector(MDCTabScrollerFoundation.strings.CONTENT_SELECTOR);
  };
  MDCTabScroller2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    this.handleInteraction = function() {
      _this.foundation.handleInteraction();
    };
    this.handleTransitionEnd = function(evt) {
      _this.foundation.handleTransitionEnd(evt);
    };
    this.area.addEventListener("wheel", this.handleInteraction, applyPassive());
    this.area.addEventListener("touchstart", this.handleInteraction, applyPassive());
    this.area.addEventListener("pointerdown", this.handleInteraction, applyPassive());
    this.area.addEventListener("mousedown", this.handleInteraction, applyPassive());
    this.area.addEventListener("keydown", this.handleInteraction, applyPassive());
    this.content.addEventListener("transitionend", this.handleTransitionEnd);
  };
  MDCTabScroller2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.area.removeEventListener("wheel", this.handleInteraction, applyPassive());
    this.area.removeEventListener("touchstart", this.handleInteraction, applyPassive());
    this.area.removeEventListener("pointerdown", this.handleInteraction, applyPassive());
    this.area.removeEventListener("mousedown", this.handleInteraction, applyPassive());
    this.area.removeEventListener("keydown", this.handleInteraction, applyPassive());
    this.content.removeEventListener("transitionend", this.handleTransitionEnd);
  };
  MDCTabScroller2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      eventTargetMatchesSelector: function(evtTarget, selector) {
        return matches(evtTarget, selector);
      },
      addClass: function(className) {
        _this.root.classList.add(className);
      },
      removeClass: function(className) {
        _this.root.classList.remove(className);
      },
      addScrollAreaClass: function(className) {
        _this.area.classList.add(className);
      },
      setScrollAreaStyleProperty: function(prop, value) {
        _this.area.style.setProperty(prop, value);
      },
      setScrollContentStyleProperty: function(prop, value) {
        _this.content.style.setProperty(prop, value);
      },
      getScrollContentStyleValue: function(propName) {
        return window.getComputedStyle(_this.content).getPropertyValue(propName);
      },
      setScrollAreaScrollLeft: function(scrollX) {
        return _this.area.scrollLeft = scrollX;
      },
      getScrollAreaScrollLeft: function() {
        return _this.area.scrollLeft;
      },
      getScrollContentOffsetWidth: function() {
        return _this.content.offsetWidth;
      },
      getScrollAreaOffsetWidth: function() {
        return _this.area.offsetWidth;
      },
      computeScrollAreaClientRect: function() {
        return _this.area.getBoundingClientRect();
      },
      computeScrollContentClientRect: function() {
        return _this.content.getBoundingClientRect();
      },
      computeHorizontalScrollbarHeight: function() {
        return computeHorizontalScrollbarHeight(document);
      }
    };
    return new MDCTabScrollerFoundation(adapter);
  };
  MDCTabScroller2.prototype.getScrollPosition = function() {
    return this.foundation.getScrollPosition();
  };
  MDCTabScroller2.prototype.getScrollContentWidth = function() {
    return this.content.offsetWidth;
  };
  MDCTabScroller2.prototype.incrementScroll = function(scrollXIncrement) {
    this.foundation.incrementScroll(scrollXIncrement);
  };
  MDCTabScroller2.prototype.scrollTo = function(scrollX) {
    this.foundation.scrollTo(scrollX);
  };
  return MDCTabScroller2;
}(MDCComponent);
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
var cssClasses$1 = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
};
var strings$3 = {
  CONTENT_SELECTOR: ".mdc-tab-indicator__content"
};
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
var MDCTabIndicatorFoundation = function(_super) {
  __extends(MDCTabIndicatorFoundation2, _super);
  function MDCTabIndicatorFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCTabIndicatorFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCTabIndicatorFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTabIndicatorFoundation2, "strings", {
    get: function() {
      return strings$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTabIndicatorFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        computeContentClientRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        setContentStyleProperty: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTabIndicatorFoundation2.prototype.computeContentClientRect = function() {
    return this.adapter.computeContentClientRect();
  };
  return MDCTabIndicatorFoundation2;
}(MDCFoundation);
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
var MDCFadingTabIndicatorFoundation = function(_super) {
  __extends(MDCFadingTabIndicatorFoundation2, _super);
  function MDCFadingTabIndicatorFoundation2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCFadingTabIndicatorFoundation2.prototype.activate = function() {
    this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
  };
  MDCFadingTabIndicatorFoundation2.prototype.deactivate = function() {
    this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
  };
  return MDCFadingTabIndicatorFoundation2;
}(MDCTabIndicatorFoundation);
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
var MDCSlidingTabIndicatorFoundation = function(_super) {
  __extends(MDCSlidingTabIndicatorFoundation2, _super);
  function MDCSlidingTabIndicatorFoundation2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCSlidingTabIndicatorFoundation2.prototype.activate = function(previousIndicatorClientRect) {
    if (!previousIndicatorClientRect) {
      this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      return;
    }
    var currentClientRect = this.computeContentClientRect();
    var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
    this.adapter.setContentStyleProperty("transform", "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")");
    this.computeContentClientRect();
    this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
    this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    this.adapter.setContentStyleProperty("transform", "");
  };
  MDCSlidingTabIndicatorFoundation2.prototype.deactivate = function() {
    this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
  };
  return MDCSlidingTabIndicatorFoundation2;
}(MDCTabIndicatorFoundation);
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
var MDCTabIndicator = function(_super) {
  __extends(MDCTabIndicator2, _super);
  function MDCTabIndicator2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTabIndicator2.attachTo = function(root) {
    return new MDCTabIndicator2(root);
  };
  MDCTabIndicator2.prototype.initialize = function() {
    this.content = this.root.querySelector(MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR);
  };
  MDCTabIndicator2.prototype.computeContentClientRect = function() {
    return this.foundation.computeContentClientRect();
  };
  MDCTabIndicator2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClass: function(className) {
        return _this.root.classList.add(className);
      },
      removeClass: function(className) {
        return _this.root.classList.remove(className);
      },
      computeContentClientRect: function() {
        return _this.content.getBoundingClientRect();
      },
      setContentStyleProperty: function(prop, value) {
        _this.content.style.setProperty(prop, value);
      }
    };
    if (this.root.classList.contains(MDCTabIndicatorFoundation.cssClasses.FADE)) {
      return new MDCFadingTabIndicatorFoundation(adapter);
    }
    return new MDCSlidingTabIndicatorFoundation(adapter);
  };
  MDCTabIndicator2.prototype.activate = function(previousIndicatorClientRect) {
    this.foundation.activate(previousIndicatorClientRect);
  };
  MDCTabIndicator2.prototype.deactivate = function() {
    this.foundation.deactivate();
  };
  return MDCTabIndicator2;
}(MDCComponent);
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
var cssClasses = {
  ACTIVE: "mdc-tab--active"
};
var strings$2 = {
  ARIA_SELECTED: "aria-selected",
  CONTENT_SELECTOR: ".mdc-tab__content",
  INTERACTED_EVENT: "MDCTab:interacted",
  RIPPLE_SELECTOR: ".mdc-tab__ripple",
  TABINDEX: "tabIndex",
  TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator"
};
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
var MDCTabFoundation = function(_super) {
  __extends(MDCTabFoundation2, _super);
  function MDCTabFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCTabFoundation2.defaultAdapter), adapter)) || this;
    _this.focusOnActivate = true;
    return _this;
  }
  Object.defineProperty(MDCTabFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTabFoundation2, "strings", {
    get: function() {
      return strings$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTabFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        setAttr: function() {
          return void 0;
        },
        activateIndicator: function() {
          return void 0;
        },
        deactivateIndicator: function() {
          return void 0;
        },
        notifyInteracted: function() {
          return void 0;
        },
        getOffsetLeft: function() {
          return 0;
        },
        getOffsetWidth: function() {
          return 0;
        },
        getContentOffsetLeft: function() {
          return 0;
        },
        getContentOffsetWidth: function() {
          return 0;
        },
        focus: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTabFoundation2.prototype.handleClick = function() {
    this.adapter.notifyInteracted();
  };
  MDCTabFoundation2.prototype.isActive = function() {
    return this.adapter.hasClass(cssClasses.ACTIVE);
  };
  MDCTabFoundation2.prototype.setFocusOnActivate = function(focusOnActivate) {
    this.focusOnActivate = focusOnActivate;
  };
  MDCTabFoundation2.prototype.activate = function(previousIndicatorClientRect) {
    this.adapter.addClass(cssClasses.ACTIVE);
    this.adapter.setAttr(strings$2.ARIA_SELECTED, "true");
    this.adapter.setAttr(strings$2.TABINDEX, "0");
    this.adapter.activateIndicator(previousIndicatorClientRect);
    if (this.focusOnActivate) {
      this.adapter.focus();
    }
  };
  MDCTabFoundation2.prototype.deactivate = function() {
    if (!this.isActive()) {
      return;
    }
    this.adapter.removeClass(cssClasses.ACTIVE);
    this.adapter.setAttr(strings$2.ARIA_SELECTED, "false");
    this.adapter.setAttr(strings$2.TABINDEX, "-1");
    this.adapter.deactivateIndicator();
  };
  MDCTabFoundation2.prototype.computeDimensions = function() {
    var rootWidth = this.adapter.getOffsetWidth();
    var rootLeft = this.adapter.getOffsetLeft();
    var contentWidth = this.adapter.getContentOffsetWidth();
    var contentLeft = this.adapter.getContentOffsetLeft();
    return {
      contentLeft: rootLeft + contentLeft,
      contentRight: rootLeft + contentLeft + contentWidth,
      rootLeft,
      rootRight: rootLeft + rootWidth
    };
  };
  return MDCTabFoundation2;
}(MDCFoundation);
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
var MDCTab = function(_super) {
  __extends(MDCTab2, _super);
  function MDCTab2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTab2.attachTo = function(root) {
    return new MDCTab2(root);
  };
  MDCTab2.prototype.initialize = function(rippleFactory, tabIndicatorFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function(el, foundation) {
        return new MDCRipple(el, foundation);
      };
    }
    if (tabIndicatorFactory === void 0) {
      tabIndicatorFactory = function(el) {
        return new MDCTabIndicator(el);
      };
    }
    this.id = this.root.id;
    var rippleFoundation = new MDCRippleFoundation(MDCRipple.createAdapter(this));
    this.ripple = rippleFactory(this.root, rippleFoundation);
    var tabIndicatorElement = this.root.querySelector(MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);
    this.tabIndicator = tabIndicatorFactory(tabIndicatorElement);
    this.content = this.root.querySelector(MDCTabFoundation.strings.CONTENT_SELECTOR);
  };
  MDCTab2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    this.handleClick = function() {
      _this.foundation.handleClick();
    };
    this.listen("click", this.handleClick);
  };
  MDCTab2.prototype.destroy = function() {
    this.unlisten("click", this.handleClick);
    this.ripple.destroy();
    _super.prototype.destroy.call(this);
  };
  MDCTab2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      setAttr: function(attr, value) {
        return _this.root.setAttribute(attr, value);
      },
      addClass: function(className) {
        return _this.root.classList.add(className);
      },
      removeClass: function(className) {
        return _this.root.classList.remove(className);
      },
      hasClass: function(className) {
        return _this.root.classList.contains(className);
      },
      activateIndicator: function(previousIndicatorClientRect) {
        _this.tabIndicator.activate(previousIndicatorClientRect);
      },
      deactivateIndicator: function() {
        _this.tabIndicator.deactivate();
      },
      notifyInteracted: function() {
        return _this.emit(MDCTabFoundation.strings.INTERACTED_EVENT, { tabId: _this.id }, true);
      },
      getOffsetLeft: function() {
        return _this.root.offsetLeft;
      },
      getOffsetWidth: function() {
        return _this.root.offsetWidth;
      },
      getContentOffsetLeft: function() {
        return _this.content.offsetLeft;
      },
      getContentOffsetWidth: function() {
        return _this.content.offsetWidth;
      },
      focus: function() {
        return _this.root.focus();
      }
    };
    return new MDCTabFoundation(adapter);
  };
  Object.defineProperty(MDCTab2.prototype, "active", {
    get: function() {
      return this.foundation.isActive();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTab2.prototype, "focusOnActivate", {
    set: function(focusOnActivate) {
      this.foundation.setFocusOnActivate(focusOnActivate);
    },
    enumerable: false,
    configurable: true
  });
  MDCTab2.prototype.activate = function(computeIndicatorClientRect) {
    this.foundation.activate(computeIndicatorClientRect);
  };
  MDCTab2.prototype.deactivate = function() {
    this.foundation.deactivate();
  };
  MDCTab2.prototype.computeIndicatorClientRect = function() {
    return this.tabIndicator.computeContentClientRect();
  };
  MDCTab2.prototype.computeDimensions = function() {
    return this.foundation.computeDimensions();
  };
  MDCTab2.prototype.focus = function() {
    this.root.focus();
  };
  return MDCTab2;
}(MDCComponent);
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
var strings$1 = {
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  HOME_KEY: "Home",
  SPACE_KEY: "Space",
  TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
  TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
  TAB_SELECTOR: ".mdc-tab"
};
var numbers = {
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39,
  END_KEYCODE: 35,
  ENTER_KEYCODE: 13,
  EXTRA_SCROLL_AMOUNT: 20,
  HOME_KEYCODE: 36,
  SPACE_KEYCODE: 32
};
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
var ACCEPTABLE_KEYS = /* @__PURE__ */ new Set();
ACCEPTABLE_KEYS.add(strings$1.ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(strings$1.ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(strings$1.END_KEY);
ACCEPTABLE_KEYS.add(strings$1.HOME_KEY);
ACCEPTABLE_KEYS.add(strings$1.ENTER_KEY);
ACCEPTABLE_KEYS.add(strings$1.SPACE_KEY);
var KEYCODE_MAP = /* @__PURE__ */ new Map();
KEYCODE_MAP.set(numbers.ARROW_LEFT_KEYCODE, strings$1.ARROW_LEFT_KEY);
KEYCODE_MAP.set(numbers.ARROW_RIGHT_KEYCODE, strings$1.ARROW_RIGHT_KEY);
KEYCODE_MAP.set(numbers.END_KEYCODE, strings$1.END_KEY);
KEYCODE_MAP.set(numbers.HOME_KEYCODE, strings$1.HOME_KEY);
KEYCODE_MAP.set(numbers.ENTER_KEYCODE, strings$1.ENTER_KEY);
KEYCODE_MAP.set(numbers.SPACE_KEYCODE, strings$1.SPACE_KEY);
var MDCTabBarFoundation = function(_super) {
  __extends(MDCTabBarFoundation2, _super);
  function MDCTabBarFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCTabBarFoundation2.defaultAdapter), adapter)) || this;
    _this.useAutomaticActivation = false;
    return _this;
  }
  Object.defineProperty(MDCTabBarFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTabBarFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTabBarFoundation2, "defaultAdapter", {
    get: function() {
      return {
        scrollTo: function() {
          return void 0;
        },
        incrementScroll: function() {
          return void 0;
        },
        getScrollPosition: function() {
          return 0;
        },
        getScrollContentWidth: function() {
          return 0;
        },
        getOffsetWidth: function() {
          return 0;
        },
        isRTL: function() {
          return false;
        },
        setActiveTab: function() {
          return void 0;
        },
        activateTabAtIndex: function() {
          return void 0;
        },
        deactivateTabAtIndex: function() {
          return void 0;
        },
        focusTabAtIndex: function() {
          return void 0;
        },
        getTabIndicatorClientRectAtIndex: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        getTabDimensionsAtIndex: function() {
          return { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
        },
        getPreviousActiveTabIndex: function() {
          return -1;
        },
        getFocusedTabIndex: function() {
          return -1;
        },
        getIndexOfTabById: function() {
          return -1;
        },
        getTabListLength: function() {
          return 0;
        },
        notifyTabActivated: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTabBarFoundation2.prototype.setUseAutomaticActivation = function(useAutomaticActivation) {
    this.useAutomaticActivation = useAutomaticActivation;
  };
  MDCTabBarFoundation2.prototype.activateTab = function(index) {
    var previousActiveIndex = this.adapter.getPreviousActiveTabIndex();
    if (!this.indexIsInRange(index) || index === previousActiveIndex) {
      return;
    }
    var previousClientRect;
    if (previousActiveIndex !== -1) {
      this.adapter.deactivateTabAtIndex(previousActiveIndex);
      previousClientRect = this.adapter.getTabIndicatorClientRectAtIndex(previousActiveIndex);
    }
    this.adapter.activateTabAtIndex(index, previousClientRect);
    this.scrollIntoView(index);
    this.adapter.notifyTabActivated(index);
  };
  MDCTabBarFoundation2.prototype.handleKeyDown = function(evt) {
    var key = this.getKeyFromEvent(evt);
    if (key === void 0) {
      return;
    }
    if (!this.isActivationKey(key)) {
      evt.preventDefault();
    }
    if (this.useAutomaticActivation) {
      if (this.isActivationKey(key)) {
        return;
      }
      var index = this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(), key);
      this.adapter.setActiveTab(index);
      this.scrollIntoView(index);
    } else {
      var focusedTabIndex = this.adapter.getFocusedTabIndex();
      if (this.isActivationKey(key)) {
        this.adapter.setActiveTab(focusedTabIndex);
      } else {
        var index = this.determineTargetFromKey(focusedTabIndex, key);
        this.adapter.focusTabAtIndex(index);
        this.scrollIntoView(index);
      }
    }
  };
  MDCTabBarFoundation2.prototype.handleTabInteraction = function(evt) {
    this.adapter.setActiveTab(this.adapter.getIndexOfTabById(evt.detail.tabId));
  };
  MDCTabBarFoundation2.prototype.scrollIntoView = function(index) {
    if (!this.indexIsInRange(index)) {
      return;
    }
    if (index === 0) {
      this.adapter.scrollTo(0);
      return;
    }
    if (index === this.adapter.getTabListLength() - 1) {
      this.adapter.scrollTo(this.adapter.getScrollContentWidth());
      return;
    }
    if (this.isRTL()) {
      this.scrollIntoViewImplRTL(index);
      return;
    }
    this.scrollIntoViewImpl(index);
  };
  MDCTabBarFoundation2.prototype.determineTargetFromKey = function(origin, key) {
    var isRTL = this.isRTL();
    var maxIndex = this.adapter.getTabListLength() - 1;
    var shouldGoToEnd = key === strings$1.END_KEY;
    var shouldDecrement = key === strings$1.ARROW_LEFT_KEY && !isRTL || key === strings$1.ARROW_RIGHT_KEY && isRTL;
    var shouldIncrement = key === strings$1.ARROW_RIGHT_KEY && !isRTL || key === strings$1.ARROW_LEFT_KEY && isRTL;
    var index = origin;
    if (shouldGoToEnd) {
      index = maxIndex;
    } else if (shouldDecrement) {
      index -= 1;
    } else if (shouldIncrement) {
      index += 1;
    } else {
      index = 0;
    }
    if (index < 0) {
      index = maxIndex;
    } else if (index > maxIndex) {
      index = 0;
    }
    return index;
  };
  MDCTabBarFoundation2.prototype.calculateScrollIncrement = function(index, nextIndex, scrollPosition, barWidth) {
    var nextTabDimensions = this.adapter.getTabDimensionsAtIndex(nextIndex);
    var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
    var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
    var leftIncrement = relativeContentRight - numbers.EXTRA_SCROLL_AMOUNT;
    var rightIncrement = relativeContentLeft + numbers.EXTRA_SCROLL_AMOUNT;
    if (nextIndex < index) {
      return Math.min(leftIncrement, 0);
    }
    return Math.max(rightIncrement, 0);
  };
  MDCTabBarFoundation2.prototype.calculateScrollIncrementRTL = function(index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
    var nextTabDimensions = this.adapter.getTabDimensionsAtIndex(nextIndex);
    var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
    var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
    var leftIncrement = relativeContentRight + numbers.EXTRA_SCROLL_AMOUNT;
    var rightIncrement = relativeContentLeft - numbers.EXTRA_SCROLL_AMOUNT;
    if (nextIndex > index) {
      return Math.max(leftIncrement, 0);
    }
    return Math.min(rightIncrement, 0);
  };
  MDCTabBarFoundation2.prototype.findAdjacentTabIndexClosestToEdge = function(index, tabDimensions, scrollPosition, barWidth) {
    var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
    var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
    var relativeRootDelta = relativeRootLeft + relativeRootRight;
    var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
    var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;
    if (leftEdgeIsCloser) {
      return index - 1;
    }
    if (rightEdgeIsCloser) {
      return index + 1;
    }
    return -1;
  };
  MDCTabBarFoundation2.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
    var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
    var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
    var rootDelta = rootLeft + rootRight;
    var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
    var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;
    if (leftEdgeIsCloser) {
      return index + 1;
    }
    if (rightEdgeIsCloser) {
      return index - 1;
    }
    return -1;
  };
  MDCTabBarFoundation2.prototype.getKeyFromEvent = function(evt) {
    if (ACCEPTABLE_KEYS.has(evt.key)) {
      return evt.key;
    }
    return KEYCODE_MAP.get(evt.keyCode);
  };
  MDCTabBarFoundation2.prototype.isActivationKey = function(key) {
    return key === strings$1.SPACE_KEY || key === strings$1.ENTER_KEY;
  };
  MDCTabBarFoundation2.prototype.indexIsInRange = function(index) {
    return index >= 0 && index < this.adapter.getTabListLength();
  };
  MDCTabBarFoundation2.prototype.isRTL = function() {
    return this.adapter.isRTL();
  };
  MDCTabBarFoundation2.prototype.scrollIntoViewImpl = function(index) {
    var scrollPosition = this.adapter.getScrollPosition();
    var barWidth = this.adapter.getOffsetWidth();
    var tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
    var nextIndex = this.findAdjacentTabIndexClosestToEdge(index, tabDimensions, scrollPosition, barWidth);
    if (!this.indexIsInRange(nextIndex)) {
      return;
    }
    var scrollIncrement = this.calculateScrollIncrement(index, nextIndex, scrollPosition, barWidth);
    this.adapter.incrementScroll(scrollIncrement);
  };
  MDCTabBarFoundation2.prototype.scrollIntoViewImplRTL = function(index) {
    var scrollPosition = this.adapter.getScrollPosition();
    var barWidth = this.adapter.getOffsetWidth();
    var tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
    var scrollWidth = this.adapter.getScrollContentWidth();
    var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL(index, tabDimensions, scrollPosition, barWidth, scrollWidth);
    if (!this.indexIsInRange(nextIndex)) {
      return;
    }
    var scrollIncrement = this.calculateScrollIncrementRTL(index, nextIndex, scrollPosition, barWidth, scrollWidth);
    this.adapter.incrementScroll(scrollIncrement);
  };
  return MDCTabBarFoundation2;
}(MDCFoundation);
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
var strings = MDCTabBarFoundation.strings;
var tabIdCounter = 0;
var MDCTabBar = function(_super) {
  __extends(MDCTabBar2, _super);
  function MDCTabBar2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTabBar2.attachTo = function(root) {
    return new MDCTabBar2(root);
  };
  Object.defineProperty(MDCTabBar2.prototype, "focusOnActivate", {
    set: function(focusOnActivate) {
      var e_1, _a;
      try {
        for (var _b = __values(this.tabList), _c = _b.next(); !_c.done; _c = _b.next()) {
          var tab = _c.value;
          tab.focusOnActivate = focusOnActivate;
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTabBar2.prototype, "useAutomaticActivation", {
    set: function(useAutomaticActivation) {
      this.foundation.setUseAutomaticActivation(useAutomaticActivation);
    },
    enumerable: false,
    configurable: true
  });
  MDCTabBar2.prototype.initialize = function(tabFactory, tabScrollerFactory) {
    if (tabFactory === void 0) {
      tabFactory = function(el) {
        return new MDCTab(el);
      };
    }
    if (tabScrollerFactory === void 0) {
      tabScrollerFactory = function(el) {
        return new MDCTabScroller(el);
      };
    }
    this.tabList = this.instantiateTabs(tabFactory);
    this.tabScroller = this.instantiatetabScroller(tabScrollerFactory);
  };
  MDCTabBar2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    this.handleTabInteraction = function(evt) {
      _this.foundation.handleTabInteraction(evt);
    };
    this.handleKeyDown = function(evt) {
      _this.foundation.handleKeyDown(evt);
    };
    this.listen(MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction);
    this.listen("keydown", this.handleKeyDown);
    for (var i = 0; i < this.tabList.length; i++) {
      if (this.tabList[i].active) {
        this.scrollIntoView(i);
        break;
      }
    }
  };
  MDCTabBar2.prototype.destroy = function() {
    var e_2, _a;
    _super.prototype.destroy.call(this);
    this.unlisten(MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction);
    this.unlisten("keydown", this.handleKeyDown);
    try {
      for (var _b = __values(this.tabList), _c = _b.next(); !_c.done; _c = _b.next()) {
        var tab = _c.value;
        tab.destroy();
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    if (this.tabScroller) {
      this.tabScroller.destroy();
    }
  };
  MDCTabBar2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      scrollTo: function(scrollX) {
        _this.tabScroller.scrollTo(scrollX);
      },
      incrementScroll: function(scrollXIncrement) {
        _this.tabScroller.incrementScroll(scrollXIncrement);
      },
      getScrollPosition: function() {
        return _this.tabScroller.getScrollPosition();
      },
      getScrollContentWidth: function() {
        return _this.tabScroller.getScrollContentWidth();
      },
      getOffsetWidth: function() {
        return _this.root.offsetWidth;
      },
      isRTL: function() {
        return window.getComputedStyle(_this.root).getPropertyValue("direction") === "rtl";
      },
      setActiveTab: function(index) {
        _this.foundation.activateTab(index);
      },
      activateTabAtIndex: function(index, clientRect) {
        _this.tabList[index].activate(clientRect);
      },
      deactivateTabAtIndex: function(index) {
        _this.tabList[index].deactivate();
      },
      focusTabAtIndex: function(index) {
        _this.tabList[index].focus();
      },
      getTabIndicatorClientRectAtIndex: function(index) {
        return _this.tabList[index].computeIndicatorClientRect();
      },
      getTabDimensionsAtIndex: function(index) {
        return _this.tabList[index].computeDimensions();
      },
      getPreviousActiveTabIndex: function() {
        for (var i = 0; i < _this.tabList.length; i++) {
          if (_this.tabList[i].active) {
            return i;
          }
        }
        return -1;
      },
      getFocusedTabIndex: function() {
        var tabElements = _this.getTabElements();
        var activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: function(id) {
        for (var i = 0; i < _this.tabList.length; i++) {
          if (_this.tabList[i].id === id) {
            return i;
          }
        }
        return -1;
      },
      getTabListLength: function() {
        return _this.tabList.length;
      },
      notifyTabActivated: function(index) {
        return _this.emit(strings.TAB_ACTIVATED_EVENT, { index }, true);
      }
    };
    return new MDCTabBarFoundation(adapter);
  };
  MDCTabBar2.prototype.activateTab = function(index) {
    this.foundation.activateTab(index);
  };
  MDCTabBar2.prototype.scrollIntoView = function(index) {
    this.foundation.scrollIntoView(index);
  };
  MDCTabBar2.prototype.getTabElements = function() {
    return [].slice.call(this.root.querySelectorAll(strings.TAB_SELECTOR));
  };
  MDCTabBar2.prototype.instantiateTabs = function(tabFactory) {
    return this.getTabElements().map(function(el) {
      el.id = el.id || "mdc-tab-" + ++tabIdCounter;
      return tabFactory(el);
    });
  };
  MDCTabBar2.prototype.instantiatetabScroller = function(tabScrollerFactory) {
    var tabScrollerElement = this.root.querySelector(strings.TAB_SCROLLER_SELECTOR);
    if (tabScrollerElement) {
      return tabScrollerFactory(tabScrollerElement);
    }
    return null;
  };
  return MDCTabBar2;
}(MDCComponent);
const inoTabBarCss = ".mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}";
let TabBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.activeTabChange = createEvent(this, "activeTabChange", 7);
    this.activeTab = 0;
    this.autoFocus = false;
  }
  activeTabChangedWatcher(newTabIndex) {
    if (this.mdcInstance) {
      this.mdcInstance.activateTab(newTabIndex);
    }
  }
  componentDidLoad() {
    this.mdcInstance = new MDCTabBar(this.el.querySelector(".mdc-tab-bar"));
    this.mdcInstance.focusOnActivate = this.autoFocus;
    this.mdcInstance.activateTab(this.activeTab);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mdcInstance) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  async interactionHandler(e) {
    e.stopPropagation();
    const allTabs = await Promise.all(Array.from(this.el.querySelectorAll("ino-tab")));
    const indexOfActivatedTab = allTabs.indexOf(e.detail);
    this.activeTabChange.emit(indexOfActivatedTab);
  }
  render() {
    return h(Host, null, h("div", { class: "mdc-tab-bar", role: "tablist" }, h("div", { class: "mdc-tab-scroller" }, h("div", { class: "mdc-tab-scroller__scroll-area" }, h("div", { class: "mdc-tab-scroller__scroll-content" }, h("slot", null))))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "activeTab": ["activeTabChangedWatcher"]
    };
  }
};
TabBar.style = inoTabBarCss;
export { TabBar as ino_tab_bar };
