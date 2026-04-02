import{b as i}from"./lit-html-IUDnlW1J.js";import{S as s}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const n=i`
  <ino-img
    slot="leading"
    src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
    ratio-width="1"
    ratio-height="1"
  ></ino-img>
`,c={title:"Structure/ino-list ",component:"ino-list",render:e=>i`
    <ino-list dense="${e.dense}" two-lines="${e.twoLines}" avatar="${e.avatar}">
      <ino-list-item text="First text item" secondary-text="${e.twoLines?"Secondary Text":""}"
        >${e.avatar?n:""}</ino-list-item
      >
      <ino-list-item text="Second text item" secondary-text="${e.twoLines?"Secondary Text":""}"
        >${e.avatar?n:""}</ino-list-item
      >
      <ino-list-item text="Third text item" secondary-text="${e.twoLines?"Secondary Text":""}"
        >${e.avatar?n:""}</ino-list-item
      >
    </ino-list>
  `,args:{dense:!1,twoLines:!1,avatar:!1}},t=s({...c}),r=s({...t,docsFromProperty:"twoLines",args:{twoLines:!0}}),o=s({...t,docsFromProperty:"dense",args:{dense:!0}}),a=s({...t,docsFromProperty:"avatar",args:{avatar:!0}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...InoListMeta
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'twoLines',
  args: {
    twoLines: true
  }
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dense',
  args: {
    dense: true
  }
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'avatar',
  args: {
    avatar: true
  }
})`,...a.parameters?.docs?.source}}};const l=["Default","TwoLines","Dense","Avatar"];export{a as Avatar,t as Default,o as Dense,r as TwoLines,l as __namedExportsOrder,c as default};
