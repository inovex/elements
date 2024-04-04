import{x as P}from"./lit-html-f27292d4.js";import{S as t}from"./StoryWrapper-c5407b69.js";import{i as F}from"./elements-3c5b3b1f.js";import"./elements-stencil-docs-6a7eba8c.js";const{useEffect:k}=__STORYBOOK_MODULE_PREVIEW_API__,d=function(e){const o=e.target;o.tagName.toLowerCase()==="ino-nav-drawer"&&o.setAttribute("open",!!e.detail)},a=e=>{e.preventDefault(),e.stopPropagation();const o=e.target.parentElement;if(o.className.includes("toggle-nav")){const r=o.closest("ino-nav-drawer");r.open=!r.open;return}if(o.className.includes("nav-drawer-modal")){o.open=!o.open;return}if(o.tagName.toLowerCase()==="ino-list-item"){const l=o.closest("ino-nav-drawer").querySelectorAll("ino-list-item");l&&l.forEach(N=>{N.activated=!1}),o.activated=!0;return}},A={title:"Structure/ino-nav-drawer",component:"ino-nav-drawer",parameters:{actions:{handles:["openChange .customizable-drawer","click .toggle-nav","clickEl ino-nav-item"]}},decorators:[e=>(k(()=>(document.addEventListener("openChange",d),document.addEventListener("click",a),document.addEventListener("clickEl",a),()=>{document.removeEventListener("openChange",d),document.removeEventListener("click",a),document.removeEventListener("clickEl",a)})),e())],render:e=>{var o,r;return P`
    <div class="story-nav-drawer__default">
      <ino-nav-drawer
        ?open=${e.open}
        anchor="${e.anchor}"
        variant="${e.variant}"
        class="customizable-drawer"
      >
        <div slot="header">
          <ino-img
            slot="logo"
            src=${F}
            width="22"
            height="31"
            alt="inovex Elements Logo"
          ></ino-img>
          <p>inovex Elements</p>
        </div>
        <ino-list
          role="menubar"
          slot="content"
          aria-label=${(o=e.a11yLabels)==null?void 0:o.content}
        >
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
        <ino-list
          role="menubar"
          slot="footer"
          aria-label=${(r=e.a11yLabels)==null?void 0:r.footer}
        >
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
  `},argTypes:{variant:{control:{type:"select",options:["docked","dismissible","modal","mobile"]}}},args:{open:!0,anchor:"left",variant:"docked",a11yLabels:{content:"Main Navigation",footer:"Footer Navigation",toggleBtn:"Toggle NAvigation"}}},n=t({...A}),i=t({...n,docsFromProperty:"anchor",args:{anchor:"right"}}),s=t({...n,docsFromProperty:"variant",args:{variant:"modal",open:!1}}),c=t({...n,docsFromProperty:"variant",args:{variant:"dismissible"}}),m=t({...n,docsFromProperty:"variant",args:{variant:"mobile",open:!1}});var p,v,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`Story({
  ...InoNavDrawerMeta
})`,...(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var g,f,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'anchor',
  args: {
    anchor: 'right'
  }
})`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,y,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'modal',
    open: false
  }
})`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var E,D,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'dismissible'
  }
})`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var L,x,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'mobile',
    open: false
  }
})`,...(_=(x=m.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const O=["Default","AnchorRight","Modal","Dismissible","Mobile"];export{i as AnchorRight,n as Default,c as Dismissible,m as Mobile,s as Modal,O as __namedExportsOrder,A as default};
