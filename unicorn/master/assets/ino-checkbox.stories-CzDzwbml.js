import{b as l}from"./lit-html-IUDnlW1J.js";import{S as o}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useState:u}=__STORYBOOK_MODULE_PREVIEW_API__,p={title:"Input/ino-checkbox",component:"ino-checkbox",render:r=>{const[n,d]=u(r.checked);function i(m){d(m.detail)}return l`
      <ino-checkbox
        checked="${n}"
        disabled="${r.disabled}"
        indeterminate="${r.indeterminate}"
        name="${r.name}"
        selection="${r.selection}"
        value="${r.value}"
        @checkedChange="${i}"
      >
        Label
      </ino-checkbox>
    `},args:{checked:!0,disabled:!1,indeterminate:!1,name:"my-name",selection:!1,value:"my-value"}},e=o({...p}),t=o({...e,docsFromProperty:"checked",args:{checked:!0}}),a=o({...e,docsFromProperty:"selection",args:{selection:!0}}),c=o({...e,docsFromProperty:"indeterminate",args:{indeterminate:!0}}),s=o({...e,docsFromProperty:"disabled",args:{disabled:!0}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...InoCheckboxMeta
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'selection',
  args: {
    selection: true
  }
})`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true
  }
})`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...s.parameters?.docs?.source}}};const y=["Default","Checked","Selection","Indeterminate","Disabled"];export{t as Checked,e as Default,s as Disabled,c as Indeterminate,a as Selection,y as __namedExportsOrder,p as default};
