import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import { p as preventEvent } from "./component-utils-1c4ae7be.6d485fb9.js";
import { _ as __extends, a as __assign, c as MDCFoundation, M as MDCComponent } from "./component-97c8fef9.061cf906.js";
import { M as MDCRipple, a as applyPassive, b as MDCRippleFoundation } from "./component-780a5882.fd4d53f9.js";
import { m as matches } from "./ponyfill-495ec32d.2f34f215.js";
import { A as AnimationFrame } from "./animationframe-28b556b2.8bf9b754.js";
import { a as getCorrectPropertyName } from "./util-a712b6e1.6b03bfa6.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
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
var cssClasses = {
  DISABLED: "mdc-slider--disabled",
  DISCRETE: "mdc-slider--discrete",
  INPUT: "mdc-slider__input",
  RANGE: "mdc-slider--range",
  THUMB: "mdc-slider__thumb",
  THUMB_FOCUSED: "mdc-slider__thumb--focused",
  THUMB_KNOB: "mdc-slider__thumb-knob",
  THUMB_TOP: "mdc-slider__thumb--top",
  THUMB_WITH_INDICATOR: "mdc-slider__thumb--with-indicator",
  TICK_MARKS: "mdc-slider--tick-marks",
  TICK_MARKS_CONTAINER: "mdc-slider__tick-marks",
  TICK_MARK_ACTIVE: "mdc-slider__tick-mark--active",
  TICK_MARK_INACTIVE: "mdc-slider__tick-mark--inactive",
  TRACK: "mdc-slider__track",
  TRACK_ACTIVE: "mdc-slider__track--active_fill",
  VALUE_INDICATOR_TEXT: "mdc-slider__value-indicator-text"
};
var numbers = {
  STEP_SIZE: 1,
  THUMB_UPDATE_MIN_PX: 5
};
var attributes = {
  ARIA_VALUETEXT: "aria-valuetext",
  INPUT_DISABLED: "disabled",
  INPUT_MIN: "min",
  INPUT_MAX: "max",
  INPUT_VALUE: "value",
  INPUT_STEP: "step"
};
var events = {
  CHANGE: "MDCSlider:change",
  INPUT: "MDCSlider:input"
};
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
var TickMark;
(function(TickMark2) {
  TickMark2[TickMark2["ACTIVE"] = 0] = "ACTIVE";
  TickMark2[TickMark2["INACTIVE"] = 1] = "INACTIVE";
})(TickMark || (TickMark = {}));
var Thumb;
(function(Thumb2) {
  Thumb2[Thumb2["START"] = 1] = "START";
  Thumb2[Thumb2["END"] = 2] = "END";
})(Thumb || (Thumb = {}));
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
var AnimationKeys;
(function(AnimationKeys2) {
  AnimationKeys2["SLIDER_UPDATE"] = "slider_update";
})(AnimationKeys || (AnimationKeys = {}));
var HAS_WINDOW = typeof window !== "undefined";
var MDCSliderFoundation = function(_super) {
  __extends(MDCSliderFoundation2, _super);
  function MDCSliderFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCSliderFoundation2.defaultAdapter), adapter)) || this;
    _this.initialStylesRemoved = false;
    _this.isDisabled = false;
    _this.isDiscrete = false;
    _this.step = numbers.STEP_SIZE;
    _this.hasTickMarks = false;
    _this.isRange = false;
    _this.thumb = null;
    _this.downEventClientX = null;
    _this.startThumbKnobWidth = 0;
    _this.endThumbKnobWidth = 0;
    _this.animFrame = new AnimationFrame();
    return _this;
  }
  Object.defineProperty(MDCSliderFoundation2, "defaultAdapter", {
    get: function() {
      return {
        hasClass: function() {
          return false;
        },
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        addThumbClass: function() {
          return void 0;
        },
        removeThumbClass: function() {
          return void 0;
        },
        getAttribute: function() {
          return null;
        },
        getInputValue: function() {
          return "";
        },
        setInputValue: function() {
          return void 0;
        },
        getInputAttribute: function() {
          return null;
        },
        setInputAttribute: function() {
          return null;
        },
        removeInputAttribute: function() {
          return null;
        },
        focusInput: function() {
          return void 0;
        },
        isInputFocused: function() {
          return false;
        },
        getThumbKnobWidth: function() {
          return 0;
        },
        getThumbBoundingClientRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        getBoundingClientRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        isRTL: function() {
          return false;
        },
        setThumbStyleProperty: function() {
          return void 0;
        },
        removeThumbStyleProperty: function() {
          return void 0;
        },
        setTrackActiveStyleProperty: function() {
          return void 0;
        },
        removeTrackActiveStyleProperty: function() {
          return void 0;
        },
        setValueIndicatorText: function() {
          return void 0;
        },
        getValueToAriaValueTextFn: function() {
          return null;
        },
        updateTickMarks: function() {
          return void 0;
        },
        setPointerCapture: function() {
          return void 0;
        },
        emitChangeEvent: function() {
          return void 0;
        },
        emitInputEvent: function() {
          return void 0;
        },
        emitDragStartEvent: function() {
          return void 0;
        },
        emitDragEndEvent: function() {
          return void 0;
        },
        registerEventHandler: function() {
          return void 0;
        },
        deregisterEventHandler: function() {
          return void 0;
        },
        registerThumbEventHandler: function() {
          return void 0;
        },
        deregisterThumbEventHandler: function() {
          return void 0;
        },
        registerInputEventHandler: function() {
          return void 0;
        },
        deregisterInputEventHandler: function() {
          return void 0;
        },
        registerBodyEventHandler: function() {
          return void 0;
        },
        deregisterBodyEventHandler: function() {
          return void 0;
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
  MDCSliderFoundation2.prototype.init = function() {
    var _this = this;
    this.isDisabled = this.adapter.hasClass(cssClasses.DISABLED);
    this.isDiscrete = this.adapter.hasClass(cssClasses.DISCRETE);
    this.hasTickMarks = this.adapter.hasClass(cssClasses.TICK_MARKS);
    this.isRange = this.adapter.hasClass(cssClasses.RANGE);
    var min = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_MIN, this.isRange ? Thumb.START : Thumb.END), attributes.INPUT_MIN);
    var max = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_MAX, Thumb.END), attributes.INPUT_MAX);
    var value = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_VALUE, Thumb.END), attributes.INPUT_VALUE);
    var valueStart = this.isRange ? this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_VALUE, Thumb.START), attributes.INPUT_VALUE) : min;
    var stepAttr = this.adapter.getInputAttribute(attributes.INPUT_STEP, Thumb.END);
    var step = stepAttr ? this.convertAttributeValueToNumber(stepAttr, attributes.INPUT_STEP) : this.step;
    this.validateProperties({ min, max, value, valueStart, step });
    this.min = min;
    this.max = max;
    this.value = value;
    this.valueStart = valueStart;
    this.step = step;
    this.numDecimalPlaces = getNumDecimalPlaces(this.step);
    this.valueBeforeDownEvent = value;
    this.valueStartBeforeDownEvent = valueStart;
    this.mousedownOrTouchstartListener = this.handleMousedownOrTouchstart.bind(this);
    this.moveListener = this.handleMove.bind(this);
    this.pointerdownListener = this.handlePointerdown.bind(this);
    this.pointerupListener = this.handlePointerup.bind(this);
    this.thumbMouseenterListener = this.handleThumbMouseenter.bind(this);
    this.thumbMouseleaveListener = this.handleThumbMouseleave.bind(this);
    this.inputStartChangeListener = function() {
      _this.handleInputChange(Thumb.START);
    };
    this.inputEndChangeListener = function() {
      _this.handleInputChange(Thumb.END);
    };
    this.inputStartFocusListener = function() {
      _this.handleInputFocus(Thumb.START);
    };
    this.inputEndFocusListener = function() {
      _this.handleInputFocus(Thumb.END);
    };
    this.inputStartBlurListener = function() {
      _this.handleInputBlur(Thumb.START);
    };
    this.inputEndBlurListener = function() {
      _this.handleInputBlur(Thumb.END);
    };
    this.resizeListener = this.handleResize.bind(this);
    this.registerEventHandlers();
  };
  MDCSliderFoundation2.prototype.destroy = function() {
    this.deregisterEventHandlers();
  };
  MDCSliderFoundation2.prototype.setMin = function(value) {
    this.min = value;
    if (!this.isRange) {
      this.valueStart = value;
    }
    this.updateUI();
  };
  MDCSliderFoundation2.prototype.setMax = function(value) {
    this.max = value;
    this.updateUI();
  };
  MDCSliderFoundation2.prototype.getMin = function() {
    return this.min;
  };
  MDCSliderFoundation2.prototype.getMax = function() {
    return this.max;
  };
  MDCSliderFoundation2.prototype.getValue = function() {
    return this.value;
  };
  MDCSliderFoundation2.prototype.setValue = function(value) {
    if (this.isRange && value < this.valueStart) {
      throw new Error("end thumb value (" + value + ") must be >= start thumb " + ("value (" + this.valueStart + ")"));
    }
    this.updateValue(value, Thumb.END);
  };
  MDCSliderFoundation2.prototype.getValueStart = function() {
    if (!this.isRange) {
      throw new Error("`valueStart` is only applicable for range sliders.");
    }
    return this.valueStart;
  };
  MDCSliderFoundation2.prototype.setValueStart = function(valueStart) {
    if (!this.isRange) {
      throw new Error("`valueStart` is only applicable for range sliders.");
    }
    if (this.isRange && valueStart > this.value) {
      throw new Error("start thumb value (" + valueStart + ") must be <= end thumb " + ("value (" + this.value + ")"));
    }
    this.updateValue(valueStart, Thumb.START);
  };
  MDCSliderFoundation2.prototype.setStep = function(value) {
    this.step = value;
    this.numDecimalPlaces = getNumDecimalPlaces(value);
    this.updateUI();
  };
  MDCSliderFoundation2.prototype.setIsDiscrete = function(value) {
    this.isDiscrete = value;
    this.updateValueIndicatorUI();
    this.updateTickMarksUI();
  };
  MDCSliderFoundation2.prototype.getStep = function() {
    return this.step;
  };
  MDCSliderFoundation2.prototype.setHasTickMarks = function(value) {
    this.hasTickMarks = value;
    this.updateTickMarksUI();
  };
  MDCSliderFoundation2.prototype.getDisabled = function() {
    return this.isDisabled;
  };
  MDCSliderFoundation2.prototype.setDisabled = function(disabled) {
    this.isDisabled = disabled;
    if (disabled) {
      this.adapter.addClass(cssClasses.DISABLED);
      if (this.isRange) {
        this.adapter.setInputAttribute(attributes.INPUT_DISABLED, "", Thumb.START);
      }
      this.adapter.setInputAttribute(attributes.INPUT_DISABLED, "", Thumb.END);
    } else {
      this.adapter.removeClass(cssClasses.DISABLED);
      if (this.isRange) {
        this.adapter.removeInputAttribute(attributes.INPUT_DISABLED, Thumb.START);
      }
      this.adapter.removeInputAttribute(attributes.INPUT_DISABLED, Thumb.END);
    }
  };
  MDCSliderFoundation2.prototype.getIsRange = function() {
    return this.isRange;
  };
  MDCSliderFoundation2.prototype.layout = function(_a) {
    var _b = _a === void 0 ? {} : _a, skipUpdateUI = _b.skipUpdateUI;
    this.rect = this.adapter.getBoundingClientRect();
    if (this.isRange) {
      this.startThumbKnobWidth = this.adapter.getThumbKnobWidth(Thumb.START);
      this.endThumbKnobWidth = this.adapter.getThumbKnobWidth(Thumb.END);
    }
    if (!skipUpdateUI) {
      this.updateUI();
    }
  };
  MDCSliderFoundation2.prototype.handleResize = function() {
    this.layout();
  };
  MDCSliderFoundation2.prototype.handleDown = function(event) {
    if (this.isDisabled)
      return;
    this.valueStartBeforeDownEvent = this.valueStart;
    this.valueBeforeDownEvent = this.value;
    var clientX = event.clientX != null ? event.clientX : event.targetTouches[0].clientX;
    this.downEventClientX = clientX;
    var value = this.mapClientXOnSliderScale(clientX);
    this.thumb = this.getThumbFromDownEvent(clientX, value);
    if (this.thumb === null)
      return;
    this.handleDragStart(event, value, this.thumb);
    this.updateValue(value, this.thumb, { emitInputEvent: true });
  };
  MDCSliderFoundation2.prototype.handleMove = function(event) {
    if (this.isDisabled)
      return;
    event.preventDefault();
    var clientX = event.clientX != null ? event.clientX : event.targetTouches[0].clientX;
    var dragAlreadyStarted = this.thumb != null;
    this.thumb = this.getThumbFromMoveEvent(clientX);
    if (this.thumb === null)
      return;
    var value = this.mapClientXOnSliderScale(clientX);
    if (!dragAlreadyStarted) {
      this.handleDragStart(event, value, this.thumb);
      this.adapter.emitDragStartEvent(value, this.thumb);
    }
    this.updateValue(value, this.thumb, { emitInputEvent: true });
  };
  MDCSliderFoundation2.prototype.handleUp = function() {
    if (this.isDisabled || this.thumb === null)
      return;
    var oldValue = this.thumb === Thumb.START ? this.valueStartBeforeDownEvent : this.valueBeforeDownEvent;
    var newValue = this.thumb === Thumb.START ? this.valueStart : this.value;
    if (oldValue !== newValue) {
      this.adapter.emitChangeEvent(newValue, this.thumb);
    }
    this.adapter.emitDragEndEvent(newValue, this.thumb);
    this.thumb = null;
  };
  MDCSliderFoundation2.prototype.handleThumbMouseenter = function() {
    if (!this.isDiscrete || !this.isRange)
      return;
    this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.START);
    this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.END);
  };
  MDCSliderFoundation2.prototype.handleThumbMouseleave = function() {
    if (!this.isDiscrete || !this.isRange)
      return;
    if (this.adapter.isInputFocused(Thumb.START) || this.adapter.isInputFocused(Thumb.END)) {
      return;
    }
    this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.START);
    this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.END);
  };
  MDCSliderFoundation2.prototype.handleMousedownOrTouchstart = function(event) {
    var _this = this;
    var moveEventType = event.type === "mousedown" ? "mousemove" : "touchmove";
    this.adapter.registerBodyEventHandler(moveEventType, this.moveListener);
    var upHandler = function() {
      _this.handleUp();
      _this.adapter.deregisterBodyEventHandler(moveEventType, _this.moveListener);
      _this.adapter.deregisterEventHandler("mouseup", upHandler);
      _this.adapter.deregisterEventHandler("touchend", upHandler);
    };
    this.adapter.registerBodyEventHandler("mouseup", upHandler);
    this.adapter.registerBodyEventHandler("touchend", upHandler);
    this.handleDown(event);
  };
  MDCSliderFoundation2.prototype.handlePointerdown = function(event) {
    this.adapter.setPointerCapture(event.pointerId);
    this.adapter.registerEventHandler("pointermove", this.moveListener);
    this.handleDown(event);
  };
  MDCSliderFoundation2.prototype.handleInputChange = function(thumb) {
    var value = Number(this.adapter.getInputValue(thumb));
    if (thumb === Thumb.START) {
      this.setValueStart(value);
    } else {
      this.setValue(value);
    }
    this.adapter.emitChangeEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
    this.adapter.emitInputEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
  };
  MDCSliderFoundation2.prototype.handleInputFocus = function(thumb) {
    this.adapter.addThumbClass(cssClasses.THUMB_FOCUSED, thumb);
    if (!this.isDiscrete)
      return;
    this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, thumb);
    if (this.isRange) {
      var otherThumb = thumb === Thumb.START ? Thumb.END : Thumb.START;
      this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, otherThumb);
    }
  };
  MDCSliderFoundation2.prototype.handleInputBlur = function(thumb) {
    this.adapter.removeThumbClass(cssClasses.THUMB_FOCUSED, thumb);
    if (!this.isDiscrete)
      return;
    this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, thumb);
    if (this.isRange) {
      var otherThumb = thumb === Thumb.START ? Thumb.END : Thumb.START;
      this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, otherThumb);
    }
  };
  MDCSliderFoundation2.prototype.handleDragStart = function(event, value, thumb) {
    this.adapter.emitDragStartEvent(value, thumb);
    this.adapter.focusInput(thumb);
    event.preventDefault();
  };
  MDCSliderFoundation2.prototype.getThumbFromDownEvent = function(clientX, value) {
    if (!this.isRange)
      return Thumb.END;
    var thumbStartRect = this.adapter.getThumbBoundingClientRect(Thumb.START);
    var thumbEndRect = this.adapter.getThumbBoundingClientRect(Thumb.END);
    var inThumbStartBounds = clientX >= thumbStartRect.left && clientX <= thumbStartRect.right;
    var inThumbEndBounds = clientX >= thumbEndRect.left && clientX <= thumbEndRect.right;
    if (inThumbStartBounds && inThumbEndBounds) {
      return null;
    }
    if (inThumbStartBounds) {
      return Thumb.START;
    }
    if (inThumbEndBounds) {
      return Thumb.END;
    }
    if (value < this.valueStart) {
      return Thumb.START;
    }
    if (value > this.value) {
      return Thumb.END;
    }
    return value - this.valueStart <= this.value - value ? Thumb.START : Thumb.END;
  };
  MDCSliderFoundation2.prototype.getThumbFromMoveEvent = function(clientX) {
    if (this.thumb !== null)
      return this.thumb;
    if (this.downEventClientX === null) {
      throw new Error("`downEventClientX` is null after move event.");
    }
    var moveDistanceUnderThreshold = Math.abs(this.downEventClientX - clientX) < numbers.THUMB_UPDATE_MIN_PX;
    if (moveDistanceUnderThreshold)
      return this.thumb;
    var draggedThumbToLeft = clientX < this.downEventClientX;
    if (draggedThumbToLeft) {
      return this.adapter.isRTL() ? Thumb.END : Thumb.START;
    } else {
      return this.adapter.isRTL() ? Thumb.START : Thumb.END;
    }
  };
  MDCSliderFoundation2.prototype.updateUI = function(thumb) {
    this.updateThumbAndInputAttributes(thumb);
    this.updateThumbAndTrackUI(thumb);
    this.updateValueIndicatorUI(thumb);
    this.updateTickMarksUI();
  };
  MDCSliderFoundation2.prototype.updateThumbAndInputAttributes = function(thumb) {
    if (!thumb)
      return;
    var value = this.isRange && thumb === Thumb.START ? this.valueStart : this.value;
    var valueStr = String(value);
    this.adapter.setInputAttribute(attributes.INPUT_VALUE, valueStr, thumb);
    if (this.isRange && thumb === Thumb.START) {
      this.adapter.setInputAttribute(attributes.INPUT_MIN, valueStr, Thumb.END);
    } else if (this.isRange && thumb === Thumb.END) {
      this.adapter.setInputAttribute(attributes.INPUT_MAX, valueStr, Thumb.START);
    }
    if (this.adapter.getInputValue(thumb) !== valueStr) {
      this.adapter.setInputValue(valueStr, thumb);
    }
    var valueToAriaValueTextFn = this.adapter.getValueToAriaValueTextFn();
    if (valueToAriaValueTextFn) {
      this.adapter.setInputAttribute(attributes.ARIA_VALUETEXT, valueToAriaValueTextFn(value), thumb);
    }
  };
  MDCSliderFoundation2.prototype.updateValueIndicatorUI = function(thumb) {
    if (!this.isDiscrete)
      return;
    var value = this.isRange && thumb === Thumb.START ? this.valueStart : this.value;
    this.adapter.setValueIndicatorText(value, thumb === Thumb.START ? Thumb.START : Thumb.END);
    if (!thumb && this.isRange) {
      this.adapter.setValueIndicatorText(this.valueStart, Thumb.START);
    }
  };
  MDCSliderFoundation2.prototype.updateTickMarksUI = function() {
    if (!this.isDiscrete || !this.hasTickMarks)
      return;
    var numTickMarksInactiveStart = (this.valueStart - this.min) / this.step;
    var numTickMarksActive = (this.value - this.valueStart) / this.step + 1;
    var numTickMarksInactiveEnd = (this.max - this.value) / this.step;
    var tickMarksInactiveStart = Array.from({ length: numTickMarksInactiveStart }).fill(TickMark.INACTIVE);
    var tickMarksActive = Array.from({ length: numTickMarksActive }).fill(TickMark.ACTIVE);
    var tickMarksInactiveEnd = Array.from({ length: numTickMarksInactiveEnd }).fill(TickMark.INACTIVE);
    this.adapter.updateTickMarks(tickMarksInactiveStart.concat(tickMarksActive).concat(tickMarksInactiveEnd));
  };
  MDCSliderFoundation2.prototype.mapClientXOnSliderScale = function(clientX) {
    var xPos = clientX - this.rect.left;
    var pctComplete = xPos / this.rect.width;
    if (this.adapter.isRTL()) {
      pctComplete = 1 - pctComplete;
    }
    var value = this.min + pctComplete * (this.max - this.min);
    if (value === this.max || value === this.min) {
      return value;
    }
    return Number(this.quantize(value).toFixed(this.numDecimalPlaces));
  };
  MDCSliderFoundation2.prototype.quantize = function(value) {
    var numSteps = Math.round((value - this.min) / this.step);
    return this.min + numSteps * this.step;
  };
  MDCSliderFoundation2.prototype.updateValue = function(value, thumb, _a) {
    var _b = _a === void 0 ? {} : _a, emitInputEvent = _b.emitInputEvent;
    value = this.clampValue(value, thumb);
    if (this.isRange && thumb === Thumb.START) {
      if (this.valueStart === value)
        return;
      this.valueStart = value;
    } else {
      if (this.value === value)
        return;
      this.value = value;
    }
    this.updateUI(thumb);
    if (emitInputEvent) {
      this.adapter.emitInputEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
    }
  };
  MDCSliderFoundation2.prototype.clampValue = function(value, thumb) {
    value = Math.min(Math.max(value, this.min), this.max);
    var thumbStartMovedPastThumbEnd = this.isRange && thumb === Thumb.START && value > this.value;
    if (thumbStartMovedPastThumbEnd) {
      return this.value;
    }
    var thumbEndMovedPastThumbStart = this.isRange && thumb === Thumb.END && value < this.valueStart;
    if (thumbEndMovedPastThumbStart) {
      return this.valueStart;
    }
    return value;
  };
  MDCSliderFoundation2.prototype.updateThumbAndTrackUI = function(thumb) {
    var _this = this;
    var _a = this, max = _a.max, min = _a.min;
    var pctComplete = (this.value - this.valueStart) / (max - min);
    var rangePx = pctComplete * this.rect.width;
    var isRtl = this.adapter.isRTL();
    var transformProp = HAS_WINDOW ? getCorrectPropertyName(window, "transform") : "transform";
    if (this.isRange) {
      var thumbLeftPos_1 = this.adapter.isRTL() ? (max - this.value) / (max - min) * this.rect.width : (this.valueStart - min) / (max - min) * this.rect.width;
      var thumbRightPos_1 = thumbLeftPos_1 + rangePx;
      this.animFrame.request(AnimationKeys.SLIDER_UPDATE, function() {
        var trackAnimatesFromRight = !isRtl && thumb === Thumb.START || isRtl && thumb !== Thumb.START;
        if (trackAnimatesFromRight) {
          _this.adapter.setTrackActiveStyleProperty("transform-origin", "right");
          _this.adapter.setTrackActiveStyleProperty("left", "unset");
          _this.adapter.setTrackActiveStyleProperty("right", _this.rect.width - thumbRightPos_1 + "px");
        } else {
          _this.adapter.setTrackActiveStyleProperty("transform-origin", "left");
          _this.adapter.setTrackActiveStyleProperty("right", "unset");
          _this.adapter.setTrackActiveStyleProperty("left", thumbLeftPos_1 + "px");
        }
        _this.adapter.setTrackActiveStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
        var thumbStartPos = isRtl ? thumbRightPos_1 : thumbLeftPos_1;
        var thumbEndPos = _this.adapter.isRTL() ? thumbLeftPos_1 : thumbRightPos_1;
        if (thumb === Thumb.START || !thumb || !_this.initialStylesRemoved) {
          _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbStartPos + "px)", Thumb.START);
        }
        if (thumb === Thumb.END || !thumb || !_this.initialStylesRemoved) {
          _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbEndPos + "px)", Thumb.END);
        }
        _this.removeInitialStyles(isRtl);
        _this.updateOverlappingThumbsUI(thumbStartPos, thumbEndPos, thumb);
      });
    } else {
      this.animFrame.request(AnimationKeys.SLIDER_UPDATE, function() {
        var thumbStartPos = isRtl ? _this.rect.width - rangePx : rangePx;
        _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbStartPos + "px)", Thumb.END);
        _this.adapter.setTrackActiveStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
        _this.removeInitialStyles(isRtl);
      });
    }
  };
  MDCSliderFoundation2.prototype.removeInitialStyles = function(isRtl) {
    if (this.initialStylesRemoved)
      return;
    var position = isRtl ? "right" : "left";
    this.adapter.removeThumbStyleProperty(position, Thumb.END);
    if (this.isRange) {
      this.adapter.removeThumbStyleProperty(position, Thumb.START);
    }
    this.initialStylesRemoved = true;
    this.resetTrackAndThumbAnimation();
  };
  MDCSliderFoundation2.prototype.resetTrackAndThumbAnimation = function() {
    var _this = this;
    if (!this.isDiscrete)
      return;
    var transitionProp = HAS_WINDOW ? getCorrectPropertyName(window, "transition") : "transition";
    var transitionDefault = "all 0s ease 0s";
    this.adapter.setThumbStyleProperty(transitionProp, transitionDefault, Thumb.END);
    if (this.isRange) {
      this.adapter.setThumbStyleProperty(transitionProp, transitionDefault, Thumb.START);
    }
    this.adapter.setTrackActiveStyleProperty(transitionProp, transitionDefault);
    requestAnimationFrame(function() {
      _this.adapter.removeThumbStyleProperty(transitionProp, Thumb.END);
      _this.adapter.removeTrackActiveStyleProperty(transitionProp);
      if (_this.isRange) {
        _this.adapter.removeThumbStyleProperty(transitionProp, Thumb.START);
      }
    });
  };
  MDCSliderFoundation2.prototype.updateOverlappingThumbsUI = function(thumbStartPos, thumbEndPos, thumb) {
    var thumbsOverlap = false;
    if (this.adapter.isRTL()) {
      var startThumbLeftEdge = thumbStartPos - this.startThumbKnobWidth / 2;
      var endThumbRightEdge = thumbEndPos + this.endThumbKnobWidth / 2;
      thumbsOverlap = endThumbRightEdge >= startThumbLeftEdge;
    } else {
      var startThumbRightEdge = thumbStartPos + this.startThumbKnobWidth / 2;
      var endThumbLeftEdge = thumbEndPos - this.endThumbKnobWidth / 2;
      thumbsOverlap = startThumbRightEdge >= endThumbLeftEdge;
    }
    if (thumbsOverlap) {
      this.adapter.addThumbClass(cssClasses.THUMB_TOP, thumb || Thumb.END);
      this.adapter.removeThumbClass(cssClasses.THUMB_TOP, thumb === Thumb.START ? Thumb.END : Thumb.START);
    } else {
      this.adapter.removeThumbClass(cssClasses.THUMB_TOP, Thumb.START);
      this.adapter.removeThumbClass(cssClasses.THUMB_TOP, Thumb.END);
    }
  };
  MDCSliderFoundation2.prototype.convertAttributeValueToNumber = function(attributeValue, attributeName) {
    if (attributeValue === null) {
      throw new Error("MDCSliderFoundation: `" + attributeName + "` must be non-null.");
    }
    var value = Number(attributeValue);
    if (isNaN(value)) {
      throw new Error("MDCSliderFoundation: `" + attributeName + "` value is " + ("`" + attributeValue + "`, but must be a number."));
    }
    return value;
  };
  MDCSliderFoundation2.prototype.validateProperties = function(_a) {
    var min = _a.min, max = _a.max, value = _a.value, valueStart = _a.valueStart, step = _a.step;
    if (min >= max) {
      throw new Error("MDCSliderFoundation: min must be strictly less than max. " + ("Current: [min: " + min + ", max: " + max + "]"));
    }
    if (step <= 0) {
      throw new Error("MDCSliderFoundation: step must be a positive number. " + ("Current step: " + this.step));
    }
    if (this.isRange) {
      if (value < min || value > max || valueStart < min || valueStart > max) {
        throw new Error("MDCSliderFoundation: values must be in [min, max] range. " + ("Current values: [start value: " + valueStart + ", end value: " + value + "]"));
      }
      if (valueStart > value) {
        throw new Error("MDCSliderFoundation: start value must be <= end value. " + ("Current values: [start value: " + valueStart + ", end value: " + value + "]"));
      }
      var numStepsValueStartFromMin = (valueStart - min) / step;
      var numStepsValueFromMin = (value - min) / step;
      if (numStepsValueStartFromMin % 1 !== 0 || numStepsValueFromMin % 1 !== 0) {
        throw new Error("MDCSliderFoundation: Slider values must be valid based on the " + ("step value. Current values: [start value: " + valueStart + ", ") + ("end value: " + value + "]"));
      }
    } else {
      if (value < min || value > max) {
        throw new Error("MDCSliderFoundation: value must be in [min, max] range. " + ("Current value: " + value));
      }
      var numStepsValueFromMin = (value - min) / step;
      if (numStepsValueFromMin % 1 !== 0) {
        throw new Error("MDCSliderFoundation: Slider value must be valid based on the " + ("step value. Current value: " + value));
      }
    }
  };
  MDCSliderFoundation2.prototype.registerEventHandlers = function() {
    this.adapter.registerWindowEventHandler("resize", this.resizeListener);
    if (MDCSliderFoundation2.SUPPORTS_POINTER_EVENTS) {
      this.adapter.registerEventHandler("pointerdown", this.pointerdownListener);
      this.adapter.registerEventHandler("pointerup", this.pointerupListener);
    } else {
      this.adapter.registerEventHandler("mousedown", this.mousedownOrTouchstartListener);
      this.adapter.registerEventHandler("touchstart", this.mousedownOrTouchstartListener);
    }
    if (this.isRange) {
      this.adapter.registerThumbEventHandler(Thumb.START, "mouseenter", this.thumbMouseenterListener);
      this.adapter.registerThumbEventHandler(Thumb.START, "mouseleave", this.thumbMouseleaveListener);
      this.adapter.registerInputEventHandler(Thumb.START, "change", this.inputStartChangeListener);
      this.adapter.registerInputEventHandler(Thumb.START, "focus", this.inputStartFocusListener);
      this.adapter.registerInputEventHandler(Thumb.START, "blur", this.inputStartBlurListener);
    }
    this.adapter.registerThumbEventHandler(Thumb.END, "mouseenter", this.thumbMouseenterListener);
    this.adapter.registerThumbEventHandler(Thumb.END, "mouseleave", this.thumbMouseleaveListener);
    this.adapter.registerInputEventHandler(Thumb.END, "change", this.inputEndChangeListener);
    this.adapter.registerInputEventHandler(Thumb.END, "focus", this.inputEndFocusListener);
    this.adapter.registerInputEventHandler(Thumb.END, "blur", this.inputEndBlurListener);
  };
  MDCSliderFoundation2.prototype.deregisterEventHandlers = function() {
    this.adapter.deregisterWindowEventHandler("resize", this.resizeListener);
    if (MDCSliderFoundation2.SUPPORTS_POINTER_EVENTS) {
      this.adapter.deregisterEventHandler("pointerdown", this.pointerdownListener);
      this.adapter.deregisterEventHandler("pointerup", this.pointerupListener);
    } else {
      this.adapter.deregisterEventHandler("mousedown", this.mousedownOrTouchstartListener);
      this.adapter.deregisterEventHandler("touchstart", this.mousedownOrTouchstartListener);
    }
    if (this.isRange) {
      this.adapter.deregisterThumbEventHandler(Thumb.START, "mouseenter", this.thumbMouseenterListener);
      this.adapter.deregisterThumbEventHandler(Thumb.START, "mouseleave", this.thumbMouseleaveListener);
      this.adapter.deregisterInputEventHandler(Thumb.START, "change", this.inputStartChangeListener);
      this.adapter.deregisterInputEventHandler(Thumb.START, "focus", this.inputStartFocusListener);
      this.adapter.deregisterInputEventHandler(Thumb.START, "blur", this.inputStartBlurListener);
    }
    this.adapter.deregisterThumbEventHandler(Thumb.END, "mouseenter", this.thumbMouseenterListener);
    this.adapter.deregisterThumbEventHandler(Thumb.END, "mouseleave", this.thumbMouseleaveListener);
    this.adapter.deregisterInputEventHandler(Thumb.END, "change", this.inputEndChangeListener);
    this.adapter.deregisterInputEventHandler(Thumb.END, "focus", this.inputEndFocusListener);
    this.adapter.deregisterInputEventHandler(Thumb.END, "blur", this.inputEndBlurListener);
  };
  MDCSliderFoundation2.prototype.handlePointerup = function() {
    this.handleUp();
    this.adapter.deregisterEventHandler("pointermove", this.moveListener);
  };
  MDCSliderFoundation2.SUPPORTS_POINTER_EVENTS = HAS_WINDOW && Boolean(window.PointerEvent) && !isIOS();
  return MDCSliderFoundation2;
}(MDCFoundation);
function isIOS() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function getNumDecimalPlaces(n) {
  var match = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(n));
  if (!match)
    return 0;
  var fraction = match[1] || "";
  var exponent = match[2] || 0;
  return Math.max(0, (fraction === "0" ? 0 : fraction.length) - Number(exponent));
}
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
var MDCSlider = function(_super) {
  __extends(MDCSlider2, _super);
  function MDCSlider2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.skipInitialUIUpdate = false;
    _this.valueToAriaValueTextFn = null;
    return _this;
  }
  MDCSlider2.attachTo = function(root, options) {
    if (options === void 0) {
      options = {};
    }
    return new MDCSlider2(root, void 0, options);
  };
  MDCSlider2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      hasClass: function(className) {
        return _this.root.classList.contains(className);
      },
      addClass: function(className) {
        _this.root.classList.add(className);
      },
      removeClass: function(className) {
        _this.root.classList.remove(className);
      },
      addThumbClass: function(className, thumb) {
        _this.getThumbEl(thumb).classList.add(className);
      },
      removeThumbClass: function(className, thumb) {
        _this.getThumbEl(thumb).classList.remove(className);
      },
      getAttribute: function(attribute) {
        return _this.root.getAttribute(attribute);
      },
      getInputValue: function(thumb) {
        return _this.getInput(thumb).value;
      },
      setInputValue: function(value, thumb) {
        _this.getInput(thumb).value = value;
      },
      getInputAttribute: function(attribute, thumb) {
        return _this.getInput(thumb).getAttribute(attribute);
      },
      setInputAttribute: function(attribute, value, thumb) {
        _this.getInput(thumb).setAttribute(attribute, value);
      },
      removeInputAttribute: function(attribute, thumb) {
        _this.getInput(thumb).removeAttribute(attribute);
      },
      focusInput: function(thumb) {
        _this.getInput(thumb).focus();
      },
      isInputFocused: function(thumb) {
        return _this.getInput(thumb) === document.activeElement;
      },
      getThumbKnobWidth: function(thumb) {
        return _this.getThumbEl(thumb).querySelector("." + cssClasses.THUMB_KNOB).getBoundingClientRect().width;
      },
      getThumbBoundingClientRect: function(thumb) {
        return _this.getThumbEl(thumb).getBoundingClientRect();
      },
      getBoundingClientRect: function() {
        return _this.root.getBoundingClientRect();
      },
      isRTL: function() {
        return getComputedStyle(_this.root).direction === "rtl";
      },
      setThumbStyleProperty: function(propertyName, value, thumb) {
        _this.getThumbEl(thumb).style.setProperty(propertyName, value);
      },
      removeThumbStyleProperty: function(propertyName, thumb) {
        _this.getThumbEl(thumb).style.removeProperty(propertyName);
      },
      setTrackActiveStyleProperty: function(propertyName, value) {
        _this.trackActive.style.setProperty(propertyName, value);
      },
      removeTrackActiveStyleProperty: function(propertyName) {
        _this.trackActive.style.removeProperty(propertyName);
      },
      setValueIndicatorText: function(value, thumb) {
        var valueIndicatorEl = _this.getThumbEl(thumb).querySelector("." + cssClasses.VALUE_INDICATOR_TEXT);
        valueIndicatorEl.textContent = String(value);
      },
      getValueToAriaValueTextFn: function() {
        return _this.valueToAriaValueTextFn;
      },
      updateTickMarks: function(tickMarks) {
        var tickMarksContainer = _this.root.querySelector("." + cssClasses.TICK_MARKS_CONTAINER);
        if (!tickMarksContainer) {
          tickMarksContainer = document.createElement("div");
          tickMarksContainer.classList.add(cssClasses.TICK_MARKS_CONTAINER);
          var track = _this.root.querySelector("." + cssClasses.TRACK);
          track.appendChild(tickMarksContainer);
        }
        if (tickMarks.length !== tickMarksContainer.children.length) {
          while (tickMarksContainer.firstChild) {
            tickMarksContainer.removeChild(tickMarksContainer.firstChild);
          }
          _this.addTickMarks(tickMarksContainer, tickMarks);
        } else {
          _this.updateTickMarks(tickMarksContainer, tickMarks);
        }
      },
      setPointerCapture: function(pointerId) {
        _this.root.setPointerCapture(pointerId);
      },
      emitChangeEvent: function(value, thumb) {
        _this.emit(events.CHANGE, { value, thumb });
      },
      emitInputEvent: function(value, thumb) {
        _this.emit(events.INPUT, { value, thumb });
      },
      emitDragStartEvent: function(_, thumb) {
        _this.getRipple(thumb).activate();
      },
      emitDragEndEvent: function(_, thumb) {
        _this.getRipple(thumb).deactivate();
      },
      registerEventHandler: function(evtType, handler) {
        _this.listen(evtType, handler);
      },
      deregisterEventHandler: function(evtType, handler) {
        _this.unlisten(evtType, handler);
      },
      registerThumbEventHandler: function(thumb, evtType, handler) {
        _this.getThumbEl(thumb).addEventListener(evtType, handler);
      },
      deregisterThumbEventHandler: function(thumb, evtType, handler) {
        _this.getThumbEl(thumb).removeEventListener(evtType, handler);
      },
      registerInputEventHandler: function(thumb, evtType, handler) {
        _this.getInput(thumb).addEventListener(evtType, handler);
      },
      deregisterInputEventHandler: function(thumb, evtType, handler) {
        _this.getInput(thumb).removeEventListener(evtType, handler);
      },
      registerBodyEventHandler: function(evtType, handler) {
        document.body.addEventListener(evtType, handler);
      },
      deregisterBodyEventHandler: function(evtType, handler) {
        document.body.removeEventListener(evtType, handler);
      },
      registerWindowEventHandler: function(evtType, handler) {
        window.addEventListener(evtType, handler);
      },
      deregisterWindowEventHandler: function(evtType, handler) {
        window.removeEventListener(evtType, handler);
      }
    };
    return new MDCSliderFoundation(adapter);
  };
  MDCSlider2.prototype.initialize = function(_a) {
    var _b = _a === void 0 ? {} : _a, skipInitialUIUpdate = _b.skipInitialUIUpdate;
    this.inputs = [].slice.call(this.root.querySelectorAll("." + cssClasses.INPUT));
    this.thumbs = [].slice.call(this.root.querySelectorAll("." + cssClasses.THUMB));
    this.trackActive = this.root.querySelector("." + cssClasses.TRACK_ACTIVE);
    this.ripples = this.createRipples();
    if (skipInitialUIUpdate) {
      this.skipInitialUIUpdate = true;
    }
  };
  MDCSlider2.prototype.initialSyncWithDOM = function() {
    this.foundation.layout({ skipUpdateUI: this.skipInitialUIUpdate });
  };
  MDCSlider2.prototype.layout = function() {
    this.foundation.layout();
  };
  MDCSlider2.prototype.getValueStart = function() {
    return this.foundation.getValueStart();
  };
  MDCSlider2.prototype.setValueStart = function(valueStart) {
    this.foundation.setValueStart(valueStart);
  };
  MDCSlider2.prototype.getValue = function() {
    return this.foundation.getValue();
  };
  MDCSlider2.prototype.setValue = function(value) {
    this.foundation.setValue(value);
  };
  MDCSlider2.prototype.getDisabled = function() {
    return this.foundation.getDisabled();
  };
  MDCSlider2.prototype.setDisabled = function(disabled) {
    this.foundation.setDisabled(disabled);
  };
  MDCSlider2.prototype.setValueToAriaValueTextFn = function(mapFn) {
    this.valueToAriaValueTextFn = mapFn;
  };
  MDCSlider2.prototype.getThumbEl = function(thumb) {
    return thumb === Thumb.END ? this.thumbs[this.thumbs.length - 1] : this.thumbs[0];
  };
  MDCSlider2.prototype.getInput = function(thumb) {
    return thumb === Thumb.END ? this.inputs[this.inputs.length - 1] : this.inputs[0];
  };
  MDCSlider2.prototype.getRipple = function(thumb) {
    return thumb === Thumb.END ? this.ripples[this.ripples.length - 1] : this.ripples[0];
  };
  MDCSlider2.prototype.addTickMarks = function(tickMarkContainer, tickMarks) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < tickMarks.length; i++) {
      var div = document.createElement("div");
      var tickMarkClass = tickMarks[i] === TickMark.ACTIVE ? cssClasses.TICK_MARK_ACTIVE : cssClasses.TICK_MARK_INACTIVE;
      div.classList.add(tickMarkClass);
      fragment.appendChild(div);
    }
    tickMarkContainer.appendChild(fragment);
  };
  MDCSlider2.prototype.updateTickMarks = function(tickMarkContainer, tickMarks) {
    var tickMarkEls = Array.from(tickMarkContainer.children);
    for (var i = 0; i < tickMarkEls.length; i++) {
      if (tickMarks[i] === TickMark.ACTIVE) {
        tickMarkEls[i].classList.add(cssClasses.TICK_MARK_ACTIVE);
        tickMarkEls[i].classList.remove(cssClasses.TICK_MARK_INACTIVE);
      } else {
        tickMarkEls[i].classList.add(cssClasses.TICK_MARK_INACTIVE);
        tickMarkEls[i].classList.remove(cssClasses.TICK_MARK_ACTIVE);
      }
    }
  };
  MDCSlider2.prototype.createRipples = function() {
    var ripples = [];
    var rippleSurfaces = [].slice.call(this.root.querySelectorAll("." + cssClasses.THUMB));
    var _loop_1 = function(i2) {
      var rippleSurface = rippleSurfaces[i2];
      var input = this_1.inputs[i2];
      var adapter = __assign(__assign({}, MDCRipple.createAdapter(this_1)), { addClass: function(className) {
        rippleSurface.classList.add(className);
      }, computeBoundingRect: function() {
        return rippleSurface.getBoundingClientRect();
      }, deregisterInteractionHandler: function(evtType, handler) {
        input.removeEventListener(evtType, handler);
      }, isSurfaceActive: function() {
        return matches(input, ":active");
      }, isUnbounded: function() {
        return true;
      }, registerInteractionHandler: function(evtType, handler) {
        input.addEventListener(evtType, handler, applyPassive());
      }, removeClass: function(className) {
        rippleSurface.classList.remove(className);
      }, updateCssVariable: function(varName, value) {
        rippleSurface.style.setProperty(varName, value);
      } });
      var ripple = new MDCRipple(rippleSurface, new MDCRippleFoundation(adapter));
      ripple.unbounded = true;
      ripples.push(ripple);
    };
    var this_1 = this;
    for (var i = 0; i < rippleSurfaces.length; i++) {
      _loop_1(i);
    }
    return ripples;
  };
  return MDCSlider2;
}(MDCComponent);
const inoRangeCss = '@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-slider__thumb{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-slider__thumb::before,.mdc-slider__thumb::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-slider__thumb::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-slider__thumb::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-slider__thumb.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-slider__thumb.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-slider__thumb.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-slider__thumb.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-slider__thumb.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-slider__thumb::before,.mdc-slider__thumb::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-slider__thumb.mdc-ripple-upgraded::before,.mdc-slider__thumb.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-slider__thumb.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-slider__thumb::before,.mdc-slider__thumb::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}.mdc-slider__thumb:hover::before,.mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,.mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider{cursor:pointer;height:48px;margin:0 24px;position:relative;touch-action:pan-y}.mdc-slider .mdc-slider__track{height:4px;position:absolute;top:50%;transform:translateY(-50%);width:100%}.mdc-slider .mdc-slider__track--active,.mdc-slider .mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider .mdc-slider__track--active{border-radius:3px;height:6px;overflow:hidden;top:-1px}.mdc-slider .mdc-slider__track--active_fill{border-top:6px solid;box-sizing:border-box;height:100%;width:100%;position:relative;-webkit-transform-origin:left;transform-origin:left}[dir=rtl] .mdc-slider .mdc-slider__track--active_fill,.mdc-slider .mdc-slider__track--active_fill[dir=rtl]{-webkit-transform-origin:right;transform-origin:right;}.mdc-slider .mdc-slider__track--inactive{border-radius:2px;height:4px;left:0;top:0}.mdc-slider .mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-slider .mdc-slider__track--active_fill{border-color:#3d40f5;border-color:var(--mdc-theme-primary, #3d40f5)}.mdc-slider.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider .mdc-slider__track--inactive{background-color:#3d40f5;background-color:var(--mdc-theme-primary, #3d40f5);opacity:0.24}.mdc-slider.mdc-slider--disabled .mdc-slider__track--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:0.24}.mdc-slider .mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:translateX(-50%)}.mdc-slider .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1);align-items:center;border-radius:4px;display:flex;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom}.mdc-slider .mdc-slider__value-indicator::before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0}.mdc-slider .mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}@media (prefers-reduced-motion){.mdc-slider .mdc-slider__value-indicator,.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:none}}.mdc-slider .mdc-slider__value-indicator-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit)}.mdc-slider .mdc-slider__value-indicator{background-color:#000;opacity:0.6}.mdc-slider .mdc-slider__value-indicator::before{border-top-color:#000}.mdc-slider .mdc-slider__value-indicator{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-slider .mdc-slider__thumb{display:flex;height:48px;left:-24px;outline:none;position:absolute;user-select:none;width:48px}.mdc-slider .mdc-slider__thumb--top{z-index:1}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-style:solid;border-width:1px;box-sizing:content-box}.mdc-slider .mdc-slider__thumb-knob{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);border:10px solid;border-radius:50%;box-sizing:border-box;height:20px;left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);width:20px}.mdc-slider .mdc-slider__thumb-knob{background-color:#3d40f5;background-color:var(--mdc-theme-primary, #3d40f5);border-color:#3d40f5;border-color:var(--mdc-theme-primary, #3d40f5)}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider .mdc-slider__thumb::before,.mdc-slider .mdc-slider__thumb::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}.mdc-slider .mdc-slider__thumb:hover::before,.mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider .mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider .mdc-slider__tick-mark--active,.mdc-slider .mdc-slider__tick-mark--inactive{border-radius:50%;height:2px;width:2px}.mdc-slider .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:0.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:0.6}.mdc-slider .mdc-slider__tick-mark--inactive{background-color:#3d40f5;background-color:var(--mdc-theme-primary, #3d40f5);opacity:0.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:0.6}.mdc-slider.mdc-slider--disabled{opacity:0.38;cursor:auto}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:transform 80ms ease}@media (prefers-reduced-motion){.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:none}}.mdc-slider__input{cursor:pointer;left:0;margin:0;height:100%;opacity:0;pointer-events:none;position:absolute;top:0;width:100%}ino-range{display:block;min-width:100px}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__track--active_fill{border-color:#3d40f5}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__track--inactive{background-color:#5d60f7;opacity:0.24}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb-knob{background-color:#3d40f5;border-color:#3d40f5}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb::before,ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, #3d40f5)}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb:hover::before,ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__tick-mark--inactive{background-color:#000;opacity:0.6}ino-range.ino-range--color-scheme-primary .mdc-slider .mdc-slider__value-indicator{color:#fff}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__track--active_fill{border-color:#9ccd00}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__track--inactive{background-color:#bbd962;opacity:0.24}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb-knob{background-color:#9ccd00;border-color:#9ccd00}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb::before,ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb::after{background-color:#9ccd00;background-color:var(--mdc-ripple-color, #9ccd00)}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb:hover::before,ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__tick-mark--inactive{background-color:#000;opacity:0.6}ino-range.ino-range--color-scheme-secondary .mdc-slider .mdc-slider__value-indicator{color:#fff}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__track--active_fill{border-color:#9ccd00}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__track--inactive{background-color:#c8ff1b;opacity:0.24}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb-knob{background-color:#9ccd00;border-color:#9ccd00}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb::before,ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb::after{background-color:#9ccd00;background-color:var(--mdc-ripple-color, #9ccd00)}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb:hover::before,ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__tick-mark--inactive{background-color:#000;opacity:0.6}ino-range.ino-range--color-scheme-success .mdc-slider .mdc-slider__value-indicator{color:#fff}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__track--active_fill{border-color:#ffde03}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__track--inactive{background-color:#ffe850;opacity:0.24}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb-knob{background-color:#ffde03;border-color:#ffde03}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb::before,ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb::after{background-color:#ffde03;background-color:var(--mdc-ripple-color, #ffde03)}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb:hover::before,ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__tick-mark--inactive{background-color:#000;opacity:0.6}ino-range.ino-range--color-scheme-warning .mdc-slider .mdc-slider__value-indicator{color:#fff}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__track--active_fill{border-color:#eb003b}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__track--inactive{background-color:#ff396a;opacity:0.24}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb-knob{background-color:#eb003b;border-color:#eb003b}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb::before,ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb::after{background-color:#eb003b;background-color:var(--mdc-ripple-color, #eb003b)}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb:hover::before,ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__tick-mark--inactive{background-color:#000;opacity:0.6}ino-range.ino-range--color-scheme-error .mdc-slider .mdc-slider__value-indicator{color:#fff}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__track--active_fill{border-color:#c1c1c1}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__track--inactive{background-color:#e7e7e7;opacity:0.24}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb-knob{background-color:#c1c1c1;border-color:#c1c1c1}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb::before,ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb::after{background-color:#c1c1c1;background-color:var(--mdc-ripple-color, #c1c1c1)}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb:hover::before,ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__tick-mark--inactive{background-color:#000;opacity:0.6}ino-range.ino-range--color-scheme-light .mdc-slider .mdc-slider__value-indicator{color:#fff}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__track--active_fill{border-color:#777777}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__track--inactive{background-color:#9d9d9d;opacity:0.24}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb-knob{background-color:#777777;border-color:#777777}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb::before,ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb::after{background-color:#777777;background-color:var(--mdc-ripple-color, #777777)}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb:hover::before,ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__tick-mark--inactive{background-color:#000;opacity:0.6}ino-range.ino-range--color-scheme-dark .mdc-slider .mdc-slider__value-indicator{color:#fff}';
let Range = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.valueStartChange = createEvent(this, "valueStartChange", 7);
    this.valueEndChange = createEvent(this, "valueEndChange", 7);
    this.colorScheme = "primary";
    this.min = 0;
    this.ranged = false;
    this.step = 1;
    this.handleInput = (e) => {
      e.stopPropagation();
      const { thumb, value } = e.detail;
      if (!this.ranged) {
        this.sliderInstance.setValue(this.value);
        this.valueChange.emit(value);
        return;
      }
      if (thumb === Thumb.START) {
        this.sliderInstance.setValueStart(this.valueStart);
        this.valueStartChange.emit(value);
        return;
      }
      if (thumb === Thumb.END) {
        this.sliderInstance.setValue(this.valueEnd);
        this.valueEndChange.emit(value);
        return;
      }
    };
  }
  handleValueChange(newValue) {
    this.sliderInstance.setValue(newValue);
  }
  handleRangedValueChanged(newValue) {
    this.sliderInstance.setValueStart(newValue);
  }
  componentDidLoad() {
    var _a;
    this.inputElEnd.setAttribute("value", `${this.valueEnd || this.value || this.min}`);
    (_a = this.inputElStart) === null || _a === void 0 ? void 0 : _a.setAttribute("value", `${this.valueStart}`);
    this.sliderInstance = new MDCSlider(this.sliderEl);
    this.sliderInstance.listen("MDCSlider:change", preventEvent);
    this.sliderInstance.listen("MDCSlider:input", this.handleInput);
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.sliderInstance) === null || _a === void 0 ? void 0 : _a.unlisten("MDCSlider:change", preventEvent);
    (_b = this.sliderInstance) === null || _b === void 0 ? void 0 : _b.unlisten("MDCSlider:input", this.handleInput);
    (_c = this.sliderInstance) === null || _c === void 0 ? void 0 : _c.destroy();
  }
  async setValueToAriaTextMapperFn(fn) {
    this.sliderInstance.setValueToAriaValueTextFn(fn);
  }
  render() {
    const hostClasses = classnames(`ino-range--color-scheme-${this.colorScheme}`);
    const sliderClasses = classnames({
      "mdc-slider": true,
      "mdc-slider--discrete": this.discrete,
      "mdc-slider--tick-marks": this.markers,
      "mdc-slider--disabled": this.disabled,
      "mdc-slider--range": this.ranged
    });
    return h(Host, { class: hostClasses }, h("div", { ref: (el) => this.sliderEl = el, class: sliderClasses }, this.ranged && h("input", { ref: (el) => this.inputElStart = el, class: "mdc-slider__input", type: "range", min: this.min, max: this.valueEnd, value: this.valueStart || this.max || 0 }), h("input", { ref: (el) => this.inputElEnd = el, class: "mdc-slider__input", type: "range", min: this.ranged ? this.valueStart : this.min, max: this.max, step: this.step, value: this.valueEnd || this.value || this.min || 0, disabled: this.disabled, name: this.name, "aria-label": this.name }), h("div", { class: "mdc-slider__track" }, h("div", { class: "mdc-slider__track--inactive" }), h("div", { class: "mdc-slider__track--active" }, h("div", { class: "mdc-slider__track--active_fill" })), this.markers && h("div", { class: "mdc-slider__tick-marks" }, h("div", { class: "mdc-slider__tick-mark--active" }))), h("div", { class: "mdc-slider__thumb" }, this.discrete && Range.renderValueIndicator(this.value || this.valueStart), h("div", { class: "mdc-slider__thumb-knob" })), this.ranged && h("div", { class: "mdc-slider__thumb" }, this.discrete && Range.renderValueIndicator(this.valueEnd), h("div", { class: "mdc-slider__thumb-knob" }))));
  }
  static renderValueIndicator(value) {
    return h("div", { class: "mdc-slider__value-indicator-container", "aria-hidden": true }, h("div", { class: "mdc-slider__value-indicator" }, h("span", { class: "mdc-slider__value-indicator-text" }, value)));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["handleValueChange"],
      "valueEnd": ["handleValueChange"],
      "valueStart": ["handleRangedValueChanged"]
    };
  }
};
Range.style = inoRangeCss;
export { Range as ino_range };
