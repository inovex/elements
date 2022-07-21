/*!
 * Crafted with ❤ by inovex GmbH
 */
/**
 * @license
 * Copyright 2020 Google Inc.
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
var FOCUS_SENTINEL_CLASS = "mdc-dom-focus-sentinel";
var FocusTrap = function() {
  function FocusTrap2(root, options) {
    if (options === void 0) {
      options = {};
    }
    this.root = root;
    this.options = options;
    this.elFocusedBeforeTrapFocus = null;
  }
  FocusTrap2.prototype.trapFocus = function() {
    var focusableEls = this.getFocusableElements(this.root);
    if (focusableEls.length === 0) {
      throw new Error("FocusTrap: Element must have at least one focusable child.");
    }
    this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.wrapTabFocus(this.root);
    if (!this.options.skipInitialFocus) {
      this.focusInitialElement(focusableEls, this.options.initialFocusEl);
    }
  };
  FocusTrap2.prototype.releaseFocus = function() {
    [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS)).forEach(function(sentinelEl) {
      sentinelEl.parentElement.removeChild(sentinelEl);
    });
    if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) {
      this.elFocusedBeforeTrapFocus.focus();
    }
  };
  FocusTrap2.prototype.wrapTabFocus = function(el) {
    var _this = this;
    var sentinelStart = this.createSentinel();
    var sentinelEnd = this.createSentinel();
    sentinelStart.addEventListener("focus", function() {
      var focusableEls = _this.getFocusableElements(el);
      if (focusableEls.length > 0) {
        focusableEls[focusableEls.length - 1].focus();
      }
    });
    sentinelEnd.addEventListener("focus", function() {
      var focusableEls = _this.getFocusableElements(el);
      if (focusableEls.length > 0) {
        focusableEls[0].focus();
      }
    });
    el.insertBefore(sentinelStart, el.children[0]);
    el.appendChild(sentinelEnd);
  };
  FocusTrap2.prototype.focusInitialElement = function(focusableEls, initialFocusEl) {
    var focusIndex = 0;
    if (initialFocusEl) {
      focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
    }
    focusableEls[focusIndex].focus();
  };
  FocusTrap2.prototype.getFocusableElements = function(root) {
    var focusableEls = [].slice.call(root.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
    return focusableEls.filter(function(el) {
      var isDisabledOrHidden = el.getAttribute("aria-disabled") === "true" || el.getAttribute("disabled") != null || el.getAttribute("hidden") != null || el.getAttribute("aria-hidden") === "true";
      var isTabbableAndVisible = el.tabIndex >= 0 && el.getBoundingClientRect().width > 0 && !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
      var isProgrammaticallyHidden = false;
      if (isTabbableAndVisible) {
        var style = getComputedStyle(el);
        isProgrammaticallyHidden = style.display === "none" || style.visibility === "hidden";
      }
      return isTabbableAndVisible && !isProgrammaticallyHidden;
    });
  };
  FocusTrap2.prototype.createSentinel = function() {
    var sentinel = document.createElement("div");
    sentinel.setAttribute("tabindex", "0");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.classList.add(FOCUS_SENTINEL_CLASS);
    return sentinel;
  };
  return FocusTrap2;
}();
export { FocusTrap as F };
