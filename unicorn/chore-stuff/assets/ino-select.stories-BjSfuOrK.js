import{b as d}from"./lit-html-IUDnlW1J.js";import{S as t}from"./StoryWrapper-Bs3Y9Jfd.js";import{s as f}from"./utils-ebStcoTl.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:v}=__STORYBOOK_MODULE_PREVIEW_API__,S=e=>{e.preventDefault(),f("Form submitted.")},g=e=>e.target.setAttribute("value",e.detail),m=d`
  <ino-option value="Option 1">Option 1</ino-option>
  <ino-option value="Option 2">Option 2</ino-option>
  <ino-option value="Option 3">Option 3</ino-option>
`,y={title:"Input/ino-select",component:"ino-select",parameters:{actions:{handles:["valueChange .customizable-select","submit .form"]}},decorators:[e=>(v(()=>{const h=document.querySelector("form");h?.addEventListener("submit",S);const b=document.querySelectorAll("ino-select");return b.forEach(u=>u.addEventListener("valueChange",g)),()=>{b.forEach(u=>u.removeEventListener("valueChange",g)),h?.removeEventListener("submit",S)}},[]),e())],render:e=>d`
    <ino-select
      disabled="${e.disabled}"
      name="${e.name}"
      outline="${e.outline}"
      label="${e.label}"
      required="${e.required}"
      show-label-hint="${e.showLabelHint}"
      value="${e.value}"
      error="${e.error}"
      helper="${e.helper}"
      helper-persistent="${e.helperPersistent}"
      helper-validation="${e.helperValidation}"
    >
      <ino-option value="Option 1">Option 1</ino-option>
      <ino-option value="Option 2">Option 2</ino-option>
      <ino-option value="Option 3">Option 3</ino-option>
    </ino-select>
  `,args:{disabled:!1,label:"Select label",name:"select-1",outline:!1,required:!1,showLabelHint:!1,value:"Option 1",error:!1,helper:"",helperPersistent:!1,helperValidation:!1}},o=t({...y}),r=t({...o,docsFromProperty:"outline",args:{outline:!0}}),n=t({...o,docsFromProperty:"disabled",args:{disabled:!0}}),i=t({...o,docsFromProperty:"error",args:{error:!0}}),s=t({...o,docsFromProperty:"showLabelHint",args:{showLabelHint:!0}}),a=t({...o,docsFromProperty:"helper",args:{helper:"My Helper Message",helperPersistent:!0}}),l=t({...o,docsFromProperty:"helperValidation",args:{helperValidation:!0,value:void 0,required:!0,helper:"This message will be highlighted when no option has been selected",helperPersistent:!0}}),c=t({...o,docsFromProperty:"helperValidation",render:()=>d`
    <div style="height: 400px;">
      <ino-select label="Select with leading icon">
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected>Selected Option</ino-option>
        ${m}
      </ino-select>
      <ino-select style="margin-top: 150px;" outline label="Select with leading icon">
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected>Selected Option</ino-option>
        ${m}
      </ino-select>
    </div>
  `}),p=t({...o,render:()=>d`
    <form>
      <p>Form should not submit if no value is selected</p>
      <ino-select required> ${m} </ino-select>
      <ino-button type="submit">Submit</ino-button>
    </form>
  `});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoSelectMeta
})`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'outline',
  args: {
    outline: true
  }
})`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'error',
  args: {
    error: true
  }
})`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'showLabelHint',
  args: {
    showLabelHint: true
  }
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'helper',
  args: {
    helper: 'My Helper Message',
    helperPersistent: true
  }
})`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'helperValidation',
  args: {
    helperValidation: true,
    value: undefined,
    required: true,
    helper: 'This message will be highlighted when no option has been selected',
    helperPersistent: true
  }
})`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'helperValidation',
  render: () => html\`
    <div style="height: 400px;">
      <ino-select label="Select with leading icon">
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected>Selected Option</ino-option>
        \${optionsTemplate}
      </ino-select>
      <ino-select style="margin-top: 150px;" outline label="Select with leading icon">
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected>Selected Option</ino-option>
        \${optionsTemplate}
      </ino-select>
    </div>
  \`
})`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <form>
      <p>Form should not submit if no value is selected</p>
      <ino-select required> \${optionsTemplate} </ino-select>
      <ino-button type="submit">Submit</ino-button>
    </form>
  \`
})`,...p.parameters?.docs?.source}}};const $=["Default","Outline","Disabled","Error","ShowLabelHint","HelperMessage","HelperMessageValidation","WithIcon","Form"];export{o as Default,n as Disabled,i as Error,p as Form,a as HelperMessage,l as HelperMessageValidation,r as Outline,s as ShowLabelHint,c as WithIcon,$ as __namedExportsOrder,y as default};
