import{b as v}from"./lit-html-IUDnlW1J.js";import{S as r}from"./StoryWrapper-Bs3Y9Jfd.js";import{i as u}from"./elements-zjO0KHcQ.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:g}=__STORYBOOK_MODULE_PREVIEW_API__,d=function(e){const o=e.target;o.tagName.toLowerCase()==="ino-nav-drawer"&&o.setAttribute("open",!!e.detail)},t=e=>{e.preventDefault(),e.stopPropagation();const o=e.target.parentElement;if(o.className.includes("toggle-nav")){const m=o.closest("ino-nav-drawer");m.open=!m.open;return}if(o.className.includes("nav-drawer-modal")){o.open=!o.open;return}if(o.tagName.toLowerCase()==="ino-list-item"){const l=o.closest("ino-nav-drawer").querySelectorAll("ino-list-item");l&&l.forEach(p=>{p.activated=!1}),o.activated=!0;return}},f={title:"Structure/ino-nav-drawer",component:"ino-nav-drawer",parameters:{actions:{handles:["openChange .customizable-drawer","click .toggle-nav","clickEl ino-nav-item"]}},decorators:[e=>(g(()=>(document.addEventListener("openChange",d),document.addEventListener("click",t),document.addEventListener("clickEl",t),()=>{document.removeEventListener("openChange",d),document.removeEventListener("click",t),document.removeEventListener("clickEl",t)})),e())],render:e=>v`
    <div class="story-nav-drawer__default">
      <ino-nav-drawer ?open=${e.open} anchor="${e.anchor}" variant="${e.variant}" class="customizable-drawer">
        <div slot="header">
          <ino-img slot="logo" src=${u} width="22" height="31" alt="inovex Elements Logo"></ino-img>
          <p>inovex Elements</p>
        </div>
        <ino-list role="menubar" slot="content" aria-label=${e.a11yLabels?.content}>
          <ino-nav-item role="menuitem" text="Home" activated>
            <ino-icon icon="home"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="Discover">
            <ino-icon icon="discover"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="First Steps">
            <ino-icon icon="first_steps"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="Library">
            <ino-icon icon="library"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="About Us">
            <ino-icon icon="employee"></ino-icon>
          </ino-nav-item>
        </ino-list>
        <ino-list role="menubar" slot="footer" aria-label=${e.a11yLabels?.footer}>
          <ino-nav-item role="menuitem" text="Contact">
            <ino-icon icon="message"></ino-icon>
          </ino-nav-item>
        </ino-list>

        <main slot="app" class="main-content">
          <br />
          <br />
          Your App goes here 🤘
          <br /><br />
        </main>
      </ino-nav-drawer>
    </div>
  `,argTypes:{variant:{control:{type:"select",options:["docked","dismissible","modal","mobile"]}}},args:{open:!0,anchor:"left",variant:"docked",a11yLabels:{content:"Main Navigation",footer:"Footer Navigation",toggleBtn:"Toggle NAvigation"}}},n=r({...f}),a=r({...n,docsFromProperty:"anchor",args:{anchor:"right"}}),i=r({...n,docsFromProperty:"variant",args:{variant:"modal",open:!1}}),s=r({...n,docsFromProperty:"variant",args:{variant:"dismissible"}}),c=r({...n,docsFromProperty:"variant",args:{variant:"mobile",open:!1}});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...InoNavDrawerMeta
})`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'anchor',
  args: {
    anchor: 'right'
  }
})`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'modal',
    open: false
  }
})`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'dismissible'
  }
})`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'mobile',
    open: false
  }
})`,...c.parameters?.docs?.source}}};const E=["Default","AnchorRight","Modal","Dismissible","Mobile"];export{a as AnchorRight,n as Default,s as Dismissible,c as Mobile,i as Modal,E as __namedExportsOrder,f as default};
