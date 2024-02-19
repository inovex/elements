import{x as e}from"./lit-html-b5e645d2.js";import{S as a}from"./StoryWrapper-36ac2276.js";import"./elements-stencil-docs-6f259965.js";const f=""+new URL("beach-38d08811.jpg",import.meta.url).href,u=""+new URL("fjord-e4a9be69.jpg",import.meta.url).href,y=""+new URL("forrest-342e0711.jpg",import.meta.url).href,I=""+new URL("liberty-3a8b0175.jpg",import.meta.url).href,$=""+new URL("trondheim-dec7e829.jpg",import.meta.url).href,h=""+new URL("waterfall-1cc30a55.jpg",import.meta.url).href,s={title:"Graphic/ino-img-list",component:"ino-img-list",render:m=>e`
    <ino-img-list
      enclose-label="${m.encloseLabel}"
      masonry="${m.masonry}"
    >
      ${j} ${w} ${S} ${M} ${R}
      ${U}
    </ino-img-list>
  `,args:{encloseLabel:!1,masonry:!1}},r=a({...s}),o=a({...s,docsFromProperty:"masonry",args:{masonry:!0}}),t=a({...s,docsFromProperty:"encloseLabel",args:{encloseLabel:!0}}),j=e`
  <ino-img src=${f} alt="beach" label="Label" img-list-item></ino-img>
`,w=e`
  <ino-img
    src=${u}
    alt="waterfall"
    label="Label"
    img-list-item
  ></ino-img>
`,S=e`
  <ino-img
    src=${y}
    alt="trondheim"
    label="Label"
    img-list-item
  ></ino-img>
`,M=e`
  <ino-img
    src=${I}
    alt="forrest"
    label="Label"
    img-list-item
  ></ino-img>
`,R=e`
  <ino-img
    src=${$}
    alt="fjord"
    label="Label"
    img-list-item
  ></ino-img>
`,U=e`
  <ino-img
    src=${h}
    alt="liberty"
    label="Label"
    img-list-item
  ></ino-img>
`;var n,l,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoImgListMeta
})`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,g,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`Story({
  ...InoImgListMeta,
  docsFromProperty: 'masonry',
  args: {
    masonry: true
  }
})`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var b,d,L;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...InoImgListMeta,
  docsFromProperty: 'encloseLabel',
  args: {
    encloseLabel: true
  }
})`,...(L=(d=t.parameters)==null?void 0:d.docs)==null?void 0:L.source}}};const E=["Default","Masonry","EncloseLabel"];export{r as Default,t as EncloseLabel,o as Masonry,E as __namedExportsOrder,s as default};
