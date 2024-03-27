import{x as e}from"./lit-html-f27292d4.js";import{S as r}from"./StoryWrapper-c5407b69.js";import"./elements-stencil-docs-6a7eba8c.js";const a={title:"Input/ino-option-group",component:"ino-option-group",parameters:{docs:{story:{height:"450px"}}},render:n=>e`
    <ino-select label="Select with Group">
      <ino-option-group label="${n.label}">
        <ino-option value="Option 1">Option 1</ino-option>
        <ino-option value="Option 2">Option 2</ino-option>
        <ino-option value="Option 3">Option 3</ino-option>
      </ino-option-group>
      <ino-option-group label="${n.label}">
        <ino-option value="Option 4">Option 4</ino-option>
        <ino-option value="Option 5">Option 5</ino-option>
        <ino-option value="Option 6">Option 6</ino-option>
      </ino-option-group>
    </ino-select>
  `,args:{label:"My group Label"}},o=r({...a});var t,i,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`Story({
  ...InoOptionGroupMeta
})`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,a as default};
