import{b as u}from"./lit-html-IUDnlW1J.js";import{S as a}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:h}=__STORYBOOK_MODULE_PREVIEW_API__,b={title:"Input/ino-textarea",component:"ino-textarea",parameters:{actions:{handles:["input .customizable-textarea","valueChange .customizable-textarea"]}},decorators:[e=>(h(()=>{const d=t=>t.target.setAttribute("value",t.detail),m=document.querySelectorAll("ino-textarea");return m.forEach(t=>t.addEventListener("valueChange",d)),()=>m.forEach(t=>t.removeEventListener("valueChange",d))}),e())],render:e=>u`
    <ino-textarea
      class="customizable-textarea"
      cols="${e.cols}"
      rows="${e.rows}"
      label="${e.label}"
      outline="${e.outline}"
      minlength="${e.minlength}"
      disabled="${e.disabled}"
      required="${e.required}"
      show-label-hint="${e.showLabelHint}"
      autogrow="${e.autogrow}"
    ></ino-textarea>
  `,args:{cols:60,rows:5,label:"Label",minlength:0,maxlength:30,disabled:!1,required:!1,outline:!0,showLabelHint:!1,autogrow:!1,showCharacterCounter:!1}},r=a({...b}),o=a({...r,docsFromProperty:"label",render:()=>u`
    <ino-textarea label="Floating label" cols="30" rows="3"></ino-textarea>
    <ino-textarea label="Floating label" value="With value" cols="30" rows="3"></ino-textarea>
  `}),n=a({...r,docsFromProperty:"disabled",args:{disabled:!0}}),s=a({...r,docsFromProperty:"required",args:{required:!0,label:"Label*"}}),l=a({...r,docsFromProperty:"outline",args:{outline:!0}}),i=a({...r,docsFromProperty:"showLabelHint",args:{showLabelHint:!0}}),c=a({...r,docsFromProperty:"showCharacterCounter",render:e=>u`
    <ino-textarea
      class="customizable-textarea"
      cols="${e.cols}"
      rows="${e.rows}"
      label="${e.label}"
      outline="${e.outline}"
      minlength="${e.minlength}"
      maxlength="${e.maxlength}"
      disabled="${e.disabled}"
      required="${e.required}"
      show-label-hint="${e.showLabelHint}"
      autogrow="${e.autogrow}"
      show-character-counter="${e.showCharacterCounter}"
    ></ino-textarea>
  `,args:{showCharacterCounter:!0}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...InoTextareaMeta
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'label',
  render: () => html\`
    <ino-textarea label="Floating label" cols="30" rows="3"></ino-textarea>
    <ino-textarea label="Floating label" value="With value" cols="30" rows="3"></ino-textarea>
  \`
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'required',
  args: {
    required: true,
    label: 'Label*'
  }
})`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'outline',
  args: {
    outline: true
  }
})`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'showLabelHint',
  args: {
    showLabelHint: true
  }
})`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'showCharacterCounter',
  render: args => html\`
    <ino-textarea
      class="customizable-textarea"
      cols="\${args.cols}"
      rows="\${args.rows}"
      label="\${args.label}"
      outline="\${args.outline}"
      minlength="\${args.minlength}"
      maxlength="\${args.maxlength}"
      disabled="\${args.disabled}"
      required="\${args.required}"
      show-label-hint="\${args.showLabelHint}"
      autogrow="\${args.autogrow}"
      show-character-counter="\${args.showCharacterCounter}"
    ></ino-textarea>
  \`,
  args: {
    showCharacterCounter: true
  }
})`,...c.parameters?.docs?.source}}};const x=["Default","Label","Disabled","Required","Outline","ShowLabelHint","CharacterCount"];export{c as CharacterCount,r as Default,n as Disabled,o as Label,l as Outline,s as Required,i as ShowLabelHint,x as __namedExportsOrder,b as default};
