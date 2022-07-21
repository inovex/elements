import { _ as __extends, a as __assign, c as MDCFoundation, M as MDCComponent } from "./component-97c8fef9.061cf906.js";
import { m as matches, c as closest } from "./ponyfill-495ec32d.2f34f215.js";
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
var _a, _b;
var cssClasses = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
var evolutionClassNameMap = (_a = {}, _a["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", _a["" + cssClasses.LIST_ITEM_CLASS] = "mdc-list-item", _a["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", _a["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", _a["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", _a["" + cssClasses.ROOT] = "mdc-list", _a);
var deprecatedClassNameMap = (_b = {}, _b["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", _b["" + cssClasses.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", _b["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", _b["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", _b["" + cssClasses.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", _b["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", _b["" + cssClasses.ROOT] = "mdc-deprecated-list", _b);
var strings = {
  ACTION_EVENT: "MDCList:action",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a\n  ",
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + cssClasses.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + ' input[type="radio"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + ' input[type="checkbox"]:not(:disabled)\n  ',
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
var numbers = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
var evolutionAttribute = "evolution";
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
var KEY = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
};
var normalizedKeys = /* @__PURE__ */ new Set();
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
};
var mappedKeyCodes = /* @__PURE__ */ new Map();
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = /* @__PURE__ */ new Set();
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
function normalizeKey(evt) {
  var key = evt.key;
  if (normalizedKeys.has(key)) {
    return key;
  }
  var mappedKey = mappedKeyCodes.get(evt.keyCode);
  if (mappedKey) {
    return mappedKey;
  }
  return KEY.UNKNOWN;
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
var ELEMENTS_KEY_ALLOWED_IN = ["input", "button", "textarea", "select"];
var preventDefaultEvent = function(evt) {
  var target = evt.target;
  if (!target) {
    return;
  }
  var tagName = ("" + target.tagName).toLowerCase();
  if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
    evt.preventDefault();
  }
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
function initState() {
  var state = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return state;
}
function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
  var sortedIndexByFirstChar = /* @__PURE__ */ new Map();
  for (var i = 0; i < listItemCount; i++) {
    var primaryText = getPrimaryTextByItemIndex(i).trim();
    if (!primaryText) {
      continue;
    }
    var firstChar = primaryText[0].toLowerCase();
    if (!sortedIndexByFirstChar.has(firstChar)) {
      sortedIndexByFirstChar.set(firstChar, []);
    }
    sortedIndexByFirstChar.get(firstChar).push({ text: primaryText.toLowerCase(), index: i });
  }
  sortedIndexByFirstChar.forEach(function(values) {
    values.sort(function(first, second) {
      return first.index - second.index;
    });
  });
  return sortedIndexByFirstChar;
}
function matchItem(opts, state) {
  var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  clearTimeout(state.bufferClearTimeout);
  state.bufferClearTimeout = setTimeout(function() {
    clearBuffer(state);
  }, numbers.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
  state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
  var index;
  if (state.typeaheadBuffer.length === 1) {
    index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
  } else {
    index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
  }
  if (index !== -1 && !skipFocus) {
    focusItemAtIndex(index);
  }
  return index;
}
function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
  var firstChar = state.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
  if (!itemsMatchingFirstChar) {
    return -1;
  }
  if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
    state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
    if (!isItemAtIndexDisabled(newIndex)) {
      return newIndex;
    }
  }
  state.currentFirstChar = firstChar;
  var newCursorPosition = -1;
  var cursorPosition;
  for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }
  for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }
  if (newCursorPosition !== -1) {
    state.sortedIndexCursor = newCursorPosition;
    return itemsMatchingFirstChar[state.sortedIndexCursor].index;
  }
  return -1;
}
function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
  var firstChar = state.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
  if (!itemsMatchingFirstChar) {
    return -1;
  }
  var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
  if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) {
    return startingItem.index;
  }
  var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
  var nextCursorPosition = -1;
  while (cursorPosition !== state.sortedIndexCursor) {
    var currentItem = itemsMatchingFirstChar[cursorPosition];
    var matches2 = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
    var isEnabled = !isItemAtIndexDisabled(currentItem.index);
    if (matches2 && isEnabled) {
      nextCursorPosition = cursorPosition;
      break;
    }
    cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
  }
  if (nextCursorPosition !== -1) {
    state.sortedIndexCursor = nextCursorPosition;
    return itemsMatchingFirstChar[state.sortedIndexCursor].index;
  }
  return -1;
}
function isTypingInProgress(state) {
  return state.typeaheadBuffer.length > 0;
}
function clearBuffer(state) {
  state.typeaheadBuffer = "";
}
function handleKeydown(opts, state) {
  var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  var isArrowLeft = normalizeKey(event) === "ArrowLeft";
  var isArrowUp = normalizeKey(event) === "ArrowUp";
  var isArrowRight = normalizeKey(event) === "ArrowRight";
  var isArrowDown = normalizeKey(event) === "ArrowDown";
  var isHome = normalizeKey(event) === "Home";
  var isEnd = normalizeKey(event) === "End";
  var isEnter = normalizeKey(event) === "Enter";
  var isSpace = normalizeKey(event) === "Spacebar";
  if (event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
    return -1;
  }
  var isCharacterKey = !isSpace && event.key.length === 1;
  if (isCharacterKey) {
    preventDefaultEvent(event);
    var matchItemOpts = {
      focusItemAtIndex,
      focusedItemIndex,
      nextChar: event.key.toLowerCase(),
      sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled
    };
    return matchItem(matchItemOpts, state);
  }
  if (!isSpace) {
    return -1;
  }
  if (isTargetListItem) {
    preventDefaultEvent(event);
  }
  var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
  if (typeaheadOnListItem) {
    var matchItemOpts = {
      focusItemAtIndex,
      focusedItemIndex,
      nextChar: " ",
      sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled
    };
    return matchItem(matchItemOpts, state);
  }
  return -1;
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
function isNumberArray(selectedIndex) {
  return selectedIndex instanceof Array;
}
var MDCListFoundation = function(_super) {
  __extends(MDCListFoundation2, _super);
  function MDCListFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCListFoundation2.defaultAdapter), adapter)) || this;
    _this.wrapFocus = false;
    _this.isVertical = true;
    _this.isSingleSelectionList = false;
    _this.selectedIndex = numbers.UNSET_INDEX;
    _this.focusedItemIndex = numbers.UNSET_INDEX;
    _this.useActivatedClass = false;
    _this.useSelectedAttr = false;
    _this.ariaCurrentAttrValue = null;
    _this.isCheckboxList = false;
    _this.isRadioList = false;
    _this.hasTypeahead = false;
    _this.typeaheadState = initState();
    _this.sortedIndexByFirstChar = /* @__PURE__ */ new Map();
    return _this;
  }
  Object.defineProperty(MDCListFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClassForElementIndex: function() {
          return void 0;
        },
        focusItemAtIndex: function() {
          return void 0;
        },
        getAttributeForElementIndex: function() {
          return null;
        },
        getFocusedElementIndex: function() {
          return 0;
        },
        getListItemCount: function() {
          return 0;
        },
        hasCheckboxAtIndex: function() {
          return false;
        },
        hasRadioAtIndex: function() {
          return false;
        },
        isCheckboxCheckedAtIndex: function() {
          return false;
        },
        isFocusInsideList: function() {
          return false;
        },
        isRootFocused: function() {
          return false;
        },
        listItemAtIndexHasClass: function() {
          return false;
        },
        notifyAction: function() {
          return void 0;
        },
        removeClassForElementIndex: function() {
          return void 0;
        },
        setAttributeForElementIndex: function() {
          return void 0;
        },
        setCheckedCheckboxOrRadioAtIndex: function() {
          return void 0;
        },
        setTabIndexForListItemChildren: function() {
          return void 0;
        },
        getPrimaryTextAtIndex: function() {
          return "";
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCListFoundation2.prototype.layout = function() {
    if (this.adapter.getListItemCount() === 0) {
      return;
    }
    if (this.adapter.hasCheckboxAtIndex(0)) {
      this.isCheckboxList = true;
    } else if (this.adapter.hasRadioAtIndex(0)) {
      this.isRadioList = true;
    } else {
      this.maybeInitializeSingleSelection();
    }
    if (this.hasTypeahead) {
      this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    }
  };
  MDCListFoundation2.prototype.getFocusedItemIndex = function() {
    return this.focusedItemIndex;
  };
  MDCListFoundation2.prototype.setWrapFocus = function(value) {
    this.wrapFocus = value;
  };
  MDCListFoundation2.prototype.setVerticalOrientation = function(value) {
    this.isVertical = value;
  };
  MDCListFoundation2.prototype.setSingleSelection = function(value) {
    this.isSingleSelectionList = value;
    if (value) {
      this.maybeInitializeSingleSelection();
      this.selectedIndex = this.getSelectedIndexFromDOM();
    }
  };
  MDCListFoundation2.prototype.maybeInitializeSingleSelection = function() {
    var selectedItemIndex = this.getSelectedIndexFromDOM();
    if (selectedItemIndex === numbers.UNSET_INDEX)
      return;
    var hasActivatedClass = this.adapter.listItemAtIndexHasClass(selectedItemIndex, cssClasses.LIST_ITEM_ACTIVATED_CLASS);
    if (hasActivatedClass) {
      this.setUseActivatedClass(true);
    }
    this.isSingleSelectionList = true;
    this.selectedIndex = selectedItemIndex;
  };
  MDCListFoundation2.prototype.getSelectedIndexFromDOM = function() {
    var selectedIndex = numbers.UNSET_INDEX;
    var listItemsCount = this.adapter.getListItemCount();
    for (var i = 0; i < listItemsCount; i++) {
      var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses.LIST_ITEM_SELECTED_CLASS);
      var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses.LIST_ITEM_ACTIVATED_CLASS);
      if (!(hasSelectedClass || hasActivatedClass)) {
        continue;
      }
      selectedIndex = i;
      break;
    }
    return selectedIndex;
  };
  MDCListFoundation2.prototype.setHasTypeahead = function(hasTypeahead) {
    this.hasTypeahead = hasTypeahead;
    if (hasTypeahead) {
      this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    }
  };
  MDCListFoundation2.prototype.isTypeaheadInProgress = function() {
    return this.hasTypeahead && isTypingInProgress(this.typeaheadState);
  };
  MDCListFoundation2.prototype.setUseActivatedClass = function(useActivated) {
    this.useActivatedClass = useActivated;
  };
  MDCListFoundation2.prototype.setUseSelectedAttribute = function(useSelected) {
    this.useSelectedAttr = useSelected;
  };
  MDCListFoundation2.prototype.getSelectedIndex = function() {
    return this.selectedIndex;
  };
  MDCListFoundation2.prototype.setSelectedIndex = function(index, _a2) {
    var _b2 = _a2 === void 0 ? {} : _a2, forceUpdate = _b2.forceUpdate;
    if (!this.isIndexValid(index)) {
      return;
    }
    if (this.isCheckboxList) {
      this.setCheckboxAtIndex(index);
    } else if (this.isRadioList) {
      this.setRadioAtIndex(index);
    } else {
      this.setSingleSelectionAtIndex(index, { forceUpdate });
    }
  };
  MDCListFoundation2.prototype.handleFocusIn = function(listItemIndex) {
    if (listItemIndex >= 0) {
      this.focusedItemIndex = listItemIndex;
      this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "0");
      this.adapter.setTabIndexForListItemChildren(listItemIndex, "0");
    }
  };
  MDCListFoundation2.prototype.handleFocusOut = function(listItemIndex) {
    var _this = this;
    if (listItemIndex >= 0) {
      this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "-1");
      this.adapter.setTabIndexForListItemChildren(listItemIndex, "-1");
    }
    setTimeout(function() {
      if (!_this.adapter.isFocusInsideList()) {
        _this.setTabindexToFirstSelectedOrFocusedItem();
      }
    }, 0);
  };
  MDCListFoundation2.prototype.handleKeydown = function(event, isRootListItem, listItemIndex) {
    var _this = this;
    var isArrowLeft = normalizeKey(event) === "ArrowLeft";
    var isArrowUp = normalizeKey(event) === "ArrowUp";
    var isArrowRight = normalizeKey(event) === "ArrowRight";
    var isArrowDown = normalizeKey(event) === "ArrowDown";
    var isHome = normalizeKey(event) === "Home";
    var isEnd = normalizeKey(event) === "End";
    var isEnter = normalizeKey(event) === "Enter";
    var isSpace = normalizeKey(event) === "Spacebar";
    var isLetterA = event.key === "A" || event.key === "a";
    if (this.adapter.isRootFocused()) {
      if (isArrowUp || isEnd) {
        event.preventDefault();
        this.focusLastElement();
      } else if (isArrowDown || isHome) {
        event.preventDefault();
        this.focusFirstElement();
      }
      if (this.hasTypeahead) {
        var handleKeydownOpts = {
          event,
          focusItemAtIndex: function(index) {
            _this.focusItemAtIndex(index);
          },
          focusedItemIndex: -1,
          isTargetListItem: isRootListItem,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function(index) {
            return _this.adapter.listItemAtIndexHasClass(index, cssClasses.LIST_ITEM_DISABLED_CLASS);
          }
        };
        handleKeydown(handleKeydownOpts, this.typeaheadState);
      }
      return;
    }
    var currentIndex = this.adapter.getFocusedElementIndex();
    if (currentIndex === -1) {
      currentIndex = listItemIndex;
      if (currentIndex < 0) {
        return;
      }
    }
    if (this.isVertical && isArrowDown || !this.isVertical && isArrowRight) {
      preventDefaultEvent(event);
      this.focusNextElement(currentIndex);
    } else if (this.isVertical && isArrowUp || !this.isVertical && isArrowLeft) {
      preventDefaultEvent(event);
      this.focusPrevElement(currentIndex);
    } else if (isHome) {
      preventDefaultEvent(event);
      this.focusFirstElement();
    } else if (isEnd) {
      preventDefaultEvent(event);
      this.focusLastElement();
    } else if (isLetterA && event.ctrlKey && this.isCheckboxList) {
      event.preventDefault();
      this.toggleAll(this.selectedIndex === numbers.UNSET_INDEX ? [] : this.selectedIndex);
    } else if (isEnter || isSpace) {
      if (isRootListItem) {
        var target = event.target;
        if (target && target.tagName === "A" && isEnter) {
          return;
        }
        preventDefaultEvent(event);
        if (this.adapter.listItemAtIndexHasClass(currentIndex, cssClasses.LIST_ITEM_DISABLED_CLASS)) {
          return;
        }
        if (!this.isTypeaheadInProgress()) {
          if (this.isSelectableList()) {
            this.setSelectedIndexOnAction(currentIndex);
          }
          this.adapter.notifyAction(currentIndex);
        }
      }
    }
    if (this.hasTypeahead) {
      var handleKeydownOpts = {
        event,
        focusItemAtIndex: function(index) {
          _this.focusItemAtIndex(index);
        },
        focusedItemIndex: this.focusedItemIndex,
        isTargetListItem: isRootListItem,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        isItemAtIndexDisabled: function(index) {
          return _this.adapter.listItemAtIndexHasClass(index, cssClasses.LIST_ITEM_DISABLED_CLASS);
        }
      };
      handleKeydown(handleKeydownOpts, this.typeaheadState);
    }
  };
  MDCListFoundation2.prototype.handleClick = function(index, toggleCheckbox) {
    if (index === numbers.UNSET_INDEX) {
      return;
    }
    if (this.adapter.listItemAtIndexHasClass(index, cssClasses.LIST_ITEM_DISABLED_CLASS)) {
      return;
    }
    if (this.isSelectableList()) {
      this.setSelectedIndexOnAction(index, toggleCheckbox);
    }
    this.adapter.notifyAction(index);
  };
  MDCListFoundation2.prototype.focusNextElement = function(index) {
    var count = this.adapter.getListItemCount();
    var nextIndex = index + 1;
    if (nextIndex >= count) {
      if (this.wrapFocus) {
        nextIndex = 0;
      } else {
        return index;
      }
    }
    this.focusItemAtIndex(nextIndex);
    return nextIndex;
  };
  MDCListFoundation2.prototype.focusPrevElement = function(index) {
    var prevIndex = index - 1;
    if (prevIndex < 0) {
      if (this.wrapFocus) {
        prevIndex = this.adapter.getListItemCount() - 1;
      } else {
        return index;
      }
    }
    this.focusItemAtIndex(prevIndex);
    return prevIndex;
  };
  MDCListFoundation2.prototype.focusFirstElement = function() {
    this.focusItemAtIndex(0);
    return 0;
  };
  MDCListFoundation2.prototype.focusLastElement = function() {
    var lastIndex = this.adapter.getListItemCount() - 1;
    this.focusItemAtIndex(lastIndex);
    return lastIndex;
  };
  MDCListFoundation2.prototype.focusInitialElement = function() {
    var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
    this.focusItemAtIndex(initialIndex);
    return initialIndex;
  };
  MDCListFoundation2.prototype.setEnabled = function(itemIndex, isEnabled) {
    if (!this.isIndexValid(itemIndex)) {
      return;
    }
    if (isEnabled) {
      this.adapter.removeClassForElementIndex(itemIndex, cssClasses.LIST_ITEM_DISABLED_CLASS);
      this.adapter.setAttributeForElementIndex(itemIndex, strings.ARIA_DISABLED, "false");
    } else {
      this.adapter.addClassForElementIndex(itemIndex, cssClasses.LIST_ITEM_DISABLED_CLASS);
      this.adapter.setAttributeForElementIndex(itemIndex, strings.ARIA_DISABLED, "true");
    }
  };
  MDCListFoundation2.prototype.setSingleSelectionAtIndex = function(index, _a2) {
    var _b2 = _a2 === void 0 ? {} : _a2, forceUpdate = _b2.forceUpdate;
    if (this.selectedIndex === index && !forceUpdate) {
      return;
    }
    var selectedClassName = cssClasses.LIST_ITEM_SELECTED_CLASS;
    if (this.useActivatedClass) {
      selectedClassName = cssClasses.LIST_ITEM_ACTIVATED_CLASS;
    }
    if (this.selectedIndex !== numbers.UNSET_INDEX) {
      this.adapter.removeClassForElementIndex(this.selectedIndex, selectedClassName);
    }
    this.setAriaForSingleSelectionAtIndex(index);
    this.setTabindexAtIndex(index);
    if (index !== numbers.UNSET_INDEX) {
      this.adapter.addClassForElementIndex(index, selectedClassName);
    }
    this.selectedIndex = index;
  };
  MDCListFoundation2.prototype.setAriaForSingleSelectionAtIndex = function(index) {
    if (this.selectedIndex === numbers.UNSET_INDEX) {
      this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(index, strings.ARIA_CURRENT);
    }
    var isAriaCurrent = this.ariaCurrentAttrValue !== null;
    var ariaAttribute = isAriaCurrent ? strings.ARIA_CURRENT : strings.ARIA_SELECTED;
    if (this.selectedIndex !== numbers.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex, ariaAttribute, "false");
    }
    if (index !== numbers.UNSET_INDEX) {
      var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue : "true";
      this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    }
  };
  MDCListFoundation2.prototype.getSelectionAttribute = function() {
    return this.useSelectedAttr ? strings.ARIA_SELECTED : strings.ARIA_CHECKED;
  };
  MDCListFoundation2.prototype.setRadioAtIndex = function(index) {
    var selectionAttribute = this.getSelectionAttribute();
    this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
    if (this.selectedIndex !== numbers.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex, selectionAttribute, "false");
    }
    this.adapter.setAttributeForElementIndex(index, selectionAttribute, "true");
    this.selectedIndex = index;
  };
  MDCListFoundation2.prototype.setCheckboxAtIndex = function(index) {
    var selectionAttribute = this.getSelectionAttribute();
    for (var i = 0; i < this.adapter.getListItemCount(); i++) {
      var isChecked = false;
      if (index.indexOf(i) >= 0) {
        isChecked = true;
      }
      this.adapter.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
      this.adapter.setAttributeForElementIndex(i, selectionAttribute, isChecked ? "true" : "false");
    }
    this.selectedIndex = index;
  };
  MDCListFoundation2.prototype.setTabindexAtIndex = function(index) {
    if (this.focusedItemIndex === numbers.UNSET_INDEX && index !== 0) {
      this.adapter.setAttributeForElementIndex(0, "tabindex", "-1");
    } else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
      this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1");
    }
    if (!(this.selectedIndex instanceof Array) && this.selectedIndex !== index) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1");
    }
    if (index !== numbers.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(index, "tabindex", "0");
    }
  };
  MDCListFoundation2.prototype.isSelectableList = function() {
    return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
  };
  MDCListFoundation2.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
    var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
    this.setTabindexAtIndex(targetIndex);
  };
  MDCListFoundation2.prototype.getFirstSelectedOrFocusedItemIndex = function() {
    if (!this.isSelectableList()) {
      return Math.max(this.focusedItemIndex, 0);
    }
    if (typeof this.selectedIndex === "number" && this.selectedIndex !== numbers.UNSET_INDEX) {
      return this.selectedIndex;
    }
    if (isNumberArray(this.selectedIndex) && this.selectedIndex.length > 0) {
      return this.selectedIndex.reduce(function(minIndex, currentIndex) {
        return Math.min(minIndex, currentIndex);
      });
    }
    return 0;
  };
  MDCListFoundation2.prototype.isIndexValid = function(index) {
    var _this = this;
    if (index instanceof Array) {
      if (!this.isCheckboxList) {
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      }
      if (index.length === 0) {
        return true;
      } else {
        return index.some(function(i) {
          return _this.isIndexInRange(i);
        });
      }
    } else if (typeof index === "number") {
      if (this.isCheckboxList) {
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
      }
      return this.isIndexInRange(index) || this.isSingleSelectionList && index === numbers.UNSET_INDEX;
    } else {
      return false;
    }
  };
  MDCListFoundation2.prototype.isIndexInRange = function(index) {
    var listSize = this.adapter.getListItemCount();
    return index >= 0 && index < listSize;
  };
  MDCListFoundation2.prototype.setSelectedIndexOnAction = function(index, toggleCheckbox) {
    if (toggleCheckbox === void 0) {
      toggleCheckbox = true;
    }
    if (this.isCheckboxList) {
      this.toggleCheckboxAtIndex(index, toggleCheckbox);
    } else {
      this.setSelectedIndex(index);
    }
  };
  MDCListFoundation2.prototype.toggleCheckboxAtIndex = function(index, toggleCheckbox) {
    var selectionAttribute = this.getSelectionAttribute();
    var isChecked = this.adapter.isCheckboxCheckedAtIndex(index);
    if (toggleCheckbox) {
      isChecked = !isChecked;
      this.adapter.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
    }
    this.adapter.setAttributeForElementIndex(index, selectionAttribute, isChecked ? "true" : "false");
    var selectedIndexes = this.selectedIndex === numbers.UNSET_INDEX ? [] : this.selectedIndex.slice();
    if (isChecked) {
      selectedIndexes.push(index);
    } else {
      selectedIndexes = selectedIndexes.filter(function(i) {
        return i !== index;
      });
    }
    this.selectedIndex = selectedIndexes;
  };
  MDCListFoundation2.prototype.focusItemAtIndex = function(index) {
    this.adapter.focusItemAtIndex(index);
    this.focusedItemIndex = index;
  };
  MDCListFoundation2.prototype.toggleAll = function(currentlySelectedIndexes) {
    var count = this.adapter.getListItemCount();
    if (currentlySelectedIndexes.length === count) {
      this.setCheckboxAtIndex([]);
    } else {
      var allIndexes = [];
      for (var i = 0; i < count; i++) {
        if (!this.adapter.listItemAtIndexHasClass(i, cssClasses.LIST_ITEM_DISABLED_CLASS) || currentlySelectedIndexes.indexOf(i) > -1) {
          allIndexes.push(i);
        }
      }
      this.setCheckboxAtIndex(allIndexes);
    }
  };
  MDCListFoundation2.prototype.typeaheadMatchItem = function(nextChar, startingIndex, skipFocus) {
    var _this = this;
    if (skipFocus === void 0) {
      skipFocus = false;
    }
    var opts = {
      focusItemAtIndex: function(index) {
        _this.focusItemAtIndex(index);
      },
      focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
      nextChar,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      skipFocus,
      isItemAtIndexDisabled: function(index) {
        return _this.adapter.listItemAtIndexHasClass(index, cssClasses.LIST_ITEM_DISABLED_CLASS);
      }
    };
    return matchItem(opts, this.typeaheadState);
  };
  MDCListFoundation2.prototype.typeaheadInitSortedIndex = function() {
    return initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
  };
  MDCListFoundation2.prototype.clearTypeaheadBuffer = function() {
    clearBuffer(this.typeaheadState);
  };
  return MDCListFoundation2;
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
var MDCList = function(_super) {
  __extends(MDCList2, _super);
  function MDCList2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Object.defineProperty(MDCList2.prototype, "vertical", {
    set: function(value) {
      this.foundation.setVerticalOrientation(value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList2.prototype, "listElements", {
    get: function() {
      return Array.from(this.root.querySelectorAll("." + this.classNameMap[cssClasses.LIST_ITEM_CLASS]));
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList2.prototype, "wrapFocus", {
    set: function(value) {
      this.foundation.setWrapFocus(value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList2.prototype, "typeaheadInProgress", {
    get: function() {
      return this.foundation.isTypeaheadInProgress();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList2.prototype, "hasTypeahead", {
    set: function(hasTypeahead) {
      this.foundation.setHasTypeahead(hasTypeahead);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList2.prototype, "singleSelection", {
    set: function(isSingleSelectionList) {
      this.foundation.setSingleSelection(isSingleSelectionList);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCList2.prototype, "selectedIndex", {
    get: function() {
      return this.foundation.getSelectedIndex();
    },
    set: function(index) {
      this.foundation.setSelectedIndex(index);
    },
    enumerable: false,
    configurable: true
  });
  MDCList2.attachTo = function(root) {
    return new MDCList2(root);
  };
  MDCList2.prototype.initialSyncWithDOM = function() {
    this.isEvolutionEnabled = evolutionAttribute in this.root.dataset;
    if (this.isEvolutionEnabled) {
      this.classNameMap = evolutionClassNameMap;
    } else if (matches(this.root, strings.DEPRECATED_SELECTOR)) {
      this.classNameMap = deprecatedClassNameMap;
    } else {
      this.classNameMap = Object.values(cssClasses).reduce(function(obj, className) {
        obj[className] = className;
        return obj;
      }, {});
    }
    this.handleClick = this.handleClickEvent.bind(this);
    this.handleKeydown = this.handleKeydownEvent.bind(this);
    this.focusInEventListener = this.handleFocusInEvent.bind(this);
    this.focusOutEventListener = this.handleFocusOutEvent.bind(this);
    this.listen("keydown", this.handleKeydown);
    this.listen("click", this.handleClick);
    this.listen("focusin", this.focusInEventListener);
    this.listen("focusout", this.focusOutEventListener);
    this.layout();
    this.initializeListType();
    this.ensureFocusable();
  };
  MDCList2.prototype.destroy = function() {
    this.unlisten("keydown", this.handleKeydown);
    this.unlisten("click", this.handleClick);
    this.unlisten("focusin", this.focusInEventListener);
    this.unlisten("focusout", this.focusOutEventListener);
  };
  MDCList2.prototype.layout = function() {
    var direction = this.root.getAttribute(strings.ARIA_ORIENTATION);
    this.vertical = direction !== strings.ARIA_ORIENTATION_HORIZONTAL;
    var itemSelector = "." + this.classNameMap[cssClasses.LIST_ITEM_CLASS] + ":not([tabindex])";
    var childSelector = strings.FOCUSABLE_CHILD_ELEMENTS;
    var itemEls = this.root.querySelectorAll(itemSelector);
    if (itemEls.length) {
      Array.prototype.forEach.call(itemEls, function(el) {
        el.setAttribute("tabindex", "-1");
      });
    }
    var focusableChildEls = this.root.querySelectorAll(childSelector);
    if (focusableChildEls.length) {
      Array.prototype.forEach.call(focusableChildEls, function(el) {
        el.setAttribute("tabindex", "-1");
      });
    }
    if (this.isEvolutionEnabled) {
      this.foundation.setUseSelectedAttribute(true);
    }
    this.foundation.layout();
  };
  MDCList2.prototype.getPrimaryText = function(item) {
    var _a2;
    var primaryText = item.querySelector("." + this.classNameMap[cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS]);
    if (this.isEvolutionEnabled || primaryText) {
      return (_a2 = primaryText === null || primaryText === void 0 ? void 0 : primaryText.textContent) !== null && _a2 !== void 0 ? _a2 : "";
    }
    var singleLineText = item.querySelector("." + this.classNameMap[cssClasses.LIST_ITEM_TEXT_CLASS]);
    return singleLineText && singleLineText.textContent || "";
  };
  MDCList2.prototype.initializeListType = function() {
    var _this = this;
    this.isInteractive = matches(this.root, strings.ARIA_INTERACTIVE_ROLES_SELECTOR);
    if (this.isEvolutionEnabled && this.isInteractive) {
      var selection = Array.from(this.root.querySelectorAll(strings.SELECTED_ITEM_SELECTOR), function(listItem) {
        return _this.listElements.indexOf(listItem);
      });
      if (matches(this.root, strings.ARIA_MULTI_SELECTABLE_SELECTOR)) {
        this.selectedIndex = selection;
      } else if (selection.length > 0) {
        this.selectedIndex = selection[0];
      }
      return;
    }
    var checkboxListItems = this.root.querySelectorAll(strings.ARIA_ROLE_CHECKBOX_SELECTOR);
    var radioSelectedListItem = this.root.querySelector(strings.ARIA_CHECKED_RADIO_SELECTOR);
    if (checkboxListItems.length) {
      var preselectedItems = this.root.querySelectorAll(strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = Array.from(preselectedItems, function(listItem) {
        return _this.listElements.indexOf(listItem);
      });
    } else if (radioSelectedListItem) {
      this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    }
  };
  MDCList2.prototype.setEnabled = function(itemIndex, isEnabled) {
    this.foundation.setEnabled(itemIndex, isEnabled);
  };
  MDCList2.prototype.typeaheadMatchItem = function(nextChar, startingIndex) {
    return this.foundation.typeaheadMatchItem(nextChar, startingIndex, true);
  };
  MDCList2.prototype.getDefaultFoundation = function() {
    var _this = this;
    var adapter = {
      addClassForElementIndex: function(index, className) {
        var element = _this.listElements[index];
        if (element) {
          element.classList.add(_this.classNameMap[className]);
        }
      },
      focusItemAtIndex: function(index) {
        var element = _this.listElements[index];
        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function(index, attr) {
        return _this.listElements[index].getAttribute(attr);
      },
      getFocusedElementIndex: function() {
        return _this.listElements.indexOf(document.activeElement);
      },
      getListItemCount: function() {
        return _this.listElements.length;
      },
      getPrimaryTextAtIndex: function(index) {
        return _this.getPrimaryText(_this.listElements[index]);
      },
      hasCheckboxAtIndex: function(index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(strings.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function(index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(strings.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function(index) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(strings.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function() {
        return _this.root !== document.activeElement && _this.root.contains(document.activeElement);
      },
      isRootFocused: function() {
        return document.activeElement === _this.root;
      },
      listItemAtIndexHasClass: function(index, className) {
        return _this.listElements[index].classList.contains(_this.classNameMap[className]);
      },
      notifyAction: function(index) {
        _this.emit(strings.ACTION_EVENT, { index }, true);
      },
      removeClassForElementIndex: function(index, className) {
        var element = _this.listElements[index];
        if (element) {
          element.classList.remove(_this.classNameMap[className]);
        }
      },
      setAttributeForElementIndex: function(index, attr, value) {
        var element = _this.listElements[index];
        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: function(index, isChecked) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(strings.CHECKBOX_RADIO_SELECTOR);
        toggleEl.checked = isChecked;
        var event = document.createEvent("Event");
        event.initEvent("change", true, true);
        toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: function(listItemIndex, tabIndexValue) {
        var element = _this.listElements[listItemIndex];
        var selector = strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
        Array.prototype.forEach.call(element.querySelectorAll(selector), function(el) {
          el.setAttribute("tabindex", tabIndexValue);
        });
      }
    };
    return new MDCListFoundation(adapter);
  };
  MDCList2.prototype.ensureFocusable = function() {
    if (this.isEvolutionEnabled && this.isInteractive) {
      if (!this.root.querySelector("." + this.classNameMap[cssClasses.LIST_ITEM_CLASS] + '[tabindex="0"]')) {
        var index = this.initialFocusIndex();
        if (index !== -1) {
          this.listElements[index].tabIndex = 0;
        }
      }
    }
  };
  MDCList2.prototype.initialFocusIndex = function() {
    if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0) {
      return this.selectedIndex[0];
    }
    if (typeof this.selectedIndex === "number" && this.selectedIndex !== numbers.UNSET_INDEX) {
      return this.selectedIndex;
    }
    var el = this.root.querySelector("." + this.classNameMap[cssClasses.LIST_ITEM_CLASS] + ":not(." + this.classNameMap[cssClasses.LIST_ITEM_DISABLED_CLASS] + ")");
    if (el === null) {
      return -1;
    }
    return this.getListItemIndex(el);
  };
  MDCList2.prototype.getListItemIndex = function(el) {
    var nearestParent = closest(el, "." + this.classNameMap[cssClasses.LIST_ITEM_CLASS] + ", ." + this.classNameMap[cssClasses.ROOT]);
    if (nearestParent && matches(nearestParent, "." + this.classNameMap[cssClasses.LIST_ITEM_CLASS])) {
      return this.listElements.indexOf(nearestParent);
    }
    return -1;
  };
  MDCList2.prototype.handleFocusInEvent = function(evt) {
    var index = this.getListItemIndex(evt.target);
    this.foundation.handleFocusIn(index);
  };
  MDCList2.prototype.handleFocusOutEvent = function(evt) {
    var index = this.getListItemIndex(evt.target);
    this.foundation.handleFocusOut(index);
  };
  MDCList2.prototype.handleKeydownEvent = function(evt) {
    var index = this.getListItemIndex(evt.target);
    var target = evt.target;
    this.foundation.handleKeydown(evt, target.classList.contains(this.classNameMap[cssClasses.LIST_ITEM_CLASS]), index);
  };
  MDCList2.prototype.handleClickEvent = function(evt) {
    var index = this.getListItemIndex(evt.target);
    var target = evt.target;
    var toggleCheckbox = !matches(target, strings.CHECKBOX_RADIO_SELECTOR);
    this.foundation.handleClick(index, toggleCheckbox);
  };
  return MDCList2;
}(MDCComponent);
export { KEY as K, MDCList as M, MDCListFoundation as a, normalizeKey as b, cssClasses as c, numbers as n };
