import{x}from"./lit-html-b5e645d2.js";import{S as a}from"./StoryWrapper-674d0325.js";import"./elements-stencil-docs-09c5939d.js";const f=o=>{o.target.expanded=o.detail},g={title:"Structure/ino-accordion",component:"ino-accordion",render:o=>x` <ino-accordion
    expanded="${o.expanded}"
    accordion-title="${o.accordionTitle}"
    @expandedChange="${f}"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi enim,
    venenatis non facilisis sed, finibus in enim. Sed auctor enim nisl, sit amet
    feugiat risus blandit vitae.
  </ino-accordion>`,args:{expanded:!1,accordionTitle:"Accordion Title"}},e=a({...g}),r=a({...e,docsFromProperty:"expanded",args:{expanded:!0}}),n=a({...e,docsFromProperty:"accordionTitle",args:{accordionTitle:"Custom Title"}});var t,c,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`Story({
  ...inoAccordionMeta
})`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,s,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'expanded',
  args: {
    expanded: true
  }
})`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,l,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'accordionTitle',
  args: {
    accordionTitle: 'Custom Title'
  }
})`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const A=["Default","Expanded","AccordionTitle"];export{n as AccordionTitle,e as Default,r as Expanded,A as __namedExportsOrder,g as default};
