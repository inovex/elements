import"./lit-element-f72de906.js";import{T as k,w as R,x as h}from"./lit-html-b5e645d2.js";import{S as c}from"./StoryWrapper-674d0325.js";import"./elements-stencil-docs-09c5939d.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},q=d=>(...e)=>({_$litDirective$:d,values:e});class W{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends W{constructor(e){if(super(e),this.et=k,e.type!==U.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===k||e==null)return this.vt=void 0,this.et=e;if(e===R)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}u.directiveName="unsafeHTML",u.resultType=1;const V=q(u);const{useEffect:P}=__STORYBOOK_MODULE_PREVIEW_API__,Y=h`<tr slot="header-row"></tr>
  <ino-table-header-cell
    column-id="id"
    sort-start="asc"
    label="ID"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="name"
    sort-start="asc"
    label="Name"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="release"
    label="Release Date"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="box-office"
    label="Box Office"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="rating"
    label="Rating"
    not-sortable
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="another1"
    label="Another Column"
    not-sortable
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="another2"
    label="Another Column"
    not-sortable
  ></ino-table-header-cell>
  <tr>
    <td>1</td>
    <td>The Bourne Identity</td>
    <td>14.06.2002</td>
    <td>$214 million</td>
    <td>93%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Sully</td>
    <td>09.09.2016</td>
    <td>$240.8 million</td>
    <td>84%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Martian</td>
    <td>02.10.2015</td>
    <td>$630.2 million</td>
    <td>94%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>4</td>
    <td>John Wick: Chapter 3</td>
    <td>17.05.2019</td>
    <td>$326.7 million</td>
    <td>92%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>5</td>
    <td>10 Cloverfield Lane</td>
    <td>11.03.2016</td>
    <td>$110.2 million</td>
    <td>87%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Thor: Ragnarok</td>
    <td>10.10.2017</td>
    <td>$854 million</td>
    <td>92%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>7</td>
    <td>The latest movie</td>
    <td>01.01.2021</td>
    <td>$900 million</td>
    <td>95%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr> `,J={title:"Structure/ino-table",component:"ino-table",inline:!0,decorators:[d=>(P(()=>{const e=document.querySelectorAll("ino-table"),t=o=>{const{columnId:a,sortDirection:n}=o.detail;o.target.sortColumnId=a,o.target.sortDirection=n};return e.forEach(o=>o.addEventListener("sortChange",t)),()=>e.forEach(o=>o.removeEventListener("sortChange",t))}),d())],render:d=>h`
    <ino-table
      loading="${d.loading}"
      sort-column-id="${d.sortColumnId}"
      sort-direction="${d.sortDirection}"
      no-hover="${d.noHover}"
      sticky-header="${d.stickyHeader}"
    >
      ${d.loading?h`<ino-progress-bar
            slot="loading-indicator"
            indeterminate
            debounce="200"
            active
          ></ino-progress-bar>`:h``}
      ${Y}
    </ino-table>
  `,argTypes:{sortColumnId:{options:["id","name","release","box-office","rating"],control:{type:"select"}}},args:{loading:!1,sortColumnId:"id",noHover:!1,stickyHeader:!1,sortDirection:"asc"}},l=c({...J}),b=c({...l,docsFromProperty:"loading",args:{loading:!0}}),m=c({...l,docsFromProperty:"noHover",args:{noHover:!0}}),i=c({...l}),C=c({...l,docsFromProperty:"stickyHeader",args:{stickyHeader:!0}}),s=c({...l,render:()=>{const d=document.getElementById("headerBox"),e=t=>{const o=t.target;o.checked=!o.checked;const a=Array.from(document.querySelectorAll(".selectable-table tbody ino-checkbox"));if(o.id==="headerBox")o.indeterminate=!1,a.forEach(n=>{n.checked=d.checked;const r=n.closest("tr");r==null||r.classList.toggle("ino-table__row--selected",d.checked)});else if(d){const n=o.closest("tr");if(n==null||n.classList.toggle("ino-table__row--selected",o.checked),a.some(r=>r.checked))d.indeterminate=!0;else{const r=a.every(O=>O.checked);d.checked=r,d.indeterminate=r}}};return P(()=>{const t=document.querySelector(".selectable-table");return t==null||t.addEventListener("checkedChange",e),()=>t==null?void 0:t.removeEventListener("checkedChange",e)},[]),h`
      <ino-table class="selectable-table">
        ${V(`
        <tr slot="header-row">
          <td class="ino-table__cell--checkbox">
            <ino-checkbox id="headerBox" selection></ino-checkbox>
          </td>
          <td>Header A</td>
          <td>Header B</td>
          <td>Header C</td>
          <td>Header D</td>
          <td>Header E</td>
          <td>Header F</td>
          <td>Header G</td>
          <td>Header H</td>
          <td>Header I</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">1</td>
          <td>Cell B1</td>
          <td>Cell C1</td>
          <td>Cell D1</td>
          <td>Cell E1</td>
          <td>Cell F1</td>
          <td>Cell G1</td>
          <td>Cell H1</td>
          <td>Cell I1</td>
        </tr>
        <tr class="ino-table__row--selected">
          <td class="ino-table__cell--checkbox"><ino-checkbox selection checked></ino-checkbox></td>
          <td class="ino-table__cell--numeric">2</td>
          <td>Cell B2</td>
          <td>Cell C2</td>
          <td>Cell D2</td>
          <td>Cell E2</td>
          <td>Cell F2</td>
          <td>Cell G2</td>
          <td>Cell H2</td>
          <td>Cell I2</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">3</td>
          <td>Cell B3</td>
          <td>Cell C3</td>
          <td>Cell D3</td>
          <td>Cell E3</td>
          <td>Cell F3</td>
          <td>Cell G3</td>
          <td>Cell H3</td>
          <td>Cell I3</td>
        </tr>
        <tr class="ino-table__row--active">
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">4</td>
          <td>Cell B4</td>
          <td>Cell C4</td>
          <td>Cell D4</td>
          <td>Cell E4</td>
          <td>Cell F4</td>
          <td>Cell G4</td>
          <td>Cell H4</td>
          <td>Cell I4</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">5</td>
          <td>Cell B5</td>
          <td>Cell C5</td>
          <td>Cell D5</td>
          <td>Cell E5</td>
          <td>Cell F5</td>
          <td>Cell G5</td>
          <td>Cell H5</td>
          <td>Cell I5</td>
        </tr>
      `)}
      </ino-table>
    `}});var x,_,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`Story({
  ...InoTableMeta
})`,...(g=(_=l.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var f,p,H;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'loading',
  args: {
    loading: true
  }
})`,...(H=(p=b.parameters)==null?void 0:p.docs)==null?void 0:H.source}}};var y,S,E;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'noHover',
  args: {
    noHover: true
  }
})`,...(E=(S=m.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var v,B,I,D,$;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...Default
})`,...(I=(B=i.parameters)==null?void 0:B.docs)==null?void 0:I.source},description:{story:"For table sorting there are two needed props:\n\n`sortColumnId` identifies the column currently sorted by.\nNeeds to match the column ids provided on `ino-table-header-cell` elements.\n\n`sortDirection` shows direction of the column currently sorted by.\n@See Set `sort-start` attribute on the respective column to change the sort order.\n\nSorting-logic needs to be implemented by user.",...($=(D=i.parameters)==null?void 0:D.docs)==null?void 0:$.description}}};var T,L,A;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'stickyHeader',
  args: {
    stickyHeader: true
  }
})`,...(A=(L=C.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var w,F,G,M,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`Story({
  ...Default,
  render: () => {
    const mainBox = (document.getElementById('headerBox') as Components.InoCheckbox);
    const checkboxHandler = e => {
      const triggerCheckbox = e.target;
      triggerCheckbox.checked = !triggerCheckbox.checked;
      const checkboxes = (Array.from(document.querySelectorAll('.selectable-table tbody ino-checkbox')) as Components.InoCheckbox[]);
      if (triggerCheckbox.id === 'headerBox') {
        triggerCheckbox.indeterminate = false;
        checkboxes.forEach(checkbox => {
          checkbox.checked = mainBox.checked;
          const row = (checkbox as HTMLElement).closest('tr');
          row?.classList.toggle('ino-table__row--selected', mainBox.checked);
        });
      } else if (mainBox) {
        const row = (triggerCheckbox as HTMLElement).closest('tr');
        row?.classList.toggle('ino-table__row--selected', triggerCheckbox.checked);
        if (checkboxes.some(i => i.checked)) {
          mainBox.indeterminate = true;
        } else {
          const allChecked = checkboxes.every(i => i.checked);
          mainBox.checked = allChecked;
          mainBox.indeterminate = allChecked;
        }
      }
    };
    useEffect(() => {
      const table = document.querySelector('.selectable-table');
      table?.addEventListener('checkedChange', checkboxHandler);
      return () => table?.removeEventListener('checkedChange', checkboxHandler);
    }, []);
    return html\`
      <ino-table class="selectable-table">
        \${unsafeHTML( /*html*/\`
        <tr slot="header-row">
          <td class="ino-table__cell--checkbox">
            <ino-checkbox id="headerBox" selection></ino-checkbox>
          </td>
          <td>Header A</td>
          <td>Header B</td>
          <td>Header C</td>
          <td>Header D</td>
          <td>Header E</td>
          <td>Header F</td>
          <td>Header G</td>
          <td>Header H</td>
          <td>Header I</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">1</td>
          <td>Cell B1</td>
          <td>Cell C1</td>
          <td>Cell D1</td>
          <td>Cell E1</td>
          <td>Cell F1</td>
          <td>Cell G1</td>
          <td>Cell H1</td>
          <td>Cell I1</td>
        </tr>
        <tr class="ino-table__row--selected">
          <td class="ino-table__cell--checkbox"><ino-checkbox selection checked></ino-checkbox></td>
          <td class="ino-table__cell--numeric">2</td>
          <td>Cell B2</td>
          <td>Cell C2</td>
          <td>Cell D2</td>
          <td>Cell E2</td>
          <td>Cell F2</td>
          <td>Cell G2</td>
          <td>Cell H2</td>
          <td>Cell I2</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">3</td>
          <td>Cell B3</td>
          <td>Cell C3</td>
          <td>Cell D3</td>
          <td>Cell E3</td>
          <td>Cell F3</td>
          <td>Cell G3</td>
          <td>Cell H3</td>
          <td>Cell I3</td>
        </tr>
        <tr class="ino-table__row--active">
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">4</td>
          <td>Cell B4</td>
          <td>Cell C4</td>
          <td>Cell D4</td>
          <td>Cell E4</td>
          <td>Cell F4</td>
          <td>Cell G4</td>
          <td>Cell H4</td>
          <td>Cell I4</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">5</td>
          <td>Cell B5</td>
          <td>Cell C5</td>
          <td>Cell D5</td>
          <td>Cell E5</td>
          <td>Cell F5</td>
          <td>Cell G5</td>
          <td>Cell H5</td>
          <td>Cell I5</td>
        </tr>
      \`)}
      </ino-table>
    \`;
  }
})`,...(G=(F=s.parameters)==null?void 0:F.docs)==null?void 0:G.source},description:{story:"Use `ino-checkbox` elements in the first column for checkbox-selection",...(N=(M=s.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};const X=["Default","Loading","NoHover","SortColumnIdAndSortDirection","StickyHeader","SelectionWithCheckboxes"];export{l as Default,b as Loading,m as NoHover,s as SelectionWithCheckboxes,i as SortColumnIdAndSortDirection,C as StickyHeader,X as __namedExportsOrder,J as default};
