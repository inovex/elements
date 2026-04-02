import{b as a}from"./lit-html-IUDnlW1J.js";import{S as r}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const n=[{key:"hh",value:"Hamburg"},{key:"ber",value:"Berlin"},{key:"k",value:"Karlsruhe"}],u=e=>{e.target.value=e.detail},s={title:"Input/ino-autocomplete",component:"ino-autocomplete",parameters:{actions:{handles:["valueChange"]}},render:e=>a` <div style="height: 300px;">
    <ino-autocomplete
      debounce="${e.debounce}"
      .options=${e.options}
      value="${e.value}"
      @valueChange="${u}"
      style="margin: 50px"
    >
      <ino-input></ino-input>
    </ino-autocomplete>
  </div>`,args:{debounce:100,options:n,value:""}},o=r({...s}),t=r({...o,docsFromProperty:"debounce",args:{debounce:500}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoAutocompleteMeta
})`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'debounce',
  args: {
    debounce: 500
  }
})`,...t.parameters?.docs?.source}}};const i=["Default","Debounce"];export{t as Debounce,o as Default,i as __namedExportsOrder,s as default};
