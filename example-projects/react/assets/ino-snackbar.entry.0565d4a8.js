import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import { _ as __extends, M as MDCComponent, a as __assign, c as MDCFoundation } from "./component-97c8fef9.061cf906.js";
import { c as closest } from "./ponyfill-495ec32d.2f34f215.js";
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
var cssClasses = {
  CLOSING: "mdc-snackbar--closing",
  OPEN: "mdc-snackbar--open",
  OPENING: "mdc-snackbar--opening"
};
var strings = {
  ACTION_SELECTOR: ".mdc-snackbar__action",
  ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
  CLOSED_EVENT: "MDCSnackbar:closed",
  CLOSING_EVENT: "MDCSnackbar:closing",
  DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
  LABEL_SELECTOR: ".mdc-snackbar__label",
  OPENED_EVENT: "MDCSnackbar:opened",
  OPENING_EVENT: "MDCSnackbar:opening",
  REASON_ACTION: "action",
  REASON_DISMISS: "dismiss",
  SURFACE_SELECTOR: ".mdc-snackbar__surface"
};
var numbers = {
  DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
  INDETERMINATE: -1,
  MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
  MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
  SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
  SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
  ARIA_LIVE_DELAY_MS: 1e3
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
var ARIA_LIVE_DELAY_MS = numbers.ARIA_LIVE_DELAY_MS;
var ARIA_LIVE_LABEL_TEXT_ATTR = strings.ARIA_LIVE_LABEL_TEXT_ATTR;
function announce(ariaEl, labelEl) {
  if (labelEl === void 0) {
    labelEl = ariaEl;
  }
  var priority = ariaEl.getAttribute("aria-live");
  var labelText = labelEl.textContent.trim();
  if (!labelText || !priority) {
    return;
  }
  ariaEl.setAttribute("aria-live", "off");
  labelEl.textContent = "";
  labelEl.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>';
  labelEl.setAttribute(ARIA_LIVE_LABEL_TEXT_ATTR, labelText);
  setTimeout(function() {
    ariaEl.setAttribute("aria-live", priority);
    labelEl.removeAttribute(ARIA_LIVE_LABEL_TEXT_ATTR);
    labelEl.textContent = labelText;
  }, ARIA_LIVE_DELAY_MS);
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
var OPENING = cssClasses.OPENING, OPEN = cssClasses.OPEN, CLOSING = cssClasses.CLOSING;
var REASON_ACTION = strings.REASON_ACTION, REASON_DISMISS = strings.REASON_DISMISS;
var MDCSnackbarFoundation = function(_super) {
  __extends(MDCSnackbarFoundation2, _super);
  function MDCSnackbarFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCSnackbarFoundation2.defaultAdapter), adapter)) || this;
    _this.opened = false;
    _this.animationFrame = 0;
    _this.animationTimer = 0;
    _this.autoDismissTimer = 0;
    _this.autoDismissTimeoutMs = numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
    _this.closeOnEscape = true;
    return _this;
  }
  Object.defineProperty(MDCSnackbarFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        announce: function() {
          return void 0;
        },
        notifyClosed: function() {
          return void 0;
        },
        notifyClosing: function() {
          return void 0;
        },
        notifyOpened: function() {
          return void 0;
        },
        notifyOpening: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCSnackbarFoundation2.prototype.destroy = function() {
    this.clearAutoDismissTimer();
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
    clearTimeout(this.animationTimer);
    this.animationTimer = 0;
    this.adapter.removeClass(OPENING);
    this.adapter.removeClass(OPEN);
    this.adapter.removeClass(CLOSING);
  };
  MDCSnackbarFoundation2.prototype.open = function() {
    var _this = this;
    this.clearAutoDismissTimer();
    this.opened = true;
    this.adapter.notifyOpening();
    this.adapter.removeClass(CLOSING);
    this.adapter.addClass(OPENING);
    this.adapter.announce();
    this.runNextAnimationFrame(function() {
      _this.adapter.addClass(OPEN);
      _this.animationTimer = setTimeout(function() {
        var timeoutMs = _this.getTimeoutMs();
        _this.handleAnimationTimerEnd();
        _this.adapter.notifyOpened();
        if (timeoutMs !== numbers.INDETERMINATE) {
          _this.autoDismissTimer = setTimeout(function() {
            _this.close(REASON_DISMISS);
          }, timeoutMs);
        }
      }, numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
    });
  };
  MDCSnackbarFoundation2.prototype.close = function(reason) {
    var _this = this;
    if (reason === void 0) {
      reason = "";
    }
    if (!this.opened) {
      return;
    }
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
    this.clearAutoDismissTimer();
    this.opened = false;
    this.adapter.notifyClosing(reason);
    this.adapter.addClass(cssClasses.CLOSING);
    this.adapter.removeClass(cssClasses.OPEN);
    this.adapter.removeClass(cssClasses.OPENING);
    clearTimeout(this.animationTimer);
    this.animationTimer = setTimeout(function() {
      _this.handleAnimationTimerEnd();
      _this.adapter.notifyClosed(reason);
    }, numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
  };
  MDCSnackbarFoundation2.prototype.isOpen = function() {
    return this.opened;
  };
  MDCSnackbarFoundation2.prototype.getTimeoutMs = function() {
    return this.autoDismissTimeoutMs;
  };
  MDCSnackbarFoundation2.prototype.setTimeoutMs = function(timeoutMs) {
    var minValue = numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
    var maxValue = numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;
    var indeterminateValue = numbers.INDETERMINATE;
    if (timeoutMs === numbers.INDETERMINATE || timeoutMs <= maxValue && timeoutMs >= minValue) {
      this.autoDismissTimeoutMs = timeoutMs;
    } else {
      throw new Error("\n        timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + "\n        (or " + indeterminateValue + " to disable), but got '" + timeoutMs + "'");
    }
  };
  MDCSnackbarFoundation2.prototype.getCloseOnEscape = function() {
    return this.closeOnEscape;
  };
  MDCSnackbarFoundation2.prototype.setCloseOnEscape = function(closeOnEscape) {
    this.closeOnEscape = closeOnEscape;
  };
  MDCSnackbarFoundation2.prototype.handleKeyDown = function(evt) {
    var isEscapeKey = evt.key === "Escape" || evt.keyCode === 27;
    if (isEscapeKey && this.getCloseOnEscape()) {
      this.close(REASON_DISMISS);
    }
  };
  MDCSnackbarFoundation2.prototype.handleActionButtonClick = function(_evt) {
    this.close(REASON_ACTION);
  };
  MDCSnackbarFoundation2.prototype.handleActionIconClick = function(_evt) {
    this.close(REASON_DISMISS);
  };
  MDCSnackbarFoundation2.prototype.clearAutoDismissTimer = function() {
    clearTimeout(this.autoDismissTimer);
    this.autoDismissTimer = 0;
  };
  MDCSnackbarFoundation2.prototype.handleAnimationTimerEnd = function() {
    this.animationTimer = 0;
    this.adapter.removeClass(cssClasses.OPENING);
    this.adapter.removeClass(cssClasses.CLOSING);
  };
  MDCSnackbarFoundation2.prototype.runNextAnimationFrame = function(callback) {
    var _this = this;
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = requestAnimationFrame(function() {
      _this.animationFrame = 0;
      clearTimeout(_this.animationTimer);
      _this.animationTimer = setTimeout(callback, 0);
    });
  };
  return MDCSnackbarFoundation2;
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
var SURFACE_SELECTOR = strings.SURFACE_SELECTOR, LABEL_SELECTOR = strings.LABEL_SELECTOR, ACTION_SELECTOR = strings.ACTION_SELECTOR, DISMISS_SELECTOR = strings.DISMISS_SELECTOR, OPENING_EVENT = strings.OPENING_EVENT, OPENED_EVENT = strings.OPENED_EVENT, CLOSING_EVENT = strings.CLOSING_EVENT, CLOSED_EVENT = strings.CLOSED_EVENT;
var MDCSnackbar = function(_super) {
  __extends(MDCSnackbar2, _super);
  function MDCSnackbar2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCSnackbar2.attachTo = function(root) {
    return new MDCSnackbar2(root);
  };
  MDCSnackbar2.prototype.initialize = function(announcerFactory) {
    if (announcerFactory === void 0) {
      announcerFactory = function() {
        return announce;
      };
    }
    this.announce = announcerFactory();
  };
  MDCSnackbar2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    this.surfaceEl = this.root.querySelector(SURFACE_SELECTOR);
    this.labelEl = this.root.querySelector(LABEL_SELECTOR);
    this.actionEl = this.root.querySelector(ACTION_SELECTOR);
    this.handleKeyDown = function(evt) {
      _this.foundation.handleKeyDown(evt);
    };
    this.handleSurfaceClick = function(evt) {
      var target = evt.target;
      if (_this.isActionButton(target)) {
        _this.foundation.handleActionButtonClick(evt);
      } else if (_this.isActionIcon(target)) {
        _this.foundation.handleActionIconClick(evt);
      }
    };
    this.registerKeyDownHandler(this.handleKeyDown);
    this.registerSurfaceClickHandler(this.handleSurfaceClick);
  };
  MDCSnackbar2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.deregisterKeyDownHandler(this.handleKeyDown);
    this.deregisterSurfaceClickHandler(this.handleSurfaceClick);
  };
  MDCSnackbar2.prototype.open = function() {
    this.foundation.open();
  };
  MDCSnackbar2.prototype.close = function(reason) {
    if (reason === void 0) {
      reason = "";
    }
    this.foundation.close(reason);
  };
  MDCSnackbar2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClass: function(className) {
        _this.root.classList.add(className);
      },
      announce: function() {
        _this.announce(_this.labelEl);
      },
      notifyClosed: function(reason) {
        return _this.emit(CLOSED_EVENT, reason ? { reason } : {});
      },
      notifyClosing: function(reason) {
        return _this.emit(CLOSING_EVENT, reason ? { reason } : {});
      },
      notifyOpened: function() {
        return _this.emit(OPENED_EVENT, {});
      },
      notifyOpening: function() {
        return _this.emit(OPENING_EVENT, {});
      },
      removeClass: function(className) {
        return _this.root.classList.remove(className);
      }
    };
    return new MDCSnackbarFoundation(adapter);
  };
  Object.defineProperty(MDCSnackbar2.prototype, "timeoutMs", {
    get: function() {
      return this.foundation.getTimeoutMs();
    },
    set: function(timeoutMs) {
      this.foundation.setTimeoutMs(timeoutMs);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar2.prototype, "closeOnEscape", {
    get: function() {
      return this.foundation.getCloseOnEscape();
    },
    set: function(closeOnEscape) {
      this.foundation.setCloseOnEscape(closeOnEscape);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar2.prototype, "isOpen", {
    get: function() {
      return this.foundation.isOpen();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar2.prototype, "labelText", {
    get: function() {
      return this.labelEl.textContent;
    },
    set: function(labelText) {
      this.labelEl.textContent = labelText;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar2.prototype, "actionButtonText", {
    get: function() {
      return this.actionEl.textContent;
    },
    set: function(actionButtonText) {
      this.actionEl.textContent = actionButtonText;
    },
    enumerable: false,
    configurable: true
  });
  MDCSnackbar2.prototype.registerKeyDownHandler = function(handler) {
    this.listen("keydown", handler);
  };
  MDCSnackbar2.prototype.deregisterKeyDownHandler = function(handler) {
    this.unlisten("keydown", handler);
  };
  MDCSnackbar2.prototype.registerSurfaceClickHandler = function(handler) {
    this.surfaceEl.addEventListener("click", handler);
  };
  MDCSnackbar2.prototype.deregisterSurfaceClickHandler = function(handler) {
    this.surfaceEl.removeEventListener("click", handler);
  };
  MDCSnackbar2.prototype.isActionButton = function(target) {
    return Boolean(closest(target, ACTION_SELECTOR));
  };
  MDCSnackbar2.prototype.isActionIcon = function(target) {
    return Boolean(closest(target, DISMISS_SELECTOR));
  };
  return MDCSnackbar2;
}(MDCComponent);
const inoSnackbarCss = '.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width: 480px), (max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0;}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size{width:36px;height:36px;padding:6px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px;}ino-snackbar{}ino-snackbar .ino-snackbar-layout-container{display:block;top:var(--ino-snackbar-top, 0);bottom:var(--ino-snackbar-bottom, auto);left:var(--ino-snackbar-left, auto);right:var(--ino-snackbar-right, 0)}ino-snackbar.ino-snackbar--type-info{--snackbar-color:#3d40f5;--snackbar-color-light:#efeffe}ino-snackbar.ino-snackbar--type-error{--snackbar-color:#eb003b;--snackbar-color-light:#ffd2dd}ino-snackbar.ino-snackbar--type-success{--snackbar-color:#9ccd00;--snackbar-color-light:#edffb4}ino-snackbar .ino-snackbar-container{margin-top:5px;margin-right:5px;background-color:white;border:0.3px solid var(--snackbar-color);border-radius:15px;box-shadow:0 1px 2px var(--snackbar-color-light);justify-content:space-between;min-width:auto;max-width:350px;padding:16px 45px 16px 25px}ino-snackbar .ino-snackbar-container:hover~.ino-snackbar-close-btn{display:inline-flex}ino-snackbar .ino-snackbar-container:before{display:none}ino-snackbar .ino-snackbar-close-btn{display:none;position:absolute;top:0;right:0;width:22px;height:22px;border-radius:30px;padding:0;background-color:white;box-shadow:0 3px 6px #00000029;pointer-events:auto;--ino-icon-button-icon-color:black !important;--ino-icon-button-size:22px;--ino-icon-button-icon-size:8px}ino-snackbar .ino-snackbar-close-btn:hover{display:inline-flex}ino-snackbar .ino-snackbar-icon-container{background-color:var(--snackbar-color-light);border-radius:50%;justify-content:center;align-items:center;height:30px;width:30px}ino-snackbar .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-color-primary:var(--snackbar-color)}ino-snackbar.ino-snackbar--type-info .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar.ino-snackbar--type-error .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar.ino-snackbar--type-success .ino-snackbar-icon-container ino-icon.ino-snackbar-icon{--ino-icon-width:$size;--ino-icon-height:$size}ino-snackbar .ino-snackbar-message-container{display:flex;flex-direction:column;column-gap:7px;padding:0 0 0 20px}ino-snackbar .ino-snackbar-message-container .ino-snackbar-text-container{color:#74758b}ino-snackbar .ino-snackbar-message-container .ino-snackbar-action-btn{border:none;background-color:transparent;color:var(--snackbar-color);font-size:12px;font-weight:600;cursor:pointer;padding-left:0;padding-top:5px}';
let Snackbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.actionClick = createEvent(this, "actionClick", 7);
    this.hideEl = createEvent(this, "hideEl", 7);
    this.type = "info";
    this.timeout = 5e3;
    this.stayVisibleOnHover = false;
    this.setupTimeout = () => {
      this.snackbarInstance.timeoutMs = -1;
      if (this.timeout >= 0) {
        this.nodeTimeout = setTimeout(() => this.snackbarInstance.close(), this.timeout);
      }
    };
    this.interruptTimeout = () => {
      if (this.nodeTimeout) {
        clearTimeout(this.nodeTimeout);
      }
    };
    this.handleSnackbarHide = (e) => {
      this.hideEl.emit();
      e.stopPropagation();
    };
    this.mapTypeToIconName = (type) => {
      switch (type) {
        case "success":
          return "snackbar-checkmark";
        case "error":
          return "snackbar-error";
        case "info":
        default:
          return "snackbar-information";
      }
    };
  }
  componentDidLoad() {
    this.snackbarInstance = new MDCSnackbar(this.snackbarElement);
    this.snackbarElement.addEventListener("MDCSnackbar:closing", this.handleSnackbarHide);
    this.setupTimeout();
    if (this.stayVisibleOnHover) {
      this.snackbarElement.addEventListener("mouseenter", this.interruptTimeout);
      this.snackbarElement.addEventListener("mouseleave", this.setupTimeout);
    }
    this.snackbarInstance.open();
    if (this.message) {
      console.warn('[ino-snackbar] The attribute "message" is deprecated, please use the default slot instead.');
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.snackbarInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    this.snackbarElement.removeEventListener("MDCSnackbar:closing", this.handleSnackbarHide);
    this.snackbarElement.removeEventListener("mouseenter", this.interruptTimeout);
    this.snackbarElement.removeEventListener("mouseleave", this.setupTimeout);
  }
  render() {
    const hasActionText = Boolean(this.actionText);
    const hostClasses = classnames(`ino-snackbar--type-${this.type}`);
    const snackbarClasses = classnames("mdc-snackbar", "ino-snackbar-layout-container");
    return h(Host, { class: hostClasses }, h("div", { ref: (el) => this.snackbarElement = el, class: snackbarClasses, "aria-live": "assertive", "aria-atomic": "true" }, h("div", { class: "mdc-snackbar__surface ino-snackbar-container" }, h("div", { class: "mdc-snackbar__actions ino-snackbar-icon-container" }, h("ino-icon", { class: "ino-snackbar-icon", icon: this.mapTypeToIconName(this.type) })), h("div", { class: "mdc-snackbar__label ino-snackbar-message-container", "aria-atomic": "false" }, h("div", { class: "ino-snackbar-text-container" }, this.message ? this.message : h("slot", null)), hasActionText && h("div", null, h("button", { onClick: this.actionClick.emit, class: "ino-snackbar-action-btn" }, this.actionText)))), h("ino-icon-button", { onClick: this.handleSnackbarHide, icon: "close", class: "ino-snackbar-close-btn", "color-scheme": "dark" })));
  }
  get el() {
    return getElement(this);
  }
};
Snackbar.style = inoSnackbarCss;
export { Snackbar as ino_snackbar };
