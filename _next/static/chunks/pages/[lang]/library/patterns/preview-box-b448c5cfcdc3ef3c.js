(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{62:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/library/patterns/preview-box",function(){return __webpack_require__(7678)}])},7678:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return PreviewBox}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),_elements__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7332),_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(605),_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3__);function CopyButton(param){let{rawCode,copyIconId}=param,[copyIcon,setCopyIcon]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("copy"),[visiblePopover,setVisiblePopover]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),handleIconClick=()=>{setCopyIcon("checkmark"),setVisiblePopover(!0),setTimeout(()=>{setCopyIcon("copy"),setVisiblePopover(!1)},3e3),navigator.clipboard&&navigator.clipboard.writeText(rawCode)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_elements__WEBPACK_IMPORTED_MODULE_2__.$U,{id:copyIconId,icon:copyIcon,className:_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().copyIcon,onClick:handleIconClick}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_elements__WEBPACK_IMPORTED_MODULE_2__.pq,{controlled:!0,visible:visiblePopover,for:copyIconId,trigger:"click",placement:"top",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().popover,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"body-s",children:"Copied!"})})})]})}function ViewModeSelection(param){let{selectedValue,setSelectedValue}=param,[hoveredButton,setHoveredButton]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),handleMouseEnter=value=>setHoveredButton(value),handleMouseLeave=()=>setHoveredButton(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_elements__WEBPACK_IMPORTED_MODULE_2__.K_,{value:selectedValue,onValueChange:event=>setSelectedValue(event.detail),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_elements__WEBPACK_IMPORTED_MODULE_2__.Hh,{value:"PreviewMode",onMouseEnter:()=>handleMouseEnter("PreviewMode"),onMouseLeave:handleMouseLeave,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_elements__WEBPACK_IMPORTED_MODULE_2__.$U,{icon:"display",className:"CodeMode"===selectedValue&&"PreviewMode"!==hoveredButton?_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().unselectedIcon:""}),"Preview"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_elements__WEBPACK_IMPORTED_MODULE_2__.Hh,{value:"CodeMode",onMouseEnter:()=>handleMouseEnter("CodeMode"),onMouseLeave:handleMouseLeave,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_elements__WEBPACK_IMPORTED_MODULE_2__.$U,{icon:"code",className:"PreviewMode"===selectedValue&&"CodeMode"!==hoveredButton?_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().unselectedIcon:""}),"Code"]})})]})}function PreviewBox(param){let{id,title,description,previewComponent,highlightedCode,rawCode}=param,[selectedValue,setSelectedValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("PreviewMode"),previewRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),previewBoxHeight=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>previewRef.current?previewRef.current.getBoundingClientRect().height:0,[previewRef.current]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().patternsWrapper,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:"header-h1",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"body-l",children:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().segmentGroup,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ViewModeSelection,{selectedValue:selectedValue,setSelectedValue:setSelectedValue}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().divider}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CopyButton,{rawCode:rawCode,copyIconId:"copy-icon-".concat(id)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"".concat(_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().previewBox," ").concat("PreviewMode"===selectedValue?_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().previewMode:_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().codeMode),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:previewRef,style:{display:"PreviewMode"===selectedValue?"block":"none"},children:previewComponent}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{display:"CodeMode"===selectedValue?"block":"none",height:previewBoxHeight},className:_preview_box_module_scss__WEBPACK_IMPORTED_MODULE_3___default().code,dangerouslySetInnerHTML:{__html:highlightedCode}})]})]})}},605:function(module){module.exports={patternsWrapper:"preview-box_patternsWrapper__bFZwN",segmentGroup:"preview-box_segmentGroup__U2Wb1",unselectedIcon:"preview-box_unselectedIcon__nvSI7",copyIcon:"preview-box_copyIcon__yDskV",popover:"preview-box_popover__z4RaU",divider:"preview-box_divider__9XSHo",previewBox:"preview-box_previewBox__C6lsf",previewMode:"preview-box_previewMode__cqcFm",codeMode:"preview-box_codeMode__kZBXW",code:"preview-box_code__HVYnD"}}},function(__webpack_require__){__webpack_require__.O(0,[9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=62)}),_N_E=__webpack_require__.O()}]);