(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{62:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/library/patterns/preview-box",function(){return n(6262)}])},6262:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return p}});var r=n(5893),s=n(7294),c=n(3918),i=n(6234),d=n.n(i),t=n(839);function l(e){let{rawCode:o,copyIconId:n}=e,[i,t]=(0,s.useState)("copy"),[l,a]=(0,s.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.$U,{id:n,icon:i,className:d().copyIcon,onClick:()=>{t("checkmark"),a(!0),setTimeout(()=>{t("copy"),a(!1)},3e3),navigator.clipboard&&navigator.clipboard.writeText(o)}}),(0,r.jsx)(c.pq,{controlled:!0,visible:l,for:n,trigger:"click",placement:"top",children:(0,r.jsx)("div",{className:d().popover,children:(0,r.jsx)("span",{className:"body-s",children:"Copied!"})})})]})}function a(e){let{selectedValue:o,setSelectedValue:n}=e,[i,t]=(0,s.useState)(null),l=e=>t(e),a=()=>t(null);return(0,r.jsxs)(c.K_,{value:o,onValueChange:e=>n(e.detail),children:[(0,r.jsx)(c.Hh,{value:"PreviewMode",onMouseEnter:()=>l("PreviewMode"),onMouseLeave:a,children:(0,r.jsxs)("span",{children:[(0,r.jsx)(c.$U,{icon:"display",className:"CodeMode"===o&&"PreviewMode"!==i?d().unselectedIcon:""}),"Preview"]})}),(0,r.jsx)(c.Hh,{value:"CodeMode",onMouseEnter:()=>l("CodeMode"),onMouseLeave:a,children:(0,r.jsxs)("span",{children:[(0,r.jsx)(c.$U,{icon:"code",className:"PreviewMode"===o&&"CodeMode"!==i?d().unselectedIcon:""}),"Code"]})})]})}function p(e){let{id:o,title:n,description:c,previewComponent:i,highlightedCode:p,rawCode:u}=e,[v,_]=(0,s.useState)("PreviewMode"),x=(0,s.useRef)(null),{t:w}=(0,t.Z)(),h=(0,s.useMemo)(()=>x.current?x.current.getBoundingClientRect().height:0,[x.current]);return(0,r.jsxs)("div",{className:d().patternsWrapper,children:[(0,r.jsx)("h1",{className:"header-h1",children:n}),(0,r.jsx)("p",{className:"body-l",children:c}),(0,r.jsxs)("div",{className:d().segmentGroup,children:[(0,r.jsx)(a,{selectedValue:v,setSelectedValue:_}),(0,r.jsx)("div",{className:d().divider}),(0,r.jsx)(l,{rawCode:u,copyIconId:"copy-icon-".concat(o)})]}),(0,r.jsxs)("div",{className:"".concat(d().previewBox," ").concat("PreviewMode"===v?d().previewMode:d().codeMode),children:[(0,r.jsx)("div",{ref:x,style:{display:"PreviewMode"===v?"block":"none"},children:i}),(0,r.jsx)("div",{style:{display:"CodeMode"===v?"block":"none",height:h},className:d().code,dangerouslySetInnerHTML:{__html:p}})]})]})}},6234:function(e){e.exports={patternsWrapper:"preview-box_patternsWrapper__y9jBW",segmentGroup:"preview-box_segmentGroup__socvJ",unselectedIcon:"preview-box_unselectedIcon__0Vyuf",copyIcon:"preview-box_copyIcon__JvG92",popover:"preview-box_popover__zPkc7",divider:"preview-box_divider__4gmfX",previewBox:"preview-box_previewBox__UreYz",previewMode:"preview-box_previewMode__bebPz",codeMode:"preview-box_codeMode__9BgKc",code:"preview-box_code__Eq2pB"}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=62)}),_N_E=e.O()}]);