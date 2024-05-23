import{x as f}from"./lit-html-D-ZEPr28.js";import{S as a}from"./StoryWrapper-CsUqRYgJ.js";import{g as y}from"./utils-ebStcoTl.js";import"./elements-stencil-docs-D2SOUcOF.js";const v={title:"Buttons/ino-icon-button",component:"ino-icon-button",parameters:{actions:{handles:["click ino-icon-button"]}},render:o=>f`
    <ino-icon-button
      activated="${o.activated}"
      disabled="${o.disabled}"
      filled="${o.filled}"
      type="${o.type}"
    >
      <ino-icon icon="${o.icon}"></ino-icon>
    </ino-icon-button>
  `,argTypes:{icon:{control:{type:"select"},options:y()}},args:{activated:!1,disabled:!1,filled:!1,icon:"add"}},e=a({...v}),t=a({...e,docsFromProperty:"filled",args:{filled:!0}}),r=a({...e,docsFromProperty:"activated",args:{activated:!0}});var n,c,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoIconButtonMeta
})`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var i,d,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'filled',
  args: {
    filled: true
  }
})`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'activated',
  args: {
    activated: true
  }
})`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const I=["Default","Filled","Activated"];export{r as Activated,e as Default,t as Filled,I as __namedExportsOrder,v as default};
