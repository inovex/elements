import"./chunk-HLWAVYOI-ab08c5b0.js";import{M as s}from"./index-850a1392.js";import{j as e}from"./jsx-runtime-f5760d90.js";import{u as i}from"./index-d57cfd29.js";import"./iframe-a235dc11.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";function r(o){const n=Object.assign({h2:"h2",p:"p",strong:"strong",h3:"h3",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Global Configuration"}),`
`,e.jsx(n.h2,{id:"global-configuration",children:"Global Configuration"}),`
`,e.jsx(n.p,{children:`The global configuration provides a way to change the configuration of all components. For more information about the integration
in frameworks, see the "Framework Integration" sections.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),"  As of now, the global configuration has only been documented and tested for Angular."]}),`
`,e.jsx(n.h3,{id:"config-during-runtime",children:"Config during runtime"}),`
`,e.jsxs(n.p,{children:["In order to access the global configuration, you can import a config object with the ",e.jsx(n.code,{children:"import { inoElementsConfig } from '@inovex.de/elements'"})," and use the methods"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"inoElementsConfig.get(key)"})," to access a key."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"inoElementsConfig.patch(key, value)"})," in order to patch a config during runtime."]}),`
`]}),`
`,e.jsx(n.h3,{id:"options",children:"Options"}),`
`,e.jsx(n.p,{children:"The following options are currently available:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Type"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"currencyLocale"})}),e.jsxs(n.td,{children:["A supported locale for currency number formatting. See the ",e.jsx(n.a,{href:"https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument",target:"_blank",rel:"nofollow noopener noreferrer",children:"documentation"}),"."]}),e.jsx(n.td,{children:"string"})]})})]})]})}function a(o={}){const{wrapper:n}=Object.assign({},i(),o.components);return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const t={title:"Docs/Global Configuration",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:a};const f=["__page"];export{f as __namedExportsOrder,c as __page,t as default};
