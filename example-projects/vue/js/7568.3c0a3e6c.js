"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[7568],{1231:function(e,t,n){n.d(t,{a:function(){return r},c:function(){return i},g:function(){return o}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function i(e,t,n){return n={path:t,exports:{},require:function(e,t){return a()}},e(n,n.exports),n.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},9776:function(e,t,n){n.d(t,{c:function(){return o}});n(6728);var r=n(1231),o=(0,r.c)((function(e){
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&e.push(a)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}))},6027:function(e,t,n){n.d(t,{f:function(){return yn},t:function(){return ln}});n(6728);var r="top",o="bottom",i="right",a="left",s="auto",u=[r,o,i,a],c="start",f="end",p="clippingParents",l="viewport",d="popper",v="reference",m=u.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+f])}),[]),h=[].concat(u,[s]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+f])}),[]),g="beforeRead",y="read",b="afterRead",w="beforeMain",x="main",O="afterMain",E="beforeWrite",A="write",T="afterWrite",j=[g,y,b,w,x,O,E,A,T];function D(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function C(e){var t=L(e).Element;return e instanceof t||e instanceof Element}function k(e){var t=L(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function M(e){if("undefined"===typeof ShadowRoot)return!1;var t=L(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function S(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];k(o)&&D(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))}function V(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),a=i.reduce((function(e,t){return e[t]="",e}),{});k(r)&&D(r)&&(Object.assign(r.style,a),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}}const P={name:"applyStyles",enabled:!0,phase:"write",fn:S,effect:V,requires:["computeStyles"]};function R(e){return e.split("-")[0]}var B=Math.max,H=Math.min,W=Math.round;function N(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function I(){return!/^((?!chrome|android).)*safari/i.test(N())}function _(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&k(e)&&(o=e.offsetWidth>0&&W(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&W(r.height)/e.offsetHeight||1);var a=C(e)?L(e):window,s=a.visualViewport,u=!I()&&n,c=(r.left+(u&&s?s.offsetLeft:0))/o,f=(r.top+(u&&s?s.offsetTop:0))/i,p=r.width/o,l=r.height/i;return{width:p,height:l,top:f,right:c+p,bottom:f+l,left:c,x:c,y:f}}function q(e){var t=_(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function U(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&M(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function F(e){return L(e).getComputedStyle(e)}function X(e){return["table","td","th"].indexOf(D(e))>=0}function Y(e){return((C(e)?e.ownerDocument:e.document)||window.document).documentElement}function z(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||(M(e)?e.host:null)||Y(e)}function $(e){return k(e)&&"fixed"!==F(e).position?e.offsetParent:null}function J(e){var t=/firefox/i.test(N()),n=/Trident/i.test(N());if(n&&k(e)){var r=F(e);if("fixed"===r.position)return null}var o=z(e);M(o)&&(o=o.host);while(k(o)&&["html","body"].indexOf(D(o))<0){var i=F(o);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return o;o=o.parentNode}return null}function G(e){var t=L(e),n=$(e);while(n&&X(n)&&"static"===F(n).position)n=$(n);return n&&("html"===D(n)||"body"===D(n)&&"static"===F(n).position)?t:n||J(e)||t}function K(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Q(e,t,n){return B(e,H(t,n))}function Z(e,t,n){var r=Q(e,t,n);return r>n?n:r}function ee(){return{top:0,right:0,bottom:0,left:0}}function te(e){return Object.assign({},ee(),e)}function ne(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var re=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,te("number"!==typeof e?e:ne(e,u))};function oe(e){var t,n=e.state,s=e.name,u=e.options,c=n.elements.arrow,f=n.modifiersData.popperOffsets,p=R(n.placement),l=K(p),d=[a,i].indexOf(p)>=0,v=d?"height":"width";if(c&&f){var m=re(u.padding,n),h=q(c),g="y"===l?r:a,y="y"===l?o:i,b=n.rects.reference[v]+n.rects.reference[l]-f[l]-n.rects.popper[v],w=f[l]-n.rects.reference[l],x=G(c),O=x?"y"===l?x.clientHeight||0:x.clientWidth||0:0,E=b/2-w/2,A=m[g],T=O-h[v]-m[y],j=O/2-h[v]/2+E,D=Q(A,j,T),L=l;n.modifiersData[s]=(t={},t[L]=D,t.centerOffset=D-j,t)}}function ie(e){var t=e.state,n=e.options,r=n.element,o=void 0===r?"[data-popper-arrow]":r;null!=o&&("string"!==typeof o||(o=t.elements.popper.querySelector(o),o))&&U(t.elements.popper,o)&&(t.elements.arrow=o)}const ae={name:"arrow",enabled:!0,phase:"main",fn:oe,effect:ie,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function se(e){return e.split("-")[1]}var ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ce(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:W(t*o)/o||0,y:W(n*o)/o||0}}function fe(e){var t,n=e.popper,s=e.popperRect,u=e.placement,c=e.variation,p=e.offsets,l=e.position,d=e.gpuAcceleration,v=e.adaptive,m=e.roundOffsets,h=e.isFixed,g=p.x,y=void 0===g?0:g,b=p.y,w=void 0===b?0:b,x="function"===typeof m?m({x:y,y:w}):{x:y,y:w};y=x.x,w=x.y;var O=p.hasOwnProperty("x"),E=p.hasOwnProperty("y"),A=a,T=r,j=window;if(v){var D=G(n),C="clientHeight",k="clientWidth";if(D===L(n)&&(D=Y(n),"static"!==F(D).position&&"absolute"===l&&(C="scrollHeight",k="scrollWidth")),u===r||(u===a||u===i)&&c===f){T=o;var M=h&&D===j&&j.visualViewport?j.visualViewport.height:D[C];w-=M-s.height,w*=d?1:-1}if(u===a||(u===r||u===o)&&c===f){A=i;var S=h&&D===j&&j.visualViewport?j.visualViewport.width:D[k];y-=S-s.width,y*=d?1:-1}}var V,P=Object.assign({position:l},v&&ue),R=!0===m?ce({x:y,y:w}):{x:y,y:w};return y=R.x,w=R.y,d?Object.assign({},P,(V={},V[T]=E?"0":"",V[A]=O?"0":"",V.transform=(j.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",V)):Object.assign({},P,(t={},t[T]=E?w+"px":"",t[A]=O?y+"px":"",t.transform="",t))}function pe(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,u=void 0===s||s,c={placement:R(t.placement),variation:se(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,fe(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,fe(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const le={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:pe,data:{}};var de={passive:!0};function ve(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,u=L(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,de)})),s&&u.addEventListener("resize",n.update,de),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,de)})),s&&u.removeEventListener("resize",n.update,de)}}const me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ve,data:{}};var he={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,(function(e){return he[e]}))}var ye={start:"end",end:"start"};function be(e){return e.replace(/start|end/g,(function(e){return ye[e]}))}function we(e){var t=L(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function xe(e){return _(Y(e)).left+we(e).scrollLeft}function Oe(e,t){var n=L(e),r=Y(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,u=0;if(o){i=o.width,a=o.height;var c=I();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:s+xe(e),y:u}}function Ee(e){var t,n=Y(e),r=we(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=B(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=B(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+xe(e),u=-r.scrollTop;return"rtl"===F(o||n).direction&&(s+=B(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:u}}function Ae(e){var t=F(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Te(e){return["html","body","#document"].indexOf(D(e))>=0?e.ownerDocument.body:k(e)&&Ae(e)?e:Te(z(e))}function je(e,t){var n;void 0===t&&(t=[]);var r=Te(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=L(r),a=o?[i].concat(i.visualViewport||[],Ae(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(je(z(a)))}function De(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Le(e,t){var n=_(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ce(e,t,n){return t===l?De(Oe(e,n)):C(t)?Le(t,n):De(Ee(Y(e)))}function ke(e){var t=je(z(e)),n=["absolute","fixed"].indexOf(F(e).position)>=0,r=n&&k(e)?G(e):e;return C(r)?t.filter((function(e){return C(e)&&U(e,r)&&"body"!==D(e)})):[]}function Me(e,t,n,r){var o="clippingParents"===t?ke(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=Ce(e,n,r);return t.top=B(o.top,t.top),t.right=H(o.right,t.right),t.bottom=H(o.bottom,t.bottom),t.left=B(o.left,t.left),t}),Ce(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Se(e){var t,n=e.reference,s=e.element,u=e.placement,p=u?R(u):null,l=u?se(u):null,d=n.x+n.width/2-s.width/2,v=n.y+n.height/2-s.height/2;switch(p){case r:t={x:d,y:n.y-s.height};break;case o:t={x:d,y:n.y+n.height};break;case i:t={x:n.x+n.width,y:v};break;case a:t={x:n.x-s.width,y:v};break;default:t={x:n.x,y:n.y}}var m=p?K(p):null;if(null!=m){var h="y"===m?"height":"width";switch(l){case c:t[m]=t[m]-(n[h]/2-s[h]/2);break;case f:t[m]=t[m]+(n[h]/2-s[h]/2);break}}return t}function Ve(e,t){void 0===t&&(t={});var n=t,a=n.placement,s=void 0===a?e.placement:a,c=n.strategy,f=void 0===c?e.strategy:c,m=n.boundary,h=void 0===m?p:m,g=n.rootBoundary,y=void 0===g?l:g,b=n.elementContext,w=void 0===b?d:b,x=n.altBoundary,O=void 0!==x&&x,E=n.padding,A=void 0===E?0:E,T=te("number"!==typeof A?A:ne(A,u)),j=w===d?v:d,D=e.rects.popper,L=e.elements[O?j:w],k=Me(C(L)?L:L.contextElement||Y(e.elements.popper),h,y,f),M=_(e.elements.reference),S=Se({reference:M,element:D,strategy:"absolute",placement:s}),V=De(Object.assign({},D,S)),P=w===d?V:M,R={top:k.top-P.top+T.top,bottom:P.bottom-k.bottom+T.bottom,left:k.left-P.left+T.left,right:P.right-k.right+T.right},B=e.modifiersData.offset;if(w===d&&B){var H=B[s];Object.keys(R).forEach((function(e){var t=[i,o].indexOf(e)>=0?1:-1,n=[r,o].indexOf(e)>=0?"y":"x";R[e]+=H[n]*t}))}return R}function Pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?h:c,p=se(r),l=p?s?m:m.filter((function(e){return se(e)===p})):u,d=l.filter((function(e){return f.indexOf(e)>=0}));0===d.length&&(d=l);var v=d.reduce((function(t,n){return t[n]=Ve(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[R(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}function Re(e){if(R(e)===s)return[];var t=ge(e);return[be(e),t,be(t)]}function Be(e){var t=e.state,n=e.options,u=e.name;if(!t.modifiersData[u]._skip){for(var f=n.mainAxis,p=void 0===f||f,l=n.altAxis,d=void 0===l||l,v=n.fallbackPlacements,m=n.padding,h=n.boundary,g=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,w=void 0===b||b,x=n.allowedAutoPlacements,O=t.options.placement,E=R(O),A=E===O,T=v||(A||!w?[ge(O)]:Re(O)),j=[O].concat(T).reduce((function(e,n){return e.concat(R(n)===s?Pe(t,{placement:n,boundary:h,rootBoundary:g,padding:m,flipVariations:w,allowedAutoPlacements:x}):n)}),[]),D=t.rects.reference,L=t.rects.popper,C=new Map,k=!0,M=j[0],S=0;S<j.length;S++){var V=j[S],P=R(V),B=se(V)===c,H=[r,o].indexOf(P)>=0,W=H?"width":"height",N=Ve(t,{placement:V,boundary:h,rootBoundary:g,altBoundary:y,padding:m}),I=H?B?i:a:B?o:r;D[W]>L[W]&&(I=ge(I));var _=ge(I),q=[];if(p&&q.push(N[P]<=0),d&&q.push(N[I]<=0,N[_]<=0),q.every((function(e){return e}))){M=V,k=!1;break}C.set(V,q)}if(k)for(var U=w?3:1,F=function(e){var t=j.find((function(t){var n=C.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return M=t,"break"},X=U;X>0;X--){var Y=F(X);if("break"===Y)break}t.placement!==M&&(t.modifiersData[u]._skip=!0,t.placement=M,t.reset=!0)}}const He={name:"flip",enabled:!0,phase:"main",fn:Be,requiresIfExists:["offset"],data:{_skip:!1}};function We(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ne(e){return[r,i,o,a].some((function(t){return e[t]>=0}))}function Ie(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Ve(t,{elementContext:"reference"}),s=Ve(t,{altBoundary:!0}),u=We(a,r),c=We(s,o,i),f=Ne(u),p=Ne(c);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}const _e={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ie};function qe(e,t,n){var o=R(e),s=[a,r].indexOf(o)>=0?-1:1,u="function"===typeof n?n(Object.assign({},t,{placement:e})):n,c=u[0],f=u[1];return c=c||0,f=(f||0)*s,[a,i].indexOf(o)>=0?{x:f,y:c}:{x:c,y:f}}function Ue(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=h.reduce((function(e,n){return e[n]=qe(n,t.rects,i),e}),{}),s=a[t.placement],u=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}const Fe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ue};function Xe(e){var t=e.state,n=e.name;t.modifiersData[n]=Se({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Ye={name:"popperOffsets",enabled:!0,phase:"read",fn:Xe,data:{}};function ze(e){return"x"===e?"y":"x"}function $e(e){var t=e.state,n=e.options,s=e.name,u=n.mainAxis,f=void 0===u||u,p=n.altAxis,l=void 0!==p&&p,d=n.boundary,v=n.rootBoundary,m=n.altBoundary,h=n.padding,g=n.tether,y=void 0===g||g,b=n.tetherOffset,w=void 0===b?0:b,x=Ve(t,{boundary:d,rootBoundary:v,padding:h,altBoundary:m}),O=R(t.placement),E=se(t.placement),A=!E,T=K(O),j=ze(T),D=t.modifiersData.popperOffsets,L=t.rects.reference,C=t.rects.popper,k="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,M="number"===typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(D){if(f){var P,W="y"===T?r:a,N="y"===T?o:i,I="y"===T?"height":"width",_=D[T],U=_+x[W],F=_-x[N],X=y?-C[I]/2:0,Y=E===c?L[I]:C[I],z=E===c?-C[I]:-L[I],$=t.elements.arrow,J=y&&$?q($):{width:0,height:0},te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ee(),ne=te[W],re=te[N],oe=Q(0,L[I],J[I]),ie=A?L[I]/2-X-oe-ne-M.mainAxis:Y-oe-ne-M.mainAxis,ae=A?-L[I]/2+X+oe+re+M.mainAxis:z+oe+re+M.mainAxis,ue=t.elements.arrow&&G(t.elements.arrow),ce=ue?"y"===T?ue.clientTop||0:ue.clientLeft||0:0,fe=null!=(P=null==S?void 0:S[T])?P:0,pe=_+ie-fe-ce,le=_+ae-fe,de=Q(y?H(U,pe):U,_,y?B(F,le):F);D[T]=de,V[T]=de-_}if(l){var ve,me="x"===T?r:a,he="x"===T?o:i,ge=D[j],ye="y"===j?"height":"width",be=ge+x[me],we=ge-x[he],xe=-1!==[r,a].indexOf(O),Oe=null!=(ve=null==S?void 0:S[j])?ve:0,Ee=xe?be:ge-L[ye]-C[ye]-Oe+M.altAxis,Ae=xe?ge+L[ye]+C[ye]-Oe-M.altAxis:we,Te=y&&xe?Z(Ee,ge,Ae):Q(y?Ee:be,ge,y?Ae:we);D[j]=Te,V[j]=Te-ge}t.modifiersData[s]=V}}const Je={name:"preventOverflow",enabled:!0,phase:"main",fn:$e,requiresIfExists:["offset"]};function Ge(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ke(e){return e!==L(e)&&k(e)?Ge(e):we(e)}function Qe(e){var t=e.getBoundingClientRect(),n=W(t.width)/e.offsetWidth||1,r=W(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function Ze(e,t,n){void 0===n&&(n=!1);var r=k(t),o=k(t)&&Qe(t),i=Y(t),a=_(e,o,n),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!n)&&(("body"!==D(t)||Ae(i))&&(s=Ke(t)),k(t)?(u=_(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=xe(i))),{x:a.left+s.scrollLeft-u.x,y:a.top+s.scrollTop-u.y,width:a.width,height:a.height}}function et(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name);var i=[].concat(e.requires||[],e.requiresIfExists||[]);i.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function tt(e){var t=et(e);return j.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function nt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function rt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var ot={placement:"bottom",modifiers:[],strategy:"absolute"};function it(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function at(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?ot:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ot,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,u={state:o,setOptions:function(n){var a="function"===typeof n?n(o.options):n;f(),o.options=Object.assign({},i,o.options,a),o.scrollParents={reference:C(e)?je(e):e.contextElement?je(e.contextElement):[],popper:je(t)};var s=tt(rt([].concat(r,o.options.modifiers)));return o.orderedModifiers=s.filter((function(e){return e.enabled})),c(),u.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(it(t,n)){o.rects={reference:Ze(t,G(n),"fixed"===o.options.strategy),popper:q(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,f=void 0===c?{}:c,p=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:p,instance:u})||o)}else o.reset=!1,r=-1}}},update:nt((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){f(),s=!0}};if(!it(e,t))return u;function c(){o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:u,options:r}),c=function(){};a.push(s||c)}}))}function f(){a.forEach((function(e){return e()})),a=[]}return u.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var st=[me,Ye,le,P,Fe,He,Je,ae,_e],ut=at({defaultModifiers:st}),ct="tippy-box",ft="tippy-content",pt="tippy-backdrop",lt="tippy-arrow",dt="tippy-svg-arrow",vt={passive:!0,capture:!0},mt=function(){return document.body};function ht(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function gt(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function yt(e,t){return"function"===typeof e?e.apply(void 0,t):e}function bt(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function wt(e){return e.split(/\s+/).filter(Boolean)}function xt(e){return[].concat(e)}function Ot(e,t){-1===e.indexOf(t)&&e.push(t)}function Et(e){return e.filter((function(t,n){return e.indexOf(t)===n}))}function At(e){return e.split("-")[0]}function Tt(e){return[].slice.call(e)}function jt(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}function Dt(){return document.createElement("div")}function Lt(e){return["Element","Fragment"].some((function(t){return gt(e,t)}))}function Ct(e){return gt(e,"NodeList")}function kt(e){return gt(e,"MouseEvent")}function Mt(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function St(e){return Lt(e)?[e]:Ct(e)?Tt(e):Array.isArray(e)?e:Tt(document.querySelectorAll(e))}function Vt(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Pt(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Rt(e){var t,n=xt(e),r=n[0];return null!=r&&null!=(t=r.ownerDocument)&&t.body?r.ownerDocument:document}function Bt(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props,a=i.interactiveBorder,s=At(o.placement),u=o.modifiersData.offset;if(!u)return!0;var c="bottom"===s?u.top.y:0,f="top"===s?u.bottom.y:0,p="right"===s?u.left.x:0,l="left"===s?u.right.x:0,d=t.top-r+c>a,v=r-t.bottom-f>a,m=t.left-n+p>a,h=n-t.right-l>a;return d||v||m||h}))}function Ht(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}function Wt(e,t){var n=t;while(n){var r;if(e.contains(n))return!0;n=null==n.getRootNode||null==(r=n.getRootNode())?void 0:r.host}return!1}var Nt={isTouch:!1},It=0;function _t(){Nt.isTouch||(Nt.isTouch=!0,window.performance&&document.addEventListener("mousemove",qt))}function qt(){var e=performance.now();e-It<20&&(Nt.isTouch=!1,document.removeEventListener("mousemove",qt)),It=e}function Ut(){var e=document.activeElement;if(Mt(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function Ft(){document.addEventListener("touchstart",_t,vt),window.addEventListener("blur",Ut)}var Xt="undefined"!==typeof window&&"undefined"!==typeof document,Yt=!!Xt&&!!window.msCrypto,zt={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},$t={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Jt=Object.assign({appendTo:mt,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},zt,$t),Gt=Object.keys(Jt),Kt=function(e){var t=Object.keys(e);t.forEach((function(t){Jt[t]=e[t]}))};function Qt(e){var t=e.plugins||[],n=t.reduce((function(t,n){var r,o=n.name,i=n.defaultValue;o&&(t[o]=void 0!==e[o]?e[o]:null!=(r=Jt[o])?r:i);return t}),{});return Object.assign({},e,n)}function Zt(e,t){var n=t?Object.keys(Qt(Object.assign({},Jt,{plugins:t}))):Gt,r=n.reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(o){t[n]=r}return t}),{});return r}function en(e,t){var n=Object.assign({},t,{content:yt(t.content,[e])},t.ignoreAttributes?{}:Zt(e,t.plugins));return n.aria=Object.assign({},Jt.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}var tn=function(){return"innerHTML"};function nn(e,t){e[tn()]=t}function rn(e){var t=Dt();return!0===e?t.className=lt:(t.className=dt,Lt(e)?t.appendChild(e):nn(t,e)),t}function on(e,t){Lt(t.content)?(nn(e,""),e.appendChild(t.content)):"function"!==typeof t.content&&(t.allowHTML?nn(e,t.content):e.textContent=t.content)}function an(e){var t=e.firstElementChild,n=Tt(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(ft)})),arrow:n.find((function(e){return e.classList.contains(lt)||e.classList.contains(dt)})),backdrop:n.find((function(e){return e.classList.contains(pt)}))}}function sn(e){var t=Dt(),n=Dt();n.className=ct,n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=Dt();function o(n,r){var o=an(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"===typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"===typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||on(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(rn(r.arrow))):i.appendChild(rn(r.arrow)):s&&i.removeChild(s)}return r.className=ft,r.setAttribute("data-state","hidden"),on(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}sn.$$tippy=!0;var un=1,cn=[],fn=[];function pn(e,t){var n,r,o,i,a,s,u,c=en(e,Object.assign({},Jt,Qt(jt(t)))),f=!1,p=!1,l=!1,d=!1,v=[],m=bt(G,c.interactiveDebounce),h=un++,g=null,y=Et(c.plugins),b={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},w={id:h,reference:e,popper:Dt(),popperInstance:g,props:c,state:b,plugins:y,clearDelayTimeouts:ue,setProps:ce,setContent:fe,show:pe,hide:le,hideWithInteractivity:de,enable:ae,disable:se,unmount:ve,destroy:me};if(!c.render)return w;var x=c.render(w),O=x.popper,E=x.onUpdate;O.setAttribute("data-tippy-root",""),O.id="tippy-"+w.id,w.popper=O,e._tippy=w,O._tippy=w;var A=y.map((function(e){return e.fn(w)})),T=e.hasAttribute("aria-expanded");return z(),B(),V(),P("onCreate",[w]),c.showOnCreate&&oe(),O.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),O.addEventListener("mouseleave",(function(){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&k().addEventListener("mousemove",m)})),w;function j(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function D(){return"hold"===j()[0]}function L(){var e;return!(null==(e=w.props.render)||!e.$$tippy)}function C(){return u||e}function k(){var e=C().parentNode;return e?Rt(e):document}function M(){return an(O)}function S(e){return w.state.isMounted&&!w.state.isVisible||Nt.isTouch||i&&"focus"===i.type?0:ht(w.props.delay,e?0:1,Jt.delay)}function V(e){void 0===e&&(e=!1),O.style.pointerEvents=w.props.interactive&&!e?"":"none",O.style.zIndex=""+w.props.zIndex}function P(e,t,n){var r;(void 0===n&&(n=!0),A.forEach((function(n){n[e]&&n[e].apply(n,t)})),n)&&(r=w.props)[e].apply(r,t)}function R(){var t=w.props.aria;if(t.content){var n="aria-"+t.content,r=O.id,o=xt(w.props.triggerTarget||e);o.forEach((function(e){var t=e.getAttribute(n);if(w.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function B(){if(!T&&w.props.aria.expanded){var t=xt(w.props.triggerTarget||e);t.forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===C()?"true":"false"):e.removeAttribute("aria-expanded")}))}}function H(){k().removeEventListener("mousemove",m),cn=cn.filter((function(e){return e!==m}))}function W(t){if(!Nt.isTouch||!l&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!w.props.interactive||!Wt(O,n)){if(xt(w.props.triggerTarget||e).some((function(e){return Wt(e,n)}))){if(Nt.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else P("onClickOutside",[w,t]);!0===w.props.hideOnClick&&(w.clearDelayTimeouts(),w.hide(),p=!0,setTimeout((function(){p=!1})),w.state.isMounted||q())}}}function N(){l=!0}function I(){l=!1}function _(){var e=k();e.addEventListener("mousedown",W,!0),e.addEventListener("touchend",W,vt),e.addEventListener("touchstart",I,vt),e.addEventListener("touchmove",N,vt)}function q(){var e=k();e.removeEventListener("mousedown",W,!0),e.removeEventListener("touchend",W,vt),e.removeEventListener("touchstart",I,vt),e.removeEventListener("touchmove",N,vt)}function U(e,t){X(e,(function(){!w.state.isVisible&&O.parentNode&&O.parentNode.contains(O)&&t()}))}function F(e,t){X(e,t)}function X(e,t){var n=M().box;function r(e){e.target===n&&(Ht(n,"remove",r),t())}if(0===e)return t();Ht(n,"remove",a),Ht(n,"add",r),a=r}function Y(t,n,r){void 0===r&&(r=!1);var o=xt(w.props.triggerTarget||e);o.forEach((function(e){e.addEventListener(t,n,r),v.push({node:e,eventType:t,handler:n,options:r})}))}function z(){D()&&(Y("touchstart",J,{passive:!0}),Y("touchend",K,{passive:!0})),wt(w.props.trigger).forEach((function(e){if("manual"!==e)switch(Y(e,J),e){case"mouseenter":Y("mouseleave",K);break;case"focus":Y(Yt?"focusout":"blur",Q);break;case"focusin":Y("focusout",Q);break}}))}function $(){v.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),v=[]}function J(e){var t,n=!1;if(w.state.isEnabled&&!Z(e)&&!p){var r="focus"===(null==(t=i)?void 0:t.type);i=e,u=e.currentTarget,B(),!w.state.isVisible&&kt(e)&&cn.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||f)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:oe(e),"click"===e.type&&(f=!n),n&&!r&&ie(e)}}function G(e){var t=e.target,n=C().contains(t)||O.contains(t);if("mousemove"!==e.type||!n){var r=re().concat(O).map((function(e){var t,n=e._tippy,r=null==(t=n.popperInstance)?void 0:t.state;return r?{popperRect:e.getBoundingClientRect(),popperState:r,props:c}:null})).filter(Boolean);Bt(r,e)&&(H(),ie(e))}}function K(e){var t=Z(e)||w.props.trigger.indexOf("click")>=0&&f;t||(w.props.interactive?w.hideWithInteractivity(e):ie(e))}function Q(e){w.props.trigger.indexOf("focusin")<0&&e.target!==C()||w.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)||ie(e)}function Z(e){return!!Nt.isTouch&&D()!==e.type.indexOf("touch")>=0}function ee(){te();var t=w.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,u=L()?an(O).arrow:null,c=i?{getBoundingClientRect:i,contextElement:i.contextElement||C()}:e,f={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(L()){var n=M(),r=n.box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?r.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?r.setAttribute("data-"+e,""):r.removeAttribute("data-"+e)})),t.attributes.popper={}}}},p=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},f];L()&&u&&p.push({name:"arrow",options:{element:u,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),w.popperInstance=ut(c,O,Object.assign({},n,{placement:r,onFirstUpdate:s,modifiers:p}))}function te(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ne(){var e,t=w.props.appendTo,n=C();e=w.props.interactive&&t===mt||"parent"===t?n.parentNode:yt(t,[n]),e.contains(O)||e.appendChild(O),w.state.isMounted=!0,ee()}function re(){return Tt(O.querySelectorAll("[data-tippy-root]"))}function oe(e){w.clearDelayTimeouts(),e&&P("onTrigger",[w,e]),_();var t=S(!0),r=j(),o=r[0],i=r[1];Nt.isTouch&&"hold"===o&&i&&(t=i),t?n=setTimeout((function(){w.show()}),t):w.show()}function ie(e){if(w.clearDelayTimeouts(),P("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&f)){var t=S(!1);t?r=setTimeout((function(){w.state.isVisible&&w.hide()}),t):o=requestAnimationFrame((function(){w.hide()}))}}else q()}function ae(){w.state.isEnabled=!0}function se(){w.hide(),w.state.isEnabled=!1}function ue(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(o)}function ce(t){if(!w.state.isDestroyed){P("onBeforeUpdate",[w,t]),$();var n=w.props,r=en(e,Object.assign({},n,jt(t),{ignoreAttributes:!0}));w.props=r,z(),n.interactiveDebounce!==r.interactiveDebounce&&(H(),m=bt(G,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?xt(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded"),B(),V(),E&&E(n,r),w.popperInstance&&(ee(),re().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))),P("onAfterUpdate",[w,t])}}function fe(e){w.setProps({content:e})}function pe(){var e=w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=Nt.isTouch&&!w.props.touch,o=ht(w.props.duration,0,Jt.duration);if(!(e||t||n||r)&&!C().hasAttribute("disabled")&&(P("onShow",[w],!1),!1!==w.props.onShow(w))){if(w.state.isVisible=!0,L()&&(O.style.visibility="visible"),V(),_(),w.state.isMounted||(O.style.transition="none"),L()){var i=M(),a=i.box,u=i.content;Vt([a,u],0)}s=function(){var e;if(w.state.isVisible&&!d){if(d=!0,O.style.transition=w.props.moveTransition,L()&&w.props.animation){var t=M(),n=t.box,r=t.content;Vt([n,r],o),Pt([n,r],"visible")}R(),B(),Ot(fn,w),null==(e=w.popperInstance)||e.forceUpdate(),P("onMount",[w]),w.props.animation&&L()&&F(o,(function(){w.state.isShown=!0,P("onShown",[w])}))}},ne()}}function le(){var e=!w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=ht(w.props.duration,1,Jt.duration);if(!(e||t||n)&&(P("onHide",[w],!1),!1!==w.props.onHide(w))){if(w.state.isVisible=!1,w.state.isShown=!1,d=!1,f=!1,L()&&(O.style.visibility="hidden"),H(),q(),V(!0),L()){var o=M(),i=o.box,a=o.content;w.props.animation&&(Vt([i,a],r),Pt([i,a],"hidden"))}R(),B(),w.props.animation?L()&&U(r,w.unmount):w.unmount()}}function de(e){k().addEventListener("mousemove",m),Ot(cn,m),m(e)}function ve(){w.state.isVisible&&w.hide(),w.state.isMounted&&(te(),re().forEach((function(e){e._tippy.unmount()})),O.parentNode&&O.parentNode.removeChild(O),fn=fn.filter((function(e){return e!==w})),w.state.isMounted=!1,P("onHidden",[w]))}function me(){w.state.isDestroyed||(w.clearDelayTimeouts(),w.unmount(),$(),delete e._tippy,w.state.isDestroyed=!0,P("onDestroy",[w]))}}function ln(e,t){void 0===t&&(t={});var n=Jt.plugins.concat(t.plugins||[]);Ft();var r=Object.assign({},t,{plugins:n}),o=St(e),i=o.reduce((function(e,t){var n=t&&pn(t,r);return n&&e.push(n),e}),[]);return Lt(e)?i[0]:i}ln.defaultProps=Jt,ln.setDefaultProps=Kt,ln.currentInput=Nt,Object.assign({},P,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});var dn={clientX:0,clientY:0},vn=[];function mn(e){var t=e.clientX,n=e.clientY;dn={clientX:t,clientY:n}}function hn(e){e.addEventListener("mousemove",mn)}function gn(e){e.removeEventListener("mousemove",mn)}var yn={name:"followCursor",defaultValue:!1,fn:function(e){var t=e.reference,n=Rt(e.props.triggerTarget||t),r=!1,o=!1,i=!0,a=e.props;function s(){return"initial"===e.props.followCursor&&e.state.isVisible}function u(){n.addEventListener("mousemove",p)}function c(){n.removeEventListener("mousemove",p)}function f(){r=!0,e.setProps({getReferenceClientRect:null}),r=!1}function p(n){var r=!n.target||t.contains(n.target),o=e.props.followCursor,i=n.clientX,a=n.clientY,s=t.getBoundingClientRect(),u=i-s.left,c=a-s.top;!r&&e.props.interactive||e.setProps({getReferenceClientRect:function(){var e=t.getBoundingClientRect(),n=i,r=a;"initial"===o&&(n=e.left+u,r=e.top+c);var s="horizontal"===o?e.top:r,f="vertical"===o?e.right:n,p="horizontal"===o?e.bottom:r,l="vertical"===o?e.left:n;return{width:f-l,height:p-s,top:s,right:f,bottom:p,left:l}}})}function l(){e.props.followCursor&&(vn.push({instance:e,doc:n}),hn(n))}function d(){vn=vn.filter((function(t){return t.instance!==e})),0===vn.filter((function(e){return e.doc===n})).length&&gn(n)}return{onCreate:l,onDestroy:d,onBeforeUpdate:function(){a=e.props},onAfterUpdate:function(t,n){var i=n.followCursor;r||void 0!==i&&a.followCursor!==i&&(d(),i?(l(),!e.state.isMounted||o||s()||u()):(c(),f()))},onMount:function(){e.props.followCursor&&!o&&(i&&(p(dn),i=!1),s()||u())},onTrigger:function(e,t){kt(t)&&(dn={clientX:t.clientX,clientY:t.clientY}),o="focus"===t.type},onHidden:function(){e.props.followCursor&&(f(),c(),i=!0)}}}};ln.setDefaultProps({render:sn})}}]);
//# sourceMappingURL=7568.3c0a3e6c.js.map