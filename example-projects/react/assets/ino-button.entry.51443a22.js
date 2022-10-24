import{r as _,h as i,H as c,g as l}from"./index.6d5b31ce.js";import{c as r}from"./index-b7e5b0c5.07a60787.js";import{h as s}from"./component-utils-ba71b2e3.d145d8fc.js";import"./_commonjsHelpers-212d567a.0ea80d68.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const b='ino-spinner .ino-spinner__composer{font-size:10px;display:inline-block;position:relative}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--modal{position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background:rgba(255, 255, 255, 0.95)}ino-spinner.ino-spinner--modal .ino-spinner__composer{top:50%;left:50%;transform:translate(-50%, -50%)}ino-button .button{display:flex;flex-direction:row;justify-content:center;align-items:center;column-gap:8px;padding:8px 16px;min-height:36px;line-break:auto;line-height:100%;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:700;cursor:pointer}ino-button .button.button--dense{padding:6px 16px;min-height:32px}ino-button .button.button__icon--leading{padding-left:8px}ino-button .button.button__icon--trailing{padding-right:8px}ino-button .icon__wrapper{height:16px}ino-button .button__label--hide{display:none}ino-button .button__variant--filled{background-color:#2c02ff;border-color:transparent;color:white;text-align:center;border-radius:24px 0 24px 24px;animation:border-round-to-edged 0.15s}@keyframes border-round-to-edged{from{border-radius:24px 24px 24px 24px}to{border-radius:24px 0 24px 24px}}ino-button .button__variant--filled:hover{background-color:#4B4EFF;box-shadow:0 2px 2px #2d5dff4d;border-radius:24px 24px 24px 24px;animation:border-edged-to-round 0.15s}@keyframes border-edged-to-round{from{border-radius:24px 0 24px 24px}to{border-radius:24px 24px 24px 24px}}ino-button .button__variant--filled:focus{background-color:#3D40F5;box-shadow:0 0 0 3px #2d5dff4d}ino-button .button__variant--filled:active{background-color:#3D40F5;box-shadow:none}ino-button .button__variant--filled:disabled{pointer-events:none;color:#7275a1;background-color:#edeff5}ino-button .button__variant--filled .icon__wrapper{--ino-icon-color-primary:$white}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#ffffff}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#ffffff}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#ffffff}ino-button .button__variant--outlined{background-color:rgba(255, 255, 255, 0);border:solid 1.5px #3D40F5;border-radius:19px;color:#2c02ff;letter-spacing:0.27px}ino-button .button__variant--outlined:hover{background-color:#E8EDFF}ino-button .button__variant--outlined:focus{box-shadow:0 0 0 3px #2d5dff4d}ino-button .button__variant--outlined:active{background-color:#D7E0FF;border-color:#3D40F5;box-shadow:none}ino-button .button__variant--outlined:disabled{pointer-events:none;color:#7275a1;background-color:#ffffff;border-color:#7275a1}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#2c02ff}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--text{background-color:transparent;border:3px transparent;color:#2c02ff;border-radius:19px}ino-button .button__variant--text:hover{background-color:#E8EDFF;border-color:transparent}ino-button .button__variant--text:focus{border:none;box-shadow:0 0 0 3px #2d5dff4d}ino-button .button__variant--text:active{background-color:#D7E0FF;box-shadow:none}ino-button .button__variant--text:disabled{pointer-events:none;color:#7275a1;background-color:#ffffff}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#2c02ff}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button.ino-button--loading{pointer-events:none}',d=class{constructor(e){_(this,e),this.type="button",this.variant="filled",this.dense=!1,this.buttonSizeBeforeLoad=null,this.buttonHeightBeforeLoad=null,this.handleClick=n=>{this.disabled&&(n.preventDefault(),n.stopPropagation());const t=this.el.closest("form");if(t){n.preventDefault();const o=document.createElement("button");o.type=this.type,o.style.display="none",o.name="fake-button",t.appendChild(o),o.click(),o.remove()}}}loadingChanged(e){if(e){const n=window.getComputedStyle(this.buttonEl);this.buttonSizeBeforeLoad=n.width,this.buttonHeightBeforeLoad=n.height}else this.buttonSizeBeforeLoad=null}componentDidUpdate(){this.loading&&this.buttonSizeBeforeLoad&&(this.buttonEl.style.setProperty("width",this.buttonSizeBeforeLoad),this.buttonEl.style.setProperty("height",this.buttonHeightBeforeLoad))}render(){const e=r({"ino-button--loading":this.loading}),n=s(this.el,"icon-leading"),t=s(this.el,"icon-trailing"),o=r("button",`button__variant--${this.variant}`,{"button__icon--leading":n,"button__icon--trailing":t,"button--dense":this.dense}),p=r("button__label",{"button__label--hide":this.loading});return i(c,{class:e,onClick:this.handleClick},i("button",{class:o,autoFocus:this.autoFocus,disabled:this.disabled,name:this.name,type:this.type,form:this.form,ref:a=>this.buttonEl=a},n&&i("span",{class:"icon__wrapper"},i("slot",{name:"icon-leading"})),i("span",{class:p},i("slot",null)),this.loading&&i("ino-spinner",{height:20,width:20,type:"circle"}),t&&i("span",{class:"icon__wrapper"},i("slot",{name:"icon-trailing"}))))}get el(){return l(this)}static get watchers(){return{loading:["loadingChanged"]}}};d.style=b;export{d as ino_button};
