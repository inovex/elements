(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[9034],{"./src/stories/ino-textarea/ino-textarea.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CharacterCount:()=>CharacterCount,Default:()=>Default,Disabled:()=>Disabled,Label:()=>Label,Outline:()=>Outline,Required:()=>Required,ShowLabelHint:()=>ShowLabelHint,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ino_textarea_stories});var lit_html=__webpack_require__("../../node_modules/lit-html/lit-html.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),StoryWrapper=__webpack_require__("./src/stories/StoryWrapper.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ino_textarea=__webpack_require__("../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-textarea/ino-textarea.scss"),ino_textarea_default=__webpack_require__.n(ino_textarea),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ino_textarea_default(),options);ino_textarea_default()&&ino_textarea_default().locals&&ino_textarea_default().locals;const InoTextareaMeta={title:"Input/ino-textarea",component:"ino-textarea",parameters:{actions:{handles:["input .customizable-textarea","valueChange .customizable-textarea"]}},decorators:[story=>((0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{const eventHandler=e=>e.target.setAttribute("value",e.detail),textareas=document.querySelectorAll("ino-textarea");return textareas.forEach((t=>t.addEventListener("valueChange",eventHandler))),()=>textareas.forEach((t=>t.removeEventListener("valueChange",eventHandler)))})),story())],render:args=>lit_html.dy`
    <ino-textarea
      class="customizable-textarea"
      cols="${args.cols}"
      rows="${args.rows}"
      label="${args.label}"
      outline="${args.outline}"
      minlength="${args.minlength}"
      disabled="${args.disabled}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      autogrow="${args.autogrow}"
    ></ino-textarea>
  `,args:{cols:60,rows:5,label:"Label",minlength:0,maxlength:30,disabled:!1,required:!1,outline:!0,showLabelHint:!1,autogrow:!1,showCharacterCounter:!1}},ino_textarea_stories=InoTextareaMeta,Default=(0,StoryWrapper.Z)({...InoTextareaMeta}),Label=(0,StoryWrapper.Z)({...Default,docsFromProperty:"label",render:()=>lit_html.dy`
    <ino-textarea label="Floating label" cols="30" rows="3"></ino-textarea>
    <ino-textarea
      label="Floating label"
      value="With value"
      cols="30"
      rows="3"
    ></ino-textarea>
  `}),Disabled=(0,StoryWrapper.Z)({...Default,docsFromProperty:"disabled",args:{disabled:!0}}),Required=(0,StoryWrapper.Z)({...Default,docsFromProperty:"required",args:{required:!0,label:"Label*"}}),Outline=(0,StoryWrapper.Z)({...Default,docsFromProperty:"outline",args:{outline:!0}}),ShowLabelHint=(0,StoryWrapper.Z)({...Default,docsFromProperty:"showLabelHint",args:{showLabelHint:!0}}),CharacterCount=(0,StoryWrapper.Z)({...Default,docsFromProperty:"showCharacterCounter",render:args=>lit_html.dy`
    <ino-textarea
      class="customizable-textarea"
      cols="${args.cols}"
      rows="${args.rows}"
      label="${args.label}"
      outline="${args.outline}"
      minlength="${args.minlength}"
      maxlength="${args.maxlength}"
      disabled="${args.disabled}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      autogrow="${args.autogrow}"
      show-character-counter="${args.showCharacterCounter}"
    ></ino-textarea>
  `,args:{showCharacterCounter:!0}});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoTextareaMeta\n})",...Default.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  docsFromProperty: \'label\',\n  render: () => html`\n    <ino-textarea label="Floating label" cols="30" rows="3"></ino-textarea>\n    <ino-textarea\n      label="Floating label"\n      value="With value"\n      cols="30"\n      rows="3"\n    ></ino-textarea>\n  `\n})',...Label.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'disabled',\n  args: {\n    disabled: true\n  }\n})",...Disabled.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'required',\n  args: {\n    required: true,\n    label: 'Label*'\n  }\n})",...Required.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'outline',\n  args: {\n    outline: true\n  }\n})",...Outline.parameters?.docs?.source}}},ShowLabelHint.parameters={...ShowLabelHint.parameters,docs:{...ShowLabelHint.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'showLabelHint',\n  args: {\n    showLabelHint: true\n  }\n})",...ShowLabelHint.parameters?.docs?.source}}},CharacterCount.parameters={...CharacterCount.parameters,docs:{...CharacterCount.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  docsFromProperty: \'showCharacterCounter\',\n  render: args => html`\n    <ino-textarea\n      class="customizable-textarea"\n      cols="${args.cols}"\n      rows="${args.rows}"\n      label="${args.label}"\n      outline="${args.outline}"\n      minlength="${args.minlength}"\n      maxlength="${args.maxlength}"\n      disabled="${args.disabled}"\n      required="${args.required}"\n      show-label-hint="${args.showLabelHint}"\n      autogrow="${args.autogrow}"\n      show-character-counter="${args.showCharacterCounter}"\n    ></ino-textarea>\n  `,\n  args: {\n    showCharacterCounter: true\n  }\n})',...CharacterCount.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Label","Disabled","Required","Outline","ShowLabelHint","CharacterCount"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}},"../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-textarea/ino-textarea.scss":(module,exports,__webpack_require__)=>{(module.exports=__webpack_require__("../../node_modules/css-loader/lib/css-base.js")(!1)).push([module.id,".sbdocs.sbdocs-content:has(#anchor--input-ino-textarea--default) [scale]{width:100%}.sbdocs.sbdocs-content:has(#anchor--input-ino-textarea--default) ino-textarea{margin-top:15px;margin-bottom:15px}.sbdocs.sbdocs-content:has(#anchor--input-ino-textarea--default) #story--input-ino-textarea--label-inner #root-inner{display:flex;gap:15px}",""])}}]);
//# sourceMappingURL=stories-ino-textarea-ino-textarea-stories.8b908ddd.iframe.bundle.js.map