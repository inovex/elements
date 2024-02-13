import{x as y}from"./lit-html-b5e645d2.js";import{g as f}from"./utils-784729f7.js";import{S as a}from"./StoryWrapper-91a22e61.js";import"./elements-stencil-docs-7538891b.js";const S={title:"Structure/ino-tab",component:"ino-tab",render:o=>y`
    <ino-tab
      icon="${o.icon}"
      indicator-content-width="${o.indicatorContentWidth}"
      stacked="${o.stacked}"
      a11y-controls="${o.a11yControls}"
    >
      Label
    </ino-tab>
  `,argTypes:{icon:{control:{type:"select"},options:f()}},args:{indicatorContentWidth:!1,stacked:!1,icon:"info",a11yControls:"panel-id"}},t=a({...S}),r=a({...t,docsFromProperty:"stacked",args:{stacked:!0}}),e=a({...t,docsFromProperty:"indicatorContentWidth",args:{indicatorContentWidth:!0}});var n,s,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoTabMeta
})`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'stacked',
  args: {
    stacked: true
  }
})`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'indicatorContentWidth',
  args: {
    indicatorContentWidth: true
  }
})`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const W=["Default","Stacked","IndicatorContentWidth"];export{t as Default,e as IndicatorContentWidth,r as Stacked,W as __namedExportsOrder,S as default};
