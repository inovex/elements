import{x as l}from"./lit-html-b5e645d2.js";import{S as p}from"./StoryWrapper-b39d0c39.js";import"./elements-stencil-docs-a0365730.js";const i=e=>{e.target.value=e.detail},m={title:"Input/ino-autocomplete",component:"ino-autocomplete",parameters:{actions:{handles:["valueChange"]}},render:e=>l` <div style="height: 300px;">
    <ino-autocomplete
      debounce="${e.debounce}"
      .options=${e.options}
      value="${e.value}"
      @valueChange="${i}"
      style="margin: 50px"
    >
      <ino-input></ino-input>
    </ino-autocomplete>
  </div>`,args:{debounce:100,options:[{key:"hh",value:"Hamburg"},{key:"ber",value:"Berlin"},{key:"k",value:"Karlsruhe"}],value:""}},o=p({...m}),t=p({...o,docsFromProperty:"debounce",args:{debounce:500}});var r,a,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`Story({
  ...InoAutocompleteMeta
})`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var u,s,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'debounce',
  args: {
    debounce: 500
  }
})`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const y=["Default","Debounce"];export{t as Debounce,o as Default,y as __namedExportsOrder,m as default};
