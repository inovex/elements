import{b as t}from"./lit-html-IUDnlW1J.js";import{S as n}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const i=o=>{o.target.expanded=o.detail},c={title:"Structure/ino-accordion",component:"ino-accordion",render:o=>t` <ino-accordion
    expanded="${o.expanded}"
    accordion-title="${o.accordionTitle}"
    @expandedChange="${i}"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi enim, venenatis non facilisis sed, finibus in
    enim. Sed auctor enim nisl, sit amet feugiat risus blandit vitae.
  </ino-accordion>`,args:{expanded:!1,accordionTitle:"Accordion Title"}},e=n({...c}),r=n({...e,docsFromProperty:"expanded",args:{expanded:!0}}),a=n({...e,docsFromProperty:"accordionTitle",args:{accordionTitle:"Custom Title"}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...inoAccordionMeta
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'expanded',
  args: {
    expanded: true
  }
})`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'accordionTitle',
  args: {
    accordionTitle: 'Custom Title'
  }
})`,...a.parameters?.docs?.source}}};const m=["Default","Expanded","AccordionTitle"];export{a as AccordionTitle,e as Default,r as Expanded,m as __namedExportsOrder,c as default};
