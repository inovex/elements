import{x as i}from"./lit-html-b5e645d2.js";import{S as r}from"./StoryWrapper-03bb9100.js";import"./elements-stencil-docs-98c6df11.js";let oe=1;const re={title:"Notification/ino-popover",component:"ino-popover",parameters:{actions:{handles:["visibleChange ino-popover"]},docs:{story:{height:"200px"}}},argTypes:{placement:{control:{type:"select"},options:["top","right","bottom","left"]},trigger:{control:{type:"select"},options:["mouseenter","focus","click","mouseenter focus","mouseenter click","focus click","mouseenter focus click"]},colorScheme:{control:{type:"select"},options:["light","dark","primary"]},delay:{control:{type:"object"}},followCursor:{control:{type:"radio"},options:[!0,!1,"initial","horizontal","vertical"]}},render:e=>{const n=`popover-${oe++}`;return i`
      <ino-button id="${n}" class="${e.placementClass}">Popover</ino-button>
      <ino-popover
        color-scheme="${e.colorScheme}"
        controlled="${e.controlled}"
        distance="${e.distance}"
        for="${n}"
        interactive="${e.interactive}"
        .followCursor="${e.followCursor}"
        placement="${e.placement}"
        trigger="${e.trigger}"
        visible="${e.visible}"
        hide-on-blur="${e.hideOnBlur}"
        hide-on-esc="${e.hideOnEsc}"
        delay=${typeof e.delay=="number"?e.delay:[e.delay]}
        arrow="${e.arrow}"
      >
        <div
          style="display: flex; flex-direction: column; gap: 0.5rem; padding: 0.5rem"
        >
          <p>Popovers are complex tooltips.</p>
          <ino-chip>
            Able to contain other HTML-Elements?
            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
          </ino-chip>
        </div>
      </ino-popover>
    `},args:{controlled:!1,distance:15,for:"popover-target",interactive:!1,placement:"top",trigger:"mouseenter",colorScheme:"light",visible:!1,hideOnEsc:!1,hideOnBlur:!1,delay:0,arrow:!1,placementClass:"",headerText:""}},o=r({...re}),c=r({...o,docsFromProperty:"arrow",args:{arrow:!0}}),a=r({...o,docsFromProperty:"placement",args:{placement:"right",placementClass:"styled-placement"}}),s=r({...o,docsFromProperty:"attachToBody",args:{attachToBody:!0}}),l=r({...o,docsFromProperty:"distance",args:{distance:30}}),d=r({...o,docsFromProperty:"colorScheme",render:e=>{const n="popover-light",t="popover-dark",$="popover-primary",y=i`<p style="padding: 0.5rem">
      Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet
      ipsum do.
    </p>`;return i`
      <ino-button id="${n}">Light</ino-button>
      <ino-popover
        color-scheme="light"
        controlled="${e.controlled}"
        distance="${e.distance}"
        for="${n}"
        interactive="${e.interactive}"
        followCursor="${e.followCursor}"
        placement="${e.placement}"
        trigger="${e.trigger}"
        visible="${e.visible}"
        hide-on-blur="${e.hideOnBlur}"
        hide-on-esc="${e.hideOnEsc}"
        delay=${typeof e.delay=="number"?e.delay:[e.delay]}
        arrow="${e.arrow}"
      >
        ${y}
      </ino-popover>
      <ino-button id="${t}">Dark</ino-button>
      <ino-popover
        color-scheme="dark"
        controlled="${e.controlled}"
        distance="${e.distance}"
        for="${t}"
        interactive="${e.interactive}"
        followCursor="${e.followCursor}"
        placement="${e.placement}"
        trigger="${e.trigger}"
        visible="${e.visible}"
        hide-on-blur="${e.hideOnBlur}"
        hide-on-esc="${e.hideOnEsc}"
        delay=${typeof e.delay=="number"?e.delay:[e.delay]}
        arrow="${e.arrow}"
      >
        ${y}
      </ino-popover>
      <ino-button id="${$}">Primary</ino-button>
      <ino-popover
        color-scheme="primary"
        controlled="${e.controlled}"
        distance="${e.distance}"
        for="${$}"
        interactive="${e.interactive}"
        followCursor="${e.followCursor}"
        placement="${e.placement}"
        trigger="${e.trigger}"
        visible="${e.visible}"
        hide-on-blur="${e.hideOnBlur}"
        hide-on-esc="${e.hideOnEsc}"
        delay=${typeof e.delay=="number"?e.delay:[e.delay]}
        arrow="${e.arrow}"
      >
        ${y}
      </ino-popover>
    `}}),p=r({...o,docsFromProperty:"trigger",args:{trigger:"click"}}),m=r({...o,docsFromProperty:"followCursor",args:{followCursor:"horizontal"}}),u=r({...o,docsFromProperty:"interactive",render:()=>i`
    <ino-popover
      trigger="click"
      for="popover-interactive-target"
      distance="15"
      interactive
      placement="top"
    >
      <div class="interactive-popover">
        <p>I'm interactive. You can click me without closing this popover!</p>
        <ino-button>Button not closing the popover</ino-button>
      </div>
    </ino-popover>
    <ino-button
      class="placement-button big-space"
      id="popover-interactive-target"
      >Interactive Content
    </ino-button>
  `,args:{interactive:!0}}),v=r({...o,docsFromProperty:"controlled",render:()=>i`
      <ino-popover
        id="controlled-popover"
        placement="top"
        controlled="true"
        trigger="click"
        visible="false"
        distance="15"
        @visibleChanged="${n=>{var t;(t=n.target)==null||t.setAttribute("visible",n.detail),document.querySelector("#controlled-checkbox").checked=n.detail}}"
      >
        <ino-checkbox id="controlled-checkbox" slot="popover-trigger">
          Uncheck to hide / check to show
        </ino-checkbox>
        <div style="padding: 0.5rem">
          <ino-chip>
            Programmatically shown?
            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
          </ino-chip>
        </div>
      </ino-popover>
    `,args:{controlled:!0}}),g=r({...o,docsFromProperty:"visible",args:{visible:!0}}),h=r({...o,docsFromProperty:"delay",args:{delay:[500,200]}});var b,f,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...InoPopoverMeta
})`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var k,P,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'arrow',
  args: {
    arrow: true
  }
})`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var S,F,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'right',
    placementClass: 'styled-placement'
  }
})`,...(D=(F=a.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var O,x,B;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'attachToBody',
  args: {
    attachToBody: true
  }
})`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var E,T,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'distance',
  args: {
    distance: 30
  }
})`,...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var I,A,H;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'colorScheme',
  render: args => {
    const idLight = 'popover-light';
    const idDark = 'popover-dark';
    const idPrimary = 'popover-primary';
    const content = html\`<p style="padding: 0.5rem">
      Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet
      ipsum do.
    </p>\`;
    return html\`
      <ino-button id="\${idLight}">Light</ino-button>
      <ino-popover
        color-scheme="light"
        controlled="\${args.controlled}"
        distance="\${args.distance}"
        for="\${idLight}"
        interactive="\${args.interactive}"
        followCursor="\${args.followCursor}"
        placement="\${args.placement}"
        trigger="\${args.trigger}"
        visible="\${args.visible}"
        hide-on-blur="\${args.hideOnBlur}"
        hide-on-esc="\${args.hideOnEsc}"
        delay=\${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="\${args.arrow}"
      >
        \${content}
      </ino-popover>
      <ino-button id="\${idDark}">Dark</ino-button>
      <ino-popover
        color-scheme="dark"
        controlled="\${args.controlled}"
        distance="\${args.distance}"
        for="\${idDark}"
        interactive="\${args.interactive}"
        followCursor="\${args.followCursor}"
        placement="\${args.placement}"
        trigger="\${args.trigger}"
        visible="\${args.visible}"
        hide-on-blur="\${args.hideOnBlur}"
        hide-on-esc="\${args.hideOnEsc}"
        delay=\${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="\${args.arrow}"
      >
        \${content}
      </ino-popover>
      <ino-button id="\${idPrimary}">Primary</ino-button>
      <ino-popover
        color-scheme="primary"
        controlled="\${args.controlled}"
        distance="\${args.distance}"
        for="\${idPrimary}"
        interactive="\${args.interactive}"
        followCursor="\${args.followCursor}"
        placement="\${args.placement}"
        trigger="\${args.trigger}"
        visible="\${args.visible}"
        hide-on-blur="\${args.hideOnBlur}"
        hide-on-esc="\${args.hideOnEsc}"
        delay=\${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="\${args.arrow}"
      >
        \${content}
      </ino-popover>
    \`;
  }
})`,...(H=(A=d.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var M,z,U;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'trigger',
  args: {
    trigger: 'click'
  }
})`,...(U=(z=p.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var V,_,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'followCursor',
  args: {
    followCursor: 'horizontal'
  }
})`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var N,R,Y;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'interactive',
  render: () => html\`
    <ino-popover
      trigger="click"
      for="popover-interactive-target"
      distance="15"
      interactive
      placement="top"
    >
      <div class="interactive-popover">
        <p>I'm interactive. You can click me without closing this popover!</p>
        <ino-button>Button not closing the popover</ino-button>
      </div>
    </ino-popover>
    <ino-button
      class="placement-button big-space"
      id="popover-interactive-target"
      >Interactive Content
    </ino-button>
  \`,
  args: {
    interactive: true
  }
})`,...(Y=(R=u.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var j,G,J;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'controlled',
  render: () => {
    const eventHandler = e => {
      e.target?.setAttribute('visible', e.detail);
      (document.querySelector('#controlled-checkbox') as HTMLInputElement).checked = e.detail;
    };
    return html\`
      <ino-popover
        id="controlled-popover"
        placement="top"
        controlled="true"
        trigger="click"
        visible="false"
        distance="15"
        @visibleChanged="\${eventHandler}"
      >
        <ino-checkbox id="controlled-checkbox" slot="popover-trigger">
          Uncheck to hide / check to show
        </ino-checkbox>
        <div style="padding: 0.5rem">
          <ino-chip>
            Programmatically shown?
            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
          </ino-chip>
        </div>
      </ino-popover>
    \`;
  },
  args: {
    controlled: true
  }
})`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,W;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'visible',
  args: {
    visible: true
  }
})`,...(W=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,ee;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'delay',
  args: {
    delay: [500, 200]
  }
})`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ce=["Default","Arrow","Placement","AttachToBody","Distance","ColorSchemes","Trigger","FollowCursor","Interactive","Controlled","Visible","Delay"];export{c as Arrow,s as AttachToBody,d as ColorSchemes,v as Controlled,o as Default,h as Delay,l as Distance,m as FollowCursor,u as Interactive,a as Placement,p as Trigger,g as Visible,ce as __namedExportsOrder,re as default};
