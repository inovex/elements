import"./chunk-HLWAVYOI-OQaCQB1H.js";import{M as a}from"./index-DrzLVTXd.js";import{j as e}from"./jsx-runtime-Ca5Id1qx.js";import{u as r}from"./index-lURItGYq.js";import"./iframe-DkAdRErW.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CE1G-McA.js";import"./index-Ct_tFChD.js";import"./index-DrFu-skq.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Framework Integration/React"}),`
`,e.jsx(n.h1,{id:"integrate-with-react",children:"Integrate with React"}),`
`,e.jsx(n.p,{children:"Please follow these steps for integration into React."}),`
`,e.jsxs(n.h2,{id:"step-1-install-inovexdeelements-react",children:["Step 1: Install ",e.jsx(n.code,{children:"@inovex.de/elements-react"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm i @inovex.de/elements-react
`})}),`
`,e.jsx(n.h2,{id:"step-2-use-the-components",children:"Step 2: Use the components"}),`
`,e.jsx(n.p,{children:"You can now use the components just like any other React component. Import the components you want to use:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { InoButton, InoInput } from '@inovex.de/elements-react';

function MyComponent() {
  return (
    <div>
      <InoInput label="email" outline />
      <InoInput label="password" outline />
      <InoButton type="submit">Sign In</InoButton>
    </div>
  );}
`})})]})}function i(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const o={title:"Docs/Framework Integration/React",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:i};const I=["__page"];export{I as __namedExportsOrder,c as __page,o as default};
