(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[2025],{82025:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{scopeCss:()=>scopeCss});__webpack_require__(85940),__webpack_require__(77950),__webpack_require__(17368),__webpack_require__(88233),__webpack_require__(74069),__webpack_require__(44112),__webpack_require__(48319),__webpack_require__(16781),__webpack_require__(45794),__webpack_require__(74083),__webpack_require__(18827),__webpack_require__(43108),__webpack_require__(32501),__webpack_require__(43450),__webpack_require__(38695),__webpack_require__(1939);var __spreadArrays=function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var o=Array(e),n=0;for(r=0;r<t;r++)for(var s=arguments[r],l=0,a=s.length;l<a;l++,n++)o[n]=s[l];return o},_parenSuffix=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",_cssColonHostRe=new RegExp("(-shadowcsshost"+_parenSuffix,"gim"),_cssColonHostContextRe=new RegExp("(-shadowcsscontext"+_parenSuffix,"gim"),_cssColonSlottedRe=new RegExp("(-shadowcssslotted"+_parenSuffix,"gim"),_polyfillHostNoCombinatorRe=/-shadowcsshost-no-combinator([^\s]*)/,_shadowDOMSelectorsRe=[/::shadow/g,/::content/g],_polyfillHostRe=/-shadowcsshost/gim,_colonHostRe=/:host/gim,_colonSlottedRe=/::slotted/gim,_colonHostContextRe=/:host-context/gim,_commentRe=/\/\*\s*[\s\S]*?\*\//g,_commentWithHashRe=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_ruleRe=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,_curlyRe=/([{}])/g,processRules=function processRules(e,r){var t=escapeBlocks(e),o=0;return t.escapedString.replace(_ruleRe,(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var s=e[2],l="",a=e[4],c="";a&&a.startsWith("{%BLOCK%")&&(l=t.blocks[o++],a=a.substring("%BLOCK%".length+1),c="{");var i={selector:s,content:l},v=r(i);return""+e[1]+v.selector+e[3]+c+v.content+a}))},escapeBlocks=function escapeBlocks(e){for(var r=e.split(_curlyRe),t=[],o=[],n=0,s=[],l=0;l<r.length;l++){var a=r[l];"}"===a&&n--,n>0?s.push(a):(s.length>0&&(o.push(s.join("")),t.push("%BLOCK%"),s=[]),t.push(a)),"{"===a&&n++}return s.length>0&&(o.push(s.join("")),t.push("%BLOCK%")),{escapedString:t.join(""),blocks:o}},convertColonRule=function convertColonRule(e,r,t){return e.replace(r,(function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(e[2]){for(var o=e[2].split(","),n=[],s=0;s<o.length;s++){var l=o[s].trim();if(!l)break;n.push(t("-shadowcsshost-no-combinator",l,e[3]))}return n.join(",")}return"-shadowcsshost-no-combinator"+e[3]}))},colonHostPartReplacer=function colonHostPartReplacer(e,r,t){return e+r.replace("-shadowcsshost","")+t},colonHostContextPartReplacer=function colonHostContextPartReplacer(e,r,t){return r.indexOf("-shadowcsshost")>-1?colonHostPartReplacer(e,r,t):e+r+t+", "+r+" "+e+t},selectorNeedsScoping=function selectorNeedsScoping(e,r){return!function makeScopeMatcher(e){return e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(e)},applyStrictSelectorScope=function applyStrictSelectorScope(e,r,t){for(var i,n="."+(r=r.replace(/\[is=([^\]]*)\]/g,(function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return r[0]}))),s=function s(e){var o=e.trim();if(!o)return"";if(e.indexOf("-shadowcsshost-no-combinator")>-1)o=function applySimpleSelectorScope(e,r,t){if(_polyfillHostRe.lastIndex=0,_polyfillHostRe.test(e)){var o="."+t;return e.replace(_polyfillHostNoCombinatorRe,(function(e,r){return r.replace(/([^:]*)(:*)(.*)/,(function(e,r,t,n){return r+o+t+n}))})).replace(_polyfillHostRe,o+" ")}return r+" "+e}(e,r,t);else{var s=e.replace(_polyfillHostRe,"");if(s.length>0){var l=s.match(/([^:]*)(:*)(.*)/);l&&(o=l[1]+n+l[2]+l[3])}}return o},l=function safeSelector(e){var r=[],t=0;return{content:(e=e.replace(/(\[[^\]]*\])/g,(function(e,o){var n="__ph-"+t+"__";return r.push(o),t++,n}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(e,o,n){var s="__ph-"+t+"__";return r.push(n),t++,o+s})),placeholders:r}}(e),a="",c=0,v=/( |>|\+|~(?!=))\s*/g,f=!((e=l.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(i=v.exec(e));){var u=i[1],_=e.slice(c,i.index).trim();a+=((f=f||_.indexOf("-shadowcsshost-no-combinator")>-1)?s(_):_)+" "+u+" ",c=v.lastIndex}var m=e.substring(c);return a+=(f=f||m.indexOf("-shadowcsshost-no-combinator")>-1)?s(m):m,function restoreSafeSelector(e,r){return r.replace(/__ph-(\d+)__/g,(function(r,t){return e[+t]}))}(l.placeholders,a)},scopeSelectors=function scopeSelectors(e,r,t,o,n){return processRules(e,(function(e){var n=e.selector,s=e.content;return"@"!==e.selector[0]?n=function scopeSelector(e,r,t,o){return e.split(",").map((function(e){return o&&e.indexOf("."+o)>-1?e.trim():selectorNeedsScoping(e,r)?applyStrictSelectorScope(e,r,t).trim():e.trim()})).join(", ")}(e.selector,r,t,o):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(s=scopeSelectors(e.content,r,t,o)),{selector:n.replace(/\s{2,}/g," ").trim(),content:s}}))},scopeCssText=function scopeCssText(e,r,t,o,n){var s=function convertColonSlotted(e,r){var t="."+r+" > ",o=[];return e=e.replace(_cssColonSlottedRe,(function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(e[2]){for(var n=e[2].trim(),s=e[3],l=t+n+s,a="",c=e[4]-1;c>=0;c--){var i=e[5][c];if("}"===i||","===i)break;a=i+a}var v=a+l,p=""+a.trimRight()+l.trim();if(v.trim()!==p.trim()){var f=p+", "+v;o.push({orgSelector:v,updatedSelector:f})}return l}return"-shadowcsshost-no-combinator"+e[3]})),{selectors:o,cssText:e}}(e=function convertColonHostContext(e){return convertColonRule(e,_cssColonHostContextRe,colonHostContextPartReplacer)}(e=function convertColonHost(e){return convertColonRule(e,_cssColonHostRe,colonHostPartReplacer)}(e=function insertPolyfillHostInCssText(e){return e.replace(_colonHostContextRe,"-shadowcsscontext").replace(_colonHostRe,"-shadowcsshost").replace(_colonSlottedRe,"-shadowcssslotted")}(e))),o);return e=function convertShadowDOMSelectors(e){return _shadowDOMSelectorsRe.reduce((function(e,r){return e.replace(r," ")}),e)}(e=s.cssText),r&&(e=scopeSelectors(e,r,t,o)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,"."+t)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:s.selectors}},scopeCss=function scopeCss(e,r,t){var o=r+"-h",n=r+"-s",s=function extractCommentsWithHash(e){return e.match(_commentWithHashRe)||[]}(e);e=function stripComments(e){return e.replace(_commentRe,"")}(e);var l=[];if(t){var a=function a(e){var r="/*!@___"+l.length+"___*/",t="/*!@"+e.selector+"*/";return l.push({placeholder:r,comment:t}),e.selector=r+e.selector,e};e=processRules(e,(function(e){return"@"!==e.selector[0]?a(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=processRules(e.content,a),e):e}))}var c=scopeCssText(e,r,o,n);return e=__spreadArrays([c.cssText],s).join("\n"),t&&l.forEach((function(r){var t=r.placeholder,o=r.comment;e=e.replace(t,o)})),c.slottedSelectors.forEach((function(r){e=e.replace(r.orgSelector,r.updatedSelector)})),e}},18827:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__(23103),$trimEnd=__webpack_require__(1017).end,FORCED=__webpack_require__(9445)("trimEnd"),trimEnd=FORCED?function trimEnd(){return $trimEnd(this)}:"".trimEnd;$({target:"String",proto:!0,forced:FORCED},{trimEnd,trimRight:trimEnd})}}]);
//# sourceMappingURL=2025.c397ad84.iframe.bundle.js.map