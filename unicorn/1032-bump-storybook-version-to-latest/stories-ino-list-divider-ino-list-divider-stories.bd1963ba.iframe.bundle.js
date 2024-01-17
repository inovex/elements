"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[1887],{"./src/stories/ino-list-divider/ino-list-divider.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BetweenLists:()=>BetweenLists,Default:()=>Default,Inset:()=>Inset,Padded:()=>Padded,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/lit-html.js"),_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/StoryWrapper.ts");const InoListDividerMeta={title:"Structure/ino-list-divider",component:"ino-list-divider",render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <ino-list>
      <ino-list-item text="Item 2"></ino-list-item>
      <ino-list-divider
        inset="${args.inset}"
        between-lists="${args.betweenLists}"
        padded="${args.padded}"
      ></ino-list-divider>
      <ino-list-item text="Item 3"></ino-list-item>
    </ino-list>
  `,args:{inset:!1,betweenLists:!1,padded:!1,slot:!1}},__WEBPACK_DEFAULT_EXPORT__=InoListDividerMeta,Default=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...InoListDividerMeta}),Padded=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...Default,docsFromProperty:"padded",args:{padded:!0}}),Inset=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...Default,docsFromProperty:"inset",render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider
        inset="${args.inset}"
        between-lists="${args.betweenLists}"
      ></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  `,args:{inset:!0}}),BetweenLists=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...Default,docsFromProperty:"betweenLists",render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider
        inset="${args.inset}"
        between-lists="${args.betweenLists}"
      ></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  `,args:{betweenLists:!0}});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoListDividerMeta\n})",...Default.parameters?.docs?.source}}},Padded.parameters={...Padded.parameters,docs:{...Padded.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'padded',\n  args: {\n    padded: true\n  }\n})",...Padded.parameters?.docs?.source}}},Inset.parameters={...Inset.parameters,docs:{...Inset.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  docsFromProperty: \'inset\',\n  render: args => html`\n    <ino-list>\n      <ino-list-item text="Add to favorites">\n        <ino-icon slot="leading" icon="favorite"></ino-icon>\n      </ino-list-item>\n      <ino-list-divider\n        inset="${args.inset}"\n        between-lists="${args.betweenLists}"\n      ></ino-list-divider>\n      <ino-list-item text="Star it!">\n        <ino-icon slot="leading" icon="star"></ino-icon>\n      </ino-list-item>\n    </ino-list>\n  `,\n  args: {\n    inset: true\n  }\n})',...Inset.parameters?.docs?.source}}},BetweenLists.parameters={...BetweenLists.parameters,docs:{...BetweenLists.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  docsFromProperty: \'betweenLists\',\n  render: args => html`\n    <ino-list>\n      <ino-list-item text="Add to favorites">\n        <ino-icon slot="leading" icon="favorite"></ino-icon>\n      </ino-list-item>\n      <ino-list-divider\n        inset="${args.inset}"\n        between-lists="${args.betweenLists}"\n      ></ino-list-divider>\n      <ino-list-item text="Star it!">\n        <ino-icon slot="leading" icon="star"></ino-icon>\n      </ino-list-item>\n    </ino-list>\n  `,\n  args: {\n    betweenLists: true\n  }\n})',...BetweenLists.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Padded","Inset","BetweenLists"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}}}]);
//# sourceMappingURL=stories-ino-list-divider-ino-list-divider-stories.bd1963ba.iframe.bundle.js.map