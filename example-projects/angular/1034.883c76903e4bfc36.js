"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[1034],{2323:(y,l,p)=>{function d(){return"_"+Math.random().toString(36).substr(2,9)}function n(e,s){return e.querySelector(`[slot="${s}"]`)}function c(e,s){var r;return s?e.querySelectorAll(`[slot="${s}"]`).length>0:0===(null===(r=e.querySelector("slot"))||void 0===r?void 0:r.assignedElements().length)}function i(e){var s;null===(s=e.querySelector("[data-ino-focus]"))||void 0===s||s.focus()}function a(e){e.stopPropagation(),e.preventDefault()}p.d(l,{a:()=>n,f:()=>i,g:()=>d,h:()=>c,p:()=>a})},1853:(y,l,p)=>{p.d(l,{c:()=>n});var c,d={exports:{}};c=d,function(){var i={}.hasOwnProperty;function a(){for(var e=[],s=0;s<arguments.length;s++){var r=arguments[s];if(r){var u=typeof r;if("string"===u||"number"===u)e.push(r);else if(Array.isArray(r)){if(r.length){var g=a.apply(null,r);g&&e.push(g)}}else if("object"===u){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var f in r)i.call(r,f)&&r[f]&&e.push(f)}}}return e.join(" ")}c.exports?(a.default=a,c.exports=a):window.classNames=a}();const n=d.exports},1034:(y,l,p)=>{p.r(l),p.d(l,{ino_popover:()=>v});var d=p(9671),n=p(5203),c=p(1853),i=p(1005),a=p(2323),e=p(804);const s={name:"hideOnPopperBlur",defaultValue:!0,fn:t=>({onCreate(){t.popper.addEventListener("focusout",o=>{t.props.hideOnPopperBlur&&o.relatedTarget&&!t.popper.contains(o.relatedTarget)&&t.hide()})}})},r={name:"hideOnEsc",defaultValue:!0,fn({hide:t}){function o(h){"Escape"===h.key&&t()}return{onShow(){document.addEventListener("keydown",o)},onHide(){document.removeEventListener("keydown",o)}}}},v=class{constructor(t){(0,n.r)(this,t),this.visibleChanged=(0,n.c)(this,"visibleChanged",7),this.placement="auto",this.arrow=!1,this.attachToBody=!1,this.for=void 0,this.hideOnBlur=!1,this.hideOnEsc=!1,this.distance=10,this.colorScheme="primary",this.interactive=!1,this.followCursor=!1,this.trigger="mouseenter focus",this.delay=0,this.controlled=!1,this.visible=!1}placementChanged(){var t;null===(t=this.tippyInstance)||void 0===t||t.setProps({placement:this.placement})}bodyChanged(){this.create()}forChanged(){this.create()}hideOnBlurChanged(){this.create()}hideOnEscChanged(){this.create()}distanceChanged(){var t;null===(t=this.tippyInstance)||void 0===t||t.setProps({offset:[0,this.distance]})}interactiveChanged(){this.create()}followCursorChanged(){this.create()}triggerChanged(){var t;null===(t=this.tippyInstance)||void 0===t||t.setProps({trigger:this.trigger})}onDelayChange(){var t;null===(t=this.tippyInstance)||void 0===t||t.setProps({delay:this.delay})}getTippyInstance(){var t=this;return(0,d.Z)(function*(){return t.tippyInstance})()}controlledChanged(){this.create()}visibleChangeHandler(t){var o,h;this.controlled&&(t?null===(o=this.tippyInstance)||void 0===o||o.show():null===(h=this.tippyInstance)||void 0===h||h.hide())}componentDidLoad(){this.create()}create(){var t;null===(t=this.tippyInstance)||void 0===t||t.destroy(),!this.target&&this.for&&console.warn(`The element with the id '${this.for}' could not be found.`);const o=[];this.hideOnBlur&&o.push(s),this.hideOnEsc&&o.push(r);const h="boolean"==typeof this.followCursor&&this.followCursor||["horizontal","vertical","initial"].includes(this.followCursor);h&&o.push(i.f);const x={allowHTML:!0,theme:this.colorScheme,animation:"scale-subtle",appendTo:this.attachToBody?document.body:this.popoverContainer,arrow:!!this.arrow&&i.R,content:this.popoverContent,duration:100,delay:this.delay,followCursor:!!h&&this.followCursor,placement:this.placement,trigger:this.trigger,offset:[0,this.distance],showOnCreate:!1,plugins:[...o,{fn:()=>({onMount:()=>{Array.from(this.el.querySelectorAll("ino-datepicker"))?.forEach(w=>w.redraw()),this.popoverContent.querySelector("ino-input[data-ino-focus],ino-datepicker[data-ino-focus],  ino-textarea[data-ino-focus]")?.setFocus()},onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}})}],onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}};this.interactive&&(x.interactive=!0),this.tippyInstance=(0,i.t)(this.target,x)}get target(){return(0,a.a)(this.el,"popover-trigger")||(this.for?document.getElementById(this.for):this.el.parentElement)}handlePopoverClick(t){!t.target||!(0,e.c)(t.target,"[data-ino-close]")||this.tippyInstance.hide()}render(){const t=(0,c.c)("ino-popover","ino-popover__content");return(0,n.h)(n.H,{key:"20a4f6fac0d516333a155220228b84dcdda94b03"},(0,n.h)("slot",{key:"88c5912dc262ae92fbab07e3269d9b2de088e2fc",name:"popover-trigger"}),(0,n.h)("div",{key:"0e0461d2f52bfae545386a6034b28bab1c426436",ref:o=>this.popoverContainer=o},(0,n.h)("div",{key:"e68ab3a3ca09ed4a36338d40585d4a586c794449",class:t,role:"tooltip",ref:o=>this.popoverContent=o,onClick:this.handlePopoverClick.bind(this)},(0,n.h)("slot",{key:"59b9244200feb4791aff475c1f181985d9043d44"}))))}get el(){return(0,n.g)(this)}static get watchers(){return{placement:["placementChanged"],attachToBody:["bodyChanged"],for:["forChanged"],hideOnBlur:["hideOnBlurChanged"],hideOnEsc:["hideOnEscChanged"],distance:["distanceChanged"],interactive:["interactiveChanged"],followCursor:["followCursorChanged"],trigger:["triggerChanged"],delay:["onDelayChange"],controlled:["controlledChanged"],visible:["visibleChangeHandler"]}}};v.style='.tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}.tippy-box[data-placement^=top]>.tippy-svg-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg{top:16px;transform:rotate(180deg)}.tippy-box[data-placement^=bottom]>.tippy-svg-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.tippy-box[data-placement^=left]>.tippy-svg-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg{transform:rotate(90deg);top:calc(50% - 3px);left:11px}.tippy-box[data-placement^=right]>.tippy-svg-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg{transform:rotate(-90deg);top:calc(50% - 3px);right:11px}.tippy-svg-arrow{width:16px;height:16px;fill:#333;text-align:initial}.tippy-svg-arrow,.tippy-svg-arrow>svg{position:absolute}.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.tippy-box{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;border-radius:10px;z-index:9999}.tippy-content{border-radius:10px}.tippy-box[data-theme~=light]{box-shadow:0 0 15px 0 rgba(76, 75, 82, 0.35);background:#fff;color:#000}.tippy-box[data-theme~=light] .tippy-content{background-color:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow{fill:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow svg{fill:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow svg{filter:drop-shadow(0 -6px 3px rgba(76, 75, 82, 0.35))}.tippy-box[data-theme~=dark]{background:#5d5b69;color:#fff}.tippy-box[data-theme~=dark] .tippy-content{background-color:#5d5b69}.tippy-box[data-theme~=dark]>.tippy-svg-arrow{fill:#5d5b69}.tippy-box[data-theme~=dark]>.tippy-svg-arrow svg{fill:#5d5b69}.tippy-box[data-theme~=primary]{background:#beccff;color:#2d02ff}.tippy-box[data-theme~=primary] .tippy-content{background-color:#beccff}.tippy-box[data-theme~=primary]>.tippy-svg-arrow{fill:#beccff}.tippy-box[data-theme~=primary]>.tippy-svg-arrow svg{fill:#beccff}.tippy-content{padding:0}'},804:(y,l,p)=>{function d(i,a){if(i.closest)return i.closest(a);for(var e=i;e;){if(n(e,a))return e;e=e.parentElement}return null}function n(i,a){return(i.matches||i.webkitMatchesSelector||i.msMatchesSelector).call(i,a)}function c(i){if(null!==i.offsetParent)return i.scrollWidth;var e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);var s=e.scrollWidth;return document.documentElement.removeChild(e),s}p.d(l,{c:()=>d,e:()=>c,m:()=>n})}}]);