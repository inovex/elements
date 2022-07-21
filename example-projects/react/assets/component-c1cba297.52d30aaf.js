import { _ as __extends, a as __assign, c as MDCFoundation, M as MDCComponent } from "./component-97c8fef9.061cf906.js";
import { e as estimateScrollWidth } from "./ponyfill-495ec32d.2f34f215.js";
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
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
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
var MDCFloatingLabelFoundation = function(_super) {
  __extends(MDCFloatingLabelFoundation2, _super);
  function MDCFloatingLabelFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation2.defaultAdapter), adapter)) || this;
    _this.shakeAnimationEndHandler = function() {
      _this.handleShakeAnimationEnd();
    };
    return _this;
  }
  Object.defineProperty(MDCFloatingLabelFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFloatingLabelFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        getWidth: function() {
          return 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCFloatingLabelFoundation2.prototype.init = function() {
    this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
  };
  MDCFloatingLabelFoundation2.prototype.destroy = function() {
    this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
  };
  MDCFloatingLabelFoundation2.prototype.getWidth = function() {
    return this.adapter.getWidth();
  };
  MDCFloatingLabelFoundation2.prototype.shake = function(shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
    if (shouldShake) {
      this.adapter.addClass(LABEL_SHAKE);
    } else {
      this.adapter.removeClass(LABEL_SHAKE);
    }
  };
  MDCFloatingLabelFoundation2.prototype.float = function(shouldFloat) {
    var _a = MDCFloatingLabelFoundation2.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
    if (shouldFloat) {
      this.adapter.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter.removeClass(LABEL_SHAKE);
    }
  };
  MDCFloatingLabelFoundation2.prototype.setRequired = function(isRequired) {
    var LABEL_REQUIRED = MDCFloatingLabelFoundation2.cssClasses.LABEL_REQUIRED;
    if (isRequired) {
      this.adapter.addClass(LABEL_REQUIRED);
    } else {
      this.adapter.removeClass(LABEL_REQUIRED);
    }
  };
  MDCFloatingLabelFoundation2.prototype.handleShakeAnimationEnd = function() {
    var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
    this.adapter.removeClass(LABEL_SHAKE);
  };
  return MDCFloatingLabelFoundation2;
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
var MDCFloatingLabel = function(_super) {
  __extends(MDCFloatingLabel2, _super);
  function MDCFloatingLabel2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCFloatingLabel2.attachTo = function(root) {
    return new MDCFloatingLabel2(root);
  };
  MDCFloatingLabel2.prototype.shake = function(shouldShake) {
    this.foundation.shake(shouldShake);
  };
  MDCFloatingLabel2.prototype.float = function(shouldFloat) {
    this.foundation.float(shouldFloat);
  };
  MDCFloatingLabel2.prototype.setRequired = function(isRequired) {
    this.foundation.setRequired(isRequired);
  };
  MDCFloatingLabel2.prototype.getWidth = function() {
    return this.foundation.getWidth();
  };
  MDCFloatingLabel2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClass: function(className) {
        return _this.root.classList.add(className);
      },
      removeClass: function(className) {
        return _this.root.classList.remove(className);
      },
      getWidth: function() {
        return estimateScrollWidth(_this.root);
      },
      registerInteractionHandler: function(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    };
    return new MDCFloatingLabelFoundation(adapter);
  };
  return MDCFloatingLabel2;
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
var cssClasses$1 = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
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
var MDCLineRippleFoundation = function(_super) {
  __extends(MDCLineRippleFoundation2, _super);
  function MDCLineRippleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.transitionEndHandler = function(evt) {
      _this.handleTransitionEnd(evt);
    };
    return _this;
  }
  Object.defineProperty(MDCLineRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCLineRippleFoundation2, "defaultAdapter", {
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
        setStyle: function() {
          return void 0;
        },
        registerEventHandler: function() {
          return void 0;
        },
        deregisterEventHandler: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCLineRippleFoundation2.prototype.init = function() {
    this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
  };
  MDCLineRippleFoundation2.prototype.destroy = function() {
    this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
  };
  MDCLineRippleFoundation2.prototype.activate = function() {
    this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
    this.adapter.addClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
  };
  MDCLineRippleFoundation2.prototype.setRippleCenter = function(xCoordinate) {
    this.adapter.setStyle("transform-origin", xCoordinate + "px center");
  };
  MDCLineRippleFoundation2.prototype.deactivate = function() {
    this.adapter.addClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
  };
  MDCLineRippleFoundation2.prototype.handleTransitionEnd = function(evt) {
    var isDeactivating = this.adapter.hasClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
    if (evt.propertyName === "opacity") {
      if (isDeactivating) {
        this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
        this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
      }
    }
  };
  return MDCLineRippleFoundation2;
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
var MDCLineRipple = function(_super) {
  __extends(MDCLineRipple2, _super);
  function MDCLineRipple2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCLineRipple2.attachTo = function(root) {
    return new MDCLineRipple2(root);
  };
  MDCLineRipple2.prototype.activate = function() {
    this.foundation.activate();
  };
  MDCLineRipple2.prototype.deactivate = function() {
    this.foundation.deactivate();
  };
  MDCLineRipple2.prototype.setRippleCenter = function(xCoordinate) {
    this.foundation.setRippleCenter(xCoordinate);
  };
  MDCLineRipple2.prototype.getDefaultFoundation = function() {
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
      setStyle: function(propertyName, value) {
        return _this.root.style.setProperty(propertyName, value);
      },
      registerEventHandler: function(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterEventHandler: function(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    };
    return new MDCLineRippleFoundation(adapter);
  };
  return MDCLineRipple2;
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
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
};
var numbers = {
  NOTCH_ELEMENT_PADDING: 8
};
var cssClasses = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
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
var MDCNotchedOutlineFoundation = function(_super) {
  __extends(MDCNotchedOutlineFoundation2, _super);
  function MDCNotchedOutlineFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCNotchedOutlineFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        setNotchWidthProperty: function() {
          return void 0;
        },
        removeNotchWidthProperty: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCNotchedOutlineFoundation2.prototype.notch = function(notchWidth) {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
    if (notchWidth > 0) {
      notchWidth += numbers.NOTCH_ELEMENT_PADDING;
    }
    this.adapter.setNotchWidthProperty(notchWidth);
    this.adapter.addClass(OUTLINE_NOTCHED);
  };
  MDCNotchedOutlineFoundation2.prototype.closeNotch = function() {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
    this.adapter.removeClass(OUTLINE_NOTCHED);
    this.adapter.removeNotchWidthProperty();
  };
  return MDCNotchedOutlineFoundation2;
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
var MDCNotchedOutline = function(_super) {
  __extends(MDCNotchedOutline2, _super);
  function MDCNotchedOutline2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MDCNotchedOutline2.attachTo = function(root) {
    return new MDCNotchedOutline2(root);
  };
  MDCNotchedOutline2.prototype.initialSyncWithDOM = function() {
    this.notchElement = this.root.querySelector(strings.NOTCH_ELEMENT_SELECTOR);
    var label = this.root.querySelector("." + MDCFloatingLabelFoundation.cssClasses.ROOT);
    if (label) {
      label.style.transitionDuration = "0s";
      this.root.classList.add(cssClasses.OUTLINE_UPGRADED);
      requestAnimationFrame(function() {
        label.style.transitionDuration = "";
      });
    } else {
      this.root.classList.add(cssClasses.NO_LABEL);
    }
  };
  MDCNotchedOutline2.prototype.notch = function(notchWidth) {
    this.foundation.notch(notchWidth);
  };
  MDCNotchedOutline2.prototype.closeNotch = function() {
    this.foundation.closeNotch();
  };
  MDCNotchedOutline2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClass: function(className) {
        return _this.root.classList.add(className);
      },
      removeClass: function(className) {
        return _this.root.classList.remove(className);
      },
      setNotchWidthProperty: function(width) {
        _this.notchElement.style.setProperty("width", width + "px");
      },
      removeNotchWidthProperty: function() {
        _this.notchElement.style.removeProperty("width");
      }
    };
    return new MDCNotchedOutlineFoundation(adapter);
  };
  return MDCNotchedOutline2;
}(MDCComponent);
export { MDCLineRipple as M, MDCFloatingLabel as a, MDCNotchedOutline as b };
