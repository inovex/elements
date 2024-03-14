import{x as S}from"./lit-html-b5e645d2.js";import{S as a}from"./StoryWrapper-c6cdb4db.js";import"./elements-stencil-docs-02981b6f.js";const k=e=>e.target.checked=e.detail,f={title:"Buttons/ino-segment-button",component:"ino-segment-button",parameters:{actions:{handles:["checkedChange"]}},render:e=>S`
    <ino-segment-button
      value="1"
      class="customizable-segment-btn"
      checked="${e.checked}"
      dense="${e.dense}"
      disabled="${e.disabled}"
      name="${e.name}"
      value="${e.value}"
      type="${e.type}"
      @checkedChange="${k}"
    >
      Segment Button Label
    </ino-segment-button>
  `,args:{checked:!1,dense:!1,disabled:!1,name:"",value:"",type:""}},r=a({...f}),t=a({...r,docsFromProperty:"checked",args:{checked:!0}}),s=a({...r,docsFromProperty:"disabled",args:{disabled:!0}}),o=a({...r,docsFromProperty:"dense",args:{dense:!0}});var n,c,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoSegmentButtonMeta
})`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,i,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(g=(i=s.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var b,h,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dense',
  args: {
    dense: true
  }
})`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const P=["Default","EnableChecked","Disabled","Dense"];export{r as Default,o as Dense,s as Disabled,t as EnableChecked,P as __namedExportsOrder,f as default};
