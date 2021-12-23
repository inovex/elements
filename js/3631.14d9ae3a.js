"use strict";(self["webpackChunk_inovex_de_elements_landingpage"]=self["webpackChunk_inovex_de_elements_landingpage"]||[]).push([[3631],{3631:function(e,t,n){function r(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function o(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function i(e){var t=o(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function a(e){var t=o(e).Element;return e instanceof t||e instanceof Element}function s(e){var t=o(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function c(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function u(e){return e!==o(e)&&s(e)?c(e):i(e)}function p(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return(a(e)?e.ownerDocument:e.document).documentElement}function d(e){return r(f(e)).left+i(e).scrollLeft}function l(e){return o(e).getComputedStyle(e)}function m(e){var t=l(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function v(e,t,n){void 0===n&&(n=!1);var o=f(t),i=r(e),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return n||(("body"!==p(t)||m(o))&&(a=u(t)),s(t)?(c=r(t),c.x+=t.clientLeft,c.y+=t.clientTop):o&&(c.x=d(o))),{x:i.left+a.scrollLeft-c.x,y:i.top+a.scrollTop-c.y,width:i.width,height:i.height}}function h(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function b(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||e.host||f(e)}function g(e){return["html","body","#document"].indexOf(p(e))>=0?e.ownerDocument.body:s(e)&&m(e)?e:g(b(e))}function y(e,t){void 0===t&&(t=[]);var n=g(e),r="body"===p(n),i=o(n),a=r?[i].concat(i.visualViewport||[],m(n)?n:[]):n,s=t.concat(a);return r?s:s.concat(y(b(a)))}function x(e){return["table","td","th"].indexOf(p(e))>=0}function w(e){return s(e)&&"fixed"!==l(e).position?e.offsetParent:null}function O(e){var t=o(e),n=w(e);while(n&&x(n))n=w(n);return n&&"body"===p(n)&&"static"===l(n).position?t:n||t}n.d(t,{t:function(){return tn}});var E="top",T="bottom",A="right",D="left",L="auto",j=[E,T,A,D],k="start",M="end",C="clippingParents",P="viewport",B="popper",S="reference",V=j.reduce((function(e,t){return e.concat([t+"-"+k,t+"-"+M])}),[]),H=[].concat(j,[L]).reduce((function(e,t){return e.concat([t,t+"-"+k,t+"-"+M])}),[]),W="beforeRead",I="read",R="afterRead",_="beforeMain",N="main",q="afterMain",U="beforeWrite",F="write",z="afterWrite",$=[W,I,R,_,N,q,U,F,z];function X(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name);var i=[].concat(e.requires||[],e.requiresIfExists||[]);i.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function Y(e){var t=X(e);return $.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function J(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function G(e){return e.split("-")[0]}function K(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,{},t,{options:Object.assign({},n.options,{},t.options),data:Object.assign({},n.data,{},t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var Q={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ee(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Q:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Q,{},i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],c=!1,u={state:o,setOptions:function(n){f(),o.options=Object.assign({},i,{},o.options,{},n),o.scrollParents={reference:a(e)?y(e):e.contextElement?y(e.contextElement):[],popper:y(t)};var s=Y(K([].concat(r,o.options.modifiers)));return o.orderedModifiers=s.filter((function(e){return e.enabled})),p(),u.update()},forceUpdate:function(){if(!c){var e=o.elements,t=e.reference,n=e.popper;if(Z(t,n)){o.rects={reference:v(t,O(n),"fixed"===o.options.strategy),popper:h(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,p=void 0===s?{}:s,f=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:f,instance:u})||o)}else o.reset=!1,r=-1}}},update:J((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){f(),c=!0}};if(!Z(e,t))return u;function p(){o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:u,options:r}),c=function(){};s.push(a||c)}}))}function f(){s.forEach((function(e){return e()})),s=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var te={passive:!0};function ne(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,c=void 0===s||s,u=o(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,te)})),c&&u.addEventListener("resize",n.update,te),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,te)})),c&&u.removeEventListener("resize",n.update,te)}}var re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ne,data:{}};function oe(e){return e.split("-")[1]}function ie(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ae(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?G(o):null,a=o?oe(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case E:t={x:s,y:n.y-r.height};break;case T:t={x:s,y:n.y+n.height};break;case A:t={x:n.x+n.width,y:c};break;case D:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?ie(i):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case k:t[u]=Math.floor(t[u])-Math.floor(n[p]/2-r[p]/2);break;case M:t[u]=Math.floor(t[u])+Math.ceil(n[p]/2-r[p]/2);break}}return t}function se(e){var t=e.state,n=e.name;t.modifiersData[n]=ae({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ce={name:"popperOffsets",enabled:!0,phase:"read",fn:se,data:{}},ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pe(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:Math.round(t*o)/o||0,y:Math.round(n*o)/o||0}}function fe(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,p=pe(a),d=p.x,l=p.y,m=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),h=D,b=E,g=window;if(u){var y=O(n);y===o(n)&&(y=f(n)),i===E&&(b=T,l-=y.clientHeight-r.height,l*=c?1:-1),i===D&&(h=A,d-=y.clientWidth-r.width,d*=c?1:-1)}var x,w=Object.assign({position:s},u&&ue);return c?Object.assign({},w,(x={},x[b]=v?"0":"",x[h]=m?"0":"",x.transform=(g.devicePixelRatio||1)<2?"translate("+d+"px, "+l+"px)":"translate3d("+d+"px, "+l+"px, 0)",x)):Object.assign({},w,(t={},t[b]=v?l+"px":"",t[h]=m?d+"px":"",t.transform="",t))}function de(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s={placement:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,{},fe(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,{},fe(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var le={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:de,data:{}};function me(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&p(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))}function ve(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),a=i.reduce((function(e,t){return e[t]="",e}),{});s(r)&&p(r)&&(Object.assign(r.style,a),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}}var he={name:"applyStyles",enabled:!0,phase:"write",fn:me,effect:ve,requires:["computeStyles"]};function be(e,t,n){var r=G(e),o=[D,E].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[D,A].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function ge(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=H.reduce((function(e,n){return e[n]=be(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}var ye={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ge},xe={left:"right",right:"left",bottom:"top",top:"bottom"};function we(e){return e.replace(/left|right|bottom|top/g,(function(e){return xe[e]}))}var Oe={start:"end",end:"start"};function Ee(e){return e.replace(/start|end/g,(function(e){return Oe[e]}))}function Te(e){var t=o(e),n=t.visualViewport,r=t.innerWidth,i=t.innerHeight;return n&&/iPhone|iPod|iPad/.test(navigator.platform)&&(r=n.width,i=n.height),{width:r,height:i,x:0,y:0}}function Ae(e){var t=o(e),n=i(e),r=v(f(e),t);return r.height=Math.max(r.height,t.innerHeight),r.width=Math.max(r.width,t.innerWidth),r.x=-n.scrollLeft,r.y=-n.scrollTop,r}function De(e){return parseFloat(e)||0}function Le(e){var t=s(e)?l(e):{};return{top:De(t.borderTopWidth),right:De(t.borderRightWidth),bottom:De(t.borderBottomWidth),left:De(t.borderLeftWidth)}}function je(e){var t=o(e),n=Le(e),r="html"===p(e),i=d(e),a=e.clientWidth+n.right,s=e.clientHeight+n.bottom;return r&&t.innerHeight-e.clientHeight>50&&(s=t.innerHeight-n.bottom),{top:r?0:e.clientTop,right:e.clientLeft>n.left?n.right:r?t.innerWidth-a-i:e.offsetWidth-a,bottom:r?t.innerHeight-s:e.offsetHeight-s,left:r?i:e.clientLeft}}function ke(e,t){var n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Me(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ce(e,t){return t===P?Me(Te(e)):s(t)?r(t):Me(Ae(f(e)))}function Pe(e){var t=y(e),n=["absolute","fixed"].indexOf(l(e).position)>=0,r=n&&s(e)?O(e):e;return a(r)?t.filter((function(e){return a(e)&&ke(e,r)})):[]}function Be(e,t,n){var r="clippingParents"===t?Pe(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=Ce(e,n),o=je(s(n)?n:f(e));return t.top=Math.max(r.top+o.top,t.top),t.right=Math.min(r.right-o.right,t.right),t.bottom=Math.min(r.bottom-o.bottom,t.bottom),t.left=Math.max(r.left+o.left,t.left),t}),Ce(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Se(){return{top:0,right:0,bottom:0,left:0}}function Ve(e){return Object.assign({},Se(),{},e)}function He(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function We(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,s=n.boundary,c=void 0===s?C:s,u=n.rootBoundary,p=void 0===u?P:u,d=n.elementContext,l=void 0===d?B:d,m=n.altBoundary,v=void 0!==m&&m,h=n.padding,b=void 0===h?0:h,g=Ve("number"!==typeof b?b:He(b,j)),y=l===B?S:B,x=e.elements.reference,w=e.rects.popper,O=e.elements[v?y:l],D=Be(a(O)?O:O.contextElement||f(e.elements.popper),c,p),L=r(x),k=ae({reference:L,element:w,strategy:"absolute",placement:i}),M=Me(Object.assign({},w,{},k)),V=l===B?M:L,H={top:D.top-V.top+g.top,bottom:V.bottom-D.bottom+g.bottom,left:D.left-V.left+g.left,right:V.right-D.right+g.right},W=e.modifiersData.offset;if(l===B&&W){var I=W[i];Object.keys(H).forEach((function(e){var t=[A,T].indexOf(e)>=0?1:-1,n=[E,T].indexOf(e)>=0?"y":"x";H[e]+=I[n]*t}))}return H}function Ie(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?H:c,p=oe(r),f=(p?s?V:V.filter((function(e){return oe(e)===p})):j).filter((function(e){return u.indexOf(e)>=0})),d=f.reduce((function(t,n){return t[n]=We(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[G(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}function Re(e){if(G(e)===L)return[];var t=we(e);return[Ee(e),t,Ee(t)]}function _e(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,b=G(h),g=b===h,y=c||(g||!m?[we(h)]:Re(h)),x=[h].concat(y).reduce((function(e,n){return e.concat(G(n)===L?Ie(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,O=t.rects.popper,j=new Map,M=!0,C=x[0],P=0;P<x.length;P++){var B=x[P],S=G(B),V=oe(B)===k,H=[E,T].indexOf(S)>=0,W=H?"width":"height",I=We(t,{placement:B,boundary:p,rootBoundary:f,altBoundary:d,padding:u}),R=H?V?A:D:V?T:E;w[W]>O[W]&&(R=we(R));var _=we(R),N=[];if(i&&N.push(I[S]<=0),s&&N.push(I[R]<=0,I[_]<=0),N.every((function(e){return e}))){C=B,M=!1;break}j.set(B,N)}if(M)for(var q=m?3:1,U=function(e){var t=x.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},F=q;F>0;F--){var z=U(F);if("break"===z)break}t.placement!==C&&(t.modifiersData[r]._skip=!0,t.placement=C,t.reset=!0)}}var Ne={name:"flip",enabled:!0,phase:"main",fn:_e,requiresIfExists:["offset"],data:{_skip:!1}};function qe(e){return"x"===e?"y":"x"}function Ue(e,t,n){return Math.max(e,Math.min(t,n))}function Fe(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,d=n.tether,l=void 0===d||d,m=n.tetherOffset,v=void 0===m?0:m,b=We(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:p}),g=G(t.placement),y=oe(t.placement),x=!y,w=ie(g),L=qe(w),j=t.modifiersData.popperOffsets,M=t.rects.reference,C=t.rects.popper,P="function"===typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,B={x:0,y:0};if(j){if(i){var S="y"===w?E:D,V="y"===w?T:A,H="y"===w?"height":"width",W=j[w],I=j[w]+b[S],R=j[w]-b[V],_=l?-C[H]/2:0,N=y===k?M[H]:C[H],q=y===k?-C[H]:-M[H],U=t.elements.arrow,F=l&&U?h(U):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Se(),$=z[S],X=z[V],Y=Ue(0,M[H],F[H]),J=x?M[H]/2-_-Y-$-P:N-Y-$-P,K=x?-M[H]/2+_+Y+X+P:q+Y+X+P,Q=t.elements.arrow&&O(t.elements.arrow),Z=Q?"y"===w?Q.clientTop||0:Q.clientLeft||0:0,ee=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,te=j[w]+J-ee-Z,ne=j[w]+K-ee,re=Ue(l?Math.min(I,te):I,W,l?Math.max(R,ne):R);j[w]=re,B[w]=re-W}if(s){var ae="x"===w?E:D,se="x"===w?T:A,ce=j[L],ue=ce+b[ae],pe=ce-b[se],fe=Ue(ue,ce,pe);j[L]=fe,B[L]=fe-ce}t.modifiersData[r]=B}}var ze={name:"preventOverflow",enabled:!0,phase:"main",fn:Fe,requiresIfExists:["offset"]};function $e(e){var t,n=e.state,r=e.name,o=n.elements.arrow,i=n.modifiersData.popperOffsets,a=G(n.placement),s=ie(a),c=[D,A].indexOf(a)>=0,u=c?"height":"width";if(o&&i){var p=n.modifiersData[r+"#persistent"].padding,f=h(o),d="y"===s?E:D,l="y"===s?T:A,m=n.rects.reference[u]+n.rects.reference[s]-i[s]-n.rects.popper[u],v=i[s]-n.rects.reference[s],b=O(o),g=b?"y"===s?b.clientHeight||0:b.clientWidth||0:0,y=m/2-v/2,x=p[d],w=g-f[u]-p[l],L=g/2-f[u]/2+y,j=Ue(x,L,w),k=s;n.modifiersData[r]=(t={},t[k]=j,t.centerOffset=j-L,t)}}function Xe(e){var t=e.state,n=e.options,r=e.name,o=n.element,i=void 0===o?"[data-popper-arrow]":o,a=n.padding,s=void 0===a?0:a;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&ke(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[r+"#persistent"]={padding:Ve("number"!==typeof s?s:He(s,j))})}var Ye={name:"arrow",enabled:!0,phase:"main",fn:$e,effect:Xe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Je(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ge(e){return[E,A,T,D].some((function(t){return e[t]>=0}))}function Ke(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=We(t,{elementContext:"reference"}),s=We(t,{altBoundary:!0}),c=Je(a,r),u=Je(s,o,i),p=Ge(c),f=Ge(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}var Qe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ke},Ze=[re,ce,le,he,ye,Ne,ze,Ye,Qe],et=ee({defaultModifiers:Ze}),tt="tippy-box",nt="tippy-content",rt="tippy-backdrop",ot="tippy-arrow",it="tippy-svg-arrow",at={passive:!0,capture:!0};function st(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function ct(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function ut(e,t){return"function"===typeof e?e.apply(void 0,t):e}function pt(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function ft(e){return e.split(/\s+/).filter(Boolean)}function dt(e){return[].concat(e)}function lt(e,t){-1===e.indexOf(t)&&e.push(t)}function mt(e){return e.filter((function(t,n){return e.indexOf(t)===n}))}function vt(e){return e.split("-")[0]}function ht(e){return[].slice.call(e)}function bt(){return document.createElement("div")}function gt(e){return["Element","Fragment"].some((function(t){return ct(e,t)}))}function yt(e){return ct(e,"NodeList")}function xt(e){return ct(e,"MouseEvent")}function wt(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Ot(e){return gt(e)?[e]:yt(e)?ht(e):Array.isArray(e)?e:ht(document.querySelectorAll(e))}function Et(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Tt(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function At(e){var t=dt(e),n=t[0];return n&&n.ownerDocument||document}function Dt(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props,a=i.interactiveBorder,s=vt(o.placement),c=o.modifiersData.offset;if(!c)return!0;var u="bottom"===s?c.top.y:0,p="top"===s?c.bottom.y:0,f="right"===s?c.left.x:0,d="left"===s?c.right.x:0,l=t.top-r+u>a,m=r-t.bottom-p>a,v=t.left-n+f>a,h=n-t.right-d>a;return l||m||v||h}))}function Lt(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var jt={isTouch:!1},kt=0;function Mt(){jt.isTouch||(jt.isTouch=!0,window.performance&&document.addEventListener("mousemove",Ct))}function Ct(){var e=performance.now();e-kt<20&&(jt.isTouch=!1,document.removeEventListener("mousemove",Ct)),kt=e}function Pt(){var e=document.activeElement;if(wt(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function Bt(){document.addEventListener("touchstart",Mt,at),window.addEventListener("blur",Pt)}var St="undefined"!==typeof window&&"undefined"!==typeof document,Vt=St?navigator.userAgent:"",Ht=/MSIE |Trident\//.test(Vt),Wt={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},It={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Rt=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Wt,{},It),_t=Object.keys(Rt),Nt=function(e){var t=Object.keys(e);t.forEach((function(t){Rt[t]=e[t]}))};function qt(e){var t=e.plugins||[],n=t.reduce((function(t,n){var r=n.name,o=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:o),t}),{});return Object.assign({},e,{},n)}function Ut(e,t){var n=t?Object.keys(qt(Object.assign({},Rt,{plugins:t}))):_t,r=n.reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(o){t[n]=r}return t}),{});return r}function Ft(e,t){var n=Object.assign({},t,{content:ut(t.content,[e])},t.ignoreAttributes?{}:Ut(e,t.plugins));return n.aria=Object.assign({},Rt.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}var zt=function(){return"innerHTML"};function $t(e,t){e[zt()]=t}function Xt(e){var t=bt();return!0===e?t.className=ot:(t.className=it,gt(e)?t.appendChild(e):$t(t,e)),t}function Yt(e,t){gt(t.content)?($t(e,""),e.appendChild(t.content)):"function"!==typeof t.content&&(t.allowHTML?$t(e,t.content):e.textContent=t.content)}function Jt(e){var t=e.firstElementChild,n=ht(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(nt)})),arrow:n.find((function(e){return e.classList.contains(ot)||e.classList.contains(it)})),backdrop:n.find((function(e){return e.classList.contains(rt)}))}}function Gt(e){var t=bt(),n=bt();n.className=tt,n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=bt();function o(n,r){var o=Jt(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"===typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"===typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||Yt(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(Xt(r.arrow))):i.appendChild(Xt(r.arrow)):s&&i.removeChild(s)}return r.className=nt,r.setAttribute("data-state","hidden"),Yt(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}Gt.$$tippy=!0;var Kt=1,Qt=[],Zt=[];function en(e,t){var n,r,o,i,a,s,c,u=Ft(e,Object.assign({},Rt,{},qt(t))),p=!1,f=!1,d=!1,l=!1,m=[],v=pt(G,u.interactiveDebounce),h=At(u.triggerTarget||e),b=Kt++,g=null,y=mt(u.plugins),x={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},w={id:b,reference:e,popper:bt(),popperInstance:g,props:u,state:x,plugins:y,clearDelayTimeouts:ce,setProps:ue,setContent:pe,show:fe,hide:de,hideWithInteractivity:le,enable:ae,disable:se,unmount:me,destroy:ve};if(!u.render)return w;var O=u.render(w),E=O.popper,T=O.onUpdate;E.setAttribute("data-tippy-root",""),E.id="tippy-"+w.id,w.popper=E,e._tippy=w,E._tippy=w;var A=y.map((function(e){return e.fn(w)})),D=e.hasAttribute("aria-expanded");return X(),H(),B(),S("onCreate",[w]),u.showOnCreate&&oe(),E.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),E.addEventListener("mouseleave",(function(e){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&(h.addEventListener("mousemove",v),v(e))})),w;function L(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return"hold"===L()[0]}function k(){var e;return!!(null==(e=w.props.render)?void 0:e.$$tippy)}function M(){return c||e}function C(){return Jt(E)}function P(e){return w.state.isMounted&&!w.state.isVisible||jt.isTouch||i&&"focus"===i.type?0:st(w.props.delay,e?0:1,Rt.delay)}function B(){E.style.pointerEvents=w.props.interactive&&w.state.isVisible?"":"none",E.style.zIndex=""+w.props.zIndex}function S(e,t,n){var r;(void 0===n&&(n=!0),A.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=w.props)[e].apply(r,t)}function V(){var t=w.props.aria;if(t.content){var n="aria-"+t.content,r=E.id,o=dt(w.props.triggerTarget||e);o.forEach((function(e){var t=e.getAttribute(n);if(w.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function H(){if(!D&&w.props.aria.expanded){var t=dt(w.props.triggerTarget||e);t.forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===M()?"true":"false"):e.removeAttribute("aria-expanded")}))}}function W(){h.body.removeEventListener("mouseleave",ie),h.removeEventListener("mousemove",v),Qt=Qt.filter((function(e){return e!==v}))}function I(e){if((!jt.isTouch||!d&&"mousedown"!==e.type)&&(!w.props.interactive||!E.contains(e.target))){if(M().contains(e.target)){if(jt.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else S("onClickOutside",[w,e]);!0===w.props.hideOnClick&&(p=!1,w.clearDelayTimeouts(),w.hide(),f=!0,setTimeout((function(){f=!1})),w.state.isMounted||q())}}function R(){d=!0}function _(){d=!1}function N(){h.addEventListener("mousedown",I,!0),h.addEventListener("touchend",I,at),h.addEventListener("touchstart",_,at),h.addEventListener("touchmove",R,at)}function q(){h.removeEventListener("mousedown",I,!0),h.removeEventListener("touchend",I,at),h.removeEventListener("touchstart",_,at),h.removeEventListener("touchmove",R,at)}function U(e,t){z(e,(function(){!w.state.isVisible&&E.parentNode&&E.parentNode.contains(E)&&t()}))}function F(e,t){z(e,t)}function z(e,t){var n=C().box;function r(e){e.target===n&&(Lt(n,"remove",r),t())}if(0===e)return t();Lt(n,"remove",a),Lt(n,"add",r),a=r}function $(t,n,r){void 0===r&&(r=!1);var o=dt(w.props.triggerTarget||e);o.forEach((function(e){e.addEventListener(t,n,r),m.push({node:e,eventType:t,handler:n,options:r})}))}function X(){j()&&($("touchstart",J,{passive:!0}),$("touchend",K,{passive:!0})),ft(w.props.trigger).forEach((function(e){if("manual"!==e)switch($(e,J),e){case"mouseenter":$("mouseleave",K);break;case"focus":$(Ht?"focusout":"blur",Q);break;case"focusin":$("focusout",Q);break}}))}function Y(){m.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),m=[]}function J(e){var t,n=!1;if(w.state.isEnabled&&!Z(e)&&!f){var r="focus"===(null==(t=i)?void 0:t.type);i=e,c=e.currentTarget,H(),!w.state.isVisible&&xt(e)&&Qt.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||p)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:oe(e),"click"===e.type&&(p=!n),n&&!r&&ie(e)}}function G(t){var n=t.target,r=e.contains(n)||E.contains(n);if("mousemove"!==t.type||!r){var o=re().concat(E).map((function(e){var t,n=e._tippy,r=null==(t=n.popperInstance)?void 0:t.state;return r?{popperRect:e.getBoundingClientRect(),popperState:r,props:u}:null})).filter(Boolean);Dt(o,t)&&(W(),ie(t))}}function K(e){var t=Z(e)||w.props.trigger.indexOf("click")>=0&&p;t||(w.props.interactive?w.hideWithInteractivity(e):ie(e))}function Q(e){w.props.trigger.indexOf("focusin")<0&&e.target!==M()||w.props.interactive&&e.relatedTarget&&E.contains(e.relatedTarget)||ie(e)}function Z(e){return!!jt.isTouch&&j()!==e.type.indexOf("touch")>=0}function ee(){te();var t=w.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,c=k()?Jt(E).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||M()}:e,p={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(k()){var n=C(),r=n.box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?r.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?r.setAttribute("data-"+e,""):r.removeAttribute("data-"+e)})),t.attributes.popper={}}}},f=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},p];k()&&c&&f.push({name:"arrow",options:{element:c,padding:3}}),f.push.apply(f,(null==n?void 0:n.modifiers)||[]),w.popperInstance=et(u,E,Object.assign({},n,{placement:r,onFirstUpdate:s,modifiers:f}))}function te(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ne(){var e,t=w.props.appendTo,n=M();e=w.props.interactive&&t===Rt.appendTo||"parent"===t?n.parentNode:ut(t,[n]),e.contains(E)||e.appendChild(E),ee()}function re(){return ht(E.querySelectorAll("[data-tippy-root]"))}function oe(e){w.clearDelayTimeouts(),e&&S("onTrigger",[w,e]),N();var t=P(!0),r=L(),o=r[0],i=r[1];jt.isTouch&&"hold"===o&&i&&(t=i),t?n=setTimeout((function(){w.show()}),t):w.show()}function ie(e){if(w.clearDelayTimeouts(),S("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&p)){var t=P(!1);t?r=setTimeout((function(){w.state.isVisible&&w.hide()}),t):o=requestAnimationFrame((function(){w.hide()}))}}else q()}function ae(){w.state.isEnabled=!0}function se(){w.hide(),w.state.isEnabled=!1}function ce(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(o)}function ue(t){if(!w.state.isDestroyed){S("onBeforeUpdate",[w,t]),Y();var n=w.props,r=Ft(e,Object.assign({},w.props,{},t,{ignoreAttributes:!0}));w.props=r,X(),n.interactiveDebounce!==r.interactiveDebounce&&(W(),v=pt(G,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?dt(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded"),H(),B(),T&&T(n,r),w.popperInstance&&(ee(),re().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))),S("onAfterUpdate",[w,t])}}function pe(e){w.setProps({content:e})}function fe(){var e=w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=jt.isTouch&&!w.props.touch,o=st(w.props.duration,0,Rt.duration);if(!(e||t||n||r)&&!M().hasAttribute("disabled")&&(S("onShow",[w],!1),!1!==w.props.onShow(w))){if(w.state.isVisible=!0,k()&&(E.style.visibility="visible"),B(),N(),w.state.isMounted||(E.style.transition="none"),k()){var i=C(),a=i.box,c=i.content;Et([a,c],0)}s=function(){if(w.state.isVisible&&!l){if(l=!0,E.style.transition=w.props.moveTransition,k()&&w.props.animation){var e=C(),t=e.box,n=e.content;Et([t,n],o),Tt([t,n],"visible")}V(),H(),lt(Zt,w),w.state.isMounted=!0,S("onMount",[w]),w.props.animation&&k()&&F(o,(function(){w.state.isShown=!0,S("onShown",[w])}))}},ne()}}function de(){var e=!w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=st(w.props.duration,1,Rt.duration);if(!(e||t||n)&&(S("onHide",[w],!1),!1!==w.props.onHide(w))){if(w.state.isVisible=!1,w.state.isShown=!1,l=!1,k()&&(E.style.visibility="hidden"),W(),q(),B(),k()){var o=C(),i=o.box,a=o.content;w.props.animation&&(Et([i,a],r),Tt([i,a],"hidden"))}V(),H(),w.props.animation?k()&&U(r,w.unmount):w.unmount()}}function le(e){h.body.addEventListener("mouseleave",ie),h.addEventListener("mousemove",v),lt(Qt,v),v(e)}function me(){w.state.isVisible&&w.hide(),w.state.isMounted&&(te(),re().forEach((function(e){e._tippy.unmount()})),E.parentNode&&E.parentNode.removeChild(E),Zt=Zt.filter((function(e){return e!==w})),w.state.isMounted=!1,S("onHidden",[w]))}function ve(){w.state.isDestroyed||(w.clearDelayTimeouts(),w.unmount(),Y(),delete e._tippy,w.state.isDestroyed=!0,S("onDestroy",[w]))}}function tn(e,t){void 0===t&&(t={});var n=Rt.plugins.concat(t.plugins||[]);Bt();var r=Object.assign({},t,{plugins:n}),o=Ot(e),i=o.reduce((function(e,t){var n=t&&en(t,r);return n&&e.push(n),e}),[]);return gt(e)?i[0]:i}tn.defaultProps=Rt,tn.setDefaultProps=Nt,tn.currentInput=jt,tn.setDefaultProps({render:Gt})}}]);
//# sourceMappingURL=3631.14d9ae3a.js.map