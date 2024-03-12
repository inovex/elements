import{r as o,h as e,H as r,g as p}from"./index-caf1efc7.js";import{R as n,t as s}from"./tippy.esm-f3ab50e2-c5011b7f.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const l='.tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}.tippy-box[data-placement^=top]>.tippy-svg-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg{top:16px;transform:rotate(180deg)}.tippy-box[data-placement^=bottom]>.tippy-svg-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.tippy-box[data-placement^=left]>.tippy-svg-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg{transform:rotate(90deg);top:calc(50% - 3px);left:11px}.tippy-box[data-placement^=right]>.tippy-svg-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg{transform:rotate(-90deg);top:calc(50% - 3px);right:11px}.tippy-svg-arrow{width:16px;height:16px;fill:#333;text-align:initial}.tippy-svg-arrow,.tippy-svg-arrow>svg{position:absolute}.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.tippy-box{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;border-radius:10px;padding:0.2rem 0.5rem;z-index:9999}.tippy-content{border-radius:10px}.tippy-box[data-theme~=light]{box-shadow:0 0 15px 0 rgba(76, 75, 82, 0.35);background:#fff;color:#000}.tippy-box[data-theme~=light] .tippy-content{background-color:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow{fill:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow svg{fill:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow svg{filter:drop-shadow(0 -6px 3px rgba(76, 75, 82, 0.35))}.tippy-box[data-theme~=dark]{background:#5d5b69;color:#fff}.tippy-box[data-theme~=dark] .tippy-content{background-color:#5d5b69}.tippy-box[data-theme~=dark]>.tippy-svg-arrow{fill:#5d5b69}.tippy-box[data-theme~=dark]>.tippy-svg-arrow svg{fill:#5d5b69}.tippy-box[data-theme~=primary]{background:#beccff;color:#2d02ff}.tippy-box[data-theme~=primary] .tippy-content{background-color:#beccff}.tippy-box[data-theme~=primary]>.tippy-svg-arrow{fill:#beccff}.tippy-box[data-theme~=primary]>.tippy-svg-arrow svg{fill:#beccff}ino-tooltip header{font-weight:bold}',d=l,c=class{constructor(t){o(this,t),this.retrieveTarget=()=>this.for?document.getElementById(this.for):this.el.parentElement,this.headerText=void 0,this.colorScheme="primary",this.placement="auto",this.arrow=!1,this.for=void 0,this.trigger="mouseenter focus",this.delay=0,this.label=void 0}async onPlacementChange(){var t;(t=this.tooltipInstance)===null||t===void 0||t.setProps({placement:this.placement})}async forChanged(){await this.create()}async triggerChanged(){await this.create()}onDelayChange(){var t;(t=this.tooltipInstance)===null||t===void 0||t.setProps({delay:this.delay})}async getTippyInstance(){return this.tooltipInstance}disconnectedCallback(){this.dispose()}async componentDidLoad(){await this.create()}async create(){this.dispose(),this.target=this.retrieveTarget();for(let a=0;a<5&&!this.target;a++)await new Promise(i=>setTimeout(i,200)),this.target=this.retrieveTarget();if(!this.target)throw new Error(`Target with the ID '${this.for}' could not be found in this document.`);const t={content:this.contentEl,duration:100,delay:this.delay,placement:this.placement,trigger:this.trigger,arrow:this.arrow?n:!1,theme:this.colorScheme};this.tooltipInstance=s(this.target,t),this.target.addEventListener("keyup",this.onEnterTarget.bind(this)),this.target.addEventListener("blur",this.onLeaveTarget.bind(this),!0),this.trigger.includes("hover")&&this.target.addEventListener("mouseleave",this.onLeaveTarget.bind(this))}dispose(){this.tooltipInstance&&(this.tooltipInstance.destroy(),this.target.removeEventListener("keyup",this.onEnterTarget.bind(this)),this.target.removeEventListener("blur",this.onLeaveTarget.bind(this),!0),this.target.removeEventListener("mouseleave",this.onLeaveTarget.bind(this)))}onEnterTarget(t){t.code==="Tab"&&!this.trigger.includes("click")&&this.tooltipInstance.show(),t.code==="Escape"&&this.tooltipInstance.hide()}onLeaveTarget(){this.tooltipInstance.hide()}render(){var t;return e(r,{key:"f8e90993d2a82b0e1fc9e9d39d15ad53556d9ea9"},e("div",{key:"b1d76b06d579c5dac121c16e11c0a0f149ce673e",ref:a=>this.contentEl=a,class:"ino-tooltip__composer",role:"tooltip"},e("div",{key:"1f21dab130228dabf535585a59ae431b8bb67b5f",class:"ino-tooltip__inner"},this.headerText&&e("header",null,this.headerText),(t=this.label)!==null&&t!==void 0?t:e("slot",null))))}get el(){return p(this)}static get watchers(){return{placement:["onPlacementChange"],for:["forChanged"],trigger:["triggerChanged"],delay:["onDelayChange"]}}};c.style=d;export{c as ino_tooltip};
