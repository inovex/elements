(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[6905],{7368:function(e,n,t){var i=t(7400),u=t(9859),r=t(5968),l=t(6541),o=t(835),a=t(5762),s=t(8151).f,h=t(1321),c=t(8311),d=t(3326),p=t(3349),v=t(5650),g=t(6060),f=t(4768),E=t(4229),y=t(8270),m=t(6407).enforce,I=t(1832),k=t(95),S=t(2926),C=t(461),x=k("match"),b=u.RegExp,w=b.prototype,L=u.SyntaxError,V=r(w.exec),R=r("".charAt),N=r("".replace),D=r("".indexOf),_=r("".slice),F=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,q=/a/g,A=/a/g,B=new b(q)!==q,T=v.MISSED_STICKY,Z=v.UNSUPPORTED_Y,z=i&&(!B||T||S||C||E((function(){return A[x]=!1,b(q)!=q||b(A)==A||"/a/i"!=b(q,"i")}))),H=function(e){for(var n,t=e.length,i=0,u="",r=!1;i<=t;i++)n=R(e,i),"\\"!==n?r||"."!==n?("["===n?r=!0:"]"===n&&(r=!1),u+=n):u+="[\\s\\S]":u+=n+R(e,++i);return u},O=function(e){for(var n,t=e.length,i=0,u="",r=[],l={},o=!1,a=!1,s=0,h="";i<=t;i++){if(n=R(e,i),"\\"===n)n+=R(e,++i);else if("]"===n)o=!1;else if(!o)switch(!0){case"["===n:o=!0;break;case"("===n:V(F,_(e,i+1))&&(i+=2,a=!0),u+=n,s++;continue;case">"===n&&a:if(""===h||y(l,h))throw new L("Invalid capture group name");l[h]=!0,r[r.length]=[h,s],a=!1,h="";continue}a?h+=n:u+=n}return[u,r]};if(l("RegExp",z)){for(var P=function(e,n){var t,i,u,r,l,s,v=h(w,this),g=c(e),f=void 0===n,E=[],y=e;if(!v&&g&&f&&e.constructor===P)return e;if((g||h(w,e))&&(e=e.source,f&&(n=p(y))),e=void 0===e?"":d(e),n=void 0===n?"":d(n),y=e,S&&"dotAll"in q&&(i=!!n&&D(n,"s")>-1,i&&(n=N(n,/s/g,""))),t=n,T&&"sticky"in q&&(u=!!n&&D(n,"y")>-1,u&&Z&&(n=N(n,/y/g,""))),C&&(r=O(e),e=r[0],E=r[1]),l=o(b(e,n),v?this:w,P),(i||u||E.length)&&(s=m(l),i&&(s.dotAll=!0,s.raw=P(H(e),t)),u&&(s.sticky=!0),E.length&&(s.groups=E)),e!==y)try{a(l,"source",""===y?"(?:)":y)}catch(I){}return l},U=s(b),Y=0;U.length>Y;)g(P,b,U[Y++]);w.constructor=P,P.prototype=w,f(u,"RegExp",P,{constructor:!0})}I("RegExp")},4471:function(e,n,t){var i=t(7400),u=t(2926),r=t(7079),l=t(6616),o=t(6407).get,a=RegExp.prototype,s=TypeError;i&&u&&l(a,"dotAll",{configurable:!0,get:function(){if(this!==a){if("RegExp"===r(this))return!!o(this).dotAll;throw s("Incompatible receiver, RegExp required")}}})},1172:function(e,n,t){var i=t(7400),u=t(5650).MISSED_STICKY,r=t(7079),l=t(6616),o=t(6407).get,a=RegExp.prototype,s=TypeError;i&&u&&l(a,"sticky",{configurable:!0,get:function(){if(this!==a){if("RegExp"===r(this))return!!o(this).sticky;throw s("Incompatible receiver, RegExp required")}}})},6905:function(e,n,t){"use strict";t.r(n),t.d(n,{ino_currency_input:function(){return s}});var i=t(4567),u=t(6812),r=(t(4586),t(1245),t(8188),t(8233),t(6936),t(7950),t(8319),t(5940),t(4112),t(7368),t(4471),t(1172),t(1297)),l=function(){function e(){(0,i.Z)(this,e)}return(0,u.Z)(e,[{key:"get",value:function(e,n){var t=this.storage&&this.storage[e];return null!==t&&void 0!==t?t:n}},{key:"patch",value:function(e,n){this.storage&&this.storage[e]&&(this.storage[e]=n)}},{key:"storage",get:function(){if("undefined"!==typeof window){var e=window.inoElements;if(e&&e.config)return e.config}return null}}]),e}(),o=new l,a="",s=function(){function e(n){var t=this;(0,i.Z)(this,e),(0,r.r)(this,n),this.valueChange=(0,r.c)(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=function(e){var n=e.detail;n=n?t.fromCurrencyString(n):null,Number.isNaN(n)||(t.hiddenValue=n,t.valueChange.emit(n)),e.stopPropagation()},this.handleFocus=function(){t.inoInputEl.value=t.trimCurrencyString(t.inoInputEl.value)},this.handleBlur=function(){var e=t.hiddenInputEl.value;e&&"null"!=e&&(t.inoInputEl.value=t.toCurrencyString(e))}}return(0,u.Z)(e,[{key:"valueChanged",value:function(e){var n;!e&&0!==e||"null"===e?(this.hiddenValue=null,this.inputValue=null):e!=(null===(n=this.hiddenInputEl)||void 0===n?void 0:n.value)&&(this.hiddenValue=e.toString(),this.inputValue=this.toCurrencyString(e))}},{key:"componentDidLoad",value:function(){var e,n=this;this.inoInputEl=this.el.querySelector("ino-input"),null===(e=this.inoInputEl)||void 0===e||e.setUserInputInterceptor((function(e){return n.trimCurrencyString(e)})),this.inoInputEl||console.error("currency input requires ino-input as child"),"text"!==this.inoInputEl.type&&console.error('currency input has to be of type "text"'),this.initialize()}},{key:"connectedCallback",value:function(){this.initialize()}},{key:"disconnectedCallback",value:function(){var e,n,t;null===(e=this.inoInputEl)||void 0===e||e.removeEventListener("inoFocus",this.handleFocus),null===(n=this.inoInputEl)||void 0===n||n.removeEventListener("inoBlur",this.handleBlur),null===(t=this.inoInputEl)||void 0===t||t.removeEventListener("valueChange",this.handleValueChange)}},{key:"initialize",value:function(){var e,n,t;this.hiddenInputEl&&this.setupHiddenInput(),null===(e=this.inoInputEl)||void 0===e||e.addEventListener("inoFocus",this.handleFocus),null===(n=this.inoInputEl)||void 0===n||n.addEventListener("inoBlur",this.handleBlur),null===(t=this.inoInputEl)||void 0===t||t.addEventListener("valueChange",this.handleValueChange)}},{key:"hiddenValue",set:function(e){this.hiddenInputEl&&(this.hiddenInputEl.value=e)}},{key:"inputValue",set:function(e){this.inoInputEl&&(this.inoInputEl.value=e)}},{key:"setupHiddenInput",value:function(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.inoInputEl.resetOnChange=!1,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)}},{key:"getSeperator",value:function(){return this.toCurrencyString(0).charAt(1)}},{key:"toCurrencyString",value:function(e){var n;if(!e&&0!==e)return null;var t=(null===(n=this.currencyLocale)||void 0===n?void 0:n.length)>0?this.currencyLocale:o.get("currencyLocale",this.defaultLocale),i={minimumFractionDigits:2,maximumFractionDigits:2};return Intl.NumberFormat(t,i).format(Number(e))}},{key:"trimCurrencyString",value:function(e){if(!e)return e;var n=this.extractLeadingSymbol(e),t=this.getSeperator(),i=this.removeNonDecimalValues(e).split(t);return e=i[0],i.length>1&&(e+=t+i[1].substring(0,2)),n+e}},{key:"fromCurrencyString",value:function(e){var n=this.extractLeadingSymbol(e),t=this.getSeperator(),i=this.removeNonDecimalValues(e).replace(t,".");return Number(n+i)}},{key:"extractLeadingSymbol",value:function(e){var n,t=null===(n=this.inoInputEl)||void 0===n?void 0:n.min,i=t&&Number(t)>=0;return i?"":e.startsWith("-")?"-":""}},{key:"removeNonDecimalValues",value:function(e){var n=new RegExp("[^".concat(this.getSeperator(),"0-9]"),"g");return e.replace(n,"")}},{key:"render",value:function(){var e=this;return(0,r.h)(r.H,null,(0,r.h)("input",{type:"hidden",ref:function(n){return e.hiddenInputEl=n},value:this.value}),(0,r.h)("slot",null))}},{key:"el",get:function(){return(0,r.g)(this)}}],[{key:"watchers",get:function(){return{value:["valueChanged"]}}}]),e}();s.style=a}}]);
//# sourceMappingURL=6905-legacy.6fb98740.js.map