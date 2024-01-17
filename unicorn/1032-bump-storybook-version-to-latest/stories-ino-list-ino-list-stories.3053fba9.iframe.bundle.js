"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[8021],{"./src/stories/ino-list/ino-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Avatar:()=>Avatar,Default:()=>Default,Dense:()=>Dense,TwoLines:()=>TwoLines,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/lit-html.js"),_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/StoryWrapper.ts");const exampleImg=lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
  <ino-img
    slot="leading"
    src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
    ratio-width="1"
    ratio-height="1"
  ></ino-img>
`,InoListMeta={title:"Structure/ino-list ",component:"ino-list",render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <ino-list
      dense="${args.dense}"
      two-lines="${args.twoLines}"
      avatar="${args.avatar}"
    >
      <ino-list-item
        text="First text item"
        secondary-text="${args.twoLines?"Secondary Text":""}"
        >${args.avatar?exampleImg:""}</ino-list-item
      >
      <ino-list-item
        text="Second text item"
        secondary-text="${args.twoLines?"Secondary Text":""}"
        >${args.avatar?exampleImg:""}</ino-list-item
      >
      <ino-list-item
        text="Third text item"
        secondary-text="${args.twoLines?"Secondary Text":""}"
        >${args.avatar?exampleImg:""}</ino-list-item
      >
    </ino-list>
  `,args:{dense:!1,twoLines:!1,avatar:!1}},__WEBPACK_DEFAULT_EXPORT__=InoListMeta,Default=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...InoListMeta}),TwoLines=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...Default,docsFromProperty:"twoLines",args:{twoLines:!0}}),Dense=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...Default,docsFromProperty:"dense",args:{dense:!0}}),Avatar=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...Default,docsFromProperty:"avatar",args:{avatar:!0}});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoListMeta\n})",...Default.parameters?.docs?.source}}},TwoLines.parameters={...TwoLines.parameters,docs:{...TwoLines.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'twoLines',\n  args: {\n    twoLines: true\n  }\n})",...TwoLines.parameters?.docs?.source}}},Dense.parameters={...Dense.parameters,docs:{...Dense.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'dense',\n  args: {\n    dense: true\n  }\n})",...Dense.parameters?.docs?.source}}},Avatar.parameters={...Avatar.parameters,docs:{...Avatar.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'avatar',\n  args: {\n    avatar: true\n  }\n})",...Avatar.parameters?.docs?.source}}};const __namedExportsOrder=["Default","TwoLines","Dense","Avatar"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}}}]);
//# sourceMappingURL=stories-ino-list-ino-list-stories.3053fba9.iframe.bundle.js.map