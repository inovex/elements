(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[6154],{"./src/stories/ino-fab/ino-fab.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EdgePositions:()=>EdgePositions,Variants:()=>Variants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ino_fab_stories});var lit_html=__webpack_require__("../../node_modules/lit-html/lit-html.js"),StoryWrapper=__webpack_require__("./src/stories/StoryWrapper.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ino_fab=__webpack_require__("../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-fab/ino-fab.scss"),ino_fab_default=__webpack_require__.n(ino_fab),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ino_fab_default(),options);ino_fab_default()&&ino_fab_default().locals&&ino_fab_default().locals;const InoFabMeta={title:"Buttons/ino-fab",component:"ino-fab",render:args=>lit_html.dy`
    <ino-fab
      class="customizable-fab"
      disabled="${args.disabled}"
      edge-position="${args.edgePosition}"
      extended="${args.extended}"
      label="${args.label}"
      mini="${args.mini}"
      tooltip-placement="${args.tooltipPlacement}"
    >
      <ino-icon slot="icon-leading" icon="${args.icon}" />
    </ino-fab>
  `,args:{disabled:!1,edgePosition:"top-left",extended:!1,label:"Label",mini:!1,tooltipPlacement:"right",icon:"add"},argTypes:{edgePosition:{control:{type:"select"},options:["top-left","top-right","bottom-right","bottom-left","none"]},tooltipPlacement:{control:{type:"select"},options:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","none","right","right-end","right-start","top","top-end","top-start"]}}},ino_fab_stories=InoFabMeta,Default=(0,StoryWrapper.Z)({...InoFabMeta}),Variants=(0,StoryWrapper.Z)({...Default,render:()=>lit_html.dy`
    <div class="ino-fab-variants">
      <ino-fab tooltip-placement="none" label="Default Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab mini label="Mini Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab extended label="Extended Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab disabled label="Disabled Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  `});Variants.story={parameters:{docs:{storyDescription:"In order to achive diffrent variations, use this properties:\n\n- `mini`: Optional, modifies the FAB to a smaller size\n- `extended`: Optional, modifies the FAB to wider size which includes a text label.\n- `disabled`: Disables the button"}}};const EdgePositions=(0,StoryWrapper.Z)({...Default,render:()=>lit_html.dy`
    <div class="ino-fab-variants">
      <ino-fab label="top-left" edge-position="top-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="top-right" edge-position="top-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="bottom-right" edge-position="bottom-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="bottom-left" edge-position="bottom-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="none" edge-position="none">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  `});EdgePositions.story={parameters:{docs:{storyDescription:"In order to achive edges on the fab-button, add `edge-position`.\n\nPossible values are:\n\n- `top-right`\n- `top-left`\n- `bottom-right`\n- `bottom-left`\n- `none` = `top-left`"}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoFabMeta\n})",...Default.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  render: () => html`\n    <div class="ino-fab-variants">\n      <ino-fab tooltip-placement="none" label="Default Fab">\n        <ino-icon slot="icon-leading" icon="add"></ino-icon>\n      </ino-fab>\n      <ino-fab mini label="Mini Fab">\n        <ino-icon slot="icon-leading" icon="add"></ino-icon>\n      </ino-fab>\n      <ino-fab extended label="Extended Button">\n        <ino-icon slot="icon-leading" icon="add"></ino-icon>\n      </ino-fab>\n      <ino-fab disabled label="Disabled Button">\n        <ino-icon slot="icon-leading" icon="add"></ino-icon>\n      </ino-fab>\n    </div>\n  `\n})',...Variants.parameters?.docs?.source},description:{story:"In order to achive diffrent variations, use this properties:\n\n- `mini`: Optional, modifies the FAB to a smaller size\n- `extended`: Optional, modifies the FAB to wider size which includes a text label.\n- `disabled`: Disables the button",...Variants.parameters?.docs?.description}}},EdgePositions.parameters={...EdgePositions.parameters,docs:{...EdgePositions.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  render: () => html`\n    <div class="ino-fab-variants">\n      <ino-fab label="top-left" edge-position="top-left">\n        <ino-icon slot="icon-leading" icon="add"></ino-icon>\n      </ino-fab>\n      <ino-fab label="top-right" edge-position="top-right">\n        <ino-icon slot="icon-leading" icon="add"></ino-icon>\n      </ino-fab>\n      <ino-fab label="bottom-right" edge-position="bottom-right">\n        <ino-icon slot="icon-leading" icon="add"></ino-icon>\n      </ino-fab>\n      <ino-fab label="bottom-left" edge-position="bottom-left">\n        <ino-icon slot="icon-leading" icon="add"></ino-icon>\n      </ino-fab>\n      <ino-fab label="none" edge-position="none">\n        <ino-icon slot="icon-leading" icon="add"></ino-icon>\n      </ino-fab>\n    </div>\n  `\n})',...EdgePositions.parameters?.docs?.source},description:{story:"In order to achive edges on the fab-button, add `edge-position`.\n\nPossible values are:\n\n- `top-right`\n- `top-left`\n- `bottom-right`\n- `bottom-left`\n- `none` = `top-left`",...EdgePositions.parameters?.docs?.description}}};const __namedExportsOrder=["Default","Variants","EdgePositions"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}},"../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-fab/ino-fab.scss":(module,exports,__webpack_require__)=>{(module.exports=__webpack_require__("../../node_modules/css-loader/lib/css-base.js")(!1)).push([module.id,".story-fab .ino-fab-variants{display:flex;justify-content:space-around}",""])}}]);
//# sourceMappingURL=stories-ino-fab-ino-fab-stories.4e0c4277.iframe.bundle.js.map