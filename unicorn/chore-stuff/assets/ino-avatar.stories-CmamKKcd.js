import{b as m}from"./lit-html-IUDnlW1J.js";import{S as e}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const g=""+new URL("avatar-jiecYxVn.jpg",import.meta.url).href,{useEffect:y}=__STORYBOOK_MODULE_PREVIEW_API__,S={title:"Graphic/ino-avatar",component:"ino-avatar",decorators:[a=>(y(()=>{const p=t=>{const n=t.target,h=n.closest("div")?.querySelector("ino-avatar");n.checked=t.detail,h.setAttribute("loading",n.checked),n.indeterminate&&(n.indeterminate=!1)},u=document.querySelectorAll("ino-checkbox");return u.forEach(t=>t.addEventListener("checkedChange",p)),()=>u.forEach(t=>t.removeEventListener("checkedChange",p))}),a())],render:a=>m`
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
  `,args:{initials:"JD",interactive:!1,variant:"solid",src:g,colorSecondary:!1,a11yLabel:"User avatar",alt:"Jane Doe",loading:void 0}},r=e({...S}),i=e({...r,docsFromProperty:"interactive",args:{interactive:!0}}),c=e({...r,docsFromProperty:"colorSecondary",args:{colorSecondary:!0}}),s=e({...r,docsFromProperty:"variant",args:{variant:"dashed"}}),d=e({...r,docsFromProperty:"variant",args:{variant:"dashed",interactive:!0}}),l=e({...r,render:()=>m` <ino-avatar initials="JD" interactive="false" variant="solid" src=""> </ino-avatar> `}),o=e({...r,args:{initials:"JD",interactive:!1,variant:"solid",src:g},render:a=>m`
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
  `});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...InoAvatarMeta
})`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'interactive',
  args: {
    interactive: true
  }
})`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'colorSecondary',
  args: {
    colorSecondary: true
  }
})`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'dashed'
  }
})`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'dashed',
    interactive: true
  }
})`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\` <ino-avatar initials="JD" interactive="false" variant="solid" src=""> </ino-avatar> \`
})`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
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
})`,...o.parameters?.docs?.source},description:{story:"Add icons to the ino-avatar element by adding a `slot` and an `icon`.",...o.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`Story({
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
})`,...v.parameters?.docs?.source}}};const b=["Default","Interactive","ColorSecondary","VariantDashed","VariantDashedInteractive","Initials","WithIcon","LoadingAvatar"];export{c as ColorSecondary,r as Default,l as Initials,i as Interactive,v as LoadingAvatar,s as VariantDashed,d as VariantDashedInteractive,o as WithIcon,b as __namedExportsOrder,S as default};
