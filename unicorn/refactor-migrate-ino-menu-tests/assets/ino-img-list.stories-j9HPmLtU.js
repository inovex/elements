import{x as e}from"./lit-html-D-ZEPr28.js";import{S as s}from"./StoryWrapper-8ope1Itq.js";import"./elements-stencil-docs-A79BTi6O.js";const f=""+new URL("beach-YqHz73Lv.jpg",import.meta.url).href,u=""+new URL("fjord-DNr1VnIH.jpg",import.meta.url).href,I=""+new URL("forrest-D2qe1wNf.jpg",import.meta.url).href,y=""+new URL("liberty-Cl7I6P7Q.jpg",import.meta.url).href,$=""+new URL("trondheim-vpxkaSmD.jpg",import.meta.url).href,h=""+new URL("waterfall-Dde7Kyju.jpg",import.meta.url).href,a={title:"Graphic/ino-img-list",component:"ino-img-list",render:m=>e`
    <ino-img-list
      enclose-label="${m.encloseLabel}"
      masonry="${m.masonry}"
    >
      ${j} ${w} ${S} ${D} ${M}
      ${R}
    </ino-img-list>
  `,args:{encloseLabel:!1,masonry:!1}},r=s({...a}),o=s({...a,docsFromProperty:"masonry",args:{masonry:!0}}),t=s({...a,docsFromProperty:"encloseLabel",args:{encloseLabel:!0}}),j=e`
  <ino-img src=${f} alt="beach" label="Label" img-list-item></ino-img>
`,w=e`
  <ino-img src=${u} alt="fjord" label="Label" img-list-item></ino-img>
`,S=e`
  <ino-img
    src=${I}
    alt="forrest"
    label="Label"
    img-list-item
  ></ino-img>
`,D=e`
  <ino-img
    src=${y}
    alt="liberty"
    label="Label"
    img-list-item
  ></ino-img>
`,M=e`
  <ino-img
    src=${$}
    alt="trondheim"
    label="Label"
    img-list-item
  ></ino-img>
`,R=e`
  <ino-img
    src=${h}
    alt="waterfall"
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
})`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var b,L,d;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...InoImgListMeta,
  docsFromProperty: 'encloseLabel',
  args: {
    encloseLabel: true
  }
})`,...(d=(L=t.parameters)==null?void 0:L.docs)==null?void 0:d.source}}};const F=["Default","Masonry","EncloseLabel"];export{r as Default,t as EncloseLabel,o as Masonry,F as __namedExportsOrder,a as default};
