(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[1087],{1087:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ino_popover:()=>d});var n=o(8533),i=o(648),r=o(4898),a=o(1042),s=o(3865),l=o(8791);o(5897);const h={name:"hideOnPopperBlur",defaultValue:!0,fn:e=>({onCreate(){e.popper.addEventListener("focusout",t=>{e.props.hideOnPopperBlur&&t.relatedTarget&&!e.popper.contains(t.relatedTarget)&&e.hide()})}})},c={name:"hideOnEsc",defaultValue:!0,fn({hide:e}){function t(t){"Escape"===t.key&&e()}return{onShow(){document.addEventListener("keydown",t)},onHide(){document.removeEventListener("keydown",t)}}}},d=class{constructor(e){(0,i.r)(this,e),this.visibleChanged=(0,i.c)(this,"visibleChanged",7),this.placement="auto",this.attachToBody=!1,this.hideOnBlur=!1,this.hideOnEsc=!1,this.distance=10,this.colorScheme="primary",this.interactive=!1,this.followCursor=!1,this.trigger="mouseenter focus",this.controlled=!1,this.visible=!1}placementChanged(){var e;null===(e=this.tippyInstance)||void 0===e||e.setProps({placement:this.placement})}bodyChanged(){this.create()}forChanged(){this.create()}hideOnBlurChanged(){this.create()}hideOnEscChanged(){this.create()}distanceChanged(){var e;null===(e=this.tippyInstance)||void 0===e||e.setProps({offset:[0,this.distance]})}interactiveChanged(){this.create()}followCursorChanged(){this.create()}triggerChanged(){var e;null===(e=this.tippyInstance)||void 0===e||e.setProps({trigger:this.trigger})}getTippyInstance(){var e=this;return(0,n.Z)(function*(){return e.tippyInstance})()}controlledChanged(){this.create()}visibleChangeHandler(e){var t,o;this.controlled&&(e?null===(t=this.tippyInstance)||void 0===t||t.show():null===(o=this.tippyInstance)||void 0===o||o.hide())}componentDidLoad(){this.create()}create(){var e;null===(e=this.tippyInstance)||void 0===e||e.destroy(),!this.target&&this.for&&console.warn(`The element with the id '${this.for}' could not be found.`);const t=[];this.hideOnBlur&&t.push(h),this.hideOnEsc&&t.push(c);const o=this.followCursor&&"false"!==this.followCursor;o&&t.push(a.f);const n={allowHTML:!0,animation:"scale-subtle",appendTo:this.attachToBody?document.body:this.popoverContainer,content:this.popoverContent,duration:100,followCursor:!!o&&this.followCursor,placement:this.placement,trigger:this.trigger,offset:[0,this.distance],plugins:[...t,{fn:()=>({onMount:()=>{const e=Array.from(this.el.querySelectorAll("ino-datepicker"));null==e||e.forEach(e=>e.redraw());const t=this.popoverContent.querySelector("ino-input[data-ino-focus],ino-datepicker[data-ino-focus],  ino-textarea[data-ino-focus]");null==t||t.setFocus()},onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}})}],onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}};this.interactive&&(n.interactive=!0),this.tippyInstance=(0,a.t)(this.target,n)}get target(){return(0,s.g)(this.el,"popover-trigger")||(this.for?document.getElementById(this.for):this.el.parentElement)}handlePopoverClick(e){e.target&&(0,l.c)(e.target,"[data-ino-close]")&&this.tippyInstance.hide()}render(){const e=(0,r.c)("ino-popover",`ino-popover--color-scheme-${this.colorScheme}`,"ino-popover__content");return(0,i.h)(i.H,null,(0,i.h)("slot",{name:"popover-trigger"}),(0,i.h)("div",{ref:e=>this.popoverContainer=e},(0,i.h)("div",{class:e,role:"tooltip",ref:e=>this.popoverContent=e,onClick:this.handlePopoverClick.bind(this)},(0,i.h)("slot",null))))}get el(){return(0,i.g)(this)}static get watchers(){return{placement:["placementChanged"],attachToBody:["bodyChanged"],for:["forChanged"],hideOnBlur:["hideOnBlurChanged"],hideOnEsc:["hideOnEscChanged"],distance:["distanceChanged"],interactive:["interactiveChanged"],followCursor:["followCursorChanged"],trigger:["triggerChanged"],controlled:["controlledChanged"],visible:["visibleChangeHandler"]}}};d.style=".tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}.ino-popover>*{border-radius:6px}.ino-popover.ino-popover--color-scheme-primary>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-secondary>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#bbd962;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-light>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#e7e7e7;color:#000;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-transparent>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}"},8791:(e,t,o)=>{"use strict";function n(e,t){if(e.closest)return e.closest(t);for(var o=e;o;){if(i(o,t))return o;o=o.parentElement}return null}function i(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}function r(e){if(null!==e.offsetParent)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var o=t.scrollWidth;return document.documentElement.removeChild(t),o}o.d(t,{c:()=>n,e:()=>r,m:()=>i})}}]);