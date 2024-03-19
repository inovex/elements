"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[1756],{2323:(b,d,n)=>{function t(){return"_"+Math.random().toString(36).substr(2,9)}function v(i,e){return i.querySelector(`[slot="${e}"]`)}function l(i,e){var a;return e?i.querySelectorAll(`[slot="${e}"]`).length>0:0===(null===(a=i.querySelector("slot"))||void 0===a?void 0:a.assignedElements().length)}function u(i){var e;null===(e=i.querySelector("[data-ino-focus]"))||void 0===e||e.focus()}function o(i){i.stopPropagation(),i.preventDefault()}n.d(d,{a:()=>v,f:()=>u,g:()=>t,h:()=>l,p:()=>o})},4454:(b,d,n)=>{n.d(d,{c:()=>v});var l,t={exports:{}};l=t,function(){var u={}.hasOwnProperty;function o(){for(var a="",r=0;r<arguments.length;r++){var s=arguments[r];s&&(a=e(a,i(s)))}return a}function i(a){if("string"==typeof a||"number"==typeof a)return a;if("object"!=typeof a)return"";if(Array.isArray(a))return o.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var r="";for(var s in a)u.call(a,s)&&a[s]&&(r=e(r,s));return r}function e(a,r){return r?a?a+" "+r:a+r:a}l.exports?(o.default=o,l.exports=o):window.classNames=o}();const v=t.exports},1756:(b,d,n)=>{n.r(d),n.d(d,{ino_avatar:()=>s});var t=n(5978),v=n(4454),l=n(2323);const s=class{constructor(c){(0,t.r)(this,c),this.alt="",this.initials="",this.src="",this.interactive=!1,this.variant="solid",this.colorSecondary=!1,this.a11yLabel="",this.loading=!1,this.imgIsFetching=!0}showLoadingHandler(c){this.imgIsFetching=c}handleImageLoad(){this.loading||(this.imgIsFetching=!1)}renderAvatarBorder(){const c="dashed"===this.variant;let I;I=this.colorSecondary?c?"data:image/svg+xml;base64,PHN2ZyBpZD0iMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEyMC4yNyAxMjAuMjciPjxkZWZzPjxzdHlsZT4uY2xzLTEtM3tmaWxsOm5vbmU7c3Ryb2tlOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8zKTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjNweDt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMyIgeDE9IjE3LjUxIiB5MT0iMTcuNzIiIHgyPSIxMDIuNTUiIHkyPSIxMDIuNzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0NjU1RkYiLz48c3RvcCBvZmZzZXQ9Ii42IiBzdG9wLWNvbG9yPSIjZDZkZWYyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDhlOWQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9IkViZW5lXzEtMyI+PHBhdGggY2xhc3M9ImNscy0xLTMiIGQ9Im0yLjI1LDY5LjUyYy0uNDktMy4wNi0uNzUtNi4xOS0uNzUtOS4zOCwwLTMyLjM4LDI2LjI1LTU4LjY0LDU4LjY0LTU4LjY0LDEyLjE0LDAsMjMuNDMsMy42OSwzMi43OCwxMC4wMU0xMi41Miw5NC4zN2M0LjczLDYuNTYsMTAuNzgsMTIuMTEsMTcuNzYsMTYuMjVtMTIuMDgsNS40MmM1LjYsMS43OCwxMS41NywyLjc0LDE3Ljc2LDIuNzQsMzIuMzgsMCw1OC42NC0yNi4yNSw1OC42NC01OC42NCwwLTE0LjA0LTQuOTMtMjYuOTMtMTMuMTYtMzcuMDIiLz48L2c+PC9zdmc+":"data:image/svg+xml;base64,PHN2ZyBpZD0iNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEyMC4zIDEyMC4zIj48ZGVmcz48c3R5bGU+LmNscy0xLTR7ZmlsbDpub25lO3N0cm9rZTp1cmwoI1VuYmVuYW5udGVyX1ZlcmxhdWZfNCk7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjNweDt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfNCIgeDE9Ii0zNjEuNjgiIHkxPSItNDk0LjQ2IiB4Mj0iLTI0MS40MSIgeTI9Ii00OTQuNDYiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwNy43NyA1MDcuNDMpIHJvdGF0ZSg3MC44MikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0NjU1RkYiLz48c3RvcCBvZmZzZXQ9Ii42IiBzdG9wLWNvbG9yPSIjZDZkZWYyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDhlOWQzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9IkViZW5lXzEtNCI+PGNpcmNsZSBjbGFzcz0iY2xzLTEtNCIgY3g9IjYwLjE1IiBjeT0iNjAuMTUiIHI9IjU4LjY0Ii8+PC9nPjwvc3ZnPg==":c?"data:image/svg+xml;base64,PHN2ZyBpZD0iMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEyMC4yNyAxMjAuMjciPjxkZWZzPjxzdHlsZT4uY2xzLTEtMntmaWxsOm5vbmU7c3Ryb2tlOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8yKTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjNweDt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMiIgeDE9IjYwLjE0IiB5MT0iMTIwLjI3IiB4Mj0iNjAuMTQiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZDZkZWYyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDY1NUZGIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9IkViZW5lXzEtMiI+PHBhdGggY2xhc3M9ImNscy0xLTIiIGQ9Im0yLjI1LDY5LjUyYy0uNDktMy4wNi0uNzUtNi4xOS0uNzUtOS4zOCwwLTMyLjM4LDI2LjI1LTU4LjY0LDU4LjY0LTU4LjY0LDEyLjE0LDAsMjMuNDMsMy42OSwzMi43OCwxMC4wMU0xMi41Miw5NC4zN2M0LjczLDYuNTYsMTAuNzgsMTIuMTEsMTcuNzYsMTYuMjVtMTIuMDgsNS40MmM1LjYsMS43OCwxMS41NywyLjc0LDE3Ljc2LDIuNzQsMzIuMzgsMCw1OC42NC0yNi4yNSw1OC42NC01OC42NCwwLTE0LjA0LTQuOTMtMjYuOTMtMTMuMTYtMzcuMDIiLz48L2c+PC9zdmc+":"data:image/svg+xml;base64,PHN2ZyBpZD0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEyMC4yNyAxMjAuMjciPjxkZWZzPjxzdHlsZT4uY2xzLTEtMXtmaWxsOm5vbmU7c3Ryb2tlOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8yKTtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6M3B4O308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0iVW5iZW5hbm50ZXJfVmVybGF1Zl8yIiB4MT0iLTgwLjE0IiB5MT0iLTE4MC42OCIgeDI9IjQwLjE0IiB5Mj0iLTE4MC42OCIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIwLjU0IDgwLjE0KSByb3RhdGUoOTApIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNDY1NUZGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDZkZWYyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9IkViZW5lXzEtMSI+PGNpcmNsZSBjbGFzcz0iY2xzLTEtMSIgY3g9IjYwLjE0IiBjeT0iNjAuMTQiIHI9IjU4LjY0Ii8+PC9nPjwvc3ZnPg==";const h=window.atob(I.split(",")[1]);return(0,t.h)("div",{class:"ino-avatar__border",innerHTML:h})}render(){const c=(0,v.c)({"ino-avatar":!0,"ino-avatar--interactive":this.interactive,"ino-avatar--dashed":"dashed"===this.variant,"ino-avatar--solid":"solid"===this.variant,"ino-avatar--loading":this.loading&&this.imgIsFetching}),M=(0,l.h)(this.el,"icon-slot"),I=this.renderAvatarBorder();return(0,t.h)("div",{key:"fdb42847a9c0d90dd307125c838fbe7d56859354",class:c,role:"img",tabIndex:this.interactive?0:null,"aria-label":this.a11yLabel},I,this.src?(0,t.h)("div",{class:"ino-avatar__image image"},this.loading&&this.imgIsFetching&&(0,t.h)("div",{class:"skeleton-loader"}),(0,t.h)("img",{class:"ino-avatar__image-inner",src:this.src,alt:this.alt,onLoad:()=>this.handleImageLoad()})):(0,t.h)("div",{class:"ino-avatar__image initials"},this.initials),M&&(0,t.h)("span",{class:"ino-avatar__icon-slot"},(0,t.h)("slot",{name:"icon-slot"})))}get el(){return(0,t.g)(this)}static get watchers(){return{showLoading:["showLoadingHandler"]}}};s.style='@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(60deg)}}@keyframes rotateBack{0%{transform:rotate(60deg)}100%{transform:rotate(0deg)}}.ino-avatar{--avatar-size:var(--ino-avatar-size, 138px);display:flex;justify-content:center;align-items:center;width:var(--avatar-size);height:var(--avatar-size);color:#4655ff;font-size:calc(var(--avatar-size) * 0.3);font-weight:600;position:relative}.ino-avatar--interactive{cursor:pointer}.ino-avatar--interactive .ino-avatar__image::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(76, 105, 201, 0.2);border-radius:50%;opacity:0;transition:opacity 0.3s ease-in-out}.ino-avatar--interactive .ino-avatar__image:hover::after,.ino-avatar--interactive .ino-avatar__image:focus::after{opacity:1}.ino-avatar--interactive .ino-avatar__border path,.ino-avatar--interactive .ino-avatar__border circle{stroke-width:2%;transition:stroke-width 0.3s ease-in-out}.ino-avatar--interactive.ino-avatar--solid:hover .ino-avatar__border path,.ino-avatar--interactive.ino-avatar--solid:hover .ino-avatar__border circle,.ino-avatar--interactive.ino-avatar--solid:focus .ino-avatar__border path,.ino-avatar--interactive.ino-avatar--solid:focus .ino-avatar__border circle,.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__border path,.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__border circle,.ino-avatar--interactive.ino-avatar--dashed:focus .ino-avatar__border path,.ino-avatar--interactive.ino-avatar--dashed:focus .ino-avatar__border circle{stroke-width:4%}.ino-avatar--interactive.ino-avatar--solid:hover .ino-avatar__image-inner::after,.ino-avatar--interactive.ino-avatar--solid:focus .ino-avatar__image-inner::after,.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__image-inner::after,.ino-avatar--interactive.ino-avatar--dashed:focus .ino-avatar__image-inner::after{opacity:1}.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__border,.ino-avatar--interactive.ino-avatar--dashed:focus .ino-avatar__border{transform:rotate(60deg)}.ino-avatar__icon-slot{position:absolute;background:white;border-radius:50%;width:calc(var(--avatar-size) * 0.26);height:calc(var(--avatar-size) * 0.26);bottom:0;right:0;box-shadow:0px 0px 15px -10px #4655ff;display:flex;justify-content:center;align-items:center}.ino-avatar__icon-slot ino-icon{--ino-icon-height:calc(var(--avatar-size) * 0.18);--ino-icon-width:calc(var(--avatar-size) * 0.18)}.ino-avatar__image{display:flex;justify-content:center;align-items:center;width:87%;height:87%;border-radius:50%;box-sizing:border-box;position:relative;justify-content:center}.ino-avatar__image.initials{background:#e2ecff}.ino-avatar__image .skeleton-loader{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%;height:100%;width:100%;background-color:#dddbdd;overflow:hidden;z-index:10;display:flex;justify-content:center;align-items:center}.ino-avatar__image .skeleton-loader::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));animation:shimmer 5s infinite}@keyframes shimmer{100%{transform:translateX(100%)}}.ino-avatar__image-inner{width:100%;height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:50%;position:relative}.ino-avatar__border{display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;will-change:transform, stroke-width;transform:rotate(0deg);transition:transform 250ms ease-in-out}.ino-avatar__border svg{overflow:visible}.ino-avatar__border path,.ino-avatar__border circle{stroke-width:2%;transition:stroke-width 0.3s ease-in-out}.ino-avatar--loading .ino-avatar__border path,.ino-avatar--loading .ino-avatar__border circle{stroke:#dddbdd}'}}]);