import"./chunk-HLWAVYOI-33474cf1.js";import{M as i}from"./index-cdfeeac4.js";import{j as e}from"./jsx-runtime-c7a6e5f1.js";import{u as r}from"./index-1f0487e7.js";import"./iframe-d46f4931.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";function s(n){const o=Object.assign({h1:"h1",p:"p",code:"code",ol:"ol",li:"li",h2:"h2",ul:"ul",strong:"strong",h3:"h3",a:"a",pre:"pre"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Contributing/Storybook"}),`
`,e.jsx(o.h1,{id:"storybook",children:"Storybook"}),`
`,e.jsxs(o.p,{children:["Storybook demonstrates the usage and documentation of our components. The storybook itself is a separate package ",e.jsx(o.code,{children:"packages/storybook"})," having the actual stories in ",e.jsx(o.code,{children:"src/stories"}),"."]}),`
`,e.jsxs(o.p,{children:["Every time we create a new component, we create a new folder ",e.jsx(o.code,{children:"src/stories/<compontent-name>"})," having at least the following files:"]}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"<compontent-name>.stories.ts"})," containing the stories."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"<compontent-name>.stories.mdx"})," integrating the documentation (component README.md)."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"<compontent-name>.scss"})," containing the styling."]}),`
`]}),`
`,e.jsx(o.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(o.p,{children:"Each component has ..."}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["... a first story named ",e.jsx(o.strong,{children:"Playground"})," having a customizable instance before any other usage examples (see below)."]}),`
`,e.jsx(o.li,{children:"... some more specific stories showing full capacities of the component."}),`
`]}),`
`,e.jsx(o.h3,{id:"playground-story",children:"Playground Story"}),`
`,e.jsx(o.p,{children:`The Playground Story allows the user to see (and interact with) all attributes, properties, methods, events and slots of a component.
This allows users to explore all possible variants of an element. Playground, in this case, means that users can pass any possible value to an element.`}),`
`,e.jsx(o.p,{children:"When providing Controls for a component:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Make sure that you use the arg of the extracted properties / attributes from elements json documentation."}),`
`,e.jsxs(o.li,{children:["Provide an ",e.jsx(o.code,{children:"arg"})," for each available attribute / property."]}),`
`]}),`
`,e.jsx(o.h3,{id:"additional-stories",children:"Additional stories"}),`
`,e.jsxs(o.p,{children:[`Having a Playground story as baseline, each component can have several additional stories showing the full capacities of a component. In order to add further description to these stories, we
add doc strings and use the `,e.jsx(o.a,{href:"https://github.com/izhan/storybook-description-loader",target:"_blank",rel:"nofollow noopener noreferrer",children:"Story Description Loader Plugin"}),"."]}),`
`,e.jsx(o.p,{children:"** Example:**"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:"/**\n  * A Fullwidth dialog is a distinct variant which has 100% width an is attached to the bottom of the page. It scrolls up and defines a small\n  * margin at top for the background scrim and escape for dialog close.\n  * It's not recommenended to use this option with `--ino-dialog-width` and `--ino-dialog-height`.\n  */\nexport const FullWidth = args => html`<ino-dialog ...></ino-dialog>`;\n"})})]})}function a(n={}){const{wrapper:o}=Object.assign({},r(),n.components);return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const t={title:"Docs/Contributing/Storybook",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:a};const f=["__page"];export{f as __namedExportsOrder,l as __page,t as default};
