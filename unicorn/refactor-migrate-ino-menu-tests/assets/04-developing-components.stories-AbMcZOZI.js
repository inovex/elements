import"./chunk-HLWAVYOI-WtVqD_EV.js";import{M as r}from"./index-DtrjN1nh.js";import{j as e}from"./jsx-runtime-Bx_n3asX.js";import{u as i}from"./index-CbMaqrWh.js";import"./iframe-CPEThFXk.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BHQg7lv3.js";import"./index-DrFu-skq.js";function s(t){const n=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",h3:"h3",h4:"h4",em:"em",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Contributing/Developing Components"}),`
`,e.jsx(n.h1,{id:"developing-components",children:"Developing Components"}),`
`,e.jsxs(n.p,{children:["We follow the ",e.jsx(n.a,{href:"https://stenciljs.com/docs/style-guide",target:"_blank",rel:"nofollow noopener noreferrer",children:"Stencil Style Guide"})," for naming and code style conventions. Please read through it."]}),`
`,e.jsx(n.p,{children:"Some important guidelines are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Create a separate directory for each component. The directories name should be the same as the elements Custom Element name (",e.jsx(n.strong,{children:"ino-component-name"}),")."]}),`
`,e.jsxs(n.li,{children:["Each component consists at least of the files ",e.jsx(n.code,{children:".tsx"})," and ",e.jsx(n.code,{children:".scss"}),". The name of the files are the same as the Custom Element name. See above."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"readme.md"})," is auto-generated by Stencil."]}),`
`,e.jsxs(n.li,{children:["The appropriate file structure (see above) will be created for you if you create your new component with the ",e.jsx(n.code,{children:"new-component"})," script (run with ",e.jsx(n.code,{children:"yarn new:component"}),")"]}),`
`,e.jsxs(n.li,{children:["Your commit message will be linted as soon as you open a new Pull Request. Make sure to follow our ",e.jsx(n.a,{href:"https://elements.inovex.de/dist/latest/storybook/?path=/docs/docs-contributing-commit-message-format--page",target:"_blank",rel:"nofollow noopener noreferrer",children:"commit message format"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"stateless--controlled--dumb-components",children:"Stateless / Controlled / Dumb Components"}),`
`,e.jsx(n.p,{children:"We decided to use stateless components to provide a top to bottom data flow. This makes sense as most of the frameworks do a DOM diffing and do not see what a component itself is doing. Hence, instead of changing the state directly, we always emit events to denote that something should change. Thus, if the consumer ignores such an event, nothing will happen."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Only the attributes and children with their attributes describe the current state of the component."}),`
`,e.jsx(n.li,{children:"The state never changes as long as the input properties are the same."}),`
`,e.jsx(n.li,{children:"The component never modifies its host attributes."}),`
`,e.jsx(n.li,{children:"User actions (clicks, key events, ...) only trigger events. The state remains untouched."}),`
`]}),`
`,e.jsxs(n.p,{children:["For examples and details please refer to the ",e.jsx(n.strong,{children:"Events"})," section below."]}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(n.p,{children:"For each property, we provide a short jsdoc when defining a property. This comment should contain a short and precise description of the property's functionality. Take some time when writing this description, since it will be used as a references by other developers."}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:[`We differentiate between native and Custom Events.
Native events are triggered by native HTML elements like `,e.jsx(n.code,{children:"<input>"})," and bubble out of the scope automatically. For example, the ",e.jsx(n.code,{children:"<button>"})," element uses a ",e.jsx(n.code,{children:"HTMLButtonElement"})," internally that emits ",e.jsx(n.code,{children:"click"}),` events.
Custom Events are our way to inform the consumer about internal changes.
Every time we provide a Custom Event for a component we always set their action in `,e.jsx(n.strong,{children:"present tense"}),"."]}),`
`,e.jsx(n.p,{children:"Here are some examples to make the naming easier for you:"}),`
`,e.jsx(n.h3,{id:"example-1-the-ino-input-component",children:"Example 1: The ino-input Component"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Input: ",e.jsx(n.code,{children:"value"})," (Attribute, ",e.jsx(n.code,{children:"@Prop()"}),")"]}),`
`,e.jsxs(n.li,{children:["Output: ",e.jsx(n.code,{children:"valueChange"})," (Custom Event, ",e.jsx(n.code,{children:"@Event()"}),")"]}),`
`]}),`
`,e.jsx(n.h4,{id:"description",children:"Description"}),`
`,e.jsxs(n.p,{children:["The name of the input param ",e.jsx(n.code,{children:"value"})," is contained in the name of the event param ",e.jsx(n.code,{children:"valueChange"})," to denote the relation between them. In this example, this means that if the ",e.jsx(n.code,{children:"value"})," should change, the consumer (this is the framework that uses and therefore controls the component) decides if the value should change or not. Speaking for the ",e.jsx(n.code,{children:"ino-input"}),": If the user types any key into the input field, the component ",e.jsx(n.strong,{children:"will not"})," change the value, but will instead emit an event that says:"]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.em,{children:["Hey consumer, the value should change. Here is the value. But you decide if you want to change the value. You can set the @Input ",e.jsx(n.code,{children:"value"})," with the value I gave you, then I will update my value. If you do not update the value, I will not update the value und the old value remains the same"]}),"."]}),`
`,e.jsx(n.h3,{id:"example-2-the-ino-checkbox-component",children:"Example 2: The ino-checkbox Component"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Input: ",e.jsx(n.code,{children:"checked"})," (Attribute, @Prop())"]}),`
`,e.jsxs(n.li,{children:["Output: ",e.jsx(n.code,{children:"checkedChange"})," (Custom Event, @Event())"]}),`
`]}),`
`,e.jsx(n.h4,{id:"description-1",children:"Description"}),`
`,e.jsx(n.p,{children:"In this case, if the user clicks the checkbox, an event is emitted that says:"}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Hey consumer, the checkbox has been clicked and the ",e.jsx(n.code,{children:"checked"})," property should be updated. But you decide if you want to check it or not."]})}),`
`,e.jsx(n.p,{children:"Here is a list of some example events we use:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`checkedChange
valueChange
clickEl
hideEl
activeTabChange
loadEl
unloadEl
...
`})}),`
`,e.jsx(n.h2,{id:"custom-properties-aka-css-variables",children:"Custom Properties (a.k.a. CSS-Variables)"}),`
`,e.jsx(n.p,{children:`Custom properties allow us to provide a CSS interface to style our components.
These custom properties are declared on the component side and can then be used at runtime.`}),`
`,e.jsxs(n.p,{children:["For instance, to give the ",e.jsx(n.code,{children:"<ino-button>"})," a custom property, the following snippet is all you need:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`  /**
    * @prop --my-background-color: Some description about the variable
   */
  ino-button button {
    background-color: var(--my-background-color, #fff); // the #fff is the fallback value
  }
`})}),`
`,e.jsx(n.p,{children:"Stencil will automatically put the name of the variable and its description into the args table."}),`
`,e.jsx(n.p,{children:`Custom properties should be used if the component defines styles that are strongly opinionated or are likely to be customized by the consumer.
However, usage should be kept to a minimum, as any changes to the styles of our components will result in deviations from the inovex style, which is ultimately the goal of our carefully designed library.`}),`
`,e.jsx(n.h2,{id:"testing",children:"Testing"}),`
`,e.jsx(n.p,{children:`All of our components should be tested to ensure correct functionality.
The following two types of tests should be present if possible.`}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Frameworks"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Unit (spec)"}),e.jsx(n.td,{children:"Unit tests focus on testing a component's methods in isolation. For example, when a method is given the argument X, it should return Y."}),e.jsx(n.td,{children:"Jest"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"End-To-End (e2e)"}),e.jsx(n.td,{children:"End-to-end tests focus on how the components are rendered in the DOM and how the individual components work together.  For example, when my-component has the X attribute, the child component then renders the text Y, and expects to receive the event Z."}),e.jsx(n.td,{children:"Jest, Puppeteer"})]})]})]}),`
`,e.jsx(n.h2,{id:"documentation",children:"Documentation"}),`
`,e.jsxs(n.p,{children:["Stencil generates a ",e.jsx(n.code,{children:"readme.md"})," for each component which consists of two parts:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"An editable header."}),`
`,e.jsx(n.li,{children:"An auto-generated documentation of attributes and properties as a table."}),`
`]}),`
`,e.jsx(n.p,{children:"We extend the generated docs by adding more information of how to use the component in the header section."}),`
`,e.jsx(n.p,{children:"Normally, we..."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"... explain extraordinary attributes."}),`
`,e.jsx(n.li,{children:"... explain the behaviour of native and custom events if it is more complex."}),`
`]})]})}function a(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const o={title:"Docs/Contributing/Developing Components",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:a};const g=["__page"];export{g as __namedExportsOrder,l as __page,o as default};
