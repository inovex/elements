import{b as c}from"./lit-html-IUDnlW1J.js";import{S as s}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:l}=__STORYBOOK_MODULE_PREVIEW_API__,d={title:"Input/ino-radio-group",component:"ino-radio-group",parameters:{actions:{handles:["checkedChange ino-radio"]}},decorators:[r=>(l(()=>{const a=e=>{e.currentTarget.setAttribute("value",e.target.getAttribute("value"))},n=e=>{e.currentTarget.setAttribute("value",e.detail)},i=document.querySelectorAll("ino-radio-group");return i.forEach(e=>{e.addEventListener("checkedChange",a),e.addEventListener("valueChange",n)}),()=>{i.forEach(e=>{e.removeEventListener("checkedChange",a),e.removeEventListener("valueChange",n)})}}),r())],render:r=>c`
    <ino-radio-group id="radio-grp" value="${r.value}" alignment="${r.alignment}">
      <ino-radio value="opt-1">Opt 1</ino-radio>
      <ino-radio value="opt-2">Opt 2</ino-radio>
      <ino-radio value="opt-3">Opt 3</ino-radio>
    </ino-radio-group>
  `,argTypes:{value:{control:{type:"select"},options:["opt-1","opt-2","opt-3"]},alignment:{control:{type:"select"},options:["horizontal","vertical"]}},args:{value:"opt-2",alignment:"horizontal"}},t=s({...d}),o=s({...t,docsFromProperty:"alignment",args:{alignment:"vertical"}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...InoRadioGroupMeta
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'alignment',
  args: {
    alignment: 'vertical'
  }
})`,...o.parameters?.docs?.source}}};const m=["Default","VerticalAlignment"];export{t as Default,o as VerticalAlignment,m as __namedExportsOrder,d as default};
