"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[1034],{4022:(v,d,r)=>{function h(){return"_"+Math.random().toString(36).substr(2,9)}function i(t,a){return t.querySelector(`[slot="${a}"]`)}function c(t,a){var p;return a?t.querySelectorAll(`[slot="${a}"]`).length>0:0===(null===(p=t.querySelector("slot"))||void 0===p?void 0:p.assignedElements().length)}function n(t){var a;null===(a=t.querySelector("[data-ino-focus]"))||void 0===a||a.focus()}function s(t){t.stopPropagation(),t.preventDefault()}r.d(d,{a:()=>i,f:()=>n,g:()=>h,h:()=>c,p:()=>s})},1034:(v,d,r)=>{r.r(d),r.d(d,{ino_popover:()=>g});var h=r(9671),i=r(2975),c=r(8728),n=r(5644),s=r(4022),t=r(804);r(6277);const p={name:"hideOnPopperBlur",defaultValue:!0,fn:e=>({onCreate(){e.popper.addEventListener("focusout",o=>{e.props.hideOnPopperBlur&&o.relatedTarget&&!e.popper.contains(o.relatedTarget)&&e.hide()})}})},_={name:"hideOnEsc",defaultValue:!0,fn({hide:e}){function o(l){"Escape"===l.key&&e()}return{onShow(){document.addEventListener("keydown",o)},onHide(){document.removeEventListener("keydown",o)}}}},g=class{constructor(e){(0,i.r)(this,e),this.visibleChanged=(0,i.c)(this,"visibleChanged",7),this.placement="auto",this.attachToBody=!1,this.hideOnBlur=!1,this.hideOnEsc=!1,this.distance=10,this.colorScheme="primary",this.interactive=!1,this.followCursor=!1,this.trigger="mouseenter focus",this.delay=0,this.controlled=!1,this.visible=!1}placementChanged(){var e;null===(e=this.tippyInstance)||void 0===e||e.setProps({placement:this.placement})}bodyChanged(){this.create()}forChanged(){this.create()}hideOnBlurChanged(){this.create()}hideOnEscChanged(){this.create()}distanceChanged(){var e;null===(e=this.tippyInstance)||void 0===e||e.setProps({offset:[0,this.distance]})}interactiveChanged(){this.create()}followCursorChanged(){this.create()}triggerChanged(){var e;null===(e=this.tippyInstance)||void 0===e||e.setProps({trigger:this.trigger})}onDelayChange(){var e;null===(e=this.tippyInstance)||void 0===e||e.setProps({delay:this.delay})}getTippyInstance(){var e=this;return(0,h.Z)(function*(){return e.tippyInstance})()}controlledChanged(){this.create()}visibleChangeHandler(e){var o,l;this.controlled&&(e?null===(o=this.tippyInstance)||void 0===o||o.show():null===(l=this.tippyInstance)||void 0===l||l.hide())}componentDidLoad(){this.create()}create(){var e;null===(e=this.tippyInstance)||void 0===e||e.destroy(),!this.target&&this.for&&console.warn(`The element with the id '${this.for}' could not be found.`);const o=[];this.hideOnBlur&&o.push(p),this.hideOnEsc&&o.push(_);const l=this.followCursor&&"false"!==this.followCursor;l&&o.push(n.f);const m={allowHTML:!0,animation:"scale-subtle",appendTo:this.attachToBody?document.body:this.popoverContainer,content:this.popoverContent,duration:100,delay:this.delay,followCursor:!!l&&this.followCursor,placement:this.placement,trigger:this.trigger,offset:[0,this.distance],plugins:[...o,{fn:()=>({onMount:()=>{Array.from(this.el.querySelectorAll("ino-datepicker"))?.forEach(b=>b.redraw()),this.popoverContent.querySelector("ino-input[data-ino-focus],ino-datepicker[data-ino-focus],  ino-textarea[data-ino-focus]")?.setFocus()},onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}})}],onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}};this.interactive&&(m.interactive=!0),this.tippyInstance=(0,n.t)(this.target,m)}get target(){return(0,s.a)(this.el,"popover-trigger")||(this.for?document.getElementById(this.for):this.el.parentElement)}handlePopoverClick(e){!e.target||!(0,t.c)(e.target,"[data-ino-close]")||this.tippyInstance.hide()}render(){const e=(0,c.c)("ino-popover",`ino-popover--color-scheme-${this.colorScheme}`,"ino-popover__content");return(0,i.h)(i.H,null,(0,i.h)("slot",{name:"popover-trigger"}),(0,i.h)("div",{ref:o=>this.popoverContainer=o},(0,i.h)("div",{class:e,role:"tooltip",ref:o=>this.popoverContent=o,onClick:this.handlePopoverClick.bind(this)},(0,i.h)("slot",null))))}get el(){return(0,i.g)(this)}static get watchers(){return{placement:["placementChanged"],attachToBody:["bodyChanged"],for:["forChanged"],hideOnBlur:["hideOnBlurChanged"],hideOnEsc:["hideOnEscChanged"],distance:["distanceChanged"],interactive:["interactiveChanged"],followCursor:["followCursorChanged"],trigger:["triggerChanged"],delay:["onDelayChange"],controlled:["controlledChanged"],visible:["visibleChangeHandler"]}}};g.style=".tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}.ino-popover>*{border-radius:6px}.ino-popover.ino-popover--color-scheme-primary>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-secondary>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#bbd962;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-light>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#e7e7e7;color:#000;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-transparent>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}"},804:(v,d,r)=>{function h(n,s){if(n.closest)return n.closest(s);for(var t=n;t;){if(i(t,s))return t;t=t.parentElement}return null}function i(n,s){return(n.matches||n.webkitMatchesSelector||n.msMatchesSelector).call(n,s)}function c(n){if(null!==n.offsetParent)return n.scrollWidth;var t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var a=t.scrollWidth;return document.documentElement.removeChild(t),a}r.d(d,{c:()=>h,e:()=>c,m:()=>i})}}]);