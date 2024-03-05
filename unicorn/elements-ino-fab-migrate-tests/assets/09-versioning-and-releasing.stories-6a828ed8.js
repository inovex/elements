import"./chunk-HLWAVYOI-51c0aae9.js";import{M as s}from"./index-457dddeb.js";import{j as e}from"./jsx-runtime-c4da1afb.js";import{u as o}from"./index-a1bb36c4.js";import"./iframe-dcb8eb51.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";function t(i){const n=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",ol:"ol"},o(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Contributing/Versioning and Releasing"}),`
`,e.jsx(n.h1,{id:"versioning-and-releasing",children:"Versioning and Releasing"}),`
`,e.jsxs(n.p,{children:["We are following the ",e.jsx(n.a,{href:"https://semver.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Semantic Versioning"}),"."]}),`
`,e.jsx(n.p,{children:"To build a new release, the following steps have to be performed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Develop new features or fix bugs which justify a new release. This should include at least one thing which benefits the user and not only contain refactorings."}),`
`,e.jsxs(n.li,{children:["Check out the most recent ",e.jsx(n.strong,{children:"master"})," branch."]}),`
`,e.jsxs(n.li,{children:["To build the packages ",e.jsx(n.code,{children:"@inovex.de/elements"}),", ",e.jsx(n.code,{children:"@inovex.de/elements-react"}),", ",e.jsx(n.code,{children:"@inovex.de/elements-angular"}),", and ",e.jsx(n.code,{children:"storybook"}),", run the following command from within the root folder of this git repo: ",e.jsx(n.code,{children:"yarn lerna:version"}),". This command does the following things:",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Build and test the current setup"}),`
`,e.jsxs(n.li,{children:["Determine the new version based on the ",e.jsx(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",target:"_blank",rel:"nofollow noopener noreferrer",children:"conventional-commit guidelines"})]}),`
`,e.jsx(n.li,{children:"Bump the version"}),`
`,e.jsx(n.li,{children:"Generate changelogs"}),`
`,e.jsx(n.li,{children:"Commit the changed files"}),`
`,e.jsx(n.li,{children:"Tag the new commit with the new version number"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Always check the contents of ",e.jsx(n.code,{children:"Changelog.md"})," and version number."]}),`
`,e.jsxs(n.li,{children:["If everything appears to be correct, push the changes using ",e.jsx(n.code,{children:"git push --follow-tags"})," to the remote origin."]}),`
`,e.jsx(n.li,{children:"The gitlab repository should check for changes every few minutes and then trigger the release pipeline. If the release is urgent, the mirroring process can also be initiated via the gitlab Web UI."}),`
`]}),`
`,e.jsxs(n.p,{children:["The gitlab pipeline will build and release a new version in the NPM registry. Additionally, the built sources and documentation will be published to ",e.jsx(n.code,{children:"https://elements.inovex.de/"})," in a folder named by the new version."]})]})}function l(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const r={title:"Docs/Contributing/Versioning and Releasing",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:l};const f=["__page"];export{f as __namedExportsOrder,a as __page,r as default};
