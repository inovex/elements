import{x as k}from"./lit-html-D-ZEPr28.js";import{S as o}from"./StoryWrapper-YhkqXCd1.js";import"./elements-stencil-docs-BCLlNifF.js";const S=e=>e.target.checked=e.detail,f={title:"Buttons/ino-segment-button",component:"ino-segment-button",parameters:{actions:{handles:["checkedChange"]}},render:e=>k`
    <ino-segment-button
      value="1"
      class="customizable-segment-btn"
      checked="${e.checked}"
      dense="${e.dense}"
      disabled="${e.disabled}"
      name="${e.name}"
      value="${e.value}"
      type="${e.type}"
      @checkedChange="${S}"
    >
      Segment Button Label
    </ino-segment-button>
  `,args:{checked:!1,dense:!1,disabled:!1,name:"",value:"",type:""}},r=o({...f}),t=o({...r,docsFromProperty:"checked",args:{checked:!0}}),s=o({...r,docsFromProperty:"disabled",args:{disabled:!0}}),a=o({...r,docsFromProperty:"dense",args:{dense:!0}});var n,c,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoSegmentButtonMeta
})`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,i,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(b=(i=s.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dense',
  args: {
    dense: true
  }
})`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const P=["Default","EnableChecked","Disabled","Dense"];export{r as Default,a as Dense,s as Disabled,t as EnableChecked,P as __namedExportsOrder,f as default};
