import{x as _}from"./lit-html-b5e645d2.js";import{S as a}from"./StoryWrapper-3f0c1834.js";import"./elements-stencil-docs-997710dd.js";const{useEffect:D}=__STORYBOOK_MODULE_PREVIEW_API__,F={title:"Notification/ino-snackbar",component:"ino-snackbar",parameters:{docs:{story:{height:"100px"}}},decorators:[e=>{const m=Array.from(document.getElementsByClassName("snackbar-template")),I=document.getElementById("snackbar-stayVisibleOnHover");console.log("snackbar-stayVisibleOnHover Element",I),console.log("all templates",m);const u=s=>{if(!s.target.parentElement.classList.contains("snackbar-trigger"))return;const d=s.target.parentElement.dataset.templateId;console.log("triggerID",d);const r=m.find(l=>l.id===d);console.log("templateWithId",r),r==null||r.classList.remove("hidden");const P=document.body.getElementsByTagName("ino-snackbar");Array.from(P).some(l=>l.id===d)},p=s=>s.target.remove();return D(()=>(document.addEventListener("click",u),document.addEventListener("hideEl",p),()=>{document.removeEventListener("click",u),document.addEventListener("hideEl",p)})),e()}],render:e=>_`
    <ino-button class="snackbar-trigger" data-template-id="${e.id}"
      >Show Snackbar
    </ino-button>
    <div class="snackbar-template hidden" id="${e.id}">
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
  `,argTypes:{id:{table:{disable:!0}},defaultSlot:{table:{disable:!0}}},args:{actionText:"Some Action",defaultSlot:"This is a message",timeout:-1,type:"info",id:"snackbar-default",stayVisibleOnHover:!1}},t=a({...F}),o=a({...t,docsFromProperty:"actionText",args:{actionText:"Show",id:"snackbar-actionText",defaultSlot:"You received a new message."}}),n=a({...t,docsFromProperty:"type",args:{type:"success",id:"snackbar-type",defaultSlot:"User successfully updated!",actionText:"Undo"}}),i=a({...t,docsFromProperty:"timeout",args:{timeout:5e3,id:"snackbar-timeout",defaultSlot:"This snackbar will disappear in 5s"}}),c=a({...t,docsFromProperty:"stayVisibleOnHover",args:{stayVisibleOnHover:!0,id:"snackbar-stayVisibleOnHover",defaultSlot:"This snackbar stays visible on hover otherwise it will disappear in 5s"}});var b,y,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...InoSnackbarMeta
})`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,f,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'actionText',
  args: {
    actionText: 'Show',
    id: 'snackbar-actionText',
    defaultSlot: 'You received a new message.'
  }
})`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,T,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'type',
  args: {
    type: 'success',
    id: 'snackbar-type',
    defaultSlot: 'User successfully updated!',
    actionText: 'Undo'
  }
})`,...(h=(T=n.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var x,E,O;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'timeout',
  args: {
    timeout: 5000,
    id: 'snackbar-timeout',
    defaultSlot: 'This snackbar will disappear in 5s'
  }
})`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var H,V,w;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'stayVisibleOnHover',
  args: {
    stayVisibleOnHover: true,
    id: 'snackbar-stayVisibleOnHover',
    defaultSlot: 'This snackbar stays visible on hover otherwise it will disappear in 5s'
  }
})`,...(w=(V=c.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const B=["Default","ActionText","Type","Timeout","StayVisibleOnHover"];export{o as ActionText,t as Default,c as StayVisibleOnHover,i as Timeout,n as Type,B as __namedExportsOrder,F as default};
