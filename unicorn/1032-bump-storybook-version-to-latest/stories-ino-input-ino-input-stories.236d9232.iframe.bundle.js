(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[6936],{"./src/stories/ino-input/ino-input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DataList:()=>DataList,Default:()=>Default,HelperTexts:()=>HelperTexts,Icons:()=>Icons,Labels:()=>Labels,MetaData:()=>MetaData,NumberFormats:()=>NumberFormats,States:()=>States,Type:()=>Type,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ino_input_stories});var lit_html=__webpack_require__("../../node_modules/lit-html/lit-html.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),StoryWrapper=__webpack_require__("./src/stories/StoryWrapper.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ino_input=__webpack_require__("../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-input/ino-input.scss"),ino_input_default=__webpack_require__.n(ino_input),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ino_input_default(),options);ino_input_default()&&ino_input_default().locals&&ino_input_default().locals;const InoInputMeta={title:"Input/ino-input",component:"ino-input",decorators:[story=>((0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{const eventHandler=e=>e.target.setAttribute("value",e.detail),inputs=document.querySelectorAll("ino-input");return inputs.forEach((i=>i.addEventListener("valueChange",eventHandler))),()=>inputs.forEach((i=>i.removeEventListener("valueChange",eventHandler)))})),story())],render:args=>lit_html.dy`
    <ino-input
      class="customizable-input"
      id="customizable-input"
      autocomplete="${args.autocomplete}"
      autofocus="${args.autoFocus}"
      data-list="${args.dataList}"
      disabled="${args.disabled}"
      error="${args.error}"
      helper="${args.helper}"
      helper-character-counter="${args.helperCharacterCounter}"
      helper-persistent="${args.helperPersistent}"
      helper-validation="${args.helperValidation}"
      label="${args.label}"
      min="${args.min}"
      max="${args.max}"
      maxlength="${args.maxlength}"
      name="${args.name}"
      outline="${args.outline}"
      pattern="${args.pattern}"
      placeholder="${args.placeholder}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      size=${args.size}
      step="${args.step}"
      type="${args.type}"
      unit="${args.unit}"
      value="${args.value}"
    >
    </ino-input>
  `,parameters:{actions:{handles:["iconClick .customizable-input","valueChange .customizable-input"]}},argTypes:{type:{control:{type:"select"},options:["text","number","password","email"]}},args:{autocomplete:"off",autoFocus:!1,dataList:"",disabled:!1,error:!1,helper:"Helper message",helperCharacterCounter:!1,helperPersistent:!1,helperValidation:!1,label:"Input label",min:"",max:"",maxlength:100,outline:!1,name:"",pattern:"*",placeholder:"",required:!1,showLabelHint:!1,size:0,step:5,type:"text",unit:"",value:""}},ino_input_stories=InoInputMeta,Default=(0,StoryWrapper.Z)({...InoInputMeta}),Type=(0,StoryWrapper.Z)({...Default,render:()=>lit_html.dy`
    <ino-input placeholder="type = text"></ino-input>
    <ino-input placeholder="type = email" type="email"></ino-input>
    <ino-input type="number" placeholder="type = number"></ino-input>
    <ino-input
      type="number"
      placeholder="type = number with steps=5"
      step="5"
    ></ino-input>
    <ino-input
      type="number"
      placeholder="type = number with step='any' (decimal numbers)"
      step="any"
    ></ino-input>
    <ino-input type="password" placeholder="type = password"></ino-input>
  `});Type.story={parameters:{docs:{storyDescription:"Changes the type of the ino-input element.\n\n- `type`: The type of this element (default = text).\n- `step`: The step value of this element. Use `any` for decimal numbers"}}};const States=(0,StoryWrapper.Z)({...Default,render:()=>lit_html.dy`
    <ino-input placeholder="Disabled" disabled></ino-input>
    <ino-input label="Optional" show-label-hint></ino-input>
    <ino-input label="Required" required show-label-hint></ino-input>

    <ino-input placeholder="Outline disabled" outline disabled></ino-input>
    <ino-input label="Outline optional" outline show-label-hint></ino-input>
    <ino-input
      label="Outline required"
      outline
      show-label-hint
      required
    ></ino-input>
  `});States.story={parameters:{docs:{storyDescription:"Change the state of the ino-input element by adding this properties in various combinations:\n\n- `disabled`: Disables this element.\n- `show-label-hint`: If true, an *optional* message is displayed if not required, otherwise a * marker is displayed if required\n- `required`: Marks this element as required.\n- `outline`: Styles the input field as outlined element."}}};const Labels=(0,StoryWrapper.Z)({...Default,render:()=>lit_html.dy`
    <ino-input label="Floating label"></ino-input>
    <ino-input label="Floating label" value="With value"></ino-input>

    <ino-input label="Outlined floating label" outline></ino-input>
    <ino-input
      label="Outlined floating label"
      value="With value"
      outline
    ></ino-input>
  `});Labels.story={parameters:{docs:{storyDescription:"Add labels to the ino-input element by setting this properties:\n\n- `label`: The optional floating label of this input field.\n- `value`: The value of this element. (**unmanaged**)\n- `outline`: Styles the input field as outlined element."}}};const HelperTexts=(0,StoryWrapper.Z)({...Default,render:()=>lit_html.dy`
    <ino-input
      placeholder="Helper text on focus (default)"
      helper="Helper text"
    ></ino-input>
    <ino-input
      placeholder="Persistent helper text"
      helper="Persistent helper text"
      helper-persistent
    ></ino-input>
    <ino-input
      required
      placeholder="Validation message for required input"
      helper="This field is required"
      helper-validation
    ></ino-input>
    <ino-input
      value="Length of 12"
      helper-character-counter
      maxlength="25"
    ></ino-input>
  `});HelperTexts.story={parameters:{docs:{storyDescription:"Add helper text to the ino-input element by adding this properties:\n\n- `helper`: The optional helper text.\n- `helper-persistent`: Displays the helper permanently.\n- `helper-validation`: Styles the helper text as a validation message.\n- `helper-character-counter`: Displays the number of characters. The maxlength-property must be set. This helper text will be displayed persistently."}}};const Icons=(0,StoryWrapper.Z)({...Default,render:()=>lit_html.dy`
    <ino-input icon-leading label="Leading icon">
      <ino-icon slot="icon-leading" icon="search"></ino-icon>
    </ino-input>
    <ino-input icon-trailing label="Trailing icon">
      <ino-icon slot="icon-trailing" icon="search"></ino-icon>
    </ino-input>
    <ino-input icon-leading icon-trailing label="Leading and Trailing icon">
      <ino-icon slot="icon-leading" icon="search"></ino-icon>
      <ino-icon slot="icon-trailing" icon="add"></ino-icon>
    </ino-input>
    <ino-input icon-trailing label="Clickable Icon">
      <ino-icon clickable slot="icon-trailing" icon="search"></ino-icon>
    </ino-input>
  `});Icons.story={parameters:{docs:{storyDescription:'Add icons to the ino-input element by adding a `slot` and an `icon`.\n\n- `slot="icon-leading"`: For the icon to be prepended\n- `slot="icon-trailing"`: For the icon to be appended\n- `icon="search"`: For a magnifying glass symbole\n- `icon="add"`: For a plus sign symbole\n- `clickable`: Marks the icon as clickable, curser changes to pointer on hover'}}};const DataList=(0,StoryWrapper.Z)({...Default,render:()=>lit_html.dy`
    <ino-input label="Datalist" data-list="languages">
      <datalist id="languages">
        <option>HTML</option>
        <option>Java</option>
        <option>Perl</option>
        <option>PHP</option>
        <option>Ruby on Rails</option>
      </datalist>
    </ino-input>
  `});DataList.story={parameters:{docs:{storyDescription:"Add a datalist to a ino-input-element by setting `data-list` to the ID of the `<datalist>` child-element"}}};const NumberFormats=(0,StoryWrapper.Z)({...Default,render:()=>lit_html.dy`
    <ino-input
      type="number"
      decimal-places="2"
      placeholder="With 2 decimal places"
    ></ino-input>
    <ino-input
      type="number"
      step="1"
      thousands-separator
      placeholder="With thousands separator"
    ></ino-input>
  `});NumberFormats.story={parameters:{docs:{storyDescription:"Add number format by setting one of this properties\n\n- `decimal-places`: number of decimal places allowed\n- `thousands-separator`: add thousands separators"}}};const MetaData=(0,StoryWrapper.Z)({...Default,docsFromProperty:"unit",render:()=>lit_html.dy`
    <ino-input value="2" type="number" unit="h" label="Hours input"></ino-input>
  `});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoInputMeta\n})",...Default.parameters?.docs?.source}}},Type.parameters={...Type.parameters,docs:{...Type.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  render: () => html`\n    <ino-input placeholder="type = text"></ino-input>\n    <ino-input placeholder="type = email" type="email"></ino-input>\n    <ino-input type="number" placeholder="type = number"></ino-input>\n    <ino-input\n      type="number"\n      placeholder="type = number with steps=5"\n      step="5"\n    ></ino-input>\n    <ino-input\n      type="number"\n      placeholder="type = number with step=\'any\' (decimal numbers)"\n      step="any"\n    ></ino-input>\n    <ino-input type="password" placeholder="type = password"></ino-input>\n  `\n})',...Type.parameters?.docs?.source},description:{story:"Changes the type of the ino-input element.\n\n- `type`: The type of this element (default = text).\n- `step`: The step value of this element. Use `any` for decimal numbers",...Type.parameters?.docs?.description}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  render: () => html`\n    <ino-input placeholder="Disabled" disabled></ino-input>\n    <ino-input label="Optional" show-label-hint></ino-input>\n    <ino-input label="Required" required show-label-hint></ino-input>\n\n    <ino-input placeholder="Outline disabled" outline disabled></ino-input>\n    <ino-input label="Outline optional" outline show-label-hint></ino-input>\n    <ino-input\n      label="Outline required"\n      outline\n      show-label-hint\n      required\n    ></ino-input>\n  `\n})',...States.parameters?.docs?.source},description:{story:"Change the state of the ino-input element by adding this properties in various combinations:\n\n- `disabled`: Disables this element.\n- `show-label-hint`: If true, an *optional* message is displayed if not required, otherwise a * marker is displayed if required\n- `required`: Marks this element as required.\n- `outline`: Styles the input field as outlined element.",...States.parameters?.docs?.description}}},Labels.parameters={...Labels.parameters,docs:{...Labels.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  render: () => html`\n    <ino-input label="Floating label"></ino-input>\n    <ino-input label="Floating label" value="With value"></ino-input>\n\n    <ino-input label="Outlined floating label" outline></ino-input>\n    <ino-input\n      label="Outlined floating label"\n      value="With value"\n      outline\n    ></ino-input>\n  `\n})',...Labels.parameters?.docs?.source},description:{story:"Add labels to the ino-input element by setting this properties:\n\n- `label`: The optional floating label of this input field.\n- `value`: The value of this element. (**unmanaged**)\n- `outline`: Styles the input field as outlined element.",...Labels.parameters?.docs?.description}}},HelperTexts.parameters={...HelperTexts.parameters,docs:{...HelperTexts.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  render: () => html`\n    <ino-input\n      placeholder="Helper text on focus (default)"\n      helper="Helper text"\n    ></ino-input>\n    <ino-input\n      placeholder="Persistent helper text"\n      helper="Persistent helper text"\n      helper-persistent\n    ></ino-input>\n    <ino-input\n      required\n      placeholder="Validation message for required input"\n      helper="This field is required"\n      helper-validation\n    ></ino-input>\n    <ino-input\n      value="Length of 12"\n      helper-character-counter\n      maxlength="25"\n    ></ino-input>\n  `\n})',...HelperTexts.parameters?.docs?.source},description:{story:"Add helper text to the ino-input element by adding this properties:\n\n- `helper`: The optional helper text.\n- `helper-persistent`: Displays the helper permanently.\n- `helper-validation`: Styles the helper text as a validation message.\n- `helper-character-counter`: Displays the number of characters. The maxlength-property must be set. This helper text will be displayed persistently.",...HelperTexts.parameters?.docs?.description}}},Icons.parameters={...Icons.parameters,docs:{...Icons.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  render: () => html`\n    <ino-input icon-leading label="Leading icon">\n      <ino-icon slot="icon-leading" icon="search"></ino-icon>\n    </ino-input>\n    <ino-input icon-trailing label="Trailing icon">\n      <ino-icon slot="icon-trailing" icon="search"></ino-icon>\n    </ino-input>\n    <ino-input icon-leading icon-trailing label="Leading and Trailing icon">\n      <ino-icon slot="icon-leading" icon="search"></ino-icon>\n      <ino-icon slot="icon-trailing" icon="add"></ino-icon>\n    </ino-input>\n    <ino-input icon-trailing label="Clickable Icon">\n      <ino-icon clickable slot="icon-trailing" icon="search"></ino-icon>\n    </ino-input>\n  `\n})',...Icons.parameters?.docs?.source},description:{story:'Add icons to the ino-input element by adding a `slot` and an `icon`.\n\n- `slot="icon-leading"`: For the icon to be prepended\n- `slot="icon-trailing"`: For the icon to be appended\n- `icon="search"`: For a magnifying glass symbole\n- `icon="add"`: For a plus sign symbole\n- `clickable`: Marks the icon as clickable, curser changes to pointer on hover',...Icons.parameters?.docs?.description}}},DataList.parameters={...DataList.parameters,docs:{...DataList.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  render: () => html`\n    <ino-input label="Datalist" data-list="languages">\n      <datalist id="languages">\n        <option>HTML</option>\n        <option>Java</option>\n        <option>Perl</option>\n        <option>PHP</option>\n        <option>Ruby on Rails</option>\n      </datalist>\n    </ino-input>\n  `\n})',...DataList.parameters?.docs?.source},description:{story:"Add a datalist to a ino-input-element by setting `data-list` to the ID of the `<datalist>` child-element",...DataList.parameters?.docs?.description}}},NumberFormats.parameters={...NumberFormats.parameters,docs:{...NumberFormats.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  render: () => html`\n    <ino-input\n      type="number"\n      decimal-places="2"\n      placeholder="With 2 decimal places"\n    ></ino-input>\n    <ino-input\n      type="number"\n      step="1"\n      thousands-separator\n      placeholder="With thousands separator"\n    ></ino-input>\n  `\n})',...NumberFormats.parameters?.docs?.source},description:{story:"Add number format by setting one of this properties\n\n- `decimal-places`: number of decimal places allowed\n- `thousands-separator`: add thousands separators",...NumberFormats.parameters?.docs?.description}}},MetaData.parameters={...MetaData.parameters,docs:{...MetaData.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  docsFromProperty: \'unit\',\n  render: () => html`\n    <ino-input value="2" type="number" unit="h" label="Hours input"></ino-input>\n  `\n})',...MetaData.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Type","States","Labels","HelperTexts","Icons","DataList","NumberFormats","MetaData"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}},"../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-input/ino-input.scss":(module,exports,__webpack_require__)=>{(module.exports=__webpack_require__("../../node_modules/css-loader/lib/css-base.js")(!1)).push([module.id,".sbdocs.sbdocs-content:has(#anchor--input-ino-input--default) [scale]{width:100%}.sbdocs.sbdocs-content:has(#anchor--input-ino-input--default) #story--input-ino-input--states-inner #root-inner,.sbdocs.sbdocs-content:has(#anchor--input-ino-input--default) #story--input-ino-input--labels-inner #root-inner{display:flex;flex-direction:column;gap:15px}",""])}}]);
//# sourceMappingURL=stories-ino-input-ino-input-stories.236d9232.iframe.bundle.js.map