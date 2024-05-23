import{x as u}from"./lit-html-D-ZEPr28.js";import{S as n}from"./StoryWrapper-CsUqRYgJ.js";import{i as Y}from"./elements-zjO0KHcQ.js";import"./elements-stencil-docs-D2SOUcOF.js";const{useEffect:q}=__STORYBOOK_MODULE_PREVIEW_API__,R={title:"Notification/ino-snackbar",component:"ino-snackbar",parameters:{docs:{story:{height:"100px"}}},decorators:[e=>(q(()=>{const d=t=>{const s=t.target.closest(".snackbar-trigger");if(s){const M=s.getAttribute("data-template-id"),f=document.getElementById(M);f&&f.setAttribute("open","true")}},p=t=>{const s=t.target;s&&s.setAttribute("open","false")},b=document.querySelectorAll(".snackbar-trigger");b.forEach(t=>t.addEventListener("click",d));const y=document.querySelectorAll("ino-snackbar");return y.forEach(t=>t.addEventListener("hideEl",p)),()=>{b.forEach(t=>t.removeEventListener("click",d)),y.forEach(t=>t.removeEventListener("hideEl",p))}}),e())],render:e=>u`
    <ino-button class="snackbar-trigger" data-template-id="${e.id}"> Show Snackbar </ino-button>
    <ino-snackbar
      id="${e.id}"
      open="${e.open}"
      action-text="${e.actionText}"
      timeout="${e.timeout}"
      type="${e.type}"
      stay-visible-on-hover="${e.stayVisibleOnHover}"
      a11yLabels="
        ${e.a11yLabels}"
    >
      ${e.defaultSlot}
    </ino-snackbar>
  `,argTypes:{id:{table:{disable:!0}},defaultSlot:{table:{disable:!0}}},args:{type:"info",open:!1,actionText:"Some Action",defaultSlot:"This is a message",timeout:-1,id:"snackbar-default",stayVisibleOnHover:!1,a11yLabels:{snackbarLabel:"Information",closeLabel:"Close Button"}}},o=n({...R}),r=n({...o,docsFromProperty:"actionText",args:{actionText:"Show",id:"snackbar-actionText",defaultSlot:"You received a new message."}}),i=n({...o,docsFromProperty:"type",args:{type:"success",id:"snackbar-type",defaultSlot:"User successfully updated!",actionText:"Undo"}}),c=n({...o,docsFromProperty:"timeout",args:{timeout:5e3,id:"snackbar-timeout",defaultSlot:"This snackbar will disappear in 5s"}}),l=n({...o,docsFromProperty:"stayVisibleOnHover",args:{stayVisibleOnHover:!0,id:"snackbar-stayVisibleOnHover",timeout:5e3,defaultSlot:"This snackbar stays visible on hover otherwise it will disappear in 5s"}}),a={...o,args:{id:"snackbar-customIcon",actionText:"Some Action",defaultSlot:u`
      <ino-icon slot="icon-slot" icon="star"></ino-icon>
      This snackbar uses a custom ino-icon.
    `}},m={...o,args:{id:"snackbar-customElements",actionText:"Some Action",defaultSlot:u`
      <img slot="icon-slot" src=${Y} alt="Custom Icon" style="width: 20px; height: 20px;" />
      This snackbar uses a custom img.
    `}};var S,k,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`Story({
  ...InoSnackbarMeta
})`,...(h=(k=o.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var g,T,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'actionText',
  args: {
    actionText: 'Show',
    id: 'snackbar-actionText',
    defaultSlot: 'You received a new message.'
  }
})`,...(x=(T=r.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var v,E,O;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'type',
  args: {
    type: 'success',
    id: 'snackbar-type',
    defaultSlot: 'User successfully updated!',
    actionText: 'Undo'
  }
})`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var w,A,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'timeout',
  args: {
    timeout: 5000,
    id: 'snackbar-timeout',
    defaultSlot: 'This snackbar will disappear in 5s'
  }
})`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var L,V,$;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'stayVisibleOnHover',
  args: {
    stayVisibleOnHover: true,
    id: 'snackbar-stayVisibleOnHover',
    timeout: 5000,
    defaultSlot: 'This snackbar stays visible on hover otherwise it will disappear in 5s'
  }
})`,...($=(V=l.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var H,P,D,_,C;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Default,
  args: {
    id: 'snackbar-customIcon',
    actionText: 'Some Action',
    defaultSlot: html\`
      <ino-icon slot="icon-slot" icon="star"></ino-icon>
      This snackbar uses a custom ino-icon.
    \`
  }
}`,...(D=(P=a.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:'To add a custom icon inside the `ino-snackbar` element, follow these steps:\n1. Inside the `ino-snackbar` element, insert an `ino-icon` or a similar element (e.g. `img`).\n2. Assign a `slot` attribute to the custom element and set it to `"icon-slot"`.\n\nExample usage of the `ino-snackbar` element with a custom ino-icon:',...(C=(_=a.parameters)==null?void 0:_.docs)==null?void 0:C.description}}};var F,U,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Default,
  args: {
    id: 'snackbar-customElements',
    actionText: 'Some Action',
    defaultSlot: html\`
      <img slot="icon-slot" src=\${inovexElementsLogo} alt="Custom Icon" style="width: 20px; height: 20px;" />
      This snackbar uses a custom img.
    \`
  }
}`,...(B=(U=m.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const z=["Default","ActionText","Type","Timeout","StayVisibleOnHover","CustomIcon","CustomElements"];export{r as ActionText,m as CustomElements,a as CustomIcon,o as Default,l as StayVisibleOnHover,c as Timeout,i as Type,z as __namedExportsOrder,R as default};
