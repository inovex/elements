import{b as n}from"./lit-html-IUDnlW1J.js";import{g as s}from"./utils-ebStcoTl.js";import{S as a}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const c={title:"Structure/ino-tab",component:"ino-tab",render:o=>n`
    <ino-tab
      icon="${o.icon}"
      indicator-content-width="${o.indicatorContentWidth}"
      stacked="${o.stacked}"
      a11y-controls="${o.a11yControls}"
    >
      Label
    </ino-tab>
  `,argTypes:{icon:{control:{type:"select"},options:s()}},args:{indicatorContentWidth:!1,stacked:!1,icon:"info",a11yControls:"panel-id"}},t=a({...c}),r=a({...t,docsFromProperty:"stacked",args:{stacked:!0}}),e=a({...t,docsFromProperty:"indicatorContentWidth",args:{indicatorContentWidth:!0}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...InoTabMeta
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'stacked',
  args: {
    stacked: true
  }
})`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'indicatorContentWidth',
  args: {
    indicatorContentWidth: true
  }
})`,...e.parameters?.docs?.source}}};const u=["Default","Stacked","IndicatorContentWidth"];export{t as Default,e as IndicatorContentWidth,r as Stacked,u as __namedExportsOrder,c as default};
