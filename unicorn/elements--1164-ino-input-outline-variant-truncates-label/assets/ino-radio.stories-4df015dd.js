import{x as b}from"./lit-html-b5e645d2.js";import{S as d}from"./StoryWrapper-f0285007.js";import"./elements-stencil-docs-936e56f6.js";const{useEffect:S}=__STORYBOOK_MODULE_PREVIEW_API__,g={title:"Input/ino-radio",component:"ino-radio",parameters:{actions:{handles:["checkedChange ino-radio"]}},decorators:[e=>(S(()=>{const s=r=>r.target.setAttribute("checked",r.detail),c=document.querySelectorAll("ino-radio");return c.forEach(r=>r.addEventListener("checkedChange",s)),()=>c.forEach(r=>r.removeEventListener("checkedChange",s))}),e())],render:e=>b`
    <ino-radio
      checked="${e.checked}"
      disabled="${e.disabled}"
      name="${e.name}"
      value="${e.value}"
    >
      Radio Button Label
    </ino-radio>
  `,args:{checked:!1,disabled:!1,name:"radio-custom",value:"radio-1"}},o=d({...g}),a=d({...o,docsFromProperty:"checked",args:{checked:!0}}),t=d({...o,docsFromProperty:"disabled",args:{disabled:!0}});var n,i,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoRadioMeta
})`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,f,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const v=["Default","Checked","Disabled"];export{a as Checked,o as Default,t as Disabled,v as __namedExportsOrder,g as default};
