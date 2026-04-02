import{b as u}from"./lit-html-IUDnlW1J.js";import{S as c}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:s}=__STORYBOOK_MODULE_PREVIEW_API__,l={title:"Input/ino-currency-input",component:"ino-currency-input",decorators:[n=>(s(()=>{const o=e=>e.target.setAttribute("value",e.detail),a=document.querySelectorAll("ino-currency-input");return a.forEach(e=>e.addEventListener("valueChange",o)),()=>a.forEach(e=>e.removeEventListener("valueChange",o))}),n())],parameters:{actions:{handles:["valueChange .customizable-input"]},docs:{toc:!1}},render:n=>u`
    <ino-currency-input value="${n.value}" currency-locale="${n.currencyLocale}">
      <ino-input class="customizable-input" id="customizable-input" label="Default Input" outline="true" unit="€">
      </ino-input>
    </ino-currency-input>
  `,args:{value:"15.00",currencyLocale:"de-DE"},argTypes:{currencyLocale:{control:"radio",options:["de-DE","en-US"]},value:{control:"number"}}},t=c({...l}),r=c({...t,args:{currencyLocale:"en-EN"}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...InoCurrencyInputMeta
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  args: {
    currencyLocale: 'en-EN'
  }
})`,...r.parameters?.docs?.source},description:{story:`A supported locale for currency number formatting. If not given, it uses the global config.
See https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument`,...r.parameters?.docs?.description}}};const m=["Default","Locales"];export{t as Default,r as Locales,m as __namedExportsOrder,l as default};
