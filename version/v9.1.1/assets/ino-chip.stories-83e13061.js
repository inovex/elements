import{x as r}from"./lit-html-b5e645d2.js";import{S as o}from"./StoryWrapper-2a1c4c75.js";import"./elements-stencil-docs-5bebb05c.js";const j={title:"Buttons/ino-chip",component:"ino-chip",parameters:{actions:{handles:["chipClicked","chipRemoved"]}},render:i=>r`
    <ino-chip
      class="customizable-chip"
      disabled="${i.disabled}"
      fill="${i.fill}"
      removable="${i.removable}"
      selectable="${i.selectable}"
      selected="${i.selected}"
      value="${i.value}"
      clickable="${i.clickable}"
    >
      Label
    </ino-chip>
  `,args:{disabled:!1,fill:"solid",removable:!1,selectable:!1,selected:!1,clickable:!0,value:""}},n=o({...j}),p=o({...n,docsFromProperty:"fill",args:{fill:"solid"}}),h=o({...n,docsFromProperty:"fill",args:{fill:"outline"}}),a=o({...n,render:()=>r`
    <div class="ino-chip-story">
      <ino-chip>
        Leading
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
      </ino-chip>
      <ino-chip>
        Trailing
        <ino-icon slot="icon-trailing" icon="star"></ino-icon>
      </ino-chip>
      <ino-chip>
        <span>Leading & Trailing</span>
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
        <ino-icon slot="icon-trailing" icon="star"></ino-icon>
      </ino-chip>
    </div>
  `}),t=o({...n,render:()=>{const i=["Chip 1","Chip 2","Chip 3"],l=new Set,c=e=>{if(!(e!=null&&e.value))return;const s=l.has(e.value);e.selected=!s,s?l.delete(e.value):l.add(e.value)};return r`
      <div class="ino-chip-story">
        ${i.map(e=>r` <ino-chip
            value="${e}"
            selectable
            @chipClicked="${s=>c(s.target)}"
            >${e}
          </ino-chip>`)}
      </div>
    `}}),d=o({...n,render:()=>{const i=["Chip 1","Chip 2","Chip 3"],l=c=>c.remove();return r`
      <div class="ino-chip-story">
        ${i.map((c,e)=>r` <ino-chip
            value="${c}"
            removable="${e!==0}"
            @chipRemoved="${s=>l(s.target)}"
            >${c}
          </ino-chip>`)}
      </div>
    `}}),m=o({...n,docsFromProperty:"clickable",args:{clickable:!1}});var u,v,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`Story({
  ...InoChipMeta
})`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var C,g,b;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'fill',
  args: {
    fill: 'solid'
  }
})`,...(b=(g=p.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var $,S,y;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'fill',
  args: {
    fill: 'outline'
  }
})`,...(y=(S=h.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var k,F,I,D,L;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <div class="ino-chip-story">
      <ino-chip>
        Leading
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
      </ino-chip>
      <ino-chip>
        Trailing
        <ino-icon slot="icon-trailing" icon="star"></ino-icon>
      </ino-chip>
      <ino-chip>
        <span>Leading & Trailing</span>
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
        <ino-icon slot="icon-trailing" icon="star"></ino-icon>
      </ino-chip>
    </div>
  \`
})`,...(I=(F=a.parameters)==null?void 0:F.docs)==null?void 0:I.source},description:{story:"In order to include icons, use the `icon-leading` or `icon-trailing` slot",...(L=(D=a.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var T,P,x,R,w;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`Story({
  ...Default,
  render: () => {
    const values = ['Chip 1', 'Chip 2', 'Chip 3'];
    const selectedChips = new Set<string>();
    const handleClick = (chip: HTMLInoChipElement | undefined) => {
      if (!chip?.value) {
        return;
      }
      const isSelected = selectedChips.has(chip.value);
      chip.selected = !isSelected;
      if (isSelected) {
        selectedChips.delete(chip.value);
      } else {
        selectedChips.add(chip.value);
      }
    };
    return html\`
      <div class="ino-chip-story">
        \${values.map(value => html\` <ino-chip
            value="\${value}"
            selectable
            @chipClicked="\${ev => handleClick(ev.target)}"
            >\${value}
          </ino-chip>\`)}
      </div>
    \`;
  }
})`,...(x=(P=t.parameters)==null?void 0:P.docs)==null?void 0:x.source},description:{story:"In order to use ino-chips as filter, use `selectable` on each element",...(w=(R=t.parameters)==null?void 0:R.docs)==null?void 0:w.description}}};var M,E,O,H,N;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`Story({
  ...Default,
  render: () => {
    const chips = ['Chip 1', 'Chip 2', 'Chip 3'];
    const handleClick = (chip: HTMLInoChipElement) => chip.remove();
    return html\`
      <div class="ino-chip-story">
        \${chips.map((value, index) => html\` <ino-chip
            value="\${value}"
            removable="\${index !== 0}"
            @chipRemoved="\${ev => handleClick(ev.target)}"
            >\${value}
          </ino-chip>\`)}
      </div>
    \`;
  }
})`,...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:"In order to make ino-chip-elements removable, add `removable`. This will add a close icon on the right side of this chip which emits the `removeChip` event on click.",...(N=(H=d.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};var _,z,B;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'clickable',
  args: {
    clickable: false
  }
})`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const J=["Default","FillSolid","FillOutline","Icons","Filter","Remove","NotClickable"];export{n as Default,h as FillOutline,p as FillSolid,t as Filter,a as Icons,m as NotClickable,d as Remove,J as __namedExportsOrder,j as default};
