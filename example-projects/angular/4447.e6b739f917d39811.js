"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[4447],{6277:(H,D,L)=>{L.d(D,{a:()=>m,c:()=>S,g:()=>C});var m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function C(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function S(s,x,h){return s(h={path:x,exports:{},require:function(l,I){return function _(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},h.exports),h.exports}},6069:(H,D,L)=>{L.d(D,{K:()=>o,M:()=>J,a:()=>V,b:()=>f,c:()=>s,n:()=>I});var S,_,m=L(8435),C=L(804),s={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},x=((S={})[""+s.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",S[""+s.LIST_ITEM_CLASS]="mdc-list-item",S[""+s.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",S[""+s.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",S[""+s.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",S[""+s.ROOT]="mdc-list",S),h=((_={})[""+s.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",_[""+s.LIST_ITEM_CLASS]="mdc-deprecated-list-item",_[""+s.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",_[""+s.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",_[""+s.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",_[""+s.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",_[""+s.ROOT]="mdc-deprecated-list",_),l={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+s.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+s.LIST_ITEM_CLASS+" a,\n    ."+h[s.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+h[s.LIST_ITEM_CLASS]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+s.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+s.LIST_ITEM_CLASS+" a,\n    ."+s.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+s.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled),\n    .'+h[s.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+h[s.LIST_ITEM_CLASS]+" a,\n    ."+h[s.LIST_ITEM_CLASS]+' input[type="radio"]:not(:disabled),\n    .'+h[s.LIST_ITEM_CLASS]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},I={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},o={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},E=new Set;E.add(o.BACKSPACE),E.add(o.ENTER),E.add(o.SPACEBAR),E.add(o.PAGE_UP),E.add(o.PAGE_DOWN),E.add(o.END),E.add(o.HOME),E.add(o.ARROW_LEFT),E.add(o.ARROW_UP),E.add(o.ARROW_RIGHT),E.add(o.ARROW_DOWN),E.add(o.DELETE),E.add(o.ESCAPE),E.add(o.TAB);var A=new Map;A.set(8,o.BACKSPACE),A.set(13,o.ENTER),A.set(32,o.SPACEBAR),A.set(33,o.PAGE_UP),A.set(34,o.PAGE_DOWN),A.set(35,o.END),A.set(36,o.HOME),A.set(37,o.ARROW_LEFT),A.set(38,o.ARROW_UP),A.set(39,o.ARROW_RIGHT),A.set(40,o.ARROW_DOWN),A.set(46,o.DELETE),A.set(27,o.ESCAPE),A.set(9,o.TAB);var y=new Set;function f(u){var n=u.key;return E.has(n)?n:A.get(u.keyCode)||o.UNKNOWN}y.add(o.PAGE_UP),y.add(o.PAGE_DOWN),y.add(o.END),y.add(o.HOME),y.add(o.ARROW_LEFT),y.add(o.ARROW_UP),y.add(o.ARROW_RIGHT),y.add(o.ARROW_DOWN);var j=["input","button","textarea","select"],b=function(u){var n=u.target;if(n){var e=(""+n.tagName).toLowerCase();-1===j.indexOf(e)&&u.preventDefault()}};function B(u,n){var c,e=u.nextChar,t=u.focusItemAtIndex,i=u.sortedIndexByFirstChar,r=u.focusedItemIndex,a=u.skipFocus,d=u.isItemAtIndexDisabled;return clearTimeout(n.bufferClearTimeout),n.bufferClearTimeout=setTimeout(function(){W(n)},I.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),n.typeaheadBuffer=n.typeaheadBuffer+e,c=1===n.typeaheadBuffer.length?function z(u,n,e,t){var i=t.typeaheadBuffer[0],r=u.get(i);if(!r)return-1;if(i===t.currentFirstChar&&r[t.sortedIndexCursor].index===n){t.sortedIndexCursor=(t.sortedIndexCursor+1)%r.length;var a=r[t.sortedIndexCursor].index;if(!e(a))return a}t.currentFirstChar=i;var c,d=-1;for(c=0;c<r.length;c++)if(!e(r[c].index)){d=c;break}for(;c<r.length;c++)if(r[c].index>n&&!e(r[c].index)){d=c;break}return-1!==d?(t.sortedIndexCursor=d,r[t.sortedIndexCursor].index):-1}(i,r,d,n):function Y(u,n,e){var i=u.get(e.typeaheadBuffer[0]);if(!i)return-1;var r=i[e.sortedIndexCursor];if(0===r.text.lastIndexOf(e.typeaheadBuffer,0)&&!n(r.index))return r.index;for(var a=(e.sortedIndexCursor+1)%i.length,d=-1;a!==e.sortedIndexCursor;){var c=i[a],v=0===c.text.lastIndexOf(e.typeaheadBuffer,0),O=!n(c.index);if(v&&O){d=a;break}a=(a+1)%i.length}return-1!==d?(e.sortedIndexCursor=d,i[e.sortedIndexCursor].index):-1}(i,d,n),-1!==c&&!a&&t(c),c}function K(u){return u.typeaheadBuffer.length>0}function W(u){u.typeaheadBuffer=""}function X(u,n){var e=u.event,t=u.isTargetListItem,i=u.focusedItemIndex,r=u.focusItemAtIndex,a=u.sortedIndexByFirstChar,d=u.isItemAtIndexDisabled,c="ArrowLeft"===f(e),v="ArrowUp"===f(e),O="ArrowRight"===f(e),N="ArrowDown"===f(e),P="Home"===f(e),k="End"===f(e),w="Enter"===f(e),R="Spacebar"===f(e);return e.ctrlKey||e.metaKey||c||v||O||N||P||k||w?-1:R||1!==e.key.length?R?(t&&b(e),t&&K(n)?B({focusItemAtIndex:r,focusedItemIndex:i,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:d},n):-1):-1:(b(e),B({focusItemAtIndex:r,focusedItemIndex:i,nextChar:e.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:d},n))}var V=function(u){function n(e){var t=u.call(this,(0,m.a)((0,m.a)({},n.defaultAdapter),e))||this;return t.wrapFocus=!1,t.isVertical=!0,t.isSingleSelectionList=!1,t.selectedIndex=I.UNSET_INDEX,t.focusedItemIndex=I.UNSET_INDEX,t.useActivatedClass=!1,t.useSelectedAttr=!1,t.ariaCurrentAttrValue=null,t.isCheckboxList=!1,t.isRadioList=!1,t.hasTypeahead=!1,t.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},t.sortedIndexByFirstChar=new Map,t}return(0,m._)(n,u),Object.defineProperty(n,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(n,"cssClasses",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),n.prototype.layout=function(){0!==this.adapter.getListItemCount()&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},n.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},n.prototype.setWrapFocus=function(e){this.wrapFocus=e},n.prototype.setVerticalOrientation=function(e){this.isVertical=e},n.prototype.setSingleSelection=function(e){this.isSingleSelectionList=e,e&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},n.prototype.maybeInitializeSingleSelection=function(){var e=this.getSelectedIndexFromDOM();e!==I.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(e,s.LIST_ITEM_ACTIVATED_CLASS)&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=e)},n.prototype.getSelectedIndexFromDOM=function(){for(var e=I.UNSET_INDEX,t=this.adapter.getListItemCount(),i=0;i<t;i++){var r=this.adapter.listItemAtIndexHasClass(i,s.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(i,s.LIST_ITEM_ACTIVATED_CLASS);if(r||a){e=i;break}}return e},n.prototype.setHasTypeahead=function(e){this.hasTypeahead=e,e&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},n.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&K(this.typeaheadState)},n.prototype.setUseActivatedClass=function(e){this.useActivatedClass=e},n.prototype.setUseSelectedAttribute=function(e){this.useSelectedAttr=e},n.prototype.getSelectedIndex=function(){return this.selectedIndex},n.prototype.setSelectedIndex=function(e,t){var r=(void 0===t?{}:t).forceUpdate;this.isIndexValid(e)&&(this.isCheckboxList?this.setCheckboxAtIndex(e):this.isRadioList?this.setRadioAtIndex(e):this.setSingleSelectionAtIndex(e,{forceUpdate:r}))},n.prototype.handleFocusIn=function(e){e>=0&&(this.focusedItemIndex=e,this.adapter.setAttributeForElementIndex(e,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(e,"0"))},n.prototype.handleFocusOut=function(e){var t=this;e>=0&&(this.adapter.setAttributeForElementIndex(e,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(e,"-1")),setTimeout(function(){t.adapter.isFocusInsideList()||t.setTabindexToFirstSelectedOrFocusedItem()},0)},n.prototype.handleKeydown=function(e,t,i){var r=this,a="ArrowLeft"===f(e),d="ArrowUp"===f(e),c="ArrowRight"===f(e),v="ArrowDown"===f(e),O="Home"===f(e),N="End"===f(e),P="Enter"===f(e),k="Spacebar"===f(e),w="A"===e.key||"a"===e.key;if(this.adapter.isRootFocused())d||N?(e.preventDefault(),this.focusLastElement()):(v||O)&&(e.preventDefault(),this.focusFirstElement()),this.hasTypeahead&&X({event:e,focusItemAtIndex:function(M){r.focusItemAtIndex(M)},focusedItemIndex:-1,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(M){return r.adapter.listItemAtIndexHasClass(M,s.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState);else{var T=this.adapter.getFocusedElementIndex();if(!(-1===T&&(T=i,T<0))){if(this.isVertical&&v||!this.isVertical&&c)b(e),this.focusNextElement(T);else if(this.isVertical&&d||!this.isVertical&&a)b(e),this.focusPrevElement(T);else if(O)b(e),this.focusFirstElement();else if(N)b(e),this.focusLastElement();else if(w&&e.ctrlKey&&this.isCheckboxList)e.preventDefault(),this.toggleAll(this.selectedIndex===I.UNSET_INDEX?[]:this.selectedIndex);else if((P||k)&&t){var g=e.target;if(g&&"A"===g.tagName&&P||(b(e),this.adapter.listItemAtIndexHasClass(T,s.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(T),this.adapter.notifyAction(T))}this.hasTypeahead&&X({event:e,focusItemAtIndex:function(U){r.focusItemAtIndex(U)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(U){return r.adapter.listItemAtIndexHasClass(U,s.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)}}},n.prototype.handleClick=function(e,t){e!==I.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(e,s.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(e,t),this.adapter.notifyAction(e)))},n.prototype.focusNextElement=function(e){var i=e+1;if(i>=this.adapter.getListItemCount()){if(!this.wrapFocus)return e;i=0}return this.focusItemAtIndex(i),i},n.prototype.focusPrevElement=function(e){var t=e-1;if(t<0){if(!this.wrapFocus)return e;t=this.adapter.getListItemCount()-1}return this.focusItemAtIndex(t),t},n.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},n.prototype.focusLastElement=function(){var e=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(e),e},n.prototype.focusInitialElement=function(){var e=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(e),e},n.prototype.setEnabled=function(e,t){this.isIndexValid(e)&&(t?(this.adapter.removeClassForElementIndex(e,s.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,l.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(e,s.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,l.ARIA_DISABLED,"true")))},n.prototype.setSingleSelectionAtIndex=function(e,t){if(this.selectedIndex!==e||(void 0===t?{}:t).forceUpdate){var a=s.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(a=s.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==I.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,a),this.setAriaForSingleSelectionAtIndex(e),this.setTabindexAtIndex(e),e!==I.UNSET_INDEX&&this.adapter.addClassForElementIndex(e,a),this.selectedIndex=e}},n.prototype.setAriaForSingleSelectionAtIndex=function(e){this.selectedIndex===I.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(e,l.ARIA_CURRENT));var t=null!==this.ariaCurrentAttrValue,i=t?l.ARIA_CURRENT:l.ARIA_SELECTED;this.selectedIndex!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),e!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(e,i,t?this.ariaCurrentAttrValue:"true")},n.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?l.ARIA_SELECTED:l.ARIA_CHECKED},n.prototype.setRadioAtIndex=function(e){var t=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(e,!0),this.selectedIndex!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,t,"false"),this.adapter.setAttributeForElementIndex(e,t,"true"),this.selectedIndex=e},n.prototype.setCheckboxAtIndex=function(e){for(var t=this.getSelectionAttribute(),i=0;i<this.adapter.getListItemCount();i++){var r=!1;e.indexOf(i)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(i,r),this.adapter.setAttributeForElementIndex(i,t,r?"true":"false")}this.selectedIndex=e},n.prototype.setTabindexAtIndex=function(e){this.focusedItemIndex===I.UNSET_INDEX&&0!==e?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==e&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==e&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),e!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(e,"tabindex","0")},n.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},n.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var e=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(e)},n.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?"number"==typeof this.selectedIndex&&this.selectedIndex!==I.UNSET_INDEX?this.selectedIndex:function Z(u){return u instanceof Array}(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(e,t){return Math.min(e,t)}):0:Math.max(this.focusedItemIndex,0)},n.prototype.isIndexValid=function(e){var t=this;if(e instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===e.length||e.some(function(i){return t.isIndexInRange(i)})}if("number"==typeof e){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return this.isIndexInRange(e)||this.isSingleSelectionList&&e===I.UNSET_INDEX}return!1},n.prototype.isIndexInRange=function(e){var t=this.adapter.getListItemCount();return e>=0&&e<t},n.prototype.setSelectedIndexOnAction=function(e,t){void 0===t&&(t=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(e,t):this.setSelectedIndex(e)},n.prototype.toggleCheckboxAtIndex=function(e,t){var i=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(e);t&&this.adapter.setCheckedCheckboxOrRadioAtIndex(e,r=!r),this.adapter.setAttributeForElementIndex(e,i,r?"true":"false");var a=this.selectedIndex===I.UNSET_INDEX?[]:this.selectedIndex.slice();r?a.push(e):a=a.filter(function(d){return d!==e}),this.selectedIndex=a},n.prototype.focusItemAtIndex=function(e){this.adapter.focusItemAtIndex(e),this.focusedItemIndex=e},n.prototype.toggleAll=function(e){var t=this.adapter.getListItemCount();if(e.length===t)this.setCheckboxAtIndex([]);else{for(var i=[],r=0;r<t;r++)(!this.adapter.listItemAtIndexHasClass(r,s.LIST_ITEM_DISABLED_CLASS)||e.indexOf(r)>-1)&&i.push(r);this.setCheckboxAtIndex(i)}},n.prototype.typeaheadMatchItem=function(e,t,i){var r=this;return void 0===i&&(i=!1),B({focusItemAtIndex:function(d){r.focusItemAtIndex(d)},focusedItemIndex:t||this.focusedItemIndex,nextChar:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:i,isItemAtIndexDisabled:function(d){return r.adapter.listItemAtIndexHasClass(d,s.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)},n.prototype.typeaheadInitSortedIndex=function(){return function q(u,n){for(var e=new Map,t=0;t<u;t++){var i=n(t).trim();if(i){var r=i[0].toLowerCase();e.has(r)||e.set(r,[]),e.get(r).push({text:i.toLowerCase(),index:t})}}return e.forEach(function(a){a.sort(function(d,c){return d.index-c.index})}),e}(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},n.prototype.clearTypeaheadBuffer=function(){W(this.typeaheadState)},n}(m.M),J=function(u){function n(){return null!==u&&u.apply(this,arguments)||this}return(0,m._)(n,u),Object.defineProperty(n.prototype,"vertical",{set:function(e){this.foundation.setVerticalOrientation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[s.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"wrapFocus",{set:function(e){this.foundation.setWrapFocus(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"hasTypeahead",{set:function(e){this.foundation.setHasTypeahead(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"singleSelection",{set:function(e){this.foundation.setSingleSelection(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(e){this.foundation.setSelectedIndex(e)},enumerable:!1,configurable:!0}),n.attachTo=function(e){return new n(e)},n.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled="evolution"in this.root.dataset,this.classNameMap=this.isEvolutionEnabled?x:(0,C.m)(this.root,l.DEPRECATED_SELECTOR)?h:Object.values(s).reduce(function(e,t){return e[t]=t,e},{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},n.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},n.prototype.layout=function(){var e=this.root.getAttribute(l.ARIA_ORIENTATION);this.vertical=e!==l.ARIA_ORIENTATION_HORIZONTAL;var i=l.FOCUSABLE_CHILD_ELEMENTS,r=this.root.querySelectorAll("."+this.classNameMap[s.LIST_ITEM_CLASS]+":not([tabindex])");r.length&&Array.prototype.forEach.call(r,function(d){d.setAttribute("tabindex","-1")});var a=this.root.querySelectorAll(i);a.length&&Array.prototype.forEach.call(a,function(d){d.setAttribute("tabindex","-1")}),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},n.prototype.getPrimaryText=function(e){var t,i=e.querySelector("."+this.classNameMap[s.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||i)return null!==(t=i?.textContent)&&void 0!==t?t:"";var r=e.querySelector("."+this.classNameMap[s.LIST_ITEM_TEXT_CLASS]);return r&&r.textContent||""},n.prototype.initializeListType=function(){var e=this;if(this.isInteractive=(0,C.m)(this.root,l.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var t=Array.from(this.root.querySelectorAll(l.SELECTED_ITEM_SELECTOR),function(d){return e.listElements.indexOf(d)});(0,C.m)(this.root,l.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=t:t.length>0&&(this.selectedIndex=t[0])}else{var i=this.root.querySelectorAll(l.ARIA_ROLE_CHECKBOX_SELECTOR),r=this.root.querySelector(l.ARIA_CHECKED_RADIO_SELECTOR);if(i.length){var a=this.root.querySelectorAll(l.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(a,function(d){return e.listElements.indexOf(d)})}else r&&(this.selectedIndex=this.listElements.indexOf(r))}},n.prototype.setEnabled=function(e,t){this.foundation.setEnabled(e,t)},n.prototype.typeaheadMatchItem=function(e,t){return this.foundation.typeaheadMatchItem(e,t,!0)},n.prototype.getDefaultFoundation=function(){var e=this;return new V({addClassForElementIndex:function(i,r){var a=e.listElements[i];a&&a.classList.add(e.classNameMap[r])},focusItemAtIndex:function(i){var r=e.listElements[i];r&&r.focus()},getAttributeForElementIndex:function(i,r){return e.listElements[i].getAttribute(r)},getFocusedElementIndex:function(){return e.listElements.indexOf(document.activeElement)},getListItemCount:function(){return e.listElements.length},getPrimaryTextAtIndex:function(i){return e.getPrimaryText(e.listElements[i])},hasCheckboxAtIndex:function(i){return!!e.listElements[i].querySelector(l.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(i){return!!e.listElements[i].querySelector(l.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(i){return e.listElements[i].querySelector(l.CHECKBOX_SELECTOR).checked},isFocusInsideList:function(){return e.root!==document.activeElement&&e.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===e.root},listItemAtIndexHasClass:function(i,r){return e.listElements[i].classList.contains(e.classNameMap[r])},notifyAction:function(i){e.emit(l.ACTION_EVENT,{index:i},!0)},removeClassForElementIndex:function(i,r){var a=e.listElements[i];a&&a.classList.remove(e.classNameMap[r])},setAttributeForElementIndex:function(i,r,a){var d=e.listElements[i];d&&d.setAttribute(r,a)},setCheckedCheckboxOrRadioAtIndex:function(i,r){var d=e.listElements[i].querySelector(l.CHECKBOX_RADIO_SELECTOR);d.checked=r;var c=document.createEvent("Event");c.initEvent("change",!0,!0),d.dispatchEvent(c)},setTabIndexForListItemChildren:function(i,r){Array.prototype.forEach.call(e.listElements[i].querySelectorAll(l.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX),function(c){c.setAttribute("tabindex",r)})}})},n.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[s.LIST_ITEM_CLASS]+'[tabindex="0"]')){var e=this.initialFocusIndex();-1!==e&&(this.listElements[e].tabIndex=0)}},n.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if("number"==typeof this.selectedIndex&&this.selectedIndex!==I.UNSET_INDEX)return this.selectedIndex;var e=this.root.querySelector("."+this.classNameMap[s.LIST_ITEM_CLASS]+":not(."+this.classNameMap[s.LIST_ITEM_DISABLED_CLASS]+")");return null===e?-1:this.getListItemIndex(e)},n.prototype.getListItemIndex=function(e){var t=(0,C.c)(e,"."+this.classNameMap[s.LIST_ITEM_CLASS]+", ."+this.classNameMap[s.ROOT]);return t&&(0,C.m)(t,"."+this.classNameMap[s.LIST_ITEM_CLASS])?this.listElements.indexOf(t):-1},n.prototype.handleFocusInEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusIn(t)},n.prototype.handleFocusOutEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusOut(t)},n.prototype.handleKeydownEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleKeydown(e,e.target.classList.contains(this.classNameMap[s.LIST_ITEM_CLASS]),t)},n.prototype.handleClickEvent=function(e){var t=this.getListItemIndex(e.target),r=!(0,C.m)(e.target,l.CHECKBOX_RADIO_SELECTOR);this.foundation.handleClick(t,r)},n}(m.b)},8728:(H,D,L)=>{L.d(D,{c:()=>C});var C=(0,L(6277).c)(function(S){!function(){var _={}.hasOwnProperty;function s(){for(var x=[],h=0;h<arguments.length;h++){var l=arguments[h];if(l){var I=typeof l;if("string"===I||"number"===I)x.push(l);else if(Array.isArray(l)){if(l.length){var F=s.apply(null,l);F&&x.push(F)}}else if("object"===I){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){x.push(l.toString());continue}for(var o in l)_.call(l,o)&&l[o]&&x.push(o)}}}return x.join(" ")}S.exports?(s.default=s,S.exports=s):window.classNames=s}()})}}]);