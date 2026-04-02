import{b as n}from"./lit-html-IUDnlW1J.js";import{S as a}from"./StoryWrapper-Bs3Y9Jfd.js";import{g as c}from"./utils-ebStcoTl.js";import"./elements-stencil-docs-BpOCemuM.js";const s={title:"Buttons/ino-icon-button",component:"ino-icon-button",parameters:{actions:{handles:["click ino-icon-button"]}},render:o=>n`
    <ino-icon-button
      activated="${o.activated}"
      disabled="${o.disabled}"
      filled="${o.filled}"
      type="${o.type}"
    >
      <ino-icon icon="${o.icon}"></ino-icon>
    </ino-icon-button>
  `,argTypes:{icon:{control:{type:"select"},options:c()}},args:{activated:!1,disabled:!1,filled:!1,icon:"add"}},e=a({...s}),t=a({...e,docsFromProperty:"filled",args:{filled:!0}}),r=a({...e,docsFromProperty:"activated",args:{activated:!0}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...InoIconButtonMeta
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'filled',
  args: {
    filled: true
  }
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'activated',
  args: {
    activated: true
  }
})`,...r.parameters?.docs?.source}}};const m=["Default","Filled","Activated"];export{r as Activated,e as Default,t as Filled,m as __namedExportsOrder,s as default};
