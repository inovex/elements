import"./chunk-HLWAVYOI-edcc3d24.js";import{M as i}from"./index-d78a1aed.js";import{j as e}from"./jsx-runtime-c02bab85.js";import{u as o}from"./index-3b365be5.js";import"./iframe-2f2a7141.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";function r(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",a:"a",code:"code",ul:"ul",strong:"strong"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Contributing/Updating Dependencies"}),`
`,e.jsx(n.h1,{id:"updating-dependencies",children:"Updating Dependencies"}),`
`,e.jsx(n.p,{children:"In order to get the most mature and stable version, we have to update the dependencies regularly."}),`
`,e.jsx(n.h2,{id:"how-to-update-stencil-in-the-core-package",children:"How to Update Stencil in the Core Package"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Go to ",e.jsx(n.a,{href:"https://github.com/ionic-team/stencil",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://github.com/ionic-team/stencil"})," and open the ",e.jsx(n.code,{children:"CHANGELOG"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Get the current installed ",e.jsx(n.code,{children:"@stencil/core"})," version from ",e.jsx(n.code,{children:"packages/elements/package.json"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Search this version in the CHANGELOG, for example ",e.jsx(n.code,{children:"1.5.0"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Go to the next minor version, in our example ",e.jsx(n.code,{children:"1.6.0"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Replace ",e.jsx(n.code,{children:"1.5.0"})," with ",e.jsx(n.code,{children:"1.6.0"})," in the ",e.jsx(n.code,{children:"package.json"})," file."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Check for any note about a TypeScript or Jest upgrade between the current and last version and update these packages to the given version if necessary."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Run ",e.jsx(n.code,{children:"yarn install"})," from within the root of the repo."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Run ",e.jsx(n.code,{children:"yarn start"}),` to check if the build succeeds, Storybook opens in the browser and
all components are working as expected. Make sure that all tests pass before you continue.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`If the build fails with some compiler errors of TypeScript or any type mismatchs, you may
need to update the packages `,e.jsx(n.code,{children:"typescript"}),", ",e.jsx(n.code,{children:"@types/jest"}),", ",e.jsx(n.code,{children:"jest"}),", and ",e.jsx(n.code,{children:"jest-cli"}),` as well.
This IS the case when there are some hints in the Stencil `,e.jsx(n.code,{children:"CHANGELOG"})," like:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"typescript: update to typescript 3.7.2"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"jest: bump jest versions to fix types"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Repeat step 2) - 7) until you reached the latest version of ",e.jsx(n.code,{children:"@stencil/core"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-to-update-the-material-web-components",children:"How to update the material web components"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Visit the ",e.jsx(n.a,{href:"https://github.com/material-components/material-components-web",target:"_blank",rel:"nofollow noopener noreferrer",children:"material-components-web github page"}),`
and open the `,e.jsx(n.a,{href:"https://github.com/material-components/material-components-web/releases",target:"_blank",rel:"nofollow noopener noreferrer",children:"CHANGELOG"})]}),`
`,e.jsxs(n.li,{children:["Search for the currently used material-components-web version in the ",e.jsx(n.code,{children:"CHANGELOG"}),", e.g. ",e.jsx(n.code,{children:"5.0.0"})]}),`
`,e.jsxs(n.li,{children:["If a new version is available, open the ",e.jsx(n.code,{children:"package.json"}),` located in the inovex Elements package directory and replace
the current version of `,e.jsx(n.strong,{children:"every"})," material component with the next minor version, e.g. ",e.jsx(n.code,{children:"5.1.0"}),"."]}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"yarn install"})," in the root directory"]}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"yarn start"})," to check if the build succeeds and the Storybook opens in the browser."]}),`
`,e.jsxs(n.li,{children:["Go through every component and check the ",e.jsx(n.code,{children:"CHANGELOG"}),` for any changes. Adjust the component accordingly and
make sure that the component works as intended, the styles have not been altered by the upgrade, and that
all component tests pass.`]}),`
`,e.jsx(n.li,{children:"Repeat steps 2) - 6) until you have reached the latest version."}),`
`]})]})}function c(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const s={title:"Docs/Contributing/Updating Dependencies",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:c};const y=["__page"];export{y as __namedExportsOrder,l as __page,s as default};
