import{b as n}from"./lit-html-IUDnlW1J.js";import{S as t}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const p={title:"Notification/ino-progress-bar",component:"ino-progress-bar",argTypes:{buffer:{control:{min:0,max:1,step:.1}},progress:{control:{min:0,max:1,step:.1}}},render:a=>n`
    <ino-progress-bar buffer="${a.buffer}" progress="${a.progress}" indeterminate="${a.indeterminate}">
    </ino-progress-bar>
  `,args:{indeterminate:!1,buffer:.9,progress:.4}},r=t({...p}),e=t({...r,docsFromProperty:"progress",args:{progress:.5}}),o=t({...r,docsFromProperty:"buffer",args:{buffer:.5}}),s=t({...r,docsFromProperty:"indeterminate",args:{indeterminate:!0}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...InoProgressBarMeta
})`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'progress',
  args: {
    progress: 0.5
  }
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'buffer',
  args: {
    buffer: 0.5
  }
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true
  }
})`,...s.parameters?.docs?.source}}};const d=["Default","Progress","Buffer","Indeterminate"];export{o as Buffer,r as Default,s as Indeterminate,e as Progress,d as __namedExportsOrder,p as default};
