import{b as e}from"./lit-html-IUDnlW1J.js";import{S as s}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const n=""+new URL("beach-YqHz73Lv.jpg",import.meta.url).href,l=""+new URL("fjord-DNr1VnIH.jpg",import.meta.url).href,i=""+new URL("forrest-D2qe1wNf.jpg",import.meta.url).href,c=""+new URL("liberty-Cl7I6P7Q.jpg",import.meta.url).href,g=""+new URL("trondheim-vpxkaSmD.jpg",import.meta.url).href,p=""+new URL("waterfall-Dde7Kyju.jpg",import.meta.url).href,a={title:"Graphic/ino-img-list",component:"ino-img-list",render:m=>e`
    <ino-img-list enclose-label="${m.encloseLabel}" masonry="${m.masonry}">
      ${b} ${L} ${d} ${f} ${u} ${I}
    </ino-img-list>
  `,args:{encloseLabel:!1,masonry:!1}},r=s({...a}),o=s({...a,docsFromProperty:"masonry",args:{masonry:!0}}),t=s({...a,docsFromProperty:"encloseLabel",args:{encloseLabel:!0}}),b=e` <ino-img src=${n} alt="beach" label="Label" img-list-item></ino-img> `,L=e` <ino-img src=${l} alt="fjord" label="Label" img-list-item></ino-img> `,d=e` <ino-img src=${i} alt="forrest" label="Label" img-list-item></ino-img> `,f=e` <ino-img src=${c} alt="liberty" label="Label" img-list-item></ino-img> `,u=e` <ino-img src=${g} alt="trondheim" label="Label" img-list-item></ino-img> `,I=e` <ino-img src=${p} alt="waterfall" label="Label" img-list-item></ino-img> `;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...InoImgListMeta
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoImgListMeta,
  docsFromProperty: 'masonry',
  args: {
    masonry: true
  }
})`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...InoImgListMeta,
  docsFromProperty: 'encloseLabel',
  args: {
    encloseLabel: true
  }
})`,...t.parameters?.docs?.source}}};const j=["Default","Masonry","EncloseLabel"];export{r as Default,t as EncloseLabel,o as Masonry,j as __namedExportsOrder,a as default};
