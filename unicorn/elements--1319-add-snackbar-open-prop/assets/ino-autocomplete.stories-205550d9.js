import{x as l}from"./lit-html-f27292d4.js";import{S as p}from"./StoryWrapper-8a412985.js";import"./elements-stencil-docs-1854c044.js";const i=[{key:"hh",value:"Hamburg"},{key:"ber",value:"Berlin"},{key:"k",value:"Karlsruhe"}],m=e=>{e.target.value=e.detail},d={title:"Input/ino-autocomplete",component:"ino-autocomplete",parameters:{actions:{handles:["valueChange"]}},render:e=>l` <div style="height: 300px;">
    <ino-autocomplete
      debounce="${e.debounce}"
      .options=${e.options}
      value="${e.value}"
      @valueChange="${m}"
      style="margin: 50px"
    >
      <ino-input></ino-input>
    </ino-autocomplete>
  </div>`,args:{debounce:100,options:i,value:""}},o=p({...d}),t=p({...o,docsFromProperty:"debounce",args:{debounce:500}});var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`Story({
  ...InoAutocompleteMeta
})`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var u,s,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'debounce',
  args: {
    debounce: 500
  }
})`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const g=["Default","Debounce"];export{t as Debounce,o as Default,g as __namedExportsOrder,d as default};
