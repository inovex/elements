import{r as o,h as e,H as a}from"./index.2010afdb.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const t=":host{--header-color:var(--ino-header-color, #525368);--header-box-color:var(--ino-header-box-color, rgba(0, 0, 0, 0.05))}:host .header-container{display:table-row}:host p{font-size:13px;font-weight:600;color:var(--header-color);white-space:nowrap;display:table-cell}:host .header-separator{display:table-cell;width:100%}:host .header-inner-box{margin-left:6px;border-radius:1px;background-color:var(--header-box-color);height:10px}",s=class{constructor(r){o(this,r)}componentDidLoad(){this.text&&console.warn('[ino-header] The attribute "text" is deprecated, please use the default slot instead.')}render(){return e(a,null,e("div",{class:"header-container"},e("p",null,this.text?this.text:e("slot",null)),e("div",{class:"header-separator"},e("div",{class:"header-inner-box"}))))}};s.style=t;export{s as ino_header};
