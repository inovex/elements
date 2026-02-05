import{b as m}from"./lit-html-odaN0r1L.js";import{S as g}from"./StoryWrapper-pH0BiVjf.js";import"./elements-stencil-docs-CC_eBxG8.js";const{useEffect:v}=__STORYBOOK_MODULE_PREVIEW_API__,h={title:"Input/ino-radio-group",component:"ino-radio-group",parameters:{actions:{handles:["checkedChange ino-radio"]}},decorators:[r=>(v(()=>{const a=e=>{e.currentTarget.setAttribute("value",e.target.getAttribute("value"))},n=e=>{e.currentTarget.setAttribute("value",e.detail)},i=document.querySelectorAll("ino-radio-group");return i.forEach(e=>{e.addEventListener("checkedChange",a),e.addEventListener("valueChange",n)}),()=>{i.forEach(e=>{e.removeEventListener("checkedChange",a),e.removeEventListener("valueChange",n)})}}),r())],render:r=>m`
    <ino-radio-group id="radio-grp" value="${r.value}" alignment="${r.alignment}">
      <ino-radio value="opt-1">Opt 1</ino-radio>
      <ino-radio value="opt-2">Opt 2</ino-radio>
      <ino-radio value="opt-3">Opt 3</ino-radio>
    </ino-radio-group>
  `,argTypes:{value:{control:{type:"select"},options:["opt-1","opt-2","opt-3"]},alignment:{control:{type:"select"},options:["horizontal","vertical"]}},args:{value:"opt-2",alignment:"horizontal"}},t=g({...h}),o=g({...t,docsFromProperty:"alignment",args:{alignment:"vertical"}});var s,c,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`Story({
  ...InoRadioGroupMeta
})`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'alignment',
  args: {
    alignment: 'vertical'
  }
})`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const _=["Default","VerticalAlignment"];export{t as Default,o as VerticalAlignment,_ as __namedExportsOrder,h as default};
