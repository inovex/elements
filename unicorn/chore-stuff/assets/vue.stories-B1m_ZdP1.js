import"./chunk-HLWAVYOI-OQaCQB1H.js";import{M as p}from"./index-DrzLVTXd.js";import{j as e}from"./jsx-runtime-Ca5Id1qx.js";import{u as r}from"./index-lURItGYq.js";import"./iframe-DkAdRErW.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CE1G-McA.js";import"./index-Ct_tFChD.js";import"./index-DrFu-skq.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Docs/Framework Integration/Vue"}),`
`,e.jsx(n.h1,{id:"integrate-with-vuejs",children:"Integrate with Vue.js"}),`
`,e.jsx(n.p,{children:"Please follow these steps for integration into Vue."}),`
`,e.jsxs(n.h2,{id:"step-1-install-inovexdeelements-vue",children:["Step 1: Install ",e.jsx(n.code,{children:"@inovex.de/elements-vue"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm i @inovex.de/elements-vue
`})}),`
`,e.jsx(n.h2,{id:"step-2-register-the-plugin",children:"Step 2: Register the plugin"}),`
`,e.jsxs(n.p,{children:["Open ",e.jsx(n.code,{children:"src/main.js"}),", import the plugin, and register it with your Vue app:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { createApp } from 'vue';
import { InoElementsVue } from '@inovex.de/elements-vue';
import App from './App.vue';

const app = createApp(App);
app.use(InoElementsVue);
app.mount('#app');
`})}),`
`,e.jsx(n.h2,{id:"step-3-use-the-components",children:"Step 3: Use the components"}),`
`,e.jsx(n.p,{children:"You can now use the components just like any other Vue component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`import { InoButton } from "@inovex.de/elements-vue";

<template>
  <InoButton>Click me</InoButton>
</template>
`})})]})}function i(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const o={title:"Docs/Framework Integration/Vue",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:i};const v=["__page"];export{v as __namedExportsOrder,a as __page,o as default};
