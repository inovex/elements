import { r as registerInstance, c as createEvent, h, f as forceUpdate, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import { h as hasSlotContent } from "./component-utils-1c4ae7be.6d485fb9.js";
import { _ as __extends, b as __values, M as MDCComponent, a as __assign, c as MDCFoundation } from "./component-97c8fef9.061cf906.js";
import { a as MDCFloatingLabel, M as MDCLineRipple, b as MDCNotchedOutline } from "./component-c1cba297.52d30aaf.js";
import { c as closest } from "./ponyfill-495ec32d.2f34f215.js";
import { c as cssClasses$4, a as MDCListFoundation, n as numbers$3, b as normalizeKey, K as KEY, M as MDCList } from "./component-5bb46374.0386aca6.js";
import { a as getCorrectPropertyName } from "./util-a712b6e1.6b03bfa6.js";
import { M as MDCRipple, b as MDCRippleFoundation } from "./component-780a5882.fd4d53f9.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
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
var cssClasses$3 = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
};
var strings$4 = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
};
var numbers$2 = {
  TRANSITION_OPEN_DURATION: 120,
  TRANSITION_CLOSE_DURATION: 75,
  MARGIN_TO_EDGE: 32,
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  TOUCH_EVENT_WAIT_MS: 30
};
var CornerBit;
(function(CornerBit2) {
  CornerBit2[CornerBit2["BOTTOM"] = 1] = "BOTTOM";
  CornerBit2[CornerBit2["CENTER"] = 2] = "CENTER";
  CornerBit2[CornerBit2["RIGHT"] = 4] = "RIGHT";
  CornerBit2[CornerBit2["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
var Corner;
(function(Corner2) {
  Corner2[Corner2["TOP_LEFT"] = 0] = "TOP_LEFT";
  Corner2[Corner2["TOP_RIGHT"] = 4] = "TOP_RIGHT";
  Corner2[Corner2["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
  Corner2[Corner2["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
  Corner2[Corner2["TOP_START"] = 8] = "TOP_START";
  Corner2[Corner2["TOP_END"] = 12] = "TOP_END";
  Corner2[Corner2["BOTTOM_START"] = 9] = "BOTTOM_START";
  Corner2[Corner2["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));
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
var MDCMenuSurfaceFoundation = function(_super) {
  __extends(MDCMenuSurfaceFoundation2, _super);
  function MDCMenuSurfaceFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation2.defaultAdapter), adapter)) || this;
    _this.isSurfaceOpen = false;
    _this.isQuickOpen = false;
    _this.isHoistedElement = false;
    _this.isFixedPosition = false;
    _this.isHorizontallyCenteredOnViewport = false;
    _this.maxHeight = 0;
    _this.openAnimationEndTimerId = 0;
    _this.closeAnimationEndTimerId = 0;
    _this.animationRequestId = 0;
    _this.anchorCorner = Corner.TOP_START;
    _this.originCorner = Corner.TOP_START;
    _this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
    _this.position = { x: 0, y: 0 };
    return _this;
  }
  Object.defineProperty(MDCMenuSurfaceFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "strings", {
    get: function() {
      return strings$4;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "numbers", {
    get: function() {
      return numbers$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "Corner", {
    get: function() {
      return Corner;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "defaultAdapter", {
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
        hasAnchor: function() {
          return false;
        },
        isElementInContainer: function() {
          return false;
        },
        isFocused: function() {
          return false;
        },
        isRtl: function() {
          return false;
        },
        getInnerDimensions: function() {
          return { height: 0, width: 0 };
        },
        getAnchorDimensions: function() {
          return null;
        },
        getWindowDimensions: function() {
          return { height: 0, width: 0 };
        },
        getBodyDimensions: function() {
          return { height: 0, width: 0 };
        },
        getWindowScroll: function() {
          return { x: 0, y: 0 };
        },
        setPosition: function() {
          return void 0;
        },
        setMaxHeight: function() {
          return void 0;
        },
        setTransformOrigin: function() {
          return void 0;
        },
        saveFocus: function() {
          return void 0;
        },
        restoreFocus: function() {
          return void 0;
        },
        notifyClose: function() {
          return void 0;
        },
        notifyOpen: function() {
          return void 0;
        },
        notifyClosing: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCMenuSurfaceFoundation2.prototype.init = function() {
    var _a = MDCMenuSurfaceFoundation2.cssClasses, ROOT = _a.ROOT, OPEN = _a.OPEN;
    if (!this.adapter.hasClass(ROOT)) {
      throw new Error(ROOT + " class required in root element.");
    }
    if (this.adapter.hasClass(OPEN)) {
      this.isSurfaceOpen = true;
    }
  };
  MDCMenuSurfaceFoundation2.prototype.destroy = function() {
    clearTimeout(this.openAnimationEndTimerId);
    clearTimeout(this.closeAnimationEndTimerId);
    cancelAnimationFrame(this.animationRequestId);
  };
  MDCMenuSurfaceFoundation2.prototype.setAnchorCorner = function(corner) {
    this.anchorCorner = corner;
  };
  MDCMenuSurfaceFoundation2.prototype.flipCornerHorizontally = function() {
    this.originCorner = this.originCorner ^ CornerBit.RIGHT;
  };
  MDCMenuSurfaceFoundation2.prototype.setAnchorMargin = function(margin) {
    this.anchorMargin.top = margin.top || 0;
    this.anchorMargin.right = margin.right || 0;
    this.anchorMargin.bottom = margin.bottom || 0;
    this.anchorMargin.left = margin.left || 0;
  };
  MDCMenuSurfaceFoundation2.prototype.setIsHoisted = function(isHoisted) {
    this.isHoistedElement = isHoisted;
  };
  MDCMenuSurfaceFoundation2.prototype.setFixedPosition = function(isFixedPosition) {
    this.isFixedPosition = isFixedPosition;
  };
  MDCMenuSurfaceFoundation2.prototype.isFixed = function() {
    return this.isFixedPosition;
  };
  MDCMenuSurfaceFoundation2.prototype.setAbsolutePosition = function(x, y) {
    this.position.x = this.isFinite(x) ? x : 0;
    this.position.y = this.isFinite(y) ? y : 0;
  };
  MDCMenuSurfaceFoundation2.prototype.setIsHorizontallyCenteredOnViewport = function(isCentered) {
    this.isHorizontallyCenteredOnViewport = isCentered;
  };
  MDCMenuSurfaceFoundation2.prototype.setQuickOpen = function(quickOpen) {
    this.isQuickOpen = quickOpen;
  };
  MDCMenuSurfaceFoundation2.prototype.setMaxHeight = function(maxHeight) {
    this.maxHeight = maxHeight;
  };
  MDCMenuSurfaceFoundation2.prototype.isOpen = function() {
    return this.isSurfaceOpen;
  };
  MDCMenuSurfaceFoundation2.prototype.open = function() {
    var _this = this;
    if (this.isSurfaceOpen) {
      return;
    }
    this.adapter.saveFocus();
    if (this.isQuickOpen) {
      this.isSurfaceOpen = true;
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
      this.dimensions = this.adapter.getInnerDimensions();
      this.autoposition();
      this.adapter.notifyOpen();
    } else {
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
      this.animationRequestId = requestAnimationFrame(function() {
        _this.dimensions = _this.adapter.getInnerDimensions();
        _this.autoposition();
        _this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        _this.openAnimationEndTimerId = setTimeout(function() {
          _this.openAnimationEndTimerId = 0;
          _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
          _this.adapter.notifyOpen();
        }, numbers$2.TRANSITION_OPEN_DURATION);
      });
      this.isSurfaceOpen = true;
    }
  };
  MDCMenuSurfaceFoundation2.prototype.close = function(skipRestoreFocus) {
    var _this = this;
    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }
    if (!this.isSurfaceOpen) {
      return;
    }
    this.adapter.notifyClosing();
    if (this.isQuickOpen) {
      this.isSurfaceOpen = false;
      if (!skipRestoreFocus) {
        this.maybeRestoreFocus();
      }
      this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
      this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
      this.adapter.notifyClose();
      return;
    }
    this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
    requestAnimationFrame(function() {
      _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
      _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
      _this.closeAnimationEndTimerId = setTimeout(function() {
        _this.closeAnimationEndTimerId = 0;
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
        _this.adapter.notifyClose();
      }, numbers$2.TRANSITION_CLOSE_DURATION);
    });
    this.isSurfaceOpen = false;
    if (!skipRestoreFocus) {
      this.maybeRestoreFocus();
    }
  };
  MDCMenuSurfaceFoundation2.prototype.handleBodyClick = function(evt) {
    var el = evt.target;
    if (this.adapter.isElementInContainer(el)) {
      return;
    }
    this.close();
  };
  MDCMenuSurfaceFoundation2.prototype.handleKeydown = function(evt) {
    var keyCode = evt.keyCode, key = evt.key;
    var isEscape = key === "Escape" || keyCode === 27;
    if (isEscape) {
      this.close();
    }
  };
  MDCMenuSurfaceFoundation2.prototype.autoposition = function() {
    var _a;
    this.measurements = this.getAutoLayoutmeasurements();
    var corner = this.getoriginCorner();
    var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
    var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? "bottom" : "top";
    var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? "right" : "left";
    var horizontalOffset = this.getHorizontalOriginOffset(corner);
    var verticalOffset = this.getVerticalOriginOffset(corner);
    var _b = this.measurements, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
    var position = (_a = {}, _a[horizontalAlignment] = horizontalOffset, _a[verticalAlignment] = verticalOffset, _a);
    if (anchorSize.width / surfaceSize.width > numbers$2.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
      horizontalAlignment = "center";
    }
    if (this.isHoistedElement || this.isFixedPosition) {
      this.adjustPositionForHoistedElement(position);
    }
    this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
    this.adapter.setPosition(position);
    this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + "px" : "");
    if (!this.hasBit(corner, CornerBit.BOTTOM)) {
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
    }
  };
  MDCMenuSurfaceFoundation2.prototype.getAutoLayoutmeasurements = function() {
    var anchorRect = this.adapter.getAnchorDimensions();
    var bodySize = this.adapter.getBodyDimensions();
    var viewportSize = this.adapter.getWindowDimensions();
    var windowScroll = this.adapter.getWindowScroll();
    if (!anchorRect) {
      anchorRect = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      };
    }
    return {
      anchorSize: anchorRect,
      bodySize,
      surfaceSize: this.dimensions,
      viewportDistance: {
        top: anchorRect.top,
        right: viewportSize.width - anchorRect.right,
        bottom: viewportSize.height - anchorRect.bottom,
        left: anchorRect.left
      },
      viewportSize,
      windowScroll
    };
  };
  MDCMenuSurfaceFoundation2.prototype.getoriginCorner = function() {
    var corner = this.originCorner;
    var _a = this.measurements, viewportDistance = _a.viewportDistance, anchorSize = _a.anchorSize, surfaceSize = _a.surfaceSize;
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
    var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var availableTop;
    var availableBottom;
    if (isAnchoredToBottom) {
      availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
      availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
    } else {
      availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
      availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE + anchorSize.height - this.anchorMargin.top;
    }
    var isAvailableBottom = availableBottom - surfaceSize.height > 0;
    if (!isAvailableBottom && availableTop > availableBottom) {
      corner = this.setBit(corner, CornerBit.BOTTOM);
    }
    var isRtl = this.adapter.isRtl();
    var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
    var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) || this.hasBit(corner, CornerBit.RIGHT);
    var isAnchoredToRight = false;
    if (isRtl && isFlipRtl) {
      isAnchoredToRight = !hasRightBit;
    } else {
      isAnchoredToRight = hasRightBit;
    }
    var availableLeft;
    var availableRight;
    if (isAnchoredToRight) {
      availableLeft = viewportDistance.left + anchorSize.width + this.anchorMargin.right;
      availableRight = viewportDistance.right - this.anchorMargin.right;
    } else {
      availableLeft = viewportDistance.left + this.anchorMargin.left;
      availableRight = viewportDistance.right + anchorSize.width - this.anchorMargin.left;
    }
    var isAvailableLeft = availableLeft - surfaceSize.width > 0;
    var isAvailableRight = availableRight - surfaceSize.width > 0;
    var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) && this.hasBit(corner, CornerBit.RIGHT);
    if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl || !isAvailableLeft && isOriginCornerAlignedToEnd) {
      corner = this.unsetBit(corner, CornerBit.RIGHT);
    } else if (isAvailableLeft && isAnchoredToRight && isRtl || isAvailableLeft && !isAnchoredToRight && hasRightBit || !isAvailableRight && availableLeft >= availableRight) {
      corner = this.setBit(corner, CornerBit.RIGHT);
    }
    return corner;
  };
  MDCMenuSurfaceFoundation2.prototype.getMenuSurfaceMaxHeight = function(corner) {
    if (this.maxHeight > 0) {
      return this.maxHeight;
    }
    var viewportDistance = this.measurements.viewportDistance;
    var maxHeight = 0;
    var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
    var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
    if (isBottomAligned) {
      maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
      if (!isBottomAnchored) {
        maxHeight += this.measurements.anchorSize.height;
      }
    } else {
      maxHeight = viewportDistance.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - MARGIN_TO_EDGE;
      if (isBottomAnchored) {
        maxHeight -= this.measurements.anchorSize.height;
      }
    }
    return maxHeight;
  };
  MDCMenuSurfaceFoundation2.prototype.getHorizontalOriginOffset = function(corner) {
    var anchorSize = this.measurements.anchorSize;
    var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
    var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
    if (isRightAligned) {
      var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.left : this.anchorMargin.right;
      if (this.isHoistedElement || this.isFixedPosition) {
        return rightOffset - (this.measurements.viewportSize.width - this.measurements.bodySize.width);
      }
      return rightOffset;
    }
    return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right : this.anchorMargin.left;
  };
  MDCMenuSurfaceFoundation2.prototype.getVerticalOriginOffset = function(corner) {
    var anchorSize = this.measurements.anchorSize;
    var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
    var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var y = 0;
    if (isBottomAligned) {
      y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top : -this.anchorMargin.bottom;
    } else {
      y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin.bottom : this.anchorMargin.top;
    }
    return y;
  };
  MDCMenuSurfaceFoundation2.prototype.adjustPositionForHoistedElement = function(position) {
    var e_1, _a;
    var _b = this.measurements, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance, surfaceSize = _b.surfaceSize, viewportSize = _b.viewportSize;
    var props = Object.keys(position);
    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        var value = position[prop] || 0;
        if (this.isHorizontallyCenteredOnViewport && (prop === "left" || prop === "right")) {
          position[prop] = (viewportSize.width - surfaceSize.width) / 2;
          continue;
        }
        value += viewportDistance[prop];
        if (!this.isFixedPosition) {
          if (prop === "top") {
            value += windowScroll.y;
          } else if (prop === "bottom") {
            value -= windowScroll.y;
          } else if (prop === "left") {
            value += windowScroll.x;
          } else {
            value -= windowScroll.x;
          }
        }
        position[prop] = value;
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1.return))
          _a.call(props_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  MDCMenuSurfaceFoundation2.prototype.maybeRestoreFocus = function() {
    var _this = this;
    var isRootFocused = this.adapter.isFocused();
    var childHasFocus = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
    if (isRootFocused || childHasFocus) {
      setTimeout(function() {
        _this.adapter.restoreFocus();
      }, numbers$2.TOUCH_EVENT_WAIT_MS);
    }
  };
  MDCMenuSurfaceFoundation2.prototype.hasBit = function(corner, bit) {
    return Boolean(corner & bit);
  };
  MDCMenuSurfaceFoundation2.prototype.setBit = function(corner, bit) {
    return corner | bit;
  };
  MDCMenuSurfaceFoundation2.prototype.unsetBit = function(corner, bit) {
    return corner ^ bit;
  };
  MDCMenuSurfaceFoundation2.prototype.isFinite = function(num) {
    return typeof num === "number" && isFinite(num);
  };
  return MDCMenuSurfaceFoundation2;
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
var MDCMenuSurface = function(_super) {
  __extends(MDCMenuSurface2, _super);
  function MDCMenuSurface2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCMenuSurface2.attachTo = function(root) {
    return new MDCMenuSurface2(root);
  };
  MDCMenuSurface2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    var parentEl = this.root.parentElement;
    this.anchorElement = parentEl && parentEl.classList.contains(cssClasses$3.ANCHOR) ? parentEl : null;
    if (this.root.classList.contains(cssClasses$3.FIXED)) {
      this.setFixedPosition(true);
    }
    this.handleKeydown = function(event) {
      _this.foundation.handleKeydown(event);
    };
    this.handleBodyClick = function(event) {
      _this.foundation.handleBodyClick(event);
    };
    this.registerBodyClickListener = function() {
      document.body.addEventListener("click", _this.handleBodyClick, { capture: true });
    };
    this.deregisterBodyClickListener = function() {
      document.body.removeEventListener("click", _this.handleBodyClick, { capture: true });
    };
    this.listen("keydown", this.handleKeydown);
    this.listen(strings$4.OPENED_EVENT, this.registerBodyClickListener);
    this.listen(strings$4.CLOSED_EVENT, this.deregisterBodyClickListener);
  };
  MDCMenuSurface2.prototype.destroy = function() {
    this.unlisten("keydown", this.handleKeydown);
    this.unlisten(strings$4.OPENED_EVENT, this.registerBodyClickListener);
    this.unlisten(strings$4.CLOSED_EVENT, this.deregisterBodyClickListener);
    _super.prototype.destroy.call(this);
  };
  MDCMenuSurface2.prototype.isOpen = function() {
    return this.foundation.isOpen();
  };
  MDCMenuSurface2.prototype.open = function() {
    this.foundation.open();
  };
  MDCMenuSurface2.prototype.close = function(skipRestoreFocus) {
    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }
    this.foundation.close(skipRestoreFocus);
  };
  Object.defineProperty(MDCMenuSurface2.prototype, "quickOpen", {
    set: function(quickOpen) {
      this.foundation.setQuickOpen(quickOpen);
    },
    enumerable: false,
    configurable: true
  });
  MDCMenuSurface2.prototype.setIsHoisted = function(isHoisted) {
    this.foundation.setIsHoisted(isHoisted);
  };
  MDCMenuSurface2.prototype.setMenuSurfaceAnchorElement = function(element) {
    this.anchorElement = element;
  };
  MDCMenuSurface2.prototype.setFixedPosition = function(isFixed) {
    if (isFixed) {
      this.root.classList.add(cssClasses$3.FIXED);
    } else {
      this.root.classList.remove(cssClasses$3.FIXED);
    }
    this.foundation.setFixedPosition(isFixed);
  };
  MDCMenuSurface2.prototype.setAbsolutePosition = function(x, y) {
    this.foundation.setAbsolutePosition(x, y);
    this.setIsHoisted(true);
  };
  MDCMenuSurface2.prototype.setAnchorCorner = function(corner) {
    this.foundation.setAnchorCorner(corner);
  };
  MDCMenuSurface2.prototype.setAnchorMargin = function(margin) {
    this.foundation.setAnchorMargin(margin);
  };
  MDCMenuSurface2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClass: function(className) {
        return _this.root.classList.add(className);
      },
      removeClass: function(className) {
        return _this.root.classList.remove(className);
      },
      hasClass: function(className) {
        return _this.root.classList.contains(className);
      },
      hasAnchor: function() {
        return !!_this.anchorElement;
      },
      notifyClose: function() {
        return _this.emit(MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});
      },
      notifyClosing: function() {
        _this.emit(MDCMenuSurfaceFoundation.strings.CLOSING_EVENT, {});
      },
      notifyOpen: function() {
        return _this.emit(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});
      },
      isElementInContainer: function(el) {
        return _this.root.contains(el);
      },
      isRtl: function() {
        return getComputedStyle(_this.root).getPropertyValue("direction") === "rtl";
      },
      setTransformOrigin: function(origin) {
        var propertyName = getCorrectPropertyName(window, "transform") + "-origin";
        _this.root.style.setProperty(propertyName, origin);
      },
      isFocused: function() {
        return document.activeElement === _this.root;
      },
      saveFocus: function() {
        _this.previousFocus = document.activeElement;
      },
      restoreFocus: function() {
        if (_this.root.contains(document.activeElement)) {
          if (_this.previousFocus && _this.previousFocus.focus) {
            _this.previousFocus.focus();
          }
        }
      },
      getInnerDimensions: function() {
        return {
          width: _this.root.offsetWidth,
          height: _this.root.offsetHeight
        };
      },
      getAnchorDimensions: function() {
        return _this.anchorElement ? _this.anchorElement.getBoundingClientRect() : null;
      },
      getWindowDimensions: function() {
        return { width: window.innerWidth, height: window.innerHeight };
      },
      getBodyDimensions: function() {
        return { width: document.body.clientWidth, height: document.body.clientHeight };
      },
      getWindowScroll: function() {
        return { x: window.pageXOffset, y: window.pageYOffset };
      },
      setPosition: function(position) {
        var rootHTML = _this.root;
        rootHTML.style.left = "left" in position ? position.left + "px" : "";
        rootHTML.style.right = "right" in position ? position.right + "px" : "";
        rootHTML.style.top = "top" in position ? position.top + "px" : "";
        rootHTML.style.bottom = "bottom" in position ? position.bottom + "px" : "";
      },
      setMaxHeight: function(height) {
        _this.root.style.maxHeight = height;
      }
    };
    return new MDCMenuSurfaceFoundation(adapter);
  };
  return MDCMenuSurface2;
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
var cssClasses$2 = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
};
var strings$3 = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
};
var numbers$1 = {
  FOCUS_ROOT_INDEX: -1
};
var DefaultFocusState;
(function(DefaultFocusState2) {
  DefaultFocusState2[DefaultFocusState2["NONE"] = 0] = "NONE";
  DefaultFocusState2[DefaultFocusState2["LIST_ROOT"] = 1] = "LIST_ROOT";
  DefaultFocusState2[DefaultFocusState2["FIRST_ITEM"] = 2] = "FIRST_ITEM";
  DefaultFocusState2[DefaultFocusState2["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));
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
var MDCMenuFoundation = function(_super) {
  __extends(MDCMenuFoundation2, _super);
  function MDCMenuFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation2.defaultAdapter), adapter)) || this;
    _this.closeAnimationEndTimerId = 0;
    _this.defaultFocusState = DefaultFocusState.LIST_ROOT;
    _this.selectedIndex = -1;
    return _this;
  }
  Object.defineProperty(MDCMenuFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation2, "strings", {
    get: function() {
      return strings$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation2, "numbers", {
    get: function() {
      return numbers$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClassToElementAtIndex: function() {
          return void 0;
        },
        removeClassFromElementAtIndex: function() {
          return void 0;
        },
        addAttributeToElementAtIndex: function() {
          return void 0;
        },
        removeAttributeFromElementAtIndex: function() {
          return void 0;
        },
        getAttributeFromElementAtIndex: function() {
          return null;
        },
        elementContainsClass: function() {
          return false;
        },
        closeSurface: function() {
          return void 0;
        },
        getElementIndex: function() {
          return -1;
        },
        notifySelected: function() {
          return void 0;
        },
        getMenuItemCount: function() {
          return 0;
        },
        focusItemAtIndex: function() {
          return void 0;
        },
        focusListRoot: function() {
          return void 0;
        },
        getSelectedSiblingOfItemAtIndex: function() {
          return -1;
        },
        isSelectableItemAtIndex: function() {
          return false;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCMenuFoundation2.prototype.destroy = function() {
    if (this.closeAnimationEndTimerId) {
      clearTimeout(this.closeAnimationEndTimerId);
    }
    this.adapter.closeSurface();
  };
  MDCMenuFoundation2.prototype.handleKeydown = function(evt) {
    var key = evt.key, keyCode = evt.keyCode;
    var isTab = key === "Tab" || keyCode === 9;
    if (isTab) {
      this.adapter.closeSurface(true);
    }
  };
  MDCMenuFoundation2.prototype.handleItemAction = function(listItem) {
    var _this = this;
    var index = this.adapter.getElementIndex(listItem);
    if (index < 0) {
      return;
    }
    this.adapter.notifySelected({ index });
    var skipRestoreFocus = this.adapter.getAttributeFromElementAtIndex(index, strings$3.SKIP_RESTORE_FOCUS) === "true";
    this.adapter.closeSurface(skipRestoreFocus);
    this.closeAnimationEndTimerId = setTimeout(function() {
      var recomputedIndex = _this.adapter.getElementIndex(listItem);
      if (recomputedIndex >= 0 && _this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
        _this.setSelectedIndex(recomputedIndex);
      }
    }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
  };
  MDCMenuFoundation2.prototype.handleMenuSurfaceOpened = function() {
    switch (this.defaultFocusState) {
      case DefaultFocusState.FIRST_ITEM:
        this.adapter.focusItemAtIndex(0);
        break;
      case DefaultFocusState.LAST_ITEM:
        this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
        break;
      case DefaultFocusState.NONE:
        break;
      default:
        this.adapter.focusListRoot();
        break;
    }
  };
  MDCMenuFoundation2.prototype.setDefaultFocusState = function(focusState) {
    this.defaultFocusState = focusState;
  };
  MDCMenuFoundation2.prototype.getSelectedIndex = function() {
    return this.selectedIndex;
  };
  MDCMenuFoundation2.prototype.setSelectedIndex = function(index) {
    this.validatedIndex(index);
    if (!this.adapter.isSelectableItemAtIndex(index)) {
      throw new Error("MDCMenuFoundation: No selection group at specified index.");
    }
    var prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
    if (prevSelectedIndex >= 0) {
      this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$3.ARIA_CHECKED_ATTR);
      this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$2.MENU_SELECTED_LIST_ITEM);
    }
    this.adapter.addClassToElementAtIndex(index, cssClasses$2.MENU_SELECTED_LIST_ITEM);
    this.adapter.addAttributeToElementAtIndex(index, strings$3.ARIA_CHECKED_ATTR, "true");
    this.selectedIndex = index;
  };
  MDCMenuFoundation2.prototype.setEnabled = function(index, isEnabled) {
    this.validatedIndex(index);
    if (isEnabled) {
      this.adapter.removeClassFromElementAtIndex(index, cssClasses$4.LIST_ITEM_DISABLED_CLASS);
      this.adapter.addAttributeToElementAtIndex(index, strings$3.ARIA_DISABLED_ATTR, "false");
    } else {
      this.adapter.addClassToElementAtIndex(index, cssClasses$4.LIST_ITEM_DISABLED_CLASS);
      this.adapter.addAttributeToElementAtIndex(index, strings$3.ARIA_DISABLED_ATTR, "true");
    }
  };
  MDCMenuFoundation2.prototype.validatedIndex = function(index) {
    var menuSize = this.adapter.getMenuItemCount();
    var isIndexInRange = index >= 0 && index < menuSize;
    if (!isIndexInRange) {
      throw new Error("MDCMenuFoundation: No list item at specified index.");
    }
  };
  return MDCMenuFoundation2;
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
var MDCMenu = function(_super) {
  __extends(MDCMenu2, _super);
  function MDCMenu2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCMenu2.attachTo = function(root) {
    return new MDCMenu2(root);
  };
  MDCMenu2.prototype.initialize = function(menuSurfaceFactory, listFactory) {
    if (menuSurfaceFactory === void 0) {
      menuSurfaceFactory = function(el) {
        return new MDCMenuSurface(el);
      };
    }
    if (listFactory === void 0) {
      listFactory = function(el) {
        return new MDCList(el);
      };
    }
    this.menuSurfaceFactory = menuSurfaceFactory;
    this.listFactory = listFactory;
  };
  MDCMenu2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    this.menuSurface = this.menuSurfaceFactory(this.root);
    var list = this.root.querySelector(strings$3.LIST_SELECTOR);
    if (list) {
      this.list = this.listFactory(list);
      this.list.wrapFocus = true;
    } else {
      this.list = null;
    }
    this.handleKeydown = function(evt) {
      _this.foundation.handleKeydown(evt);
    };
    this.handleItemAction = function(evt) {
      _this.foundation.handleItemAction(_this.items[evt.detail.index]);
    };
    this.handleMenuSurfaceOpened = function() {
      _this.foundation.handleMenuSurfaceOpened();
    };
    this.menuSurface.listen(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened);
    this.listen("keydown", this.handleKeydown);
    this.listen(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction);
  };
  MDCMenu2.prototype.destroy = function() {
    if (this.list) {
      this.list.destroy();
    }
    this.menuSurface.destroy();
    this.menuSurface.unlisten(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened);
    this.unlisten("keydown", this.handleKeydown);
    this.unlisten(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction);
    _super.prototype.destroy.call(this);
  };
  Object.defineProperty(MDCMenu2.prototype, "open", {
    get: function() {
      return this.menuSurface.isOpen();
    },
    set: function(value) {
      if (value) {
        this.menuSurface.open();
      } else {
        this.menuSurface.close();
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenu2.prototype, "wrapFocus", {
    get: function() {
      return this.list ? this.list.wrapFocus : false;
    },
    set: function(value) {
      if (this.list) {
        this.list.wrapFocus = value;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenu2.prototype, "hasTypeahead", {
    set: function(value) {
      if (this.list) {
        this.list.hasTypeahead = value;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenu2.prototype, "typeaheadInProgress", {
    get: function() {
      return this.list ? this.list.typeaheadInProgress : false;
    },
    enumerable: false,
    configurable: true
  });
  MDCMenu2.prototype.typeaheadMatchItem = function(nextChar, startingIndex) {
    if (this.list) {
      return this.list.typeaheadMatchItem(nextChar, startingIndex);
    }
    return -1;
  };
  MDCMenu2.prototype.layout = function() {
    if (this.list) {
      this.list.layout();
    }
  };
  Object.defineProperty(MDCMenu2.prototype, "items", {
    get: function() {
      return this.list ? this.list.listElements : [];
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenu2.prototype, "singleSelection", {
    set: function(singleSelection) {
      if (this.list) {
        this.list.singleSelection = singleSelection;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenu2.prototype, "selectedIndex", {
    get: function() {
      return this.list ? this.list.selectedIndex : numbers$3.UNSET_INDEX;
    },
    set: function(index) {
      if (this.list) {
        this.list.selectedIndex = index;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenu2.prototype, "quickOpen", {
    set: function(quickOpen) {
      this.menuSurface.quickOpen = quickOpen;
    },
    enumerable: false,
    configurable: true
  });
  MDCMenu2.prototype.setDefaultFocusState = function(focusState) {
    this.foundation.setDefaultFocusState(focusState);
  };
  MDCMenu2.prototype.setAnchorCorner = function(corner) {
    this.menuSurface.setAnchorCorner(corner);
  };
  MDCMenu2.prototype.setAnchorMargin = function(margin) {
    this.menuSurface.setAnchorMargin(margin);
  };
  MDCMenu2.prototype.setSelectedIndex = function(index) {
    this.foundation.setSelectedIndex(index);
  };
  MDCMenu2.prototype.setEnabled = function(index, isEnabled) {
    this.foundation.setEnabled(index, isEnabled);
  };
  MDCMenu2.prototype.getOptionByIndex = function(index) {
    var items = this.items;
    if (index < items.length) {
      return this.items[index];
    } else {
      return null;
    }
  };
  MDCMenu2.prototype.getPrimaryTextAtIndex = function(index) {
    var item = this.getOptionByIndex(index);
    if (item && this.list) {
      return this.list.getPrimaryText(item) || "";
    }
    return "";
  };
  MDCMenu2.prototype.setFixedPosition = function(isFixed) {
    this.menuSurface.setFixedPosition(isFixed);
  };
  MDCMenu2.prototype.setIsHoisted = function(isHoisted) {
    this.menuSurface.setIsHoisted(isHoisted);
  };
  MDCMenu2.prototype.setAbsolutePosition = function(x, y) {
    this.menuSurface.setAbsolutePosition(x, y);
  };
  MDCMenu2.prototype.setAnchorElement = function(element) {
    this.menuSurface.anchorElement = element;
  };
  MDCMenu2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClassToElementAtIndex: function(index, className) {
        var list = _this.items;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: function(index, className) {
        var list = _this.items;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: function(index, attr, value) {
        var list = _this.items;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: function(index, attr) {
        var list = _this.items;
        list[index].removeAttribute(attr);
      },
      getAttributeFromElementAtIndex: function(index, attr) {
        var list = _this.items;
        return list[index].getAttribute(attr);
      },
      elementContainsClass: function(element, className) {
        return element.classList.contains(className);
      },
      closeSurface: function(skipRestoreFocus) {
        _this.menuSurface.close(skipRestoreFocus);
      },
      getElementIndex: function(element) {
        return _this.items.indexOf(element);
      },
      notifySelected: function(evtData) {
        _this.emit(strings$3.SELECTED_EVENT, {
          index: evtData.index,
          item: _this.items[evtData.index]
        });
      },
      getMenuItemCount: function() {
        return _this.items.length;
      },
      focusItemAtIndex: function(index) {
        _this.items[index].focus();
      },
      focusListRoot: function() {
        _this.root.querySelector(strings$3.LIST_SELECTOR).focus();
      },
      isSelectableItemAtIndex: function(index) {
        return !!closest(_this.items[index], "." + cssClasses$2.MENU_SELECTION_GROUP);
      },
      getSelectedSiblingOfItemAtIndex: function(index) {
        var selectionGroupEl = closest(_this.items[index], "." + cssClasses$2.MENU_SELECTION_GROUP);
        var selectedItemEl = selectionGroupEl.querySelector("." + cssClasses$2.MENU_SELECTED_LIST_ITEM);
        return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
      }
    };
    return new MDCMenuFoundation(adapter);
  };
  return MDCMenu2;
}(MDCComponent);
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
var cssClasses$1 = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
};
var strings$2 = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
};
var numbers = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};
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
var MDCSelectFoundation = function(_super) {
  __extends(MDCSelectFoundation2, _super);
  function MDCSelectFoundation2(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }
    var _this = _super.call(this, __assign(__assign({}, MDCSelectFoundation2.defaultAdapter), adapter)) || this;
    _this.disabled = false;
    _this.isMenuOpen = false;
    _this.useDefaultValidation = true;
    _this.customValidity = true;
    _this.lastSelectedIndex = numbers.UNSET_INDEX;
    _this.clickDebounceTimeout = 0;
    _this.recentlyClicked = false;
    _this.leadingIcon = foundationMap.leadingIcon;
    _this.helperText = foundationMap.helperText;
    return _this;
  }
  Object.defineProperty(MDCSelectFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation2, "strings", {
    get: function() {
      return strings$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation2, "defaultAdapter", {
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
        activateBottomLine: function() {
          return void 0;
        },
        deactivateBottomLine: function() {
          return void 0;
        },
        getSelectedIndex: function() {
          return -1;
        },
        setSelectedIndex: function() {
          return void 0;
        },
        hasLabel: function() {
          return false;
        },
        floatLabel: function() {
          return void 0;
        },
        getLabelWidth: function() {
          return 0;
        },
        setLabelRequired: function() {
          return void 0;
        },
        hasOutline: function() {
          return false;
        },
        notchOutline: function() {
          return void 0;
        },
        closeOutline: function() {
          return void 0;
        },
        setRippleCenter: function() {
          return void 0;
        },
        notifyChange: function() {
          return void 0;
        },
        setSelectedText: function() {
          return void 0;
        },
        isSelectAnchorFocused: function() {
          return false;
        },
        getSelectAnchorAttr: function() {
          return "";
        },
        setSelectAnchorAttr: function() {
          return void 0;
        },
        removeSelectAnchorAttr: function() {
          return void 0;
        },
        addMenuClass: function() {
          return void 0;
        },
        removeMenuClass: function() {
          return void 0;
        },
        openMenu: function() {
          return void 0;
        },
        closeMenu: function() {
          return void 0;
        },
        getAnchorElement: function() {
          return null;
        },
        setMenuAnchorElement: function() {
          return void 0;
        },
        setMenuAnchorCorner: function() {
          return void 0;
        },
        setMenuWrapFocus: function() {
          return void 0;
        },
        focusMenuItemAtIndex: function() {
          return void 0;
        },
        getMenuItemCount: function() {
          return 0;
        },
        getMenuItemValues: function() {
          return [];
        },
        getMenuItemTextAtIndex: function() {
          return "";
        },
        isTypeaheadInProgress: function() {
          return false;
        },
        typeaheadMatchItem: function() {
          return -1;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCSelectFoundation2.prototype.getSelectedIndex = function() {
    return this.adapter.getSelectedIndex();
  };
  MDCSelectFoundation2.prototype.setSelectedIndex = function(index, closeMenu, skipNotify) {
    if (closeMenu === void 0) {
      closeMenu = false;
    }
    if (skipNotify === void 0) {
      skipNotify = false;
    }
    if (index >= this.adapter.getMenuItemCount()) {
      return;
    }
    if (index === numbers.UNSET_INDEX) {
      this.adapter.setSelectedText("");
    } else {
      this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim());
    }
    this.adapter.setSelectedIndex(index);
    if (closeMenu) {
      this.adapter.closeMenu();
    }
    if (!skipNotify && this.lastSelectedIndex !== index) {
      this.handleChange();
    }
    this.lastSelectedIndex = index;
  };
  MDCSelectFoundation2.prototype.setValue = function(value, skipNotify) {
    if (skipNotify === void 0) {
      skipNotify = false;
    }
    var index = this.adapter.getMenuItemValues().indexOf(value);
    this.setSelectedIndex(index, false, skipNotify);
  };
  MDCSelectFoundation2.prototype.getValue = function() {
    var index = this.adapter.getSelectedIndex();
    var menuItemValues = this.adapter.getMenuItemValues();
    return index !== numbers.UNSET_INDEX ? menuItemValues[index] : "";
  };
  MDCSelectFoundation2.prototype.getDisabled = function() {
    return this.disabled;
  };
  MDCSelectFoundation2.prototype.setDisabled = function(isDisabled) {
    this.disabled = isDisabled;
    if (this.disabled) {
      this.adapter.addClass(cssClasses$1.DISABLED);
      this.adapter.closeMenu();
    } else {
      this.adapter.removeClass(cssClasses$1.DISABLED);
    }
    if (this.leadingIcon) {
      this.leadingIcon.setDisabled(this.disabled);
    }
    if (this.disabled) {
      this.adapter.removeSelectAnchorAttr("tabindex");
    } else {
      this.adapter.setSelectAnchorAttr("tabindex", "0");
    }
    this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
  };
  MDCSelectFoundation2.prototype.openMenu = function() {
    this.adapter.addClass(cssClasses$1.ACTIVATED);
    this.adapter.openMenu();
    this.isMenuOpen = true;
    this.adapter.setSelectAnchorAttr("aria-expanded", "true");
  };
  MDCSelectFoundation2.prototype.setHelperTextContent = function(content) {
    if (this.helperText) {
      this.helperText.setContent(content);
    }
  };
  MDCSelectFoundation2.prototype.layout = function() {
    if (this.adapter.hasLabel()) {
      var optionHasValue = this.getValue().length > 0;
      var isFocused = this.adapter.hasClass(cssClasses$1.FOCUSED);
      var shouldFloatAndNotch = optionHasValue || isFocused;
      var isRequired = this.adapter.hasClass(cssClasses$1.REQUIRED);
      this.notchOutline(shouldFloatAndNotch);
      this.adapter.floatLabel(shouldFloatAndNotch);
      this.adapter.setLabelRequired(isRequired);
    }
  };
  MDCSelectFoundation2.prototype.layoutOptions = function() {
    var menuItemValues = this.adapter.getMenuItemValues();
    var selectedIndex = menuItemValues.indexOf(this.getValue());
    this.setSelectedIndex(selectedIndex, false, true);
  };
  MDCSelectFoundation2.prototype.handleMenuOpened = function() {
    if (this.adapter.getMenuItemValues().length === 0) {
      return;
    }
    var selectedIndex = this.getSelectedIndex();
    var focusItemIndex = selectedIndex >= 0 ? selectedIndex : 0;
    this.adapter.focusMenuItemAtIndex(focusItemIndex);
  };
  MDCSelectFoundation2.prototype.handleMenuClosing = function() {
    this.adapter.setSelectAnchorAttr("aria-expanded", "false");
  };
  MDCSelectFoundation2.prototype.handleMenuClosed = function() {
    this.adapter.removeClass(cssClasses$1.ACTIVATED);
    this.isMenuOpen = false;
    if (!this.adapter.isSelectAnchorFocused()) {
      this.blur();
    }
  };
  MDCSelectFoundation2.prototype.handleChange = function() {
    this.layout();
    this.adapter.notifyChange(this.getValue());
    var isRequired = this.adapter.hasClass(cssClasses$1.REQUIRED);
    if (isRequired && this.useDefaultValidation) {
      this.setValid(this.isValid());
    }
  };
  MDCSelectFoundation2.prototype.handleMenuItemAction = function(index) {
    this.setSelectedIndex(index, true);
  };
  MDCSelectFoundation2.prototype.handleFocus = function() {
    this.adapter.addClass(cssClasses$1.FOCUSED);
    this.layout();
    this.adapter.activateBottomLine();
  };
  MDCSelectFoundation2.prototype.handleBlur = function() {
    if (this.isMenuOpen) {
      return;
    }
    this.blur();
  };
  MDCSelectFoundation2.prototype.handleClick = function(normalizedX) {
    if (this.disabled || this.recentlyClicked) {
      return;
    }
    this.setClickDebounceTimeout();
    if (this.isMenuOpen) {
      this.adapter.closeMenu();
      return;
    }
    this.adapter.setRippleCenter(normalizedX);
    this.openMenu();
  };
  MDCSelectFoundation2.prototype.handleKeydown = function(event) {
    if (this.isMenuOpen || !this.adapter.hasClass(cssClasses$1.FOCUSED)) {
      return;
    }
    var isEnter = normalizeKey(event) === KEY.ENTER;
    var isSpace = normalizeKey(event) === KEY.SPACEBAR;
    var arrowUp = normalizeKey(event) === KEY.ARROW_UP;
    var arrowDown = normalizeKey(event) === KEY.ARROW_DOWN;
    var isModifier = event.ctrlKey || event.metaKey;
    if (!isModifier && (!isSpace && event.key && event.key.length === 1 || isSpace && this.adapter.isTypeaheadInProgress())) {
      var key = isSpace ? " " : event.key;
      var typeaheadNextIndex = this.adapter.typeaheadMatchItem(key, this.getSelectedIndex());
      if (typeaheadNextIndex >= 0) {
        this.setSelectedIndex(typeaheadNextIndex);
      }
      event.preventDefault();
      return;
    }
    if (!isEnter && !isSpace && !arrowUp && !arrowDown) {
      return;
    }
    if (arrowUp && this.getSelectedIndex() > 0) {
      this.setSelectedIndex(this.getSelectedIndex() - 1);
    } else if (arrowDown && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1) {
      this.setSelectedIndex(this.getSelectedIndex() + 1);
    }
    this.openMenu();
    event.preventDefault();
  };
  MDCSelectFoundation2.prototype.notchOutline = function(openNotch) {
    if (!this.adapter.hasOutline()) {
      return;
    }
    var isFocused = this.adapter.hasClass(cssClasses$1.FOCUSED);
    if (openNotch) {
      var labelScale = numbers.LABEL_SCALE;
      var labelWidth = this.adapter.getLabelWidth() * labelScale;
      this.adapter.notchOutline(labelWidth);
    } else if (!isFocused) {
      this.adapter.closeOutline();
    }
  };
  MDCSelectFoundation2.prototype.setLeadingIconAriaLabel = function(label) {
    if (this.leadingIcon) {
      this.leadingIcon.setAriaLabel(label);
    }
  };
  MDCSelectFoundation2.prototype.setLeadingIconContent = function(content) {
    if (this.leadingIcon) {
      this.leadingIcon.setContent(content);
    }
  };
  MDCSelectFoundation2.prototype.getUseDefaultValidation = function() {
    return this.useDefaultValidation;
  };
  MDCSelectFoundation2.prototype.setUseDefaultValidation = function(useDefaultValidation) {
    this.useDefaultValidation = useDefaultValidation;
  };
  MDCSelectFoundation2.prototype.setValid = function(isValid) {
    if (!this.useDefaultValidation) {
      this.customValidity = isValid;
    }
    this.adapter.setSelectAnchorAttr("aria-invalid", (!isValid).toString());
    if (isValid) {
      this.adapter.removeClass(cssClasses$1.INVALID);
      this.adapter.removeMenuClass(cssClasses$1.MENU_INVALID);
    } else {
      this.adapter.addClass(cssClasses$1.INVALID);
      this.adapter.addMenuClass(cssClasses$1.MENU_INVALID);
    }
    this.syncHelperTextValidity(isValid);
  };
  MDCSelectFoundation2.prototype.isValid = function() {
    if (this.useDefaultValidation && this.adapter.hasClass(cssClasses$1.REQUIRED) && !this.adapter.hasClass(cssClasses$1.DISABLED)) {
      return this.getSelectedIndex() !== numbers.UNSET_INDEX && (this.getSelectedIndex() !== 0 || Boolean(this.getValue()));
    }
    return this.customValidity;
  };
  MDCSelectFoundation2.prototype.setRequired = function(isRequired) {
    if (isRequired) {
      this.adapter.addClass(cssClasses$1.REQUIRED);
    } else {
      this.adapter.removeClass(cssClasses$1.REQUIRED);
    }
    this.adapter.setSelectAnchorAttr("aria-required", isRequired.toString());
    this.adapter.setLabelRequired(isRequired);
  };
  MDCSelectFoundation2.prototype.getRequired = function() {
    return this.adapter.getSelectAnchorAttr("aria-required") === "true";
  };
  MDCSelectFoundation2.prototype.init = function() {
    var anchorEl = this.adapter.getAnchorElement();
    if (anchorEl) {
      this.adapter.setMenuAnchorElement(anchorEl);
      this.adapter.setMenuAnchorCorner(Corner.BOTTOM_START);
    }
    this.adapter.setMenuWrapFocus(false);
    this.setDisabled(this.adapter.hasClass(cssClasses$1.DISABLED));
    this.syncHelperTextValidity(!this.adapter.hasClass(cssClasses$1.INVALID));
    this.layout();
    this.layoutOptions();
  };
  MDCSelectFoundation2.prototype.blur = function() {
    this.adapter.removeClass(cssClasses$1.FOCUSED);
    this.layout();
    this.adapter.deactivateBottomLine();
    var isRequired = this.adapter.hasClass(cssClasses$1.REQUIRED);
    if (isRequired && this.useDefaultValidation) {
      this.setValid(this.isValid());
    }
  };
  MDCSelectFoundation2.prototype.syncHelperTextValidity = function(isValid) {
    if (!this.helperText) {
      return;
    }
    this.helperText.setValidity(isValid);
    var helperTextVisible = this.helperText.isVisible();
    var helperTextId = this.helperText.getId();
    if (helperTextVisible && helperTextId) {
      this.adapter.setSelectAnchorAttr(strings$2.ARIA_DESCRIBEDBY, helperTextId);
    } else {
      this.adapter.removeSelectAnchorAttr(strings$2.ARIA_DESCRIBEDBY);
    }
  };
  MDCSelectFoundation2.prototype.setClickDebounceTimeout = function() {
    var _this = this;
    clearTimeout(this.clickDebounceTimeout);
    this.clickDebounceTimeout = setTimeout(function() {
      _this.recentlyClicked = false;
    }, numbers.CLICK_DEBOUNCE_TIMEOUT_MS);
    this.recentlyClicked = true;
  };
  return MDCSelectFoundation2;
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
var strings$1 = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
};
var cssClasses = {
  HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
  HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
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
var MDCSelectHelperTextFoundation = function(_super) {
  __extends(MDCSelectHelperTextFoundation2, _super);
  function MDCSelectHelperTextFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCSelectHelperTextFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCSelectHelperTextFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectHelperTextFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectHelperTextFoundation2, "defaultAdapter", {
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
        getAttr: function() {
          return null;
        },
        removeAttr: function() {
          return void 0;
        },
        setContent: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCSelectHelperTextFoundation2.prototype.getId = function() {
    return this.adapter.getAttr("id");
  };
  MDCSelectHelperTextFoundation2.prototype.isVisible = function() {
    return this.adapter.getAttr(strings$1.ARIA_HIDDEN) !== "true";
  };
  MDCSelectHelperTextFoundation2.prototype.setContent = function(content) {
    this.adapter.setContent(content);
  };
  MDCSelectHelperTextFoundation2.prototype.setValidation = function(isValidation) {
    if (isValidation) {
      this.adapter.addClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter.removeClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
    }
  };
  MDCSelectHelperTextFoundation2.prototype.setValidationMsgPersistent = function(isPersistent) {
    if (isPersistent) {
      this.adapter.addClass(cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    } else {
      this.adapter.removeClass(cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }
  };
  MDCSelectHelperTextFoundation2.prototype.setValidity = function(selectIsValid) {
    var isValidationMsg = this.adapter.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
    if (!isValidationMsg) {
      return;
    }
    var isPersistentValidationMsg = this.adapter.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    var msgShouldDisplay = !selectIsValid || isPersistentValidationMsg;
    if (msgShouldDisplay) {
      this.showToScreenReader();
      if (!selectIsValid) {
        this.adapter.setAttr(strings$1.ROLE, "alert");
      } else {
        this.adapter.removeAttr(strings$1.ROLE);
      }
      return;
    }
    this.adapter.removeAttr(strings$1.ROLE);
    this.hide();
  };
  MDCSelectHelperTextFoundation2.prototype.showToScreenReader = function() {
    this.adapter.removeAttr(strings$1.ARIA_HIDDEN);
  };
  MDCSelectHelperTextFoundation2.prototype.hide = function() {
    this.adapter.setAttr(strings$1.ARIA_HIDDEN, "true");
  };
  return MDCSelectHelperTextFoundation2;
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
var MDCSelectHelperText = function(_super) {
  __extends(MDCSelectHelperText2, _super);
  function MDCSelectHelperText2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCSelectHelperText2.attachTo = function(root) {
    return new MDCSelectHelperText2(root);
  };
  Object.defineProperty(MDCSelectHelperText2.prototype, "foundationForSelect", {
    get: function() {
      return this.foundation;
    },
    enumerable: false,
    configurable: true
  });
  MDCSelectHelperText2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClass: function(className) {
        return _this.root.classList.add(className);
      },
      removeClass: function(className) {
        return _this.root.classList.remove(className);
      },
      hasClass: function(className) {
        return _this.root.classList.contains(className);
      },
      getAttr: function(attr) {
        return _this.root.getAttribute(attr);
      },
      setAttr: function(attr, value) {
        return _this.root.setAttribute(attr, value);
      },
      removeAttr: function(attr) {
        return _this.root.removeAttribute(attr);
      },
      setContent: function(content) {
        _this.root.textContent = content;
      }
    };
    return new MDCSelectHelperTextFoundation(adapter);
  };
  return MDCSelectHelperText2;
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
var strings = {
  ICON_EVENT: "MDCSelect:icon",
  ICON_ROLE: "button"
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
var INTERACTION_EVENTS = ["click", "keydown"];
var MDCSelectIconFoundation = function(_super) {
  __extends(MDCSelectIconFoundation2, _super);
  function MDCSelectIconFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCSelectIconFoundation2.defaultAdapter), adapter)) || this;
    _this.savedTabIndex = null;
    _this.interactionHandler = function(evt) {
      _this.handleInteraction(evt);
    };
    return _this;
  }
  Object.defineProperty(MDCSelectIconFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectIconFoundation2, "defaultAdapter", {
    get: function() {
      return {
        getAttr: function() {
          return null;
        },
        setAttr: function() {
          return void 0;
        },
        removeAttr: function() {
          return void 0;
        },
        setContent: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        notifyIconAction: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCSelectIconFoundation2.prototype.init = function() {
    var e_1, _a;
    this.savedTabIndex = this.adapter.getAttr("tabindex");
    try {
      for (var INTERACTION_EVENTS_1 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
        var evtType = INTERACTION_EVENTS_1_1.value;
        this.adapter.registerInteractionHandler(evtType, this.interactionHandler);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_a = INTERACTION_EVENTS_1.return))
          _a.call(INTERACTION_EVENTS_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  MDCSelectIconFoundation2.prototype.destroy = function() {
    var e_2, _a;
    try {
      for (var INTERACTION_EVENTS_2 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
        var evtType = INTERACTION_EVENTS_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.interactionHandler);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_a = INTERACTION_EVENTS_2.return))
          _a.call(INTERACTION_EVENTS_2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
  };
  MDCSelectIconFoundation2.prototype.setDisabled = function(disabled) {
    if (!this.savedTabIndex) {
      return;
    }
    if (disabled) {
      this.adapter.setAttr("tabindex", "-1");
      this.adapter.removeAttr("role");
    } else {
      this.adapter.setAttr("tabindex", this.savedTabIndex);
      this.adapter.setAttr("role", strings.ICON_ROLE);
    }
  };
  MDCSelectIconFoundation2.prototype.setAriaLabel = function(label) {
    this.adapter.setAttr("aria-label", label);
  };
  MDCSelectIconFoundation2.prototype.setContent = function(content) {
    this.adapter.setContent(content);
  };
  MDCSelectIconFoundation2.prototype.handleInteraction = function(evt) {
    var isEnterKey = evt.key === "Enter" || evt.keyCode === 13;
    if (evt.type === "click" || isEnterKey) {
      this.adapter.notifyIconAction();
    }
  };
  return MDCSelectIconFoundation2;
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
var MDCSelectIcon = function(_super) {
  __extends(MDCSelectIcon2, _super);
  function MDCSelectIcon2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCSelectIcon2.attachTo = function(root) {
    return new MDCSelectIcon2(root);
  };
  Object.defineProperty(MDCSelectIcon2.prototype, "foundationForSelect", {
    get: function() {
      return this.foundation;
    },
    enumerable: false,
    configurable: true
  });
  MDCSelectIcon2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      getAttr: function(attr) {
        return _this.root.getAttribute(attr);
      },
      setAttr: function(attr, value) {
        return _this.root.setAttribute(attr, value);
      },
      removeAttr: function(attr) {
        return _this.root.removeAttribute(attr);
      },
      setContent: function(content) {
        _this.root.textContent = content;
      },
      registerInteractionHandler: function(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      notifyIconAction: function() {
        return _this.emit(MDCSelectIconFoundation.strings.ICON_EVENT, {}, true);
      }
    };
    return new MDCSelectIconFoundation(adapter);
  };
  return MDCSelectIcon2;
}(MDCComponent);
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
var MDCSelect = function(_super) {
  __extends(MDCSelect2, _super);
  function MDCSelect2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCSelect2.attachTo = function(root) {
    return new MDCSelect2(root);
  };
  MDCSelect2.prototype.initialize = function(labelFactory, lineRippleFactory, outlineFactory, menuFactory, iconFactory, helperTextFactory) {
    if (labelFactory === void 0) {
      labelFactory = function(el) {
        return new MDCFloatingLabel(el);
      };
    }
    if (lineRippleFactory === void 0) {
      lineRippleFactory = function(el) {
        return new MDCLineRipple(el);
      };
    }
    if (outlineFactory === void 0) {
      outlineFactory = function(el) {
        return new MDCNotchedOutline(el);
      };
    }
    if (menuFactory === void 0) {
      menuFactory = function(el) {
        return new MDCMenu(el);
      };
    }
    if (iconFactory === void 0) {
      iconFactory = function(el) {
        return new MDCSelectIcon(el);
      };
    }
    if (helperTextFactory === void 0) {
      helperTextFactory = function(el) {
        return new MDCSelectHelperText(el);
      };
    }
    this.selectAnchor = this.root.querySelector(strings$2.SELECT_ANCHOR_SELECTOR);
    this.selectedText = this.root.querySelector(strings$2.SELECTED_TEXT_SELECTOR);
    this.hiddenInput = this.root.querySelector(strings$2.HIDDEN_INPUT_SELECTOR);
    if (!this.selectedText) {
      throw new Error("MDCSelect: Missing required element: The following selector must be present: " + ("'" + strings$2.SELECTED_TEXT_SELECTOR + "'"));
    }
    if (this.selectAnchor.hasAttribute(strings$2.ARIA_CONTROLS)) {
      var helperTextElement = document.getElementById(this.selectAnchor.getAttribute(strings$2.ARIA_CONTROLS));
      if (helperTextElement) {
        this.helperText = helperTextFactory(helperTextElement);
      }
    }
    this.menuSetup(menuFactory);
    var labelElement = this.root.querySelector(strings$2.LABEL_SELECTOR);
    this.label = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root.querySelector(strings$2.LINE_RIPPLE_SELECTOR);
    this.lineRipple = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root.querySelector(strings$2.OUTLINE_SELECTOR);
    this.outline = outlineElement ? outlineFactory(outlineElement) : null;
    var leadingIcon = this.root.querySelector(strings$2.LEADING_ICON_SELECTOR);
    if (leadingIcon) {
      this.leadingIcon = iconFactory(leadingIcon);
    }
    if (!this.root.classList.contains(cssClasses$1.OUTLINED)) {
      this.ripple = this.createRipple();
    }
  };
  MDCSelect2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    this.handleFocus = function() {
      _this.foundation.handleFocus();
    };
    this.handleBlur = function() {
      _this.foundation.handleBlur();
    };
    this.handleClick = function(evt) {
      _this.selectAnchor.focus();
      _this.foundation.handleClick(_this.getNormalizedXCoordinate(evt));
    };
    this.handleKeydown = function(evt) {
      _this.foundation.handleKeydown(evt);
    };
    this.handleMenuItemAction = function(evt) {
      _this.foundation.handleMenuItemAction(evt.detail.index);
    };
    this.handleMenuOpened = function() {
      _this.foundation.handleMenuOpened();
    };
    this.handleMenuClosed = function() {
      _this.foundation.handleMenuClosed();
    };
    this.handleMenuClosing = function() {
      _this.foundation.handleMenuClosing();
    };
    this.selectAnchor.addEventListener("focus", this.handleFocus);
    this.selectAnchor.addEventListener("blur", this.handleBlur);
    this.selectAnchor.addEventListener("click", this.handleClick);
    this.selectAnchor.addEventListener("keydown", this.handleKeydown);
    this.menu.listen(strings$4.CLOSED_EVENT, this.handleMenuClosed);
    this.menu.listen(strings$4.CLOSING_EVENT, this.handleMenuClosing);
    this.menu.listen(strings$4.OPENED_EVENT, this.handleMenuOpened);
    this.menu.listen(strings$3.SELECTED_EVENT, this.handleMenuItemAction);
    if (this.hiddenInput) {
      if (this.hiddenInput.value) {
        this.foundation.setValue(this.hiddenInput.value, true);
        this.foundation.layout();
        return;
      }
      this.hiddenInput.value = this.value;
    }
  };
  MDCSelect2.prototype.destroy = function() {
    this.selectAnchor.removeEventListener("focus", this.handleFocus);
    this.selectAnchor.removeEventListener("blur", this.handleBlur);
    this.selectAnchor.removeEventListener("keydown", this.handleKeydown);
    this.selectAnchor.removeEventListener("click", this.handleClick);
    this.menu.unlisten(strings$4.CLOSED_EVENT, this.handleMenuClosed);
    this.menu.unlisten(strings$4.OPENED_EVENT, this.handleMenuOpened);
    this.menu.unlisten(strings$3.SELECTED_EVENT, this.handleMenuItemAction);
    this.menu.destroy();
    if (this.ripple) {
      this.ripple.destroy();
    }
    if (this.outline) {
      this.outline.destroy();
    }
    if (this.leadingIcon) {
      this.leadingIcon.destroy();
    }
    if (this.helperText) {
      this.helperText.destroy();
    }
    _super.prototype.destroy.call(this);
  };
  Object.defineProperty(MDCSelect2.prototype, "value", {
    get: function() {
      return this.foundation.getValue();
    },
    set: function(value) {
      this.foundation.setValue(value);
    },
    enumerable: false,
    configurable: true
  });
  MDCSelect2.prototype.setValue = function(value, skipNotify) {
    if (skipNotify === void 0) {
      skipNotify = false;
    }
    this.foundation.setValue(value, skipNotify);
  };
  Object.defineProperty(MDCSelect2.prototype, "selectedIndex", {
    get: function() {
      return this.foundation.getSelectedIndex();
    },
    set: function(selectedIndex) {
      this.foundation.setSelectedIndex(selectedIndex, true);
    },
    enumerable: false,
    configurable: true
  });
  MDCSelect2.prototype.setSelectedIndex = function(selectedIndex, skipNotify) {
    if (skipNotify === void 0) {
      skipNotify = false;
    }
    this.foundation.setSelectedIndex(selectedIndex, true, skipNotify);
  };
  Object.defineProperty(MDCSelect2.prototype, "disabled", {
    get: function() {
      return this.foundation.getDisabled();
    },
    set: function(disabled) {
      this.foundation.setDisabled(disabled);
      if (this.hiddenInput) {
        this.hiddenInput.disabled = disabled;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelect2.prototype, "leadingIconAriaLabel", {
    set: function(label) {
      this.foundation.setLeadingIconAriaLabel(label);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelect2.prototype, "leadingIconContent", {
    set: function(content) {
      this.foundation.setLeadingIconContent(content);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelect2.prototype, "helperTextContent", {
    set: function(content) {
      this.foundation.setHelperTextContent(content);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelect2.prototype, "useDefaultValidation", {
    set: function(useDefaultValidation) {
      this.foundation.setUseDefaultValidation(useDefaultValidation);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelect2.prototype, "valid", {
    get: function() {
      return this.foundation.isValid();
    },
    set: function(isValid) {
      this.foundation.setValid(isValid);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelect2.prototype, "required", {
    get: function() {
      return this.foundation.getRequired();
    },
    set: function(isRequired) {
      this.foundation.setRequired(isRequired);
    },
    enumerable: false,
    configurable: true
  });
  MDCSelect2.prototype.layout = function() {
    this.foundation.layout();
  };
  MDCSelect2.prototype.layoutOptions = function() {
    this.foundation.layoutOptions();
    this.menu.layout();
    this.menuItemValues = this.menu.items.map(function(el) {
      return el.getAttribute(strings$2.VALUE_ATTR) || "";
    });
    if (this.hiddenInput) {
      this.hiddenInput.value = this.value;
    }
  };
  MDCSelect2.prototype.getDefaultFoundation = function() {
    var adapter = __assign(__assign(__assign(__assign({}, this.getSelectAdapterMethods()), this.getCommonAdapterMethods()), this.getOutlineAdapterMethods()), this.getLabelAdapterMethods());
    return new MDCSelectFoundation(adapter, this.getFoundationMap());
  };
  MDCSelect2.prototype.menuSetup = function(menuFactory) {
    this.menuElement = this.root.querySelector(strings$2.MENU_SELECTOR);
    this.menu = menuFactory(this.menuElement);
    this.menu.hasTypeahead = true;
    this.menu.singleSelection = true;
    this.menuItemValues = this.menu.items.map(function(el) {
      return el.getAttribute(strings$2.VALUE_ATTR) || "";
    });
  };
  MDCSelect2.prototype.createRipple = function() {
    var _this = this;
    var adapter = __assign(__assign({}, MDCRipple.createAdapter({ root: this.selectAnchor })), { registerInteractionHandler: function(evtType, handler) {
      _this.selectAnchor.addEventListener(evtType, handler);
    }, deregisterInteractionHandler: function(evtType, handler) {
      _this.selectAnchor.removeEventListener(evtType, handler);
    } });
    return new MDCRipple(this.selectAnchor, new MDCRippleFoundation(adapter));
  };
  MDCSelect2.prototype.getSelectAdapterMethods = function() {
    var _this = this;
    return {
      getMenuItemAttr: function(menuItem, attr) {
        return menuItem.getAttribute(attr);
      },
      setSelectedText: function(text) {
        _this.selectedText.textContent = text;
      },
      isSelectAnchorFocused: function() {
        return document.activeElement === _this.selectAnchor;
      },
      getSelectAnchorAttr: function(attr) {
        return _this.selectAnchor.getAttribute(attr);
      },
      setSelectAnchorAttr: function(attr, value) {
        _this.selectAnchor.setAttribute(attr, value);
      },
      removeSelectAnchorAttr: function(attr) {
        _this.selectAnchor.removeAttribute(attr);
      },
      addMenuClass: function(className) {
        _this.menuElement.classList.add(className);
      },
      removeMenuClass: function(className) {
        _this.menuElement.classList.remove(className);
      },
      openMenu: function() {
        _this.menu.open = true;
      },
      closeMenu: function() {
        _this.menu.open = false;
      },
      getAnchorElement: function() {
        return _this.root.querySelector(strings$2.SELECT_ANCHOR_SELECTOR);
      },
      setMenuAnchorElement: function(anchorEl) {
        _this.menu.setAnchorElement(anchorEl);
      },
      setMenuAnchorCorner: function(anchorCorner) {
        _this.menu.setAnchorCorner(anchorCorner);
      },
      setMenuWrapFocus: function(wrapFocus) {
        _this.menu.wrapFocus = wrapFocus;
      },
      getSelectedIndex: function() {
        var index = _this.menu.selectedIndex;
        return index instanceof Array ? index[0] : index;
      },
      setSelectedIndex: function(index) {
        _this.menu.selectedIndex = index;
      },
      focusMenuItemAtIndex: function(index) {
        _this.menu.items[index].focus();
      },
      getMenuItemCount: function() {
        return _this.menu.items.length;
      },
      getMenuItemValues: function() {
        return _this.menuItemValues;
      },
      getMenuItemTextAtIndex: function(index) {
        return _this.menu.getPrimaryTextAtIndex(index);
      },
      isTypeaheadInProgress: function() {
        return _this.menu.typeaheadInProgress;
      },
      typeaheadMatchItem: function(nextChar, startingIndex) {
        return _this.menu.typeaheadMatchItem(nextChar, startingIndex);
      }
    };
  };
  MDCSelect2.prototype.getCommonAdapterMethods = function() {
    var _this = this;
    return {
      addClass: function(className) {
        _this.root.classList.add(className);
      },
      removeClass: function(className) {
        _this.root.classList.remove(className);
      },
      hasClass: function(className) {
        return _this.root.classList.contains(className);
      },
      setRippleCenter: function(normalizedX) {
        _this.lineRipple && _this.lineRipple.setRippleCenter(normalizedX);
      },
      activateBottomLine: function() {
        _this.lineRipple && _this.lineRipple.activate();
      },
      deactivateBottomLine: function() {
        _this.lineRipple && _this.lineRipple.deactivate();
      },
      notifyChange: function(value) {
        if (_this.hiddenInput) {
          _this.hiddenInput.value = value;
        }
        var index = _this.selectedIndex;
        _this.emit(strings$2.CHANGE_EVENT, { value, index }, true);
      }
    };
  };
  MDCSelect2.prototype.getOutlineAdapterMethods = function() {
    var _this = this;
    return {
      hasOutline: function() {
        return Boolean(_this.outline);
      },
      notchOutline: function(labelWidth) {
        _this.outline && _this.outline.notch(labelWidth);
      },
      closeOutline: function() {
        _this.outline && _this.outline.closeNotch();
      }
    };
  };
  MDCSelect2.prototype.getLabelAdapterMethods = function() {
    var _this = this;
    return {
      hasLabel: function() {
        return !!_this.label;
      },
      floatLabel: function(shouldFloat) {
        _this.label && _this.label.float(shouldFloat);
      },
      getLabelWidth: function() {
        return _this.label ? _this.label.getWidth() : 0;
      },
      setLabelRequired: function(isRequired) {
        _this.label && _this.label.setRequired(isRequired);
      }
    };
  };
  MDCSelect2.prototype.getNormalizedXCoordinate = function(evt) {
    var targetClientRect = evt.target.getBoundingClientRect();
    var xCoordinate = this.isTouchEvent(evt) ? evt.touches[0].clientX : evt.clientX;
    return xCoordinate - targetClientRect.left;
  };
  MDCSelect2.prototype.isTouchEvent = function(evt) {
    return Boolean(evt.touches);
  };
  MDCSelect2.prototype.getFoundationMap = function() {
    return {
      helperText: this.helperText ? this.helperText.foundationForSelect : void 0,
      leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForSelect : void 0
    };
  };
  return MDCSelect2;
}(MDCComponent);
const inoSelectCss = '@charset "UTF-8";.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform, opacity;z-index:8;transition:opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1), height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 0.075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left;}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-menu{min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}.mdc-menu .mdc-deprecated-list-item__meta{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-deprecated-list-item__graphic{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-deprecated-list{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-deprecated-list,.mdc-menu .mdc-list{position:relative}.mdc-menu .mdc-deprecated-list .mdc-elevation-overlay,.mdc-menu .mdc-list .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-menu .mdc-deprecated-list-divider{margin:8px 0}.mdc-menu .mdc-deprecated-list-item{user-select:none}.mdc-menu .mdc-deprecated-list-item--disabled{cursor:auto}.mdc-menu a.mdc-deprecated-list-item .mdc-deprecated-list-item__text,.mdc-menu a.mdc-deprecated-list-item .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-deprecated-list-item{padding-left:56px;padding-right:16px}[dir=rtl] .mdc-menu__selection-group .mdc-deprecated-list-item,.mdc-menu__selection-group .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:56px;}.mdc-menu__selection-group .mdc-menu__selection-group-icon{left:16px;right:initial;display:none;position:absolute;top:50%;transform:translateY(-50%)}[dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon,.mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl]{left:initial;right:16px;}.mdc-menu-item--selected .mdc-menu__selection-group-icon{display:inline}.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right;}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required,.mdc-floating-label--required[dir=rtl]{}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right;}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid;}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none;}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0;}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(61, 64, 245, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#3d40f5;fill:var(--mdc-theme-primary, #3d40f5)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px;}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0;}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px;}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0;}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px;}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right;}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#eb003b;color:var(--mdc-theme-error, #eb003b)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#eb003b;color:var(--mdc-theme-error, #eb003b)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#eb003b;color:var(--mdc-theme-error, #eb003b)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#eb003b;fill:var(--mdc-theme-error, #eb003b)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#eb003b;fill:var(--mdc-theme-error, #eb003b)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px;}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0;}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px;}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0;}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px;}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0;}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto;}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px;}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"\u200B"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#3d40f5;border-bottom-color:var(--mdc-theme-primary, #3d40f5)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px;}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px;}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#eb003b;border-bottom-color:var(--mdc-theme-error, #eb003b)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#eb003b;border-bottom-color:var(--mdc-theme-error, #eb003b)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#eb003b;border-bottom-color:var(--mdc-theme-error, #eb003b)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:0.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0;}@supports (top: 0%){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports (top: 0%){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px);}@supports (top: 0%){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0;}@supports (top: 0%){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports (top: 0%){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0;}@supports (top: 0%){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#3d40f5;border-color:var(--mdc-theme-primary, #3d40f5)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:0.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"\u200B"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px;}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#eb003b;border-color:var(--mdc-theme-error, #eb003b)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#eb003b;border-color:var(--mdc-theme-error, #eb003b)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#eb003b;border-color:var(--mdc-theme-error, #eb003b)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px;}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1);}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:0.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75);}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl]{}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px;}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px;}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}ino-label .mdc-floating-label::after{content:none}ino-label.ino-label--show-hint .mdc-floating-label:after{content:"*"}ino-label.ino-label--show-hint:not(.ino-label--required) .mdc-floating-label:after{content:" - Optional\xA0";font-style:italic;color:rgba(77, 77, 77, 0.6)}ino-label:not(.ino-label--outlined) .mdc-floating-label{left:0}ino-input ino-label:not(.ino-label--outlined) .mdc-floating-label:not(.mdc-floating-label--float-above){top:70%}ino-label:not(.ino-label--disabled) .mdc-floating-label:not(.mdc-floating-label--float-above){color:rgba(0, 0, 0, 0.6)}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list-item__secondary-text{color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic{background-color:transparent}.mdc-deprecated-list-item__graphic{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text{opacity:0.38}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__secondary-text{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item--selected,.mdc-deprecated-list-item--activated{color:#3d40f5;color:var(--mdc-theme-primary, #3d40f5)}.mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#3d40f5;color:var(--mdc-theme-primary, #3d40f5)}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:0.812rem}.mdc-deprecated-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;height:48px}.mdc-deprecated-list-item:focus{outline:none}.mdc-deprecated-list-item:not(.mdc-deprecated-list-item--selected):focus::before,.mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-deprecated-list-item.mdc-deprecated-list-item--selected::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px double transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-deprecated-list-item,.mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px;}.mdc-deprecated-list--icon-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-item,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px;}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px;}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px;}.mdc-deprecated-list--image-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:72px}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-item,.mdc-deprecated-list--image-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px;}.mdc-deprecated-list--video-list .mdc-deprecated-list-item{padding-left:0px;padding-right:16px;height:72px}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-item,.mdc-deprecated-list--video-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:0px;}.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:20px;height:20px}[dir=rtl] .mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0;}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;object-fit:cover;margin-left:0;margin-right:32px;width:24px;height:24px}[dir=rtl] .mdc-deprecated-list-item__graphic,.mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:32px;margin-right:0;}.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:32px;width:24px;height:24px}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:32px;margin-right:0;}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px;border-radius:50%}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0;}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0;}.mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:56px;height:56px}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0;}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:100px;height:56px}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0;}.mdc-deprecated-list .mdc-deprecated-list-item__graphic{display:inline-flex}.mdc-deprecated-list-item__meta{margin-left:auto;margin-right:0}.mdc-deprecated-list-item__meta:not(.material-icons){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}.mdc-deprecated-list-item[dir=rtl] .mdc-deprecated-list-item__meta,[dir=rtl] .mdc-deprecated-list-item .mdc-deprecated-list-item__meta{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text::before,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text::before,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text::before,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text::before,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text::after,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text::after,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text::after,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text::after,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}.mdc-deprecated-list--dense .mdc-deprecated-list-item{height:40px}.mdc-deprecated-list--two-line .mdc-deprecated-list-item__text{align-self:flex-start}.mdc-deprecated-list--two-line .mdc-deprecated-list-item{height:64px}.mdc-deprecated-list--two-line.mdc-deprecated-list--video-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--image-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--icon-list .mdc-deprecated-list-item{height:72px}.mdc-deprecated-list--two-line.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic{align-self:flex-start;margin-top:16px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense .mdc-deprecated-list-item,.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item{height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:36px;height:36px}[dir=rtl] .mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0;}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item{cursor:pointer}a.mdc-deprecated-list-item{color:inherit;text-decoration:none}.mdc-deprecated-list-divider{height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid}.mdc-deprecated-list-divider{border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list-divider--padded{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list-divider--padded,.mdc-deprecated-list-divider--padded[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list-divider--inset{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list-divider--inset,.mdc-deprecated-list-divider--inset[dir=rtl]{margin-left:0;margin-right:72px;}.mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded,.mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded[dir=rtl]{margin-left:0;margin-right:72px;}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px;}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px;}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px;}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px;}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px;}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px;}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading{margin-left:88px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:88px;}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:88px;margin-right:0;width:calc(100% - 104px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:88px;}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading{margin-left:116px;margin-right:0;width:calc(100% - 116px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:116px;}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:116px;margin-right:0;width:calc(100% - 132px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:116px;}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:0px;margin-right:0;width:calc(100% - 0px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:0px;}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:0px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:0px;}.mdc-deprecated-list-group .mdc-deprecated-list{padding:0}.mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);margin:calc((3rem - 1.5rem) / 2) 16px}.mdc-list-item__primary-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}.mdc-list-item__secondary-text{color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__overline-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-trailing-icon .mdc-list-item__end{background-color:transparent}.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__end{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:0.38}.mdc-list-item--disabled .mdc-list-item__primary-text{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item--disabled .mdc-list-item__secondary-text{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item--disabled .mdc-list-item__overline-text{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item--disabled.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item--selected .mdc-list-item__primary-text,.mdc-list-item--activated .mdc-list-item__primary-text{color:#3d40f5;color:var(--mdc-theme-primary, #3d40f5)}.mdc-list-item--selected.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--activated.mdc-list-item--with-leading-icon .mdc-list-item__start{color:#3d40f5;color:var(--mdc-theme-primary, #3d40f5)}.mdc-deprecated-list-group__subheader{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-list-divider::after{content:"";display:block;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:white}}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer}.mdc-list-item:focus{outline:none}.mdc-list-item.mdc-list-item--with-one-line{height:48px}.mdc-list-item.mdc-list-item--with-two-lines{height:64px}.mdc-list-item.mdc-list-item--with-three-lines{height:88px}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--disabled,.mdc-list-item.mdc-list-item--non-interactive{cursor:auto}.mdc-list-item:not(.mdc-list-item--selected):focus::before,.mdc-list-item.mdc-ripple-upgraded--background-focused::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-list-item.mdc-list-item--selected::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px double transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-list-item.mdc-list-item--selected:focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px solid transparent;border-radius:inherit;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__content[for]{pointer-events:none}.mdc-list-item__primary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item__overline-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.75rem;font-size:var(--mdc-typography-overline-font-size, 0.75rem);line-height:2rem;line-height:var(--mdc-typography-overline-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-overline-font-weight, 500);letter-spacing:0.1666666667em;letter-spacing:var(--mdc-typography-overline-letter-spacing, 0.1666666667em);text-decoration:none;text-decoration:var(--mdc-typography-overline-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-overline-text-transform, uppercase);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-three-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-three-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0;}.mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start,.mdc-list-item--with-leading-avatar .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px;}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-avatar .mdc-list-item__start{border-radius:50%}.mdc-list-item--with-leading-icon .mdc-list-item__start{width:24px;height:24px}.mdc-list-item--with-leading-icon.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0;}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-leading-icon .mdc-list-item__start[dir=rtl]{margin-left:32px;margin-right:16px;}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-thumbnail.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-thumbnail.mdc-list-item,.mdc-list-item--with-leading-thumbnail.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0;}.mdc-list-item--with-leading-thumbnail .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-thumbnail .mdc-list-item__start,.mdc-list-item--with-leading-thumbnail .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px;}.mdc-list-item--with-leading-thumbnail .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-image.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-image.mdc-list-item,.mdc-list-item--with-leading-image.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0;}.mdc-list-item--with-leading-image .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-image .mdc-list-item__start,.mdc-list-item--with-leading-image .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px;}.mdc-list-item--with-leading-image .mdc-list-item__start{width:56px;height:56px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-one-line{height:72px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-video.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-video.mdc-list-item,.mdc-list-item--with-leading-video.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0;}.mdc-list-item--with-leading-video .mdc-list-item__start{margin-left:0;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-video .mdc-list-item__start,.mdc-list-item--with-leading-video .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:0;}.mdc-list-item--with-leading-video .mdc-list-item__start{width:100px;height:56px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-one-line{height:72px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-checkbox.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0;}.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start[dir=rtl]{margin-left:24px;margin-right:8px;}.mdc-list-item--with-leading-checkbox .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-radio.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-radio.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0;}.mdc-list-item--with-leading-radio .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-radio .mdc-list-item__start[dir=rtl]{margin-left:24px;margin-right:8px;}.mdc-list-item--with-leading-radio .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-switch.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-switch.mdc-list-item,.mdc-list-item--with-leading-switch.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0;}.mdc-list-item--with-leading-switch .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-switch .mdc-list-item__start,.mdc-list-item--with-leading-switch .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px;}.mdc-list-item--with-leading-switch .mdc-list-item__start{width:36px;height:20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item,.mdc-list-item--with-trailing-icon.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto;}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-icon .mdc-list-item__end,.mdc-list-item--with-trailing-icon .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px;}.mdc-list-item--with-trailing-icon .mdc-list-item__end{width:24px;height:24px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item,.mdc-list-item--with-trailing-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto;}.mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-trailing-meta .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:28px;}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto;}.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end[dir=rtl]{margin-left:8px;margin-right:24px;}.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{width:40px;height:40px}.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-radio.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto;}.mdc-list-item--with-trailing-radio .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-radio .mdc-list-item__end[dir=rtl]{margin-left:8px;margin-right:24px;}.mdc-list-item--with-trailing-radio .mdc-list-item__end{width:40px;height:40px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-switch.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-switch.mdc-list-item,.mdc-list-item--with-trailing-switch.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto;}.mdc-list-item--with-trailing-switch .mdc-list-item__end{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-switch .mdc-list-item__end,.mdc-list-item--with-trailing-switch .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px;}.mdc-list-item--with-trailing-switch .mdc-list-item__end{width:36px;height:20px}.mdc-list-item--with-trailing-switch.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-list-item,.mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px;}.mdc-list-group .mdc-deprecated-list{padding:0}.mdc-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);margin:calc((3rem - 1.5rem) / 2) 16px}.mdc-list-divider{background-color:rgba(0, 0, 0, 0.12)}.mdc-list-divider{height:1px;padding:0;background-clip:content-box}.mdc-list-divider.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset{padding-left:16px;padding-right:auto}[dir=rtl] .mdc-list-divider.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset,.mdc-list-divider.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset[dir=rtl]{padding-left:auto;padding-right:16px;}.mdc-list-divider.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset{padding-left:auto;padding-right:16px}[dir=rtl] .mdc-list-divider.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset,.mdc-list-divider.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset[dir=rtl]{padding-left:16px;padding-right:auto;}.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset{padding-left:0px;padding-right:auto}[dir=rtl] .mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset[dir=rtl]{padding-left:auto;padding-right:0px;}[dir=rtl] .mdc-list-divider,.mdc-list-divider[dir=rtl]{padding:0;}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--unbounded .mdc-deprecated-list-item__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-list-item__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-list-item__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:hover .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:hover .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:hover .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:hover .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-deprecated-list-item--disabled{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-deprecated-list-item__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-list-item__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-list-item__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::before,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::before,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-deprecated-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-deprecated-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}:not(.mdc-list-item--disabled).mdc-list-item{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:not(.mdc-list-item--disabled).mdc-list-item:hover .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}:not(.mdc-list-item--disabled).mdc-list-item--activated:hover .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}:not(.mdc-list-item--disabled).mdc-list-item--selected:hover .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-list-item--disabled{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-list-item--disabled .mdc-list-item__ripple::before,.mdc-list-item--disabled .mdc-list-item__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-list-item--disabled .mdc-list-item__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-list-item--disabled .mdc-list-item__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-list-item--disabled .mdc-list-item__ripple::before,.mdc-list-item--disabled .mdc-list-item__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-list-item--disabled .mdc-list-item__ripple::before,.mdc-list-item--disabled .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-list-item--disabled .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}ino-select{--select-height:auto;--select-icon-color:var(--ino-select-icon-color, #3d40f5);display:block}ino-select .ino-hidden-input{width:0;height:0;padding:0;margin:0;border:0}ino-select .mdc-select__menu{height:var(--select-height)}ino-select .mdc-select__anchor,ino-select .mdc-select,ino-select .mdc-select__menu{width:100%}ino-select .mdc-select__icon ino-icon{--icon-color:rgba(0, 0, 0, 0.6)}ino-select .mdc-select--focused .mdc-select__icon ino-icon{--icon-color:var(--select-icon-color)}ino-select .mdc-select--focused .mdc-select__anchor:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#3d40f5}ino-select .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#3d40f5}ino-select .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#3d40f5}ino-select .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,ino-select .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,ino-select .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}ino-select .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,ino-select .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,ino-select .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#3d40f5}ino-select .mdc-select:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}ino-select .mdc-select.mdc-select--disabled .mdc-select__anchor{background-color:transparent}ino-select .mdc-select .mdc-select__anchor:before{display:none}ino-select .mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}ino-select .mdc-select .mdc-select__dropdown-icon ino-icon{--icon-width:24px;--icon-height:24px}ino-select .mdc-select.mdc-select--outlined .mdc-select__selected-text{display:block}ino-select .mdc-select__selected-text{text-overflow:ellipsis;overflow:hidden}ino-select .mdc-select--filled .mdc-select__anchor{padding-left:0}ino-select .mdc-select--filled .mdc-select__selected-text{margin-top:24px}ino-select .mdc-select--filled .mdc-select__icon{margin-top:12px}ino-select .mdc-select--filled .mdc-select__dropdown-icon{margin-top:18px}ino-select .mdc-select--filled .mdc-floating-label{top:36px}ino-select .mdc-select--filled .mdc-floating-label.mdc-floating-label--float-above{top:25px}ino-select .mdc-select--filled[class*="--with-leading-icon"] .mdc-floating-label,ino-select .mdc-select--filled[class*="--with-leading-icon"] .mdc-floating-label--float-above{left:48px}ino-select .mdc-select.mdc-select--outlined.mdc-select--invalid.mdc-select--focused ino-label:not(.ino-label--disabled).ino-label--outlined .mdc-notched-outline>div{border-color:#3d40f5}ino-select .mdc-select--outlined .mdc-select__selected-text{margin-top:16px}ino-select .mdc-select--outlined .mdc-floating-label.mdc-floating-label--float-above{top:28px}ino-select .mdc-select--outlined[class*="--with-leading-icon"] ino-icon{display:unset}ino-select:not(.ino-select-outlined) .mdc-select-helper-text{margin-left:0}';
let Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.value = "";
    this.create = () => {
      var _a;
      if (!this.mdcSelectContainerEl) {
        return;
      }
      this.mdcSelectInstance = new MDCSelect(this.mdcSelectContainerEl);
      if (this.value) {
        this.setSelectValue(this.value);
      } else if ((_a = this.mdcSelectInstance) === null || _a === void 0 ? void 0 : _a.value) {
        this.value = this.mdcSelectInstance.value;
      }
      this.errorHandler(this.error);
      this.mdcSelectInstance.layout();
    };
    this.renderDropdownIcon = () => h("span", { class: "mdc-select__dropdown-icon" }, h("svg", { class: "mdc-select__dropdown-icon-graphic", viewBox: "7 10 10 5" }, h("polygon", { class: "mdc-select__dropdown-icon-inactive", stroke: "none", "fill-rule": "evenodd", points: "7 10 12 15 17 10" }), h("polygon", { class: "mdc-select__dropdown-icon-active", stroke: "none", "fill-rule": "evenodd", points: "7 15 12 10 17 15" })));
  }
  handleValueChange(value) {
    this.setSelectValue(value);
  }
  errorHandler(value) {
    var _a;
    if (this.disabled || !this.mdcSelectInstance) {
      return;
    }
    if (value) {
      this.mdcSelectInstance.valid = false;
      this.mdcSelectInstance.useDefaultValidation = false;
    } else {
      this.mdcSelectInstance.valid = true;
      this.mdcSelectInstance.useDefaultValidation = true;
      (_a = this.nativeInputElement) === null || _a === void 0 ? void 0 : _a.checkValidity();
    }
  }
  connectedCallback() {
    this.create();
    this.optionsObserver = new MutationObserver(() => {
      forceUpdate(this.el);
    });
  }
  componentDidLoad() {
    this.create();
    this.optionsObserver.observe(this.mdcOptionsListEl, { childList: true });
  }
  componentDidUpdate() {
    var _a, _b;
    (_a = this.mdcSelectInstance) === null || _a === void 0 ? void 0 : _a.layoutOptions();
    (_b = this.mdcSelectInstance) === null || _b === void 0 ? void 0 : _b.layout();
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.mdcSelectInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    (_b = this.optionsObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
  }
  setSelectValue(value) {
    if (this.nativeInputElement) {
      this.nativeInputElement.value = value;
    }
    if (this.mdcSelectInstance) {
      this.mdcSelectInstance.value = value;
    }
  }
  handleInput(e) {
    e.preventDefault();
    if (this.mdcSelectInstance && this.mdcSelectInstance.value !== void 0) {
      const value = this.mdcSelectInstance.value;
      this.valueChange.emit(value);
    }
  }
  render() {
    const leadingSlotHasContent = hasSlotContent(this.el, "icon-leading");
    const inoSelectClasses = classnames({
      "ino-select-outlined": this.outline
    });
    const classSelect = classnames({
      "mdc-select": true,
      "mdc-select--disabled": this.disabled,
      "mdc-select--outlined": this.outline,
      "mdc-select--filled": !this.outline,
      "mdc-select--required": this.required,
      "mdc-select--with-leading-icon": leadingSlotHasContent
    });
    const helperTextClasses = classnames({
      "mdc-select-helper-text": true,
      "mdc-select-helper-text--validation-msg-persistent": this.helperPersistent,
      "mdc-select-helper-text--validation-msg": this.helperValidation
    });
    const hiddenInput = this.required ? h("input", { class: "ino-hidden-input", "aria-hidden": true, ref: (el) => this.nativeInputElement = el, required: this.required, disabled: this.disabled }) : "";
    return h(Host, { class: inoSelectClasses, name: this.name }, h("div", { class: classSelect, ref: (el) => this.mdcSelectContainerEl = el }, hiddenInput, h("div", { class: "mdc-select__anchor", "aria-required": this.required }, leadingSlotHasContent && h("span", { class: "mdc-select__icon" }, h("slot", { name: "icon-leading" })), h("div", { class: "mdc-select__selected-text" }), this.renderDropdownIcon(), h("ino-label", { outline: this.outline, text: this.label, required: this.required, disabled: this.disabled, "show-hint": this.showLabelHint })), h("div", { class: "mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth" }, h("ul", { class: "mdc-deprecated-list", ref: (el) => this.mdcOptionsListEl = el }, h("slot", null)))), this.helper && h("p", { class: helperTextClasses }, this.helper));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["handleValueChange"],
      "error": ["errorHandler"]
    };
  }
};
Select.style = inoSelectCss;
export { Select as ino_select };
