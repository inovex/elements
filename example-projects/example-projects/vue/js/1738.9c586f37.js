"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[1738],{3662:function(e,t,n){n.d(t,{a:function(){return i},c:function(){return r},g:function(){return s}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function r(e,t,n){return n={path:t,exports:{},require:function(e,t){return o()}},e(n,n.exports),n.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},3312:function(e,t,n){n.d(t,{K:function(){return h},M:function(){return D},a:function(){return g},b:function(){return S},c:function(){return a},n:function(){return l}});var i,s,r=n(601),o=n(822),a={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},d=(i={},i[""+a.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",i[""+a.LIST_ITEM_CLASS]="mdc-list-item",i[""+a.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",i[""+a.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",i[""+a.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",i[""+a.ROOT]="mdc-list",i),u=(s={},s[""+a.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",s[""+a.LIST_ITEM_CLASS]="mdc-deprecated-list-item",s[""+a.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",s[""+a.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",s[""+a.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",s[""+a.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",s[""+a.ROOT]="mdc-deprecated-list",s),c={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+a.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+a.LIST_ITEM_CLASS+" a,\n    ."+u[a.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+u[a.LIST_ITEM_CLASS]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+a.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+a.LIST_ITEM_CLASS+" a,\n    ."+a.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+a.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled),\n    .'+u[a.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+u[a.LIST_ITEM_CLASS]+" a,\n    ."+u[a.LIST_ITEM_CLASS]+' input[type="radio"]:not(:disabled),\n    .'+u[a.LIST_ITEM_CLASS]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},l={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},I="evolution",h={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},E=new Set;E.add(h.BACKSPACE),E.add(h.ENTER),E.add(h.SPACEBAR),E.add(h.PAGE_UP),E.add(h.PAGE_DOWN),E.add(h.END),E.add(h.HOME),E.add(h.ARROW_LEFT),E.add(h.ARROW_UP),E.add(h.ARROW_RIGHT),E.add(h.ARROW_DOWN),E.add(h.DELETE),E.add(h.ESCAPE),E.add(h.TAB);var f={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},A=new Map;A.set(f.BACKSPACE,h.BACKSPACE),A.set(f.ENTER,h.ENTER),A.set(f.SPACEBAR,h.SPACEBAR),A.set(f.PAGE_UP,h.PAGE_UP),A.set(f.PAGE_DOWN,h.PAGE_DOWN),A.set(f.END,h.END),A.set(f.HOME,h.HOME),A.set(f.ARROW_LEFT,h.ARROW_LEFT),A.set(f.ARROW_UP,h.ARROW_UP),A.set(f.ARROW_RIGHT,h.ARROW_RIGHT),A.set(f.ARROW_DOWN,h.ARROW_DOWN),A.set(f.DELETE,h.DELETE),A.set(f.ESCAPE,h.ESCAPE),A.set(f.TAB,h.TAB);var p=new Set;function S(e){var t=e.key;if(E.has(t))return t;var n=A.get(e.keyCode);return n||h.UNKNOWN}
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
 */p.add(h.PAGE_UP),p.add(h.PAGE_DOWN),p.add(h.END),p.add(h.HOME),p.add(h.ARROW_LEFT),p.add(h.ARROW_UP),p.add(h.ARROW_RIGHT),p.add(h.ARROW_DOWN);var x=["input","button","textarea","select"],T=function(e){var t=e.target;if(t){var n=(""+t.tagName).toLowerCase();-1===x.indexOf(n)&&e.preventDefault()}};
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
function _(){var e={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return e}function C(e,t){for(var n=new Map,i=0;i<e;i++){var s=t(i).trim();if(s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:i})}}return n.forEach((function(e){e.sort((function(e,t){return e.index-t.index}))})),n}function m(e,t){var n,i=e.nextChar,s=e.focusItemAtIndex,r=e.sortedIndexByFirstChar,o=e.focusedItemIndex,a=e.skipFocus,d=e.isItemAtIndexDisabled;return clearTimeout(t.bufferClearTimeout),t.bufferClearTimeout=setTimeout((function(){R(t)}),l.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),t.typeaheadBuffer=t.typeaheadBuffer+i,n=1===t.typeaheadBuffer.length?L(r,o,d,t):y(r,d,t),-1===n||a||s(n),n}function L(e,t,n,i){var s=i.typeaheadBuffer[0],r=e.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===t){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var o=r[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=s;var a,d=-1;for(a=0;a<r.length;a++)if(!n(r[a].index)){d=a;break}for(;a<r.length;a++)if(r[a].index>t&&!n(r[a].index)){d=a;break}return-1!==d?(i.sortedIndexCursor=d,r[i.sortedIndexCursor].index):-1}function y(e,t,n){var i=n.typeaheadBuffer[0],s=e.get(i);if(!s)return-1;var r=s[n.sortedIndexCursor];if(0===r.text.lastIndexOf(n.typeaheadBuffer,0)&&!t(r.index))return r.index;var o=(n.sortedIndexCursor+1)%s.length,a=-1;while(o!==n.sortedIndexCursor){var d=s[o],u=0===d.text.lastIndexOf(n.typeaheadBuffer,0),c=!t(d.index);if(u&&c){a=o;break}o=(o+1)%s.length}return-1!==a?(n.sortedIndexCursor=a,s[n.sortedIndexCursor].index):-1}function b(e){return e.typeaheadBuffer.length>0}function R(e){e.typeaheadBuffer=""}function O(e,t){var n=e.event,i=e.isTargetListItem,s=e.focusedItemIndex,r=e.focusItemAtIndex,o=e.sortedIndexByFirstChar,a=e.isItemAtIndexDisabled,d="ArrowLeft"===S(n),u="ArrowUp"===S(n),c="ArrowRight"===S(n),l="ArrowDown"===S(n),I="Home"===S(n),h="End"===S(n),E="Enter"===S(n),f="Spacebar"===S(n);if(n.ctrlKey||n.metaKey||d||u||c||l||I||h||E)return-1;var A=!f&&1===n.key.length;if(A){T(n);var p={focusItemAtIndex:r,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return m(p,t)}if(!f)return-1;i&&T(n);var x=i&&b(t);if(x){p={focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return m(p,t)}return-1}
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
 */function v(e){return e instanceof Array}var g=function(e){function t(n){var i=e.call(this,(0,r.a)((0,r.a)({},t.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=l.UNSET_INDEX,i.focusedItemIndex=l.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=_(),i.sortedIndexByFirstChar=new Map,i}return(0,r._)(t,e),Object.defineProperty(t,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),t.prototype.layout=function(){0!==this.adapter.getListItemCount()&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},t.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},t.prototype.setWrapFocus=function(e){this.wrapFocus=e},t.prototype.setVerticalOrientation=function(e){this.isVertical=e},t.prototype.setSingleSelection=function(e){this.isSingleSelectionList=e,e&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},t.prototype.maybeInitializeSingleSelection=function(){var e=this.getSelectedIndexFromDOM();if(e!==l.UNSET_INDEX){var t=this.adapter.listItemAtIndexHasClass(e,a.LIST_ITEM_ACTIVATED_CLASS);t&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=e}},t.prototype.getSelectedIndexFromDOM=function(){for(var e=l.UNSET_INDEX,t=this.adapter.getListItemCount(),n=0;n<t;n++){var i=this.adapter.listItemAtIndexHasClass(n,a.LIST_ITEM_SELECTED_CLASS),s=this.adapter.listItemAtIndexHasClass(n,a.LIST_ITEM_ACTIVATED_CLASS);if(i||s){e=n;break}}return e},t.prototype.setHasTypeahead=function(e){this.hasTypeahead=e,e&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},t.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&b(this.typeaheadState)},t.prototype.setUseActivatedClass=function(e){this.useActivatedClass=e},t.prototype.setUseSelectedAttribute=function(e){this.useSelectedAttr=e},t.prototype.getSelectedIndex=function(){return this.selectedIndex},t.prototype.setSelectedIndex=function(e,t){var n=void 0===t?{}:t,i=n.forceUpdate;this.isIndexValid(e)&&(this.isCheckboxList?this.setCheckboxAtIndex(e):this.isRadioList?this.setRadioAtIndex(e):this.setSingleSelectionAtIndex(e,{forceUpdate:i}))},t.prototype.handleFocusIn=function(e){e>=0&&(this.focusedItemIndex=e,this.adapter.setAttributeForElementIndex(e,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(e,"0"))},t.prototype.handleFocusOut=function(e){var t=this;e>=0&&(this.adapter.setAttributeForElementIndex(e,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(e,"-1")),setTimeout((function(){t.adapter.isFocusInsideList()||t.setTabindexToFirstSelectedOrFocusedItem()}),0)},t.prototype.handleKeydown=function(e,t,n){var i=this,s="ArrowLeft"===S(e),r="ArrowUp"===S(e),o="ArrowRight"===S(e),d="ArrowDown"===S(e),u="Home"===S(e),c="End"===S(e),I="Enter"===S(e),h="Spacebar"===S(e),E="A"===e.key||"a"===e.key;if(this.adapter.isRootFocused()){if(r||c?(e.preventDefault(),this.focusLastElement()):(d||u)&&(e.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var f={event:e,focusItemAtIndex:function(e){i.focusItemAtIndex(e)},focusedItemIndex:-1,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(e){return i.adapter.listItemAtIndexHasClass(e,a.LIST_ITEM_DISABLED_CLASS)}};O(f,this.typeaheadState)}}else{var A=this.adapter.getFocusedElementIndex();if(!(-1===A&&(A=n,A<0))){if(this.isVertical&&d||!this.isVertical&&o)T(e),this.focusNextElement(A);else if(this.isVertical&&r||!this.isVertical&&s)T(e),this.focusPrevElement(A);else if(u)T(e),this.focusFirstElement();else if(c)T(e),this.focusLastElement();else if(E&&e.ctrlKey&&this.isCheckboxList)e.preventDefault(),this.toggleAll(this.selectedIndex===l.UNSET_INDEX?[]:this.selectedIndex);else if((I||h)&&t){var p=e.target;if(p&&"A"===p.tagName&&I)return;if(T(e),this.adapter.listItemAtIndexHasClass(A,a.LIST_ITEM_DISABLED_CLASS))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(A),this.adapter.notifyAction(A))}if(this.hasTypeahead){f={event:e,focusItemAtIndex:function(e){i.focusItemAtIndex(e)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(e){return i.adapter.listItemAtIndexHasClass(e,a.LIST_ITEM_DISABLED_CLASS)}};O(f,this.typeaheadState)}}}},t.prototype.handleClick=function(e,t){e!==l.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(e,a.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(e,t),this.adapter.notifyAction(e)))},t.prototype.focusNextElement=function(e){var t=this.adapter.getListItemCount(),n=e+1;if(n>=t){if(!this.wrapFocus)return e;n=0}return this.focusItemAtIndex(n),n},t.prototype.focusPrevElement=function(e){var t=e-1;if(t<0){if(!this.wrapFocus)return e;t=this.adapter.getListItemCount()-1}return this.focusItemAtIndex(t),t},t.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},t.prototype.focusLastElement=function(){var e=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(e),e},t.prototype.focusInitialElement=function(){var e=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(e),e},t.prototype.setEnabled=function(e,t){this.isIndexValid(e)&&(t?(this.adapter.removeClassForElementIndex(e,a.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,c.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(e,a.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,c.ARIA_DISABLED,"true")))},t.prototype.setSingleSelectionAtIndex=function(e,t){var n=void 0===t?{}:t,i=n.forceUpdate;if(this.selectedIndex!==e||i){var s=a.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(s=a.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==l.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,s),this.setAriaForSingleSelectionAtIndex(e),this.setTabindexAtIndex(e),e!==l.UNSET_INDEX&&this.adapter.addClassForElementIndex(e,s),this.selectedIndex=e}},t.prototype.setAriaForSingleSelectionAtIndex=function(e){this.selectedIndex===l.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(e,c.ARIA_CURRENT));var t=null!==this.ariaCurrentAttrValue,n=t?c.ARIA_CURRENT:c.ARIA_SELECTED;if(this.selectedIndex!==l.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,n,"false"),e!==l.UNSET_INDEX){var i=t?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(e,n,i)}},t.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?c.ARIA_SELECTED:c.ARIA_CHECKED},t.prototype.setRadioAtIndex=function(e){var t=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(e,!0),this.selectedIndex!==l.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,t,"false"),this.adapter.setAttributeForElementIndex(e,t,"true"),this.selectedIndex=e},t.prototype.setCheckboxAtIndex=function(e){for(var t=this.getSelectionAttribute(),n=0;n<this.adapter.getListItemCount();n++){var i=!1;e.indexOf(n)>=0&&(i=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(n,i),this.adapter.setAttributeForElementIndex(n,t,i?"true":"false")}this.selectedIndex=e},t.prototype.setTabindexAtIndex=function(e){this.focusedItemIndex===l.UNSET_INDEX&&0!==e?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==e&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),this.selectedIndex instanceof Array||this.selectedIndex===e||this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),e!==l.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(e,"tabindex","0")},t.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},t.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var e=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(e)},t.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?"number"===typeof this.selectedIndex&&this.selectedIndex!==l.UNSET_INDEX?this.selectedIndex:v(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce((function(e,t){return Math.min(e,t)})):0:Math.max(this.focusedItemIndex,0)},t.prototype.isIndexValid=function(e){var t=this;if(e instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===e.length||e.some((function(e){return t.isIndexInRange(e)}))}if("number"===typeof e){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return this.isIndexInRange(e)||this.isSingleSelectionList&&e===l.UNSET_INDEX}return!1},t.prototype.isIndexInRange=function(e){var t=this.adapter.getListItemCount();return e>=0&&e<t},t.prototype.setSelectedIndexOnAction=function(e,t){void 0===t&&(t=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(e,t):this.setSelectedIndex(e)},t.prototype.toggleCheckboxAtIndex=function(e,t){var n=this.getSelectionAttribute(),i=this.adapter.isCheckboxCheckedAtIndex(e);t&&(i=!i,this.adapter.setCheckedCheckboxOrRadioAtIndex(e,i)),this.adapter.setAttributeForElementIndex(e,n,i?"true":"false");var s=this.selectedIndex===l.UNSET_INDEX?[]:this.selectedIndex.slice();i?s.push(e):s=s.filter((function(t){return t!==e})),this.selectedIndex=s},t.prototype.focusItemAtIndex=function(e){this.adapter.focusItemAtIndex(e),this.focusedItemIndex=e},t.prototype.toggleAll=function(e){var t=this.adapter.getListItemCount();if(e.length===t)this.setCheckboxAtIndex([]);else{for(var n=[],i=0;i<t;i++)(!this.adapter.listItemAtIndexHasClass(i,a.LIST_ITEM_DISABLED_CLASS)||e.indexOf(i)>-1)&&n.push(i);this.setCheckboxAtIndex(n)}},t.prototype.typeaheadMatchItem=function(e,t,n){var i=this;void 0===n&&(n=!1);var s={focusItemAtIndex:function(e){i.focusItemAtIndex(e)},focusedItemIndex:t||this.focusedItemIndex,nextChar:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:n,isItemAtIndexDisabled:function(e){return i.adapter.listItemAtIndexHasClass(e,a.LIST_ITEM_DISABLED_CLASS)}};return m(s,this.typeaheadState)},t.prototype.typeaheadInitSortedIndex=function(){return C(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},t.prototype.clearTypeaheadBuffer=function(){R(this.typeaheadState)},t}(r.M),D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,r._)(t,e),Object.defineProperty(t.prototype,"vertical",{set:function(e){this.foundation.setVerticalOrientation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[a.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wrapFocus",{set:function(e){this.foundation.setWrapFocus(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasTypeahead",{set:function(e){this.foundation.setHasTypeahead(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"singleSelection",{set:function(e){this.foundation.setSingleSelection(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(e){this.foundation.setSelectedIndex(e)},enumerable:!1,configurable:!0}),t.attachTo=function(e){return new t(e)},t.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled=I in this.root.dataset,this.isEvolutionEnabled?this.classNameMap=d:(0,o.m)(this.root,c.DEPRECATED_SELECTOR)?this.classNameMap=u:this.classNameMap=Object.values(a).reduce((function(e,t){return e[t]=t,e}),{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},t.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},t.prototype.layout=function(){var e=this.root.getAttribute(c.ARIA_ORIENTATION);this.vertical=e!==c.ARIA_ORIENTATION_HORIZONTAL;var t="."+this.classNameMap[a.LIST_ITEM_CLASS]+":not([tabindex])",n=c.FOCUSABLE_CHILD_ELEMENTS,i=this.root.querySelectorAll(t);i.length&&Array.prototype.forEach.call(i,(function(e){e.setAttribute("tabindex","-1")}));var s=this.root.querySelectorAll(n);s.length&&Array.prototype.forEach.call(s,(function(e){e.setAttribute("tabindex","-1")})),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},t.prototype.getPrimaryText=function(e){var t,n=e.querySelector("."+this.classNameMap[a.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||n)return null!==(t=null===n||void 0===n?void 0:n.textContent)&&void 0!==t?t:"";var i=e.querySelector("."+this.classNameMap[a.LIST_ITEM_TEXT_CLASS]);return i&&i.textContent||""},t.prototype.initializeListType=function(){var e=this;if(this.isInteractive=(0,o.m)(this.root,c.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var t=Array.from(this.root.querySelectorAll(c.SELECTED_ITEM_SELECTOR),(function(t){return e.listElements.indexOf(t)}));(0,o.m)(this.root,c.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=t:t.length>0&&(this.selectedIndex=t[0])}else{var n=this.root.querySelectorAll(c.ARIA_ROLE_CHECKBOX_SELECTOR),i=this.root.querySelector(c.ARIA_CHECKED_RADIO_SELECTOR);if(n.length){var s=this.root.querySelectorAll(c.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(s,(function(t){return e.listElements.indexOf(t)}))}else i&&(this.selectedIndex=this.listElements.indexOf(i))}},t.prototype.setEnabled=function(e,t){this.foundation.setEnabled(e,t)},t.prototype.typeaheadMatchItem=function(e,t){return this.foundation.typeaheadMatchItem(e,t,!0)},t.prototype.getDefaultFoundation=function(){var e=this,t={addClassForElementIndex:function(t,n){var i=e.listElements[t];i&&i.classList.add(e.classNameMap[n])},focusItemAtIndex:function(t){var n=e.listElements[t];n&&n.focus()},getAttributeForElementIndex:function(t,n){return e.listElements[t].getAttribute(n)},getFocusedElementIndex:function(){return e.listElements.indexOf(document.activeElement)},getListItemCount:function(){return e.listElements.length},getPrimaryTextAtIndex:function(t){return e.getPrimaryText(e.listElements[t])},hasCheckboxAtIndex:function(t){var n=e.listElements[t];return!!n.querySelector(c.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(t){var n=e.listElements[t];return!!n.querySelector(c.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(t){var n=e.listElements[t],i=n.querySelector(c.CHECKBOX_SELECTOR);return i.checked},isFocusInsideList:function(){return e.root!==document.activeElement&&e.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===e.root},listItemAtIndexHasClass:function(t,n){return e.listElements[t].classList.contains(e.classNameMap[n])},notifyAction:function(t){e.emit(c.ACTION_EVENT,{index:t},!0)},removeClassForElementIndex:function(t,n){var i=e.listElements[t];i&&i.classList.remove(e.classNameMap[n])},setAttributeForElementIndex:function(t,n,i){var s=e.listElements[t];s&&s.setAttribute(n,i)},setCheckedCheckboxOrRadioAtIndex:function(t,n){var i=e.listElements[t],s=i.querySelector(c.CHECKBOX_RADIO_SELECTOR);s.checked=n;var r=document.createEvent("Event");r.initEvent("change",!0,!0),s.dispatchEvent(r)},setTabIndexForListItemChildren:function(t,n){var i=e.listElements[t],s=c.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;Array.prototype.forEach.call(i.querySelectorAll(s),(function(e){e.setAttribute("tabindex",n)}))}};return new g(t)},t.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[a.LIST_ITEM_CLASS]+'[tabindex="0"]')){var e=this.initialFocusIndex();-1!==e&&(this.listElements[e].tabIndex=0)}},t.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if("number"===typeof this.selectedIndex&&this.selectedIndex!==l.UNSET_INDEX)return this.selectedIndex;var e=this.root.querySelector("."+this.classNameMap[a.LIST_ITEM_CLASS]+":not(."+this.classNameMap[a.LIST_ITEM_DISABLED_CLASS]+")");return null===e?-1:this.getListItemIndex(e)},t.prototype.getListItemIndex=function(e){var t=(0,o.c)(e,"."+this.classNameMap[a.LIST_ITEM_CLASS]+", ."+this.classNameMap[a.ROOT]);return t&&(0,o.m)(t,"."+this.classNameMap[a.LIST_ITEM_CLASS])?this.listElements.indexOf(t):-1},t.prototype.handleFocusInEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusIn(t)},t.prototype.handleFocusOutEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusOut(t)},t.prototype.handleKeydownEvent=function(e){var t=this.getListItemIndex(e.target),n=e.target;this.foundation.handleKeydown(e,n.classList.contains(this.classNameMap[a.LIST_ITEM_CLASS]),t)},t.prototype.handleClickEvent=function(e){var t=this.getListItemIndex(e.target),n=e.target,i=!(0,o.m)(n,c.CHECKBOX_RADIO_SELECTOR);this.foundation.handleClick(t,i)},t}(r.c);
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
 */},2183:function(e,t,n){n.d(t,{c:function(){return s}});var i=n(3662),s=(0,i.c)((function(e){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function n(){for(var e=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)&&s.length){var o=n.apply(null,s);o&&e.push(o)}else if("object"===r)for(var a in s)t.call(s,a)&&s[a]&&e.push(a)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}));
/*!
 * Crafted with ❤ by inovex GmbH
 */}}]);
//# sourceMappingURL=1738.9c586f37.js.map