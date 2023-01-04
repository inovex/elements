(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6410],{381:function(module,__unused_webpack_exports,__webpack_require__){"use strict";var deselectCurrent=__webpack_require__(1706),clipboardToIE11Formatting={"text/plain":"Text","text/html":"Url",default:"Text"};module.exports=function(text,options){var message,copyKey,debug,message1,reselectPrevious,range,selection,mark,success=!1;options||(options={}),debug=options.debug||!1;try{if(reselectPrevious=deselectCurrent(),range=document.createRange(),selection=document.getSelection(),(mark=document.createElement("span")).textContent=text,mark.ariaHidden="true",mark.style.all="unset",mark.style.position="fixed",mark.style.top=0,mark.style.clip="rect(0, 0, 0, 0)",mark.style.whiteSpace="pre",mark.style.webkitUserSelect="text",mark.style.MozUserSelect="text",mark.style.msUserSelect="text",mark.style.userSelect="text",mark.addEventListener("copy",function(e){if(e.stopPropagation(),options.format){if(e.preventDefault(),void 0===e.clipboardData){debug&&console.warn("unable to use e.clipboardData"),debug&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var format=clipboardToIE11Formatting[options.format]||clipboardToIE11Formatting.default;window.clipboardData.setData(format,text)}else e.clipboardData.clearData(),e.clipboardData.setData(options.format,text)}options.onCopy&&(e.preventDefault(),options.onCopy(e.clipboardData))}),document.body.appendChild(mark),range.selectNodeContents(mark),selection.addRange(range),!document.execCommand("copy"))throw Error("copy command was unsuccessful");success=!0}catch(err1){debug&&console.error("unable to copy using execCommand: ",err1),debug&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(options.format||"text",text),options.onCopy&&options.onCopy(window.clipboardData),success=!0}catch(err){debug&&console.error("unable to copy using clipboardData: ",err),debug&&console.error("falling back to prompt"),message="message"in options?options.message:"Copy to clipboard: #{key}, Enter",copyKey=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",message1=message.replace(/#{\s*key\s*}/g,copyKey),window.prompt(message1,text)}}finally{selection&&("function"==typeof selection.removeRange?selection.removeRange(range):selection.removeAllRanges()),mark&&document.body.removeChild(mark),reselectPrevious()}return success}},1706:function(module){module.exports=function(){var selection=document.getSelection();if(!selection.rangeCount)return function(){};for(var active=document.activeElement,ranges=[],i=0;i<selection.rangeCount;i++)ranges.push(selection.getRangeAt(i));switch(active.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":active.blur();break;default:active=null}return selection.removeAllRanges(),function(){"Caret"===selection.type&&selection.removeAllRanges(),selection.rangeCount||ranges.forEach(function(range){selection.addRange(range)}),active&&active.focus()}}},5163:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_T:function(){return __rest},pi:function(){return __assign},pr:function(){return __spreadArrays}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var __assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p)&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]]);return t}function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r}},9008:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3121)},6366:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return esm_useCopyToClipboard}});var copy_to_clipboard=__webpack_require__(381),copy_to_clipboard_default=__webpack_require__.n(copy_to_clipboard),react=__webpack_require__(7294),esm_useSetState=function(initialState){void 0===initialState&&(initialState={});var _a=(0,react.useState)(initialState),state=_a[0],set=_a[1];return[state,(0,react.useCallback)(function(patch){set(function(prevState){return Object.assign({},prevState,patch instanceof Function?patch(prevState):patch)})},[])]},esm_useCopyToClipboard=function(){var mountedRef,get,isMounted=(mountedRef=(0,react.useRef)(!1),get=(0,react.useCallback)(function(){return mountedRef.current},[]),(0,react.useEffect)(function(){return mountedRef.current=!0,function(){mountedRef.current=!1}},[]),get),_a=esm_useSetState({value:void 0,error:void 0,noUserInteraction:!0}),state=_a[0],setState=_a[1];return[state,(0,react.useCallback)(function(value){if(isMounted())try{if("string"!=typeof value&&"number"!=typeof value){var noUserInteraction,normalizedValue,error=Error("Cannot copy typeof "+typeof value+" to clipboard, must be a string");setState({value:value,error:error,noUserInteraction:!0});return}if(""===value){var error=Error("Cannot copy empty string to clipboard.");setState({value:value,error:error,noUserInteraction:!0});return}normalizedValue=value.toString(),noUserInteraction=copy_to_clipboard_default()(normalizedValue),setState({value:normalizedValue,error:void 0,noUserInteraction:noUserInteraction})}catch(error1){setState({value:normalizedValue,error:error1,noUserInteraction:noUserInteraction})}},[])]}},3337:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294);__webpack_exports__.Z=function(callback,delay){var savedCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function(){});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){savedCallback.current=callback}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(null!==delay){var interval_1=setInterval(function(){return savedCallback.current()},delay||0);return function(){return clearInterval(interval_1)}}},[delay])}},113:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return esm_useMedia}});var react=__webpack_require__(7294),isBrowser="undefined"!=typeof window,esm_useMedia=function(query,defaultState){var _a=(0,react.useState)(void 0!==defaultState?defaultState:!!isBrowser&&window.matchMedia(query).matches),state=_a[0],setState=_a[1];return(0,react.useEffect)(function(){var mounted=!0,mql=window.matchMedia(query),onChange=function(){mounted&&setState(!!mql.matches)};return mql.addListener(onChange),setState(mql.matches),function(){mounted=!1,mql.removeListener(onChange)}},[query]),state}},1978:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5163),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294);__webpack_exports__.Z=function(initialSet){void 0===initialSet&&(initialSet=new Set);var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSet),set=_a[0],setSet=_a[1],stableActions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{add:function(item){return setSet(function(prevSet){return new Set((0,tslib__WEBPACK_IMPORTED_MODULE_1__.pr)(Array.from(prevSet),[item]))})},remove:function(item){return setSet(function(prevSet){return new Set(Array.from(prevSet).filter(function(i){return i!==item}))})},toggle:function(item){return setSet(function(prevSet){return new Set(prevSet.has(item)?Array.from(prevSet).filter(function(i){return i!==item}):(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pr)(Array.from(prevSet),[item]))})},reset:function(){return setSet(initialSet)}}},[setSet]),utils=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.pi)({has:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(item){return set.has(item)},[set])},stableActions);return[set,utils]}},4513:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return useTimeoutFn}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294);function useTimeoutFn(fn,ms){void 0===ms&&(ms=0);var ready=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),timeout=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),callback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn),isReady=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){return ready.current},[]),set=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){ready.current=!1,timeout.current&&clearTimeout(timeout.current),timeout.current=setTimeout(function(){ready.current=!0,callback.current()},ms)},[ms]),clear=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){ready.current=null,timeout.current&&clearTimeout(timeout.current)},[]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){callback.current=fn},[fn]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return set(),clear},[ms]),[isReady,clear,set]}}}]);