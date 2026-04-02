import{b as c}from"./lit-html-IUDnlW1J.js";import{S as s}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:i}=__STORYBOOK_MODULE_PREVIEW_API__,n=a=>a.target.setAttribute("active-tab",a.detail),b={title:"Structure/ino-tab-bar",component:"ino-tab-bar",decorators:[a=>(i(()=>{const r=document.querySelectorAll("ino-tab-bar");return r.forEach(o=>o.addEventListener("activeTabChange",n)),()=>r.forEach(o=>o.removeEventListener("activeTabChange",n))}),a())],render:a=>c`
    <ino-tab-bar id="customizable-tabbar" active-tab="${a.activeTab}" auto-focus="${a.autoFocus}">
      <ino-tab label="User" icon="user" a11y-controls="user-panel"></ino-tab>
      <ino-tab label="Messages" icon="message" a11y-controls="messages-panel"></ino-tab>
      <ino-tab label="Settings" icon="settings" a11y-controls="settings-panel"></ino-tab>
      <ino-tab label="Download" icon="download" a11y-controls="download-panel"></ino-tab>
    </ino-tab-bar>
  `,argTypes:{activeTab:{control:{type:"select"},options:[0,1,2,3]}},args:{activeTab:0,autoFocus:!1}},e=s({...b}),t=s({...e,docsFromProperty:"activeTab",args:{activeTab:1}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...InoTabBarMeta
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'activeTab',
  args: {
    activeTab: 1
  }
})`,...t.parameters?.docs?.source}}};const p=["Default","ActiveTab"];export{t as ActiveTab,e as Default,p as __namedExportsOrder,b as default};
