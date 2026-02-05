import{b as U}from"./lit-html-odaN0r1L.js";import{S as t}from"./StoryWrapper-pH0BiVjf.js";import"./elements-stencil-docs-CC_eBxG8.js";const{useEffect:V}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Structure/ino-control-item",component:"ino-control-item",decorators:[e=>(V(()=>{const p=u=>{const l=u.target;l.checked=u.detail,l.indeterminate&&(l.indeterminate=!1)};return document.addEventListener("checkedChange",p),()=>document.removeEventListener("checkedChange",p)}),e())],render:e=>U`
    <ino-list two-lines="${e.secondaryText||!1}">
      <ino-control-item
        activated="${e.activated}"
        checked="${e.checked}"
        disabled="${e.disabled}"
        indeterminate="${e.indeterminate}"
        role="${e.role}"
        secondary-text="${e.secondaryText}"
        selected="${e.selected}"
        text="${e.text}"
        trailing="${e.trailing}"
      >
      </ino-control-item>
    </ino-list>
  `,args:{activated:!1,checked:!1,disabled:!1,indeterminate:!1,role:"checkbox",secondaryText:"",selected:!1,text:"Text",trailing:!1}},r=t({...W}),o=t({...r,docsFromProperty:"role",args:{role:"radio"}}),a=t({...r,docsFromProperty:"checked",args:{checked:!0}}),s=t({...r,docsFromProperty:"indeterminate",args:{indeterminate:!0}}),c=t({...r,docsFromProperty:"activated",args:{activated:!0}}),n=t({...r,docsFromProperty:"selected",args:{selected:!0}}),d=t({...r,docsFromProperty:"secondaryText",args:{secondaryText:"Some Secondary Text"}}),i=t({...r,docsFromProperty:"disabled",args:{disabled:!0}}),m=t({...r,docsFromProperty:"trailing",args:{trailing:!0}});var y,g,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`Story({
  ...InoControlItemMeta
})`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,x,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'role',
  args: {
    role: 'radio'
  }
})`,...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var h,F,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...(T=(F=a.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var k,D,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true
  }
})`,...(v=(D=s.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var b,$,I;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'activated',
  args: {
    activated: true
  }
})`,...(I=($=c.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var _,C,E;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'selected',
  args: {
    selected: true
  }
})`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var O,R,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'secondaryText',
  args: {
    secondaryText: 'Some Secondary Text'
  }
})`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var L,M,w;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(w=(M=i.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var B,H,K;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'trailing',
  args: {
    trailing: true
  }
})`,...(K=(H=m.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const z=["Default","Roles","Checked","Indeterminate","Activated","Selected","SecondaryText","Disabled","Trailing"];export{c as Activated,a as Checked,r as Default,i as Disabled,s as Indeterminate,o as Roles,d as SecondaryText,n as Selected,m as Trailing,z as __namedExportsOrder,W as default};
