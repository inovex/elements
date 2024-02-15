import{x as f}from"./lit-html-b5e645d2.js";import{S as a}from"./StoryWrapper-36ac2276.js";import{g as y}from"./utils-784729f7.js";import"./elements-stencil-docs-6f259965.js";const v={title:"Buttons/ino-icon-button",component:"ino-icon-button",parameters:{actions:{handles:["click ino-icon-button"]}},render:t=>f`
    <ino-icon-button
      activated="${t.activated}"
      disabled="${t.disabled}"
      filled="${t.filled}"
      type="${t.type}"
    >
      <ino-icon icon="${t.icon}"></ino-icon>
    </ino-icon-button>
  `,argTypes:{icon:{control:{type:"select"},options:y()}},args:{activated:!1,disabled:!1,filled:!1,icon:"add"}},o=a({...v}),e=a({...o,docsFromProperty:"filled",args:{filled:!0}}),r=a({...o,docsFromProperty:"activated",args:{activated:!0}});var n,c,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoIconButtonMeta
})`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var i,d,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'filled',
  args: {
    filled: true
  }
})`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'activated',
  args: {
    activated: true
  }
})`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const I=["Default","Filled","Activated"];export{r as Activated,o as Default,e as Filled,I as __namedExportsOrder,v as default};
