import { r as registerInstance, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { _ as __extends, b as __values, c as MDCFoundation, a as __assign, M as MDCComponent } from "./component-97c8fef9.061cf906.js";
import { a as getCorrectPropertyName } from "./util-a712b6e1.6b03bfa6.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
/**
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
 */
var cssClasses = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
};
var strings = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
};
var animationDimensionPercentages = {
  PRIMARY_HALF: 0.8367142,
  PRIMARY_FULL: 2.00611057,
  SECONDARY_QUARTER: 0.37651913,
  SECONDARY_HALF: 0.84386165,
  SECONDARY_FULL: 1.60277782
};
/**
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
 */
var MDCLinearProgressFoundation = function(_super) {
  __extends(MDCLinearProgressFoundation2, _super);
  function MDCLinearProgressFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCLinearProgressFoundation2.defaultAdapter), adapter)) || this;
    _this.observer = null;
    return _this;
  }
  Object.defineProperty(MDCLinearProgressFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgressFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgressFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        attachResizeObserver: function() {
          return null;
        },
        forceLayout: function() {
          return void 0;
        },
        getWidth: function() {
          return 0;
        },
        hasClass: function() {
          return false;
        },
        setBufferBarStyle: function() {
          return null;
        },
        setPrimaryBarStyle: function() {
          return null;
        },
        setStyle: function() {
          return void 0;
        },
        removeAttribute: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        setAttribute: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCLinearProgressFoundation2.prototype.init = function() {
    var _this = this;
    this.determinate = !this.adapter.hasClass(cssClasses.INDETERMINATE_CLASS);
    this.adapter.addClass(cssClasses.ANIMATION_READY_CLASS);
    this.progress = 0;
    this.buffer = 1;
    this.observer = this.adapter.attachResizeObserver(function(entries) {
      var e_1, _a;
      if (_this.determinate) {
        return;
      }
      try {
        for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
          var entry = entries_1_1.value;
          if (entry.contentRect) {
            _this.calculateAndSetDimensions(entry.contentRect.width);
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return))
            _a.call(entries_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    });
    if (!this.determinate && this.observer) {
      this.calculateAndSetDimensions(this.adapter.getWidth());
    }
  };
  MDCLinearProgressFoundation2.prototype.setDeterminate = function(isDeterminate) {
    this.determinate = isDeterminate;
    if (this.determinate) {
      this.adapter.removeClass(cssClasses.INDETERMINATE_CLASS);
      this.adapter.setAttribute(strings.ARIA_VALUENOW, this.progress.toString());
      this.adapter.setAttribute(strings.ARIA_VALUEMAX, "1");
      this.adapter.setAttribute(strings.ARIA_VALUEMIN, "0");
      this.setPrimaryBarProgress(this.progress);
      this.setBufferBarProgress(this.buffer);
      return;
    }
    if (this.observer) {
      this.calculateAndSetDimensions(this.adapter.getWidth());
    }
    this.adapter.addClass(cssClasses.INDETERMINATE_CLASS);
    this.adapter.removeAttribute(strings.ARIA_VALUENOW);
    this.adapter.removeAttribute(strings.ARIA_VALUEMAX);
    this.adapter.removeAttribute(strings.ARIA_VALUEMIN);
    this.setPrimaryBarProgress(1);
    this.setBufferBarProgress(1);
  };
  MDCLinearProgressFoundation2.prototype.isDeterminate = function() {
    return this.determinate;
  };
  MDCLinearProgressFoundation2.prototype.setProgress = function(value) {
    this.progress = value;
    if (this.determinate) {
      this.setPrimaryBarProgress(value);
      this.adapter.setAttribute(strings.ARIA_VALUENOW, value.toString());
    }
  };
  MDCLinearProgressFoundation2.prototype.getProgress = function() {
    return this.progress;
  };
  MDCLinearProgressFoundation2.prototype.setBuffer = function(value) {
    this.buffer = value;
    if (this.determinate) {
      this.setBufferBarProgress(value);
    }
  };
  MDCLinearProgressFoundation2.prototype.getBuffer = function() {
    return this.buffer;
  };
  MDCLinearProgressFoundation2.prototype.open = function() {
    this.adapter.removeClass(cssClasses.CLOSED_CLASS);
    this.adapter.removeClass(cssClasses.CLOSED_ANIMATION_OFF_CLASS);
    this.adapter.removeAttribute(strings.ARIA_HIDDEN);
  };
  MDCLinearProgressFoundation2.prototype.close = function() {
    this.adapter.addClass(cssClasses.CLOSED_CLASS);
    this.adapter.setAttribute(strings.ARIA_HIDDEN, "true");
  };
  MDCLinearProgressFoundation2.prototype.isClosed = function() {
    return this.adapter.hasClass(cssClasses.CLOSED_CLASS);
  };
  MDCLinearProgressFoundation2.prototype.handleTransitionEnd = function() {
    if (this.adapter.hasClass(cssClasses.CLOSED_CLASS)) {
      this.adapter.addClass(cssClasses.CLOSED_ANIMATION_OFF_CLASS);
    }
  };
  MDCLinearProgressFoundation2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    if (this.observer) {
      this.observer.disconnect();
    }
  };
  MDCLinearProgressFoundation2.prototype.restartAnimation = function() {
    this.adapter.removeClass(cssClasses.ANIMATION_READY_CLASS);
    this.adapter.forceLayout();
    this.adapter.addClass(cssClasses.ANIMATION_READY_CLASS);
  };
  MDCLinearProgressFoundation2.prototype.setPrimaryBarProgress = function(progressValue) {
    var value = "scaleX(" + progressValue + ")";
    var transformProp = typeof window !== "undefined" ? getCorrectPropertyName(window, "transform") : "transform";
    this.adapter.setPrimaryBarStyle(transformProp, value);
  };
  MDCLinearProgressFoundation2.prototype.setBufferBarProgress = function(progressValue) {
    var value = progressValue * 100 + "%";
    this.adapter.setBufferBarStyle(strings.FLEX_BASIS, value);
  };
  MDCLinearProgressFoundation2.prototype.calculateAndSetDimensions = function(width) {
    var primaryHalf = width * animationDimensionPercentages.PRIMARY_HALF;
    var primaryFull = width * animationDimensionPercentages.PRIMARY_FULL;
    var secondaryQuarter = width * animationDimensionPercentages.SECONDARY_QUARTER;
    var secondaryHalf = width * animationDimensionPercentages.SECONDARY_HALF;
    var secondaryFull = width * animationDimensionPercentages.SECONDARY_FULL;
    this.adapter.setStyle("--mdc-linear-progress-primary-half", primaryHalf + "px");
    this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -primaryHalf + "px");
    this.adapter.setStyle("--mdc-linear-progress-primary-full", primaryFull + "px");
    this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -primaryFull + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", secondaryQuarter + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -secondaryQuarter + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-half", secondaryHalf + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -secondaryHalf + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-full", secondaryFull + "px");
    this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -secondaryFull + "px");
    this.restartAnimation();
  };
  return MDCLinearProgressFoundation2;
}(MDCFoundation);
/**
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
 */
