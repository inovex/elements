import{_ as O}from"./iframe-dd82ddf3.js";import{d as M}from"./index-473285c6.js";import{d as Ee}from"./elements-stencil-docs-052eb9a9.js";import{f as Ie,M as He,T as Pe,g as Oe,P as Ae,h as Be,i as _e}from"./index-62e32533.js";import{j as C}from"./jsx-runtime-9750ddd4.js";import{u as De}from"./index-77f93ba4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";function je(){var e=[];if(typeof window<"u"){var t=window;(!t.customElements||t.Element&&(!t.Element.prototype.closest||!t.Element.prototype.matches||!t.Element.prototype.remove||!t.Element.prototype.getRootNode))&&e.push(O(()=>import("./dom-442bff65.js"),[],import.meta.url));var o=function(){try{var n=new URL("b","http://a");return n.pathname="c%20d",n.href==="http://a/c%20d"&&n.searchParams}catch{return!1}};(typeof Object.assign!="function"||!Object.entries||!Array.prototype.find||!Array.prototype.includes||!String.prototype.startsWith||!String.prototype.endsWith||t.NodeList&&!t.NodeList.prototype.forEach||!t.fetch||!o()||typeof WeakMap>"u")&&e.push(O(()=>import("./core-js-cd743715.js"),[],import.meta.url))}return Promise.all(e)}const Re="inovex-elements";let w,re,D,ce=!1,A=!1,W=!1,m=!1,F=!1;const S=(e,t="")=>()=>{},Me=(e,t)=>()=>{},Fe="{visibility:hidden}.hydrated{visibility:inherit}",Y="http://www.w3.org/1999/xlink",G={},qe="http://www.w3.org/2000/svg",Ne="http://www.w3.org/1999/xhtml",Ue=e=>e!=null,J=e=>(e=typeof e,e==="object"||e==="function");function de(e){var t,o,n;return(n=(o=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||o===void 0?void 0:o.getAttribute("content"))!==null&&n!==void 0?n:void 0}const ze=(e,t,...o)=>{let n=null,s=null,a=null,i=!1,r=!1;const l=[],c=$=>{for(let u=0;u<$.length;u++)n=$[u],Array.isArray(n)?c(n):n!=null&&typeof n!="boolean"&&((i=typeof e!="function"&&!J(n))&&(n=String(n)),i&&r?l[l.length-1].$text$+=n:l.push(i?q(null,n):n),r=i)};if(c(o),t){t.key&&(s=t.key),t.name&&(a=t.name);{const $=t.className||t.class;$&&(t.class=typeof $!="object"?$:Object.keys($).filter(u=>$[u]).join(" "))}}const d=q(e,null);return d.$attrs$=t,l.length>0&&(d.$children$=l),d.$key$=s,d.$name$=a,d},q=(e,t)=>{const o={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return o.$attrs$=null,o.$key$=null,o.$name$=null,o},We={},Je=e=>e&&e.$tag$===We,Xe=(e,t)=>e!=null&&!J(e)?t&4?e==="false"?!1:e===""||!!e:t&2?parseFloat(e):t&1?String(e):e:e,Ke=(e,t,o)=>{const n=h.ce(t,o);return e.dispatchEvent(n),n},Q=new WeakMap,Ye=(e,t,o)=>{let n=_.get(e);vt&&o?(n=n||new CSSStyleSheet,typeof n=="string"?n=t:n.replaceSync(t)):n=t,_.set(e,n)},Ge=(e,t,o)=>{var n;const s=$e(t),a=_.get(s);if(e=e.nodeType===11?e:g,a)if(typeof a=="string"){e=e.head||e;let i=Q.get(e),r;if(i||Q.set(e,i=new Set),!i.has(s)){{r=g.createElement("style"),r.innerHTML=a;const l=(n=h.$nonce$)!==null&&n!==void 0?n:de(g);l!=null&&r.setAttribute("nonce",l),e.insertBefore(r,e.querySelector("link"))}i&&i.add(s)}}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,a]);return s},Qe=e=>{const t=e.$cmpMeta$,o=e.$hostElement$,n=t.$flags$,s=S("attachStyles",t.$tagName$),a=Ge(o.shadowRoot?o.shadowRoot:o.getRootNode(),t);n&10&&(o["s-sc"]=a,o.classList.add(a+"-h")),s()},$e=(e,t)=>"sc-"+e.$tagName$,Z=(e,t,o,n,s,a)=>{if(o!==n){let i=oe(e,t),r=t.toLowerCase();if(t==="class"){const l=e.classList,c=V(o),d=V(n);l.remove(...c.filter($=>$&&!d.includes($))),l.add(...d.filter($=>$&&!c.includes($)))}else if(t==="style"){for(const l in o)(!n||n[l]==null)&&(l.includes("-")?e.style.removeProperty(l):e.style[l]="");for(const l in n)(!o||n[l]!==o[l])&&(l.includes("-")?e.style.setProperty(l,n[l]):e.style[l]=n[l])}else if(t!=="key")if(t==="ref")n&&n(e);else if(!i&&t[0]==="o"&&t[1]==="n")t[2]==="-"?t=t.slice(3):oe(j,r)?t=r.slice(2):t=r[2]+t.slice(3),o&&h.rel(e,t,o,!1),n&&h.ael(e,t,n,!1);else{const l=J(n);if((i||l&&n!==null)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{const d=n??"";t==="list"?i=!1:(o==null||e[t]!=d)&&(e[t]=d)}}catch{}let c=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,c=!0),n==null||n===!1?(n!==!1||e.getAttribute(t)==="")&&(c?e.removeAttributeNS(Y,t):e.removeAttribute(t)):(!i||a&4||s)&&!l&&(n=n===!0?"":n,c?e.setAttributeNS(Y,t,n):e.setAttribute(t,n))}}},Ze=/\s/,V=e=>e?e.split(Ze):[],ue=(e,t,o,n)=>{const s=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||G,i=t.$attrs$||G;for(n in a)n in i||Z(s,n,a[n],void 0,o,t.$flags$);for(n in i)Z(s,n,a[n],i[n],o,t.$flags$)},B=(e,t,o,n)=>{const s=t.$children$[o];let a=0,i,r,l;if(ce||(W=!0,s.$tag$==="slot"&&(w&&n.classList.add(w+"-s"),s.$flags$|=s.$children$?2:1)),s.$text$!==null)i=s.$elm$=g.createTextNode(s.$text$);else if(s.$flags$&1)i=s.$elm$=g.createTextNode("");else{if(m||(m=s.$tag$==="svg"),i=s.$elm$=g.createElementNS(m?qe:Ne,s.$flags$&2?"slot-fb":s.$tag$),m&&s.$tag$==="foreignObject"&&(m=!1),ue(null,s,m),Ue(w)&&i["s-si"]!==w&&i.classList.add(i["s-si"]=w),s.$children$)for(a=0;a<s.$children$.length;++a)r=B(e,s,a,i),r&&i.appendChild(r);s.$tag$==="svg"?m=!1:i.tagName==="foreignObject"&&(m=!0)}return i["s-hn"]=D,s.$flags$&3&&(i["s-sr"]=!0,i["s-cr"]=re,i["s-sn"]=s.$name$||"",l=e&&e.$children$&&e.$children$[o],l&&l.$tag$===s.$tag$&&e.$elm$&&E(e.$elm$,!1)),i},E=(e,t)=>{h.$flags$|=1;const o=e.childNodes;for(let n=o.length-1;n>=0;n--){const s=o[n];s["s-hn"]!==D&&s["s-ol"]&&(pe(s).insertBefore(s,X(s)),s["s-ol"].remove(),s["s-ol"]=void 0,W=!0),t&&E(s,t)}h.$flags$&=-2},fe=(e,t,o,n,s,a)=>{let i=e["s-cr"]&&e["s-cr"].parentNode||e,r;for(i.shadowRoot&&i.tagName===D&&(i=i.shadowRoot);s<=a;++s)n[s]&&(r=B(null,o,s,e),r&&(n[s].$elm$=r,i.insertBefore(r,X(t))))},he=(e,t,o)=>{for(let n=t;n<=o;++n){const s=e[n];if(s){const a=s.$elm$;ye(s),a&&(A=!0,a["s-ol"]?a["s-ol"].remove():E(a,!0),a.remove())}}},Ve=(e,t,o,n)=>{let s=0,a=0,i=0,r=0,l=t.length-1,c=t[0],d=t[l],$=n.length-1,u=n[0],f=n[$],p,y;for(;s<=l&&a<=$;)if(c==null)c=t[++s];else if(d==null)d=t[--l];else if(u==null)u=n[++a];else if(f==null)f=n[--$];else if(P(c,u))L(c,u),c=t[++s],u=n[++a];else if(P(d,f))L(d,f),d=t[--l],f=n[--$];else if(P(c,f))(c.$tag$==="slot"||f.$tag$==="slot")&&E(c.$elm$.parentNode,!1),L(c,f),e.insertBefore(c.$elm$,d.$elm$.nextSibling),c=t[++s],f=n[--$];else if(P(d,u))(c.$tag$==="slot"||f.$tag$==="slot")&&E(d.$elm$.parentNode,!1),L(d,u),e.insertBefore(d.$elm$,c.$elm$),d=t[--l],u=n[++a];else{for(i=-1,r=s;r<=l;++r)if(t[r]&&t[r].$key$!==null&&t[r].$key$===u.$key$){i=r;break}i>=0?(y=t[i],y.$tag$!==u.$tag$?p=B(t&&t[a],o,i,e):(L(y,u),t[i]=void 0,p=y.$elm$),u=n[++a]):(p=B(t&&t[a],o,a,e),u=n[++a]),p&&pe(c.$elm$).insertBefore(p,X(c.$elm$))}s>l?fe(e,n[$+1]==null?null:n[$+1].$elm$,o,n,a,$):a>$&&he(t,s,l)},P=(e,t)=>e.$tag$===t.$tag$?e.$tag$==="slot"?e.$name$===t.$name$:e.$key$===t.$key$:!1,X=e=>e&&e["s-ol"]||e,pe=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,L=(e,t)=>{const o=t.$elm$=e.$elm$,n=e.$children$,s=t.$children$,a=t.$tag$,i=t.$text$;let r;i===null?(m=a==="svg"?!0:a==="foreignObject"?!1:m,a==="slot"||ue(e,t,m),n!==null&&s!==null?Ve(o,n,t,s):s!==null?(e.$text$!==null&&(o.textContent=""),fe(o,null,t,s,0,s.length-1)):n!==null&&he(n,0,n.length-1),m&&a==="svg"&&(m=!1)):(r=o["s-cr"])?r.parentNode.textContent=i:e.$text$!==i&&(o.data=i)},ge=e=>{const t=e.childNodes;let o,n,s,a,i,r;for(n=0,s=t.length;n<s;n++)if(o=t[n],o.nodeType===1){if(o["s-sr"]){for(i=o["s-sn"],o.hidden=!1,a=0;a<s;a++)if(r=t[a].nodeType,t[a]["s-hn"]!==o["s-hn"]||i!==""){if(r===1&&i===t[a].getAttribute("slot")){o.hidden=!0;break}}else if(r===1||r===3&&t[a].textContent.trim()!==""){o.hidden=!0;break}}ge(o)}},v=[],me=e=>{let t,o,n,s,a,i,r=0;const l=e.childNodes,c=l.length;for(;r<c;r++){if(t=l[r],t["s-sr"]&&(o=t["s-cr"])&&o.parentNode)for(n=o.parentNode.childNodes,s=t["s-sn"],i=n.length-1;i>=0;i--)o=n[i],!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==t["s-hn"]&&(ee(o,s)?(a=v.find(d=>d.$nodeToRelocate$===o),A=!0,o["s-sn"]=o["s-sn"]||s,a?a.$slotRefNode$=t:v.push({$slotRefNode$:t,$nodeToRelocate$:o}),o["s-sr"]&&v.map(d=>{ee(d.$nodeToRelocate$,o["s-sn"])&&(a=v.find($=>$.$nodeToRelocate$===o),a&&!d.$slotRefNode$&&(d.$slotRefNode$=a.$slotRefNode$))})):v.some(d=>d.$nodeToRelocate$===o)||v.push({$nodeToRelocate$:o}));t.nodeType===1&&me(t)}},ee=(e,t)=>e.nodeType===1?e.getAttribute("slot")===null&&t===""||e.getAttribute("slot")===t:e["s-sn"]===t?!0:t==="",ye=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(ye)},et=(e,t,o=!1)=>{const n=e.$hostElement$,s=e.$cmpMeta$,a=e.$vnode$||q(null,null),i=Je(t)?t:ze(null,null,t);if(D=n.tagName,s.$attrsToReflect$&&(i.$attrs$=i.$attrs$||{},s.$attrsToReflect$.map(([r,l])=>i.$attrs$[l]=n[r])),o&&i.$attrs$)for(const r of Object.keys(i.$attrs$))n.hasAttribute(r)&&!["key","ref","style","class"].includes(r)&&(i.$attrs$[r]=n[r]);i.$tag$=null,i.$flags$|=4,e.$vnode$=i,i.$elm$=a.$elm$=n.shadowRoot||n,w=n["s-sc"],re=n["s-cr"],ce=(s.$flags$&1)!==0,A=!1,L(a,i);{if(h.$flags$|=1,W){me(i.$elm$);let r,l,c,d,$,u,f=0;for(;f<v.length;f++)r=v[f],l=r.$nodeToRelocate$,l["s-ol"]||(c=g.createTextNode(""),c["s-nr"]=l,l.parentNode.insertBefore(l["s-ol"]=c,l));for(f=0;f<v.length;f++)if(r=v[f],l=r.$nodeToRelocate$,r.$slotRefNode$){for(d=r.$slotRefNode$.parentNode,$=r.$slotRefNode$.nextSibling,c=l["s-ol"];c=c.previousSibling;)if(u=c["s-nr"],u&&u["s-sn"]===l["s-sn"]&&d===u.parentNode&&(u=u.nextSibling,!u||!u["s-nr"])){$=u;break}(!$&&d!==l.parentNode||l.nextSibling!==$)&&l!==$&&(!l["s-hn"]&&l["s-ol"]&&(l["s-hn"]=l["s-ol"].parentNode.nodeName),d.insertBefore(l,$))}else l.nodeType===1&&(l.hidden=!0)}A&&ge(i.$elm$),h.$flags$&=-2,v.length=0}},ve=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(o=>e.$onRenderResolve$=o))},K=(e,t)=>{if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}return ve(e,e.$ancestorComponent$),Ct(()=>tt(e,t))},tt=(e,t)=>{const o=S("scheduleUpdate",e.$cmpMeta$.$tagName$),n=e.$lazyInstance$;let s;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(([a,i])=>k(n,a,i)),e.$queuedListeners$=void 0),s=k(n,"componentWillLoad")),s=te(s,()=>k(n,"componentWillRender")),o(),te(s,()=>ot(e,n,t))},te=(e,t)=>nt(e)?e.then(t):t(),nt=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",ot=async(e,t,o)=>{var n;const s=e.$hostElement$,a=S("update",e.$cmpMeta$.$tagName$),i=s["s-rc"];o&&Qe(e);const r=S("render",e.$cmpMeta$.$tagName$);st(e,t,s,o),i&&(i.map(l=>l()),s["s-rc"]=void 0),r(),a();{const l=(n=s["s-p"])!==null&&n!==void 0?n:[],c=()=>it(e);l.length===0?c():(Promise.all(l).then(c),e.$flags$|=4,l.length=0)}},st=(e,t,o,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,et(e,t,n)}catch(s){T(s,e.$hostElement$)}return null},it=e=>{const t=e.$cmpMeta$.$tagName$,o=e.$hostElement$,n=S("postUpdate",t),s=e.$lazyInstance$,a=e.$ancestorComponent$;k(s,"componentDidRender"),e.$flags$&64?(k(s,"componentDidUpdate"),n()):(e.$flags$|=64,Ce(o),k(s,"componentDidLoad"),n(),e.$onReadyResolve$(o),a||be()),e.$onInstanceResolve$(o),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&R(()=>K(e,!1)),e.$flags$&=-517},be=e=>{Ce(g.documentElement),R(()=>Ke(j,"appload",{detail:{namespace:Re}}))},k=(e,t,o)=>{if(e&&e[t])try{return e[t](o)}catch(n){T(n)}},Ce=e=>e.classList.add("hydrated"),lt=(e,t)=>x(e).$instanceValues$.get(t),at=(e,t,o,n)=>{const s=x(e),a=s.$hostElement$,i=s.$instanceValues$.get(t),r=s.$flags$,l=s.$lazyInstance$;o=Xe(o,n.$members$[t][0]);const c=Number.isNaN(i)&&Number.isNaN(o),d=o!==i&&!c;if((!(r&8)||i===void 0)&&d&&(s.$instanceValues$.set(t,o),l)){if(n.$watchers$&&r&128){const $=n.$watchers$[t];$&&$.map(u=>{try{l[u](o,i,t)}catch(f){T(f,a)}})}(r&18)===2&&K(s,!1)}},Se=(e,t,o)=>{var n;if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const s=Object.entries(t.$members$),a=e.prototype;if(s.map(([i,[r]])=>{r&31||o&2&&r&32?Object.defineProperty(a,i,{get(){return lt(this,i)},set(l){at(this,i,l,t)},configurable:!0,enumerable:!0}):o&1&&r&64&&Object.defineProperty(a,i,{value(...l){const c=x(this);return c.$onInstancePromise$.then(()=>c.$lazyInstance$[i](...l))}})}),o&1){const i=new Map;a.attributeChangedCallback=function(r,l,c){h.jmp(()=>{const d=i.get(r);if(this.hasOwnProperty(d))c=this[d],delete this[d];else{if(a.hasOwnProperty(d)&&typeof this[d]=="number"&&this[d]==c)return;if(d==null){const $=x(this),u=$==null?void 0:$.$flags$;if(!(u&8)&&u&128&&c!==l){const f=$.$lazyInstance$,p=t.$watchers$[r];p==null||p.forEach(y=>{f[y]!=null&&f[y].call(f,c,l,r)})}return}}this[d]=c===null&&typeof this[d]=="boolean"?!1:c})},e.observedAttributes=Array.from(new Set([...Object.keys((n=t.$watchers$)!==null&&n!==void 0?n:{}),...s.filter(([r,l])=>l[0]&15).map(([r,l])=>{const c=l[1]||r;return i.set(c,r),l[0]&512&&t.$attrsToReflect$.push([r,c]),c})]))}}return e},rt=async(e,t,o,n,s)=>{if(!(t.$flags$&32)){t.$flags$|=32;{if(s=mt(o),s.then){const l=Me();s=await s,l()}s.isProxied||(o.$watchers$=s.watchers,Se(s,o,2),s.isProxied=!0);const r=S("createInstance",o.$tagName$);t.$flags$|=8;try{new s(t)}catch(l){T(l)}t.$flags$&=-9,t.$flags$|=128,r(),N(t.$lazyInstance$)}if(s.style){let r=s.style;const l=$e(o);if(!_.has(l)){const c=S("registerStyles",o.$tagName$);Ye(l,r,!!(o.$flags$&1)),c()}}}const a=t.$ancestorComponent$,i=()=>K(t,!0);a&&a["s-rc"]?a["s-rc"].push(i):i()},N=e=>{k(e,"connectedCallback")},ct=e=>{if(!(h.$flags$&1)){const t=x(e),o=t.$cmpMeta$,n=S("connectedCallback",o.$tagName$);if(t.$flags$&1)ke(e,t,o.$listeners$),t!=null&&t.$lazyInstance$?N(t.$lazyInstance$):t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>N(t.$lazyInstance$));else{t.$flags$|=1,o.$flags$&12&&dt(e);{let s=e;for(;s=s.parentNode||s.host;)if(s["s-p"]){ve(t,t.$ancestorComponent$=s);break}}o.$members$&&Object.entries(o.$members$).map(([s,[a]])=>{if(a&31&&e.hasOwnProperty(s)){const i=e[s];delete e[s],e[s]=i}}),R(()=>rt(e,t,o))}n()}},dt=e=>{const t=e["s-cr"]=g.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ne=e=>{k(e,"disconnectedCallback")},$t=async e=>{if(!(h.$flags$&1)){const t=x(e);t.$rmListeners$&&(t.$rmListeners$.map(o=>o()),t.$rmListeners$=void 0),t!=null&&t.$lazyInstance$?ne(t.$lazyInstance$):t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>ne(t.$lazyInstance$))}},ut=(e,t={})=>{var o;const n=S(),s=[],a=t.exclude||[],i=j.customElements,r=g.head,l=r.querySelector("meta[charset]"),c=g.createElement("style"),d=[];let $,u=!0;Object.assign(h,t),h.$resourcesUrl$=new URL(t.resourcesUrl||"./",g.baseURI).href,e.map(f=>{f[1].map(p=>{var y;const b={$flags$:p[0],$tagName$:p[1],$members$:p[2],$listeners$:p[3]};b.$members$=p[2],b.$listeners$=p[3],b.$attrsToReflect$=[],b.$watchers$=(y=p[4])!==null&&y!==void 0?y:{};const I=b.$tagName$,Le=class extends HTMLElement{constructor(H){super(H),H=this,gt(H,b),b.$flags$&1&&H.attachShadow({mode:"open",delegatesFocus:!!(b.$flags$&16)})}connectedCallback(){$&&(clearTimeout($),$=null),u?d.push(this):h.jmp(()=>ct(this))}disconnectedCallback(){h.jmp(()=>$t(this))}componentOnReady(){return x(this).$onReadyPromise$}};b.$lazyBundleId$=f[0],!a.includes(I)&&!i.get(I)&&(s.push(I),i.define(I,Se(Le,b,1)))})});{c.innerHTML=s+Fe,c.setAttribute("data-styles","");const f=(o=h.$nonce$)!==null&&o!==void 0?o:de(g);f!=null&&c.setAttribute("nonce",f),r.insertBefore(c,l?l.nextSibling:r.firstChild)}u=!1,d.length?d.map(f=>f.connectedCallback()):h.jmp(()=>$=setTimeout(be,30)),n()},ke=(e,t,o,n)=>{o&&o.map(([s,a,i])=>{const r=ht(e,s),l=ft(t,i),c=pt(s);h.ael(r,a,l,c),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>h.rel(r,a,l,c))})},ft=(e,t)=>o=>{try{e.$flags$&256?e.$lazyInstance$[t](o):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,o])}catch(n){T(n)}},ht=(e,t)=>t&16?g.body:e,pt=e=>(e&2)!==0,xe=new WeakMap,x=e=>xe.get(e),gt=(e,t)=>{const o={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return o.$onInstancePromise$=new Promise(n=>o.$onInstanceResolve$=n),o.$onReadyPromise$=new Promise(n=>o.$onReadyResolve$=n),e["s-p"]=[],e["s-rc"]=[],ke(e,o,t.$listeners$),xe.set(e,o)},oe=(e,t)=>t in e,T=(e,t)=>(0,console.error)(e,t),se=new Map,mt=(e,t,o)=>{const n=e.$tagName$.replace(/-/g,"_"),s=e.$lazyBundleId$,a=se.get(s);if(a)return a[n];/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return O(()=>import(`./${s}.entry.js`),[],import.meta.url).then(i=>(se.set(s,i),i[n]),T)},_=new Map,j=typeof window<"u"?window:{},g=j.document||{head:{}},h={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,o,n)=>e.addEventListener(t,o,n),rel:(e,t,o,n)=>e.removeEventListener(t,o,n),ce:(e,t)=>new CustomEvent(e,t)},yt=e=>Promise.resolve(e),vt=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),ie=[],Te=[],bt=(e,t)=>o=>{e.push(o),F||(F=!0,t&&h.$flags$&4?R(U):h.raf(U))},le=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(o){T(o)}e.length=0},U=()=>{le(ie),le(Te),(F=ie.length>0)&&h.raf(U)},R=e=>yt().then(e),Ct=bt(Te,!0);/*!
 * Crafted with ❤ by inovex GmbH
 */var z;(function(e){e.LATO="Lato"})(z||(z={}));function St(e){var t;return(t=document.fonts)===null||t===void 0?void 0:t.check(`12px ${e}`)}function kt(){const e=!!getComputedStyle(document.documentElement).getPropertyValue("--ino-font-family"),t=St(z.LATO);if(!e&&!t){const o=document.createElement("style");o.setAttribute("type","text/css"),o.appendChild(document.createTextNode("@import url('https://static.inovex.de/css/lato.css');")),document.head.appendChild(o)}}const xt=kt;/*!
 * Crafted with ❤ by inovex GmbH
 */const Tt=(e,t)=>{if(!(typeof window>"u"))return xt(),ut(JSON.parse('[["ino-markdown-editor",[[0,"ino-markdown-editor",{"initialValue":[1,"initial-value"],"viewMode":[1,"view-mode"],"toolbarActionsState":[32],"errorMessage":[32],"showLinkDialog":[32],"currentURL":[32],"isCreationDialog":[32],"hasValueChanged":[32]},null,{"initialValue":["handleInitialValueChange"],"viewMode":["handleViewModeChange"]}]]],["ino-control-item",[[4,"ino-control-item",{"role":[1],"text":[1],"secondaryText":[1,"secondary-text"],"selected":[4],"activated":[4],"checked":[4],"disabled":[4],"name":[1],"value":[1],"indeterminate":[4],"trailing":[4]}]]],["ino-datepicker",[[4,"ino-datepicker",{"autoFocus":[4,"autofocus"],"appendTo":[513,"append-to"],"disabled":[4],"name":[1],"placeholder":[1],"required":[4],"showLabelHint":[4,"show-label-hint"],"value":[1],"min":[1],"max":[1],"outline":[4],"label":[1],"helper":[1],"helperPersistent":[4,"helper-persistent"],"helperValidation":[4,"helper-validation"],"inline":[4],"range":[4],"attachToBody":[4,"attach-to-body"],"dateFormat":[1,"date-format"],"defaultDate":[1,"default-date"],"defaultHour":[2,"default-hour"],"defaultMinute":[2,"default-minute"],"twelveHourTime":[4,"twelve-hour-time"],"type":[1],"minuteStep":[2,"minute-step"],"hourStep":[2,"hour-step"],"error":[4],"isValid":[32],"redraw":[64],"setFocus":[64],"setBlur":[64]},[[0,"click","inoInputClickedHandler"],[0,"clickEl","iconClickedHandler"]],{"appendTo":["appendToChanged"],"value":["valueChanged"],"min":["minChanged"],"max":["maxChanged"],"range":["rangeChanged"],"disabled":["disabledOrInlineChanged"],"inline":["disabledOrInlineChanged"],"attachToBody":["attachToBodyChanged"],"dateFormat":["dateFormatChanged"],"defaultDate":["defaultDateChanged"],"defaultHour":["defaultHourChanged"],"defaultMinute":["defaultMinuteChanged"],"twelveHourTime":["twelveHourTimeChanged"],"type":["typeChanged"],"minuteStep":["minuteStepChanged"],"hourStep":["hourStepChanged"],"error":["errorHandler"]}]]],["ino-fab-set",[[1,"ino-fab-set",{"dialDirection":[1,"dial-direction"],"topBottomLocation":[1,"top-bottom-location"],"leftRightLocation":[1,"left-right-location"],"openDial":[4,"open-dial"]}]]],["ino-input-file",[[0,"ino-input-file",{"accept":[1],"autoFocus":[4,"autofocus"],"disabled":[4],"multiple":[4],"name":[1],"required":[4],"label":[1],"dragAndDrop":[4,"drag-and-drop"],"dragAndDropText":[1,"drag-and-drop-text"],"dragAndDropSecondaryText":[1,"drag-and-drop-secondary-text"]}]]],["ino-table-header-cell",[[4,"ino-table-header-cell",{"autofocus":[4],"searchIcon":[1,"search-icon"],"columnId":[1,"column-id"],"label":[1],"searched":[4],"notSortable":[4,"not-sortable"],"sortDirection":[1,"sort-direction"],"sortStart":[1,"sort-start"],"searchActivated":[32],"searchable":[32],"setSearchable":[64],"setFocus":[64],"setBlur":[64]},null,{"label":["labelChanged"]}]]],["ino-carousel",[[4,"ino-carousel",{"value":[1],"autoplay":[4],"hideButtons":[4,"hide-buttons"],"infinite":[4],"intermission":[2],"reverse":[4],"allSlides":[32]},null,{"value":["valueChanged"],"autoplay":["onTimerPropsChange"],"intermission":["onTimerPropsChange"],"reverse":["onTimerPropsChange"]}]]],["ino-menu",[[4,"ino-menu",{"placement":[1]}]]],["ino-nav-drawer",[[17,"ino-nav-drawer",{"open":[4],"anchor":[1],"variant":[1],"a11yLabels":[16]},[[0,"clickEl","handleListItemClick"]],{"open":["openChanged"],"variant":["variantChanged"]}]]],["ino-snackbar",[[4,"ino-snackbar",{"message":[1],"actionText":[1,"action-text"],"type":[1],"timeout":[2],"stayVisibleOnHover":[4,"stay-visible-on-hover"]}]]],["ino-card",[[4,"ino-card",{"selected":[4],"disableElevation":[4,"disable-elevation"]}]]],["ino-chip",[[4,"ino-chip",{"disabled":[4],"fill":[1],"label":[1],"removable":[4],"selectable":[4],"selected":[4],"value":[1],"clickable":[4]},[[0,"click","handleClick"]]]]],["ino-img",[[0,"ino-img",{"alt":[1],"decoding":[1],"height":[2],"sizes":[1],"src":[1],"srcset":[1],"width":[2],"usemap":[1],"fallbackIcon":[1,"fallback-icon"],"imgListItem":[4,"img-list-item"],"label":[1],"ratioWidth":[2,"ratio-width"],"ratioHeight":[2,"ratio-height"],"rounded":[4],"composedRatioHeight":[32]},null,{"height":["heightChanged"],"width":["widthChanged"],"ratioWidth":["ratioWidthChanged"],"ratioHeight":["ratioHeightChanged"]}]]],["ino-nav-item",[[4,"ino-nav-item",{"text":[1],"subText":[1,"sub-text"],"activated":[4],"disabled":[4]}]]],["ino-option-group",[[4,"ino-option-group",{"label":[1]}]]],["ino-select",[[4,"ino-select",{"disabled":[4],"name":[1],"required":[4],"showLabelHint":[4,"show-label-hint"],"label":[1],"outline":[4],"value":[1],"helper":[1],"helperValidation":[4,"helper-validation"],"helperPersistent":[4,"helper-persistent"],"error":[4]},[[0,"MDCSelect:change","handleInput"]],{"value":["handleValueChange"],"error":["errorHandler"]}]]],["ino-tab",[[4,"ino-tab",{"icon":[1],"label":[1],"a11yControls":[513,"a-1-1y-controls"],"a11ySelected":[516,"a-1-1y-selected"],"stacked":[4],"indicatorContentWidth":[4,"indicator-content-width"]},[[0,"MDCTab:interacted","interactionHandler"]]]]],["ino-accordion",[[4,"ino-accordion",{"expanded":[4],"accordionTitle":[1,"accordion-title"]}]]],["ino-autocomplete",[[4,"ino-autocomplete",{"debounce":[2],"noOptionsText":[1,"no-options-text"],"options":[16],"value":[1]},[[0,"selection","onItemSelect"],[0,"close","onClose"]],{"options":["onOptionsChange"],"value":["onValueChange"]}]]],["ino-avatar",[[4,"ino-avatar",{"alt":[1],"initials":[1],"src":[1],"interactive":[4],"variant":[1],"colorSecondary":[4,"color-secondary"],"a11yLabel":[1,"a-1-1y-label"],"loading":[4],"imgIsFetching":[32]},null,{"showLoading":["showLoadingHandler"]}]]],["ino-carousel-slide",[[0,"ino-carousel-slide",{"src":[1],"selected":[4],"value":[1]}]]],["ino-currency-input",[[4,"ino-currency-input",{"currencyLocale":[1,"currency-locale"],"value":[520]},null,{"value":["valueChanged"]}]]],["ino-img-list",[[4,"ino-img-list",{"masonry":[4],"encloseLabel":[4,"enclose-label"]}]]],["ino-list-divider",[[0,"ino-list-divider",{"betweenLists":[4,"between-lists"],"padded":[4],"inset":[4]}]]],["ino-progress-bar",[[1,"ino-progress-bar",{"buffer":[2],"indeterminate":[4],"label":[1],"progress":[2]},null,{"buffer":["bufferChanged"],"indeterminate":["indeterminateChanged"],"progress":["progressChanged"]}]]],["ino-radio-group",[[4,"ino-radio-group",{"value":[8],"alignment":[1]},[[0,"checkedChange","handleCheckedChange"],[1,"mouseover","handleMouseOver"],[1,"mouseout","handleMouseOut"],[0,"keydown","handleKeyDown"]],{"value":["valueChanged"]}]]],["ino-range",[[0,"ino-range",{"disabled":[4],"discrete":[4],"markers":[4],"name":[1],"min":[2],"max":[2],"value":[2],"ranged":[4],"valueStart":[2,"value-start"],"valueEnd":[2,"value-end"],"step":[2],"setValueToAriaTextMapperFn":[64]},null,{"value":["handleValueChange"],"valueEnd":["handleValueChange"],"valueStart":["handleRangedValueChanged"]}]]],["ino-segment-button",[[4,"ino-segment-button",{"checked":[4],"disabled":[4],"dense":[4],"name":[1],"value":[1],"type":[1]}]]],["ino-segment-group",[[4,"ino-segment-group",{"name":[1],"value":[8]},[[0,"checkedChange","handleCheckedChange"]],{"value":["valueChanged"]}]]],["ino-switch",[[4,"ino-switch",{"checked":[4],"disabled":[4],"name":[1]},null,{"checked":["checkedChanged"]}]]],["ino-tab-bar",[[4,"ino-tab-bar",{"activeTab":[2,"active-tab"],"autoFocus":[4,"auto-focus"]},[[0,"interacted","interactionHandler"]],{"activeTab":["activeTabChangedWatcher"]}]]],["ino-table",[[4,"ino-table",{"loading":[4],"noHover":[4,"no-hover"],"sortColumnId":[1,"sort-column-id"],"sortDirection":[1,"sort-direction"],"stickyHeader":[4,"sticky-header"]},[[0,"sortDirectionChange","sortDirectionChangedHandler"]],{"sortColumnId":["sortColumnIdChanged"],"sortDirection":["sortDirectionChanged"]}]]],["ino-fab",[[1,"ino-fab",{"icon":[1],"label":[1],"extended":[4],"edgePosition":[1,"edge-position"],"disabled":[4],"mini":[4],"tooltipPlacement":[1,"tooltip-placement"]},[[0,"click","clickHandler"]],{"label":["watchHandler"]}]]],["ino-list",[[4,"ino-list",{"dense":[4],"twoLines":[4,"two-lines"],"avatar":[4]}]]],["ino-option",[[4,"ino-option",{"disabled":[4],"selected":[4],"value":[1]},[[0,"click","clickHandler"],[0,"keydown","keydownHandler"]]]]],["ino-label",[[0,"ino-label",{"outline":[4],"text":[1],"required":[4],"showHint":[4,"show-hint"],"disabled":[4],"for":[1]}]]],["ino-button_2",[[4,"ino-button",{"autoFocus":[4,"autofocus"],"disabled":[4],"name":[1],"form":[1],"type":[1],"variant":[1],"dense":[4],"loading":[516]},null,{"loading":["loadingChanged"]}],[0,"ino-spinner",{"type":[1],"modal":[4],"height":[2],"width":[2]}]]],["ino-dialog_2",[[1,"ino-dialog",{"attachTo":[1,"attach-to"],"fullwidth":[4],"dismissible":[4],"open":[4],"dialogRole":[1,"dialog-role"],"headerText":[1,"header-text"],"bodyText":[1,"body-text"],"cancelText":[1,"cancel-text"],"closeIcon":[4,"close-icon"],"actionText":[1,"action-text"],"icon":[1]},[[16,"keyup","handleKeyUp"]],{"open":["openChanged"]}],[0,"ino-textarea",{"autoFocus":[4,"autofocus"],"cols":[2],"disabled":[4],"maxlength":[2],"minlength":[2],"showCharacterCounter":[4,"show-character-counter"],"name":[1],"placeholder":[1],"required":[4],"showLabelHint":[4,"show-label-hint"],"rows":[2],"value":[1],"outline":[4],"autogrow":[4],"label":[1],"setFocus":[64],"setBlur":[64]},[[0,"change","handleInput"],[0,"input","handleNativeElement"]],{"autogrow":["handleAutogrow"],"value":["handleChange"]}]]],["ino-input",[[4,"ino-input",{"autocomplete":[1],"autoFocus":[4,"auto-focus"],"dataList":[1,"data-list"],"disabled":[4],"error":[4],"helper":[1],"helperCharacterCounter":[4,"helper-character-counter"],"helperPersistent":[4,"helper-persistent"],"helperValidation":[4,"helper-validation"],"label":[1],"min":[1],"max":[1],"maxlength":[2],"name":[1],"outline":[4],"pattern":[1],"placeholder":[1],"required":[4],"showLabelHint":[4,"show-label-hint"],"step":[8],"type":[1],"unit":[1],"value":[1],"resetOnChange":[4,"reset-on-change"],"getInputElement":[64],"setFocus":[64],"setBlur":[64],"setUserInputInterceptor":[64]},[[0,"change","handleChange"],[0,"focus","focusListener"],[0,"input","handleInput"]],{"error":["errorHandler"],"value":["valueChanged"]}]]],["ino-checkbox_2",[[1,"ino-checkbox",{"checked":[4],"disabled":[4],"name":[1],"value":[1],"selection":[4],"indeterminate":[4]},null,{"checked":["checkedChanged"],"indeterminate":["indeterminateChanged"]}],[1,"ino-radio",{"checked":[4],"disabled":[4],"name":[1],"value":[1]},null,{"checked":["checkedChanged"]}]]],["ino-list-item",[[4,"ino-list-item",{"text":[1],"secondaryText":[1,"secondary-text"],"selected":[4],"activated":[4],"disabled":[4],"attrs":[16]},[[0,"keydown","handleKeyDown"],[0,"click","clickHandler"]]]]],["ino-tooltip",[[4,"ino-tooltip",{"headerText":[1,"header-text"],"colorScheme":[1,"color-scheme"],"placement":[1],"arrow":[4],"for":[1],"trigger":[1],"delay":[2],"label":[1],"getTippyInstance":[64]},null,{"placement":["onPlacementChange"],"for":["forChanged"],"delay":["onDelayChange"],"trigger":["triggerChanged"]}]]],["ino-popover",[[4,"ino-popover",{"placement":[1],"arrow":[4],"attachToBody":[4,"attach-to-body"],"for":[1],"hideOnBlur":[4,"hide-on-blur"],"hideOnEsc":[4,"hide-on-esc"],"distance":[2],"colorScheme":[1,"color-scheme"],"interactive":[4],"followCursor":[8,"follow-cursor"],"trigger":[1],"delay":[2],"controlled":[4],"visible":[4],"getTippyInstance":[64]},null,{"placement":["placementChanged"],"attachToBody":["bodyChanged"],"for":["forChanged"],"hideOnBlur":["hideOnBlurChanged"],"hideOnEsc":["hideOnEscChanged"],"distance":["distanceChanged"],"interactive":["interactiveChanged"],"followCursor":["followCursorChanged"],"trigger":["triggerChanged"],"delay":["onDelayChange"],"controlled":["controlledChanged"],"visible":["visibleChangeHandler"]}]]],["ino-icon",[[1,"ino-icon",{"icon":[1],"colorSecondary":[4,"color-secondary"],"clickable":[4],"src":[1],"svgTitle":[1,"svg-title"],"svgContent":[32]},null,{"icon":["iconChanged"],"svgContent":["watchHandler"]}]]],["ino-icon-button",[[4,"ino-icon-button",{"attrs":[16],"autoFocus":[4,"autofocus"],"disabled":[4],"activated":[4],"filled":[4],"icon":[1],"type":[1]},[[0,"click","clickHandler"]],{"activated":["activatedChanged"]}]]]]'),t)};/*!
 * Crafted with ❤ by inovex GmbH
 */(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})();const wt=O(()=>import("./package-c828b150.js"),[],import.meta.url).version,Lt=Ie({base:"light",colorPrimary:"#9ccd00",colorSecondary:"#B6B4C4",appBg:"white",appContentBg:"rgba(255,255,255,0.9)",appBorderColor:"#EDEFF5",appBorderRadius:17,fontBase:'"Lato", Helvetica, Verdana',fontCode:"sans-serif",textColor:"rgba(0, 0, 0, 0.95)",textInverseColor:"rgba(255,255,255,0.9)",barTextColor:"rgba(0, 0, 0, 0.87)",barSelectedColor:"#2c02ff",barBg:"#EDEFF5",inputBg:"white",inputBorder:"rgba(0, 0, 0, 0.32)",inputTextColor:"rgba(0, 0, 0, 0.87)",inputBorderRadius:4,brandTitle:"INOVEX ELEMENTS v"+wt,brandUrl:"/"});function ae(e){return C.jsxs(C.Fragment,{children:[`
`,C.jsx(He,{isTemplate:!0}),`
`,C.jsx(Pe,{}),`
`,C.jsx(Oe,{}),`
`,C.jsx(Ae,{}),`
`,C.jsx(Be,{}),`
`,C.jsx(_e,{})]})}function Et(e={}){const{wrapper:t}=Object.assign({},De(),e.components);return t?C.jsx(t,Object.assign({},e,{children:C.jsx(ae,e)})):ae()}const we=Ee;we.components.forEach(e=>e.readme=null);M.setStencilDocJson(we);je().then(()=>Tt());const Mt={parameters:{viewMode:"docs",layout:"centered",controls:{hideNoControlsWarning:!0},docs:{extractArgTypes:M.extractArgTypes,extractComponentDescription:M.extractComponentDescription,theme:Lt,source:{format:"html"},toc:{contentsSelector:".sbdocs-content:not(div:has(#changelog)):not(div:has(#typography))",headingSelector:"h3",ignoreSelector:".docs-story > * :is(h3)"},page:Et},options:{panelPosition:"bottom",storySort:{order:["Docs",["Welcome","Changelog","Framework Integration","Styleguide","Contributing"]]}}}};export{Mt as default};
