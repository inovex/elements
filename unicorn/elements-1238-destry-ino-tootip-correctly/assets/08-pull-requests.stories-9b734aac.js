import"./chunk-HLWAVYOI-6b7ff7a0.js";import{M as o}from"./index-89ff6711.js";import{j as e}from"./jsx-runtime-0ae8fd05.js";import{u as i}from"./index-76130606.js";import"./iframe-aee02dc9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";function n(s){const t=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",a:"a",blockquote:"blockquote"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Contributing/Pull Requests"}),`
`,e.jsx(t.h1,{id:"pull-requests",children:"Pull Requests"}),`
`,e.jsx(t.p,{children:"We have very precise rules to ensure an understandable and compact history:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Before creating a feature branch, make sure that a respective Github issue exists."}),`
`,e.jsx(t.li,{children:"Provide a reference to the issue in the description of the Pull Request to make the life of reviewers easier."}),`
`,e.jsxs(t.li,{children:["Please give the branch a speaking name that fits the template ",e.jsx(t.code,{children:"elements-<issue-id>-<what-is-the-feature>"})," like ",e.jsx(t.code,{children:"elements-12-create-button-element"}),"."]}),`
`]}),`
`,e.jsx(t.p,{children:"When submitting a Pull Request, please:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Make sure the source branch is deleted afterwards (should be default)"}),`
`,e.jsx(t.li,{children:"The Pull Request is squashed (should be default)"}),`
`,e.jsxs(t.li,{children:["Provide the title of the pull request in a commit message manner (see our ",e.jsx(t.a,{href:"./?path=/story/docs-contributing--commit-message-format",children:"Commit Message Format"}),").",`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:['The latter is very important because the "squash commit" that occurs in the history usually has the pull requests title. The exceptions are multi line commits. If any of your commits has a multi line description, the first multi line commit message will be chosen as the title for the "squash commit". Further information on squashing can be found in the ',e.jsx(t.a,{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squash-and-merge-your-pull-request-commits",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub documentation"}),"."]}),`
`]}),`
`]}),`
`]})]})}function a(s={}){const{wrapper:t}=Object.assign({},i(),s.components);return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const r={title:"Docs/Contributing/Pull Requests",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:a};const g=["__page"];export{g as __namedExportsOrder,l as __page,r as default};