var MDCLinearProgress = function(_super) {
  __extends(MDCLinearProgress2, _super);
  function MDCLinearProgress2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCLinearProgress2.attachTo = function(root) {
    return new MDCLinearProgress2(root);
  };
  Object.defineProperty(MDCLinearProgress2.prototype, "determinate", {
    set: function(value) {
      this.foundation.setDeterminate(value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress2.prototype, "progress", {
    set: function(value) {
      this.foundation.setProgress(value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress2.prototype, "buffer", {
    set: function(value) {
      this.foundation.setBuffer(value);
    },
    enumerable: false,
    configurable: true
  });
  MDCLinearProgress2.prototype.open = function() {
    this.foundation.open();
  };
  MDCLinearProgress2.prototype.close = function() {
    this.foundation.close();
  };
  MDCLinearProgress2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    this.root.addEventListener("transitionend", function() {
      _this.foundation.handleTransitionEnd();
    });
  };
  MDCLinearProgress2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClass: function(className) {
        _this.root.classList.add(className);
      },
      forceLayout: function() {
        _this.root.getBoundingClientRect();
      },
      setBufferBarStyle: function(styleProperty, value) {
        var bufferBar = _this.root.querySelector(MDCLinearProgressFoundation.strings.BUFFER_BAR_SELECTOR);
        if (bufferBar) {
          bufferBar.style.setProperty(styleProperty, value);
        }
      },
      setPrimaryBarStyle: function(styleProperty, value) {
        var primaryBar = _this.root.querySelector(MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR);
        if (primaryBar) {
          primaryBar.style.setProperty(styleProperty, value);
        }
      },
      hasClass: function(className) {
        return _this.root.classList.contains(className);
      },
      removeAttribute: function(attributeName) {
        _this.root.removeAttribute(attributeName);
      },
      removeClass: function(className) {
        _this.root.classList.remove(className);
      },
      setAttribute: function(attributeName, value) {
        _this.root.setAttribute(attributeName, value);
      },
      setStyle: function(name, value) {
        _this.root.style.setProperty(name, value);
      },
      attachResizeObserver: function(callback) {
        var RO = window.ResizeObserver;
        if (RO) {
          var ro = new RO(callback);
          ro.observe(_this.root);
          return ro;
        }
        return null;
      },
      getWidth: function() {
        return _this.root.offsetWidth;
      }
    };
    return new MDCLinearProgressFoundation(adapter);
  };
  return MDCLinearProgress2;
}(MDCComponent);
const inoProgressBarCss = `@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress,.mdc-linear-progress[dir=rtl]{}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#3d40f5;border-color:var(--mdc-theme-primary, #3d40f5)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host{--progress-bar--bar-color:#3d40f5}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}:host .mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}:host .mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}:host .mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}:host .mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}:host .mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}:host .mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}:host .mdc-linear-progress__primary-bar{transform:scaleX(0)}:host .mdc-linear-progress__secondary-bar{display:none}:host .mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}:host .mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}:host .mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] :host .mdc-linear-progress,:host .mdc-linear-progress[dir=rtl]{}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host .mdc-linear-progress--closed{opacity:0}:host .mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}:host .mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,:host .mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#3d40f5;border-color:var(--mdc-theme-primary, #3d40f5)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host .mdc-linear-progress__bar-inner{border-color:var(--progress-bar--bar-color)}`;
let InoProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buffer = 0;
    this.indeterminate = false;
    this.progress = 0;
    this.initializeComponent = () => {
      this.mdcProgress = new MDCLinearProgress(this.el.shadowRoot.querySelector(".mdc-linear-progress"));
      this.mdcProgress.determinate = !this.indeterminate;
      this.mdcProgress.progress = this.progress;
      this.mdcProgress.buffer = this.buffer;
    };
  }
  bufferChanged(newVal) {
    this.mdcProgress.buffer = newVal;
  }
  indeterminateChanged(newVal) {
    this.mdcProgress.determinate = !newVal;
  }
  progressChanged(newVal) {
    this.mdcProgress.progress = newVal;
  }
  componentDidLoad() {
    this.initializeComponent();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mdcProgress) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    const progressBarClasses = classnames({
      "mdc-linear-progress": true
    });
    return h(Host, null, h("div", { role: "progressbar", class: progressBarClasses, "aria-label": this.label, "aria-valuemin": "0", "aria-valuemax": "1" }, h("div", { class: "mdc-linear-progress__buffer" }, h("div", { class: "mdc-linear-progress__buffer-bar" }), h("div", { class: "mdc-linear-progress__buffer-dots" })), h("div", { class: "mdc-linear-progress__bar mdc-linear-progress__primary-bar" }, h("span", { class: "mdc-linear-progress__bar-inner" })), h("div", { class: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar" }, h("span", { class: "mdc-linear-progress__bar-inner" }))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "buffer": ["bufferChanged"],
      "indeterminate": ["indeterminateChanged"],
      "progress": ["progressChanged"]
    };
  }
};
InoProgressBar.style = inoProgressBarCss;
export { InoProgressBar as ino_progress_bar };
