import { _ as __extends, a as __assign, c as MDCFoundation, M as MDCComponent } from "./component-97c8fef9.061cf906.js";
import { F as FocusTrap } from "./focus-trap-ee7050ec.2579e912.js";
import { M as MDCList } from "./component-5bb46374.0386aca6.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
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
function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
  return focusTrapFactory(surfaceEl, {
    skipInitialFocus: true
  });
}
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
  ANIMATE: "mdc-drawer--animate",
  CLOSING: "mdc-drawer--closing",
  DISMISSIBLE: "mdc-drawer--dismissible",
  MODAL: "mdc-drawer--modal",
  OPEN: "mdc-drawer--open",
  OPENING: "mdc-drawer--opening",
  ROOT: "mdc-drawer"
};
var strings$1 = {
  APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
  CLOSE_EVENT: "MDCDrawer:closed",
  OPEN_EVENT: "MDCDrawer:opened",
  SCRIM_SELECTOR: ".mdc-drawer-scrim",
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  LIST_ITEM_ACTIVATED_SELECTOR: ".mdc-list-item--activated,.mdc-deprecated-list-item--activated"
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
var MDCDismissibleDrawerFoundation = function(_super) {
  __extends(MDCDismissibleDrawerFoundation2, _super);
  function MDCDismissibleDrawerFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCDismissibleDrawerFoundation2.defaultAdapter), adapter)) || this;
    _this.animationFrame = 0;
    _this.animationTimer = 0;
    return _this;
  }
  Object.defineProperty(MDCDismissibleDrawerFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCDismissibleDrawerFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCDismissibleDrawerFoundation2, "defaultAdapter", {
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
        elementHasClass: function() {
          return false;
        },
        notifyClose: function() {
          return void 0;
        },
        notifyOpen: function() {
          return void 0;
        },
        saveFocus: function() {
          return void 0;
        },
        restoreFocus: function() {
          return void 0;
        },
        focusActiveNavigationItem: function() {
          return void 0;
        },
        trapFocus: function() {
          return void 0;
        },
        releaseFocus: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCDismissibleDrawerFoundation2.prototype.destroy = function() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
  };
  MDCDismissibleDrawerFoundation2.prototype.open = function() {
    var _this = this;
    if (this.isOpen() || this.isOpening() || this.isClosing()) {
      return;
    }
    this.adapter.addClass(cssClasses$1.OPEN);
    this.adapter.addClass(cssClasses$1.ANIMATE);
    this.runNextAnimationFrame(function() {
      _this.adapter.addClass(cssClasses$1.OPENING);
    });
    this.adapter.saveFocus();
  };
  MDCDismissibleDrawerFoundation2.prototype.close = function() {
    if (!this.isOpen() || this.isOpening() || this.isClosing()) {
      return;
    }
    this.adapter.addClass(cssClasses$1.CLOSING);
  };
  MDCDismissibleDrawerFoundation2.prototype.isOpen = function() {
    return this.adapter.hasClass(cssClasses$1.OPEN);
  };
  MDCDismissibleDrawerFoundation2.prototype.isOpening = function() {
    return this.adapter.hasClass(cssClasses$1.OPENING) || this.adapter.hasClass(cssClasses$1.ANIMATE);
  };
  MDCDismissibleDrawerFoundation2.prototype.isClosing = function() {
    return this.adapter.hasClass(cssClasses$1.CLOSING);
  };
  MDCDismissibleDrawerFoundation2.prototype.handleKeydown = function(evt) {
    var keyCode = evt.keyCode, key = evt.key;
    var isEscape = key === "Escape" || keyCode === 27;
    if (isEscape) {
      this.close();
    }
  };
  MDCDismissibleDrawerFoundation2.prototype.handleTransitionEnd = function(evt) {
    var OPENING = cssClasses$1.OPENING, CLOSING = cssClasses$1.CLOSING, OPEN = cssClasses$1.OPEN, ANIMATE = cssClasses$1.ANIMATE, ROOT = cssClasses$1.ROOT;
    var isRootElement = this.isElement(evt.target) && this.adapter.elementHasClass(evt.target, ROOT);
    if (!isRootElement) {
      return;
    }
    if (this.isClosing()) {
      this.adapter.removeClass(OPEN);
      this.closed();
      this.adapter.restoreFocus();
      this.adapter.notifyClose();
    } else {
      this.adapter.focusActiveNavigationItem();
      this.opened();
      this.adapter.notifyOpen();
    }
    this.adapter.removeClass(ANIMATE);
    this.adapter.removeClass(OPENING);
    this.adapter.removeClass(CLOSING);
  };
  MDCDismissibleDrawerFoundation2.prototype.opened = function() {
  };
  MDCDismissibleDrawerFoundation2.prototype.closed = function() {
  };
  MDCDismissibleDrawerFoundation2.prototype.runNextAnimationFrame = function(callback) {
    var _this = this;
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = requestAnimationFrame(function() {
      _this.animationFrame = 0;
      clearTimeout(_this.animationTimer);
      _this.animationTimer = setTimeout(callback, 0);
    });
  };
  MDCDismissibleDrawerFoundation2.prototype.isElement = function(element) {
    return Boolean(element.classList);
  };
  return MDCDismissibleDrawerFoundation2;
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
var MDCModalDrawerFoundation = function(_super) {
  __extends(MDCModalDrawerFoundation2, _super);
  function MDCModalDrawerFoundation2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCModalDrawerFoundation2.prototype.handleScrimClick = function() {
    this.close();
  };
  MDCModalDrawerFoundation2.prototype.opened = function() {
    this.adapter.trapFocus();
  };
  MDCModalDrawerFoundation2.prototype.closed = function() {
    this.adapter.releaseFocus();
  };
  return MDCModalDrawerFoundation2;
}(MDCDismissibleDrawerFoundation);
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
var cssClasses = MDCDismissibleDrawerFoundation.cssClasses, strings = MDCDismissibleDrawerFoundation.strings;
var MDCDrawer = function(_super) {
  __extends(MDCDrawer2, _super);
  function MDCDrawer2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCDrawer2.attachTo = function(root) {
    return new MDCDrawer2(root);
  };
  Object.defineProperty(MDCDrawer2.prototype, "open", {
    get: function() {
      return this.foundation.isOpen();
    },
    set: function(isOpen) {
      if (isOpen) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCDrawer2.prototype, "list", {
    get: function() {
      return this.innerList;
    },
    enumerable: false,
    configurable: true
  });
  MDCDrawer2.prototype.initialize = function(focusTrapFactory, listFactory) {
    if (focusTrapFactory === void 0) {
      focusTrapFactory = function(el) {
        return new FocusTrap(el);
      };
    }
    if (listFactory === void 0) {
      listFactory = function(el) {
        return new MDCList(el);
      };
    }
    var listEl = this.root.querySelector(strings.LIST_SELECTOR);
    if (listEl) {
      this.innerList = listFactory(listEl);
      this.innerList.wrapFocus = true;
    }
    this.focusTrapFactory = focusTrapFactory;
  };
  MDCDrawer2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    var MODAL = cssClasses.MODAL;
    var SCRIM_SELECTOR = strings.SCRIM_SELECTOR;
    this.scrim = this.root.parentNode.querySelector(SCRIM_SELECTOR);
    if (this.scrim && this.root.classList.contains(MODAL)) {
      this.handleScrimClick = function() {
        return _this.foundation.handleScrimClick();
      };
      this.scrim.addEventListener("click", this.handleScrimClick);
      this.focusTrap = createFocusTrapInstance(this.root, this.focusTrapFactory);
    }
    this.handleKeydown = function(evt) {
      _this.foundation.handleKeydown(evt);
    };
    this.handleTransitionEnd = function(evt) {
      _this.foundation.handleTransitionEnd(evt);
    };
    this.listen("keydown", this.handleKeydown);
    this.listen("transitionend", this.handleTransitionEnd);
  };
  MDCDrawer2.prototype.destroy = function() {
    this.unlisten("keydown", this.handleKeydown);
    this.unlisten("transitionend", this.handleTransitionEnd);
    if (this.innerList) {
      this.innerList.destroy();
    }
    var MODAL = cssClasses.MODAL;
    if (this.scrim && this.handleScrimClick && this.root.classList.contains(MODAL)) {
      this.scrim.removeEventListener("click", this.handleScrimClick);
      this.open = false;
    }
  };
  MDCDrawer2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClass: function(className) {
        _this.root.classList.add(className);
      },
      removeClass: function(className) {
        _this.root.classList.remove(className);
      },
      hasClass: function(className) {
        return _this.root.classList.contains(className);
      },
      elementHasClass: function(element, className) {
        return element.classList.contains(className);
      },
      saveFocus: function() {
        _this.previousFocus = document.activeElement;
      },
      restoreFocus: function() {
        var previousFocus = _this.previousFocus;
        if (previousFocus && previousFocus.focus && _this.root.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: function() {
        var activeNavItemEl = _this.root.querySelector(strings.LIST_ITEM_ACTIVATED_SELECTOR);
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: function() {
        _this.emit(strings.CLOSE_EVENT, {}, true);
      },
      notifyOpen: function() {
        _this.emit(strings.OPEN_EVENT, {}, true);
      },
      trapFocus: function() {
        _this.focusTrap.trapFocus();
      },
      releaseFocus: function() {
        _this.focusTrap.releaseFocus();
      }
    };
    var DISMISSIBLE = cssClasses.DISMISSIBLE, MODAL = cssClasses.MODAL;
    if (this.root.classList.contains(DISMISSIBLE)) {
      return new MDCDismissibleDrawerFoundation(adapter);
    } else if (this.root.classList.contains(MODAL)) {
      return new MDCModalDrawerFoundation(adapter);
    } else {
      throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
    }
  };
  return MDCDrawer2;
}(MDCComponent);
export { MDCDrawer as M };
