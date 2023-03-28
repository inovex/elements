"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8394],{8394:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_tooltip:function(){return Tooltip}});var _index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5895),_index_796d4780_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(939),_tippy_esm_bfa8033e_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9397);__webpack_require__(89);let Tooltip=class{constructor(hostRef){(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.colorScheme="primary",this.placement="auto",this.trigger="mouseenter focus",this.retrieveTarget=()=>this.for?document.getElementById(this.for):this.el.parentElement}async placementChanged(){await this.create()}async forChanged(){await this.create()}async triggerChanged(){await this.create()}async getTippyInstance(){return this.tooltipInstance}async componentDidLoad(){await this.create()}async create(){if(await this.dispose(),this.target=this.retrieveTarget(),this.target||(await new Promise(resolve=>setTimeout(resolve,1e3)),this.target=this.retrieveTarget()),!this.target)throw Error(`Target with the ID '${this.for}' could not be found in this document.`);let options={content:this.el,duration:100,placement:this.placement,trigger:this.trigger};this.tooltipInstance=(0,_tippy_esm_bfa8033e_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.target,options),this.target.addEventListener("keyup",this.onEnterTarget.bind(this)),this.target.addEventListener("blur",this.onLeaveTarget.bind(this),!0),this.trigger.includes("hover")&&this.target.addEventListener("mouseleave",this.onLeaveTarget.bind(this))}async dispose(){this.tooltipInstance&&(await this.tooltipInstance.destroy(),this.target.removeEventListener("keyup",this.onEnterTarget.bind(this)),this.target.removeEventListener("blur",this.onLeaveTarget.bind(this),!0),this.target.removeEventListener("mouseleave",this.onLeaveTarget.bind(this)))}onEnterTarget(e){"Tab"!==e.code||this.trigger.includes("click")||this.tooltipInstance.show(),"Escape"===e.code&&this.tooltipInstance.hide()}onLeaveTarget(){this.tooltipInstance.hide()}render(){let hostClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_1__.c)(`ino-tooltip--color-scheme-${this.colorScheme}`);return(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:hostClasses},(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-tooltip__composer",role:"tooltip"},(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-tooltip__inner"},this.label?this.label:(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}get el(){return(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{placement:["placementChanged"],for:["forChanged"],trigger:["triggerChanged"]}}};Tooltip.style="ino-tooltip .ino-tooltip__composer{font-size:0.8rem;text-align:center;letter-spacing:0;padding:4px 8px;border-radius:6px}ino-tooltip.ino-tooltip--color-scheme-primary .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}ino-tooltip.ino-tooltip--color-scheme-transparent .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}"}}]);