"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[4882],{4882:function(e,n,t){t.r(n),t.d(n,{ino_icon:function(){return _}});var i,r=t(4567),o=t(6812),s=(t(3450),t(9321),t(8188),t(8673),t(6886),t(5794),t(7950),t(1850),t(2021)),a=function(){function e(){(0,r.Z)(this,e)}return(0,o.Z)(e,null,[{key:"setSvgTitle",value:function(e,n){var t=this.parser.parseFromString(e,"image/svg+xml"),i=t.querySelector("title");return i&&(i.innerHTML=n),this.serializer.serializeToString(t)}},{key:"removeSvgTitle",value:function(e){var n=this.parser.parseFromString(e,"image/svg+xml"),t=n.querySelector("title");return t&&t.remove(),this.serializer.serializeToString(n)}}]),e}();a.parser=new DOMParser,a.serializer=new XMLSerializer;var c={status_abwesend:"status_away",status_aktuelle:"status_current",status_offboarding_laufend:"offboarding_running",status_onboarding_laufend:"onboarding_running",status_vergangene:"status_past",status_zukuenftige:"status_future"};function u(){if(!i){var e=window;e.inoIcons=e.inoIcons||{},i=e.inoIcons.map=e.inoIcons.map||new Map}return i}var l=function(e){return g(e)&&(e=e.trim(),d(e))?e:null};function h(e){var n=c[e]||e;if(n&&!d(n))return n}function f(e,n){var t=l(e);return t||(t=h(n),t?v(t):l(n))}function v(e){var n;return null!==(n=u().get(e))&&void 0!==n?n:(0,s.a)("./ino-icon/".concat(e,".svg"))}var d=function(e){return e.length>0&&/(\/|\.)/.test(e)},g=function(e){return"string"===typeof e},m=function(e){if(e){var n=document.createElement("div");n.innerHTML=e;for(var t=n.childNodes.length-1;t>=0;t--)"svg"!==n.childNodes[t].nodeName.toLowerCase()&&n.removeChild(n.childNodes[t]);var i=n.firstElementChild;if(i&&"svg"===i.nodeName.toLowerCase()){var r=i.getAttribute("class")||"";if(i.setAttribute("class",(r+" s-ion-icon").trim()),p(i))return n.innerHTML}}return""},p=function e(n){if(1===n.nodeType){if("script"===n.nodeName.toLowerCase())return!1;for(var t=0;t<n.attributes.length;t++){var i=n.attributes[t].value;if(g(i)&&0===i.toLowerCase().indexOf("on"))return!1}for(var r=0;r<n.childNodes.length;r++)if(!e(n.childNodes[r]))return!1}return!0},y=new Map,k=new Map,w=function(e){var n=k.get(e);return void 0===n&&(n=fetch(e).then((function(n){if(n.ok)return n.text().then((function(n){y.set(e,m(n))}));y.set(e,"")})),k.set(e,n)),n},C=":host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em);--icon-color:var(\n      --ino-icon-color,\n      var(\n          --ino-icon-color-primary,\n          #3d40f5\n      )\n  )}:host{display:inline-flex;flex-direction:column;justify-content:center}:host i{font-size:inherit;display:flex;flex-direction:row;justify-content:center;font-style:normal}:host i[role=button]{cursor:pointer}:host svg{color:var(--icon-color);fill:var(--icon-color);height:var(--icon-height);width:var(--icon-width)}",_=function(){function e(n){(0,r.Z)(this,e),(0,s.r)(this,n),this.clickEl=(0,s.c)(this,"clickEl",7)}return(0,o.Z)(e,[{key:"iconChanged",value:function(){this.loadIcon()}},{key:"watchHandler",value:function(e){e&&(this.svgContent=this.svgTitle?a.setSvgTitle(this.svgContent,this.svgTitle):a.removeSvgTitle(this.svgContent))}},{key:"componentWillLoad",value:function(){this.loadIcon()}},{key:"loadIcon",value:function(){var e=this,n=f(this.src,this.icon);n&&(y.has(n)?this.svgContent=y.get(n):w(n).then((function(){return e.svgContent=y.get(n)})))}},{key:"handleClick",value:function(e){e.preventDefault(),this.clickEl.emit(!0)}},{key:"handleKeyPress",value:function(e){"Enter"===e.code&&(e.preventDefault(),this.clickEl.emit(!0))}},{key:"render",value:function(){var e=this;if(this.svgContent){var n={};return this.clickable&&(n={onClick:function(n){return e.handleClick(n)},onKeyPress:function(n){return e.handleKeyPress(n)},tabindex:0,role:"button"}),(0,s.h)(s.H,{class:"ino-icon--color-scheme-primary"},(0,s.h)("i",Object.assign({innerHTML:this.svgContent},n)))}}}],[{key:"watchers",get:function(){return{icon:["iconChanged"],svgContent:["watchHandler"]}}}]),e}();_.style=C}}]);
//# sourceMappingURL=4882-legacy.0c6f1b92.js.map