import{b as m}from"./lit-html-odaN0r1L.js";import{S as e}from"./StoryWrapper-CB660Xf5.js";import"./elements-stencil-docs-CE9fhhj4.js";const Y=""+new URL("avatar-jiecYxVn.jpg",import.meta.url).href,{useEffect:B}=__STORYBOOK_MODULE_PREVIEW_API__,G={title:"Graphic/ino-avatar",component:"ino-avatar",decorators:[a=>(B(()=>{const p=t=>{const n=t.target,u=n.closest("div"),w=u==null?void 0:u.querySelector("ino-avatar");n.checked=t.detail,w.setAttribute("loading",n.checked),n.indeterminate&&(n.indeterminate=!1)},g=document.querySelectorAll("ino-checkbox");return g.forEach(t=>t.addEventListener("checkedChange",p)),()=>g.forEach(t=>t.removeEventListener("checkedChange",p))}),a())],render:a=>m`
    <ino-avatar
      initials="${a.initials}"
      interactive="${a.interactive}"
      variant="${a.variant}"
      src="${a.src}"
      color-secondary="${a.colorSecondary}"
      a11y-label="${a.a11yLabel}"
      alt="${a.alt}"
      .loading="${a.loading}"
    >
    </ino-avatar>
  `,args:{initials:"JD",interactive:!1,variant:"solid",src:Y,colorSecondary:!1,a11yLabel:"User avatar",alt:"Jane Doe",loading:void 0}},r=e({...G}),i=e({...r,docsFromProperty:"interactive",args:{interactive:!0}}),c=e({...r,docsFromProperty:"colorSecondary",args:{colorSecondary:!0}}),s=e({...r,docsFromProperty:"variant",args:{variant:"dashed"}}),d=e({...r,docsFromProperty:"variant",args:{variant:"dashed",interactive:!0}}),l=e({...r,render:()=>m` <ino-avatar initials="JD" interactive="false" variant="solid" src=""> </ino-avatar> `}),o=e({...r,args:{initials:"JD",interactive:!1,variant:"solid",src:Y},render:a=>m`
    <ino-avatar
      initials="${a.initials}"
      interactive="${a.interactive}"
      variant="${a.variant}"
      src="${a.src}"
    >
      <ino-icon slot="icon-slot" style="--ino-icon-color: #6CF070;" icon="checkmark"></ino-icon>
    </ino-avatar>
  `}),v=e({...r,docsFromProperty:"loading",render:a=>m`
    <div class="avatar-loading-container">
      <ino-avatar
        initials="${a.initials}"
        interactive="${a.interactive}"
        variant="${a.variant}"
        loading="true"
        src="${a.src}"
      >
      </ino-avatar>
      <ino-checkbox checked="true" selection="true" name="toggle-loading-checkbox">Loading</ino-checkbox>
    </div>
  `});var h,y,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`Story({
  ...InoAvatarMeta
})`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,$,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'interactive',
  args: {
    interactive: true
  }
})`,...(k=($=i.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var D,b,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'colorSecondary',
  args: {
    colorSecondary: true
  }
})`,...(I=(b=c.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var x,F,P;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'dashed'
  }
})`,...(P=(F=s.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var L,E,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'dashed',
    interactive: true
  }
})`,...(_=(E=d.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var A,C,J;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\` <ino-avatar initials="JD" interactive="false" variant="solid" src=""> </ino-avatar> \`
})`,...(J=(C=l.parameters)==null?void 0:C.docs)==null?void 0:J.source}}};var V,O,M,R,U;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`Story({
  ...Default,
  args: {
    initials: 'JD',
    interactive: false,
    variant: 'solid',
    src: avatarImg
  },
  render: args => html\`
    <ino-avatar
      initials="\${args.initials}"
      interactive="\${args.interactive}"
      variant="\${args.variant}"
      src="\${args.src}"
    >
      <ino-icon slot="icon-slot" style="--ino-icon-color: #6CF070;" icon="checkmark"></ino-icon>
    </ino-avatar>
  \`
})`,...(M=(O=o.parameters)==null?void 0:O.docs)==null?void 0:M.source},description:{story:"Add icons to the ino-avatar element by adding a `slot` and an `icon`.",...(U=(R=o.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};var W,j,q;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'loading',
  render: args => html\`
    <div class="avatar-loading-container">
      <ino-avatar
        initials="\${args.initials}"
        interactive="\${args.interactive}"
        variant="\${args.variant}"
        loading="true"
        src="\${args.src}"
      >
      </ino-avatar>
      <ino-checkbox checked="true" selection="true" name="toggle-loading-checkbox">Loading</ino-checkbox>
    </div>
  \`
})`,...(q=(j=v.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const H=["Default","Interactive","ColorSecondary","VariantDashed","VariantDashedInteractive","Initials","WithIcon","LoadingAvatar"];export{c as ColorSecondary,r as Default,l as Initials,i as Interactive,v as LoadingAvatar,s as VariantDashed,d as VariantDashedInteractive,o as WithIcon,H as __namedExportsOrder,G as default};
