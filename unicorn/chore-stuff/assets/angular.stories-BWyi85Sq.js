import"./chunk-HLWAVYOI-OQaCQB1H.js";import{M as l}from"./index-DrzLVTXd.js";import{j as e}from"./jsx-runtime-Ca5Id1qx.js";import{u as t}from"./index-lURItGYq.js";import"./iframe-DkAdRErW.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CE1G-McA.js";import"./index-Ct_tFChD.js";import"./index-DrFu-skq.js";function s(o){const n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",strong:"strong",pre:"pre",blockquote:"blockquote",ol:"ol",li:"li"},t(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Framework Integration/Angular"}),`
`,e.jsx(n.h1,{id:"integrate-with-angular",children:"Integrate with Angular"}),`
`,e.jsxs(n.p,{children:[`We set up a demo project with the Angular CLI to show you how to integrate the components into a freshly generated Angular project.
These instructions are based on `,e.jsx(n.code,{children:"angular@12.0.0"})," and ",e.jsx(n.a,{href:"https://cli.angular.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.code,{children:"angular-cli@12.0.0"})}),"."]}),`
`,e.jsxs(n.h2,{id:"step-1-install-inovexdeelements-angular",children:["Step 1: Install ",e.jsx(n.code,{children:"@inovex.de/elements-angular"})]}),`
`,e.jsx(n.p,{children:"We provide an integration layer package for Angular so you can use the inovex Elements as a native Angular library with full type support."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Using Angular CLI (recommended):"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`ng add @inovex.de/elements-angular
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ino-icons"})," are added to your project automatically when you use the Angular CLI."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Using npm:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm i @inovex.de/elements-angular
`})}),`
`,e.jsxs(n.h2,{id:"step-2-update-angularjson-npm--yarn-only",children:["Step 2: Update ",e.jsx(n.code,{children:"angular.json"})," (npm / yarn only)"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This step is only necessary if you installed the Angular wrapper via npm or yarn."}),`
`]}),`
`,e.jsxs(n.p,{children:[`Add the following entry to the build assets
(`,e.jsx(n.code,{children:"projects.<your-project-name>.architect.build.options.assets"}),") ",e.jsx(n.strong,{children:"and"}),` to the
test assets (`,e.jsx(n.code,{children:"projects.<your-project-name>.architect.test.options.assets"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`// ...
{
  "glob": "**/*",
  "input": "node_modules/@inovex.de/elements/dist/inovex-elements/ino-icon",
  "output": "/ino-icon"
}
// ...
`})}),`
`,e.jsxs(n.h2,{id:"step-3-import-inoelementsmodule",children:["Step 3: Import ",e.jsx(n.code,{children:"InoElementsModule"})]}),`
`,e.jsxs(n.p,{children:["The Angular wrapper exposes all ",e.jsx(n.code,{children:"@Input"})," properties and ",e.jsx(n.code,{children:"@Output"}),` events as
typed Angular directives, giving you full IDE auto-completion and compiler
checks.`]}),`
`,e.jsxs(n.p,{children:["Import ",e.jsx(n.code,{children:"InoElementsModule"})," into your app module (or any shared module):"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Import the module from ",e.jsx(n.code,{children:"@inovex.de/elements-angular"})]}),`
`,e.jsxs(n.li,{children:["Add it to your ",e.jsx(n.code,{children:"imports"})," array — you can optionally pass an ",e.jsx(n.code,{children:"InoElementsConfig"})]}),`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," to the ",e.jsx(n.code,{children:"schemas"})," array"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InoElementsModule } from '@inovex.de/elements-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InoElementsModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"})," If you have multiple feature modules, import ",e.jsx(n.code,{children:"InoElementsModule"}),` once
in a shared module and re-export it from there.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"use-the-components",children:"Use the Components"}),`
`,e.jsx(n.p,{children:"That's it — you are now ready to use any inovex Elements component in your Angular templates!"})]})}function a(o={}){const{wrapper:n}=Object.assign({},t(),o.components);return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}const i=()=>{throw new Error("Docs-only story")};i.parameters={docsOnly:!0};const r={title:"Docs/Framework Integration/Angular",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:a};const y=["__page"];export{y as __namedExportsOrder,i as __page,r as default};
