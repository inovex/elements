"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[1009],{"./src/stories/ino-currency-input/ino-currency-input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Locales:()=>Locales,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/lit-html.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/StoryWrapper.ts");const InoCurrencyInputMeta={title:"Input/ino-currency-input",component:"ino-currency-input",decorators:[story=>((0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const eventHandler=e=>e.target.setAttribute("value",e.detail),inputs=document.querySelectorAll("ino-currency-input");return inputs.forEach((i=>i.addEventListener("valueChange",eventHandler))),()=>inputs.forEach((i=>i.removeEventListener("valueChange",eventHandler)))})),story())],parameters:{actions:{handles:["valueChange .customizable-input"]},docs:{toc:!1}},render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <ino-currency-input
      value="${args.value}"
      currency-locale="${args.currencyLocale}"
    >
      <ino-input
        class="customizable-input"
        id="customizable-input"
        label="Default Input"
        outline="true"
        unit="€"
      >
      </ino-input>
    </ino-currency-input>
  `,args:{value:"15.00",currencyLocale:"de-DE"},argTypes:{currencyLocale:{control:"radio",options:["de-DE","en-US"]},value:{control:"number"}}},__WEBPACK_DEFAULT_EXPORT__=InoCurrencyInputMeta,Default=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__.Z)({...InoCurrencyInputMeta}),Locales=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__.Z)({...Default,args:{currencyLocale:"en-EN"}});Locales.story={parameters:{docs:{storyDescription:"A supported locale for currency number formatting. If not given, it uses the global config.\nSee https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument"}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoCurrencyInputMeta\n})",...Default.parameters?.docs?.source}}},Locales.parameters={...Locales.parameters,docs:{...Locales.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  args: {\n    currencyLocale: 'en-EN'\n  }\n})",...Locales.parameters?.docs?.source},description:{story:"A supported locale for currency number formatting. If not given, it uses the global config.\nSee https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument",...Locales.parameters?.docs?.description}}};const __namedExportsOrder=["Default","Locales"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}}}]);
//# sourceMappingURL=stories-ino-currency-input-ino-currency-input-stories.4a1c3f1c.iframe.bundle.js.map