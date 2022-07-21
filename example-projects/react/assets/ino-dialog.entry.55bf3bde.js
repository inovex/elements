import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as closest, m as matches } from "./ponyfill-495ec32d.2f34f215.js";
import { _ as __extends, b as __values, M as MDCComponent, a as __assign, c as MDCFoundation } from "./component-97c8fef9.061cf906.js";
import { F as FocusTrap } from "./focus-trap-ee7050ec.2579e912.js";
import { M as MDCRipple } from "./component-780a5882.fd4d53f9.js";
import { A as AnimationFrame } from "./animationframe-28b556b2.8bf9b754.js";
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
function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
  return focusTrapFactory(surfaceEl, { initialFocusEl });
}
function isScrollable(el) {
  return el ? el.scrollHeight > el.offsetHeight : false;
}
function isScrollAtTop(el) {
  return el ? el.scrollTop === 0 : false;
}
function isScrollAtBottom(el) {
  return el ? Math.ceil(el.scrollHeight - el.scrollTop) === el.clientHeight : false;
}
function areTopsMisaligned(els) {
  var tops = /* @__PURE__ */ new Set();
  [].forEach.call(els, function(el) {
    return tops.add(el.offsetTop);
  });
  return tops.size > 1;
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
var cssClasses = {
  CLOSING: "mdc-dialog--closing",
  OPEN: "mdc-dialog--open",
  OPENING: "mdc-dialog--opening",
  SCROLLABLE: "mdc-dialog--scrollable",
  SCROLL_LOCK: "mdc-dialog-scroll-lock",
  STACKED: "mdc-dialog--stacked",
  FULLSCREEN: "mdc-dialog--fullscreen",
  SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header",
  SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer",
  SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown",
  SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing",
  SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding",
  SCRIM_HIDDEN: "mdc-dialog__scrim--hidden"
};
var strings$1 = {
  ACTION_ATTRIBUTE: "data-mdc-dialog-action",
  BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
  BUTTON_SELECTOR: ".mdc-dialog__button",
  CLOSED_EVENT: "MDCDialog:closed",
  CLOSE_ACTION: "close",
  CLOSING_EVENT: "MDCDialog:closing",
  CONTAINER_SELECTOR: ".mdc-dialog__container",
  CONTENT_SELECTOR: ".mdc-dialog__content",
  DESTROY_ACTION: "destroy",
  INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
  OPENED_EVENT: "MDCDialog:opened",
  OPENING_EVENT: "MDCDialog:opening",
  SCRIM_SELECTOR: ".mdc-dialog__scrim",
  SUPPRESS_DEFAULT_PRESS_SELECTOR: [
    "textarea",
    ".mdc-menu .mdc-list-item",
    ".mdc-menu .mdc-deprecated-list-item"
  ].join(", "),
  SURFACE_SELECTOR: ".mdc-dialog__surface"
};
var numbers = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
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
var AnimationKeys;
(function(AnimationKeys2) {
  AnimationKeys2["POLL_SCROLL_POS"] = "poll_scroll_position";
  AnimationKeys2["POLL_LAYOUT_CHANGE"] = "poll_layout_change";
})(AnimationKeys || (AnimationKeys = {}));
var MDCDialogFoundation = function(_super) {
  __extends(MDCDialogFoundation2, _super);
  function MDCDialogFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCDialogFoundation2.defaultAdapter), adapter)) || this;
    _this.dialogOpen = false;
    _this.isFullscreen = false;
    _this.animationFrame = 0;
    _this.animationTimer = 0;
    _this.escapeKeyAction = strings$1.CLOSE_ACTION;
    _this.scrimClickAction = strings$1.CLOSE_ACTION;
    _this.autoStackButtons = true;
    _this.areButtonsStacked = false;
    _this.suppressDefaultPressSelector = strings$1.SUPPRESS_DEFAULT_PRESS_SELECTOR;
    _this.animFrame = new AnimationFrame();
    _this.contentScrollHandler = function() {
      _this.handleScrollEvent();
    };
    _this.windowResizeHandler = function() {
      _this.layout();
    };
    _this.windowOrientationChangeHandler = function() {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCDialogFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addBodyClass: function() {
          return void 0;
        },
        addClass: function() {
          return void 0;
        },
        areButtonsStacked: function() {
          return false;
        },
        clickDefaultButton: function() {
          return void 0;
        },
        eventTargetMatches: function() {
          return false;
        },
        getActionFromEvent: function() {
          return "";
        },
        getInitialFocusEl: function() {
          return null;
        },
        hasClass: function() {
          return false;
        },
        isContentScrollable: function() {
          return false;
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
        releaseFocus: function() {
          return void 0;
        },
        removeBodyClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        reverseButtons: function() {
          return void 0;
        },
        trapFocus: function() {
          return void 0;
        },
        registerContentEventHandler: function() {
          return void 0;
        },
        deregisterContentEventHandler: function() {
          return void 0;
        },
        isScrollableContentAtTop: function() {
          return false;
        },
        isScrollableContentAtBottom: function() {
          return false;
        },
        registerWindowEventHandler: function() {
          return void 0;
        },
        deregisterWindowEventHandler: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCDialogFoundation2.prototype.init = function() {
    if (this.adapter.hasClass(cssClasses.STACKED)) {
      this.setAutoStackButtons(false);
    }
    this.isFullscreen = this.adapter.hasClass(cssClasses.FULLSCREEN);
  };
  MDCDialogFoundation2.prototype.destroy = function() {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
      this.handleAnimationTimerEnd();
    }
    if (this.isFullscreen) {
      this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler);
    }
    this.animFrame.cancelAll();
    this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler);
    this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
  };
  MDCDialogFoundation2.prototype.open = function(dialogOptions) {
    var _this = this;
    this.dialogOpen = true;
    this.adapter.notifyOpening();
    this.adapter.addClass(cssClasses.OPENING);
    if (this.isFullscreen) {
      this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler);
    }
    if (dialogOptions && dialogOptions.isAboveFullscreenDialog) {
      this.adapter.addClass(cssClasses.SCRIM_HIDDEN);
    }
    this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler);
    this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    this.runNextAnimationFrame(function() {
      _this.adapter.addClass(cssClasses.OPEN);
      _this.adapter.addBodyClass(cssClasses.SCROLL_LOCK);
      _this.layout();
      _this.animationTimer = setTimeout(function() {
        _this.handleAnimationTimerEnd();
        _this.adapter.trapFocus(_this.adapter.getInitialFocusEl());
        _this.adapter.notifyOpened();
      }, numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
    });
  };
  MDCDialogFoundation2.prototype.close = function(action) {
    var _this = this;
    if (action === void 0) {
      action = "";
    }
    if (!this.dialogOpen) {
      return;
    }
    this.dialogOpen = false;
    this.adapter.notifyClosing(action);
    this.adapter.addClass(cssClasses.CLOSING);
    this.adapter.removeClass(cssClasses.OPEN);
    this.adapter.removeBodyClass(cssClasses.SCROLL_LOCK);
    if (this.isFullscreen) {
      this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler);
    }
    this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler);
    this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
    clearTimeout(this.animationTimer);
    this.animationTimer = setTimeout(function() {
      _this.adapter.releaseFocus();
      _this.handleAnimationTimerEnd();
      _this.adapter.notifyClosed(action);
    }, numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
  };
  MDCDialogFoundation2.prototype.showSurfaceScrim = function() {
    var _this = this;
    this.adapter.addClass(cssClasses.SURFACE_SCRIM_SHOWING);
    this.runNextAnimationFrame(function() {
      _this.adapter.addClass(cssClasses.SURFACE_SCRIM_SHOWN);
    });
  };
  MDCDialogFoundation2.prototype.hideSurfaceScrim = function() {
    this.adapter.removeClass(cssClasses.SURFACE_SCRIM_SHOWN);
    this.adapter.addClass(cssClasses.SURFACE_SCRIM_HIDING);
  };
  MDCDialogFoundation2.prototype.handleSurfaceScrimTransitionEnd = function() {
    this.adapter.removeClass(cssClasses.SURFACE_SCRIM_HIDING);
    this.adapter.removeClass(cssClasses.SURFACE_SCRIM_SHOWING);
  };
  MDCDialogFoundation2.prototype.isOpen = function() {
    return this.dialogOpen;
  };
  MDCDialogFoundation2.prototype.getEscapeKeyAction = function() {
    return this.escapeKeyAction;
  };
  MDCDialogFoundation2.prototype.setEscapeKeyAction = function(action) {
    this.escapeKeyAction = action;
  };
  MDCDialogFoundation2.prototype.getScrimClickAction = function() {
    return this.scrimClickAction;
  };
  MDCDialogFoundation2.prototype.setScrimClickAction = function(action) {
    this.scrimClickAction = action;
  };
  MDCDialogFoundation2.prototype.getAutoStackButtons = function() {
    return this.autoStackButtons;
  };
  MDCDialogFoundation2.prototype.setAutoStackButtons = function(autoStack) {
    this.autoStackButtons = autoStack;
  };
  MDCDialogFoundation2.prototype.getSuppressDefaultPressSelector = function() {
    return this.suppressDefaultPressSelector;
  };
  MDCDialogFoundation2.prototype.setSuppressDefaultPressSelector = function(selector) {
    this.suppressDefaultPressSelector = selector;
  };
  MDCDialogFoundation2.prototype.layout = function() {
    var _this = this;
    this.animFrame.request(AnimationKeys.POLL_LAYOUT_CHANGE, function() {
      _this.layoutInternal();
    });
  };
  MDCDialogFoundation2.prototype.handleClick = function(evt) {
    var isScrim = this.adapter.eventTargetMatches(evt.target, strings$1.SCRIM_SELECTOR);
    if (isScrim && this.scrimClickAction !== "") {
      this.close(this.scrimClickAction);
    } else {
      var action = this.adapter.getActionFromEvent(evt);
      if (action) {
        this.close(action);
      }
    }
  };
  MDCDialogFoundation2.prototype.handleKeydown = function(evt) {
    var isEnter = evt.key === "Enter" || evt.keyCode === 13;
    if (!isEnter) {
      return;
    }
    var action = this.adapter.getActionFromEvent(evt);
    if (action) {
      return;
    }
    var target = evt.composedPath ? evt.composedPath()[0] : evt.target;
    var isDefault = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(target, this.suppressDefaultPressSelector) : true;
    if (isEnter && isDefault) {
      this.adapter.clickDefaultButton();
    }
  };
  MDCDialogFoundation2.prototype.handleDocumentKeydown = function(evt) {
    var isEscape = evt.key === "Escape" || evt.keyCode === 27;
    if (isEscape && this.escapeKeyAction !== "") {
      this.close(this.escapeKeyAction);
    }
  };
  MDCDialogFoundation2.prototype.handleScrollEvent = function() {
    var _this = this;
    this.animFrame.request(AnimationKeys.POLL_SCROLL_POS, function() {
      _this.toggleScrollDividerHeader();
      _this.toggleScrollDividerFooter();
    });
  };
  MDCDialogFoundation2.prototype.layoutInternal = function() {
    if (this.autoStackButtons) {
      this.detectStackedButtons();
    }
    this.toggleScrollableClasses();
  };
  MDCDialogFoundation2.prototype.handleAnimationTimerEnd = function() {
    this.animationTimer = 0;
    this.adapter.removeClass(cssClasses.OPENING);
    this.adapter.removeClass(cssClasses.CLOSING);
  };
  MDCDialogFoundation2.prototype.runNextAnimationFrame = function(callback) {
    var _this = this;
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = requestAnimationFrame(function() {
      _this.animationFrame = 0;
      clearTimeout(_this.animationTimer);
      _this.animationTimer = setTimeout(callback, 0);
    });
  };
  MDCDialogFoundation2.prototype.detectStackedButtons = function() {
    this.adapter.removeClass(cssClasses.STACKED);
    var areButtonsStacked = this.adapter.areButtonsStacked();
    if (areButtonsStacked) {
      this.adapter.addClass(cssClasses.STACKED);
    }
    if (areButtonsStacked !== this.areButtonsStacked) {
      this.adapter.reverseButtons();
      this.areButtonsStacked = areButtonsStacked;
    }
  };
  MDCDialogFoundation2.prototype.toggleScrollableClasses = function() {
    this.adapter.removeClass(cssClasses.SCROLLABLE);
    if (this.adapter.isContentScrollable()) {
      this.adapter.addClass(cssClasses.SCROLLABLE);
      if (this.isFullscreen) {
        this.toggleScrollDividerHeader();
        this.toggleScrollDividerFooter();
      }
    }
  };
  MDCDialogFoundation2.prototype.toggleScrollDividerHeader = function() {
    if (!this.adapter.isScrollableContentAtTop()) {
      this.adapter.addClass(cssClasses.SCROLL_DIVIDER_HEADER);
    } else if (this.adapter.hasClass(cssClasses.SCROLL_DIVIDER_HEADER)) {
      this.adapter.removeClass(cssClasses.SCROLL_DIVIDER_HEADER);
    }
  };
  MDCDialogFoundation2.prototype.toggleScrollDividerFooter = function() {
    if (!this.adapter.isScrollableContentAtBottom()) {
      this.adapter.addClass(cssClasses.SCROLL_DIVIDER_FOOTER);
    } else if (this.adapter.hasClass(cssClasses.SCROLL_DIVIDER_FOOTER)) {
      this.adapter.removeClass(cssClasses.SCROLL_DIVIDER_FOOTER);
    }
  };
  return MDCDialogFoundation2;
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
var strings = MDCDialogFoundation.strings;
var MDCDialog = function(_super) {
  __extends(MDCDialog2, _super);
  function MDCDialog2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Object.defineProperty(MDCDialog2.prototype, "isOpen", {
    get: function() {
      return this.foundation.isOpen();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCDialog2.prototype, "escapeKeyAction", {
    get: function() {
      return this.foundation.getEscapeKeyAction();
    },
    set: function(action) {
      this.foundation.setEscapeKeyAction(action);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCDialog2.prototype, "scrimClickAction", {
    get: function() {
      return this.foundation.getScrimClickAction();
    },
    set: function(action) {
      this.foundation.setScrimClickAction(action);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCDialog2.prototype, "autoStackButtons", {
    get: function() {
      return this.foundation.getAutoStackButtons();
    },
    set: function(autoStack) {
      this.foundation.setAutoStackButtons(autoStack);
    },
    enumerable: false,
    configurable: true
  });
  MDCDialog2.attachTo = function(root) {
    return new MDCDialog2(root);
  };
  MDCDialog2.prototype.initialize = function(focusTrapFactory) {
    var e_1, _a;
    if (focusTrapFactory === void 0) {
      focusTrapFactory = function(el, focusOptions) {
        return new FocusTrap(el, focusOptions);
      };
    }
    var container = this.root.querySelector(strings.CONTAINER_SELECTOR);
    if (!container) {
      throw new Error("Dialog component requires a " + strings.CONTAINER_SELECTOR + " container element");
    }
    this.container = container;
    this.content = this.root.querySelector(strings.CONTENT_SELECTOR);
    this.buttons = [].slice.call(this.root.querySelectorAll(strings.BUTTON_SELECTOR));
    this.defaultButton = this.root.querySelector("[" + strings.BUTTON_DEFAULT_ATTRIBUTE + "]");
    this.focusTrapFactory = focusTrapFactory;
    this.buttonRipples = [];
    try {
      for (var _b = __values(this.buttons), _c = _b.next(); !_c.done; _c = _b.next()) {
        var buttonEl = _c.value;
        this.buttonRipples.push(new MDCRipple(buttonEl));
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
  };
  MDCDialog2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    this.focusTrap = createFocusTrapInstance(this.container, this.focusTrapFactory, this.getInitialFocusEl() || void 0);
    this.handleClick = this.foundation.handleClick.bind(this.foundation);
    this.handleKeydown = this.foundation.handleKeydown.bind(this.foundation);
    this.handleDocumentKeydown = this.foundation.handleDocumentKeydown.bind(this.foundation);
    this.handleOpening = function() {
      document.addEventListener("keydown", _this.handleDocumentKeydown);
    };
    this.handleClosing = function() {
      document.removeEventListener("keydown", _this.handleDocumentKeydown);
    };
    this.listen("click", this.handleClick);
    this.listen("keydown", this.handleKeydown);
    this.listen(strings.OPENING_EVENT, this.handleOpening);
    this.listen(strings.CLOSING_EVENT, this.handleClosing);
  };
  MDCDialog2.prototype.destroy = function() {
    this.unlisten("click", this.handleClick);
    this.unlisten("keydown", this.handleKeydown);
    this.unlisten(strings.OPENING_EVENT, this.handleOpening);
    this.unlisten(strings.CLOSING_EVENT, this.handleClosing);
    this.handleClosing();
    this.buttonRipples.forEach(function(ripple) {
      ripple.destroy();
    });
    _super.prototype.destroy.call(this);
  };
  MDCDialog2.prototype.layout = function() {
    this.foundation.layout();
  };
  MDCDialog2.prototype.open = function() {
    this.foundation.open();
  };
  MDCDialog2.prototype.close = function(action) {
    if (action === void 0) {
      action = "";
    }
    this.foundation.close(action);
  };
  MDCDialog2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addBodyClass: function(className) {
        return document.body.classList.add(className);
      },
      addClass: function(className) {
        return _this.root.classList.add(className);
      },
      areButtonsStacked: function() {
        return areTopsMisaligned(_this.buttons);
      },
      clickDefaultButton: function() {
        if (_this.defaultButton && !_this.defaultButton.disabled) {
          _this.defaultButton.click();
        }
      },
      eventTargetMatches: function(target, selector) {
        return target ? matches(target, selector) : false;
      },
      getActionFromEvent: function(evt) {
        if (!evt.target) {
          return "";
        }
        var element = closest(evt.target, "[" + strings.ACTION_ATTRIBUTE + "]");
        return element && element.getAttribute(strings.ACTION_ATTRIBUTE);
      },
      getInitialFocusEl: function() {
        return _this.getInitialFocusEl();
      },
      hasClass: function(className) {
        return _this.root.classList.contains(className);
      },
      isContentScrollable: function() {
        return isScrollable(_this.content);
      },
      notifyClosed: function(action) {
        return _this.emit(strings.CLOSED_EVENT, action ? { action } : {});
      },
      notifyClosing: function(action) {
        return _this.emit(strings.CLOSING_EVENT, action ? { action } : {});
      },
      notifyOpened: function() {
        return _this.emit(strings.OPENED_EVENT, {});
      },
      notifyOpening: function() {
        return _this.emit(strings.OPENING_EVENT, {});
      },
      releaseFocus: function() {
        _this.focusTrap.releaseFocus();
      },
      removeBodyClass: function(className) {
        return document.body.classList.remove(className);
      },
      removeClass: function(className) {
        return _this.root.classList.remove(className);
      },
      reverseButtons: function() {
        _this.buttons.reverse();
        _this.buttons.forEach(function(button) {
          button.parentElement.appendChild(button);
        });
      },
      trapFocus: function() {
        _this.focusTrap.trapFocus();
      },
      registerContentEventHandler: function(evt, handler) {
        if (_this.content instanceof HTMLElement) {
          _this.content.addEventListener(evt, handler);
        }
      },
      deregisterContentEventHandler: function(evt, handler) {
        if (_this.content instanceof HTMLElement) {
          _this.content.removeEventListener(evt, handler);
        }
      },
      isScrollableContentAtTop: function() {
        return isScrollAtTop(_this.content);
      },
      isScrollableContentAtBottom: function() {
        return isScrollAtBottom(_this.content);
      },
      registerWindowEventHandler: function(evt, handler) {
        window.addEventListener(evt, handler);
      },
      deregisterWindowEventHandler: function(evt, handler) {
        window.removeEventListener(evt, handler);
      }
    };
    return new MDCDialogFoundation(adapter);
  };
  MDCDialog2.prototype.getInitialFocusEl = function() {
    return this.root.querySelector("[" + strings.INITIAL_FOCUS_ATTRIBUTE + "]");
  };
  return MDCDialog2;
}(MDCComponent);
const inoDialogCss = '.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0, 0, 0, 0.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0, 0, 0, 0.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-dialog__title-icon{}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media (max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media (min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.mdc-dialog .mdc-dialog__container{}}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media (max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media (max-width: 720px) and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media (max-width: 720px) and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media (max-width: 720px) and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media (max-width: 720px) and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media (max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media (max-width: 720px) and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media (max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media (min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right;}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right;}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px;}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0;}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left;}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}:host{}:host .mdc-dialog__scrim{background-color:var(--ino-dialog-overlay-background-color, rgba(0, 0, 0, 0.32))}:host .mdc-dialog .mdc-dialog__container{height:var(--ino-dialog-height, auto);width:var(--ino-dialog-width, auto)}:host .mdc-dialog .mdc-dialog__surface{background-color:var(--ino-dialog-background-color, #fff);overflow:visible;max-width:unset;min-width:unset;max-height:unset;min-height:unset;height:100%;width:100%;border-radius:var(--ino-dialog-border-radius, unset);box-shadow:var(--ino-dialog-box-shadow, rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px);border:var(--ino-dialog-border, unset)}:host(.ino-dialog--fullwidth){--ino-dialog-width:100%;--ino-dialog-height:calc(100% - 80px)}:host(.ino-dialog--fullwidth) .mdc-dialog{align-items:flex-end}:host(.ino-dialog--fullwidth) .mdc-dialog .mdc-dialog__container{justify-content:unset;transform:translateY(100%);transition:transform 300ms ease-in-out}:host(.ino-dialog--fullwidth) .mdc-dialog--open .mdc-dialog__container{transform:translateY(0px)}:host(.ino-dialog--fullwidth) .mdc-dialog .mdc-dialog__surface{border-bottom-left-radius:0;border-bottom-right-radius:0}';
const DIALOG_ACTION_ATTRIBUTE = "data-ino-dialog-action";
let Dialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.close = createEvent(this, "close", 7);
    this.open = false;
  }
  openChanged(open) {
    var _a, _b;
    open ? (_a = this.mdcDialog) === null || _a === void 0 ? void 0 : _a.open() : (_b = this.mdcDialog) === null || _b === void 0 ? void 0 : _b.close();
  }
  handleKeyUp(event) {
    if (event.key === "Escape" && this.open && this.dismissible) {
      this.close.emit("close");
    }
  }
  componentWillRender() {
    if (!this.mdcDialog || !this.open) {
      return;
    }
    return new Promise((resolve) => {
      this.mdcDialog.listen("MDCDialog:opened", () => resolve(), { once: true });
    });
  }
  componentWillLoad() {
    const target = this.attachTo ? document.querySelector(this.attachTo) : document.body;
    target === null || target === void 0 ? void 0 : target.appendChild(this.el);
  }
  componentDidLoad() {
    var _a;
    this.mdcDialog = new MDCDialog(this.el.shadowRoot.querySelector(".mdc-dialog"));
    this.mdcDialog.scrimClickAction = "";
    this.mdcDialog.escapeKeyAction = "";
    this.mdcDialog.listen("click", this.handleDialogClick.bind(this));
    this.open && ((_a = this.mdcDialog) === null || _a === void 0 ? void 0 : _a.open());
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mdcDialog) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  handleDialogClick(e) {
    if (!e.target) {
      return;
    }
    const element = closest(e.target, `[${DIALOG_ACTION_ATTRIBUTE}]`);
    if (!element) {
      return;
    }
    this.close.emit(element.getAttribute(DIALOG_ACTION_ATTRIBUTE));
  }
  render() {
    return h(Host, { class: { "ino-dialog--fullwidth": this.fullwidth } }, h("div", { class: "mdc-dialog" }, h("div", { class: "mdc-dialog__container" }, h("div", { class: "mdc-dialog__surface", role: "alertdialog", "aria-modal": "true" }, h("div", { tabindex: "0" }), h("slot", null))), h("div", { class: "mdc-dialog__scrim", onClick: () => this.dismissible && this.close.emit("close") })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "open": ["openChanged"]
    };
  }
};
Dialog.style = inoDialogCss;
export { Dialog as ino_dialog };
