import"./chunk-HLWAVYOI-621834d3.js";import{M as a}from"./index-e03db633.js";import{j as e}from"./jsx-runtime-fe2f6047.js";import{u as s}from"./index-1d949430.js";import"./iframe-0da48d6b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";function r(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",h3:"h3",h4:"h4",ul:"ul",li:"li",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Contributing/Architectural Overview"}),`
`,e.jsx(t.h1,{id:"high-level-overview",children:"High Level Overview"}),`
`,e.jsx(t.p,{children:`The goal of this high level overview is to provide you with a better understanding of what this mono repository
contains and how things relate to each other.`}),`
`,e.jsx(t.h2,{id:"the-repository-structure",children:"The Repository Structure"}),`
`,e.jsxs(t.p,{children:["This is a mono repository based on Lerna. Lerna is a tool for managing JavaScript projects with multiple packages. Visit the ",e.jsx(t.a,{href:"https://github.com/lerna/lerna",target:"_blank",rel:"nofollow noopener noreferrer",children:"Lerna GitHub repository website"})," to learn more about Lerna."]}),`
`,e.jsx(t.p,{children:"Each package provides a separate README and is distributed as a self-contained package through npm. These packages are a thin layer on top of our Web Components to achieve a better framework integration. Please refer to the sub-folder of the corresponding package to get more information about the package itself:"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"You can follow the link on the package name to directly go to the repository location."}),`
`]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:e.jsx("div",{children:e.jsx(t.strong,{children:"Package"})})}),e.jsx(t.th,{children:e.jsx("div",{children:e.jsx(t.strong,{children:"Description"})})}),e.jsx(t.th,{children:e.jsx(t.strong,{children:"Primary Usage Intention"})})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/inovex/elements/tree/master/packages/elements",target:"_blank",rel:"nofollow noopener noreferrer",children:"@inovex.de/elements"})}),e.jsx(t.td,{children:"Native Web Components"}),e.jsx(t.td,{children:"Websites, WebApps and Microfrontends without a framework."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/inovex/elements/tree/master/packages/elements-angular",target:"_blank",rel:"nofollow noopener noreferrer",children:"@inovex.de/elements-angular"})}),e.jsx(t.td,{children:"Angular integration layer"}),e.jsxs(t.td,{children:["WebApps based on ",e.jsx(t.a,{href:"https://github.com/angular",target:"_blank",rel:"nofollow noopener noreferrer",children:"Angular"}),"."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/inovex/elements/tree/master/packages/elements-react",target:"_blank",rel:"nofollow noopener noreferrer",children:"@inovex.de/elements-react"})}),e.jsx(t.td,{children:"React integration layer"}),e.jsxs(t.td,{children:["WebApps based on ",e.jsx(t.a,{href:"https://github.com/facebook/react",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"}),"."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/inovex/elements/tree/master/packages/storybook",target:"_blank",rel:"nofollow noopener noreferrer",children:"@inovex.de/elements-storybook"})}),e.jsx(t.td,{children:"Storybook documentation"}),e.jsx(t.td,{children:"API reference and guide for developers."})]})]})]}),`
`,e.jsx(t.h3,{id:"elements-core",children:"Elements Core"}),`
`,e.jsxs(t.p,{children:["This package contains our components written with ",e.jsx(t.a,{href:"https://stenciljs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Stencil"})," and wires up the code of ",e.jsx(t.a,{href:"https://github.com/material-components/material-components-web/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Googles Material Design Components for the Web"})," (MDC) as our foundation layer as well as additional third party dependencies like ",e.jsx(t.a,{href:"https://flatpickr.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"flatpickr"}),"."]}),`
`,e.jsx(t.p,{children:"The output of this package is what Stencil produces. Read more on Stencil below."}),`
`,e.jsx(t.h4,{id:"stencil",children:"Stencil"}),`
`,e.jsx(t.p,{children:"Stencil is a compiler for building fast web apps using Web Components."}),`
`,e.jsx(t.p,{children:`Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box to generate 100% standards-based Web Components that run in any browser supporting the Custom Elements
v1 spec.`}),`
`,e.jsx(t.p,{children:"Stencil components are basic Web Components which makes them work in any major framework as well as completely on their own without any additional framework."}),`
`,e.jsx(t.h4,{id:"google-material-design-components-for-the-web",children:"Google Material Design Components for the Web"}),`
`,e.jsxs(t.p,{children:["We use ",e.jsx(t.a,{href:"https://github.com/material-components/material-components-web/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Googles Material Design Components for the Web"})," to speed up the development. This is also a good foundation as the major functionality is already implemented. We often only need to tweak and change some bits to achieve the desired behaviour."]}),`
`,e.jsxs(t.p,{children:["Each component is published on npm as a separate package. Thus, in theory, we can upgrade the components independently and use different versions of the underlying packages. The repository is structured in a nice way with each component having its own README. You can find the ",e.jsx(t.a,{href:"https://github.com/material-components/material-components-web/blob/master/packages",target:"_blank",rel:"nofollow noopener noreferrer",children:"list of all MDC components in the GitHub repo"}),". It feels a bit like back in the days when the ",e.jsx(t.a,{href:"https://getbootstrap.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Twitter Bootstrap"})," framework was released. You open the documentation, copy a piece of HTML markup into your template, import the required SASS mixins into your sass Stylesheet, and only modify the parts you want to make dynamic."]}),`
`,e.jsx(t.p,{children:"When creating a new element, always check for a respective material design implementation. We loosely follow these rules:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Abstract the features of the material design components to the need of our inovex element."}),`
`,e.jsx(t.li,{children:"Provide a link to the material component in the documentation."}),`
`,e.jsxs(t.li,{children:["If the element comes with js, instantiate the ",e.jsx(t.code,{children:"MDCFactory"})," in the ",e.jsx(t.code,{children:"componentDidLoad"})," method and call the ",e.jsx(t.code,{children:"destroy"})," method in ",e.jsx(t.code,{children:"disconnectedCallback"}),"."]}),`
`]}),`
`,e.jsx(t.h3,{id:"angular-integration-layer",children:"Angular Integration Layer"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Package ",e.jsx(t.code,{children:"@inovex.de/elements-angular"})]}),`
`]}),`
`,e.jsx(t.p,{children:"This project is just a normal Angular Library which consumes the core package and outputs Directives for other Angular projects to consume."}),`
`,e.jsxs(t.p,{children:["Every time you run ",e.jsx(t.code,{children:"yarn start"})," or ",e.jsx(t.code,{children:"yarn build"})," from within the root of this repo, Lerna first builds the core package before building the Directives in this package. The core package is just a dependency of this Angular Library. This project only provides a wrapper Directive to map the Custom Elements attributes and events to the @Input and @Output values in the Angular world."]}),`
`,e.jsxs(t.p,{children:["You only need to change this package if you add a new or remove an existing component from the core or if you want to support ",e.jsx(t.code,{children:"ngModel"}),". To learn more about this topic, refer to the ",e.jsx(t.a,{href:"https://github.com/inovex/elements/blob/master/packages/elements-angular/elements/README.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"README"})," of ",e.jsx(t.code,{children:"@inovex.de/elements-angular"}),"."]}),`
`,e.jsx(t.h3,{id:"react-integration-layer",children:"React Integration Layer"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Package ",e.jsx(t.code,{children:"@inovex.de/elements-react"})]}),`
`]}),`
`,e.jsx(t.p,{children:"This project is just a normal React project which consumes the core package and outputs React components for other React projects to consume."}),`
`,e.jsxs(t.p,{children:["Every time you run ",e.jsx(t.code,{children:"yarn start"})," or ",e.jsx(t.code,{children:"yarn build"})," from within the root of this repo, Lerna first builds the core package before building the React components in this package. The core package is just a dependency of this React project. This project only provides a wrapper component to map the Custom Elements attributes and events to the props in the React world."]}),`
`,e.jsxs(t.p,{children:["You should never have to make changes to this package. To learn more about this topic, refer to the ",e.jsx(t.a,{href:"https://github.com/inovex/elements/blob/master/packages/elements-react/README.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"README"})," of ",e.jsx(t.code,{children:"@inovex.de/elements-react"}),"."]}),`
`,e.jsx(t.h3,{id:"storybook",children:"Storybook"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Package ",e.jsx(t.code,{children:"@inovex.de/elements-storybook"})]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://github.com/storybooks/storybook",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook"})," is a development environment for UI components. It allows us to browse the inovex Elements, view the different states of each component, and interactively develop and test inovex components."]}),`
`,e.jsx(t.p,{children:"The Storybook is part of the development process and used to test the components as well as to show the most common use cases. We work with it and provide it as our documentation to developers using our components."})]})}function i(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const o={title:"Docs/Contributing/Architectural Overview",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:i};const b=["__page"];export{b as __namedExportsOrder,l as __page,o as default};
