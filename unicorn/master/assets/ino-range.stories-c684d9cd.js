import{x as h}from"./lit-html-b5e645d2.js";import{S as o}from"./StoryWrapper-3f0c1834.js";import"./elements-stencil-docs-997710dd.js";const{useEffect:D}=__STORYBOOK_MODULE_PREVIEW_API__,P={title:"Input/ino-range",component:"ino-range",decorators:[r=>(D(()=>{const d=e=>e.target.value=e.detail,c=e=>e.target.valueStart=e.detail,u=e=>e.target.valueEnd=e.detail,l=document.querySelectorAll("ino-range");return l.forEach(e=>{e.addEventListener("valueChange",d),e.addEventListener("valueStartChange",c),e.addEventListener("valueEndChange",u)}),()=>l.forEach(e=>{e.removeEventListener("valueChange",d),e.removeEventListener("valueStartChange",c),e.removeEventListener("valueEndChange",u)})}),r())],render:r=>h`
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
  `,args:{disabled:!1,discrete:!1,min:0,max:100,value:50,valueStart:30,valueEnd:70,name:"",markers:!1,step:1,ranged:!1}},a=o({...P}),t=o({...a,docsFromProperty:"discrete",args:{discrete:!0}}),n=o({...a,docsFromProperty:"markers",args:{markers:!0,discrete:!0}}),s=o({...a,docsFromProperty:"ranged",args:{ranged:!0,valueStart:30,valueEnd:70,discrete:!0}});var m,i,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...InoRangeMeta
})`,...(v=(i=a.parameters)==null?void 0:i.docs)==null?void 0:v.source}}};var p,g,E;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'discrete',
  args: {
    discrete: true
  }
})`,...(E=(g=t.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var S,f,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'markers',
  args: {
    markers: true,
    discrete: true
  }
})`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var $,k,_;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'ranged',
  args: {
    ranged: true,
    valueStart: 30,
    valueEnd: 70,
    discrete: true
  }
})`,...(_=(k=s.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const C=["Default","Discrete","Markers","Ranged"];export{a as Default,t as Discrete,n as Markers,s as Ranged,C as __namedExportsOrder,P as default};
