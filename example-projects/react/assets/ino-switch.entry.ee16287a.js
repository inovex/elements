import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import { a as generateUniqueId } from "./component-utils-1c4ae7be.6d485fb9.js";
import { r as renderHiddenInput } from "./helpers-289dd016.a0d4f87b.js";
import { _ as __extends, b as __values, d as __spreadArray, e as __read, c as MDCFoundation, a as __assign, M as MDCComponent } from "./component-97c8fef9.061cf906.js";
import { M as MDCRipple, b as MDCRippleFoundation } from "./component-780a5882.fd4d53f9.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
import "./ponyfill-495ec32d.2f34f215.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
/**
 * @license
 * Copyright 2021 Google Inc.
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
var CssClasses;
(function(CssClasses2) {
  CssClasses2["PROCESSING"] = "mdc-switch--processing";
  CssClasses2["SELECTED"] = "mdc-switch--selected";
  CssClasses2["UNSELECTED"] = "mdc-switch--unselected";
})(CssClasses || (CssClasses = {}));
var Selectors;
(function(Selectors2) {
  Selectors2["RIPPLE"] = ".mdc-switch__ripple";
})(Selectors || (Selectors = {}));
/**
 * @license
 * Copyright 2021 Google Inc.
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
function observeProperty(target, property, observer) {
  var targetObservers = installObserver(target, property);
  var observers = targetObservers.getObservers(property);
  observers.push(observer);
  return function() {
    observers.splice(observers.indexOf(observer), 1);
  };
}
var allTargetObservers = /* @__PURE__ */ new WeakMap();
function installObserver(target, property) {
  var observersMap = /* @__PURE__ */ new Map();
  if (!allTargetObservers.has(target)) {
    allTargetObservers.set(target, {
      isEnabled: true,
      getObservers: function(key) {
        var observers = observersMap.get(key) || [];
        if (!observersMap.has(key)) {
          observersMap.set(key, observers);
        }
        return observers;
      },
      installedProperties: /* @__PURE__ */ new Set()
    });
  }
  var targetObservers = allTargetObservers.get(target);
  if (targetObservers.installedProperties.has(property)) {
    return targetObservers;
  }
  var descriptor = getDescriptor(target, property) || {
    configurable: true,
    enumerable: true,
    value: target[property],
    writable: true
  };
  var observedDescriptor = __assign({}, descriptor);
  var descGet = descriptor.get, descSet = descriptor.set;
  if ("value" in descriptor) {
    delete observedDescriptor.value;
    delete observedDescriptor.writable;
    var value_1 = descriptor.value;
    descGet = function() {
      return value_1;
    };
    if (descriptor.writable) {
      descSet = function(newValue) {
        value_1 = newValue;
      };
    }
  }
  if (descGet) {
    observedDescriptor.get = function() {
      return descGet.call(this);
    };
  }
  if (descSet) {
    observedDescriptor.set = function(newValue) {
      var e_4, _a;
      var previous = descGet ? descGet.call(this) : newValue;
      descSet.call(this, newValue);
      if (targetObservers.isEnabled && (!descGet || newValue !== previous)) {
        try {
          for (var _b = __values(targetObservers.getObservers(property)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer(newValue, previous);
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
      }
    };
  }
  targetObservers.installedProperties.add(property);
  Object.defineProperty(target, property, observedDescriptor);
  return targetObservers;
}
function getDescriptor(target, property) {
  var descriptorTarget = target;
  var descriptor;
  while (descriptorTarget) {
    descriptor = Object.getOwnPropertyDescriptor(descriptorTarget, property);
    if (descriptor) {
      break;
    }
    descriptorTarget = Object.getPrototypeOf(descriptorTarget);
  }
  return descriptor;
}
function setObserversEnabled(target, enabled) {
  var targetObservers = allTargetObservers.get(target);
  if (targetObservers) {
    targetObservers.isEnabled = enabled;
  }
}
/**
 * @license
 * Copyright 2021 Google Inc.
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
var MDCObserverFoundation = function(_super) {
  __extends(MDCObserverFoundation2, _super);
  function MDCObserverFoundation2(adapter) {
    var _this = _super.call(this, adapter) || this;
    _this.unobserves = /* @__PURE__ */ new Set();
    return _this;
  }
  MDCObserverFoundation2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.unobserve();
  };
  MDCObserverFoundation2.prototype.observe = function(target, observers) {
    var e_1, _a;
    var _this = this;
    var cleanup = [];
    try {
      for (var _b = __values(Object.keys(observers)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var property = _c.value;
        var observer = observers[property].bind(this);
        cleanup.push(this.observeProperty(target, property, observer));
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
    var unobserve = function() {
      var e_2, _a2;
      try {
        for (var cleanup_1 = __values(cleanup), cleanup_1_1 = cleanup_1.next(); !cleanup_1_1.done; cleanup_1_1 = cleanup_1.next()) {
          var cleanupFn = cleanup_1_1.value;
          cleanupFn();
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (cleanup_1_1 && !cleanup_1_1.done && (_a2 = cleanup_1.return))
            _a2.call(cleanup_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      _this.unobserves.delete(unobserve);
    };
    this.unobserves.add(unobserve);
    return unobserve;
  };
  MDCObserverFoundation2.prototype.observeProperty = function(target, property, observer) {
    return observeProperty(target, property, observer);
  };
  MDCObserverFoundation2.prototype.setObserversEnabled = function(target, enabled) {
    setObserversEnabled(target, enabled);
  };
  MDCObserverFoundation2.prototype.unobserve = function() {
    var e_3, _a;
    try {
      for (var _b = __values(__spreadArray([], __read(this.unobserves))), _c = _b.next(); !_c.done; _c = _b.next()) {
        var unobserve = _c.value;
        unobserve();
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
  };
  return MDCObserverFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2021 Google Inc.
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
var MDCSwitchFoundation = function(_super) {
  __extends(MDCSwitchFoundation2, _super);
  function MDCSwitchFoundation2(adapter) {
    var _this = _super.call(this, adapter) || this;
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  MDCSwitchFoundation2.prototype.init = function() {
    this.observe(this.adapter.state, {
      disabled: this.stopProcessingIfDisabled,
      processing: this.stopProcessingIfDisabled
    });
  };
  MDCSwitchFoundation2.prototype.handleClick = function() {
    if (this.adapter.state.disabled) {
      return;
    }
    this.adapter.state.selected = !this.adapter.state.selected;
  };
  MDCSwitchFoundation2.prototype.stopProcessingIfDisabled = function() {
    if (this.adapter.state.disabled) {
      this.adapter.state.processing = false;
    }
  };
  return MDCSwitchFoundation2;
}(MDCObserverFoundation);
var MDCSwitchRenderFoundation = function(_super) {
  __extends(MDCSwitchRenderFoundation2, _super);
  function MDCSwitchRenderFoundation2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCSwitchRenderFoundation2.prototype.init = function() {
    _super.prototype.init.call(this);
    this.observe(this.adapter.state, {
      disabled: this.onDisabledChange,
      processing: this.onProcessingChange,
      selected: this.onSelectedChange
    });
  };
  MDCSwitchRenderFoundation2.prototype.initFromDOM = function() {
    this.setObserversEnabled(this.adapter.state, false);
    this.adapter.state.selected = this.adapter.hasClass(CssClasses.SELECTED);
    this.onSelectedChange();
    this.adapter.state.disabled = this.adapter.isDisabled();
    this.adapter.state.processing = this.adapter.hasClass(CssClasses.PROCESSING);
    this.setObserversEnabled(this.adapter.state, true);
    this.stopProcessingIfDisabled();
  };
  MDCSwitchRenderFoundation2.prototype.onDisabledChange = function() {
    this.adapter.setDisabled(this.adapter.state.disabled);
  };
  MDCSwitchRenderFoundation2.prototype.onProcessingChange = function() {
    this.toggleClass(this.adapter.state.processing, CssClasses.PROCESSING);
  };
  MDCSwitchRenderFoundation2.prototype.onSelectedChange = function() {
    this.adapter.setAriaChecked(String(this.adapter.state.selected));
    this.toggleClass(this.adapter.state.selected, CssClasses.SELECTED);
    this.toggleClass(!this.adapter.state.selected, CssClasses.UNSELECTED);
  };
  MDCSwitchRenderFoundation2.prototype.toggleClass = function(addClass, className) {
    if (addClass) {
      this.adapter.addClass(className);
    } else {
      this.adapter.removeClass(className);
    }
  };
  return MDCSwitchRenderFoundation2;
}(MDCSwitchFoundation);
/**
 * @license
 * Copyright 2021 Google Inc.
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
var MDCSwitch = function(_super) {
  __extends(MDCSwitch2, _super);
  function MDCSwitch2(root, foundation) {
    var _this = _super.call(this, root, foundation) || this;
    _this.root = root;
    return _this;
  }
  MDCSwitch2.attachTo = function(root) {
    return new MDCSwitch2(root);
  };
  MDCSwitch2.prototype.initialize = function() {
    this.ripple = new MDCRipple(this.root, this.createRippleFoundation());
  };
  MDCSwitch2.prototype.initialSyncWithDOM = function() {
    var rippleElement = this.root.querySelector(Selectors.RIPPLE);
    if (!rippleElement) {
      throw new Error("Switch " + Selectors.RIPPLE + " element is required.");
    }
    this.rippleElement = rippleElement;
    this.root.addEventListener("click", this.foundation.handleClick);
    this.foundation.initFromDOM();
  };
  MDCSwitch2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.ripple.destroy();
    this.root.removeEventListener("click", this.foundation.handleClick);
  };
  MDCSwitch2.prototype.getDefaultFoundation = function() {
    return new MDCSwitchRenderFoundation(this.createAdapter());
  };
  MDCSwitch2.prototype.createAdapter = function() {
    var _this = this;
    return {
      addClass: function(className) {
        _this.root.classList.add(className);
      },
      hasClass: function(className) {
        return _this.root.classList.contains(className);
      },
      isDisabled: function() {
        return _this.root.disabled;
      },
      removeClass: function(className) {
        _this.root.classList.remove(className);
      },
      setAriaChecked: function(ariaChecked) {
        return _this.root.setAttribute("aria-checked", ariaChecked);
      },
      setDisabled: function(disabled) {
        _this.root.disabled = disabled;
      },
      state: this
    };
  };
  MDCSwitch2.prototype.createRippleFoundation = function() {
    return new MDCRippleFoundation(this.createRippleAdapter());
  };
  MDCSwitch2.prototype.createRippleAdapter = function() {
    var _this = this;
    return __assign(__assign({}, MDCRipple.createAdapter(this)), { computeBoundingRect: function() {
      return _this.rippleElement.getBoundingClientRect();
    }, isUnbounded: function() {
      return true;
    } });
  };
  return MDCSwitch2;
}(MDCComponent);
const inoSwitchCss = '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%);}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%);}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0;}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%);}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0;}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mdc-switch{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-switch .mdc-switch__ripple::before,.mdc-switch .mdc-switch__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch .mdc-switch__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-switch .mdc-switch__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch .mdc-switch__ripple::before,.mdc-switch .mdc-switch__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before,.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:#3d40f5;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-hover-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-focus-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-pressed-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle::before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:0.38;opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:0.04;opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:0.1;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:0.04;opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:0.1;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:0.12;opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch:enabled .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-track-color, #cfcffd)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-hover-track-color, #cfcffd)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-focus-track-color, #cfcffd)}.mdc-switch:enabled:active .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-pressed-track-color, #cfcffd)}.mdc-switch:disabled .mdc-switch__track::after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track::before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-switch:enabled .mdc-switch__shadow{}.mdc-switch:disabled .mdc-switch__shadow{}.mdc-switch:disabled .mdc-switch__handle::after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}ino-switch.ino-switch--color-scheme-primary{--mdc-switch-selected-handle-color:#3d40f5;--mdc-switch-selected-hover-handle-color:#3d40f5;--mdc-switch-selected-focus-handle-color:#3d40f5;--mdc-switch-selected-pressed-handle-color:#3d40f5;--mdc-switch-disabled-selected-handle-color:#5d60f7;--mdc-switch-selected-track-color:#5d60f7;--mdc-switch-selected-hover-track-color:#5d60f7;--mdc-switch-selected-focus-track-color:#5d60f7;--mdc-switch-selected-pressed-track-color:#5d60f7;--mdc-switch-unselected-focus-track-color:#3d40f5;--mdc-switch-unselected-hover-track-color:#3d40f5;--mdc-switch-disabled-selected-track-color:#5d60f7}ino-switch.ino-switch--color-scheme-primary:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-primary:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-primary:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #3d40f5}ino-switch.ino-switch--color-scheme-primary.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #5d60f7}ino-switch.ino-switch--color-scheme-secondary{--mdc-switch-selected-handle-color:#9ccd00;--mdc-switch-selected-hover-handle-color:#9ccd00;--mdc-switch-selected-focus-handle-color:#9ccd00;--mdc-switch-selected-pressed-handle-color:#9ccd00;--mdc-switch-disabled-selected-handle-color:#bbd962;--mdc-switch-selected-track-color:#bbd962;--mdc-switch-selected-hover-track-color:#bbd962;--mdc-switch-selected-focus-track-color:#bbd962;--mdc-switch-selected-pressed-track-color:#bbd962;--mdc-switch-unselected-focus-track-color:#9ccd00;--mdc-switch-unselected-hover-track-color:#9ccd00;--mdc-switch-disabled-selected-track-color:#bbd962}ino-switch.ino-switch--color-scheme-secondary:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-secondary:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-secondary:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #9ccd00}ino-switch.ino-switch--color-scheme-secondary.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #bbd962}ino-switch.ino-switch--color-scheme-success{--mdc-switch-selected-handle-color:#9ccd00;--mdc-switch-selected-hover-handle-color:#9ccd00;--mdc-switch-selected-focus-handle-color:#9ccd00;--mdc-switch-selected-pressed-handle-color:#9ccd00;--mdc-switch-disabled-selected-handle-color:#c8ff1b;--mdc-switch-selected-track-color:#c8ff1b;--mdc-switch-selected-hover-track-color:#c8ff1b;--mdc-switch-selected-focus-track-color:#c8ff1b;--mdc-switch-selected-pressed-track-color:#c8ff1b;--mdc-switch-unselected-focus-track-color:#9ccd00;--mdc-switch-unselected-hover-track-color:#9ccd00;--mdc-switch-disabled-selected-track-color:#c8ff1b}ino-switch.ino-switch--color-scheme-success:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-success:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-success:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #9ccd00}ino-switch.ino-switch--color-scheme-success.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #c8ff1b}ino-switch.ino-switch--color-scheme-warning{--mdc-switch-selected-handle-color:#ffde03;--mdc-switch-selected-hover-handle-color:#ffde03;--mdc-switch-selected-focus-handle-color:#ffde03;--mdc-switch-selected-pressed-handle-color:#ffde03;--mdc-switch-disabled-selected-handle-color:#ffe850;--mdc-switch-selected-track-color:#ffe850;--mdc-switch-selected-hover-track-color:#ffe850;--mdc-switch-selected-focus-track-color:#ffe850;--mdc-switch-selected-pressed-track-color:#ffe850;--mdc-switch-unselected-focus-track-color:#ffde03;--mdc-switch-unselected-hover-track-color:#ffde03;--mdc-switch-disabled-selected-track-color:#ffe850}ino-switch.ino-switch--color-scheme-warning:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-warning:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-warning:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #ffde03}ino-switch.ino-switch--color-scheme-warning.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #ffe850}ino-switch.ino-switch--color-scheme-error{--mdc-switch-selected-handle-color:#eb003b;--mdc-switch-selected-hover-handle-color:#eb003b;--mdc-switch-selected-focus-handle-color:#eb003b;--mdc-switch-selected-pressed-handle-color:#eb003b;--mdc-switch-disabled-selected-handle-color:#ff396a;--mdc-switch-selected-track-color:#ff396a;--mdc-switch-selected-hover-track-color:#ff396a;--mdc-switch-selected-focus-track-color:#ff396a;--mdc-switch-selected-pressed-track-color:#ff396a;--mdc-switch-unselected-focus-track-color:#eb003b;--mdc-switch-unselected-hover-track-color:#eb003b;--mdc-switch-disabled-selected-track-color:#ff396a}ino-switch.ino-switch--color-scheme-error:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-error:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-error:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #eb003b}ino-switch.ino-switch--color-scheme-error.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #ff396a}ino-switch.ino-switch--color-scheme-light{--mdc-switch-selected-handle-color:#c1c1c1;--mdc-switch-selected-hover-handle-color:#c1c1c1;--mdc-switch-selected-focus-handle-color:#c1c1c1;--mdc-switch-selected-pressed-handle-color:#c1c1c1;--mdc-switch-disabled-selected-handle-color:#e7e7e7;--mdc-switch-selected-track-color:#e7e7e7;--mdc-switch-selected-hover-track-color:#e7e7e7;--mdc-switch-selected-focus-track-color:#e7e7e7;--mdc-switch-selected-pressed-track-color:#e7e7e7;--mdc-switch-unselected-focus-track-color:#c1c1c1;--mdc-switch-unselected-hover-track-color:#c1c1c1;--mdc-switch-disabled-selected-track-color:#e7e7e7}ino-switch.ino-switch--color-scheme-light:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-light:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-light:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #c1c1c1}ino-switch.ino-switch--color-scheme-light.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #e7e7e7}ino-switch.ino-switch--color-scheme-dark{--mdc-switch-selected-handle-color:#777777;--mdc-switch-selected-hover-handle-color:#777777;--mdc-switch-selected-focus-handle-color:#777777;--mdc-switch-selected-pressed-handle-color:#777777;--mdc-switch-disabled-selected-handle-color:#9d9d9d;--mdc-switch-selected-track-color:#9d9d9d;--mdc-switch-selected-hover-track-color:#9d9d9d;--mdc-switch-selected-focus-track-color:#9d9d9d;--mdc-switch-selected-pressed-track-color:#9d9d9d;--mdc-switch-unselected-focus-track-color:#777777;--mdc-switch-unselected-hover-track-color:#777777;--mdc-switch-disabled-selected-track-color:#9d9d9d}ino-switch.ino-switch--color-scheme-dark:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-dark:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-dark:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #777777}ino-switch.ino-switch--color-scheme-dark.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #9d9d9d}ino-switch{display:flex;gap:5px;align-items:center;cursor:pointer;--mdc-switch-track-height:2px;--mdc-switch-handle-height:16px;--mdc-switch-handle-width:16px;--mdc-switch-selected-icon-size:10px;--mdc-switch-unselected-icon-size:10px;--mdc-switch-handle-surface-color:white;--mdc-switch-unselected-handle-color:white;--mdc-switch-unselected-track-color:#c1c1c1;--mdc-switch-disabled-unselected-handle-color:white;--mdc-switch-disabled-unselected-track-color:#c1c1c1;--mdc-switch-unselected-hover-handle-color:white;--mdc-switch-unselected-focus-handle-color:white;--mdc-switch-unselected-pressed-track-color:#c1c1c1;--mdc-switch-unselected-pressed-handle-color:white}ino-switch.ino-switch-disabled{cursor:default;pointer-events:none}ino-switch .mdc-switch__handle::after{border:2px solid #c1c1c1}ino-switch .mdc-switch__ripple{display:none}';
let Switch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkedChange = createEvent(this, "checkedChange", 7);
    this.switchId = `ino-switch-id_${generateUniqueId()}`;
    this.checked = false;
    this.colorScheme = "primary";
    this.handleChange = (e) => {
      e.stopPropagation();
      if (this.disabled)
        return;
      this.checkedChange.emit(!this.checked);
    };
  }
  checkedChanged(newChecked) {
    if (this.mdcSwitch) {
      this.mdcSwitch.selected = newChecked;
    }
  }
  componentDidLoad() {
    this.mdcSwitch = new MDCSwitch(this.mdcSwitchEl);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mdcSwitch) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    const { el, name, disabled } = this;
    const hiddenInput = renderHiddenInput(el, name, "", disabled);
    hiddenInput.checked = this.checked;
    const hostClasses = classnames("ino-switch", `ino-switch--color-scheme-${this.colorScheme}`, {
      "ino-switch-disabled": this.disabled
    });
    const switchClasses = classnames("mdc-switch", this.checked ? "mdc-switch--selected" : "mdc-switch--unselected");
    return h(Host, { class: hostClasses, checked: this.checked, disabled: this.disabled, onClick: this.handleChange }, h("button", { id: this.switchId, ref: (el2) => this.mdcSwitchEl = el2, class: switchClasses, disabled: this.disabled, type: "button", role: "switch", "aria-checked": this.checked }, h("div", { class: "mdc-switch__track" }), h("div", { class: "mdc-switch__handle-track" }, h("div", { class: "mdc-switch__handle" }, h("div", { class: "mdc-switch__ripple" })))), h("label", { htmlFor: this.switchId, onClick: (e) => e.stopPropagation() }, h("slot", null)));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "checked": ["checkedChanged"]
    };
  }
};
Switch.style = inoSwitchCss;
export { Switch as ino_switch };
