import{b as n}from"./lit-html-IUDnlW1J.js";import{S as o}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const c=e=>e.target.checked=e.detail,d={title:"Buttons/ino-segment-button",component:"ino-segment-button",parameters:{actions:{handles:["checkedChange"]}},render:e=>n`
    <ino-segment-button
      value="1"
      class="customizable-segment-btn"
      checked="${e.checked}"
      dense="${e.dense}"
      disabled="${e.disabled}"
      name="${e.name}"
      value="${e.value}"
      type="${e.type}"
      @checkedChange="${c}"
    >
      Segment Button Label
    </ino-segment-button>
  `,args:{checked:!1,dense:!1,disabled:!1,name:"",value:"",type:""}},r=o({...d}),t=o({...r,docsFromProperty:"checked",args:{checked:!0}}),s=o({...r,docsFromProperty:"disabled",args:{disabled:!0}}),a=o({...r,docsFromProperty:"dense",args:{dense:!0}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...InoSegmentButtonMeta
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dense',
  args: {
    dense: true
  }
})`,...a.parameters?.docs?.source}}};const p=["Default","EnableChecked","Disabled","Dense"];export{r as Default,a as Dense,s as Disabled,t as EnableChecked,p as __namedExportsOrder,d as default};
