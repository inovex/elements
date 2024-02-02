import{x as _}from"./lit-html-b5e645d2.js";import{S as t}from"./StoryWrapper-b39d0c39.js";import"./elements-stencil-docs-a0365730.js";const{useEffect:F}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Input/ino-checkbox",component:"ino-checkbox",decorators:[e=>(F(()=>{const i=o=>{const d=o.target;d.checked=o.detail,d.indeterminate&&(d.indeterminate=!1)},m=document.querySelectorAll("ino-checkbox");return m.forEach(o=>o.addEventListener("checkedChange",i)),()=>m.forEach(o=>o.removeEventListener("checkedChange",i))}),e())],render:e=>_`
    <ino-checkbox
      checked="${e.checked}"
      disabled="${e.disabled}"
      indeterminate="${e.indeterminate}"
      name="${e.name}"
      selection="${e.selection}"
      value="${e.value}"
    >
      Label
    </ino-checkbox>
  `,args:{checked:!0,disabled:!1,indeterminate:!1,name:"my-name",selection:!1,value:"my-value"}},r=t({...v}),c=t({...r,docsFromProperty:"checked",args:{checked:!0}}),a=t({...r,docsFromProperty:"selection",args:{selection:!0}}),n=t({...r,docsFromProperty:"indeterminate",args:{indeterminate:!0}}),s=t({...r,docsFromProperty:"disabled",args:{disabled:!0}});var l,u,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`Story({
  ...InoCheckboxMeta
})`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,k,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var f,y,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'selection',
  args: {
    selection: true
  }
})`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var g,x,P;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true
  }
})`,...(P=(x=n.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var C,D,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const L=["Default","Checked","Selection","Indeterminate","Disabled"];export{c as Checked,r as Default,s as Disabled,n as Indeterminate,a as Selection,L as __namedExportsOrder,v as default};
