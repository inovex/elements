"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[2732],{"./src/stories/ino-nav-item/ino-nav-item.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Activated:()=>Activated,Default:()=>Default,Disabled:()=>Disabled,Graphic:()=>Graphic,Text:()=>Text,TwoLines:()=>TwoLines,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/lit-html.js"),_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/StoryWrapper.ts");const icon=lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`<ino-icon icon="onboarding"></ino-icon>`,InoNavItemMeta={title:"Structure/ino-nav-item",component:"ino-nav-item",render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${args.text}"
        sub-text="${args.subText}"
        activated="${args.activated}"
        disabled="${args.disabled}"
      >
        ${icon}
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Nav item",subText:"",activated:!1,disabled:!1}},__WEBPACK_DEFAULT_EXPORT__=InoNavItemMeta,Default=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...InoNavItemMeta}),Text=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...InoNavItemMeta,docsFromProperty:"text",render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="${args.text}">
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text"}}),TwoLines=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...InoNavItemMeta,docsFromProperty:"subText",render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${args.text}"
        sub-text="${args.subText}"
      >
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text",subText:"Secondary Text 2"}}),Activated=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...InoNavItemMeta,docsFromProperty:"activated",render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${args.text}"
        activated="${args.activated}"
      >
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text",activated:!0}}),Disabled=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...InoNavItemMeta,docsFromProperty:"disabled",render:args=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${args.text}"
        disabled="${args.disabled}"
      >
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text",disabled:!0}}),Graphic=(0,_StoryWrapper__WEBPACK_IMPORTED_MODULE_1__.Z)({...InoNavItemMeta});Graphic.story={parameters:{docs:{storyDescription:"Use an `ino-icon` element inside the default slot of an `ino-nav-item` to display an icon next to the text."}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoNavItemMeta\n})",...Default.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"Story({\n  ...InoNavItemMeta,\n  docsFromProperty: 'text',\n  render: args => html`\n    <ino-list>\n      <ino-nav-item class=\"customizable-nav-item\" text=\"${args.text}\">\n      </ino-nav-item>\n    </ino-list>\n  `,\n  args: {\n    text: 'Some Text'\n  }\n})",...Text.parameters?.docs?.source}}},TwoLines.parameters={...TwoLines.parameters,docs:{...TwoLines.parameters?.docs,source:{originalSource:"Story({\n  ...InoNavItemMeta,\n  docsFromProperty: 'subText',\n  render: args => html`\n    <ino-list>\n      <ino-nav-item\n        class=\"customizable-nav-item\"\n        text=\"${args.text}\"\n        sub-text=\"${args.subText}\"\n      >\n      </ino-nav-item>\n    </ino-list>\n  `,\n  args: {\n    text: 'Some Text',\n    subText: 'Secondary Text 2'\n  }\n})",...TwoLines.parameters?.docs?.source}}},Activated.parameters={...Activated.parameters,docs:{...Activated.parameters?.docs,source:{originalSource:'Story({\n  ...InoNavItemMeta,\n  docsFromProperty: \'activated\',\n  render: args => html`\n    <ino-list>\n      <ino-nav-item\n        class="customizable-nav-item"\n        text="${args.text}"\n        activated="${args.activated}"\n      >\n      </ino-nav-item>\n    </ino-list>\n  `,\n  args: {\n    text: \'Some Text\',\n    activated: true\n  }\n})',...Activated.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'Story({\n  ...InoNavItemMeta,\n  docsFromProperty: \'disabled\',\n  render: args => html`\n    <ino-list>\n      <ino-nav-item\n        class="customizable-nav-item"\n        text="${args.text}"\n        disabled="${args.disabled}"\n      >\n      </ino-nav-item>\n    </ino-list>\n  `,\n  args: {\n    text: \'Some Text\',\n    disabled: true\n  }\n})',...Disabled.parameters?.docs?.source}}},Graphic.parameters={...Graphic.parameters,docs:{...Graphic.parameters?.docs,source:{originalSource:"Story({\n  ...InoNavItemMeta\n})",...Graphic.parameters?.docs?.source},description:{story:"Use an `ino-icon` element inside the default slot of an `ino-nav-item` to display an icon next to the text.",...Graphic.parameters?.docs?.description}}};const __namedExportsOrder=["Default","Text","TwoLines","Activated","Disabled","Graphic"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}}}]);
//# sourceMappingURL=stories-ino-nav-item-ino-nav-item-stories.8b2270ec.iframe.bundle.js.map