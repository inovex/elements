"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6775],{89:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return commonjsGlobal},c:function(){return createCommonjsModule},g:function(){return getDefaultExportFromCjs}});/*!
 * Crafted with ❤ by inovex GmbH
 */ var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},5220:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){/*!
 * Crafted with ❤ by inovex GmbH
 */ function generateUniqueId(){return"_"+Math.random().toString(36).substr(2,9)}function getSlotContent(el,slotName){return el.querySelector(`[slot="${slotName}"]`)}function hasSlotContent(el,slotName){var _a;return slotName?el.querySelectorAll(`[slot="${slotName}"]`).length>0:(null===(_a=el.querySelector("slot"))||void 0===_a?void 0:_a.assignedElements().length)===0}function focusIfExists(el){var _a;null===(_a=el.querySelector("[data-ino-focus]"))||void 0===_a||_a.focus()}function preventEvent(event){event.stopPropagation(),event.preventDefault()}__webpack_require__.d(__webpack_exports__,{a:function(){return getSlotContent},f:function(){return focusIfExists},g:function(){return generateUniqueId},h:function(){return hasSlotContent},p:function(){return preventEvent}})},939:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return classnames}});/*!
 * Crafted with ❤ by inovex GmbH
 */ var classnames=(0,__webpack_require__(89).c)(function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()})},6775:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_avatar:function(){return Avatar}});var _index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9444),_index_796d4780_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(939),_component_utils_02a98646_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5220);__webpack_require__(89);let Avatar=class{constructor(hostRef){(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.alt="",this.initials="",this.src="",this.interactive=!1,this.variant="solid",this.colorSecondary=!1,this.a11yLabel="",this.loading=!1,this.imgIsFetching=!0}showLoadingHandler(newValue){this.imgIsFetching=newValue}handleImageLoad(){this.loading||(this.imgIsFetching=!1)}renderAvatarBorder(){let isDashed="dashed"===this.variant,isSecondary=this.colorSecondary,decodedSvgContent=window.atob((isSecondary?isDashed?"data:image/svg+xml;base64,PHN2ZyBpZD0iMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEyMC4yNyAxMjAuMjciPjxkZWZzPjxzdHlsZT4uY2xzLTEtM3tmaWxsOm5vbmU7c3Ryb2tlOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8zKTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjNweDt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMyIgeDE9IjE3LjUxIiB5MT0iMTcuNzIiIHgyPSIxMDIuNTUiIHkyPSIxMDIuNzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0NjU1RkYiLz48c3RvcCBvZmZzZXQ9Ii42IiBzdG9wLWNvbG9yPSIjZDZkZWYyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDhlOWQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9IkViZW5lXzEtMyI+PHBhdGggY2xhc3M9ImNscy0xLTMiIGQ9Im0yLjI1LDY5LjUyYy0uNDktMy4wNi0uNzUtNi4xOS0uNzUtOS4zOCwwLTMyLjM4LDI2LjI1LTU4LjY0LDU4LjY0LTU4LjY0LDEyLjE0LDAsMjMuNDMsMy42OSwzMi43OCwxMC4wMU0xMi41Miw5NC4zN2M0LjczLDYuNTYsMTAuNzgsMTIuMTEsMTcuNzYsMTYuMjVtMTIuMDgsNS40MmM1LjYsMS43OCwxMS41NywyLjc0LDE3Ljc2LDIuNzQsMzIuMzgsMCw1OC42NC0yNi4yNSw1OC42NC01OC42NCwwLTE0LjA0LTQuOTMtMjYuOTMtMTMuMTYtMzcuMDIiLz48L2c+PC9zdmc+":"data:image/svg+xml;base64,PHN2ZyBpZD0iNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEyMC4zIDEyMC4zIj48ZGVmcz48c3R5bGU+LmNscy0xLTR7ZmlsbDpub25lO3N0cm9rZTp1cmwoI1VuYmVuYW5udGVyX1ZlcmxhdWZfNCk7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjNweDt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfNCIgeDE9Ii0zNjEuNjgiIHkxPSItNDk0LjQ2IiB4Mj0iLTI0MS40MSIgeTI9Ii00OTQuNDYiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwNy43NyA1MDcuNDMpIHJvdGF0ZSg3MC44MikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0NjU1RkYiLz48c3RvcCBvZmZzZXQ9Ii42IiBzdG9wLWNvbG9yPSIjZDZkZWYyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDhlOWQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9IkViZW5lXzEtNCI+PGNpcmNsZSBjbGFzcz0iY2xzLTEtNCIgY3g9IjYwLjE1IiBjeT0iNjAuMTUiIHI9IjU4LjY0Ii8+PC9nPjwvc3ZnPg==":isDashed?"data:image/svg+xml;base64,PHN2ZyBpZD0iMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEyMC4yNyAxMjAuMjciPjxkZWZzPjxzdHlsZT4uY2xzLTEtMntmaWxsOm5vbmU7c3Ryb2tlOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8yKTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjNweDt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMiIgeDE9IjYwLjE0IiB5MT0iMTIwLjI3IiB4Mj0iNjAuMTQiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZDZkZWYyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDY1NUZGIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9IkViZW5lXzEtMiI+PHBhdGggY2xhc3M9ImNscy0xLTIiIGQ9Im0yLjI1LDY5LjUyYy0uNDktMy4wNi0uNzUtNi4xOS0uNzUtOS4zOCwwLTMyLjM4LDI2LjI1LTU4LjY0LDU4LjY0LTU4LjY0LDEyLjE0LDAsMjMuNDMsMy42OSwzMi43OCwxMC4wMU0xMi41Miw5NC4zN2M0LjczLDYuNTYsMTAuNzgsMTIuMTEsMTcuNzYsMTYuMjVtMTIuMDgsNS40MmM1LjYsMS43OCwxMS41NywyLjc0LDE3Ljc2LDIuNzQsMzIuMzgsMCw1OC42NC0yNi4yNSw1OC42NC01OC42NCwwLTE0LjA0LTQuOTMtMjYuOTMtMTMuMTYtMzcuMDIiLz48L2c+PC9zdmc+":"data:image/svg+xml;base64,PHN2ZyBpZD0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEyMC4yNyAxMjAuMjciPjxkZWZzPjxzdHlsZT4uY2xzLTEtMXtmaWxsOm5vbmU7c3Ryb2tlOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8yKTtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6M3B4O308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0iVW5iZW5hbm50ZXJfVmVybGF1Zl8yIiB4MT0iLTgwLjE0IiB5MT0iLTE4MC42OCIgeDI9IjQwLjE0IiB5Mj0iLTE4MC42OCIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIwLjU0IDgwLjE0KSByb3RhdGUoOTApIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNDY1NUZGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDZkZWYyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9IkViZW5lXzEtMSI+PGNpcmNsZSBjbGFzcz0iY2xzLTEtMSIgY3g9IjYwLjE0IiBjeT0iNjAuMTQiIHI9IjU4LjY0Ii8+PC9nPjwvc3ZnPg==").split(",")[1]);return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-avatar__border",innerHTML:decodedSvgContent})}render(){let avatarClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_1__.c)({"ino-avatar":!0,"ino-avatar--interactive":this.interactive,"ino-avatar--dashed":"dashed"===this.variant,"ino-avatar--solid":"solid"===this.variant,"ino-avatar--loading":this.loading&&this.imgIsFetching}),hasIconSlot=(0,_component_utils_02a98646_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.el,"icon-slot"),avatarBorder=this.renderAvatarBorder();return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:avatarClasses,role:"img",tabIndex:this.interactive?0:null,"aria-label":this.a11yLabel},avatarBorder,this.src?(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-avatar__image image"},this.loading&&this.imgIsFetching&&(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"skeleton-loader"}),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{class:"ino-avatar__image-inner",src:this.src,alt:this.alt,onLoad:()=>this.handleImageLoad()})):(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-avatar__image initials"},this.initials),hasIconSlot&&(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"ino-avatar__icon-slot"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon-slot"})))}get el(){return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{showLoading:["showLoadingHandler"]}}};Avatar.style='@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(60deg)}}@keyframes rotateBack{0%{transform:rotate(60deg)}100%{transform:rotate(0deg)}}.ino-avatar{--avatar-size:var(--ino-avatar-size, 138px);display:flex;justify-content:center;align-items:center;width:var(--avatar-size);height:var(--avatar-size);color:#4655ff;font-size:calc(var(--avatar-size) * 0.3);font-weight:600;position:relative}.ino-avatar--interactive{cursor:pointer}.ino-avatar--interactive .ino-avatar__image::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(76, 105, 201, 0.2);border-radius:50%;opacity:0;transition:opacity 0.3s ease-in-out}.ino-avatar--interactive .ino-avatar__image:hover::after,.ino-avatar--interactive .ino-avatar__image:focus::after{opacity:1}.ino-avatar--interactive .ino-avatar__border path,.ino-avatar--interactive .ino-avatar__border circle{stroke-width:2%;transition:stroke-width 0.3s ease-in-out}.ino-avatar--interactive.ino-avatar--solid:hover .ino-avatar__border path,.ino-avatar--interactive.ino-avatar--solid:hover .ino-avatar__border circle,.ino-avatar--interactive.ino-avatar--solid:focus .ino-avatar__border path,.ino-avatar--interactive.ino-avatar--solid:focus .ino-avatar__border circle,.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__border path,.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__border circle,.ino-avatar--interactive.ino-avatar--dashed:focus .ino-avatar__border path,.ino-avatar--interactive.ino-avatar--dashed:focus .ino-avatar__border circle{stroke-width:4%}.ino-avatar--interactive.ino-avatar--solid:hover .ino-avatar__image-inner::after,.ino-avatar--interactive.ino-avatar--solid:focus .ino-avatar__image-inner::after,.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__image-inner::after,.ino-avatar--interactive.ino-avatar--dashed:focus .ino-avatar__image-inner::after{opacity:1}.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__border,.ino-avatar--interactive.ino-avatar--dashed:focus .ino-avatar__border{transform:rotate(60deg)}.ino-avatar__icon-slot{position:absolute;background:white;border-radius:50%;width:calc(var(--avatar-size) * 0.26);height:calc(var(--avatar-size) * 0.26);bottom:0;right:0;box-shadow:0px 0px 15px -10px #4655ff;display:flex;justify-content:center;align-items:center}.ino-avatar__icon-slot ino-icon{--ino-icon-height:calc(var(--avatar-size) * 0.18);--ino-icon-width:calc(var(--avatar-size) * 0.18)}.ino-avatar__image{display:flex;justify-content:center;align-items:center;width:87%;height:87%;border-radius:50%;box-sizing:border-box;position:relative;justify-content:center}.ino-avatar__image.initials{background:#e2ecff}.ino-avatar__image .skeleton-loader{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%;height:100%;width:100%;background-color:#dddbdd;overflow:hidden;z-index:10;display:flex;justify-content:center;align-items:center}.ino-avatar__image .skeleton-loader::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));animation:shimmer 5s infinite}@keyframes shimmer{100%{transform:translateX(100%)}}.ino-avatar__image-inner{width:100%;height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:50%;position:relative}.ino-avatar__border{display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;will-change:transform, stroke-width;transform:rotate(0deg);transition:transform 250ms ease-in-out}.ino-avatar__border svg{overflow:visible}.ino-avatar__border path,.ino-avatar__border circle{stroke-width:2%;transition:stroke-width 0.3s ease-in-out}.ino-avatar--loading .ino-avatar__border path,.ino-avatar--loading .ino-avatar__border circle{stroke:#dddbdd}'}}]);