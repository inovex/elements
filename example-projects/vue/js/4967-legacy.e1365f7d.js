"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[4967],{4967:function(e,t,n){n.r(t),n.d(t,{ino_tooltip:function(){return l}});var r=n(21),i=n(6706),o=n(4567),a=n(6812),s=(n(8188),n(1372),n(9529),n(1235),n(1297)),c=n(9776),u=n(6027),h=(n(1231),"ino-tooltip .ino-tooltip__composer{font-size:0.8rem;text-align:center;letter-spacing:0;padding:4px 8px;border-radius:6px}ino-tooltip.ino-tooltip--color-scheme-primary .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}ino-tooltip.ino-tooltip--color-scheme-transparent .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}"),l=function(){function e(t){var n=this;(0,o.Z)(this,e),(0,s.r)(this,t),this.colorScheme="primary",this.placement="auto",this.trigger="mouseenter focus",this.delay=0,this.retrieveTarget=function(){return n.for?document.getElementById(n.for):n.el.parentElement}}return(0,a.Z)(e,[{key:"onPlacementChange",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:null===(t=this.tooltipInstance)||void 0===t||t.setProps({placement:this.placement});case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"forChanged",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.create();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"onDelayChange",value:function(){var e;null===(e=this.tooltipInstance)||void 0===e||e.setProps({delay:this.delay})}},{key:"triggerChanged",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.create();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getTippyInstance",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.tooltipInstance);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"componentDidLoad",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.create();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.dispose();case 2:if(this.target=this.retrieveTarget(),this.target){e.next=7;break}return e.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:this.target=this.retrieveTarget();case 7:if(this.target){e.next=9;break}throw new Error("Target with the ID '".concat(this.for,"' could not be found in this document."));case 9:t={content:this.el,duration:100,delay:this.delay,placement:this.placement,trigger:this.trigger},this.tooltipInstance=(0,u.t)(this.target,t),this.target.addEventListener("keyup",this.onEnterTarget.bind(this)),this.target.addEventListener("blur",this.onLeaveTarget.bind(this),!0),this.trigger.includes("hover")&&this.target.addEventListener("mouseleave",this.onLeaveTarget.bind(this));case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"dispose",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.tooltipInstance){e.next=6;break}return e.next=3,this.tooltipInstance.destroy();case 3:this.target.removeEventListener("keyup",this.onEnterTarget.bind(this)),this.target.removeEventListener("blur",this.onLeaveTarget.bind(this),!0),this.target.removeEventListener("mouseleave",this.onLeaveTarget.bind(this));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"onEnterTarget",value:function(e){"Tab"!==e.code||this.trigger.includes("click")||this.tooltipInstance.show(),"Escape"===e.code&&this.tooltipInstance.hide()}},{key:"onLeaveTarget",value:function(){this.tooltipInstance.hide()}},{key:"render",value:function(){var e=(0,c.c)("ino-tooltip--color-scheme-".concat(this.colorScheme));return(0,s.h)(s.H,{class:e},(0,s.h)("div",{class:"ino-tooltip__composer",role:"tooltip"},(0,s.h)("div",{class:"ino-tooltip__inner"},this.label?this.label:(0,s.h)("slot",null))))}},{key:"el",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{placement:["onPlacementChange"],for:["forChanged"],delay:["onDelayChange"],trigger:["triggerChanged"]}}}]),e}();l.style=h}}]);
//# sourceMappingURL=4967-legacy.e1365f7d.js.map