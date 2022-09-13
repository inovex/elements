import{_ as k,b as B,c as H,M as K}from"./component-97c8fef9.b30e5ace.js";import{m as R,c as W}from"./ponyfill-495ec32d.2f34f215.js";/*!
 * Crafted with ❤ by inovex GmbH
 *//**
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
 */var C,p,s={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},X=(C={},C[""+s.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",C[""+s.LIST_ITEM_CLASS]="mdc-list-item",C[""+s.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",C[""+s.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",C[""+s.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",C[""+s.ROOT]="mdc-list",C),m=(p={},p[""+s.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",p[""+s.LIST_ITEM_CLASS]="mdc-deprecated-list-item",p[""+s.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",p[""+s.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",p[""+s.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",p[""+s.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",p[""+s.ROOT]="mdc-deprecated-list",p),c={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+s.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+s.LIST_ITEM_CLASS+` a,
    .`+m[s.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+m[s.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+s.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+s.LIST_ITEM_CLASS+` a,
    .`+s.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+s.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+m[s.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+m[s.LIST_ITEM_CLASS]+` a,
    .`+m[s.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+m[s.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},I={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},V="evolution";/**
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
 */var u={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},f=new Set;f.add(u.BACKSPACE);f.add(u.ENTER);f.add(u.SPACEBAR);f.add(u.PAGE_UP);f.add(u.PAGE_DOWN);f.add(u.END);f.add(u.HOME);f.add(u.ARROW_LEFT);f.add(u.ARROW_UP);f.add(u.ARROW_RIGHT);f.add(u.ARROW_DOWN);f.add(u.DELETE);f.add(u.ESCAPE);f.add(u.TAB);var A={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},E=new Map;E.set(A.BACKSPACE,u.BACKSPACE);E.set(A.ENTER,u.ENTER);E.set(A.SPACEBAR,u.SPACEBAR);E.set(A.PAGE_UP,u.PAGE_UP);E.set(A.PAGE_DOWN,u.PAGE_DOWN);E.set(A.END,u.END);E.set(A.HOME,u.HOME);E.set(A.ARROW_LEFT,u.ARROW_LEFT);E.set(A.ARROW_UP,u.ARROW_UP);E.set(A.ARROW_RIGHT,u.ARROW_RIGHT);E.set(A.ARROW_DOWN,u.ARROW_DOWN);E.set(A.DELETE,u.DELETE);E.set(A.ESCAPE,u.ESCAPE);E.set(A.TAB,u.TAB);var _=new Set;_.add(u.PAGE_UP);_.add(u.PAGE_DOWN);_.add(u.END);_.add(u.HOME);_.add(u.ARROW_LEFT);_.add(u.ARROW_UP);_.add(u.ARROW_RIGHT);_.add(u.ARROW_DOWN);function h(d){var i=d.key;if(f.has(i))return i;var e=E.get(d.keyCode);return e||u.UNKNOWN}/**
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
 */var G=["input","button","textarea","select"],T=function(d){var i=d.target;if(!!i){var e=(""+i.tagName).toLowerCase();G.indexOf(e)===-1&&d.preventDefault()}};/**
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
 */function q(){var d={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return d}function j(d,i){for(var e=new Map,t=0;t<d;t++){var n=i(t).trim();if(!!n){var r=n[0].toLowerCase();e.has(r)||e.set(r,[]),e.get(r).push({text:n.toLowerCase(),index:t})}}return e.forEach(function(a){a.sort(function(o,l){return o.index-l.index})}),e}function N(d,i){var e=d.nextChar,t=d.focusItemAtIndex,n=d.sortedIndexByFirstChar,r=d.focusedItemIndex,a=d.skipFocus,o=d.isItemAtIndexDisabled;clearTimeout(i.bufferClearTimeout),i.bufferClearTimeout=setTimeout(function(){w(i)},I.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),i.typeaheadBuffer=i.typeaheadBuffer+e;var l;return i.typeaheadBuffer.length===1?l=z(n,r,o,i):l=Y(n,o,i),l!==-1&&!a&&t(l),l}function z(d,i,e,t){var n=t.typeaheadBuffer[0],r=d.get(n);if(!r)return-1;if(n===t.currentFirstChar&&r[t.sortedIndexCursor].index===i){t.sortedIndexCursor=(t.sortedIndexCursor+1)%r.length;var a=r[t.sortedIndexCursor].index;if(!e(a))return a}t.currentFirstChar=n;var o=-1,l;for(l=0;l<r.length;l++)if(!e(r[l].index)){o=l;break}for(;l<r.length;l++)if(r[l].index>i&&!e(r[l].index)){o=l;break}return o!==-1?(t.sortedIndexCursor=o,r[t.sortedIndexCursor].index):-1}function Y(d,i,e){var t=e.typeaheadBuffer[0],n=d.get(t);if(!n)return-1;var r=n[e.sortedIndexCursor];if(r.text.lastIndexOf(e.typeaheadBuffer,0)===0&&!i(r.index))return r.index;for(var a=(e.sortedIndexCursor+1)%n.length,o=-1;a!==e.sortedIndexCursor;){var l=n[a],x=l.text.lastIndexOf(e.typeaheadBuffer,0)===0,L=!i(l.index);if(x&&L){o=a;break}a=(a+1)%n.length}return o!==-1?(e.sortedIndexCursor=o,n[e.sortedIndexCursor].index):-1}function U(d){return d.typeaheadBuffer.length>0}function w(d){d.typeaheadBuffer=""}function P(d,i){var e=d.event,t=d.isTargetListItem,n=d.focusedItemIndex,r=d.focusItemAtIndex,a=d.sortedIndexByFirstChar,o=d.isItemAtIndexDisabled,l=h(e)==="ArrowLeft",x=h(e)==="ArrowUp",L=h(e)==="ArrowRight",O=h(e)==="ArrowDown",g=h(e)==="Home",D=h(e)==="End",F=h(e)==="Enter",y=h(e)==="Spacebar";if(e.ctrlKey||e.metaKey||l||x||L||O||g||D||F)return-1;var S=!y&&e.key.length===1;if(S){T(e);var b={focusItemAtIndex:r,focusedItemIndex:n,nextChar:e.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return N(b,i)}if(!y)return-1;t&&T(e);var v=t&&U(i);if(v){var b={focusItemAtIndex:r,focusedItemIndex:n,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return N(b,i)}return-1}/**
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
 */function Z(d){return d instanceof Array}var J=function(d){k(i,d);function i(e){var t=d.call(this,B(B({},i.defaultAdapter),e))||this;return t.wrapFocus=!1,t.isVertical=!0,t.isSingleSelectionList=!1,t.selectedIndex=I.UNSET_INDEX,t.focusedItemIndex=I.UNSET_INDEX,t.useActivatedClass=!1,t.useSelectedAttr=!1,t.ariaCurrentAttrValue=null,t.isCheckboxList=!1,t.isRadioList=!1,t.hasTypeahead=!1,t.typeaheadState=q(),t.sortedIndexByFirstChar=new Map,t}return Object.defineProperty(i,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(i,"cssClasses",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),i.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},i.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},i.prototype.setWrapFocus=function(e){this.wrapFocus=e},i.prototype.setVerticalOrientation=function(e){this.isVertical=e},i.prototype.setSingleSelection=function(e){this.isSingleSelectionList=e,e&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},i.prototype.maybeInitializeSingleSelection=function(){var e=this.getSelectedIndexFromDOM();if(e!==I.UNSET_INDEX){var t=this.adapter.listItemAtIndexHasClass(e,s.LIST_ITEM_ACTIVATED_CLASS);t&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=e}},i.prototype.getSelectedIndexFromDOM=function(){for(var e=I.UNSET_INDEX,t=this.adapter.getListItemCount(),n=0;n<t;n++){var r=this.adapter.listItemAtIndexHasClass(n,s.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(n,s.LIST_ITEM_ACTIVATED_CLASS);if(!!(r||a)){e=n;break}}return e},i.prototype.setHasTypeahead=function(e){this.hasTypeahead=e,e&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},i.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&U(this.typeaheadState)},i.prototype.setUseActivatedClass=function(e){this.useActivatedClass=e},i.prototype.setUseSelectedAttribute=function(e){this.useSelectedAttr=e},i.prototype.getSelectedIndex=function(){return this.selectedIndex},i.prototype.setSelectedIndex=function(e,t){var n=t===void 0?{}:t,r=n.forceUpdate;!this.isIndexValid(e)||(this.isCheckboxList?this.setCheckboxAtIndex(e):this.isRadioList?this.setRadioAtIndex(e):this.setSingleSelectionAtIndex(e,{forceUpdate:r}))},i.prototype.handleFocusIn=function(e){e>=0&&(this.focusedItemIndex=e,this.adapter.setAttributeForElementIndex(e,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(e,"0"))},i.prototype.handleFocusOut=function(e){var t=this;e>=0&&(this.adapter.setAttributeForElementIndex(e,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(e,"-1")),setTimeout(function(){t.adapter.isFocusInsideList()||t.setTabindexToFirstSelectedOrFocusedItem()},0)},i.prototype.handleKeydown=function(e,t,n){var r=this,a=h(e)==="ArrowLeft",o=h(e)==="ArrowUp",l=h(e)==="ArrowRight",x=h(e)==="ArrowDown",L=h(e)==="Home",O=h(e)==="End",g=h(e)==="Enter",D=h(e)==="Spacebar",F=e.key==="A"||e.key==="a";if(this.adapter.isRootFocused()){if(o||O?(e.preventDefault(),this.focusLastElement()):(x||L)&&(e.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var y={event:e,focusItemAtIndex:function(v){r.focusItemAtIndex(v)},focusedItemIndex:-1,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(v){return r.adapter.listItemAtIndexHasClass(v,s.LIST_ITEM_DISABLED_CLASS)}};P(y,this.typeaheadState)}return}var S=this.adapter.getFocusedElementIndex();if(!(S===-1&&(S=n,S<0))){if(this.isVertical&&x||!this.isVertical&&l)T(e),this.focusNextElement(S);else if(this.isVertical&&o||!this.isVertical&&a)T(e),this.focusPrevElement(S);else if(L)T(e),this.focusFirstElement();else if(O)T(e),this.focusLastElement();else if(F&&e.ctrlKey&&this.isCheckboxList)e.preventDefault(),this.toggleAll(this.selectedIndex===I.UNSET_INDEX?[]:this.selectedIndex);else if((g||D)&&t){var b=e.target;if(b&&b.tagName==="A"&&g||(T(e),this.adapter.listItemAtIndexHasClass(S,s.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(S),this.adapter.notifyAction(S))}if(this.hasTypeahead){var y={event:e,focusItemAtIndex:function(M){r.focusItemAtIndex(M)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(M){return r.adapter.listItemAtIndexHasClass(M,s.LIST_ITEM_DISABLED_CLASS)}};P(y,this.typeaheadState)}}},i.prototype.handleClick=function(e,t){e!==I.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(e,s.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(e,t),this.adapter.notifyAction(e)))},i.prototype.focusNextElement=function(e){var t=this.adapter.getListItemCount(),n=e+1;if(n>=t)if(this.wrapFocus)n=0;else return e;return this.focusItemAtIndex(n),n},i.prototype.focusPrevElement=function(e){var t=e-1;if(t<0)if(this.wrapFocus)t=this.adapter.getListItemCount()-1;else return e;return this.focusItemAtIndex(t),t},i.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},i.prototype.focusLastElement=function(){var e=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(e),e},i.prototype.focusInitialElement=function(){var e=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(e),e},i.prototype.setEnabled=function(e,t){!this.isIndexValid(e)||(t?(this.adapter.removeClassForElementIndex(e,s.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,c.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(e,s.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,c.ARIA_DISABLED,"true")))},i.prototype.setSingleSelectionAtIndex=function(e,t){var n=t===void 0?{}:t,r=n.forceUpdate;if(!(this.selectedIndex===e&&!r)){var a=s.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(a=s.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==I.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,a),this.setAriaForSingleSelectionAtIndex(e),this.setTabindexAtIndex(e),e!==I.UNSET_INDEX&&this.adapter.addClassForElementIndex(e,a),this.selectedIndex=e}},i.prototype.setAriaForSingleSelectionAtIndex=function(e){this.selectedIndex===I.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(e,c.ARIA_CURRENT));var t=this.ariaCurrentAttrValue!==null,n=t?c.ARIA_CURRENT:c.ARIA_SELECTED;if(this.selectedIndex!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,n,"false"),e!==I.UNSET_INDEX){var r=t?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(e,n,r)}},i.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?c.ARIA_SELECTED:c.ARIA_CHECKED},i.prototype.setRadioAtIndex=function(e){var t=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(e,!0),this.selectedIndex!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,t,"false"),this.adapter.setAttributeForElementIndex(e,t,"true"),this.selectedIndex=e},i.prototype.setCheckboxAtIndex=function(e){for(var t=this.getSelectionAttribute(),n=0;n<this.adapter.getListItemCount();n++){var r=!1;e.indexOf(n)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(n,r),this.adapter.setAttributeForElementIndex(n,t,r?"true":"false")}this.selectedIndex=e},i.prototype.setTabindexAtIndex=function(e){this.focusedItemIndex===I.UNSET_INDEX&&e!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==e&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==e&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),e!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(e,"tabindex","0")},i.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},i.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var e=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(e)},i.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==I.UNSET_INDEX?this.selectedIndex:Z(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(e,t){return Math.min(e,t)}):0:Math.max(this.focusedItemIndex,0)},i.prototype.isIndexValid=function(e){var t=this;if(e instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return e.length===0?!0:e.some(function(n){return t.isIndexInRange(n)})}else if(typeof e=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return this.isIndexInRange(e)||this.isSingleSelectionList&&e===I.UNSET_INDEX}else return!1},i.prototype.isIndexInRange=function(e){var t=this.adapter.getListItemCount();return e>=0&&e<t},i.prototype.setSelectedIndexOnAction=function(e,t){t===void 0&&(t=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(e,t):this.setSelectedIndex(e)},i.prototype.toggleCheckboxAtIndex=function(e,t){var n=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(e);t&&(r=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(e,r)),this.adapter.setAttributeForElementIndex(e,n,r?"true":"false");var a=this.selectedIndex===I.UNSET_INDEX?[]:this.selectedIndex.slice();r?a.push(e):a=a.filter(function(o){return o!==e}),this.selectedIndex=a},i.prototype.focusItemAtIndex=function(e){this.adapter.focusItemAtIndex(e),this.focusedItemIndex=e},i.prototype.toggleAll=function(e){var t=this.adapter.getListItemCount();if(e.length===t)this.setCheckboxAtIndex([]);else{for(var n=[],r=0;r<t;r++)(!this.adapter.listItemAtIndexHasClass(r,s.LIST_ITEM_DISABLED_CLASS)||e.indexOf(r)>-1)&&n.push(r);this.setCheckboxAtIndex(n)}},i.prototype.typeaheadMatchItem=function(e,t,n){var r=this;n===void 0&&(n=!1);var a={focusItemAtIndex:function(o){r.focusItemAtIndex(o)},focusedItemIndex:t||this.focusedItemIndex,nextChar:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:n,isItemAtIndexDisabled:function(o){return r.adapter.listItemAtIndexHasClass(o,s.LIST_ITEM_DISABLED_CLASS)}};return N(a,this.typeaheadState)},i.prototype.typeaheadInitSortedIndex=function(){return j(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},i.prototype.clearTypeaheadBuffer=function(){w(this.typeaheadState)},i}(H);/**
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
 */var ee=function(d){k(i,d);function i(){return d!==null&&d.apply(this,arguments)||this}return Object.defineProperty(i.prototype,"vertical",{set:function(e){this.foundation.setVerticalOrientation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[s.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"wrapFocus",{set:function(e){this.foundation.setWrapFocus(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"hasTypeahead",{set:function(e){this.foundation.setHasTypeahead(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"singleSelection",{set:function(e){this.foundation.setSingleSelection(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(e){this.foundation.setSelectedIndex(e)},enumerable:!1,configurable:!0}),i.attachTo=function(e){return new i(e)},i.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled=V in this.root.dataset,this.isEvolutionEnabled?this.classNameMap=X:R(this.root,c.DEPRECATED_SELECTOR)?this.classNameMap=m:this.classNameMap=Object.values(s).reduce(function(e,t){return e[t]=t,e},{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},i.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},i.prototype.layout=function(){var e=this.root.getAttribute(c.ARIA_ORIENTATION);this.vertical=e!==c.ARIA_ORIENTATION_HORIZONTAL;var t="."+this.classNameMap[s.LIST_ITEM_CLASS]+":not([tabindex])",n=c.FOCUSABLE_CHILD_ELEMENTS,r=this.root.querySelectorAll(t);r.length&&Array.prototype.forEach.call(r,function(o){o.setAttribute("tabindex","-1")});var a=this.root.querySelectorAll(n);a.length&&Array.prototype.forEach.call(a,function(o){o.setAttribute("tabindex","-1")}),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},i.prototype.getPrimaryText=function(e){var t,n=e.querySelector("."+this.classNameMap[s.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||n)return(t=n==null?void 0:n.textContent)!==null&&t!==void 0?t:"";var r=e.querySelector("."+this.classNameMap[s.LIST_ITEM_TEXT_CLASS]);return r&&r.textContent||""},i.prototype.initializeListType=function(){var e=this;if(this.isInteractive=R(this.root,c.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var t=Array.from(this.root.querySelectorAll(c.SELECTED_ITEM_SELECTOR),function(o){return e.listElements.indexOf(o)});R(this.root,c.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=t:t.length>0&&(this.selectedIndex=t[0]);return}var n=this.root.querySelectorAll(c.ARIA_ROLE_CHECKBOX_SELECTOR),r=this.root.querySelector(c.ARIA_CHECKED_RADIO_SELECTOR);if(n.length){var a=this.root.querySelectorAll(c.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(a,function(o){return e.listElements.indexOf(o)})}else r&&(this.selectedIndex=this.listElements.indexOf(r))},i.prototype.setEnabled=function(e,t){this.foundation.setEnabled(e,t)},i.prototype.typeaheadMatchItem=function(e,t){return this.foundation.typeaheadMatchItem(e,t,!0)},i.prototype.getDefaultFoundation=function(){var e=this,t={addClassForElementIndex:function(n,r){var a=e.listElements[n];a&&a.classList.add(e.classNameMap[r])},focusItemAtIndex:function(n){var r=e.listElements[n];r&&r.focus()},getAttributeForElementIndex:function(n,r){return e.listElements[n].getAttribute(r)},getFocusedElementIndex:function(){return e.listElements.indexOf(document.activeElement)},getListItemCount:function(){return e.listElements.length},getPrimaryTextAtIndex:function(n){return e.getPrimaryText(e.listElements[n])},hasCheckboxAtIndex:function(n){var r=e.listElements[n];return!!r.querySelector(c.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(n){var r=e.listElements[n];return!!r.querySelector(c.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(n){var r=e.listElements[n],a=r.querySelector(c.CHECKBOX_SELECTOR);return a.checked},isFocusInsideList:function(){return e.root!==document.activeElement&&e.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===e.root},listItemAtIndexHasClass:function(n,r){return e.listElements[n].classList.contains(e.classNameMap[r])},notifyAction:function(n){e.emit(c.ACTION_EVENT,{index:n},!0)},removeClassForElementIndex:function(n,r){var a=e.listElements[n];a&&a.classList.remove(e.classNameMap[r])},setAttributeForElementIndex:function(n,r,a){var o=e.listElements[n];o&&o.setAttribute(r,a)},setCheckedCheckboxOrRadioAtIndex:function(n,r){var a=e.listElements[n],o=a.querySelector(c.CHECKBOX_RADIO_SELECTOR);o.checked=r;var l=document.createEvent("Event");l.initEvent("change",!0,!0),o.dispatchEvent(l)},setTabIndexForListItemChildren:function(n,r){var a=e.listElements[n],o=c.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;Array.prototype.forEach.call(a.querySelectorAll(o),function(l){l.setAttribute("tabindex",r)})}};return new J(t)},i.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[s.LIST_ITEM_CLASS]+'[tabindex="0"]')){var e=this.initialFocusIndex();e!==-1&&(this.listElements[e].tabIndex=0)}},i.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if(typeof this.selectedIndex=="number"&&this.selectedIndex!==I.UNSET_INDEX)return this.selectedIndex;var e=this.root.querySelector("."+this.classNameMap[s.LIST_ITEM_CLASS]+":not(."+this.classNameMap[s.LIST_ITEM_DISABLED_CLASS]+")");return e===null?-1:this.getListItemIndex(e)},i.prototype.getListItemIndex=function(e){var t=W(e,"."+this.classNameMap[s.LIST_ITEM_CLASS]+", ."+this.classNameMap[s.ROOT]);return t&&R(t,"."+this.classNameMap[s.LIST_ITEM_CLASS])?this.listElements.indexOf(t):-1},i.prototype.handleFocusInEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusIn(t)},i.prototype.handleFocusOutEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusOut(t)},i.prototype.handleKeydownEvent=function(e){var t=this.getListItemIndex(e.target),n=e.target;this.foundation.handleKeydown(e,n.classList.contains(this.classNameMap[s.LIST_ITEM_CLASS]),t)},i.prototype.handleClickEvent=function(e){var t=this.getListItemIndex(e.target),n=e.target,r=!R(n,c.CHECKBOX_RADIO_SELECTOR);this.foundation.handleClick(t,r)},i}(K);export{u as K,ee as M,J as a,h as b,s as c,I as n};
