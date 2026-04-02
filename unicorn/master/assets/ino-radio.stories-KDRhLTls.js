import{b as n}from"./lit-html-IUDnlW1J.js";import{S as d}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:i}=__STORYBOOK_MODULE_PREVIEW_API__,l={title:"Input/ino-radio",component:"ino-radio",parameters:{actions:{handles:["checkedChange ino-radio"]}},decorators:[e=>(i(()=>{const s=r=>r.target.setAttribute("checked",r.detail),c=document.querySelectorAll("ino-radio");return c.forEach(r=>r.addEventListener("checkedChange",s)),()=>c.forEach(r=>r.removeEventListener("checkedChange",s))}),e())],render:e=>n`
    <ino-radio checked="${e.checked}" disabled="${e.disabled}" name="${e.name}" value="${e.value}">
      Radio Button Label
    </ino-radio>
  `,args:{checked:!1,disabled:!1,name:"radio-custom",value:"radio-1"}},o=d({...l}),a=d({...o,docsFromProperty:"checked",args:{checked:!0}}),t=d({...o,docsFromProperty:"disabled",args:{disabled:!0}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoRadioMeta
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...t.parameters?.docs?.source}}};const h=["Default","Checked","Disabled"];export{a as Checked,o as Default,t as Disabled,h as __namedExportsOrder,l as default};
