import{b as s}from"./lit-html-odaN0r1L.js";import{S as p}from"./StoryWrapper-pH0BiVjf.js";import"./elements-stencil-docs-CC_eBxG8.js";const u=({detail:e,target:r})=>r.value=e,m={title:"Buttons/ino-segment-group",component:"ino-segment-group",parameters:{actions:{handles:["checkedChange"]}},render:e=>s`
    <ino-segment-group
      id="segment-grp"
      name="${e.name}"
      value="${e.value}"
      @valueChange="${u}"
    >
      <ino-segment-button value="opt-1">Option 1</ino-segment-button>
      <ino-segment-button value="opt-2">Option 2</ino-segment-button>
      <ino-segment-button value="opt-3">Option 3</ino-segment-button>
      <ino-segment-button value="opt-4">Option 4</ino-segment-button>
    </ino-segment-group>
  `,argTypes:{value:{control:{type:"select"},options:["opt-1","opt-2","opt-3","opt-4"]}},args:{name:"",value:"opt-2"}},t=p({...m});var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`Story({
  ...InoSegmentGroupMeta
})`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,m as default};
