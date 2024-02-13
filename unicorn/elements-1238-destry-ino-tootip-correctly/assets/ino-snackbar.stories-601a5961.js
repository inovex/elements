import{x as m}from"./lit-html-b5e645d2.js";import{S as n}from"./StoryWrapper-91a22e61.js";import{i as M}from"./elements-3c5b3b1f.js";import"./elements-stencil-docs-7538891b.js";const{useEffect:Y}=__STORYBOOK_MODULE_PREVIEW_API__,B={title:"Notification/ino-snackbar",component:"ino-snackbar",parameters:{docs:{story:{height:"100px"}}},decorators:[e=>(Y(()=>{const u=o=>{const s=o.target.closest(".snackbar-trigger");if(s){const y=s.getAttribute("data-template-id"),S=document.getElementById(y);S&&S.classList.remove("hidden")}},p=o=>{const s=o.target.closest("ino-snackbar");s&&s.parentElement.classList.add("hidden")},b=document.querySelectorAll(".snackbar-trigger");return b.forEach(o=>o.addEventListener("click",u)),document.addEventListener("hideEl",p),()=>{b.forEach(o=>o.removeEventListener("click",u)),document.removeEventListener("hideEl",p)}}),e())],render:e=>m`
    <ino-button class="snackbar-trigger" data-template-id="${e.id}">
      Show Snackbar
    </ino-button>
    <div class="hidden" id="${e.id}">
      <ino-snackbar
        id="${e.id}"
        action-text="${e.actionText}"
        timeout="${e.timeout}"
        type="${e.type}"
        stay-visible-on-hover="${e.stayVisibleOnHover}"
      >
        ${e.defaultSlot}
      </ino-snackbar>
    </div>
  `,argTypes:{id:{table:{disable:!0}},defaultSlot:{table:{disable:!0}}},args:{actionText:"Some Action",defaultSlot:"This is a message",timeout:-1,type:"info",id:"snackbar-default",stayVisibleOnHover:!1}},t=n({...B}),r=n({...t,docsFromProperty:"actionText",args:{actionText:"Show",id:"snackbar-actionText",defaultSlot:"You received a new message."}}),i=n({...t,docsFromProperty:"type",args:{type:"success",id:"snackbar-type",defaultSlot:"User successfully updated!",actionText:"Undo"}}),c=n({...t,docsFromProperty:"timeout",args:{timeout:5e3,id:"snackbar-timeout",defaultSlot:"This snackbar will disappear in 5s"}}),l=n({...t,docsFromProperty:"stayVisibleOnHover",args:{stayVisibleOnHover:!0,id:"snackbar-stayVisibleOnHover",defaultSlot:"This snackbar stays visible on hover otherwise it will disappear in 5s"}}),a={...t,args:{id:"snackbar-customIcon",actionText:"Some Action",defaultSlot:m`
      <ino-icon slot="icon-slot" icon="star"></ino-icon>
      This snackbar uses a custom ino-icon.
    `}},d={...t,args:{id:"snackbar-customElements",actionText:"Some Action",defaultSlot:m`
      <img
        slot="icon-slot"
        src=${M}
        alt="Custom Icon"
        style="width: 20px; height: 20px;"
      />
      This snackbar uses a custom img.
    `}};var k,f,h;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`Story({
  ...InoSnackbarMeta
})`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,T,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'actionText',
  args: {
    actionText: 'Show',
    id: 'snackbar-actionText',
    defaultSlot: 'You received a new message.'
  }
})`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var x,E,O;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'type',
  args: {
    type: 'success',
    id: 'snackbar-type',
    defaultSlot: 'User successfully updated!',
    actionText: 'Undo'
  }
})`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var w,I,H;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'timeout',
  args: {
    timeout: 5000,
    id: 'snackbar-timeout',
    defaultSlot: 'This snackbar will disappear in 5s'
  }
})`,...(H=(I=c.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var A,V,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'stayVisibleOnHover',
  args: {
    stayVisibleOnHover: true,
    id: 'snackbar-stayVisibleOnHover',
    defaultSlot: 'This snackbar stays visible on hover otherwise it will disappear in 5s'
  }
})`,...(P=(V=l.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var $,D,L,_,F;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Default,
  args: {
    id: 'snackbar-customIcon',
    actionText: 'Some Action',
    defaultSlot: html\`
      <ino-icon slot="icon-slot" icon="star"></ino-icon>
      This snackbar uses a custom ino-icon.
    \`
  }
}`,...(L=(D=a.parameters)==null?void 0:D.docs)==null?void 0:L.source},description:{story:'To add a custom icon inside the `ino-snackbar` element, follow these steps:\n1. Inside the `ino-snackbar` element, insert an `ino-icon` or a similar element (e.g. `img`).\n2. Assign a `slot` attribute to the custom element and set it to `"icon-slot"`.\n\nExample usage of the `ino-snackbar` element with a custom ino-icon:',...(F=(_=a.parameters)==null?void 0:_.docs)==null?void 0:F.description}}};var C,U,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Default,
  args: {
    id: 'snackbar-customElements',
    actionText: 'Some Action',
    defaultSlot: html\`
      <img
        slot="icon-slot"
        src=\${inovexElementsLogo}
        alt="Custom Icon"
        style="width: 20px; height: 20px;"
      />
      This snackbar uses a custom img.
    \`
  }
}`,...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const j=["Default","ActionText","Type","Timeout","StayVisibleOnHover","CustomIcon","CustomElements"];export{r as ActionText,d as CustomElements,a as CustomIcon,t as Default,l as StayVisibleOnHover,c as Timeout,i as Type,j as __namedExportsOrder,B as default};
