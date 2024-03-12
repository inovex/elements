import{x as i}from"./lit-html-b5e645d2.js";import{S as t}from"./StoryWrapper-03bb9100.js";import"./elements-stencil-docs-98c6df11.js";const{useEffect:ie}=__STORYBOOK_MODULE_PREVIEW_API__,te={title:"Input/ino-input",component:"ino-input",decorators:[e=>(ie(()=>{const h=o=>o.target.setAttribute("value",o.detail),m=document.querySelectorAll("ino-input");return m.forEach(o=>o.addEventListener("valueChange",h)),()=>m.forEach(o=>o.removeEventListener("valueChange",h))}),e())],render:e=>i`
    <ino-input
      class="customizable-input"
      id="customizable-input"
      autocomplete="${e.autocomplete}"
      autofocus="${e.autoFocus}"
      data-list="${e.dataList}"
      disabled="${e.disabled}"
      error="${e.error}"
      helper="${e.helper}"
      helper-character-counter="${e.helperCharacterCounter}"
      helper-persistent="${e.helperPersistent}"
      helper-validation="${e.helperValidation}"
      label="${e.label}"
      min="${e.min}"
      max="${e.max}"
      maxlength="${e.maxlength}"
      name="${e.name}"
      outline="${e.outline}"
      pattern="${e.pattern}"
      placeholder="${e.placeholder}"
      required="${e.required}"
      show-label-hint="${e.showLabelHint}"
      size=${e.size}
      step="${e.step}"
      type="${e.type}"
      unit="${e.unit}"
      value="${e.value}"
    >
    </ino-input>
  `,parameters:{actions:{handles:["iconClick .customizable-input","valueChange .customizable-input"]}},argTypes:{type:{control:{type:"select"},options:["text","number","password","email"]}},args:{autocomplete:"off",autoFocus:!1,dataList:"",disabled:!1,error:!1,helper:"Helper message",helperCharacterCounter:!1,helperPersistent:!1,helperValidation:!1,label:"Input label",min:"",max:"",maxlength:100,outline:!1,name:"",pattern:"*",placeholder:"",required:!1,showLabelHint:!1,size:0,step:5,type:"text",unit:"",value:""}},n=t({...te}),a=t({...n,render:()=>i`
    <ino-input placeholder="type = text"></ino-input>
    <ino-input placeholder="type = email" type="email"></ino-input>
    <ino-input type="number" placeholder="type = number"></ino-input>
    <ino-input
      type="number"
      placeholder="type = number with steps=5"
      step="5"
    ></ino-input>
    <ino-input
      type="number"
      placeholder="type = number with step='any' (decimal numbers)"
      step="any"
    ></ino-input>
    <ino-input type="password" placeholder="type = password"></ino-input>
  `}),l=t({...n,render:()=>i`
    <ino-input placeholder="Disabled" disabled></ino-input>
    <ino-input label="Optional" show-label-hint></ino-input>
    <ino-input label="Required" required show-label-hint></ino-input>

    <ino-input placeholder="Outline disabled" outline disabled></ino-input>
    <ino-input label="Outline optional" outline show-label-hint></ino-input>
    <ino-input
      label="Outline required"
      outline
      show-label-hint
      required
    ></ino-input>
  `}),r=t({...n,render:()=>i`
    <ino-input label="Floating label"></ino-input>
    <ino-input label="Floating label" value="With value"></ino-input>

    <ino-input label="Outlined floating label" outline></ino-input>
    <ino-input
      label="Outlined floating label"
      value="With value"
      outline
    ></ino-input>
  `}),p=t({...n,render:()=>i`
    <ino-input
      placeholder="Helper text on focus (default)"
      helper="Helper text"
    ></ino-input>
    <ino-input
      placeholder="Persistent helper text"
      helper="Persistent helper text"
      helper-persistent
    ></ino-input>
    <ino-input
      required
      placeholder="Validation message for required input"
      helper="This field is required"
      helper-validation
    ></ino-input>
    <ino-input
      value="Length of 12"
      helper-character-counter
      maxlength="25"
    ></ino-input>
  `}),s=t({...n,render:()=>i`
    <ino-input icon-leading label="Leading icon">
      <ino-icon slot="icon-leading" icon="search"></ino-icon>
    </ino-input>
    <ino-input icon-trailing label="Trailing icon">
      <ino-icon slot="icon-trailing" icon="search"></ino-icon>
    </ino-input>
    <ino-input icon-leading icon-trailing label="Leading and Trailing icon">
      <ino-icon slot="icon-leading" icon="search"></ino-icon>
      <ino-icon slot="icon-trailing" icon="add"></ino-icon>
    </ino-input>
    <ino-input icon-trailing label="Clickable Icon">
      <ino-icon clickable slot="icon-trailing" icon="search"></ino-icon>
    </ino-input>
  `}),u=t({...n,render:()=>i`
    <ino-input label="Datalist" data-list="languages">
      <datalist id="languages">
        <option>HTML</option>
        <option>Java</option>
        <option>Perl</option>
        <option>PHP</option>
        <option>Ruby on Rails</option>
      </datalist>
    </ino-input>
  `}),c=t({...n,render:()=>i`
    <ino-input
      type="number"
      decimal-places="2"
      placeholder="With 2 decimal places"
    ></ino-input>
    <ino-input
      type="number"
      step="1"
      thousands-separator
      placeholder="With thousands separator"
    ></ino-input>
  `}),d=t({...n,docsFromProperty:"unit",render:()=>i`
    <ino-input value="2" type="number" unit="h" label="Hours input"></ino-input>
  `});var b,y,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...InoInputMeta
})`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,v,x,S,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input placeholder="type = text"></ino-input>
    <ino-input placeholder="type = email" type="email"></ino-input>
    <ino-input type="number" placeholder="type = number"></ino-input>
    <ino-input
      type="number"
      placeholder="type = number with steps=5"
      step="5"
    ></ino-input>
    <ino-input
      type="number"
      placeholder="type = number with step='any' (decimal numbers)"
      step="any"
    ></ino-input>
    <ino-input type="password" placeholder="type = password"></ino-input>
  \`
})`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:"Changes the type of the ino-input element.\n\n- `type`: The type of this element (default = text).\n- `step`: The step value of this element. Use `any` for decimal numbers",...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};var $,D,q,T,L;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input placeholder="Disabled" disabled></ino-input>
    <ino-input label="Optional" show-label-hint></ino-input>
    <ino-input label="Required" required show-label-hint></ino-input>

    <ino-input placeholder="Outline disabled" outline disabled></ino-input>
    <ino-input label="Outline optional" outline show-label-hint></ino-input>
    <ino-input
      label="Outline required"
      outline
      show-label-hint
      required
    ></ino-input>
  \`
})`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source},description:{story:"Change the state of the ino-input element by adding this properties in various combinations:\n\n- `disabled`: Disables this element.\n- `show-label-hint`: If true, an *optional* message is displayed if not required, otherwise a * marker is displayed if required\n- `required`: Marks this element as required.\n- `outline`: Styles the input field as outlined element.",...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.description}}};var O,H,P,I,F;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input label="Floating label"></ino-input>
    <ino-input label="Floating label" value="With value"></ino-input>

    <ino-input label="Outlined floating label" outline></ino-input>
    <ino-input
      label="Outlined floating label"
      value="With value"
      outline
    ></ino-input>
  \`
})`,...(P=(H=r.parameters)==null?void 0:H.docs)==null?void 0:P.source},description:{story:"Add labels to the ino-input element by setting this properties:\n\n- `label`: The optional floating label of this input field.\n- `value`: The value of this element. (**unmanaged**)\n- `outline`: Styles the input field as outlined element.",...(F=(I=r.parameters)==null?void 0:I.docs)==null?void 0:F.description}}};var C,k,E,M,W;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input
      placeholder="Helper text on focus (default)"
      helper="Helper text"
    ></ino-input>
    <ino-input
      placeholder="Persistent helper text"
      helper="Persistent helper text"
      helper-persistent
    ></ino-input>
    <ino-input
      required
      placeholder="Validation message for required input"
      helper="This field is required"
      helper-validation
    ></ino-input>
    <ino-input
      value="Length of 12"
      helper-character-counter
      maxlength="25"
    ></ino-input>
  \`
})`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source},description:{story:"Add helper text to the ino-input element by adding this properties:\n\n- `helper`: The optional helper text.\n- `helper-persistent`: Displays the helper permanently.\n- `helper-validation`: Styles the helper text as a validation message.\n- `helper-character-counter`: Displays the number of characters. The maxlength-property must be set. This helper text will be displayed persistently.",...(W=(M=p.parameters)==null?void 0:M.docs)==null?void 0:W.description}}};var _,A,R,z,V;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input icon-leading label="Leading icon">
      <ino-icon slot="icon-leading" icon="search"></ino-icon>
    </ino-input>
    <ino-input icon-trailing label="Trailing icon">
      <ino-icon slot="icon-trailing" icon="search"></ino-icon>
    </ino-input>
    <ino-input icon-leading icon-trailing label="Leading and Trailing icon">
      <ino-icon slot="icon-leading" icon="search"></ino-icon>
      <ino-icon slot="icon-trailing" icon="add"></ino-icon>
    </ino-input>
    <ino-input icon-trailing label="Clickable Icon">
      <ino-icon clickable slot="icon-trailing" icon="search"></ino-icon>
    </ino-input>
  \`
})`,...(R=(A=s.parameters)==null?void 0:A.docs)==null?void 0:R.source},description:{story:'Add icons to the ino-input element by adding a `slot` and an `icon`.\n\n- `slot="icon-leading"`: For the icon to be prepended\n- `slot="icon-trailing"`: For the icon to be appended\n- `icon="search"`: For a magnifying glass symbole\n- `icon="add"`: For a plus sign symbole\n- `clickable`: Marks the icon as clickable, curser changes to pointer on hover',...(V=(z=s.parameters)==null?void 0:z.docs)==null?void 0:V.description}}};var J,N,U,B,K;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input label="Datalist" data-list="languages">
      <datalist id="languages">
        <option>HTML</option>
        <option>Java</option>
        <option>Perl</option>
        <option>PHP</option>
        <option>Ruby on Rails</option>
      </datalist>
    </ino-input>
  \`
})`,...(U=(N=u.parameters)==null?void 0:N.docs)==null?void 0:U.source},description:{story:"Add a datalist to a ino-input-element by setting `data-list` to the ID of the `<datalist>` child-element",...(K=(B=u.parameters)==null?void 0:B.docs)==null?void 0:K.description}}};var Y,j,G,Q,X;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-input
      type="number"
      decimal-places="2"
      placeholder="With 2 decimal places"
    ></ino-input>
    <ino-input
      type="number"
      step="1"
      thousands-separator
      placeholder="With thousands separator"
    ></ino-input>
  \`
})`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source},description:{story:"Add number format by setting one of this properties\n\n- `decimal-places`: number of decimal places allowed\n- `thousands-separator`: add thousands separators",...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,ne;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'unit',
  render: () => html\`
    <ino-input value="2" type="number" unit="h" label="Hours input"></ino-input>
  \`
})`,...(ne=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const re=["Default","Type","States","Labels","HelperTexts","Icons","DataList","NumberFormats","MetaData"];export{u as DataList,n as Default,p as HelperTexts,s as Icons,r as Labels,d as MetaData,c as NumberFormats,l as States,a as Type,re as __namedExportsOrder,te as default};
