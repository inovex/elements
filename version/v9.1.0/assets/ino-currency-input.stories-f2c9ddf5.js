import{x as f}from"./lit-html-b5e645d2.js";import{S as y}from"./StoryWrapper-b39d0c39.js";import"./elements-stencil-docs-a0365730.js";const{useEffect:g}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Input/ino-currency-input",component:"ino-currency-input",decorators:[n=>(g(()=>{const o=e=>e.target.setAttribute("value",e.detail),a=document.querySelectorAll("ino-currency-input");return a.forEach(e=>e.addEventListener("valueChange",o)),()=>a.forEach(e=>e.removeEventListener("valueChange",o))}),n())],parameters:{actions:{handles:["valueChange .customizable-input"]},docs:{toc:!1}},render:n=>f`
    <ino-currency-input
      value="${n.value}"
      currency-locale="${n.currencyLocale}"
    >
      <ino-input
        class="customizable-input"
        id="customizable-input"
        label="Default Input"
        outline="true"
        unit="€"
      >
      </ino-input>
    </ino-currency-input>
  `,args:{value:"15.00",currencyLocale:"de-DE"},argTypes:{currencyLocale:{control:"radio",options:["de-DE","en-US"]},value:{control:"number"}}},t=y({...v}),r=y({...t,args:{currencyLocale:"en-EN"}});var c,u,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`Story({
  ...InoCurrencyInputMeta
})`,...(s=(u=t.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var l,i,p,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`Story({
  ...Default,
  args: {
    currencyLocale: 'en-EN'
  }
})`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source},description:{story:`A supported locale for currency number formatting. If not given, it uses the global config.
See https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};const _=["Default","Locales"];export{t as Default,r as Locales,_ as __namedExportsOrder,v as default};
