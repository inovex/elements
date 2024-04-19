import{r as s,c as l,h as i,H as d,g as c}from"./index-DInsCe3q.js";import{c as h}from"./index-38c18b20-Bpdhy5BS.js";import{R as f,t as g,f as b}from"./tippy.esm-f3ab50e2-BUGbhCd9.js";import{a as y}from"./component-utils-757b8493-Dk10tU6Q.js";import{c as m}from"./ponyfill-495ec32d-CafZ2Y-P.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const u={name:"hideOnPopperBlur",defaultValue:!0,fn(t){return{onCreate(){t.popper.addEventListener("focusout",e=>{t.props.hideOnPopperBlur&&e.relatedTarget&&!t.popper.contains(e.relatedTarget)&&t.hide()})}}}},v={name:"hideOnEsc",defaultValue:!0,fn({hide:t}){function e(o){o.key==="Escape"&&t()}return{onShow(){document.addEventListener("keydown",e)},onHide(){document.removeEventListener("keydown",e)}}}},x='.tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}.tippy-box[data-placement^=top]>.tippy-svg-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg{top:16px;transform:rotate(180deg)}.tippy-box[data-placement^=bottom]>.tippy-svg-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.tippy-box[data-placement^=left]>.tippy-svg-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg{transform:rotate(90deg);top:calc(50% - 3px);left:11px}.tippy-box[data-placement^=right]>.tippy-svg-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg{transform:rotate(-90deg);top:calc(50% - 3px);right:11px}.tippy-svg-arrow{width:16px;height:16px;fill:#333;text-align:initial}.tippy-svg-arrow,.tippy-svg-arrow>svg{position:absolute}.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.tippy-box{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;border-radius:10px;z-index:9999}.tippy-content{border-radius:10px}.tippy-box[data-theme~=light]{box-shadow:0 0 15px 0 rgba(76, 75, 82, 0.35);background:#fff;color:#000}.tippy-box[data-theme~=light] .tippy-content{background-color:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow{fill:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow svg{fill:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow svg{filter:drop-shadow(0 -6px 3px rgba(76, 75, 82, 0.35))}.tippy-box[data-theme~=dark]{background:#5d5b69;color:#fff}.tippy-box[data-theme~=dark] .tippy-content{background-color:#5d5b69}.tippy-box[data-theme~=dark]>.tippy-svg-arrow{fill:#5d5b69}.tippy-box[data-theme~=dark]>.tippy-svg-arrow svg{fill:#5d5b69}.tippy-box[data-theme~=primary]{background:#beccff;color:#2d02ff}.tippy-box[data-theme~=primary] .tippy-content{background-color:#beccff}.tippy-box[data-theme~=primary]>.tippy-svg-arrow{fill:#beccff}.tippy-box[data-theme~=primary]>.tippy-svg-arrow svg{fill:#beccff}.tippy-content{padding:0}',w=x,C="data-ino-close",k=class{constructor(t){s(this,t),this.visibleChanged=l(this,"visibleChanged",7),this.placement="auto",this.arrow=!1,this.attachToBody=!1,this.for=void 0,this.hideOnBlur=!1,this.hideOnEsc=!1,this.distance=10,this.colorScheme="primary",this.interactive=!1,this.followCursor=!1,this.trigger="mouseenter focus",this.delay=0,this.controlled=!1,this.visible=!1}placementChanged(){var t;(t=this.tippyInstance)===null||t===void 0||t.setProps({placement:this.placement})}bodyChanged(){this.create()}forChanged(){this.create()}hideOnBlurChanged(){this.create()}hideOnEscChanged(){this.create()}distanceChanged(){var t;(t=this.tippyInstance)===null||t===void 0||t.setProps({offset:[0,this.distance]})}interactiveChanged(){this.create()}followCursorChanged(){this.create()}triggerChanged(){var t;(t=this.tippyInstance)===null||t===void 0||t.setProps({trigger:this.trigger})}onDelayChange(){var t;(t=this.tippyInstance)===null||t===void 0||t.setProps({delay:this.delay})}async getTippyInstance(){return this.tippyInstance}controlledChanged(){this.create()}visibleChangeHandler(t){var e,o;this.controlled&&(t?(e=this.tippyInstance)===null||e===void 0||e.show():(o=this.tippyInstance)===null||o===void 0||o.hide())}componentDidLoad(){this.create()}create(){var t;(t=this.tippyInstance)===null||t===void 0||t.destroy(),!this.target&&this.for&&console.warn(`The element with the id '${this.for}' could not be found.`);const e=[];this.hideOnBlur&&e.push(u),this.hideOnEsc&&e.push(v);const o=typeof this.followCursor=="boolean"&&this.followCursor||["horizontal","vertical","initial"].includes(this.followCursor);o&&e.push(b);const n={allowHTML:!0,theme:this.colorScheme,animation:"scale-subtle",appendTo:this.attachToBody?document.body:this.popoverContainer,arrow:this.arrow?f:!1,content:this.popoverContent,duration:100,delay:this.delay,followCursor:o?this.followCursor:!1,placement:this.placement,trigger:this.trigger,offset:[0,this.distance],showOnCreate:!1,plugins:[...e,{fn:()=>({onMount:()=>{const a=Array.from(this.el.querySelectorAll("ino-datepicker"));a==null||a.forEach(p=>p.redraw());const r=this.popoverContent.querySelector("ino-input[data-ino-focus],ino-datepicker[data-ino-focus],  ino-textarea[data-ino-focus]");r==null||r.setFocus()},onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}})}],onShow:()=>{if(this.controlled&&!this.visible)return this.visibleChanged.emit(!0),!1},onHide:()=>{if(this.controlled&&this.visible)return this.visibleChanged.emit(!1),!1}};this.interactive&&(n.interactive=!0),this.tippyInstance=g(this.target,n)}get target(){const t=y(this.el,"popover-trigger");return t||(this.for?document.getElementById(this.for):this.el.parentElement)}handlePopoverClick(t){!t.target||!m(t.target,`[${C}]`)||this.tippyInstance.hide()}render(){const t=h("ino-popover","ino-popover__content");return i(d,{key:"bbc22a91f43877743586241c532087205d2bf841"},i("slot",{key:"ebbba1843058b6c5559963a8c781e70307c3bc88",name:"popover-trigger"}),i("div",{key:"8136cf0275d01ac79953d9b0b5b191c6f945b56b",ref:e=>this.popoverContainer=e},i("div",{key:"d9670d9617736f1c503988ae6ae172dc0934a1cb",class:t,role:"tooltip",ref:e=>this.popoverContent=e,onClick:this.handlePopoverClick.bind(this)},i("slot",{key:"7b7d078f4bf45123259bacac258ae0d1065db9f2"}))))}get el(){return c(this)}static get watchers(){return{placement:["placementChanged"],attachToBody:["bodyChanged"],for:["forChanged"],hideOnBlur:["hideOnBlurChanged"],hideOnEsc:["hideOnEscChanged"],distance:["distanceChanged"],interactive:["interactiveChanged"],followCursor:["followCursorChanged"],trigger:["triggerChanged"],delay:["onDelayChange"],controlled:["controlledChanged"],visible:["visibleChangeHandler"]}}};k.style=w;export{k as ino_popover};
