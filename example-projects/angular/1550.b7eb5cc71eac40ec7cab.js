(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[1550],{5526:(e,t,n)=>{"use strict";n.d(t,{a:()=>r,c:()=>i,g:()=>o});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},2146:(e,t,n)=>{"use strict";n.d(t,{c:()=>r});var r=(0,n(5526).c)(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&e.push(a)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})},883:(e,t,n)=>{"use strict";n.d(t,{f:()=>rt,t:()=>Ze});var r="top",o="bottom",i="right",a="left",s="auto",c=[r,o,i,a],u="start",f="end",p="viewport",l="popper",d=c.reduce(function(e,t){return e.concat([t+"-"+u,t+"-"+f])},[]),m=[].concat(c,[s]).reduce(function(e,t){return e.concat([t,t+"-"+u,t+"-"+f])},[]),v=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function h(e){return e?(e.nodeName||"").toLowerCase():null}function g(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function y(e){return e instanceof g(e).Element||e instanceof Element}function b(e){return e instanceof g(e).HTMLElement||e instanceof HTMLElement}function w(e){return"undefined"!=typeof ShadowRoot&&(e instanceof g(e).ShadowRoot||e instanceof ShadowRoot)}const x={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];b(o)&&h(o)&&(Object.assign(o.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});b(r)&&h(r)&&(Object.assign(r.style,i),Object.keys(o).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]};function O(e){return e.split("-")[0]}var E=Math.max,A=Math.min,T=Math.round;function j(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function D(){return!/^((?!chrome|android).)*safari/i.test(j())}function L(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&b(e)&&(o=e.offsetWidth>0&&T(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&T(r.height)/e.offsetHeight||1);var a=(y(e)?g(e):window).visualViewport,s=!D()&&n,c=(r.left+(s&&a?a.offsetLeft:0))/o,u=(r.top+(s&&a?a.offsetTop:0))/i,f=r.width/o,p=r.height/i;return{width:f,height:p,top:u,right:c+f,bottom:u+p,left:c,x:c,y:u}}function C(e){var t=L(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function k(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&w(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function M(e){return g(e).getComputedStyle(e)}function S(e){return["table","td","th"].indexOf(h(e))>=0}function V(e){return((y(e)?e.ownerDocument:e.document)||window.document).documentElement}function P(e){return"html"===h(e)?e:e.assignedSlot||e.parentNode||(w(e)?e.host:null)||V(e)}function R(e){return b(e)&&"fixed"!==M(e).position?e.offsetParent:null}function B(e){for(var t=g(e),n=R(e);n&&S(n)&&"static"===M(n).position;)n=R(n);return n&&("html"===h(n)||"body"===h(n)&&"static"===M(n).position)?t:n||function(e){var t=/firefox/i.test(j());if(/Trident/i.test(j())&&b(e)&&"fixed"===M(e).position)return null;var n=P(e);for(w(n)&&(n=n.host);b(n)&&["html","body"].indexOf(h(n))<0;){var r=M(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function H(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function W(e,t,n){return E(e,A(t,n))}function N(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function I(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function _(e){return e.split("-")[1]}var q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function U(e){var t,n=e.popper,s=e.popperRect,c=e.placement,u=e.variation,p=e.offsets,l=e.position,d=e.gpuAcceleration,m=e.adaptive,v=e.roundOffsets,h=e.isFixed,y=p.x,b=void 0===y?0:y,w=p.y,x=void 0===w?0:w,O="function"==typeof v?v({x:b,y:x}):{x:b,y:x};b=O.x,x=O.y;var E=p.hasOwnProperty("x"),A=p.hasOwnProperty("y"),j=a,D=r,L=window;if(m){var C=B(n),k="clientHeight",S="clientWidth";C===g(n)&&"static"!==M(C=V(n)).position&&"absolute"===l&&(k="scrollHeight",S="scrollWidth"),(c===r||(c===a||c===i)&&u===f)&&(D=o,x-=(h&&C===L&&L.visualViewport?L.visualViewport.height:C[k])-s.height,x*=d?1:-1),c!==a&&(c!==r&&c!==o||u!==f)||(j=i,b-=(h&&C===L&&L.visualViewport?L.visualViewport.width:C[S])-s.width,b*=d?1:-1)}var P,R=Object.assign({position:l},m&&q),H=!0===v?function(e){var t=e.y,n=window.devicePixelRatio||1;return{x:T(e.x*n)/n||0,y:T(t*n)/n||0}}({x:b,y:x}):{x:b,y:x};return b=H.x,x=H.y,Object.assign({},R,d?((P={})[D]=A?"0":"",P[j]=E?"0":"",P.transform=(L.devicePixelRatio||1)<=1?"translate("+b+"px, "+x+"px)":"translate3d("+b+"px, "+x+"px, 0)",P):((t={})[D]=A?x+"px":"",t[j]=E?b+"px":"",t.transform="",t))}var F={passive:!0},X={left:"right",right:"left",bottom:"top",top:"bottom"};function Y(e){return e.replace(/left|right|bottom|top/g,function(e){return X[e]})}var z={start:"end",end:"start"};function $(e){return e.replace(/start|end/g,function(e){return z[e]})}function J(e){var t=g(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(e){return L(V(e)).left+J(e).scrollLeft}function K(e){var t=M(e);return/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function Q(e){return["html","body","#document"].indexOf(h(e))>=0?e.ownerDocument.body:b(e)&&K(e)?e:Q(P(e))}function Z(e,t){var n;void 0===t&&(t=[]);var r=Q(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=g(r),a=o?[i].concat(i.visualViewport||[],K(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(Z(P(a)))}function ee(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,t,n){return t===p?ee(function(e,t){var n=g(e),r=V(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=D();(u||!u&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+G(e),y:c}}(e,n)):y(t)?function(e,t){var n=L(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ee(function(e){var t,n=V(e),r=J(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=E(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=E(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+G(e),c=-r.scrollTop;return"rtl"===M(o||n).direction&&(s+=E(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(V(e)))}function ne(e){var t,n=e.reference,s=e.element,c=e.placement,p=c?O(c):null,l=c?_(c):null,d=n.x+n.width/2-s.width/2,m=n.y+n.height/2-s.height/2;switch(p){case r:t={x:d,y:n.y-s.height};break;case o:t={x:d,y:n.y+n.height};break;case i:t={x:n.x+n.width,y:m};break;case a:t={x:n.x-s.width,y:m};break;default:t={x:n.x,y:n.y}}var v=p?H(p):null;if(null!=v){var h="y"===v?"height":"width";switch(l){case u:t[v]=t[v]-(n[h]/2-s[h]/2);break;case f:t[v]=t[v]+(n[h]/2-s[h]/2)}}return t}function re(e,t){void 0===t&&(t={});var n=t.placement,a=void 0===n?e.placement:n,s=t.strategy,u=void 0===s?e.strategy:s,f=t.boundary,d=void 0===f?"clippingParents":f,m=t.rootBoundary,v=void 0===m?p:m,g=t.elementContext,w=void 0===g?l:g,x=t.altBoundary,O=void 0!==x&&x,T=t.padding,j=void 0===T?0:T,D=N("number"!=typeof j?j:I(j,c)),C=e.rects.popper,S=e.elements[O?w===l?"reference":l:w],R=function(e,t,n,r){var o="clippingParents"===t?function(e){var t=Z(P(e)),n=["absolute","fixed"].indexOf(M(e).position)>=0&&b(e)?B(e):e;return y(n)?t.filter(function(e){return y(e)&&k(e,n)&&"body"!==h(e)}):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i.reduce(function(t,n){var o=te(e,n,r);return t.top=E(o.top,t.top),t.right=A(o.right,t.right),t.bottom=A(o.bottom,t.bottom),t.left=E(o.left,t.left),t},te(e,i[0],r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(y(S)?S:S.contextElement||V(e.elements.popper),d,v,u),H=L(e.elements.reference),W=ne({reference:H,element:C,strategy:"absolute",placement:a}),_=ee(Object.assign({},C,W)),q=w===l?_:H,U={top:R.top-q.top+D.top,bottom:q.bottom-R.bottom+D.bottom,left:R.left-q.left+D.left,right:q.right-R.right+D.right},F=e.modifiersData.offset;if(w===l&&F){var X=F[a];Object.keys(U).forEach(function(e){var t=[i,o].indexOf(e)>=0?1:-1,n=[r,o].indexOf(e)>=0?"y":"x";U[e]+=X[n]*t})}return U}function oe(e,t){void 0===t&&(t={});var n=t.boundary,r=t.rootBoundary,o=t.padding,i=t.flipVariations,a=t.allowedAutoPlacements,s=void 0===a?m:a,u=_(t.placement),f=u?i?d:d.filter(function(e){return _(e)===u}):c,p=f.filter(function(e){return s.indexOf(e)>=0});0===p.length&&(p=f);var l=p.reduce(function(t,i){return t[i]=re(e,{placement:i,boundary:n,rootBoundary:r,padding:o})[O(i)],t},{});return Object.keys(l).sort(function(e,t){return l[e]-l[t]})}const ie={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,c=e.name;if(!t.modifiersData[c]._skip){for(var f=n.mainAxis,p=void 0===f||f,l=n.altAxis,d=void 0===l||l,m=n.fallbackPlacements,v=n.padding,h=n.boundary,g=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,w=void 0===b||b,x=n.allowedAutoPlacements,E=t.options.placement,A=O(E),T=m||(A!==E&&w?function(e){if(O(e)===s)return[];var t=Y(e);return[$(e),t,$(t)]}(E):[Y(E)]),j=[E].concat(T).reduce(function(e,n){return e.concat(O(n)===s?oe(t,{placement:n,boundary:h,rootBoundary:g,padding:v,flipVariations:w,allowedAutoPlacements:x}):n)},[]),D=t.rects.reference,L=t.rects.popper,C=new Map,k=!0,M=j[0],S=0;S<j.length;S++){var V=j[S],P=O(V),R=_(V)===u,B=[r,o].indexOf(P)>=0,H=B?"width":"height",W=re(t,{placement:V,boundary:h,rootBoundary:g,altBoundary:y,padding:v}),N=B?R?i:a:R?o:r;D[H]>L[H]&&(N=Y(N));var I=Y(N),q=[];if(p&&q.push(W[P]<=0),d&&q.push(W[N]<=0,W[I]<=0),q.every(function(e){return e})){M=V,k=!1;break}C.set(V,q)}if(k)for(var U=function(e){var t=j.find(function(t){var n=C.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return M=t,"break"},F=w?3:1;F>0&&"break"!==U(F);F--);t.placement!==M&&(t.modifiersData[c]._skip=!0,t.placement=M,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ae(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function se(e){return[r,i,o,a].some(function(t){return e[t]>=0})}function ce(e,t,n){void 0===n&&(n=!1);var r,o,i=b(t),a=b(t)&&function(e){var t=e.getBoundingClientRect(),n=T(t.width)/e.offsetWidth||1,r=T(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=V(t),c=L(e,a,n),u={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(i||!i&&!n)&&(("body"!==h(t)||K(s))&&(u=(r=t)!==g(r)&&b(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:J(r)),b(t)?((f=L(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):s&&(f.x=G(s))),{x:c.left+u.scrollLeft-f.x,y:c.top+u.scrollTop-f.y,width:c.width,height:c.height}}function ue(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}}),r.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||o(e)}),r}var fe={placement:"bottom",modifiers:[],strategy:"absolute"};function pe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}function le(e){void 0===e&&(e={});var t=e.defaultModifiers,n=void 0===t?[]:t,r=e.defaultOptions,o=void 0===r?fe:r;return function(e,t,r){void 0===r&&(r=o);var i,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},fe,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,f={state:s,setOptions:function(r){var i="function"==typeof r?r(s.options):r;p(),s.options=Object.assign({},o,s.options,i),s.scrollParents={reference:y(e)?Z(e):e.contextElement?Z(e.contextElement):[],popper:Z(t)};var a,u,l=function(e){var t=ue(e);return v.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}((a=[].concat(n,s.options.modifiers),u=a.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{}),Object.keys(u).map(function(e){return u[e]})));return s.orderedModifiers=l.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.options,n=e.effect;if("function"==typeof n){var r=n({state:s,name:e.name,instance:f,options:void 0===t?{}:t});c.push(r||function(){})}}),f.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,n=e.popper;if(pe(t,n)){s.rects={reference:ce(t,B(n),"fixed"===s.options.strategy),popper:C(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options;"function"==typeof i&&(s=i({state:s,options:void 0===a?{}:a,name:o.name,instance:f})||s)}else s.reset=!1,r=-1}}},update:(i=function(){return new Promise(function(e){f.forceUpdate(),e(s)})},function(){return a||(a=new Promise(function(e){Promise.resolve().then(function(){a=void 0,e(i())})})),a}),destroy:function(){p(),u=!0}};if(!pe(e,t))return f;function p(){c.forEach(function(e){return e()}),c=[]}return f.setOptions(r).then(function(e){!u&&r.onFirstUpdate&&r.onFirstUpdate(e)}),f}}var de=le({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=g(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(e){e.addEventListener("scroll",n.update,F)}),s&&c.addEventListener("resize",n.update,F),function(){i&&u.forEach(function(e){e.removeEventListener("scroll",n.update,F)}),s&&c.removeEventListener("resize",n.update,F)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:O(t.placement),variation:_(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,U(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,U(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},x,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.name,o=e.options.offset,s=void 0===o?[0,0]:o,c=m.reduce(function(e,n){return e[n]=function(e,t,n){var o=O(e),s=[a,r].indexOf(o)>=0?-1:1,c="function"==typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],f=c[1];return u=u||0,f=(f||0)*s,[a,i].indexOf(o)>=0?{x:f,y:u}:{x:u,y:f}}(n,t.rects,s),e},{}),u=c[t.placement],f=u.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u.x,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=c}},ie,{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,s=e.name,c=n.mainAxis,f=void 0===c||c,p=n.altAxis,l=void 0!==p&&p,d=n.tether,m=void 0===d||d,v=n.tetherOffset,h=void 0===v?0:v,g=re(t,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary}),y=O(t.placement),b=_(t.placement),w=!b,x=H(y),T="x"===x?"y":"x",j=t.modifiersData.popperOffsets,D=t.rects.reference,L=t.rects.popper,k="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,M="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(j){if(f){var P,R="y"===x?r:a,N="y"===x?o:i,I="y"===x?"height":"width",q=j[x],U=q+g[R],F=q-g[N],X=m?-L[I]/2:0,Y=b===u?D[I]:L[I],z=b===u?-L[I]:-D[I],$=t.elements.arrow,J=m&&$?C($):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=G[R],Q=G[N],Z=W(0,D[I],J[I]),ee=w?D[I]/2-X-Z-K-M.mainAxis:Y-Z-K-M.mainAxis,te=w?-D[I]/2+X+Z+Q+M.mainAxis:z+Z+Q+M.mainAxis,ne=t.elements.arrow&&B(t.elements.arrow),oe=null!=(P=null==S?void 0:S[x])?P:0,ie=q+te-oe,ae=W(m?A(U,q+ee-oe-(ne?"y"===x?ne.clientTop||0:ne.clientLeft||0:0)):U,q,m?E(F,ie):F);j[x]=ae,V[x]=ae-q}if(l){var se,ce=j[T],ue="y"===T?"height":"width",fe=ce+g["x"===x?r:a],pe=ce-g["x"===x?o:i],le=-1!==[r,a].indexOf(y),de=null!=(se=null==S?void 0:S[T])?se:0,me=le?fe:ce-D[ue]-L[ue]-de+M.altAxis,ve=le?ce+D[ue]+L[ue]-de-M.altAxis:pe,he=m&&le?function(e,t,n){var r=W(e,t,n);return r>n?n:r}(me,ce,ve):W(m?me:fe,ce,m?ve:pe);j[T]=he,V[T]=he-ce}t.modifiersData[s]=V}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,s=e.name,u=e.options,f=n.elements.arrow,p=n.modifiersData.popperOffsets,l=O(n.placement),d=H(l),m=[a,i].indexOf(l)>=0?"height":"width";if(f&&p){var v=function(e,t){return N("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:I(e,c))}(u.padding,n),h=C(f),g="y"===d?r:a,y="y"===d?o:i,b=n.rects.reference[m]+n.rects.reference[d]-p[d]-n.rects.popper[m],w=p[d]-n.rects.reference[d],x=B(f),E=x?"y"===d?x.clientHeight||0:x.clientWidth||0:0,A=E/2-h[m]/2+(b/2-w/2),T=W(v[g],A,E-h[m]-v[y]);n.modifiersData[s]=((t={})[d]=T,t.centerOffset=T-A,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&k(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=re(t,{elementContext:"reference"}),s=re(t,{altBoundary:!0}),c=ae(a,r),u=ae(s,o,i),f=se(c),p=se(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}}]}),me="tippy-content",ve="tippy-arrow",he="tippy-svg-arrow",ge={passive:!0,capture:!0},ye=function(){return document.body};function be(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function we(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function xe(e,t){return"function"==typeof e?e.apply(void 0,t):e}function Oe(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout(function(){e(r)},t)};var n}function Ee(e){return[].concat(e)}function Ae(e,t){-1===e.indexOf(t)&&e.push(t)}function Te(e){return[].slice.call(e)}function je(e){return Object.keys(e).reduce(function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t},{})}function De(){return document.createElement("div")}function Le(e){return["Element","Fragment"].some(function(t){return we(e,t)})}function Ce(e){return we(e,"MouseEvent")}function ke(e,t){e.forEach(function(e){e&&(e.style.transitionDuration=t+"ms")})}function Me(e,t){e.forEach(function(e){e&&e.setAttribute("data-state",t)})}function Se(e){var t,n=Ee(e)[0];return null!=n&&null!=(t=n.ownerDocument)&&t.body?n.ownerDocument:document}function Ve(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(t){e[r](t,n)})}function Pe(e,t){for(var n=t;n;){var r;if(e.contains(n))return!0;n=null==n.getRootNode||null==(r=n.getRootNode())?void 0:r.host}return!1}var Re={isTouch:!1},Be=0;function He(){Re.isTouch||(Re.isTouch=!0,window.performance&&document.addEventListener("mousemove",We))}function We(){var e=performance.now();e-Be<20&&(Re.isTouch=!1,document.removeEventListener("mousemove",We)),Be=e}function Ne(){var e,t=document.activeElement;(e=t)&&e._tippy&&e._tippy.reference===e&&t.blur&&!t._tippy.state.isVisible&&t.blur()}var Ie=!("undefined"==typeof window||"undefined"==typeof document||!window.msCrypto),_e=Object.assign({appendTo:ye,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),qe=Object.keys(_e);function Ue(e){var t=(e.plugins||[]).reduce(function(t,n){var r,o=n.name;return o&&(t[o]=void 0!==e[o]?e[o]:null!=(r=_e[o])?r:n.defaultValue),t},{});return Object.assign({},e,t)}function Fe(e,t){var n=Object.assign({},t,{content:xe(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Ue(Object.assign({},_e,{plugins:t}))):qe).reduce(function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(o){t[n]=r}return t},{})}(e,t.plugins));return n.aria=Object.assign({},_e.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Xe(e,t){e.innerHTML=t}function Ye(e){var t=De();return!0===e?t.className=ve:(t.className=he,Le(e)?t.appendChild(e):Xe(t,e)),t}function ze(e,t){Le(t.content)?(Xe(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?Xe(e,t.content):e.textContent=t.content)}function $e(e){var t=e.firstElementChild,n=Te(t.children);return{box:t,content:n.find(function(e){return e.classList.contains(me)}),arrow:n.find(function(e){return e.classList.contains(ve)||e.classList.contains(he)}),backdrop:n.find(function(e){return e.classList.contains("tippy-backdrop")})}}function Je(e){var t=De(),n=De();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=De();function o(n,r){var o=$e(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||ze(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(Ye(r.arrow))):i.appendChild(Ye(r.arrow)):s&&i.removeChild(s)}return r.className=me,r.setAttribute("data-state","hidden"),ze(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}Je.$$tippy=!0;var Ge=1,Ke=[],Qe=[];function Ze(e,t){void 0===t&&(t={});var n=_e.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",He,ge),window.addEventListener("blur",Ne);var r,o=Object.assign({},t,{plugins:n}),i=(r=e,Le(r)?[r]:function(e){return we(e,"NodeList")}(r)?Te(r):Array.isArray(r)?r:Te(document.querySelectorAll(r))).reduce(function(e,t){var n=t&&function(e,t){var n,r,o,i,a,s,c,u,f=Fe(e,Object.assign({},_e,Ue(je(t)))),p=!1,l=!1,d=!1,m=!1,v=[],h=Oe(z,f.interactiveDebounce),g=Ge++,y=(u=f.plugins).filter(function(e,t){return u.indexOf(e)===t}),b={id:g,reference:e,popper:De(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(o)},setProps:function(t){if(!b.state.isDestroyed){V("onBeforeUpdate",[b,t]),X();var n=b.props,r=Fe(e,Object.assign({},n,je(t),{ignoreAttributes:!0}));b.props=r,F(),n.interactiveDebounce!==r.interactiveDebounce&&(B(),h=Oe(z,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?Ee(n.triggerTarget).forEach(function(e){e.removeAttribute("aria-expanded")}):r.triggerTarget&&e.removeAttribute("aria-expanded"),R(),S(),O&&O(n,r),b.popperInstance&&(K(),Z().forEach(function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})),V("onAfterUpdate",[b,t])}},setContent:function(e){b.setProps({content:e})},show:function(){var e=b.state.isVisible,t=b.state.isDestroyed,n=!b.state.isEnabled,r=Re.isTouch&&!b.props.touch,o=be(b.props.duration,0,_e.duration);if(!(e||t||n||r||L().hasAttribute("disabled")||(V("onShow",[b],!1),!1===b.props.onShow(b)))){if(b.state.isVisible=!0,D()&&(x.style.visibility="visible"),S(),I(),b.state.isMounted||(x.style.transition="none"),D()){var i=k();ke([i.box,i.content],0)}var a,c,u;s=function(){var e;if(b.state.isVisible&&!m){if(m=!0,x.style.transition=b.props.moveTransition,D()&&b.props.animation){var t=k(),n=t.box,r=t.content;ke([n,r],o),Me([n,r],"visible")}P(),R(),Ae(Qe,b),null==(e=b.popperInstance)||e.forceUpdate(),V("onMount",[b]),b.props.animation&&D()&&function(e,t){q(e,function(){b.state.isShown=!0,V("onShown",[b])})}(o)}},c=b.props.appendTo,u=L(),(a=b.props.interactive&&c===ye||"parent"===c?u.parentNode:xe(c,[u])).contains(x)||a.appendChild(x),b.state.isMounted=!0,K()}},hide:function(){var e=!b.state.isVisible,t=b.state.isDestroyed,n=!b.state.isEnabled,r=be(b.props.duration,1,_e.duration);if(!(e||t||n)&&(V("onHide",[b],!1),!1!==b.props.onHide(b))){if(b.state.isVisible=!1,b.state.isShown=!1,m=!1,p=!1,D()&&(x.style.visibility="hidden"),B(),_(),S(!0),D()){var o=k(),i=o.box,a=o.content;b.props.animation&&(ke([i,a],r),Me([i,a],"hidden"))}P(),R(),b.props.animation?D()&&function(e,t){q(e,function(){!b.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&t()})}(r,b.unmount):b.unmount()}},hideWithInteractivity:function(e){C().addEventListener("mousemove",h),Ae(Ke,h),h(e)},enable:function(){b.state.isEnabled=!0},disable:function(){b.hide(),b.state.isEnabled=!1},unmount:function(){b.state.isVisible&&b.hide(),b.state.isMounted&&(Q(),Z().forEach(function(e){e._tippy.unmount()}),x.parentNode&&x.parentNode.removeChild(x),Qe=Qe.filter(function(e){return e!==b}),b.state.isMounted=!1,V("onHidden",[b]))},destroy:function(){b.state.isDestroyed||(b.clearDelayTimeouts(),b.unmount(),X(),delete e._tippy,b.state.isDestroyed=!0,V("onDestroy",[b]))}};if(!f.render)return b;var w=f.render(b),x=w.popper,O=w.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+b.id,b.popper=x,e._tippy=b,x._tippy=b;var E=y.map(function(e){return e.fn(b)}),A=e.hasAttribute("aria-expanded");return F(),R(),S(),V("onCreate",[b]),f.showOnCreate&&ee(),x.addEventListener("mouseenter",function(){b.props.interactive&&b.state.isVisible&&b.clearDelayTimeouts()}),x.addEventListener("mouseleave",function(){b.props.interactive&&b.props.trigger.indexOf("mouseenter")>=0&&C().addEventListener("mousemove",h)}),b;function T(){var e=b.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return"hold"===T()[0]}function D(){var e;return!(null==(e=b.props.render)||!e.$$tippy)}function L(){return c||e}function C(){var e=L().parentNode;return e?Se(e):document}function k(){return $e(x)}function M(e){return b.state.isMounted&&!b.state.isVisible||Re.isTouch||i&&"focus"===i.type?0:be(b.props.delay,e?0:1,_e.delay)}function S(e){void 0===e&&(e=!1),x.style.pointerEvents=b.props.interactive&&!e?"":"none",x.style.zIndex=""+b.props.zIndex}function V(e,t,n){var r;void 0===n&&(n=!0),E.forEach(function(n){n[e]&&n[e].apply(n,t)}),n&&(r=b.props)[e].apply(r,t)}function P(){var t=b.props.aria;if(t.content){var n="aria-"+t.content,r=x.id;Ee(b.props.triggerTarget||e).forEach(function(e){var t=e.getAttribute(n);if(b.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}})}}function R(){!A&&b.props.aria.expanded&&Ee(b.props.triggerTarget||e).forEach(function(e){b.props.interactive?e.setAttribute("aria-expanded",b.state.isVisible&&e===L()?"true":"false"):e.removeAttribute("aria-expanded")})}function B(){C().removeEventListener("mousemove",h),Ke=Ke.filter(function(e){return e!==h})}function H(t){if(!Re.isTouch||!d&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!b.props.interactive||!Pe(x,n)){if(Ee(b.props.triggerTarget||e).some(function(e){return Pe(e,n)})){if(Re.isTouch)return;if(b.state.isVisible&&b.props.trigger.indexOf("click")>=0)return}else V("onClickOutside",[b,t]);!0===b.props.hideOnClick&&(b.clearDelayTimeouts(),b.hide(),l=!0,setTimeout(function(){l=!1}),b.state.isMounted||_())}}}function W(){d=!0}function N(){d=!1}function I(){var e=C();e.addEventListener("mousedown",H,!0),e.addEventListener("touchend",H,ge),e.addEventListener("touchstart",N,ge),e.addEventListener("touchmove",W,ge)}function _(){var e=C();e.removeEventListener("mousedown",H,!0),e.removeEventListener("touchend",H,ge),e.removeEventListener("touchstart",N,ge),e.removeEventListener("touchmove",W,ge)}function q(e,t){var n=k().box;function r(e){e.target===n&&(Ve(n,"remove",r),t())}if(0===e)return t();Ve(n,"remove",a),Ve(n,"add",r),a=r}function U(t,n,r){void 0===r&&(r=!1),Ee(b.props.triggerTarget||e).forEach(function(e){e.addEventListener(t,n,r),v.push({node:e,eventType:t,handler:n,options:r})})}function F(){var e;j()&&(U("touchstart",Y,{passive:!0}),U("touchend",$,{passive:!0})),(e=b.props.trigger,e.split(/\s+/).filter(Boolean)).forEach(function(e){if("manual"!==e)switch(U(e,Y),e){case"mouseenter":U("mouseleave",$);break;case"focus":U(Ie?"focusout":"blur",J);break;case"focusin":U("focusout",J)}})}function X(){v.forEach(function(e){e.node.removeEventListener(e.eventType,e.handler,e.options)}),v=[]}function Y(e){var t,n=!1;if(b.state.isEnabled&&!G(e)&&!l){var r="focus"===(null==(t=i)?void 0:t.type);i=e,c=e.currentTarget,R(),!b.state.isVisible&&Ce(e)&&Ke.forEach(function(t){return t(e)}),"click"===e.type&&(b.props.trigger.indexOf("mouseenter")<0||p)&&!1!==b.props.hideOnClick&&b.state.isVisible?n=!0:ee(e),"click"===e.type&&(p=!n),n&&!r&&te(e)}}function z(e){var t=e.target,n=L().contains(t)||x.contains(t);if("mousemove"!==e.type||!n){var r=Z().concat(x).map(function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:f}:null}).filter(Boolean);(function(e,t){var n=t.clientX,r=t.clientY;return e.every(function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,a=o.placement.split("-")[0],s=o.modifiersData.offset;return!s||t.top-r+("bottom"===a?s.top.y:0)>i||r-t.bottom-("top"===a?s.bottom.y:0)>i||t.left-n+("right"===a?s.left.x:0)>i||n-t.right-("left"===a?s.right.x:0)>i})})(r,e)&&(B(),te(e))}}function $(e){G(e)||b.props.trigger.indexOf("click")>=0&&p||(b.props.interactive?b.hideWithInteractivity(e):te(e))}function J(e){b.props.trigger.indexOf("focusin")<0&&e.target!==L()||b.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)||te(e)}function G(e){return!!Re.isTouch&&j()!==e.type.indexOf("touch")>=0}function K(){Q();var t=b.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,c=D()?$e(x).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||L()}:e,f=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(D()){var n=k().box;["placement","reference-hidden","escaped"].forEach(function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)}),t.attributes.popper={}}}}];D()&&c&&f.push({name:"arrow",options:{element:c,padding:3}}),f.push.apply(f,(null==n?void 0:n.modifiers)||[]),b.popperInstance=de(u,x,Object.assign({},n,{placement:r,onFirstUpdate:s,modifiers:f}))}function Q(){b.popperInstance&&(b.popperInstance.destroy(),b.popperInstance=null)}function Z(){return Te(x.querySelectorAll("[data-tippy-root]"))}function ee(e){b.clearDelayTimeouts(),e&&V("onTrigger",[b,e]),I();var t=M(!0),r=T(),o=r[1];Re.isTouch&&"hold"===r[0]&&o&&(t=o),t?n=setTimeout(function(){b.show()},t):b.show()}function te(e){if(b.clearDelayTimeouts(),V("onUntrigger",[b,e]),b.state.isVisible){if(!(b.props.trigger.indexOf("mouseenter")>=0&&b.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&p)){var t=M(!1);t?r=setTimeout(function(){b.state.isVisible&&b.hide()},t):o=requestAnimationFrame(function(){b.hide()})}}else _()}}(t,o);return n&&e.push(n),e},[]);return Le(e)?i[0]:i}Ze.defaultProps=_e,Ze.setDefaultProps=function(e){Object.keys(e).forEach(function(t){_e[t]=e[t]})},Ze.currentInput=Re,Object.assign({},x,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});var et={clientX:0,clientY:0},tt=[];function nt(e){et={clientX:e.clientX,clientY:e.clientY}}var rt={name:"followCursor",defaultValue:!1,fn:function(e){var t=e.reference,n=Se(e.props.triggerTarget||t),r=!1,o=!1,i=!0,a=e.props;function s(){return"initial"===e.props.followCursor&&e.state.isVisible}function c(){n.addEventListener("mousemove",p)}function u(){n.removeEventListener("mousemove",p)}function f(){r=!0,e.setProps({getReferenceClientRect:null}),r=!1}function p(n){var r=!n.target||t.contains(n.target),o=e.props.followCursor,i=n.clientX,a=n.clientY,s=t.getBoundingClientRect(),c=i-s.left,u=a-s.top;!r&&e.props.interactive||e.setProps({getReferenceClientRect:function(){var e=t.getBoundingClientRect(),n=i,r=a;"initial"===o&&(n=e.left+c,r=e.top+u);var s="horizontal"===o?e.top:r,f="vertical"===o?e.right:n,p="horizontal"===o?e.bottom:r,l="vertical"===o?e.left:n;return{width:f-l,height:p-s,top:s,right:f,bottom:p,left:l}}})}function l(){e.props.followCursor&&(tt.push({instance:e,doc:n}),function(e){e.addEventListener("mousemove",nt)}(n))}function d(){0===(tt=tt.filter(function(t){return t.instance!==e})).filter(function(e){return e.doc===n}).length&&function(e){e.removeEventListener("mousemove",nt)}(n)}return{onCreate:l,onDestroy:d,onBeforeUpdate:function(){a=e.props},onAfterUpdate:function(t,n){var i=n.followCursor;r||void 0!==i&&a.followCursor!==i&&(d(),i?(l(),!e.state.isMounted||o||s()||c()):(u(),f()))},onMount:function(){e.props.followCursor&&!o&&(i&&(p(et),i=!1),s()||c())},onTrigger:function(e,t){Ce(t)&&(et={clientX:t.clientX,clientY:t.clientY}),o="focus"===t.type},onHidden:function(){e.props.followCursor&&(f(),u(),i=!0)}}}};Ze.setDefaultProps({render:Je})}}]);