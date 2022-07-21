import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import { a as generateUniqueId } from "./component-utils-1c4ae7be.6d485fb9.js";
import { r as renderHiddenInput } from "./helpers-289dd016.a0d4f87b.js";
import { _ as __extends, a as __assign, b as __values, M as MDCComponent, c as MDCFoundation } from "./component-97c8fef9.061cf906.js";
import { g as getCorrectEventName } from "./util-a712b6e1.6b03bfa6.js";
import { M as MDCRipple, a as applyPassive, b as MDCRippleFoundation } from "./component-780a5882.fd4d53f9.js";
import { m as matches } from "./ponyfill-495ec32d.2f34f215.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
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
var cssClasses$2 = {
  ANIM_CHECKED_INDETERMINATE: "mdc-checkbox--anim-checked-indeterminate",
  ANIM_CHECKED_UNCHECKED: "mdc-checkbox--anim-checked-unchecked",
  ANIM_INDETERMINATE_CHECKED: "mdc-checkbox--anim-indeterminate-checked",
  ANIM_INDETERMINATE_UNCHECKED: "mdc-checkbox--anim-indeterminate-unchecked",
  ANIM_UNCHECKED_CHECKED: "mdc-checkbox--anim-unchecked-checked",
  ANIM_UNCHECKED_INDETERMINATE: "mdc-checkbox--anim-unchecked-indeterminate",
  BACKGROUND: "mdc-checkbox__background",
  CHECKED: "mdc-checkbox--checked",
  CHECKMARK: "mdc-checkbox__checkmark",
  CHECKMARK_PATH: "mdc-checkbox__checkmark-path",
  DISABLED: "mdc-checkbox--disabled",
  INDETERMINATE: "mdc-checkbox--indeterminate",
  MIXEDMARK: "mdc-checkbox__mixedmark",
  NATIVE_CONTROL: "mdc-checkbox__native-control",
  ROOT: "mdc-checkbox",
  SELECTED: "mdc-checkbox--selected",
  UPGRADED: "mdc-checkbox--upgraded"
};
var strings$2 = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
};
var numbers = {
  ANIM_END_LATCH_MS: 250
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
var MDCCheckboxFoundation = function(_super) {
  __extends(MDCCheckboxFoundation2, _super);
  function MDCCheckboxFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCCheckboxFoundation2.defaultAdapter), adapter)) || this;
    _this.currentCheckState = strings$2.TRANSITION_STATE_INIT;
    _this.currentAnimationClass = "";
    _this.animEndLatchTimer = 0;
    _this.enableAnimationEndHandler = false;
    return _this;
  }
  Object.defineProperty(MDCCheckboxFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation2, "strings", {
    get: function() {
      return strings$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        forceLayout: function() {
          return void 0;
        },
        hasNativeControl: function() {
          return false;
        },
        isAttachedToDOM: function() {
          return false;
        },
        isChecked: function() {
          return false;
        },
        isIndeterminate: function() {
          return false;
        },
        removeClass: function() {
          return void 0;
        },
        removeNativeControlAttr: function() {
          return void 0;
        },
        setNativeControlAttr: function() {
          return void 0;
        },
        setNativeControlDisabled: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCCheckboxFoundation2.prototype.init = function() {
    this.currentCheckState = this.determineCheckState();
    this.updateAriaChecked();
    this.adapter.addClass(cssClasses$2.UPGRADED);
  };
  MDCCheckboxFoundation2.prototype.destroy = function() {
    clearTimeout(this.animEndLatchTimer);
  };
  MDCCheckboxFoundation2.prototype.setDisabled = function(disabled) {
    this.adapter.setNativeControlDisabled(disabled);
    if (disabled) {
      this.adapter.addClass(cssClasses$2.DISABLED);
    } else {
      this.adapter.removeClass(cssClasses$2.DISABLED);
    }
  };
  MDCCheckboxFoundation2.prototype.handleAnimationEnd = function() {
    var _this = this;
    if (!this.enableAnimationEndHandler) {
      return;
    }
    clearTimeout(this.animEndLatchTimer);
    this.animEndLatchTimer = setTimeout(function() {
      _this.adapter.removeClass(_this.currentAnimationClass);
      _this.enableAnimationEndHandler = false;
    }, numbers.ANIM_END_LATCH_MS);
  };
  MDCCheckboxFoundation2.prototype.handleChange = function() {
    this.transitionCheckState();
  };
  MDCCheckboxFoundation2.prototype.transitionCheckState = function() {
    if (!this.adapter.hasNativeControl()) {
      return;
    }
    var oldState = this.currentCheckState;
    var newState = this.determineCheckState();
    if (oldState === newState) {
      return;
    }
    this.updateAriaChecked();
    var TRANSITION_STATE_UNCHECKED = strings$2.TRANSITION_STATE_UNCHECKED;
    var SELECTED = cssClasses$2.SELECTED;
    if (newState === TRANSITION_STATE_UNCHECKED) {
      this.adapter.removeClass(SELECTED);
    } else {
      this.adapter.addClass(SELECTED);
    }
    if (this.currentAnimationClass.length > 0) {
      clearTimeout(this.animEndLatchTimer);
      this.adapter.forceLayout();
      this.adapter.removeClass(this.currentAnimationClass);
    }
    this.currentAnimationClass = this.getTransitionAnimationClass(oldState, newState);
    this.currentCheckState = newState;
    if (this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0) {
      this.adapter.addClass(this.currentAnimationClass);
      this.enableAnimationEndHandler = true;
    }
  };
  MDCCheckboxFoundation2.prototype.determineCheckState = function() {
    var TRANSITION_STATE_INDETERMINATE = strings$2.TRANSITION_STATE_INDETERMINATE, TRANSITION_STATE_CHECKED = strings$2.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = strings$2.TRANSITION_STATE_UNCHECKED;
    if (this.adapter.isIndeterminate()) {
      return TRANSITION_STATE_INDETERMINATE;
    }
    return this.adapter.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  };
  MDCCheckboxFoundation2.prototype.getTransitionAnimationClass = function(oldState, newState) {
    var TRANSITION_STATE_INIT = strings$2.TRANSITION_STATE_INIT, TRANSITION_STATE_CHECKED = strings$2.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = strings$2.TRANSITION_STATE_UNCHECKED;
    var _a = MDCCheckboxFoundation2.cssClasses, ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED, ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE, ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED, ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE, ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED, ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;
    switch (oldState) {
      case TRANSITION_STATE_INIT:
        if (newState === TRANSITION_STATE_UNCHECKED) {
          return "";
        }
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
      case TRANSITION_STATE_UNCHECKED:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
      case TRANSITION_STATE_CHECKED:
        return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
      default:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  };
  MDCCheckboxFoundation2.prototype.updateAriaChecked = function() {
    if (this.adapter.isIndeterminate()) {
      this.adapter.setNativeControlAttr(strings$2.ARIA_CHECKED_ATTR, strings$2.ARIA_CHECKED_INDETERMINATE_VALUE);
    } else {
      this.adapter.removeNativeControlAttr(strings$2.ARIA_CHECKED_ATTR);
    }
  };
  return MDCCheckboxFoundation2;
}(MDCFoundation);
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
var CB_PROTO_PROPS = ["checked", "indeterminate"];
var MDCCheckbox = function(_super) {
  __extends(MDCCheckbox2, _super);
  function MDCCheckbox2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.rippleSurface = _this.createRipple();
    return _this;
  }
  MDCCheckbox2.attachTo = function(root) {
    return new MDCCheckbox2(root);
  };
  Object.defineProperty(MDCCheckbox2.prototype, "ripple", {
    get: function() {
      return this.rippleSurface;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox2.prototype, "checked", {
    get: function() {
      return this.getNativeControl().checked;
    },
    set: function(checked) {
      this.getNativeControl().checked = checked;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox2.prototype, "indeterminate", {
    get: function() {
      return this.getNativeControl().indeterminate;
    },
    set: function(indeterminate) {
      this.getNativeControl().indeterminate = indeterminate;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox2.prototype, "disabled", {
    get: function() {
      return this.getNativeControl().disabled;
    },
    set: function(disabled) {
      this.foundation.setDisabled(disabled);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox2.prototype, "value", {
    get: function() {
      return this.getNativeControl().value;
    },
    set: function(value) {
      this.getNativeControl().value = value;
    },
    enumerable: false,
    configurable: true
  });
  MDCCheckbox2.prototype.initialize = function() {
    var DATA_INDETERMINATE_ATTR = strings$2.DATA_INDETERMINATE_ATTR;
    this.getNativeControl().indeterminate = this.getNativeControl().getAttribute(DATA_INDETERMINATE_ATTR) === "true";
    this.getNativeControl().removeAttribute(DATA_INDETERMINATE_ATTR);
  };
  MDCCheckbox2.prototype.initialSyncWithDOM = function() {
    var _this = this;
    this.handleChange = function() {
      _this.foundation.handleChange();
    };
    this.handleAnimationEnd = function() {
      _this.foundation.handleAnimationEnd();
    };
    this.getNativeControl().addEventListener("change", this.handleChange);
    this.listen(getCorrectEventName(window, "animationend"), this.handleAnimationEnd);
    this.installPropertyChangeHooks();
  };
  MDCCheckbox2.prototype.destroy = function() {
    this.rippleSurface.destroy();
    this.getNativeControl().removeEventListener("change", this.handleChange);
    this.unlisten(getCorrectEventName(window, "animationend"), this.handleAnimationEnd);
    this.uninstallPropertyChangeHooks();
    _super.prototype.destroy.call(this);
  };
  MDCCheckbox2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClass: function(className) {
        return _this.root.classList.add(className);
      },
      forceLayout: function() {
        return _this.root.offsetWidth;
      },
      hasNativeControl: function() {
        return !!_this.getNativeControl();
      },
      isAttachedToDOM: function() {
        return Boolean(_this.root.parentNode);
      },
      isChecked: function() {
        return _this.checked;
      },
      isIndeterminate: function() {
        return _this.indeterminate;
      },
      removeClass: function(className) {
        _this.root.classList.remove(className);
      },
      removeNativeControlAttr: function(attr) {
        _this.getNativeControl().removeAttribute(attr);
      },
      setNativeControlAttr: function(attr, value) {
        _this.getNativeControl().setAttribute(attr, value);
      },
      setNativeControlDisabled: function(disabled) {
        _this.getNativeControl().disabled = disabled;
      }
    };
    return new MDCCheckboxFoundation(adapter);
  };
  MDCCheckbox2.prototype.createRipple = function() {
    var _this = this;
    var adapter = __assign(__assign({}, MDCRipple.createAdapter(this)), { deregisterInteractionHandler: function(evtType, handler) {
      _this.getNativeControl().removeEventListener(evtType, handler, applyPassive());
    }, isSurfaceActive: function() {
      return matches(_this.getNativeControl(), ":active");
    }, isUnbounded: function() {
      return true;
    }, registerInteractionHandler: function(evtType, handler) {
      _this.getNativeControl().addEventListener(evtType, handler, applyPassive());
    } });
    return new MDCRipple(this.root, new MDCRippleFoundation(adapter));
  };
  MDCCheckbox2.prototype.installPropertyChangeHooks = function() {
    var e_1, _a;
    var _this = this;
    var nativeCb = this.getNativeControl();
    var cbProto = Object.getPrototypeOf(nativeCb);
    var _loop_1 = function(controlState2) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState2);
      if (!validDescriptor(desc)) {
        return { value: void 0 };
      }
      var nativeGetter = desc.get;
      var nativeCbDesc = {
        configurable: desc.configurable,
        enumerable: desc.enumerable,
        get: nativeGetter,
        set: function(state) {
          desc.set.call(nativeCb, state);
          _this.foundation.handleChange();
        }
      };
      Object.defineProperty(nativeCb, controlState2, nativeCbDesc);
    };
    try {
      for (var CB_PROTO_PROPS_1 = __values(CB_PROTO_PROPS), CB_PROTO_PROPS_1_1 = CB_PROTO_PROPS_1.next(); !CB_PROTO_PROPS_1_1.done; CB_PROTO_PROPS_1_1 = CB_PROTO_PROPS_1.next()) {
        var controlState = CB_PROTO_PROPS_1_1.value;
        var state_1 = _loop_1(controlState);
        if (typeof state_1 === "object")
          return state_1.value;
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (CB_PROTO_PROPS_1_1 && !CB_PROTO_PROPS_1_1.done && (_a = CB_PROTO_PROPS_1.return))
          _a.call(CB_PROTO_PROPS_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  MDCCheckbox2.prototype.uninstallPropertyChangeHooks = function() {
    var e_2, _a;
    var nativeCb = this.getNativeControl();
    var cbProto = Object.getPrototypeOf(nativeCb);
    try {
      for (var CB_PROTO_PROPS_2 = __values(CB_PROTO_PROPS), CB_PROTO_PROPS_2_1 = CB_PROTO_PROPS_2.next(); !CB_PROTO_PROPS_2_1.done; CB_PROTO_PROPS_2_1 = CB_PROTO_PROPS_2.next()) {
        var controlState = CB_PROTO_PROPS_2_1.value;
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        if (!validDescriptor(desc)) {
          return;
        }
        Object.defineProperty(nativeCb, controlState, desc);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (CB_PROTO_PROPS_2_1 && !CB_PROTO_PROPS_2_1.done && (_a = CB_PROTO_PROPS_2.return))
          _a.call(CB_PROTO_PROPS_2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
  };
  MDCCheckbox2.prototype.getNativeControl = function() {
    var NATIVE_CONTROL_SELECTOR = strings$2.NATIVE_CONTROL_SELECTOR;
    var el = this.root.querySelector(NATIVE_CONTROL_SELECTOR);
    if (!el) {
      throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
    }
    return el;
  };
  return MDCCheckbox2;
}(MDCComponent);
function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === "function";
}
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
var cssClasses$1 = {
  ROOT: "mdc-form-field"
};
var strings$1 = {
  LABEL_SELECTOR: ".mdc-form-field > label"
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
var MDCFormFieldFoundation = function(_super) {
  __extends(MDCFormFieldFoundation2, _super);
  function MDCFormFieldFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCFormFieldFoundation2.defaultAdapter), adapter)) || this;
    _this.click = function() {
      _this.handleClick();
    };
    return _this;
  }
  Object.defineProperty(MDCFormFieldFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFormFieldFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFormFieldFoundation2, "defaultAdapter", {
    get: function() {
      return {
        activateInputRipple: function() {
          return void 0;
        },
        deactivateInputRipple: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCFormFieldFoundation2.prototype.init = function() {
    this.adapter.registerInteractionHandler("click", this.click);
  };
  MDCFormFieldFoundation2.prototype.destroy = function() {
    this.adapter.deregisterInteractionHandler("click", this.click);
  };
  MDCFormFieldFoundation2.prototype.handleClick = function() {
    var _this = this;
    this.adapter.activateInputRipple();
    requestAnimationFrame(function() {
      _this.adapter.deactivateInputRipple();
    });
  };
  return MDCFormFieldFoundation2;
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
var MDCFormField = function(_super) {
  __extends(MDCFormField2, _super);
  function MDCFormField2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCFormField2.attachTo = function(root) {
    return new MDCFormField2(root);
  };
  MDCFormField2.prototype.labelEl = function() {
    var LABEL_SELECTOR = MDCFormFieldFoundation.strings.LABEL_SELECTOR;
    return this.root.querySelector(LABEL_SELECTOR);
  };
  MDCFormField2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      activateInputRipple: function() {
        if (_this.input && _this.input.ripple) {
          _this.input.ripple.activate();
        }
      },
      deactivateInputRipple: function() {
        if (_this.input && _this.input.ripple) {
          _this.input.ripple.deactivate();
        }
      },
      deregisterInteractionHandler: function(evtType, handler) {
        var labelEl = _this.labelEl();
        if (labelEl) {
          labelEl.removeEventListener(evtType, handler);
        }
      },
      registerInteractionHandler: function(evtType, handler) {
        var labelEl = _this.labelEl();
        if (labelEl) {
          labelEl.addEventListener(evtType, handler);
        }
      }
    };
    return new MDCFormFieldFoundation(adapter);
  };
  return MDCFormField2;
}(MDCComponent);
const inoCheckboxCss = '.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0;}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px;}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto;}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0;}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0;}.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#9ccd00;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #9ccd00))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#9ccd00;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #9ccd00))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#9ccd00;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #9ccd00));background-color:#9ccd00;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #9ccd00))}@keyframes mdc-checkbox-fade-in-background-8A000000FF9CCD0000000000FF9CCD00{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#9ccd00;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #9ccd00));background-color:#9ccd00;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #9ccd00))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF9CCD0000000000FF9CCD00{0%,80%{border-color:#9ccd00;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #9ccd00));background-color:#9ccd00;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #9ccd00))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF9CCD0000000000FF9CCD00}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF9CCD0000000000FF9CCD00}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color, border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-checkbox{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox .mdc-checkbox__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-checkbox .mdc-checkbox__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox{z-index:0}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{z-index:-1;z-index:var(--mdc-ripple-z-index, -1)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}:host{--checkbox-color:var(--ino-checkbox-color, #3d40f5);--checkbox-color-hover:var(\n    --ino-checkbox-color-hover,\n    #5d60f7\n  );--checkbox-color-active:var(\n    --ino-checkbox-color-active,\n    #0d10f3\n  );--checkbox-container-color-unchecked:var(\n    --ino-checkbox-container-color-unchecked,\n    #5d60f7\n  );--checkbox-text-color-disabled:var(\n    --ino-checkbox-text-color-disabled,\n    #777777\n  );--checkbox-background-color-disabled:var(\n    --ino-checkbox-background-color-disabled,\n    #e7e7e7\n  );--checkbox-checkmark-color:var(--ino-checkbox-checkmark-color, #fff);--checkbox-checkmark-color-disabled:var(\n    --ino-checkbox-checkmark-color-disabled,\n    #c1c1c1\n  )}:host{--mdc-checkbox-unchecked-color:var(--checkbox-container-color-unchecked);--mdc-checkbox-checked-color:var(--checkbox-color);--mdc-checkbox-disabled-color:var(--checkbox-background-color-disabled);--mdc-checkbox-ink-color:var(--checkbox-checkmark-color)}:host .mdc-checkbox:before,:host .mdc-checkbox:after{display:none}:host .mdc-checkbox--disabled{--mdc-checkbox-ink-color:var(--checkbox-checkmark-color-disabled)}:host .mdc-checkbox--disabled~label{color:var(--checkbox-text-color-disabled)}:host(:hover) .mdc-checkbox:not(.mdc-checkbox--disabled){--mdc-checkbox-unchecked-color:var(--checkbox-color-hover);--mdc-checkbox-checked-color:var(--checkbox-color-hover)}:host(:hover) .mdc-checkbox:not(.mdc-checkbox--disabled) .mdc-checkbox__background{box-shadow:0 4px 8px 0 rgba(61, 64, 245, 0.3), 0 12px 28px 0 rgba(61, 214, 245, 0.14)}:host(:active) .mdc-checkbox:not(.checked),:host(active) .mdc-checkbox:not(.mdc-checkbox--disabled){--mdc-checkbox-unchecked-color:var(--checkbox-color-active);--mdc-checkbox-checked-color:var(--checkbox-color-active)}:host .ino-checkbox-selection .mdc-checkbox__background{border-radius:30px}:host .ino-checkbox-selection .mdc-checkbox__background .mdc-checkbox__checkmark{width:12px;height:12px;top:1px;left:1px}:host .ino-checkbox-selection .mdc-checkbox__background .mdc-checkbox__mixedmark{margin:0 2px}:host .ino-checkbox-selection:not(:hover):not(.checked).ino-checkbox--indeterminate{--mdc-checkbox-checked-color:var(--ino-checkbox-container-color-unchecked)}';
let Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkedChange = createEvent(this, "checkedChange", 7);
    this.checked = false;
    this.checkboxId = `ino-checkbox-id_${generateUniqueId()}`;
    this.handleInput = (e) => {
      this.nativeInputEl.checked = this.checked;
      this.checkedChange.emit(!this.checked);
      e.stopPropagation();
    };
  }
  checkedChanged(newChecked) {
    if (this.checkboxInstance) {
      this.checkboxInstance.checked = newChecked;
    }
  }
  indeterminateChanged(newValue) {
    this.checkboxInstance.indeterminate = newValue;
  }
  componentDidLoad() {
    this.checkboxInstance = new MDCCheckbox(this.el.shadowRoot.querySelector(".mdc-checkbox"));
    this.formField = new MDCFormField(this.el.shadowRoot.querySelector(".mdc-form-field"));
    this.formField.input = this.checkboxInstance;
    if (this.indeterminate) {
      this.checkboxInstance.indeterminate = true;
    }
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.checkboxInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    (_b = this.formField) === null || _b === void 0 ? void 0 : _b.destroy();
  }
  render() {
    const { el, name, checked, value, disabled } = this;
    const checkboxClasses = classnames({
      "mdc-checkbox": true,
      "mdc-checkbox--disabled": disabled,
      "ino-checkbox-selection": this.selection,
      "ino-checkbox--indeterminate": this.indeterminate
    });
    renderHiddenInput(el, name, checked ? value : "", disabled);
    return h(Host, null, h("div", { class: "mdc-form-field" }, h("div", { class: checkboxClasses }, h("input", { type: "checkbox", class: "mdc-checkbox__native-control", checked, disabled, id: this.checkboxId, ref: (input) => this.nativeInputEl = input, onChange: (e) => e.stopPropagation(), onInput: this.handleInput }), h("div", { class: "mdc-checkbox__background" }, h("svg", { class: "mdc-checkbox__checkmark", viewBox: "0 0 24 24" }, h("path", { class: "mdc-checkbox__checkmark-path", fill: "none", stroke: "white", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })), h("div", { class: "mdc-checkbox__mixedmark" }))), h("label", { htmlFor: this.checkboxId }, h("slot", null))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "checked": ["checkedChanged"],
      "indeterminate": ["indeterminateChanged"]
    };
  }
};
Checkbox.style = inoCheckboxCss;
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
var strings = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
};
var cssClasses = {
  DISABLED: "mdc-radio--disabled",
  ROOT: "mdc-radio"
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
var MDCRadioFoundation = function(_super) {
  __extends(MDCRadioFoundation2, _super);
  function MDCRadioFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCRadioFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCRadioFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRadioFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRadioFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        setNativeControlDisabled: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRadioFoundation2.prototype.setDisabled = function(disabled) {
    var DISABLED = MDCRadioFoundation2.cssClasses.DISABLED;
    this.adapter.setNativeControlDisabled(disabled);
    if (disabled) {
      this.adapter.addClass(DISABLED);
    } else {
      this.adapter.removeClass(DISABLED);
    }
  };
  return MDCRadioFoundation2;
}(MDCFoundation);
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
var MDCRadio = function(_super) {
  __extends(MDCRadio2, _super);
  function MDCRadio2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.rippleSurface = _this.createRipple();
    return _this;
  }
  MDCRadio2.attachTo = function(root) {
    return new MDCRadio2(root);
  };
  Object.defineProperty(MDCRadio2.prototype, "checked", {
    get: function() {
      return this.nativeControl.checked;
    },
    set: function(checked) {
      this.nativeControl.checked = checked;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRadio2.prototype, "disabled", {
    get: function() {
      return this.nativeControl.disabled;
    },
    set: function(disabled) {
      this.foundation.setDisabled(disabled);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRadio2.prototype, "value", {
    get: function() {
      return this.nativeControl.value;
    },
    set: function(value) {
      this.nativeControl.value = value;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRadio2.prototype, "ripple", {
    get: function() {
      return this.rippleSurface;
    },
    enumerable: false,
    configurable: true
  });
  MDCRadio2.prototype.destroy = function() {
    this.rippleSurface.destroy();
    _super.prototype.destroy.call(this);
  };
  MDCRadio2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClass: function(className) {
        return _this.root.classList.add(className);
      },
      removeClass: function(className) {
        return _this.root.classList.remove(className);
      },
      setNativeControlDisabled: function(disabled) {
        return _this.nativeControl.disabled = disabled;
      }
    };
    return new MDCRadioFoundation(adapter);
  };
  MDCRadio2.prototype.createRipple = function() {
    var _this = this;
    var adapter = __assign(__assign({}, MDCRipple.createAdapter(this)), {
      registerInteractionHandler: function(evtType, handler) {
        _this.nativeControl.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function(evtType, handler) {
        _this.nativeControl.removeEventListener(evtType, handler, applyPassive());
      },
      isSurfaceActive: function() {
        return false;
      },
      isUnbounded: function() {
        return true;
      }
    });
    return new MDCRipple(this.root, new MDCRippleFoundation(adapter));
  };
  Object.defineProperty(MDCRadio2.prototype, "nativeControl", {
    get: function() {
      var NATIVE_CONTROL_SELECTOR = MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR;
      var el = this.root.querySelector(NATIVE_CONTROL_SELECTOR);
      if (!el) {
        throw new Error("Radio component requires a " + NATIVE_CONTROL_SELECTOR + " element");
      }
      return el;
    },
    enumerable: false,
    configurable: true
  });
  return MDCRadio2;
}(MDCComponent);
const inoRadioCss = '.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0;}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px;}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto;}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0;}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0;}.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#9ccd00;border-color:var(--mdc-theme-secondary, #9ccd00)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#9ccd00;border-color:var(--mdc-theme-secondary, #9ccd00)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#9ccd00;background-color:var(--mdc-theme-secondary, #9ccd00)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity, transform, border-color, color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:0.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-radio{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-radio .mdc-radio__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-radio .mdc-radio__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-radio.mdc-ripple-upgraded--foreground-activation .mdc-radio__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation .mdc-radio__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before,.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio .mdc-radio__ripple::before,.mdc-radio .mdc-radio__ripple::after{background-color:#9ccd00;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #9ccd00))}.mdc-radio:hover .mdc-radio__ripple::before,.mdc-radio.mdc-ripple-surface--hover .mdc-radio__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple::before,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple::after{transition:opacity 150ms linear}.mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-radio.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__background::before,.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background::before{content:none}.mdc-radio__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}:host{--radio-unchecked-color:var(\n    --ino-radio-unchecked-color,\n    #9b9b9b\n  );--radio-checked-color:var(\n    --ino-radio-checked-color,\n    #3d40f5\n  );--radio-hover-color:var(\n    --ino-radio-hover-color,\n    #5d60f7\n  );--radio-active-color:var(\n    --ino-radio-active-color,\n    #0d10f3\n  );--radio-disabled-inner-circle-color:var(\n    --ino-radio-disabled-inner-circle-color,\n    #9d9d9d\n  );--radio-disabled-outer-circle-color:var(\n    --ino-radio-disabled-outer-circle-color,\n    #e7e7e7\n  )}:host .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--radio-unchecked-color)}:host .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--radio-checked-color)}:host .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--radio-checked-color)}:host .mdc-radio:before,:host .mdc-radio:after{display:none}:host :hover .mdc-radio:not(.mdc-radio--disabled) .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--radio-hover-color)}:host :hover .mdc-radio:not(.mdc-radio--disabled) .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--radio-hover-color)}:host :hover .mdc-radio:not(.mdc-radio--disabled) .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--radio-hover-color)}:host :hover .mdc-radio:not(.mdc-radio--disabled) .mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.45)}:host :hover .mdc-radio:not(.mdc-radio--disabled) .mdc-radio__outer-circle{box-shadow:0 4px 8px 0 rgba(61, 64, 245, 0.3), 0 12px 28px 0 rgba(61, 214, 245, 0.14)}:host :active .mdc-radio:not(.mdc-radio--disabled) .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--radio-active-color)}:host :active .mdc-radio:not(.mdc-radio--disabled) .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--radio-active-color)}:host :active .mdc-radio:not(.mdc-radio--disabled) .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--radio-active-color)}:host :active .mdc-radio:not(.mdc-radio--disabled) .mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.65)}:host :active .mdc-radio:not(.mdc-radio--disabled) .mdc-radio__outer-circle{box-shadow:0 8px 16px 0 rgba(61, 64, 245, 0.3), 0 16px 32px 0 rgba(61, 214, 245, 0.14)}:host .mdc-radio--disabled .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--radio-disabled-inner-circle-color)}:host .mdc-radio--disabled .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--radio-disabled-inner-circle-color)}:host .mdc-radio--disabled .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--radio-disabled-inner-circle-color)}:host .mdc-radio--disabled~label{color:var(--radio-disabled-inner-circle-color)}:host .mdc-radio--disabled .mdc-radio__outer-circle{background-color:var(--radio-disabled-outer-circle-color);border:none;box-shadow:none}:host(.ino-radio--checked) .mdc-radio .mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.6)}:host(.ino-radio--checked) .mdc-radio__inner-circle{transform:scale(0.6);-webkit-transform:scale(0.6)}:host(.ino-checked-hover) .mdc-form-field .mdc-radio .mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.25)}:host(.ino-checked-hover) .mdc-form-field .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--radio-hover-color)}:host(.ino-checked-hover) .mdc-form-field .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--radio-hover-color)}:host(.ino-checked-hover) .mdc-form-field .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--radio-hover-color)}:host(ino-radio:not([checked=true])) .mdc-radio:hover .mdc-radio__inner-circle{transform:scale(0.45);-webkit-transform:scale(0.45);border-color:var(--radio-hover-color)}:host(ino-radio:not([checked=true])) .mdc-radio:hover .mdc-radio__outer-circle{border-color:var(--radio-hover-color)}';
let Radio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkedChange = createEvent(this, "checkedChange", 7);
    this.checked = false;
    this.handleInput = (e) => {
      e.stopPropagation();
      this.nativeInputEl.checked = this.checked;
      this.checkedChange.emit(true);
    };
    this.radioId = `ino-radio-id_${generateUniqueId()}`;
  }
  checkedChanged(newChecked) {
    if (this.radio) {
      this.radio.checked = newChecked;
    }
  }
  componentDidLoad() {
    this.radio = new MDCRadio(this.el.shadowRoot.querySelector(".mdc-radio"));
    this.formField = new MDCFormField(this.el.shadowRoot.querySelector(".mdc-form-field"));
    this.formField.input = this.radio;
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.radio) === null || _a === void 0 ? void 0 : _a.destroy();
    (_b = this.formField) === null || _b === void 0 ? void 0 : _b.destroy();
  }
  render() {
    const { el, name, checked, value, disabled } = this;
    const hostClasses = classnames({
      "ino-radio--checked": checked
    });
    const mdcClasses = classnames({
      "mdc-radio": true,
      "mdc-radio--disabled": disabled
    });
    renderHiddenInput(el, name, checked ? value : "", disabled);
    return h(Host, { class: hostClasses }, h("div", { class: "mdc-form-field" }, h("div", { class: mdcClasses }, h("input", { class: "mdc-radio__native-control", type: "radio", id: this.radioId, checked: this.checked, disabled: this.disabled, name: this.name, value: this.value, ref: (input) => this.nativeInputEl = input, onInput: this.handleInput, onChange: (e) => e.stopPropagation() }), h("div", { class: "mdc-radio__background" }, h("div", { class: "mdc-radio__outer-circle" }), h("div", { class: "mdc-radio__inner-circle" }))), h("label", { htmlFor: this.radioId }, h("slot", null))));
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
Radio.style = inoRadioCss;
export { Checkbox as ino_checkbox, Radio as ino_radio };
