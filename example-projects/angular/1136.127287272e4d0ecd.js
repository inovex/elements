"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[1136],{1136:(h,i,t)=>{t.r(i),t.d(i,{ino_tooltip:()=>a});var o=t(9671),n=t(7056),s=t(8728),l=t(5644);t(6277);const a=class{constructor(e){(0,n.r)(this,e),this.colorScheme="primary",this.placement="auto",this.trigger="mouseenter focus",this.delay=0,this.retrieveTarget=()=>this.for?document.getElementById(this.for):this.el.parentElement}onPlacementChange(){var e=this;return(0,o.Z)(function*(){var r;null===(r=e.tooltipInstance)||void 0===r||r.setProps({placement:e.placement})})()}forChanged(){var e=this;return(0,o.Z)(function*(){yield e.create()})()}onDelayChange(){var e;null===(e=this.tooltipInstance)||void 0===e||e.setProps({delay:this.delay})}triggerChanged(){var e=this;return(0,o.Z)(function*(){yield e.create()})()}getTippyInstance(){var e=this;return(0,o.Z)(function*(){return e.tooltipInstance})()}componentDidLoad(){var e=this;return(0,o.Z)(function*(){yield e.create()})()}create(){var e=this;return(0,o.Z)(function*(){if(yield e.dispose(),e.target=e.retrieveTarget(),e.target||(yield new Promise(c=>setTimeout(c,1e3)),e.target=e.retrieveTarget()),!e.target)throw new Error(`Target with the ID '${e.for}' could not be found in this document.`);e.tooltipInstance=(0,l.t)(e.target,{content:e.el,duration:100,delay:e.delay,placement:e.placement,trigger:e.trigger}),e.target.addEventListener("keyup",e.onEnterTarget.bind(e)),e.target.addEventListener("blur",e.onLeaveTarget.bind(e),!0),e.trigger.includes("hover")&&e.target.addEventListener("mouseleave",e.onLeaveTarget.bind(e))})()}dispose(){var e=this;return(0,o.Z)(function*(){e.tooltipInstance&&(yield e.tooltipInstance.destroy(),e.target.removeEventListener("keyup",e.onEnterTarget.bind(e)),e.target.removeEventListener("blur",e.onLeaveTarget.bind(e),!0),e.target.removeEventListener("mouseleave",e.onLeaveTarget.bind(e)))})()}onEnterTarget(e){"Tab"===e.code&&!this.trigger.includes("click")&&this.tooltipInstance.show(),"Escape"===e.code&&this.tooltipInstance.hide()}onLeaveTarget(){this.tooltipInstance.hide()}render(){const e=(0,s.c)(`ino-tooltip--color-scheme-${this.colorScheme}`);return(0,n.h)(n.H,{class:e},(0,n.h)("div",{class:"ino-tooltip__composer",role:"tooltip"},(0,n.h)("div",{class:"ino-tooltip__inner"},this.label?this.label:(0,n.h)("slot",null))))}get el(){return(0,n.g)(this)}static get watchers(){return{placement:["onPlacementChange"],for:["forChanged"],delay:["onDelayChange"],trigger:["triggerChanged"]}}};a.style="ino-tooltip .ino-tooltip__composer{font-size:0.8rem;text-align:center;letter-spacing:0;padding:4px 8px;border-radius:6px}ino-tooltip.ino-tooltip--color-scheme-primary .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}ino-tooltip.ino-tooltip--color-scheme-transparent .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}"}}]);