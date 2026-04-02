import{b as m}from"./lit-html-IUDnlW1J.js";import{S as o}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:i}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Input/ino-range",component:"ino-range",decorators:[r=>(i(()=>{const d=e=>e.target.value=e.detail,c=e=>e.target.valueStart=e.detail,u=e=>e.target.valueEnd=e.detail,l=document.querySelectorAll("ino-range");return l.forEach(e=>{e.addEventListener("valueChange",d),e.addEventListener("valueStartChange",c),e.addEventListener("valueEndChange",u)}),()=>l.forEach(e=>{e.removeEventListener("valueChange",d),e.removeEventListener("valueStartChange",c),e.removeEventListener("valueEndChange",u)})}),r())],render:r=>m`
    <ino-range
      class="customizable-range"
      disabled="${r.disabled}"
      min="${r.min}"
      max="${r.max}"
      name="${r.name}"
      discrete="${r.discrete}"
      markers="${r.markers}"
      value="${r.value}"
      step="${r.step}"
      ranged="${r.ranged}"
      value-start="${r.valueStart}"
      value-end="${r.valueEnd}"
    >
    </ino-range>
  `,args:{disabled:!1,discrete:!1,min:0,max:100,value:50,valueStart:30,valueEnd:70,name:"",markers:!1,step:1,ranged:!1}},a=o({...v}),t=o({...a,docsFromProperty:"discrete",args:{discrete:!0}}),n=o({...a,docsFromProperty:"markers",args:{markers:!0,discrete:!0}}),s=o({...a,docsFromProperty:"ranged",args:{ranged:!0,valueStart:30,valueEnd:70,discrete:!0}});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...InoRangeMeta
})`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'discrete',
  args: {
    discrete: true
  }
})`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'markers',
  args: {
    markers: true,
    discrete: true
  }
})`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'ranged',
  args: {
    ranged: true,
    valueStart: 30,
    valueEnd: 70,
    discrete: true
  }
})`,...s.parameters?.docs?.source}}};const S=["Default","Discrete","Markers","Ranged"];export{a as Default,t as Discrete,n as Markers,s as Ranged,S as __namedExportsOrder,v as default};
