(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[1524],{"./src/stories/ino-fab-set/ino-fab-set.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DialDirection:()=>DialDirection,LeftRightLocation:()=>LeftRightLocation,TopBottomLocation:()=>TopBottomLocation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ino_fab_set_stories});var lit_html=__webpack_require__("../../node_modules/lit-html/lit-html.js"),StoryWrapper=__webpack_require__("./src/stories/StoryWrapper.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ino_fab_set=__webpack_require__("../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-fab-set/ino-fab-set.scss"),ino_fab_set_default=__webpack_require__.n(ino_fab_set),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ino_fab_set_default(),options);ino_fab_set_default()&&ino_fab_set_default().locals&&ino_fab_set_default().locals;const clickHandler=e=>{const fabSetEl=e.target.closest("ino-fab-set");fabSetEl.openDial=!fabSetEl.openDial},InoFabSetMeta={title:"Buttons/ino-fab-set",component:"ino-fab-set",parameters:{actions:{handles:["click ino-fab"]},docs:{story:{height:"300px"}}},render:args=>lit_html.dy`
    <ino-fab-set
      open-dial="${args.openDial}"
      top-bottom-location="${args.topBottomLocation}"
      left-right-location="${args.leftRightLocation}"
      dial-direction="${args.dialDirection}"
      @click="${clickHandler}"
    >
      <ino-icon
        @clickEl="${clickHandler}"
        icon="arrow_down"
        slot="icon-opened"
      ></ino-icon>
      <ino-icon
        @clickEl="${clickHandler}"
        icon="arrow_up"
        slot="icon-closed"
      ></ino-icon>
      <ino-fab label="First FAB">
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
      </ino-fab>
      <ino-fab label="Second FAB">
        <ino-icon slot="icon-leading" icon="favorite"></ino-icon>
      </ino-fab>
      <ino-fab label="Third FAB">
        <ino-icon slot="icon-leading" icon="info"></ino-icon>
      </ino-fab>
    </ino-fab-set>
  `,args:{openDial:!1,dialDirection:"top",leftRightLocation:"left",topBottomLocation:"bottom"}},ino_fab_set_stories=InoFabSetMeta,Default=(0,StoryWrapper.Z)({...InoFabSetMeta}),DialDirection=(0,StoryWrapper.Z)({...Default,docsFromProperty:"dialDirection",args:{dialDirection:"bottom"}}),LeftRightLocation=(0,StoryWrapper.Z)({...Default,docsFromProperty:"leftRightLocation",args:{leftRightLocation:"right"}}),TopBottomLocation=(0,StoryWrapper.Z)({...Default,docsFromProperty:"topBottomLocation",args:{topBottomLocation:"top"}});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoFabSetMeta\n})",...Default.parameters?.docs?.source}}},DialDirection.parameters={...DialDirection.parameters,docs:{...DialDirection.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'dialDirection',\n  args: {\n    dialDirection: 'bottom'\n  }\n})",...DialDirection.parameters?.docs?.source}}},LeftRightLocation.parameters={...LeftRightLocation.parameters,docs:{...LeftRightLocation.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'leftRightLocation',\n  args: {\n    leftRightLocation: 'right'\n  }\n})",...LeftRightLocation.parameters?.docs?.source}}},TopBottomLocation.parameters={...TopBottomLocation.parameters,docs:{...TopBottomLocation.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'topBottomLocation',\n  args: {\n    topBottomLocation: 'top'\n  }\n})",...TopBottomLocation.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DialDirection","LeftRightLocation","TopBottomLocation"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}},"../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-fab-set/ino-fab-set.scss":(module,exports,__webpack_require__)=>{(module.exports=__webpack_require__("../../node_modules/css-loader/lib/css-base.js")(!1)).push([module.id,".sbdocs.sbdocs-content:has(#anchor--buttons-ino-fab-set--default) [scale]{width:100%}",""])}}]);
//# sourceMappingURL=stories-ino-fab-set-ino-fab-set-stories.cc9e2007.iframe.bundle.js.map