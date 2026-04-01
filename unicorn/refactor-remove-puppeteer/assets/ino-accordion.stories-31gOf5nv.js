import{b as x}from"./lit-html-odaN0r1L.js";import{S as n}from"./StoryWrapper-CB660Xf5.js";import"./elements-stencil-docs-CE9fhhj4.js";const f=o=>{o.target.expanded=o.detail},g={title:"Structure/ino-accordion",component:"ino-accordion",render:o=>x` <ino-accordion
    expanded="${o.expanded}"
    accordion-title="${o.accordionTitle}"
    @expandedChange="${f}"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi enim, venenatis non facilisis sed, finibus in
    enim. Sed auctor enim nisl, sit amet feugiat risus blandit vitae.
  </ino-accordion>`,args:{expanded:!1,accordionTitle:"Accordion Title"}},e=n({...g}),r=n({...e,docsFromProperty:"expanded",args:{expanded:!0}}),a=n({...e,docsFromProperty:"accordionTitle",args:{accordionTitle:"Custom Title"}});var t,i,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`Story({
  ...inoAccordionMeta
})`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,s,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'expanded',
  args: {
    expanded: true
  }
})`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'accordionTitle',
  args: {
    accordionTitle: 'Custom Title'
  }
})`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const A=["Default","Expanded","AccordionTitle"];export{a as AccordionTitle,e as Default,r as Expanded,A as __namedExportsOrder,g as default};
