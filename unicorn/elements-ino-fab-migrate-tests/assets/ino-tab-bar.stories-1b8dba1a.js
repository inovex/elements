import{x as p}from"./lit-html-b5e645d2.js";import{S as d}from"./StoryWrapper-0e6ce08e.js";import"./elements-stencil-docs-c1412bd4.js";const{useEffect:m}=__STORYBOOK_MODULE_PREVIEW_API__,n=a=>a.target.setAttribute("active-tab",a.detail),v={title:"Structure/ino-tab-bar",component:"ino-tab-bar",decorators:[a=>(m(()=>{const r=document.querySelectorAll("ino-tab-bar");return r.forEach(o=>o.addEventListener("activeTabChange",n)),()=>r.forEach(o=>o.removeEventListener("activeTabChange",n))}),a())],render:a=>p`
    <ino-tab-bar
      id="customizable-tabbar"
      active-tab="${a.activeTab}"
      auto-focus="${a.autoFocus}"
    >
      <ino-tab label="User" icon="user" a11y-controls="user-panel"></ino-tab>
      <ino-tab
        label="Messages"
        icon="message"
        a11y-controls="messages-panel"
      ></ino-tab>
      <ino-tab
        label="Settings"
        icon="settings"
        a11y-controls="settings-panel"
      ></ino-tab>
      <ino-tab
        label="Download"
        icon="download"
        a11y-controls="download-panel"
      ></ino-tab>
    </ino-tab-bar>
  `,argTypes:{activeTab:{control:{type:"select"},options:[0,1,2,3]}},args:{activeTab:0,autoFocus:!1}},t=d({...v}),e=d({...t,docsFromProperty:"activeTab",args:{activeTab:1}});var s,c,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`Story({
  ...InoTabBarMeta
})`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var b,l,u;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'activeTab',
  args: {
    activeTab: 1
  }
})`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const y=["Default","ActiveTab"];export{e as ActiveTab,t as Default,y as __namedExportsOrder,v as default};
