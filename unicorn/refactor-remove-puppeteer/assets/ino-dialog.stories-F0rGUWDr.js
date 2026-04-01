import{b}from"./lit-html-odaN0r1L.js";import{S as n}from"./StoryWrapper-CB660Xf5.js";import{l as J,m as N,n as Q}from"./nidaros-DoXsHWp0.js";import"./elements-stencil-docs-CE9fhhj4.js";const{useEffect:X}=__STORYBOOK_MODULE_PREVIEW_API__,Z=o=>{const r=o.target;r.value=o.detail},oo={title:"Structure/ino-dialog",component:"ino-dialog",decorators:[o=>(X(()=>{const r=e=>{const u=document.getElementById(e.target.parentElement.getAttribute("data-dialog-id"));u.open=!0},p=document.querySelectorAll(".open-dialog-btn");p.forEach(e=>e.addEventListener("click",r));const d=document.querySelectorAll("ino-dialog"),c=e=>{if(e.target.open=!1,e.target.id=="demo-action-dialog"){const u=document.createElement("ino-snackbar");u.innerText=`Closed with action: ${e.detail}`,document.body.appendChild(u)}};return d.forEach(e=>e.addEventListener("close",c)),d.forEach(e=>e.addEventListener("action",c)),()=>{p.forEach(e=>e.removeEventListener("click",r)),d.forEach(e=>e.removeEventListener("close",c)),d.forEach(e=>e.removeEventListener("action",c))}}),o())],render:o=>b`
    <ino-button class="open-dialog-btn" data-dialog-id="${o.dataDialogId}">${o.buttonText}</ino-button>
    <ino-dialog
      id="${o.dataDialogId}"
      open="${o.open}"
      fullwidth="${o.fullwidth}"
      dismissible="${o.dismissible}"
      attach-to="${o.attachTo}"
      header-text="${o.headerText}"
      body-text="${o.bodyText}"
      action-text="${o.actionText}"
      cancel-text="${o.cancelText}"
      icon="${o.icon}"
      close-icon="${o.closeIcon}"
    >
    </ino-dialog>
  `,args:{attachTo:"",open:!1,dialogRole:"dialog",fullwidth:!1,dismissible:!0,headerText:"Hi, I am a headline",bodyText:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conset",actionText:"submit",cancelText:"cancel",icon:"search",buttonText:"Open Dialog",dataDialogId:"ino-dialog-1",closeICon:!1}},t=n({...oo}),a=n({...t,render:o=>b`
    <ino-button class="open-dialog-btn" data-dialog-id="${o.dataDialogId}">${o.buttonText}</ino-button>
    <ino-dialog
      id="${o.dataDialogId}"
      open="${o.open}"
      fullwidth="${o.fullwidth}"
      dismissible="${o.dismissible}"
      attach-to="${o.attachTo}"
      header-text="${o.headerText}"
      action-text="${o.actionText}"
      cancel-text="${o.cancelText}"
      body-text="${o.bodyText}"
    >
    </ino-dialog>
  `,args:{headerText:"Do you really want to delete your account?",bodyText:"After deleting your account, you will no longer be able to access your saved items.",cancelText:"Cancel",actionText:"Delete account",dataDialogId:"demo-conformation-with-text-dialog",buttonText:"Open confirmation Dialog with text"}}),i=n({...t,render:o=>b`
    <ino-button class="open-dialog-btn" data-dialog-id="${o.dataDialogId}">${o.buttonText}</ino-button>
    <ino-dialog
      id="${o.dataDialogId}"
      open="${o.open}"
      fullwidth="${o.fullwidth}"
      dismissible="${o.dismissible}"
      attach-to="${o.attachTo}"
      header-text="${o.headerText}"
      action-text="${o.actionText}"
      body-text="${o.bodyText}"
      icon="${o.icon}"
    >
    </ino-dialog>
  `,args:{headerText:"Perfect! You almost made it...",bodyText:"A confirmation email is on the way. Please click on the link in the email to complete the registration and secure your discount code.",actionText:"Confirm",dataDialogId:"demo-conformation-with-icon-dialog",buttonText:"Open confirmation Dialog with icon",icon:"message"}}),s=n({...t,render:o=>b`
    <ino-button class="open-dialog-btn" data-dialog-id="${o.dataDialogId}">${o.buttonText}</ino-button>
    <ino-dialog
      id="${o.dataDialogId}"
      open="${o.open}"
      fullwidth="${o.fullwidth}"
      dismissible="${o.dismissible}"
      attach-to="${o.attachTo}"
      action-text="${o.actionText}"
      cancel-text="${o.cancelText}"
    >
      <header slot="header">
        <h3>Custom Header</h3>
        <ino-icon icon="info"></ino-icon>
      </header>
      <section slot="body">
        <ino-carousel
          class="customizable-carousel"
          value="0"
          autoplay="true"
          hide-buttons="true"
          infinite="true"
          intermission="2000"
          reverse="false"
          @valueChange="${Z}"
        >
          <ino-carousel-slide src=${J} value="0"></ino-carousel-slide>
          <ino-carousel-slide src=${N} value="1"></ino-carousel-slide>
          <ino-carousel-slide src=${Q} value="2"></ino-carousel-slide>
        </ino-carousel>
      </section>
      <footer slot="footer">
        <ino-button>Button 1</ino-button>
        <ino-button>Button 2</ino-button>
        <ino-button variant="outlined">Button 3</ino-button>
      </footer>
    </ino-dialog>
  `}),m=n({...t,docsFromProperty:"fullwidth",args:{fullwidth:!0,buttonText:"Open full width Dialog",dataDialogId:"demo-fullwidth-dialog"}}),g=n({...t,docsFromProperty:"dismissible",args:{dismissible:!0,buttonText:"Open dismissible Dialog",dataDialogId:"demo-dismissible-dialog"}}),h=n({...t,docsFromProperty:"closeIcon",args:{closeIcon:!0}}),l=n({...t,args:{dataDialogId:"demo-action-dialog",buttonText:"open closing action Dialog"}});var f,x,$;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...InoDialogMeta
})`,...($=(x=t.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var T,y,D,w,I;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`Story({
  ...Default,
  render: args => html\`
    <ino-button class="open-dialog-btn" data-dialog-id="\${args.dataDialogId}">\${args.buttonText}</ino-button>
    <ino-dialog
      id="\${args.dataDialogId}"
      open="\${args.open}"
      fullwidth="\${args.fullwidth}"
      dismissible="\${args.dismissible}"
      attach-to="\${args.attachTo}"
      header-text="\${args.headerText}"
      action-text="\${args.actionText}"
      cancel-text="\${args.cancelText}"
      body-text="\${args.bodyText}"
    >
    </ino-dialog>
  \`,
  args: {
    headerText: 'Do you really want to delete your account?',
    bodyText: 'After deleting your account, you will no longer be able to access your saved items.',
    cancelText: 'Cancel',
    actionText: 'Delete account',
    dataDialogId: 'demo-conformation-with-text-dialog',
    buttonText: 'Open confirmation Dialog with text'
  }
})`,...(D=(y=a.parameters)==null?void 0:y.docs)==null?void 0:D.source},description:{story:"A Confirmation Dialog with Text requires an action to be taken in order for the dialog to be completed and closed.\n\nContains a `headerText`, `bodyText`, `cancelText` and `actionText`.",...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.description}}};var v,C,S,E,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...Default,
  render: args => html\`
    <ino-button class="open-dialog-btn" data-dialog-id="\${args.dataDialogId}">\${args.buttonText}</ino-button>
    <ino-dialog
      id="\${args.dataDialogId}"
      open="\${args.open}"
      fullwidth="\${args.fullwidth}"
      dismissible="\${args.dismissible}"
      attach-to="\${args.attachTo}"
      header-text="\${args.headerText}"
      action-text="\${args.actionText}"
      body-text="\${args.bodyText}"
      icon="\${args.icon}"
    >
    </ino-dialog>
  \`,
  args: {
    headerText: 'Perfect! You almost made it...',
    bodyText: 'A confirmation email is on the way. Please click on the link in the email to complete the registration and secure your discount code.',
    actionText: 'Confirm',
    dataDialogId: 'demo-conformation-with-icon-dialog',
    buttonText: 'Open confirmation Dialog with icon',
    icon: 'message'
  }
})`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:'A Confirmation Dialog with Hero Icon requires an acknowledgement of the information from the user. User has to confirm with one klick on the primary button.\n\n\nContains a `ino-icon` (use `icon="iconID"` on the `ino-dialog` to select one of the given [ino-icons](https://elements.inovex.de/version/v8.0.0/?path=/docs/graphic-ino-icon--all-icons)), `headerText`, `bodyText`, `canceltext` and `actionText`.',...(k=(E=i.parameters)==null?void 0:E.docs)==null?void 0:k.description}}};var O,A,P,B,L;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`Story({
  ...Default,
  render: args => html\`
    <ino-button class="open-dialog-btn" data-dialog-id="\${args.dataDialogId}">\${args.buttonText}</ino-button>
    <ino-dialog
      id="\${args.dataDialogId}"
      open="\${args.open}"
      fullwidth="\${args.fullwidth}"
      dismissible="\${args.dismissible}"
      attach-to="\${args.attachTo}"
      action-text="\${args.actionText}"
      cancel-text="\${args.cancelText}"
    >
      <header slot="header">
        <h3>Custom Header</h3>
        <ino-icon icon="info"></ino-icon>
      </header>
      <section slot="body">
        <ino-carousel
          class="customizable-carousel"
          value="0"
          autoplay="true"
          hide-buttons="true"
          infinite="true"
          intermission="2000"
          reverse="false"
          @valueChange="\${onSlideChanged}"
        >
          <ino-carousel-slide src=\${lightningImg} value="0"></ino-carousel-slide>
          <ino-carousel-slide src=\${mountainsImg} value="1"></ino-carousel-slide>
          <ino-carousel-slide src=\${nidarosImg} value="2"></ino-carousel-slide>
        </ino-carousel>
      </section>
      <footer slot="footer">
        <ino-button>Button 1</ino-button>
        <ino-button>Button 2</ino-button>
        <ino-button variant="outlined">Button 3</ino-button>
      </footer>
    </ino-dialog>
  \`
})`,...(P=(A=s.parameters)==null?void 0:A.docs)==null?void 0:P.source},description:{story:'By using `slot name="header"`, `slot name="body"` or `slot name="footer"` you can respectively replace the default `<header>`, `<section>` (body) or `<footer>` elements of the `ino-dialog` with your own custom content.\n\nBy using the default slot you can completely replace the elements of the `ino-dialog` with your own markdown.',...(L=(B=s.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var W,_,F;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'fullwidth',
  args: {
    fullwidth: true,
    buttonText: 'Open full width Dialog',
    dataDialogId: 'demo-fullwidth-dialog'
  }
})`,...(F=(_=m.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var q,H,U;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dismissible',
  args: {
    dismissible: true,
    buttonText: 'Open dismissible Dialog',
    dataDialogId: 'demo-dismissible-dialog'
  }
})`,...(U=(H=g.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var M,R,Y;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'closeIcon',
  args: {
    closeIcon: true
  }
})`,...(Y=(R=h.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var z,j,K,V,G;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`Story({
  ...Default,
  args: {
    dataDialogId: 'demo-action-dialog',
    buttonText: 'open closing action Dialog'
  }
})`,...(K=(j=l.parameters)==null?void 0:j.docs)==null?void 0:K.source},description:{story:"Closing actions allow you to handle different button actions (like confirm, cancel, ...) using the `close` event listener on the dialog.\nClose the dialog and see the snackbar afterwards.",...(G=(V=l.parameters)==null?void 0:V.docs)==null?void 0:G.description}}};const io=["Default","ConfirmationDialogWithText","ConfirmationDialogWithIcon","UsingSlots","FullWidth","Dismissible","WithCloseIcon","ClosingAction"];export{l as ClosingAction,i as ConfirmationDialogWithIcon,a as ConfirmationDialogWithText,t as Default,g as Dismissible,m as FullWidth,s as UsingSlots,h as WithCloseIcon,io as __namedExportsOrder,oo as default};
