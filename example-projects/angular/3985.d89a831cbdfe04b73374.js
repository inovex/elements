(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[3985],{5526:(e,t,n)=>{"use strict";n.d(t,{a:()=>i,c:()=>r,g:()=>s});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},231:(e,t,n)=>{"use strict";n.d(t,{K:()=>h,M:()=>y,a:()=>L,b:()=>p,c:()=>d,n:()=>I});var i,s,r=n(6772),o=n(2189),a=n(8013),d={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},c=((i={})[""+d.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",i[""+d.LIST_ITEM_CLASS]="mdc-list-item",i[""+d.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",i[""+d.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",i[""+d.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",i[""+d.ROOT]="mdc-list",i),u=((s={})[""+d.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",s[""+d.LIST_ITEM_CLASS]="mdc-deprecated-list-item",s[""+d.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",s[""+d.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",s[""+d.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",s[""+d.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",s[""+d.ROOT]="mdc-deprecated-list",s),l={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+d.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+d.LIST_ITEM_CLASS+" a,\n    ."+u[d.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+u[d.LIST_ITEM_CLASS]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+d.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+d.LIST_ITEM_CLASS+" a,\n    ."+d.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+d.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled),\n    .'+u[d.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+u[d.LIST_ITEM_CLASS]+" a,\n    ."+u[d.LIST_ITEM_CLASS]+' input[type="radio"]:not(:disabled),\n    .'+u[d.LIST_ITEM_CLASS]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},I={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},h={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},E=new Set;E.add(h.BACKSPACE),E.add(h.ENTER),E.add(h.SPACEBAR),E.add(h.PAGE_UP),E.add(h.PAGE_DOWN),E.add(h.END),E.add(h.HOME),E.add(h.ARROW_LEFT),E.add(h.ARROW_UP),E.add(h.ARROW_RIGHT),E.add(h.ARROW_DOWN),E.add(h.DELETE),E.add(h.ESCAPE),E.add(h.TAB);var f=new Map;f.set(8,h.BACKSPACE),f.set(13,h.ENTER),f.set(32,h.SPACEBAR),f.set(33,h.PAGE_UP),f.set(34,h.PAGE_DOWN),f.set(35,h.END),f.set(36,h.HOME),f.set(37,h.ARROW_LEFT),f.set(38,h.ARROW_UP),f.set(39,h.ARROW_RIGHT),f.set(40,h.ARROW_DOWN),f.set(46,h.DELETE),f.set(27,h.ESCAPE),f.set(9,h.TAB);var A=new Set;function p(e){var t=e.key;return E.has(t)?t:f.get(e.keyCode)||h.UNKNOWN}A.add(h.PAGE_UP),A.add(h.PAGE_DOWN),A.add(h.END),A.add(h.HOME),A.add(h.ARROW_LEFT),A.add(h.ARROW_UP),A.add(h.ARROW_RIGHT),A.add(h.ARROW_DOWN);var S=["input","button","textarea","select"],x=function(e){var t=e.target;if(t){var n=(""+t.tagName).toLowerCase();-1===S.indexOf(n)&&e.preventDefault()}};function T(e,t){var n,i=e.nextChar,s=e.focusItemAtIndex,r=e.sortedIndexByFirstChar,o=e.focusedItemIndex,a=e.skipFocus,d=e.isItemAtIndexDisabled;return clearTimeout(t.bufferClearTimeout),t.bufferClearTimeout=setTimeout(function(){C(t)},I.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),t.typeaheadBuffer=t.typeaheadBuffer+i,n=1===t.typeaheadBuffer.length?function(e,t,n,i){var s=i.typeaheadBuffer[0],r=e.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===t){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var o=r[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=s;var a,d=-1;for(a=0;a<r.length;a++)if(!n(r[a].index)){d=a;break}for(;a<r.length;a++)if(r[a].index>t&&!n(r[a].index)){d=a;break}return-1!==d?(i.sortedIndexCursor=d,r[i.sortedIndexCursor].index):-1}(r,o,d,t):function(e,t,n){var i=e.get(n.typeaheadBuffer[0]);if(!i)return-1;var s=i[n.sortedIndexCursor];if(0===s.text.lastIndexOf(n.typeaheadBuffer,0)&&!t(s.index))return s.index;for(var r=(n.sortedIndexCursor+1)%i.length,o=-1;r!==n.sortedIndexCursor;){var a=i[r],d=0===a.text.lastIndexOf(n.typeaheadBuffer,0),c=!t(a.index);if(d&&c){o=r;break}r=(r+1)%i.length}return-1!==o?(n.sortedIndexCursor=o,i[n.sortedIndexCursor].index):-1}(r,d,t),-1===n||a||s(n),n}function _(e){return e.typeaheadBuffer.length>0}function C(e){e.typeaheadBuffer=""}function m(e,t){var n=e.event,i=e.isTargetListItem,s=e.focusedItemIndex,r=e.focusItemAtIndex,o=e.sortedIndexByFirstChar,a=e.isItemAtIndexDisabled,d="ArrowLeft"===p(n),c="ArrowUp"===p(n),u="ArrowRight"===p(n),l="ArrowDown"===p(n),I="Home"===p(n),h="End"===p(n),E="Enter"===p(n),f="Spacebar"===p(n);return n.ctrlKey||n.metaKey||d||c||u||l||I||h||E?-1:f||1!==n.key.length?f?(i&&x(n),i&&_(t)?T({focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a},t):-1):-1:(x(n),T({focusItemAtIndex:r,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a},t))}var L=function(e){function t(n){var i=e.call(this,(0,r.a)((0,r.a)({},t.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=I.UNSET_INDEX,i.focusedItemIndex=I.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},i.sortedIndexByFirstChar=new Map,i}return(0,r._)(t,e),Object.defineProperty(t,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),t.prototype.layout=function(){0!==this.adapter.getListItemCount()&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},t.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},t.prototype.setWrapFocus=function(e){this.wrapFocus=e},t.prototype.setVerticalOrientation=function(e){this.isVertical=e},t.prototype.setSingleSelection=function(e){this.isSingleSelectionList=e,e&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},t.prototype.maybeInitializeSingleSelection=function(){var e=this.getSelectedIndexFromDOM();e!==I.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(e,d.LIST_ITEM_ACTIVATED_CLASS)&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=e)},t.prototype.getSelectedIndexFromDOM=function(){for(var e=I.UNSET_INDEX,t=this.adapter.getListItemCount(),n=0;n<t;n++){var i=this.adapter.listItemAtIndexHasClass(n,d.LIST_ITEM_SELECTED_CLASS),s=this.adapter.listItemAtIndexHasClass(n,d.LIST_ITEM_ACTIVATED_CLASS);if(i||s){e=n;break}}return e},t.prototype.setHasTypeahead=function(e){this.hasTypeahead=e,e&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},t.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&_(this.typeaheadState)},t.prototype.setUseActivatedClass=function(e){this.useActivatedClass=e},t.prototype.setUseSelectedAttribute=function(e){this.useSelectedAttr=e},t.prototype.getSelectedIndex=function(){return this.selectedIndex},t.prototype.setSelectedIndex=function(e,t){var n=(void 0===t?{}:t).forceUpdate;this.isIndexValid(e)&&(this.isCheckboxList?this.setCheckboxAtIndex(e):this.isRadioList?this.setRadioAtIndex(e):this.setSingleSelectionAtIndex(e,{forceUpdate:n}))},t.prototype.handleFocusIn=function(e){e>=0&&(this.focusedItemIndex=e,this.adapter.setAttributeForElementIndex(e,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(e,"0"))},t.prototype.handleFocusOut=function(e){var t=this;e>=0&&(this.adapter.setAttributeForElementIndex(e,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(e,"-1")),setTimeout(function(){t.adapter.isFocusInsideList()||t.setTabindexToFirstSelectedOrFocusedItem()},0)},t.prototype.handleKeydown=function(e,t,n){var i=this,s="ArrowLeft"===p(e),r="ArrowUp"===p(e),o="ArrowRight"===p(e),a="ArrowDown"===p(e),c="Home"===p(e),u="End"===p(e),l="Enter"===p(e),h="Spacebar"===p(e),E="A"===e.key||"a"===e.key;if(this.adapter.isRootFocused())r||u?(e.preventDefault(),this.focusLastElement()):(a||c)&&(e.preventDefault(),this.focusFirstElement()),this.hasTypeahead&&m({event:e,focusItemAtIndex:function(e){i.focusItemAtIndex(e)},focusedItemIndex:-1,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(e){return i.adapter.listItemAtIndexHasClass(e,d.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState);else{var f=this.adapter.getFocusedElementIndex();if(!(-1===f&&(f=n)<0)){if(this.isVertical&&a||!this.isVertical&&o)x(e),this.focusNextElement(f);else if(this.isVertical&&r||!this.isVertical&&s)x(e),this.focusPrevElement(f);else if(c)x(e),this.focusFirstElement();else if(u)x(e),this.focusLastElement();else if(E&&e.ctrlKey&&this.isCheckboxList)e.preventDefault(),this.toggleAll(this.selectedIndex===I.UNSET_INDEX?[]:this.selectedIndex);else if((l||h)&&t){var A=e.target;if(A&&"A"===A.tagName&&l)return;if(x(e),this.adapter.listItemAtIndexHasClass(f,d.LIST_ITEM_DISABLED_CLASS))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(f),this.adapter.notifyAction(f))}this.hasTypeahead&&m({event:e,focusItemAtIndex:function(e){i.focusItemAtIndex(e)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(e){return i.adapter.listItemAtIndexHasClass(e,d.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)}}},t.prototype.handleClick=function(e,t){e!==I.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(e,d.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(e,t),this.adapter.notifyAction(e)))},t.prototype.focusNextElement=function(e){var t=e+1;if(t>=this.adapter.getListItemCount()){if(!this.wrapFocus)return e;t=0}return this.focusItemAtIndex(t),t},t.prototype.focusPrevElement=function(e){var t=e-1;if(t<0){if(!this.wrapFocus)return e;t=this.adapter.getListItemCount()-1}return this.focusItemAtIndex(t),t},t.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},t.prototype.focusLastElement=function(){var e=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(e),e},t.prototype.focusInitialElement=function(){var e=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(e),e},t.prototype.setEnabled=function(e,t){this.isIndexValid(e)&&(t?(this.adapter.removeClassForElementIndex(e,d.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,l.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(e,d.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(e,l.ARIA_DISABLED,"true")))},t.prototype.setSingleSelectionAtIndex=function(e,t){if(this.selectedIndex!==e||(void 0===t?{}:t).forceUpdate){var n=d.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(n=d.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==I.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,n),this.setAriaForSingleSelectionAtIndex(e),this.setTabindexAtIndex(e),e!==I.UNSET_INDEX&&this.adapter.addClassForElementIndex(e,n),this.selectedIndex=e}},t.prototype.setAriaForSingleSelectionAtIndex=function(e){this.selectedIndex===I.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(e,l.ARIA_CURRENT));var t=null!==this.ariaCurrentAttrValue,n=t?l.ARIA_CURRENT:l.ARIA_SELECTED;this.selectedIndex!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,n,"false"),e!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(e,n,t?this.ariaCurrentAttrValue:"true")},t.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?l.ARIA_SELECTED:l.ARIA_CHECKED},t.prototype.setRadioAtIndex=function(e){var t=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(e,!0),this.selectedIndex!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,t,"false"),this.adapter.setAttributeForElementIndex(e,t,"true"),this.selectedIndex=e},t.prototype.setCheckboxAtIndex=function(e){for(var t=this.getSelectionAttribute(),n=0;n<this.adapter.getListItemCount();n++){var i=!1;e.indexOf(n)>=0&&(i=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(n,i),this.adapter.setAttributeForElementIndex(n,t,i?"true":"false")}this.selectedIndex=e},t.prototype.setTabindexAtIndex=function(e){this.focusedItemIndex===I.UNSET_INDEX&&0!==e?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==e&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),this.selectedIndex instanceof Array||this.selectedIndex===e||this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),e!==I.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(e,"tabindex","0")},t.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},t.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var e=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(e)},t.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?"number"==typeof this.selectedIndex&&this.selectedIndex!==I.UNSET_INDEX?this.selectedIndex:this.selectedIndex instanceof Array&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(e,t){return Math.min(e,t)}):0:Math.max(this.focusedItemIndex,0)},t.prototype.isIndexValid=function(e){var t=this;if(e instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===e.length||e.some(function(e){return t.isIndexInRange(e)})}if("number"==typeof e){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return this.isIndexInRange(e)||this.isSingleSelectionList&&e===I.UNSET_INDEX}return!1},t.prototype.isIndexInRange=function(e){var t=this.adapter.getListItemCount();return e>=0&&e<t},t.prototype.setSelectedIndexOnAction=function(e,t){void 0===t&&(t=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(e,t):this.setSelectedIndex(e)},t.prototype.toggleCheckboxAtIndex=function(e,t){var n=this.getSelectionAttribute(),i=this.adapter.isCheckboxCheckedAtIndex(e);t&&this.adapter.setCheckedCheckboxOrRadioAtIndex(e,i=!i),this.adapter.setAttributeForElementIndex(e,n,i?"true":"false");var s=this.selectedIndex===I.UNSET_INDEX?[]:this.selectedIndex.slice();i?s.push(e):s=s.filter(function(t){return t!==e}),this.selectedIndex=s},t.prototype.focusItemAtIndex=function(e){this.adapter.focusItemAtIndex(e),this.focusedItemIndex=e},t.prototype.toggleAll=function(e){var t=this.adapter.getListItemCount();if(e.length===t)this.setCheckboxAtIndex([]);else{for(var n=[],i=0;i<t;i++)(!this.adapter.listItemAtIndexHasClass(i,d.LIST_ITEM_DISABLED_CLASS)||e.indexOf(i)>-1)&&n.push(i);this.setCheckboxAtIndex(n)}},t.prototype.typeaheadMatchItem=function(e,t,n){var i=this;return void 0===n&&(n=!1),T({focusItemAtIndex:function(e){i.focusItemAtIndex(e)},focusedItemIndex:t||this.focusedItemIndex,nextChar:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:n,isItemAtIndexDisabled:function(e){return i.adapter.listItemAtIndexHasClass(e,d.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)},t.prototype.typeaheadInitSortedIndex=function(){return function(e,t){for(var n=new Map,i=0;i<e;i++){var s=t(i).trim();if(s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:i})}}return n.forEach(function(e){e.sort(function(e,t){return e.index-t.index})}),n}(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},t.prototype.clearTypeaheadBuffer=function(){C(this.typeaheadState)},t}(o.M),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,r._)(t,e),Object.defineProperty(t.prototype,"vertical",{set:function(e){this.foundation.setVerticalOrientation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[d.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wrapFocus",{set:function(e){this.foundation.setWrapFocus(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasTypeahead",{set:function(e){this.foundation.setHasTypeahead(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"singleSelection",{set:function(e){this.foundation.setSingleSelection(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(e){this.foundation.setSelectedIndex(e)},enumerable:!1,configurable:!0}),t.attachTo=function(e){return new t(e)},t.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled="evolution"in this.root.dataset,this.classNameMap=this.isEvolutionEnabled?c:(0,a.m)(this.root,l.DEPRECATED_SELECTOR)?u:Object.values(d).reduce(function(e,t){return e[t]=t,e},{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},t.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},t.prototype.layout=function(){var e=this.root.getAttribute(l.ARIA_ORIENTATION);this.vertical=e!==l.ARIA_ORIENTATION_HORIZONTAL;var t=l.FOCUSABLE_CHILD_ELEMENTS,n=this.root.querySelectorAll("."+this.classNameMap[d.LIST_ITEM_CLASS]+":not([tabindex])");n.length&&Array.prototype.forEach.call(n,function(e){e.setAttribute("tabindex","-1")});var i=this.root.querySelectorAll(t);i.length&&Array.prototype.forEach.call(i,function(e){e.setAttribute("tabindex","-1")}),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},t.prototype.getPrimaryText=function(e){var t,n=e.querySelector("."+this.classNameMap[d.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||n)return null!==(t=null==n?void 0:n.textContent)&&void 0!==t?t:"";var i=e.querySelector("."+this.classNameMap[d.LIST_ITEM_TEXT_CLASS]);return i&&i.textContent||""},t.prototype.initializeListType=function(){var e=this;if(this.isInteractive=(0,a.m)(this.root,l.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var t=Array.from(this.root.querySelectorAll(l.SELECTED_ITEM_SELECTOR),function(t){return e.listElements.indexOf(t)});(0,a.m)(this.root,l.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=t:t.length>0&&(this.selectedIndex=t[0])}else{var n=this.root.querySelectorAll(l.ARIA_ROLE_CHECKBOX_SELECTOR),i=this.root.querySelector(l.ARIA_CHECKED_RADIO_SELECTOR);if(n.length){var s=this.root.querySelectorAll(l.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(s,function(t){return e.listElements.indexOf(t)})}else i&&(this.selectedIndex=this.listElements.indexOf(i))}},t.prototype.setEnabled=function(e,t){this.foundation.setEnabled(e,t)},t.prototype.typeaheadMatchItem=function(e,t){return this.foundation.typeaheadMatchItem(e,t,!0)},t.prototype.getDefaultFoundation=function(){var e=this;return new L({addClassForElementIndex:function(t,n){var i=e.listElements[t];i&&i.classList.add(e.classNameMap[n])},focusItemAtIndex:function(t){var n=e.listElements[t];n&&n.focus()},getAttributeForElementIndex:function(t,n){return e.listElements[t].getAttribute(n)},getFocusedElementIndex:function(){return e.listElements.indexOf(document.activeElement)},getListItemCount:function(){return e.listElements.length},getPrimaryTextAtIndex:function(t){return e.getPrimaryText(e.listElements[t])},hasCheckboxAtIndex:function(t){return!!e.listElements[t].querySelector(l.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(t){return!!e.listElements[t].querySelector(l.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(t){return e.listElements[t].querySelector(l.CHECKBOX_SELECTOR).checked},isFocusInsideList:function(){return e.root!==document.activeElement&&e.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===e.root},listItemAtIndexHasClass:function(t,n){return e.listElements[t].classList.contains(e.classNameMap[n])},notifyAction:function(t){e.emit(l.ACTION_EVENT,{index:t},!0)},removeClassForElementIndex:function(t,n){var i=e.listElements[t];i&&i.classList.remove(e.classNameMap[n])},setAttributeForElementIndex:function(t,n,i){var s=e.listElements[t];s&&s.setAttribute(n,i)},setCheckedCheckboxOrRadioAtIndex:function(t,n){var i=e.listElements[t].querySelector(l.CHECKBOX_RADIO_SELECTOR);i.checked=n;var s=document.createEvent("Event");s.initEvent("change",!0,!0),i.dispatchEvent(s)},setTabIndexForListItemChildren:function(t,n){Array.prototype.forEach.call(e.listElements[t].querySelectorAll(l.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX),function(e){e.setAttribute("tabindex",n)})}})},t.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[d.LIST_ITEM_CLASS]+'[tabindex="0"]')){var e=this.initialFocusIndex();-1!==e&&(this.listElements[e].tabIndex=0)}},t.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if("number"==typeof this.selectedIndex&&this.selectedIndex!==I.UNSET_INDEX)return this.selectedIndex;var e=this.root.querySelector("."+this.classNameMap[d.LIST_ITEM_CLASS]+":not(."+this.classNameMap[d.LIST_ITEM_DISABLED_CLASS]+")");return null===e?-1:this.getListItemIndex(e)},t.prototype.getListItemIndex=function(e){var t=(0,a.c)(e,"."+this.classNameMap[d.LIST_ITEM_CLASS]+", ."+this.classNameMap[d.ROOT]);return t&&(0,a.m)(t,"."+this.classNameMap[d.LIST_ITEM_CLASS])?this.listElements.indexOf(t):-1},t.prototype.handleFocusInEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusIn(t)},t.prototype.handleFocusOutEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleFocusOut(t)},t.prototype.handleKeydownEvent=function(e){var t=this.getListItemIndex(e.target);this.foundation.handleKeydown(e,e.target.classList.contains(this.classNameMap[d.LIST_ITEM_CLASS]),t)},t.prototype.handleClickEvent=function(e){var t=this.getListItemIndex(e.target),n=!(0,a.m)(e.target,l.CHECKBOX_RADIO_SELECTOR);this.foundation.handleClick(t,n)},t}(o.a)},2146:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});var i=(0,n(5526).c)(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var o=n.apply(null,s);o&&e.push(o)}}else if("object"===r){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var a in s)t.call(s,a)&&s[a]&&e.push(a)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})}}]);