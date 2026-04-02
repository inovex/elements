import{b as a}from"./lit-html-IUDnlW1J.js";import{S as s}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const n={title:"Input/ino-option",component:"ino-option",parameters:{docs:{story:{height:"150px"}}},render:r=>a`
    <div class="story-option">
      <ino-select label="My Select">
        <ino-option
          class="customizable-option"
          disabled="${r.disabled}"
          selected="${r.selected}"
          value="${r.value}"
        >
          Content
        </ino-option>
      </ino-select>
    </div>
  `,args:{value:"some-id",disabled:!1,selected:!1}},e=s({...n}),o=s({...e,docsFromProperty:"disabled",args:{disabled:!0}}),t=s({...e,docsFromProperty:"selected",args:{selected:!0}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...InoOptionMeta
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'selected',
  args: {
    selected: true
  }
})`,...t.parameters?.docs?.source}}};const l=["Default","DisabledOption","SelectedOption"];export{e as Default,o as DisabledOption,t as SelectedOption,l as __namedExportsOrder,n as default};
