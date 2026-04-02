import{b as i}from"./lit-html-IUDnlW1J.js";import{S as t}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:b}=__STORYBOOK_MODULE_PREVIEW_API__,y={title:"Input/ino-input",component:"ino-input",decorators:[e=>(b(()=>{const h=o=>o.target.setAttribute("value",o.detail),m=document.querySelectorAll("ino-input");return m.forEach(o=>o.addEventListener("valueChange",h)),()=>m.forEach(o=>o.removeEventListener("valueChange",h))}),e())],render:e=>i`
    <ino-input
      class="customizable-input"
      id="customizable-input"
      autocomplete="${e.autocomplete}"
      autofocus="${e.autoFocus}"
      data-list="${e.dataList}"
      disabled="${e.disabled}"
      error="${e.error}"
      helper="${e.helper}"
      helper-character-counter="${e.helperCharacterCounter}"
      helper-persistent="${e.helperPersistent}"
      helper-validation="${e.helperValidation}"
      label="${e.label}"
      min="${e.min}"
      max="${e.max}"
      maxlength="${e.maxlength}"
      name="${e.name}"
      outline="${e.outline}"
      pattern="${e.pattern}"
      placeholder="${e.placeholder}"
      required="${e.required}"
      show-label-hint="${e.showLabelHint}"
      step="${e.step}"
      type="${e.type}"
      unit="${e.unit}"
      value="${e.value}"
    >
    </ino-input>
  `,parameters:{actions:{handles:["iconClick .customizable-input","valueChange .customizable-input"]}},argTypes:{type:{control:{type:"select"},options:["text","number","password","email"]}},args:{autocomplete:"off",autoFocus:!1,dataList:"",disabled:!1,error:!1,helper:"Helper message",helperCharacterCounter:!1,helperPersistent:!1,helperValidation:!1,label:"Input label",min:"",max:"",maxlength:100,outline:!1,name:"",pattern:".*",placeholder:"",required:!1,showLabelHint:!1,step:5,type:"text",unit:"",value:""}},n=t({...y}),a=t({...n,render:()=>i`
    <ino-input placeholder="type = text"></ino-input>
    <ino-input placeholder="type = email" type="email"></ino-input>
    <ino-input type="number" placeholder="type = number"></ino-input>
    <ino-input
      data-testid="input-test-steps"
      type="number"
      placeholder="type = number with steps=5"
      step="5"
    ></ino-input>
    <ino-input type="number" placeholder="type = number with step='any' (decimal numbers)" step="any"></ino-input>
    <ino-input type="password" placeholder="type = password"></ino-input>
  `}),l=t({...n,render:()=>i`
    <ino-input placeholder="Disabled" disabled></ino-input>
    <ino-input label="Optional" show-label-hint></ino-input>
    <ino-input label="Required" required show-label-hint></ino-input>

    <ino-input placeholder="Outline disabled" outline disabled></ino-input>
    <ino-input label="Outline optional" outline show-label-hint></ino-input>
    <ino-input label="Outline required" outline show-label-hint required></ino-input>
  `}),r=t({...n,render:()=>i`
    <ino-input label="Floating label"></ino-input>
    <ino-input label="Floating label" value="With value"></ino-input>

    <ino-input label="Outlined floating label" outline></ino-input>
    <ino-input label="Outlined floating label" value="With value" outline></ino-input>
  `}),p=t({...n,render:()=>i`
    <ino-input placeholder="Helper text on focus (default)" helper="Helper text"></ino-input>
    <ino-input placeholder="Persistent helper text" helper="Persistent helper text" helper-persistent></ino-input>
    <ino-input
      required
      placeholder="Validation message for required input"
      helper="This field is required"
      helper-validation
    ></ino-input>
    <ino-input value="Length of 12" helper-character-counter maxlength="25"></ino-input>
  `}),s=t({...n,render:()=>i`
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
  `}),u=t({...n,render:()=>i`
    <ino-input label="Datalist" data-list="languages">
      <datalist id="languages">
        <option>HTML</option>
        <option>Java</option>
        <option>Perl</option>
        <option>PHP</option>
        <option>Ruby on Rails</option>
      </datalist>
    </ino-input>
  `}),c=t({...n,render:()=>i`
    <ino-input type="number" decimal-places="2" placeholder="With 2 decimal places"></ino-input>
    <ino-input type="number" step="1" thousands-separator placeholder="With thousands separator"></ino-input>
  `}),d=t({...n,docsFromProperty:"unit",render:()=>i` <ino-input value="2" type="number" unit="h" label="Hours input"></ino-input> `});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...InoInputMeta
})`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input placeholder="type = text"></ino-input>
    <ino-input placeholder="type = email" type="email"></ino-input>
    <ino-input type="number" placeholder="type = number"></ino-input>
    <ino-input
      data-testid="input-test-steps"
      type="number"
      placeholder="type = number with steps=5"
      step="5"
    ></ino-input>
    <ino-input type="number" placeholder="type = number with step='any' (decimal numbers)" step="any"></ino-input>
    <ino-input type="password" placeholder="type = password"></ino-input>
  \`
})`,...a.parameters?.docs?.source},description:{story:"Changes the type of the ino-input element.\n\n- `type`: The type of this element (default = text).\n- `step`: The step value of this element. Use `any` for decimal numbers",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input placeholder="Disabled" disabled></ino-input>
    <ino-input label="Optional" show-label-hint></ino-input>
    <ino-input label="Required" required show-label-hint></ino-input>

    <ino-input placeholder="Outline disabled" outline disabled></ino-input>
    <ino-input label="Outline optional" outline show-label-hint></ino-input>
    <ino-input label="Outline required" outline show-label-hint required></ino-input>
  \`
})`,...l.parameters?.docs?.source},description:{story:"Change the state of the ino-input element by adding this properties in various combinations:\n\n- `disabled`: Disables this element.\n- `show-label-hint`: If true, an *optional* message is displayed if not required, otherwise a * marker is displayed if required\n- `required`: Marks this element as required.\n- `outline`: Styles the input field as outlined element.",...l.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input label="Floating label"></ino-input>
    <ino-input label="Floating label" value="With value"></ino-input>

    <ino-input label="Outlined floating label" outline></ino-input>
    <ino-input label="Outlined floating label" value="With value" outline></ino-input>
  \`
})`,...r.parameters?.docs?.source},description:{story:"Add labels to the ino-input element by setting this properties:\n\n- `label`: The optional floating label of this input field.\n- `value`: The value of this element. (**unmanaged**)\n- `outline`: Styles the input field as outlined element.",...r.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input placeholder="Helper text on focus (default)" helper="Helper text"></ino-input>
    <ino-input placeholder="Persistent helper text" helper="Persistent helper text" helper-persistent></ino-input>
    <ino-input
      required
      placeholder="Validation message for required input"
      helper="This field is required"
      helper-validation
    ></ino-input>
    <ino-input value="Length of 12" helper-character-counter maxlength="25"></ino-input>
  \`
})`,...p.parameters?.docs?.source},description:{story:"Add helper text to the ino-input element by adding this properties:\n\n- `helper`: The optional helper text.\n- `helper-persistent`: Displays the helper permanently.\n- `helper-validation`: Styles the helper text as a validation message.\n- `helper-character-counter`: Displays the number of characters. The maxlength-property must be set. This helper text will be displayed persistently.",...p.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
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
  \`
})`,...s.parameters?.docs?.source},description:{story:'Add icons to the ino-input element by adding a `slot` and an `icon`.\n\n- `slot="icon-leading"`: For the icon to be prepended\n- `slot="icon-trailing"`: For the icon to be appended\n- `icon="search"`: For a magnifying glass symbole\n- `icon="add"`: For a plus sign symbole\n- `clickable`: Marks the icon as clickable, curser changes to pointer on hover',...s.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input label="Datalist" data-list="languages">
      <datalist id="languages">
        <option>HTML</option>
        <option>Java</option>
        <option>Perl</option>
        <option>PHP</option>
        <option>Ruby on Rails</option>
      </datalist>
    </ino-input>
  \`
})`,...u.parameters?.docs?.source},description:{story:"Add a datalist to a ino-input-element by setting `data-list` to the ID of the `<datalist>` child-element",...u.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input type="number" decimal-places="2" placeholder="With 2 decimal places"></ino-input>
    <ino-input type="number" step="1" thousands-separator placeholder="With thousands separator"></ino-input>
  \`
})`,...c.parameters?.docs?.source},description:{story:"Add number format by setting one of this properties\n\n- `decimal-places`: number of decimal places allowed\n- `thousands-separator`: add thousands separators",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'unit',
  render: () => html\` <ino-input value="2" type="number" unit="h" label="Hours input"></ino-input> \`
})`,...d.parameters?.docs?.source}}};const x=["Default","Type","States","Labels","HelperTexts","Icons","DataList","NumberFormats","MetaData"];export{u as DataList,n as Default,p as HelperTexts,s as Icons,r as Labels,d as MetaData,c as NumberFormats,l as States,a as Type,x as __namedExportsOrder,y as default};
