import{r,h as o,H as c,g as b}from"./index-jyxq6meA.js";import{c as i}from"./index-38c18b20-Bpdhy5BS.js";import{h as n}from"./component-utils-757b8493-Dk10tU6Q.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const l="ino-fab-set{position:fixed;display:flex;width:auto}ino-fab-set.ino-top-bottom-location-top{top:20px}ino-fab-set.ino-top-bottom-location-bottom{bottom:20px}ino-fab-set.ino-left-right-location-left{left:20px}ino-fab-set.ino-left-right-location-right{right:20px}ino-fab-set .ino-fab-set-wrapper{display:flex}ino-fab-set .ino-fab-set-wrapper ino-fab{padding:5px}ino-fab-set .ino-fab-set-wrapper ino-fab .mdc-fab .mdc-fab__icon{font-size:25px}ino-fab-set .ino-fab-set-wrapper .ino-speed-dial{display:none;align-items:center}ino-fab-set .ino-fab-set-wrapper .ino-fab-set-button{padding:5px;align-self:center}ino-fab-set .ino-fab-set-wrapper div[slot=icon-leading]{display:contents}ino-fab-set .ino-fab-set-wrapper .ino-fab-set-icon--opened,ino-fab-set .ino-fab-set-wrapper [slot=icon-opened]{display:none}ino-fab-set .ino-fab-set-wrapper .ino-fab-set-icon--closed,ino-fab-set .ino-fab-set-wrapper [slot=icon-closed]{display:block}ino-fab-set .ino-direction-top.ino-fab-set-wrapper{flex-direction:column}ino-fab-set .ino-direction-top.ino-fab-set-wrapper .ino-speed-dial{flex-direction:column}ino-fab-set .ino-direction-bottom .ino-fab-set-icon{transform:rotate(180deg)}ino-fab-set .ino-direction-bottom.ino-fab-set-wrapper{flex-direction:column-reverse}ino-fab-set .ino-direction-bottom.ino-fab-set-wrapper .ino-speed-dial{flex-direction:column}ino-fab-set .ino-direction-left .ino-fab-set-icon{transform:rotate(270deg)}ino-fab-set .ino-direction-left.ino-fab-set-wrapper{flex-direction:row}ino-fab-set .ino-direction-left.ino-fab-set-wrapper .ino-speed-dial{flex-direction:row}ino-fab-set .ino-direction-right .ino-fab-set-icon{transform:rotate(90deg)}ino-fab-set .ino-direction-right.ino-fab-set-wrapper{flex-direction:row-reverse}ino-fab-set .ino-direction-right.ino-fab-set-wrapper .ino-speed-dial{flex-direction:row}ino-fab-set.ino-fab-set--open-dial .ino-fab-set-wrapper .ino-fab-set-icon--opened,ino-fab-set.ino-fab-set--open-dial .ino-fab-set-wrapper [slot=icon-opened]{display:block}ino-fab-set.ino-fab-set--open-dial .ino-fab-set-wrapper .ino-fab-set-icon--closed,ino-fab-set.ino-fab-set--open-dial .ino-fab-set-wrapper [slot=icon-closed]{display:none}ino-fab-set.ino-fab-set--open-dial .ino-speed-dial{display:flex}ino-fab-set.ino-fab-set--open-dial ino-fab{transition-duration:100ms}",d=l,p=class{constructor(e){r(this,e),this.dialDirection="top",this.topBottomLocation="bottom",this.leftRightLocation="left",this.openDial=!1}render(){const e=i({"ino-fab-set--open-dial":this.openDial},"ino-top-bottom-location-"+this.topBottomLocation,"ino-left-right-location-"+this.leftRightLocation),t=i({"ino-speed-dial":!0}),a=i("ino-fab-set-wrapper","ino-direction-"+this.dialDirection),s=n(this.el,"icon-closed"),f=n(this.el,"icon-opened");return o(c,{key:"4987accda2e52663b3e2870e3aa1da373a2b95ab",class:e},o("div",{key:"f437685c1889544d872a5d3fefad6b67b04164e5",class:a},o("div",{key:"4ddde53740c4e16bc703bae5008f2b901d54bdd3",class:t},o("slot",{key:"4ec340409515cce1064872e8f64ca58c089a0a27"})),o("ino-fab",{key:"a8ba486247aaf4c68226bd686a0ead031ecdca29",id:"primary-fab",class:"ino-fab-set-button","edge-position":"none","tooltip-placement":"none"},s?o("div",{slot:"icon-leading"},o("slot",{name:"icon-closed"})):o("ino-icon",{class:"ino-fab-set-icon ino-fab-set-icon--closed",slot:"icon-leading",icon:"_fab_set_arrow_up"}),f?o("div",{slot:"icon-leading"},o("slot",{name:"icon-opened"})):o("ino-icon",{class:"ino-fab-set-icon ino-fab-set-icon--opened",slot:"icon-leading",icon:"_fab_set_arrow_down"}))))}get el(){return b(this)}};p.style=d;export{p as ino_fab_set};
