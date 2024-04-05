import"./chunk-HLWAVYOI-D5zbknhU.js";import{M as c}from"./index-bIrMDaoR.js";import{j as e}from"./jsx-runtime-dJJlO1tB.js";import{u as i}from"./index-B6uyoxln.js";import"./iframe-C00qT3h3.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BHQg7lv3.js";import"./index-DrFu-skq.js";function r(s){const n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",ul:"ul",li:"li",pre:"pre"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Docs/Contributing/Commit Message Format"}),`
`,e.jsx(n.h1,{id:"commit-message-format",children:"Commit Message Format"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"We use this format to make the automatic generation of the changelog for all packages easy."}),`
`]}),`
`,e.jsxs(n.p,{children:["We follow the ",e.jsx(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Conventional Commits Specification"})," message pattern that leads to human and machine-readable commit messages. They are easy to follow when looking through the project history. Thus, please ensure that you follow the rules for commits and merge requests:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"<type>([<package>]<scope>): <subject>"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Don't worry, to make it easy for all of us, we added an action to our Github Repo which validates the given commit message"}),`
`]}),`
`,e.jsx(n.h2,{id:"type",children:"Type"}),`
`,e.jsx(n.p,{children:"Must be one of the following:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Affects Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"feat"})}),e.jsx(n.td,{children:"Introduces a new feature to the codebase."}),e.jsx(n.td,{children:"MINOR"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"fix"})}),e.jsx(n.td,{children:"Patches a bug in your codebase."}),e.jsx(n.td,{children:"PATCH"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"docs"})}),e.jsx(n.td,{children:"Documentation only changes."}),e.jsx(n.td,{children:"(no change)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"style"})}),e.jsx(n.td,{children:"Do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc), not CSS styles."}),e.jsx(n.td,{children:"(no change)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"refactor"})}),e.jsx(n.td,{children:"Neither fixes a bug nor adds a feature."}),e.jsx(n.td,{children:"(no change)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"perf"})}),e.jsx(n.td,{children:"A code change that improves performance."}),e.jsx(n.td,{children:"(no change)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"test"})}),e.jsx(n.td,{children:"Adding missing tests."}),e.jsx(n.td,{children:"(no change)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"chore"})}),e.jsx(n.td,{children:"Changes to the build process or auxiliary tools and libraries such as documentation generation."}),e.jsx(n.td,{children:"(no change)"})]})]})]}),`
`,e.jsx(n.h2,{id:"package-optional",children:"Package (optional)"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This is optional but it is recommended to set the affected package when the change is assignable to exactly one package."}),`
`]}),`
`,e.jsx(n.p,{children:"In our mono repo we need to distinct which package is affected by the change. Hence, in addition to the scope we added the name of the package in front of the scope."}),`
`,e.jsxs(n.p,{children:["You are able to use ",e.jsx(n.strong,{children:"one"})," or ",e.jsx(n.strong,{children:"none"})," of the following packages:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Package Name"}),e.jsx(n.th,{children:"Affected Package"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"elements"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"packages/elements",children:"@inovex.de/elements"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"elements-angular"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"packages/elements-angular",children:"@inovex.de/elements-angular"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"elements-react"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"packages/elements-react",children:"@inovex.de/elements-react"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"storybook"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"packages/storybook",children:"@inovex.de/elements-storybook"})})]})]})]}),`
`,e.jsx(n.h2,{id:"scope",children:"Scope"}),`
`,e.jsxs(n.p,{children:["The scope can be anything specifying the scope of the change inside a package. Use an asterisk (",e.jsx(n.code,{children:"*"}),") to designate a global scope."]}),`
`,e.jsx(n.p,{children:"Here are some of the allowed scopes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"elements|ino-button"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"elements|ino-card"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"elements|..."})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"elements-angular|ino-button"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"elements-angular|ino-card"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"elements-angular|..."})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"elements-react|ino-button"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"elements-react|ino-card"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"elements-react|..."})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"storybook|ino-button"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"storybook|ino-card"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"*"})}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You can always check which package/scope combinations are allowed by checking the ",e.jsx(n.a,{href:"https://github.com/inovex/elements/blob/master/.github/workflows/semantic-pull-request.yml#L34",target:"_blank",rel:"nofollow noopener noreferrer",children:"scopes in our action"})," file."]}),`
`]}),`
`,e.jsx(n.h2,{id:"subject",children:"Subject"}),`
`,e.jsx(n.p,{children:"The subject contains a succinct description of the change:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Use the imperative, present tense: "change" not "changed" nor "changes".'}),`
`,e.jsx(n.li,{children:"Do not capitalize first letter."}),`
`,e.jsxs(n.li,{children:["Do not place a period ",e.jsx(n.code,{children:"."})," at the end."]}),`
`,e.jsx(n.li,{children:"Describe what the commit does, not what issue it relates to or fixes."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Be brief, yet descriptive"})," - we should have a good understanding of what the commit does by reading the subject."]}),`
`]}),`
`,e.jsx(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["A breaking change always affects the ",e.jsx(n.strong,{children:"MAJOR"})," version number in the next release. This should rarely be used. You should always talk to the team members about such a change. If you only deprecate things, it is no breaking change."]}),`
`]}),`
`,e.jsx(n.p,{children:"To document breaking changes, use a multiline commit message, which will be taken as the main commit message for the whole MR when squashed."}),`
`,e.jsx(n.p,{children:"Here is an example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`type([package]scope): brief description

BREAKING CHANGES: <description of breaking changes without a new line at the beginning>
`})})]})}function o(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const t={title:"Docs/Contributing/Commit Message Format",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:o};const b=["__page"];export{b as __namedExportsOrder,l as __page,t as default};
