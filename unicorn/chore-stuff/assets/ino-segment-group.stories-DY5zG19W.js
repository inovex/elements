import{b as n}from"./lit-html-IUDnlW1J.js";import{S as a}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const r=({detail:e,target:o})=>o.value=e,s={title:"Buttons/ino-segment-group",component:"ino-segment-group",parameters:{actions:{handles:["checkedChange"]}},render:e=>n`
    <ino-segment-group
      id="segment-grp"
      name="${e.name}"
      value="${e.value}"
      @valueChange="${r}"
    >
      <ino-segment-button value="opt-1">Option 1</ino-segment-button>
      <ino-segment-button value="opt-2">Option 2</ino-segment-button>
      <ino-segment-button value="opt-3">Option 3</ino-segment-button>
      <ino-segment-button value="opt-4">Option 4</ino-segment-button>
    </ino-segment-group>
  `,argTypes:{value:{control:{type:"select"},options:["opt-1","opt-2","opt-3","opt-4"]}},args:{name:"",value:"opt-2"}},t=a({...s});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...InoSegmentGroupMeta
})`,...t.parameters?.docs?.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,s as default};
