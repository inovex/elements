import{x as u}from"./lit-html-b5e645d2.js";import{S as t}from"./StoryWrapper-36ac2276.js";import{g as K}from"./utils-784729f7.js";import{r as V}from"./utils-d87de704.js";import"./elements-stencil-docs-6f259965.js";const{useEffect:p}=__STORYBOOK_MODULE_PREVIEW_API__,z={title:"Structure/ino-table-header-cell",component:"ino-table-header-cell",decorators:[e=>(p(()=>{const i=n=>{const k=n.target,{columnId:X,sortDirection:N}=n.detail;k.sortColumnId=X,k.sortDirection=N};document.addEventListener("sortChange",i);const r=n=>n.target.value=n.detail,b=document.querySelectorAll("ino-input");return b.forEach(n=>n.addEventListener("valueChange",r)),()=>{document.removeEventListener("sortChange",i),b.forEach(n=>n.removeEventListener("valueChange",r))}}),e())],render:e=>u`
    <ino-table>
      <ino-table-header-cell
        autofocus="${e.autofocus}"
        not-sortable="${e.notSortable}"
        sort-direction="${e.sortDirection}"
        search-icon="${e.searchIcon}"
        searched="${e.searched}"
        label="${e.label}"
      >
        <ino-input placeholder="Search for XY..." data-ino-focus>
          <ino-icon clickable slot="icon-trailing" icon="close"></ino-icon>
        </ino-input>
      </ino-table-header-cell>
      </tr>
    </ino-table>
  `,argTypes:{searchIcon:{control:{type:"select"},options:K()}},args:{autofocus:!1,notSortable:!1,label:"Label",columnId:"",sortDirection:"",searched:!1,searchIcon:"search"}},o=t({...z}),s=t({...o,docsFromProperty:"label",args:{label:"Search for XY..."}}),l=t({...o,docsFromProperty:"sortDirection",args:{sortDirection:"desc"}}),d=t({...o,docsFromProperty:"notSortable",args:{notSortable:!0}}),m=t({...o,docsFromProperty:"searchIcon",args:{searchIcon:"search"}}),h=t({...o,docsFromProperty:"searched",args:{searched:!0}}),a=t({...o,render:()=>u`
    ${p(V)}
    <ino-table>
      <tr slot="header-row">
        <ino-table-header-cell
          label="Column Selection Search"
          search-icon="calendar"
          class="datepicker-cell"
        >
          <div lang="de" class="datepicker-group">
            <aside>
              <ul>
                <li class="today">Today</li>
                <li class="lastWeek">last week</li>
                <li class="thisWeek">this week</li>
              </ul>
            </aside>
            <main id="main">
              <ino-datepicker
                type="date"
                label="An"
                inline
                date-format="d.m.Y"
                placeholder="tt.mm.jjjj"
                append-to="main"
                data-ino-focus
              ></ino-datepicker>
              <ino-radio-group value="at">
                <ino-radio value="at">At</ino-radio>
                <ino-radio value="after">After</ino-radio>
                <ino-radio value="before">Before</ino-radio>
                <ino-radio value="range">Range</ino-radio>
              </ino-radio-group>
            </main>
          </div>
        </ino-table-header-cell>
      </tr>
    </ino-table>
  `}),c=t({...o,render:()=>(p(()=>{const e=document.querySelectorAll("ino-checkbox"),i=r=>r.target.checked=r.detail;return e.forEach(()=>addEventListener("checkedChange",i)),()=>e.forEach(()=>removeEventListener("checkedChange",i))}),u`
      <ino-table>
        <tr slot="header-row">
          <ino-table-header-cell
            label="Column Selection Search"
            search-icon="filter"
          >
            <ino-list>
              <ino-list-item text="Option 1">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 2">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 3">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 4">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
            </ino-list>
          </ino-table-header-cell>
        </tr>
      </ino-table>
    `)});var g,S,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`Story({
  ...InoTableHeaderCellMeta
})`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,x,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'label',
  args: {
    label: 'Search for XY...'
  }
})`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var D,E,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'sortDirection',
  args: {
    sortDirection: 'desc'
  }
})`,...(C=(E=l.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var I,O,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'notSortable',
  args: {
    notSortable: true
  }
})`,...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var P,w,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'searchIcon',
  args: {
    searchIcon: 'search'
  }
})`,...(H=(w=m.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var A,F,W;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'searched',
  args: {
    searched: true
  }
})`,...(W=(F=h.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var _,j,T,$,Y;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    \${useEffect(registerInlineDatepickerHandler)}
    <ino-table>
      <tr slot="header-row">
        <ino-table-header-cell
          label="Column Selection Search"
          search-icon="calendar"
          class="datepicker-cell"
        >
          <div lang="de" class="datepicker-group">
            <aside>
              <ul>
                <li class="today">Today</li>
                <li class="lastWeek">last week</li>
                <li class="thisWeek">this week</li>
              </ul>
            </aside>
            <main id="main">
              <ino-datepicker
                type="date"
                label="An"
                inline
                date-format="d.m.Y"
                placeholder="tt.mm.jjjj"
                append-to="main"
                data-ino-focus
              ></ino-datepicker>
              <ino-radio-group value="at">
                <ino-radio value="at">At</ino-radio>
                <ino-radio value="after">After</ino-radio>
                <ino-radio value="before">Before</ino-radio>
                <ino-radio value="range">Range</ino-radio>
              </ino-radio-group>
            </main>
          </div>
        </ino-table-header-cell>
      </tr>
    </ino-table>
  \`
})`,...(T=(j=a.parameters)==null?void 0:j.docs)==null?void 0:T.source},description:{story:"Use a `ino-datepicker` element inside of a `ino-table-header-cell` element to show a search with a datepicker on click",...(Y=($=a.parameters)==null?void 0:$.docs)==null?void 0:Y.description}}};var R,q,B,M,U;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`Story({
  ...Default,
  render: () => {
    useEffect(() => {
      const checkboxes = document.querySelectorAll('ino-checkbox');
      const checkedHandler = e => (e.target as Components.InoCheckbox).checked = (e as CustomEvent).detail;
      checkboxes.forEach(() => addEventListener('checkedChange', checkedHandler));
      return () => checkboxes.forEach(() => removeEventListener('checkedChange', checkedHandler));
    });
    return html\`
      <ino-table>
        <tr slot="header-row">
          <ino-table-header-cell
            label="Column Selection Search"
            search-icon="filter"
          >
            <ino-list>
              <ino-list-item text="Option 1">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 2">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 3">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 4">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
            </ino-list>
          </ino-table-header-cell>
        </tr>
      </ino-table>
    \`;
  }
})`,...(B=(q=c.parameters)==null?void 0:q.docs)==null?void 0:B.source},description:{story:"Use a `ino-list` element inside a `ino-table-header-cell` element to show a list selection on click",...(U=(M=c.parameters)==null?void 0:M.docs)==null?void 0:U.description}}};const oe=["Default","Label","SortDirection","NotSortable","SearchIcon","Searched","SearchWithDatepicker","SearchWithSelection"];export{o as Default,s as Label,d as NotSortable,m as SearchIcon,a as SearchWithDatepicker,c as SearchWithSelection,h as Searched,l as SortDirection,oe as __namedExportsOrder,z as default};
