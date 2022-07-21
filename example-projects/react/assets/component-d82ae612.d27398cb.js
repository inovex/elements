import { _ as __extends, b as __values, a as __assign, M as MDCComponent, c as MDCFoundation } from "./component-97c8fef9.061cf906.js";
import { a as applyPassive, M as MDCRipple, b as MDCRippleFoundation } from "./component-780a5882.fd4d53f9.js";
import { m as matches } from "./ponyfill-495ec32d.2f34f215.js";
import { M as MDCLineRipple, a as MDCFloatingLabel, b as MDCNotchedOutline } from "./component-c1cba297.52d30aaf.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
/**
 * @license
 * Copyright 2019 Google Inc.
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
  ROOT: "mdc-text-field-character-counter"
};
var strings$3 = {
  ROOT_SELECTOR: "." + cssClasses$3.ROOT
};
/**
 * @license
 * Copyright 2019 Google Inc.
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
var MDCTextFieldCharacterCounterFoundation = function(_super) {
  __extends(MDCTextFieldCharacterCounterFoundation2, _super);
  function MDCTextFieldCharacterCounterFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCTextFieldCharacterCounterFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation2, "strings", {
    get: function() {
      return strings$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation2, "defaultAdapter", {
    get: function() {
      return {
        setContent: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTextFieldCharacterCounterFoundation2.prototype.setCounterValue = function(currentLength, maxLength) {
    currentLength = Math.min(currentLength, maxLength);
    this.adapter.setContent(currentLength + " / " + maxLength);
  };
  return MDCTextFieldCharacterCounterFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2019 Google Inc.
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
var MDCTextFieldCharacterCounter = function(_super) {
  __extends(MDCTextFieldCharacterCounter2, _super);
  function MDCTextFieldCharacterCounter2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTextFieldCharacterCounter2.attachTo = function(root) {
    return new MDCTextFieldCharacterCounter2(root);
  };
  Object.defineProperty(MDCTextFieldCharacterCounter2.prototype, "foundationForTextField", {
    get: function() {
      return this.foundation;
    },
    enumerable: false,
    configurable: true
  });
  MDCTextFieldCharacterCounter2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      setContent: function(content) {
        _this.root.textContent = content;
      }
    };
    return new MDCTextFieldCharacterCounterFoundation(adapter);
  };
  return MDCTextFieldCharacterCounter2;
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
var strings$2 = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
};
var cssClasses$2 = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
};
var numbers = {
  LABEL_SCALE: 0.75
};
var VALIDATION_ATTR_WHITELIST = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
];
var ALWAYS_FLOAT_TYPES = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
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
var POINTERDOWN_EVENTS = ["mousedown", "touchstart"];
var INTERACTION_EVENTS$1 = ["click", "keydown"];
var MDCTextFieldFoundation = function(_super) {
  __extends(MDCTextFieldFoundation2, _super);
  function MDCTextFieldFoundation2(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }
    var _this = _super.call(this, __assign(__assign({}, MDCTextFieldFoundation2.defaultAdapter), adapter)) || this;
    _this.isFocused = false;
    _this.receivedUserInput = false;
    _this.valid = true;
    _this.useNativeValidation = true;
    _this.validateOnValueChange = true;
    _this.helperText = foundationMap.helperText;
    _this.characterCounter = foundationMap.characterCounter;
    _this.leadingIcon = foundationMap.leadingIcon;
    _this.trailingIcon = foundationMap.trailingIcon;
    _this.inputFocusHandler = function() {
      _this.activateFocus();
    };
    _this.inputBlurHandler = function() {
      _this.deactivateFocus();
    };
    _this.inputInputHandler = function() {
      _this.handleInput();
    };
    _this.setPointerXOffset = function(evt) {
      _this.setTransformOrigin(evt);
    };
    _this.textFieldInteractionHandler = function() {
      _this.handleTextFieldInteraction();
    };
    _this.validationAttributeChangeHandler = function(attributesList) {
      _this.handleValidationAttributeChange(attributesList);
    };
    return _this;
  }
  Object.defineProperty(MDCTextFieldFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2, "strings", {
    get: function() {
      return strings$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldAlwaysFloat", {
    get: function() {
      var type = this.getNativeInput().type;
      return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldFloat", {
    get: function() {
      return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldShake", {
    get: function() {
      return !this.isFocused && !this.isValid() && !!this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return true;
        },
        setInputAttr: function() {
          return void 0;
        },
        removeInputAttr: function() {
          return void 0;
        },
        registerTextFieldInteractionHandler: function() {
          return void 0;
        },
        deregisterTextFieldInteractionHandler: function() {
          return void 0;
        },
        registerInputInteractionHandler: function() {
          return void 0;
        },
        deregisterInputInteractionHandler: function() {
          return void 0;
        },
        registerValidationAttributeChangeHandler: function() {
          return new MutationObserver(function() {
            return void 0;
          });
        },
        deregisterValidationAttributeChangeHandler: function() {
          return void 0;
        },
        getNativeInput: function() {
          return null;
        },
        isFocused: function() {
          return false;
        },
        activateLineRipple: function() {
          return void 0;
        },
        deactivateLineRipple: function() {
          return void 0;
        },
        setLineRippleTransformOrigin: function() {
          return void 0;
        },
        shakeLabel: function() {
          return void 0;
        },
        floatLabel: function() {
          return void 0;
        },
        setLabelRequired: function() {
          return void 0;
        },
        hasLabel: function() {
          return false;
        },
        getLabelWidth: function() {
          return 0;
        },
        hasOutline: function() {
          return false;
        },
        notchOutline: function() {
          return void 0;
        },
        closeOutline: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTextFieldFoundation2.prototype.init = function() {
    var e_1, _a, e_2, _b;
    if (this.adapter.hasLabel() && this.getNativeInput().required) {
      this.adapter.setLabelRequired(true);
    }
    if (this.adapter.isFocused()) {
      this.inputFocusHandler();
    } else if (this.adapter.hasLabel() && this.shouldFloat) {
      this.notchOutline(true);
      this.adapter.floatLabel(true);
      this.styleFloating(true);
    }
    this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler);
    this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler);
    this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
    try {
      for (var POINTERDOWN_EVENTS_1 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
        var evtType = POINTERDOWN_EVENTS_1_1.value;
        this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a = POINTERDOWN_EVENTS_1.return))
          _a.call(POINTERDOWN_EVENTS_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    try {
      for (var INTERACTION_EVENTS_1 = __values(INTERACTION_EVENTS$1), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
        var evtType = INTERACTION_EVENTS_1_1.value;
        this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b = INTERACTION_EVENTS_1.return))
          _b.call(INTERACTION_EVENTS_1);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
    this.setcharacterCounter(this.getValue().length);
  };
  MDCTextFieldFoundation2.prototype.destroy = function() {
    var e_3, _a, e_4, _b;
    this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler);
    this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler);
    this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
    try {
      for (var POINTERDOWN_EVENTS_2 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
        var evtType = POINTERDOWN_EVENTS_2_1.value;
        this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a = POINTERDOWN_EVENTS_2.return))
          _a.call(POINTERDOWN_EVENTS_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    try {
      for (var INTERACTION_EVENTS_2 = __values(INTERACTION_EVENTS$1), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
        var evtType = INTERACTION_EVENTS_2_1.value;
        this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b = INTERACTION_EVENTS_2.return))
          _b.call(INTERACTION_EVENTS_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
  };
  MDCTextFieldFoundation2.prototype.handleTextFieldInteraction = function() {
    var nativeInput = this.adapter.getNativeInput();
    if (nativeInput && nativeInput.disabled) {
      return;
    }
    this.receivedUserInput = true;
  };
  MDCTextFieldFoundation2.prototype.handleValidationAttributeChange = function(attributesList) {
    var _this = this;
    attributesList.some(function(attributeName) {
      if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
        _this.styleValidity(true);
        _this.adapter.setLabelRequired(_this.getNativeInput().required);
        return true;
      }
      return false;
    });
    if (attributesList.indexOf("maxlength") > -1) {
      this.setcharacterCounter(this.getValue().length);
    }
  };
  MDCTextFieldFoundation2.prototype.notchOutline = function(openNotch) {
    if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
      return;
    }
    if (openNotch) {
      var labelWidth = this.adapter.getLabelWidth() * numbers.LABEL_SCALE;
      this.adapter.notchOutline(labelWidth);
    } else {
      this.adapter.closeOutline();
    }
  };
  MDCTextFieldFoundation2.prototype.activateFocus = function() {
    this.isFocused = true;
    this.styleFocused(this.isFocused);
    this.adapter.activateLineRipple();
    if (this.adapter.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter.floatLabel(this.shouldFloat);
      this.styleFloating(this.shouldFloat);
      this.adapter.shakeLabel(this.shouldShake);
    }
    if (this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid)) {
      this.helperText.showToScreenReader();
    }
  };
  MDCTextFieldFoundation2.prototype.setTransformOrigin = function(evt) {
    if (this.isDisabled() || this.adapter.hasOutline()) {
      return;
    }
    var touches = evt.touches;
    var targetEvent = touches ? touches[0] : evt;
    var targetClientRect = targetEvent.target.getBoundingClientRect();
    var normalizedX = targetEvent.clientX - targetClientRect.left;
    this.adapter.setLineRippleTransformOrigin(normalizedX);
  };
  MDCTextFieldFoundation2.prototype.handleInput = function() {
    this.autoCompleteFocus();
    this.setcharacterCounter(this.getValue().length);
  };
  MDCTextFieldFoundation2.prototype.autoCompleteFocus = function() {
    if (!this.receivedUserInput) {
      this.activateFocus();
    }
  };
  MDCTextFieldFoundation2.prototype.deactivateFocus = function() {
    this.isFocused = false;
    this.adapter.deactivateLineRipple();
    var isValid = this.isValid();
    this.styleValidity(isValid);
    this.styleFocused(this.isFocused);
    if (this.adapter.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter.floatLabel(this.shouldFloat);
      this.styleFloating(this.shouldFloat);
      this.adapter.shakeLabel(this.shouldShake);
    }
    if (!this.shouldFloat) {
      this.receivedUserInput = false;
    }
  };
  MDCTextFieldFoundation2.prototype.getValue = function() {
    return this.getNativeInput().value;
  };
  MDCTextFieldFoundation2.prototype.setValue = function(value) {
    if (this.getValue() !== value) {
      this.getNativeInput().value = value;
    }
    this.setcharacterCounter(value.length);
    if (this.validateOnValueChange) {
      var isValid = this.isValid();
      this.styleValidity(isValid);
    }
    if (this.adapter.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter.floatLabel(this.shouldFloat);
      this.styleFloating(this.shouldFloat);
      if (this.validateOnValueChange) {
        this.adapter.shakeLabel(this.shouldShake);
      }
    }
  };
  MDCTextFieldFoundation2.prototype.isValid = function() {
    return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
  };
  MDCTextFieldFoundation2.prototype.setValid = function(isValid) {
    this.valid = isValid;
    this.styleValidity(isValid);
    var shouldShake = !isValid && !this.isFocused && !!this.getValue();
    if (this.adapter.hasLabel()) {
      this.adapter.shakeLabel(shouldShake);
    }
  };
  MDCTextFieldFoundation2.prototype.setValidateOnValueChange = function(shouldValidate) {
    this.validateOnValueChange = shouldValidate;
  };
  MDCTextFieldFoundation2.prototype.getValidateOnValueChange = function() {
    return this.validateOnValueChange;
  };
  MDCTextFieldFoundation2.prototype.setUseNativeValidation = function(useNativeValidation) {
    this.useNativeValidation = useNativeValidation;
  };
  MDCTextFieldFoundation2.prototype.isDisabled = function() {
    return this.getNativeInput().disabled;
  };
  MDCTextFieldFoundation2.prototype.setDisabled = function(disabled) {
    this.getNativeInput().disabled = disabled;
    this.styleDisabled(disabled);
  };
  MDCTextFieldFoundation2.prototype.setHelperTextContent = function(content) {
    if (this.helperText) {
      this.helperText.setContent(content);
    }
  };
  MDCTextFieldFoundation2.prototype.setLeadingIconAriaLabel = function(label) {
    if (this.leadingIcon) {
      this.leadingIcon.setAriaLabel(label);
    }
  };
  MDCTextFieldFoundation2.prototype.setLeadingIconContent = function(content) {
    if (this.leadingIcon) {
      this.leadingIcon.setContent(content);
    }
  };
  MDCTextFieldFoundation2.prototype.setTrailingIconAriaLabel = function(label) {
    if (this.trailingIcon) {
      this.trailingIcon.setAriaLabel(label);
    }
  };
  MDCTextFieldFoundation2.prototype.setTrailingIconContent = function(content) {
    if (this.trailingIcon) {
      this.trailingIcon.setContent(content);
    }
  };
  MDCTextFieldFoundation2.prototype.setcharacterCounter = function(currentLength) {
    if (!this.characterCounter) {
      return;
    }
    var maxLength = this.getNativeInput().maxLength;
    if (maxLength === -1) {
      throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
    }
    this.characterCounter.setCounterValue(currentLength, maxLength);
  };
  MDCTextFieldFoundation2.prototype.isBadInput = function() {
    return this.getNativeInput().validity.badInput || false;
  };
  MDCTextFieldFoundation2.prototype.isNativeInputValid = function() {
    return this.getNativeInput().validity.valid;
  };
  MDCTextFieldFoundation2.prototype.styleValidity = function(isValid) {
    var INVALID = MDCTextFieldFoundation2.cssClasses.INVALID;
    if (isValid) {
      this.adapter.removeClass(INVALID);
    } else {
      this.adapter.addClass(INVALID);
    }
    if (this.helperText) {
      this.helperText.setValidity(isValid);
      var helperTextValidation = this.helperText.isValidation();
      if (!helperTextValidation) {
        return;
      }
      var helperTextVisible = this.helperText.isVisible();
      var helperTextId = this.helperText.getId();
      if (helperTextVisible && helperTextId) {
        this.adapter.setInputAttr(strings$2.ARIA_DESCRIBEDBY, helperTextId);
      } else {
        this.adapter.removeInputAttr(strings$2.ARIA_DESCRIBEDBY);
      }
    }
  };
  MDCTextFieldFoundation2.prototype.styleFocused = function(isFocused) {
    var FOCUSED = MDCTextFieldFoundation2.cssClasses.FOCUSED;
    if (isFocused) {
      this.adapter.addClass(FOCUSED);
    } else {
      this.adapter.removeClass(FOCUSED);
    }
  };
  MDCTextFieldFoundation2.prototype.styleDisabled = function(isDisabled) {
    var _a = MDCTextFieldFoundation2.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
    if (isDisabled) {
      this.adapter.addClass(DISABLED);
      this.adapter.removeClass(INVALID);
    } else {
      this.adapter.removeClass(DISABLED);
    }
    if (this.leadingIcon) {
      this.leadingIcon.setDisabled(isDisabled);
    }
    if (this.trailingIcon) {
      this.trailingIcon.setDisabled(isDisabled);
    }
  };
  MDCTextFieldFoundation2.prototype.styleFloating = function(isFloating) {
    var LABEL_FLOATING = MDCTextFieldFoundation2.cssClasses.LABEL_FLOATING;
    if (isFloating) {
      this.adapter.addClass(LABEL_FLOATING);
    } else {
      this.adapter.removeClass(LABEL_FLOATING);
    }
  };
  MDCTextFieldFoundation2.prototype.getNativeInput = function() {
    var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
    return nativeInput || {
      disabled: false,
      maxLength: -1,
      required: false,
      type: "input",
      validity: {
        badInput: false,
        valid: true
      },
      value: ""
    };
  };
  return MDCTextFieldFoundation2;
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
var cssClasses$1 = {
  HELPER_TEXT_PERSISTENT: "mdc-text-field-helper-text--persistent",
  HELPER_TEXT_VALIDATION_MSG: "mdc-text-field-helper-text--validation-msg",
  ROOT: "mdc-text-field-helper-text"
};
var strings$1 = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role",
  ROOT_SELECTOR: "." + cssClasses$1.ROOT
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
var MDCTextFieldHelperTextFoundation = function(_super) {
  __extends(MDCTextFieldHelperTextFoundation2, _super);
  function MDCTextFieldHelperTextFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCTextFieldHelperTextFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCTextFieldHelperTextFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation2, "defaultAdapter", {
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
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTextFieldHelperTextFoundation2.prototype.getId = function() {
    return this.adapter.getAttr("id");
  };
  MDCTextFieldHelperTextFoundation2.prototype.isVisible = function() {
    return this.adapter.getAttr(strings$1.ARIA_HIDDEN) !== "true";
  };
  MDCTextFieldHelperTextFoundation2.prototype.setContent = function(content) {
    this.adapter.setContent(content);
  };
  MDCTextFieldHelperTextFoundation2.prototype.isPersistent = function() {
    return this.adapter.hasClass(cssClasses$1.HELPER_TEXT_PERSISTENT);
  };
  MDCTextFieldHelperTextFoundation2.prototype.setPersistent = function(isPersistent) {
    if (isPersistent) {
      this.adapter.addClass(cssClasses$1.HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter.removeClass(cssClasses$1.HELPER_TEXT_PERSISTENT);
    }
  };
  MDCTextFieldHelperTextFoundation2.prototype.isValidation = function() {
    return this.adapter.hasClass(cssClasses$1.HELPER_TEXT_VALIDATION_MSG);
  };
  MDCTextFieldHelperTextFoundation2.prototype.setValidation = function(isValidation) {
    if (isValidation) {
      this.adapter.addClass(cssClasses$1.HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter.removeClass(cssClasses$1.HELPER_TEXT_VALIDATION_MSG);
    }
  };
  MDCTextFieldHelperTextFoundation2.prototype.showToScreenReader = function() {
    this.adapter.removeAttr(strings$1.ARIA_HIDDEN);
  };
  MDCTextFieldHelperTextFoundation2.prototype.setValidity = function(inputIsValid) {
    var helperTextIsPersistent = this.adapter.hasClass(cssClasses$1.HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter.hasClass(cssClasses$1.HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
    if (validationMsgNeedsDisplay) {
      this.showToScreenReader();
      if (this.adapter.getAttr(strings$1.ROLE) === "alert") {
        this.refreshAlertRole();
      } else {
        this.adapter.setAttr(strings$1.ROLE, "alert");
      }
    } else {
      this.adapter.removeAttr(strings$1.ROLE);
    }
    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide();
    }
  };
  MDCTextFieldHelperTextFoundation2.prototype.hide = function() {
    this.adapter.setAttr(strings$1.ARIA_HIDDEN, "true");
  };
  MDCTextFieldHelperTextFoundation2.prototype.refreshAlertRole = function() {
    var _this = this;
    this.adapter.removeAttr(strings$1.ROLE);
    requestAnimationFrame(function() {
      _this.adapter.setAttr(strings$1.ROLE, "alert");
    });
  };
  return MDCTextFieldHelperTextFoundation2;
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
var MDCTextFieldHelperText = function(_super) {
  __extends(MDCTextFieldHelperText2, _super);
  function MDCTextFieldHelperText2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTextFieldHelperText2.attachTo = function(root) {
    return new MDCTextFieldHelperText2(root);
  };
  Object.defineProperty(MDCTextFieldHelperText2.prototype, "foundationForTextField", {
    get: function() {
      return this.foundation;
    },
    enumerable: false,
    configurable: true
  });
  MDCTextFieldHelperText2.prototype.getDefaultFoundation = function() {
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
    return new MDCTextFieldHelperTextFoundation(adapter);
  };
  return MDCTextFieldHelperText2;
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
var strings = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
};
var cssClasses = {
  ROOT: "mdc-text-field__icon"
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
var INTERACTION_EVENTS = ["click", "keydown"];
var MDCTextFieldIconFoundation = function(_super) {
  __extends(MDCTextFieldIconFoundation2, _super);
  function MDCTextFieldIconFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCTextFieldIconFoundation2.defaultAdapter), adapter)) || this;
    _this.savedTabIndex = null;
    _this.interactionHandler = function(evt) {
      _this.handleInteraction(evt);
    };
    return _this;
  }
  Object.defineProperty(MDCTextFieldIconFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation2, "defaultAdapter", {
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
  MDCTextFieldIconFoundation2.prototype.init = function() {
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
  MDCTextFieldIconFoundation2.prototype.destroy = function() {
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
  MDCTextFieldIconFoundation2.prototype.setDisabled = function(disabled) {
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
  MDCTextFieldIconFoundation2.prototype.setAriaLabel = function(label) {
    this.adapter.setAttr("aria-label", label);
  };
  MDCTextFieldIconFoundation2.prototype.setContent = function(content) {
    this.adapter.setContent(content);
  };
  MDCTextFieldIconFoundation2.prototype.handleInteraction = function(evt) {
    var isEnterKey = evt.key === "Enter" || evt.keyCode === 13;
    if (evt.type === "click" || isEnterKey) {
      evt.preventDefault();
      this.adapter.notifyIconAction();
    }
  };
  return MDCTextFieldIconFoundation2;
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
var MDCTextFieldIcon = function(_super) {
  __extends(MDCTextFieldIcon2, _super);
  function MDCTextFieldIcon2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTextFieldIcon2.attachTo = function(root) {
    return new MDCTextFieldIcon2(root);
  };
  Object.defineProperty(MDCTextFieldIcon2.prototype, "foundationForTextField", {
    get: function() {
      return this.foundation;
    },
    enumerable: false,
    configurable: true
  });
  MDCTextFieldIcon2.prototype.getDefaultFoundation = function() {
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
        return _this.emit(MDCTextFieldIconFoundation.strings.ICON_EVENT, {}, true);
      }
    };
    return new MDCTextFieldIconFoundation(adapter);
  };
  return MDCTextFieldIcon2;
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
var MDCTextField = function(_super) {
  __extends(MDCTextField2, _super);
  function MDCTextField2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCTextField2.attachTo = function(root) {
    return new MDCTextField2(root);
  };
  MDCTextField2.prototype.initialize = function(rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function(el, foundation) {
        return new MDCRipple(el, foundation);
      };
    }
    if (lineRippleFactory === void 0) {
      lineRippleFactory = function(el) {
        return new MDCLineRipple(el);
      };
    }
    if (helperTextFactory === void 0) {
      helperTextFactory = function(el) {
        return new MDCTextFieldHelperText(el);
      };
    }
    if (characterCounterFactory === void 0) {
      characterCounterFactory = function(el) {
        return new MDCTextFieldCharacterCounter(el);
      };
    }
    if (iconFactory === void 0) {
      iconFactory = function(el) {
        return new MDCTextFieldIcon(el);
      };
    }
    if (labelFactory === void 0) {
      labelFactory = function(el) {
        return new MDCFloatingLabel(el);
      };
    }
    if (outlineFactory === void 0) {
      outlineFactory = function(el) {
        return new MDCNotchedOutline(el);
      };
    }
    this.input = this.root.querySelector(strings$2.INPUT_SELECTOR);
    var labelElement = this.root.querySelector(strings$2.LABEL_SELECTOR);
    this.label = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root.querySelector(strings$2.LINE_RIPPLE_SELECTOR);
    this.lineRipple = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root.querySelector(strings$2.OUTLINE_SELECTOR);
    this.outline = outlineElement ? outlineFactory(outlineElement) : null;
    var helperTextStrings = MDCTextFieldHelperTextFoundation.strings;
    var nextElementSibling = this.root.nextElementSibling;
    var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains(cssClasses$2.HELPER_LINE);
    var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
    this.helperText = helperTextEl ? helperTextFactory(helperTextEl) : null;
    var characterCounterStrings = MDCTextFieldCharacterCounterFoundation.strings;
    var characterCounterEl = this.root.querySelector(characterCounterStrings.ROOT_SELECTOR);
    if (!characterCounterEl && hasHelperLine && nextElementSibling) {
      characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
    }
    this.characterCounter = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
    var leadingIconEl = this.root.querySelector(strings$2.LEADING_ICON_SELECTOR);
    this.leadingIcon = leadingIconEl ? iconFactory(leadingIconEl) : null;
    var trailingIconEl = this.root.querySelector(strings$2.TRAILING_ICON_SELECTOR);
    this.trailingIcon = trailingIconEl ? iconFactory(trailingIconEl) : null;
    this.prefix = this.root.querySelector(strings$2.PREFIX_SELECTOR);
    this.suffix = this.root.querySelector(strings$2.SUFFIX_SELECTOR);
    this.ripple = this.createRipple(rippleFactory);
  };
  MDCTextField2.prototype.destroy = function() {
    if (this.ripple) {
      this.ripple.destroy();
    }
    if (this.lineRipple) {
      this.lineRipple.destroy();
    }
    if (this.helperText) {
      this.helperText.destroy();
    }
    if (this.characterCounter) {
      this.characterCounter.destroy();
    }
    if (this.leadingIcon) {
      this.leadingIcon.destroy();
    }
    if (this.trailingIcon) {
      this.trailingIcon.destroy();
    }
    if (this.label) {
      this.label.destroy();
    }
    if (this.outline) {
      this.outline.destroy();
    }
    _super.prototype.destroy.call(this);
  };
  MDCTextField2.prototype.initialSyncWithDOM = function() {
    this.disabled = this.input.disabled;
  };
  Object.defineProperty(MDCTextField2.prototype, "value", {
    get: function() {
      return this.foundation.getValue();
    },
    set: function(value) {
      this.foundation.setValue(value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "disabled", {
    get: function() {
      return this.foundation.isDisabled();
    },
    set: function(disabled) {
      this.foundation.setDisabled(disabled);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "valid", {
    get: function() {
      return this.foundation.isValid();
    },
    set: function(valid) {
      this.foundation.setValid(valid);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "required", {
    get: function() {
      return this.input.required;
    },
    set: function(required) {
      this.input.required = required;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "pattern", {
    get: function() {
      return this.input.pattern;
    },
    set: function(pattern) {
      this.input.pattern = pattern;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "minLength", {
    get: function() {
      return this.input.minLength;
    },
    set: function(minLength) {
      this.input.minLength = minLength;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "maxLength", {
    get: function() {
      return this.input.maxLength;
    },
    set: function(maxLength) {
      if (maxLength < 0) {
        this.input.removeAttribute("maxLength");
      } else {
        this.input.maxLength = maxLength;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "min", {
    get: function() {
      return this.input.min;
    },
    set: function(min) {
      this.input.min = min;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "max", {
    get: function() {
      return this.input.max;
    },
    set: function(max) {
      this.input.max = max;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "step", {
    get: function() {
      return this.input.step;
    },
    set: function(step) {
      this.input.step = step;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "helperTextContent", {
    set: function(content) {
      this.foundation.setHelperTextContent(content);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "leadingIconAriaLabel", {
    set: function(label) {
      this.foundation.setLeadingIconAriaLabel(label);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "leadingIconContent", {
    set: function(content) {
      this.foundation.setLeadingIconContent(content);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "trailingIconAriaLabel", {
    set: function(label) {
      this.foundation.setTrailingIconAriaLabel(label);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "trailingIconContent", {
    set: function(content) {
      this.foundation.setTrailingIconContent(content);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "useNativeValidation", {
    set: function(useNativeValidation) {
      this.foundation.setUseNativeValidation(useNativeValidation);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "prefixText", {
    get: function() {
      return this.prefix ? this.prefix.textContent : null;
    },
    set: function(prefixText) {
      if (this.prefix) {
        this.prefix.textContent = prefixText;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTextField2.prototype, "suffixText", {
    get: function() {
      return this.suffix ? this.suffix.textContent : null;
    },
    set: function(suffixText) {
      if (this.suffix) {
        this.suffix.textContent = suffixText;
      }
    },
    enumerable: false,
    configurable: true
  });
  MDCTextField2.prototype.focus = function() {
    this.input.focus();
  };
  MDCTextField2.prototype.layout = function() {
    var openNotch = this.foundation.shouldFloat;
    this.foundation.notchOutline(openNotch);
  };
  MDCTextField2.prototype.getDefaultFoundation = function() {
    var adapter = __assign(__assign(__assign(__assign(__assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
    return new MDCTextFieldFoundation(adapter, this.getFoundationMap());
  };
  MDCTextField2.prototype.getRootAdapterMethods = function() {
    var _this = this;
    return {
      addClass: function(className) {
        return _this.root.classList.add(className);
      },
      removeClass: function(className) {
        return _this.root.classList.remove(className);
      },
      hasClass: function(className) {
        return _this.root.classList.contains(className);
      },
      registerTextFieldInteractionHandler: function(evtType, handler) {
        _this.listen(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function(evtType, handler) {
        _this.unlisten(evtType, handler);
      },
      registerValidationAttributeChangeHandler: function(handler) {
        var getAttributesList = function(mutationsList) {
          return mutationsList.map(function(mutation) {
            return mutation.attributeName;
          }).filter(function(attributeName) {
            return attributeName;
          });
        };
        var observer = new MutationObserver(function(mutationsList) {
          return handler(getAttributesList(mutationsList));
        });
        var config = { attributes: true };
        observer.observe(_this.input, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function(observer) {
        observer.disconnect();
      }
    };
  };
  MDCTextField2.prototype.getInputAdapterMethods = function() {
    var _this = this;
    return {
      getNativeInput: function() {
        return _this.input;
      },
      setInputAttr: function(attr, value) {
        _this.input.setAttribute(attr, value);
      },
      removeInputAttr: function(attr) {
        _this.input.removeAttribute(attr);
      },
      isFocused: function() {
        return document.activeElement === _this.input;
      },
      registerInputInteractionHandler: function(evtType, handler) {
        _this.input.addEventListener(evtType, handler, applyPassive());
      },
      deregisterInputInteractionHandler: function(evtType, handler) {
        _this.input.removeEventListener(evtType, handler, applyPassive());
      }
    };
  };
  MDCTextField2.prototype.getLabelAdapterMethods = function() {
    var _this = this;
    return {
      floatLabel: function(shouldFloat) {
        _this.label && _this.label.float(shouldFloat);
      },
      getLabelWidth: function() {
        return _this.label ? _this.label.getWidth() : 0;
      },
      hasLabel: function() {
        return Boolean(_this.label);
      },
      shakeLabel: function(shouldShake) {
        _this.label && _this.label.shake(shouldShake);
      },
      setLabelRequired: function(isRequired) {
        _this.label && _this.label.setRequired(isRequired);
      }
    };
  };
  MDCTextField2.prototype.getLineRippleAdapterMethods = function() {
    var _this = this;
    return {
      activateLineRipple: function() {
        if (_this.lineRipple) {
          _this.lineRipple.activate();
        }
      },
      deactivateLineRipple: function() {
        if (_this.lineRipple) {
          _this.lineRipple.deactivate();
        }
      },
      setLineRippleTransformOrigin: function(normalizedX) {
        if (_this.lineRipple) {
          _this.lineRipple.setRippleCenter(normalizedX);
        }
      }
    };
  };
  MDCTextField2.prototype.getOutlineAdapterMethods = function() {
    var _this = this;
    return {
      closeOutline: function() {
        _this.outline && _this.outline.closeNotch();
      },
      hasOutline: function() {
        return Boolean(_this.outline);
      },
      notchOutline: function(labelWidth) {
        _this.outline && _this.outline.notch(labelWidth);
      }
    };
  };
  MDCTextField2.prototype.getFoundationMap = function() {
    return {
      characterCounter: this.characterCounter ? this.characterCounter.foundationForTextField : void 0,
      helperText: this.helperText ? this.helperText.foundationForTextField : void 0,
      leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForTextField : void 0,
      trailingIcon: this.trailingIcon ? this.trailingIcon.foundationForTextField : void 0
    };
  };
  MDCTextField2.prototype.createRipple = function(rippleFactory) {
    var _this = this;
    var isTextArea = this.root.classList.contains(cssClasses$2.TEXTAREA);
    var isOutlined = this.root.classList.contains(cssClasses$2.OUTLINED);
    if (isTextArea || isOutlined) {
      return null;
    }
    var adapter = __assign(__assign({}, MDCRipple.createAdapter(this)), { isSurfaceActive: function() {
      return matches(_this.input, ":active");
    }, registerInteractionHandler: function(evtType, handler) {
      _this.input.addEventListener(evtType, handler, applyPassive());
    }, deregisterInteractionHandler: function(evtType, handler) {
      _this.input.removeEventListener(evtType, handler, applyPassive());
    } });
    return rippleFactory(this.root, new MDCRippleFoundation(adapter));
  };
  return MDCTextField2;
}(MDCComponent);
export { MDCTextField as M, MDCTextFieldHelperText as a, MDCTextFieldIcon as b };
