(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[8095],{98095:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>tippy});__webpack_require__(58188),__webpack_require__(88233),__webpack_require__(99120),__webpack_require__(74083),__webpack_require__(18178),__webpack_require__(43108),__webpack_require__(79321),__webpack_require__(28673),__webpack_require__(15735),__webpack_require__(6886),__webpack_require__(93244),__webpack_require__(38695),__webpack_require__(1939),__webpack_require__(26936),__webpack_require__(95342),__webpack_require__(73439),__webpack_require__(48319),__webpack_require__(77950),__webpack_require__(43105),__webpack_require__(43450),__webpack_require__(34769),__webpack_require__(67321),__webpack_require__(85940),__webpack_require__(13489),__webpack_require__(43430),__webpack_require__(28986),__webpack_require__(49228),__webpack_require__(32501),__webpack_require__(18145),__webpack_require__(54226),__webpack_require__(45794);function getBoundingClientRect(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function getWindow(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function getWindowScroll(e){var t=getWindow(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function isElement(e){return e instanceof getWindow(e).Element||e instanceof Element}function isHTMLElement(e){return e instanceof getWindow(e).HTMLElement||e instanceof HTMLElement}function getNodeName(e){return e?(e.nodeName||"").toLowerCase():null}function getDocumentElement(e){return(isElement(e)?e.ownerDocument:e.document).documentElement}function getWindowScrollBarX(e){return getBoundingClientRect(getDocumentElement(e)).left+getWindowScroll(e).scrollLeft}function getComputedStyle(e){return getWindow(e).getComputedStyle(e)}function isScrollParent(e){var t=getComputedStyle(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function getCompositeRect(e,t,r){void 0===r&&(r=!1);var n=getDocumentElement(t),i=getBoundingClientRect(e),a={scrollLeft:0,scrollTop:0},o={x:0,y:0};return r||(("body"!==getNodeName(t)||isScrollParent(n))&&(a=function getNodeScroll(e){return e!==getWindow(e)&&isHTMLElement(e)?function getHTMLElementScroll(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):getWindowScroll(e)}(t)),isHTMLElement(t)?((o=getBoundingClientRect(t)).x+=t.clientLeft,o.y+=t.clientTop):n&&(o.x=getWindowScrollBarX(n))),{x:i.left+a.scrollLeft-o.x,y:i.top+a.scrollTop-o.y,width:i.width,height:i.height}}function getLayoutRect(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function getParentNode(e){return"html"===getNodeName(e)?e:e.assignedSlot||e.parentNode||e.host||getDocumentElement(e)}function getScrollParent(e){return["html","body","#document"].indexOf(getNodeName(e))>=0?e.ownerDocument.body:isHTMLElement(e)&&isScrollParent(e)?e:getScrollParent(getParentNode(e))}function listScrollParents(e,t){void 0===t&&(t=[]);var r=getScrollParent(e),n="body"===getNodeName(r),i=getWindow(r),a=n?[i].concat(i.visualViewport||[],isScrollParent(r)?r:[]):r,o=t.concat(a);return n?o:o.concat(listScrollParents(getParentNode(a)))}function isTableElement(e){return["table","td","th"].indexOf(getNodeName(e))>=0}function getTrueOffsetParent(e){return isHTMLElement(e)&&"fixed"!==getComputedStyle(e).position?e.offsetParent:null}function getOffsetParent(e){for(var t=getWindow(e),r=getTrueOffsetParent(e);r&&isTableElement(r);)r=getTrueOffsetParent(r);return r&&"body"===getNodeName(r)&&"static"===getComputedStyle(r).position?t:r||t}var top="top",bottom="bottom",right="right",left="left",basePlacements=[top,bottom,right,left],variationPlacements=basePlacements.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),placements=[].concat(basePlacements,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),modifierPhases=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function order(e){var t=new Map,r=new Set,n=[];function i(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&i(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||i(e)})),n}function debounce(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}function getBasePlacement(e){return e.split("-")[0]}var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var passive={passive:!0};function getVariation(e){return e.split("-")[1]}function getMainAxisFromPlacement(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function computeOffsets(e){var u,t=e.reference,r=e.element,n=e.placement,i=n?getBasePlacement(n):null,a=n?getVariation(n):null,o=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2;switch(i){case top:u={x:o,y:t.y-r.height};break;case bottom:u={x:o,y:t.y+t.height};break;case right:u={x:t.x+t.width,y:s};break;case left:u={x:t.x-r.width,y:s};break;default:u={x:t.x,y:t.y}}var f=i?getMainAxisFromPlacement(i):null;if(null!=f){var c="y"===f?"height":"width";switch(a){case"start":u[f]=Math.floor(u[f])-Math.floor(t[c]/2-r[c]/2);break;case"end":u[f]=Math.floor(u[f])+Math.ceil(t[c]/2-r[c]/2)}}return u}var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};function mapToStyles(e){var t,r=e.popper,n=e.popperRect,i=e.placement,a=e.offsets,o=e.position,s=e.gpuAcceleration,u=e.adaptive,f=function roundOffsets(e){var t=e.x,r=e.y,i=window.devicePixelRatio||1;return{x:Math.round(t*i)/i||0,y:Math.round(r*i)/i||0}}(a),c=f.x,p=f.y,l=a.hasOwnProperty("x"),d=a.hasOwnProperty("y"),v=left,m=top,g=window;if(u){var h=getOffsetParent(r);h===getWindow(r)&&(h=getDocumentElement(r)),i===top&&(m=bottom,p-=h.clientHeight-n.height,p*=s?1:-1),i===left&&(v=right,c-=h.clientWidth-n.width,c*=s?1:-1)}var y,b=Object.assign({position:o},u&&unsetSides);return s?Object.assign({},b,((y={})[m]=d?"0":"",y[v]=l?"0":"",y.transform=(g.devicePixelRatio||1)<2?"translate("+c+"px, "+p+"px)":"translate3d("+c+"px, "+p+"px, 0)",y)):Object.assign({},b,((t={})[m]=d?p+"px":"",t[v]=l?c+"px":"",t.transform="",t))}var hash={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(e){return e.replace(/left|right|bottom|top/g,(function(e){return hash[e]}))}var hash$1={start:"end",end:"start"};function getOppositeVariationPlacement(e){return e.replace(/start|end/g,(function(e){return hash$1[e]}))}function toNumber(e){return parseFloat(e)||0}function getDecorations(e){var t=getWindow(e),r=function getBorders(e){var t=isHTMLElement(e)?getComputedStyle(e):{};return{top:toNumber(t.borderTopWidth),right:toNumber(t.borderRightWidth),bottom:toNumber(t.borderBottomWidth),left:toNumber(t.borderLeftWidth)}}(e),n="html"===getNodeName(e),i=getWindowScrollBarX(e),a=e.clientWidth+r.right,o=e.clientHeight+r.bottom;return n&&t.innerHeight-e.clientHeight>50&&(o=t.innerHeight-r.bottom),{top:n?0:e.clientTop,right:e.clientLeft>r.left?r.right:n?t.innerWidth-a-i:e.offsetWidth-a,bottom:n?t.innerHeight-o:e.offsetHeight-o,left:n?i:e.clientLeft}}function contains(e,t){var r=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(r){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function rectToClientRect(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function getClientRectFromMixedType(e,t){return"viewport"===t?rectToClientRect(function getViewportRect(e){var t=getWindow(e),r=t.visualViewport,n=t.innerWidth,i=t.innerHeight;return r&&/iPhone|iPod|iPad/.test(navigator.platform)&&(n=r.width,i=r.height),{width:n,height:i,x:0,y:0}}(e)):isHTMLElement(t)?getBoundingClientRect(t):rectToClientRect(function getDocumentRect(e){var t=getWindow(e),r=getWindowScroll(e),n=getCompositeRect(getDocumentElement(e),t);return n.height=Math.max(n.height,t.innerHeight),n.width=Math.max(n.width,t.innerWidth),n.x=-r.scrollLeft,n.y=-r.scrollTop,n}(getDocumentElement(e)))}function getClippingRect(e,t,r){var n="clippingParents"===t?function getClippingParents(e){var t=listScrollParents(e),n=["absolute","fixed"].indexOf(getComputedStyle(e).position)>=0&&isHTMLElement(e)?getOffsetParent(e):e;return isElement(n)?t.filter((function(e){return isElement(e)&&contains(e,n)})):[]}(e):[].concat(t),i=[].concat(n,[r]),a=i[0],o=i.reduce((function(t,r){var n=getClientRectFromMixedType(e,r),i=getDecorations(isHTMLElement(r)?r:getDocumentElement(e));return t.top=Math.max(n.top+i.top,t.top),t.right=Math.min(n.right-i.right,t.right),t.bottom=Math.min(n.bottom-i.bottom,t.bottom),t.left=Math.max(n.left+i.left,t.left),t}),getClientRectFromMixedType(e,a));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function mergePaddingObject(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},{},e)}function expandToHashMap(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function detectOverflow(e,t){void 0===t&&(t={});var r=t,n=r.placement,i=void 0===n?e.placement:n,a=r.boundary,o=void 0===a?"clippingParents":a,s=r.rootBoundary,u=void 0===s?"viewport":s,f=r.elementContext,c=void 0===f?"popper":f,p=r.altBoundary,l=void 0!==p&&p,d=r.padding,v=void 0===d?0:d,m=mergePaddingObject("number"!=typeof v?v:expandToHashMap(v,basePlacements)),g="popper"===c?"reference":"popper",h=e.elements.reference,b=e.rects.popper,y=e.elements[l?g:c],O=getClippingRect(isElement(y)?y:y.contextElement||getDocumentElement(e.elements.popper),o,u),w=getBoundingClientRect(h),T=computeOffsets({reference:w,element:b,strategy:"absolute",placement:i}),E=rectToClientRect(Object.assign({},b,{},T)),x="popper"===c?E:w,P={top:O.top-x.top+m.top,bottom:x.bottom-O.bottom+m.bottom,left:O.left-x.left+m.left,right:x.right-O.right+m.right},S=e.modifiersData.offset;if("popper"===c&&S){var A=S[i];Object.keys(P).forEach((function(e){var t=[right,bottom].indexOf(e)>=0?1:-1,r=[top,bottom].indexOf(e)>=0?"y":"x";P[e]+=A[r]*t}))}return P}function within(e,t,r){return Math.max(e,Math.min(t,r))}function getSideOffsets(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function isAnySideFullyClipped(e){return[top,right,bottom,left].some((function(t){return e[t]>=0}))}var createPopper=function popperGenerator(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?DEFAULT_OPTIONS:i;return function e(t,r,i){void 0===i&&(i=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,{},a),modifiersData:{},elements:{reference:t,popper:r},attributes:{},styles:{}},s=[],u=!1,f={state:o,setOptions:function e(i){p(),o.options=Object.assign({},a,{},o.options,{},i),o.scrollParents={reference:isElement(t)?listScrollParents(t):t.contextElement?listScrollParents(t.contextElement):[],popper:listScrollParents(r)};var s=function orderModifiers(e){var t=order(e);return modifierPhases.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function mergeByName(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,{},t,{options:Object.assign({},r.options,{},t.options),data:Object.assign({},r.data,{},t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,o.options.modifiers)));return o.orderedModifiers=s.filter((function(e){return e.enabled})),c(),f.update()},forceUpdate:function e(){if(!u){var t=o.elements,r=t.reference,n=t.popper;if(areValidElements(r,n)){o.rects={reference:getCompositeRect(r,getOffsetParent(n),"fixed"===o.options.strategy),popper:getLayoutRect(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<o.orderedModifiers.length;i++)if(!0!==o.reset){var a=o.orderedModifiers[i],s=a.fn,c=a.options,p=void 0===c?{}:c,l=a.name;"function"==typeof s&&(o=s({state:o,options:p,name:l,instance:f})||o)}else o.reset=!1,i=-1}}},update:debounce((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function e(){p(),u=!0}};if(!areValidElements(t,r))return f;function c(){o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect;if("function"==typeof i){var a=i({state:o,name:t,instance:f,options:n});s.push(a||function e(){})}}))}function p(){s.forEach((function(e){return e()})),s=[]}return f.setOptions(i).then((function(e){!u&&i.onFirstUpdate&&i.onFirstUpdate(e)})),f}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function e(){},effect:function effect(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,a=void 0===i||i,o=n.resize,s=void 0===o||o,u=getWindow(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach((function(e){e.addEventListener("scroll",r.update,passive)})),s&&u.addEventListener("resize",r.update,passive),function(){a&&f.forEach((function(e){e.removeEventListener("scroll",r.update,passive)})),s&&u.removeEventListener("resize",r.update,passive)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function popperOffsets(e){var t=e.state,r=e.name;t.modifiersData[r]=computeOffsets({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function computeStyles(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=void 0===n||n,a=r.adaptive,o=void 0===a||a,s={placement:getBasePlacement(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,{},mapToStyles(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,{},mapToStyles(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function applyStyles(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},i=t.elements[e];isHTMLElement(i)&&getNodeName(i)&&(Object.assign(i.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function effect$1(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});isHTMLElement(n)&&getNodeName(n)&&(Object.assign(n.style,o),Object.keys(i).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function offset(e){var t=e.state,r=e.options,n=e.name,i=r.offset,a=void 0===i?[0,0]:i,o=placements.reduce((function(e,r){return e[r]=function distanceAndSkiddingToXY(e,t,r){var n=getBasePlacement(e),i=[left,top].indexOf(n)>=0?-1:1,a="function"==typeof r?r(Object.assign({},t,{placement:e})):r,o=a[0],s=a[1];return o=o||0,s=(s||0)*i,[left,right].indexOf(n)>=0?{x:s,y:o}:{x:o,y:s}}(r,t.rects,a),e}),{}),s=o[t.placement],u=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=o}},{name:"flip",enabled:!0,phase:"main",fn:function flip(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var i=r.mainAxis,a=void 0===i||i,o=r.altAxis,s=void 0===o||o,u=r.fallbackPlacements,f=r.padding,c=r.boundary,p=r.rootBoundary,l=r.altBoundary,d=r.flipVariations,v=void 0===d||d,m=r.allowedAutoPlacements,g=t.options.placement,h=getBasePlacement(g),y=u||(h===g||!v?[getOppositePlacement(g)]:function getExpandedFallbackPlacements(e){if("auto"===getBasePlacement(e))return[];var t=getOppositePlacement(e);return[getOppositeVariationPlacement(e),t,getOppositeVariationPlacement(t)]}(g)),O=[g].concat(y).reduce((function(e,r){return e.concat("auto"===getBasePlacement(r)?function computeAutoPlacement(e,t){void 0===t&&(t={});var r=t,n=r.placement,i=r.boundary,a=r.rootBoundary,o=r.padding,s=r.flipVariations,u=r.allowedAutoPlacements,f=void 0===u?placements:u,c=getVariation(n),l=(c?s?variationPlacements:variationPlacements.filter((function(e){return getVariation(e)===c})):basePlacements).filter((function(e){return f.indexOf(e)>=0})).reduce((function(t,r){return t[r]=detectOverflow(e,{placement:r,boundary:i,rootBoundary:a,padding:o})[getBasePlacement(r)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:r,boundary:c,rootBoundary:p,padding:f,flipVariations:v,allowedAutoPlacements:m}):r)}),[]),w=t.rects.reference,T=t.rects.popper,E=new Map,x=!0,P=O[0],S=0;S<O.length;S++){var A=O[S],L=getBasePlacement(A),M="start"===getVariation(A),C=[top,bottom].indexOf(L)>=0,D=C?"width":"height",R=detectOverflow(t,{placement:A,boundary:c,rootBoundary:p,altBoundary:l,padding:f}),N=C?M?right:left:M?bottom:top;w[D]>T[D]&&(N=getOppositePlacement(N));var B=getOppositePlacement(N),I=[];if(a&&I.push(R[L]<=0),s&&I.push(R[N]<=0,R[B]<=0),I.every((function(e){return e}))){P=A,x=!1;break}E.set(A,I)}if(x)for(var H=function e(t){var r=O.find((function(e){var r=E.get(e);if(r)return r.slice(0,t).every((function(e){return e}))}));if(r)return P=r,"break"},j=v?3:1;j>0;j--){if("break"===H(j))break}t.placement!==P&&(t.modifiersData[n]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function preventOverflow(e){var t=e.state,r=e.options,n=e.name,i=r.mainAxis,a=void 0===i||i,o=r.altAxis,s=void 0!==o&&o,u=r.boundary,f=r.rootBoundary,c=r.altBoundary,p=r.padding,l=r.tether,d=void 0===l||l,v=r.tetherOffset,m=void 0===v?0:v,g=detectOverflow(t,{boundary:u,rootBoundary:f,padding:p,altBoundary:c}),h=getBasePlacement(t.placement),b=getVariation(t.placement),y=!b,O=getMainAxisFromPlacement(h),w=function getAltAxis(e){return"x"===e?"y":"x"}(O),T=t.modifiersData.popperOffsets,E=t.rects.reference,x=t.rects.popper,P="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,S={x:0,y:0};if(T){if(a){var A="y"===O?top:left,L="y"===O?bottom:right,M="y"===O?"height":"width",C=T[O],D=T[O]+g[A],R=T[O]-g[L],N=d?-x[M]/2:0,B="start"===b?E[M]:x[M],I="start"===b?-x[M]:-E[M],W=t.elements.arrow,H=d&&W?getLayoutRect(W):{width:0,height:0},j=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},V=j[A],k=j[L],_=within(0,E[M],H[M]),$=y?E[M]/2-N-_-V-P:B-_-V-P,F=y?-E[M]/2+N+_+k+P:I+_+k+P,U=t.elements.arrow&&getOffsetParent(t.elements.arrow),q=U?"y"===O?U.clientTop||0:U.clientLeft||0:0,z=t.modifiersData.offset?t.modifiersData.offset[t.placement][O]:0,X=T[O]+$-z-q,G=T[O]+F-z,Y=within(d?Math.min(D,X):D,C,d?Math.max(R,G):R);T[O]=Y,S[O]=Y-C}if(s){var K="x"===O?top:left,J="x"===O?bottom:right,Q=T[w],te=within(Q+g[K],Q,Q-g[J]);T[w]=te,S[w]=te-Q}t.modifiersData[n]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function arrow(e){var t,r=e.state,n=e.name,i=r.elements.arrow,a=r.modifiersData.popperOffsets,o=getBasePlacement(r.placement),s=getMainAxisFromPlacement(o),f=[left,right].indexOf(o)>=0?"height":"width";if(i&&a){var c=r.modifiersData[n+"#persistent"].padding,p=getLayoutRect(i),l="y"===s?top:left,d="y"===s?bottom:right,v=r.rects.reference[f]+r.rects.reference[s]-a[s]-r.rects.popper[f],m=a[s]-r.rects.reference[s],g=getOffsetParent(i),h=g?"y"===s?g.clientHeight||0:g.clientWidth||0:0,b=v/2-m/2,y=c[l],O=h-p[f]-c[d],w=h/2-p[f]/2+b,T=within(y,w,O),E=s;r.modifiersData[n]=((t={})[E]=T,t.centerOffset=T-w,t)}},effect:function effect$2(e){var t=e.state,r=e.options,n=e.name,i=r.element,a=void 0===i?"[data-popper-arrow]":i,o=r.padding,s=void 0===o?0:o;null!=a&&("string"!=typeof a||(a=t.elements.popper.querySelector(a)))&&contains(t.elements.popper,a)&&(t.elements.arrow=a,t.modifiersData[n+"#persistent"]={padding:mergePaddingObject("number"!=typeof s?s:expandToHashMap(s,basePlacements))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function hide(e){var t=e.state,r=e.name,n=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=detectOverflow(t,{elementContext:"reference"}),s=detectOverflow(t,{altBoundary:!0}),u=getSideOffsets(o,n),f=getSideOffsets(s,i,a),c=isAnySideFullyClipped(u),p=isAnySideFullyClipped(f);t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:f,isReferenceHidden:c,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]}),TOUCH_OPTIONS={passive:!0,capture:!0};function getValueAtIndexOrReturn(e,t,r){if(Array.isArray(e)){var n=e[t];return null==n?Array.isArray(r)?r[t]:r:n}return e}function isType(e,t){var r={}.toString.call(e);return 0===r.indexOf("[object")&&r.indexOf(t+"]")>-1}function invokeWithArgsOrReturn(e,t){return"function"==typeof e?e.apply(void 0,t):e}function debounce$1(e,t){return 0===t?e:function(n){clearTimeout(r),r=setTimeout((function(){e(n)}),t)};var r}function normalizeToArray(e){return[].concat(e)}function pushIfUnique(e,t){-1===e.indexOf(t)&&e.push(t)}function arrayFrom(e){return[].slice.call(e)}function div(){return document.createElement("div")}function isElement$1(e){return["Element","Fragment"].some((function(t){return isType(e,t)}))}function getArrayOfElements(e){return isElement$1(e)?[e]:function isNodeList(e){return isType(e,"NodeList")}(e)?arrayFrom(e):Array.isArray(e)?e:arrayFrom(document.querySelectorAll(e))}function setTransitionDuration(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function setVisibilityState(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function updateTransitionEndListener(e,t,r){var n=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[n](t,r)}))}var currentInput={isTouch:!1},lastMouseMoveTime=0;function onDocumentTouchStart(){currentInput.isTouch||(currentInput.isTouch=!0,window.performance&&document.addEventListener("mousemove",onDocumentMouseMove))}function onDocumentMouseMove(){var e=performance.now();e-lastMouseMoveTime<20&&(currentInput.isTouch=!1,document.removeEventListener("mousemove",onDocumentMouseMove)),lastMouseMoveTime=e}function onWindowBlur(){var e=document.activeElement;if(function isReferenceElement(e){return!(!e||!e._tippy||e._tippy.reference!==e)}(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var ua="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",isIE=/MSIE |Trident\//.test(ua),defaultProps=Object.assign({appendTo:function e(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function e(){},onBeforeUpdate:function e(){},onCreate:function e(){},onDestroy:function e(){},onHidden:function e(){},onHide:function e(){},onMount:function e(){},onShow:function e(){},onShown:function e(){},onTrigger:function e(){},onUntrigger:function e(){},onClickOutside:function e(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),defaultKeys=Object.keys(defaultProps);function getExtendedPassedProps(e){var r=(e.plugins||[]).reduce((function(t,r){var n=r.name,i=r.defaultValue;return n&&(t[n]=void 0!==e[n]?e[n]:i),t}),{});return Object.assign({},e,{},r)}function evaluateProps(e,t){var r=Object.assign({},t,{content:invokeWithArgsOrReturn(t.content,[e])},t.ignoreAttributes?{}:function getDataAttributeProps(e,t){return(t?Object.keys(getExtendedPassedProps(Object.assign({},defaultProps,{plugins:t}))):defaultKeys).reduce((function(t,r){var n=(e.getAttribute("data-tippy-"+r)||"").trim();if(!n)return t;if("content"===r)t[r]=n;else try{t[r]=JSON.parse(n)}catch(i){t[r]=n}return t}),{})}(e,t.plugins));return r.aria=Object.assign({},defaultProps.aria,{},r.aria),r.aria={expanded:"auto"===r.aria.expanded?t.interactive:r.aria.expanded,content:"auto"===r.aria.content?t.interactive?null:"describedby":r.aria.content},r}function dangerouslySetInnerHTML(e,t){e.innerHTML=t}function createArrowElement(e){var t=div();return!0===e?t.className="tippy-arrow":(t.className="tippy-svg-arrow",isElement$1(e)?t.appendChild(e):dangerouslySetInnerHTML(t,e)),t}function setContent(e,t){isElement$1(t.content)?(dangerouslySetInnerHTML(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?dangerouslySetInnerHTML(e,t.content):e.textContent=t.content)}function getChildren(e){var t=e.firstElementChild,r=arrayFrom(t.children);return{box:t,content:r.find((function(e){return e.classList.contains("tippy-content")})),arrow:r.find((function(e){return e.classList.contains("tippy-arrow")||e.classList.contains("tippy-svg-arrow")})),backdrop:r.find((function(e){return e.classList.contains("tippy-backdrop")}))}}function render(e){var t=div(),r=div();r.className="tippy-box",r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var n=div();function i(r,n){var i=getChildren(t),a=i.box,o=i.content,s=i.arrow;n.theme?a.setAttribute("data-theme",n.theme):a.removeAttribute("data-theme"),"string"==typeof n.animation?a.setAttribute("data-animation",n.animation):a.removeAttribute("data-animation"),n.inertia?a.setAttribute("data-inertia",""):a.removeAttribute("data-inertia"),a.style.maxWidth="number"==typeof n.maxWidth?n.maxWidth+"px":n.maxWidth,n.role?a.setAttribute("role",n.role):a.removeAttribute("role"),r.content===n.content&&r.allowHTML===n.allowHTML||setContent(o,e.props),n.arrow?s?r.arrow!==n.arrow&&(a.removeChild(s),a.appendChild(createArrowElement(n.arrow))):a.appendChild(createArrowElement(n.arrow)):s&&a.removeChild(s)}return n.className="tippy-content",n.setAttribute("data-state","hidden"),setContent(n,e.props),t.appendChild(r),r.appendChild(n),i(e.props,e.props),{popper:t,onUpdate:i}}render.$$tippy=!0;var idCounter=1,mouseMoveListeners=[],mountedInstances=[];function createTippy(e,t){var n,i,a,c,p,l,m,r=evaluateProps(e,Object.assign({},defaultProps,{},getExtendedPassedProps(t))),o=!1,s=!1,u=!1,f=!1,d=[],v=debounce$1(K,r.interactiveDebounce),g=function getOwnerDocument(e){var r=normalizeToArray(e)[0];return r&&r.ownerDocument||document}(r.triggerTarget||e),h=idCounter++,y=function unique(e){return e.filter((function(t,r){return e.indexOf(t)===r}))}(r.plugins),w={id:h,reference:e,popper:div(),popperInstance:null,props:r,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function ue(){clearTimeout(n),clearTimeout(i),cancelAnimationFrame(a)},setProps:function fe(t){if(w.state.isDestroyed)return;B("onBeforeUpdate",[w,t]),G();var r=w.props,n=evaluateProps(e,Object.assign({},w.props,{},t,{ignoreAttributes:!0}));w.props=n,X(),r.interactiveDebounce!==n.interactiveDebounce&&(H(),v=debounce$1(K,n.interactiveDebounce));r.triggerTarget&&!n.triggerTarget?normalizeToArray(r.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):n.triggerTarget&&e.removeAttribute("aria-expanded");W(),N(),x&&x(r,n);w.popperInstance&&(ee(),ne().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));B("onAfterUpdate",[w,t])},setContent:function ce(e){w.setProps({content:e})},show:function pe(){var e=w.state.isVisible,t=w.state.isDestroyed,r=!w.state.isEnabled,n=currentInput.isTouch&&!w.props.touch,i=getValueAtIndexOrReturn(w.props.duration,0,defaultProps.duration);if(e||t||r||n)return;if(C().hasAttribute("disabled"))return;if(B("onShow",[w],!1),!1===w.props.onShow(w))return;w.state.isVisible=!0,M()&&(E.style.visibility="visible");N(),_(),w.state.isMounted||(E.style.transition="none");if(M()){var a=D(),o=a.box,s=a.content;setTransitionDuration([o,s],0)}l=function e(){if(w.state.isVisible&&!f){if(f=!0,E.style.transition=w.props.moveTransition,M()&&w.props.animation){var t=D(),r=t.box,n=t.content;setTransitionDuration([r,n],i),setVisibilityState([r,n],"visible")}I(),W(),pushIfUnique(mountedInstances,w),w.state.isMounted=!0,B("onMount",[w]),w.props.animation&&M()&&function U(e,t){q(e,t)}(i,(function(){w.state.isShown=!0,B("onShown",[w])}))}},function re(){var t,e=w.props.appendTo,r=C();t=w.props.interactive&&e===defaultProps.appendTo||"parent"===e?r.parentNode:invokeWithArgsOrReturn(e,[r]);t.contains(E)||t.appendChild(E);ee()}()},hide:function le(){var e=!w.state.isVisible,t=w.state.isDestroyed,r=!w.state.isEnabled,n=getValueAtIndexOrReturn(w.props.duration,1,defaultProps.duration);if(e||t||r)return;if(B("onHide",[w],!1),!1===w.props.onHide(w))return;w.state.isVisible=!1,w.state.isShown=!1,f=!1,M()&&(E.style.visibility="hidden");if(H(),$(),N(),M()){var i=D(),a=i.box,o=i.content;w.props.animation&&(setTransitionDuration([a,o],n),setVisibilityState([a,o],"hidden"))}I(),W(),w.props.animation?M()&&function F(e,t){q(e,(function(){!w.state.isVisible&&E.parentNode&&E.parentNode.contains(E)&&t()}))}(n,w.unmount):w.unmount()},hideWithInteractivity:function de(e){g.body.addEventListener("mouseleave",ae),g.addEventListener("mousemove",v),pushIfUnique(mouseMoveListeners,v),v(e)},enable:function oe(){w.state.isEnabled=!0},disable:function se(){w.hide(),w.state.isEnabled=!1},unmount:function ve(){w.state.isVisible&&w.hide();if(!w.state.isMounted)return;te(),ne().forEach((function(e){e._tippy.unmount()})),E.parentNode&&E.parentNode.removeChild(E);mountedInstances=mountedInstances.filter((function(e){return e!==w})),w.state.isMounted=!1,B("onHidden",[w])},destroy:function me(){if(w.state.isDestroyed)return;w.clearDelayTimeouts(),w.unmount(),G(),delete e._tippy,w.state.isDestroyed=!0,B("onDestroy",[w])}};if(!r.render)return w;var T=r.render(w),E=T.popper,x=T.onUpdate;E.setAttribute("data-tippy-root",""),E.id="tippy-"+w.id,w.popper=E,e._tippy=w,E._tippy=w;var P=y.map((function(e){return e.fn(w)})),S=e.hasAttribute("aria-expanded");return X(),W(),N(),B("onCreate",[w]),r.showOnCreate&&ie(),E.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),E.addEventListener("mouseleave",(function(e){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&(g.addEventListener("mousemove",v),v(e))})),w;function A(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function L(){return"hold"===A()[0]}function M(){var e;return!!(null==(e=w.props.render)?void 0:e.$$tippy)}function C(){return m||e}function D(){return getChildren(E)}function R(e){return w.state.isMounted&&!w.state.isVisible||currentInput.isTouch||c&&"focus"===c.type?0:getValueAtIndexOrReturn(w.props.delay,e?0:1,defaultProps.delay)}function N(){E.style.pointerEvents=w.props.interactive&&w.state.isVisible?"":"none",E.style.zIndex=""+w.props.zIndex}function B(e,t,r){var n;(void 0===r&&(r=!0),P.forEach((function(r){r[e]&&r[e].apply(void 0,t)})),r)&&(n=w.props)[e].apply(n,t)}function I(){var t=w.props.aria;if(t.content){var r="aria-"+t.content,n=E.id;normalizeToArray(w.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(r);if(w.state.isVisible)e.setAttribute(r,t?t+" "+n:n);else{var i=t&&t.replace(n,"").trim();i?e.setAttribute(r,i):e.removeAttribute(r)}}))}}function W(){!S&&w.props.aria.expanded&&normalizeToArray(w.props.triggerTarget||e).forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===C()?"true":"false"):e.removeAttribute("aria-expanded")}))}function H(){g.body.removeEventListener("mouseleave",ae),g.removeEventListener("mousemove",v),mouseMoveListeners=mouseMoveListeners.filter((function(e){return e!==v}))}function j(e){if(!(currentInput.isTouch&&(u||"mousedown"===e.type)||w.props.interactive&&E.contains(e.target))){if(C().contains(e.target)){if(currentInput.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else B("onClickOutside",[w,e]);!0===w.props.hideOnClick&&(o=!1,w.clearDelayTimeouts(),w.hide(),s=!0,setTimeout((function(){s=!1})),w.state.isMounted||$())}}function V(){u=!0}function k(){u=!1}function _(){g.addEventListener("mousedown",j,!0),g.addEventListener("touchend",j,TOUCH_OPTIONS),g.addEventListener("touchstart",k,TOUCH_OPTIONS),g.addEventListener("touchmove",V,TOUCH_OPTIONS)}function $(){g.removeEventListener("mousedown",j,!0),g.removeEventListener("touchend",j,TOUCH_OPTIONS),g.removeEventListener("touchstart",k,TOUCH_OPTIONS),g.removeEventListener("touchmove",V,TOUCH_OPTIONS)}function q(e,t){var r=D().box;function n(e){e.target===r&&(updateTransitionEndListener(r,"remove",n),t())}if(0===e)return t();updateTransitionEndListener(r,"remove",p),updateTransitionEndListener(r,"add",n),p=n}function z(t,r,n){void 0===n&&(n=!1),normalizeToArray(w.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,r,n),d.push({node:e,eventType:t,handler:r,options:n})}))}function X(){L()&&(z("touchstart",Y,{passive:!0}),z("touchend",J,{passive:!0})),function splitBySpaces(e){return e.split(/\s+/).filter(Boolean)}(w.props.trigger).forEach((function(e){if("manual"!==e)switch(z(e,Y),e){case"mouseenter":z("mouseleave",J);break;case"focus":z(isIE?"focusout":"blur",Q);break;case"focusin":z("focusout",Q)}}))}function G(){d.forEach((function(e){var t=e.node,r=e.eventType,n=e.handler,i=e.options;t.removeEventListener(r,n,i)})),d=[]}function Y(e){var t,r=!1;if(w.state.isEnabled&&!Z(e)&&!s){var n="focus"===(null==(t=c)?void 0:t.type);c=e,m=e.currentTarget,W(),!w.state.isVisible&&function isMouseEvent(e){return isType(e,"MouseEvent")}(e)&&mouseMoveListeners.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||o)&&!1!==w.props.hideOnClick&&w.state.isVisible?r=!0:ie(e),"click"===e.type&&(o=!r),r&&!n&&ae(e)}}function K(t){var n=t.target,i=e.contains(n)||E.contains(n);"mousemove"===t.type&&i||function isCursorOutsideInteractiveBorder(e,t){var r=t.clientX,n=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,o=e.props.interactiveBorder,s=function getBasePlacement$1(e){return e.split("-")[0]}(i.placement),u=i.modifiersData.offset;if(!u)return!0;var f="bottom"===s?u.top.y:0,c="top"===s?u.bottom.y:0,p="right"===s?u.left.x:0,l="left"===s?u.right.x:0,d=t.top-n+f>o,v=n-t.bottom-c>o,m=t.left-r+p>o,g=r-t.right-l>o;return d||v||m||g}))}(ne().concat(E).map((function(e){var t,i=null==(t=e._tippy.popperInstance)?void 0:t.state;return i?{popperRect:e.getBoundingClientRect(),popperState:i,props:r}:null})).filter(Boolean),t)&&(H(),ae(t))}function J(e){Z(e)||w.props.trigger.indexOf("click")>=0&&o||(w.props.interactive?w.hideWithInteractivity(e):ae(e))}function Q(e){w.props.trigger.indexOf("focusin")<0&&e.target!==C()||w.props.interactive&&e.relatedTarget&&E.contains(e.relatedTarget)||ae(e)}function Z(e){return!!currentInput.isTouch&&L()!==e.type.indexOf("touch")>=0}function ee(){te();var t=w.props,r=t.popperOptions,n=t.placement,i=t.offset,a=t.getReferenceClientRect,o=t.moveTransition,s=M()?getChildren(E).arrow:null,u=a?{getBoundingClientRect:a,contextElement:a.contextElement||C()}:e,f={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function e(t){var r=t.state;if(M()){var i=D().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?i.setAttribute("data-placement",r.placement):r.attributes.popper["data-popper-"+e]?i.setAttribute("data-"+e,""):i.removeAttribute("data-"+e)})),r.attributes.popper={}}}},c=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!o}},f];M()&&s&&c.push({name:"arrow",options:{element:s,padding:3}}),c.push.apply(c,(null==r?void 0:r.modifiers)||[]),w.popperInstance=createPopper(u,E,Object.assign({},r,{placement:n,onFirstUpdate:l,modifiers:c}))}function te(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ne(){return arrayFrom(E.querySelectorAll("[data-tippy-root]"))}function ie(e){w.clearDelayTimeouts(),e&&B("onTrigger",[w,e]),_();var t=R(!0),r=A(),i=r[0],a=r[1];currentInput.isTouch&&"hold"===i&&a&&(t=a),t?n=setTimeout((function(){w.show()}),t):w.show()}function ae(e){if(w.clearDelayTimeouts(),B("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&o)){var t=R(!1);t?i=setTimeout((function(){w.state.isVisible&&w.hide()}),t):a=requestAnimationFrame((function(){w.hide()}))}}else $()}}function tippy(e,t){void 0===t&&(t={});var r=defaultProps.plugins.concat(t.plugins||[]);!function bindGlobalEventListeners(){document.addEventListener("touchstart",onDocumentTouchStart,TOUCH_OPTIONS),window.addEventListener("blur",onWindowBlur)}();var n=Object.assign({},t,{plugins:r}),a=getArrayOfElements(e).reduce((function(e,t){var r=t&&createTippy(t,n);return r&&e.push(r),e}),[]);return isElement$1(e)?a[0]:a}tippy.defaultProps=defaultProps,tippy.setDefaultProps=function e(t){Object.keys(t).forEach((function(e){defaultProps[e]=t[e]}))},tippy.currentInput=currentInput,tippy.setDefaultProps({render})},99120:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var redefine=__webpack_require__(27487),DatePrototype=Date.prototype,nativeDateToString=DatePrototype.toString,getTime=DatePrototype.getTime;new Date(NaN)+""!="Invalid Date"&&redefine(DatePrototype,"toString",(function toString(){var value=getTime.call(this);return value==value?nativeDateToString.call(this):"Invalid Date"}))}}]);
//# sourceMappingURL=8095.27f53b42.iframe.bundle.js.map