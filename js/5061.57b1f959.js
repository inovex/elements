"use strict";(self["webpackChunk_inovex_de_elements_landingpage"]=self["webpackChunk_inovex_de_elements_landingpage"]||[]).push([[5061],{9742:function(e,t,o){o.d(t,{a:function(){return r},c:function(){return a}});var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof o.g?o.g:"undefined"!==typeof self?self:{};function a(e,t,o){return o={path:t,exports:{},require:function(e,t){return i()}},e(o,o.exports),o.exports}function i(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},4997:function(e,t,o){function r(){return"_"+Math.random().toString(36).substr(2,9)}function a(e,t){return e.querySelector('[slot="'+t+'"]')}function i(e,t){return e.querySelectorAll('[slot="'+t+'"]').length>0}function d(e){var t;null===(t=e.querySelector("[data-ino-focus]"))||void 0===t||t.focus()}function n(e){var t=e.value.length;e.setSelectionRange&&(e.focus(),e.setSelectionRange(t,t))}o.d(t,{a:function(){return r},f:function(){return d},g:function(){return a},h:function(){return i},m:function(){return n}})},5875:function(e,t,o){o.d(t,{c:function(){return a}});var r=o(9742),a=(0,r.c)((function(e){
/*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
(function(){var t={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var d=o.apply(null,a);d&&e.push(d)}else if("object"===i)for(var n in a)t.call(a,n)&&a[n]&&e.push(n)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o})()}))},5061:function(e,t,o){o.r(t),o.d(t,{ino_fab:function(){return f}});var r=o(2326),a=(o(9742),o(5875)),i=o(4997),d=(o(7201),o(2304)),n='.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);-webkit-transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-fab{position:relative;-webkit-box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;-webkit-transition:opacity 15ms linear 30ms, -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 15ms linear 30ms, -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);background-color:#9ccd00;background-color:var(--mdc-theme-secondary, #9ccd00);color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover,.mdc-fab:focus{-webkit-box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mdc-fab:active{-webkit-box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Lato, Verdana, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Lato, Verdana, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;-webkit-text-decoration:var(--mdc-typography-button-text-decoration, none);text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;right:0;height:48px;left:50%;width:48px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:""}.mdc-fab__label{-ms-flex-pack:start;justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{-webkit-transition:-webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);transition:-webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.mdc-fab--exited{-webkit-transform:scale(0);transform:scale(0);opacity:0;-webkit-transition:opacity 15ms linear 150ms, -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:opacity 15ms linear 150ms, -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:opacity 15ms linear 150ms, transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:opacity 15ms linear 150ms, transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:-webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-fab{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-fab .mdc-fab__ripple::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded .mdc-fab__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation .mdc-fab__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation .mdc-fab__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab:hover .mdc-fab__ripple::before{opacity:0.08}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__ripple::before,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}.mdc-fab:not(.mdc-ripple-upgraded) .mdc-fab__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-fab:not(.mdc-ripple-upgraded):active .mdc-fab__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-fab .mdc-fab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;z-index:-1}:host{--fab-color:var(--ino-fab-color, white);--fab-background-color:var(\n    --ino-fab-background-color,\n    #3d40f5\n  );--fab-background-color-hover:var(\n    --ino-fab-background-color-hover,\n    #5d60f7\n  );--fab-background-color-active:var(\n    --ino-fab-background-color-active,\n    #0d10f3\n  );--fab-icon-color:var(\n    --ino-fab-icon-color,\n    #fff\n  );--fab-color-disabled:var(\n    --ino-fab-color-disabled,\n    #fff\n  );--fab-background-color-disabled:var(\n    --ino-background-color-disabled,\n    #9d9d9d\n  );--fab-icon-color-disabled:var(\n    --ino-fab-icon-color-disabled,\n    #fff\n  )}:host .mdc-fab{color:var(--fab-color);background-color:var(--fab-background-color)}:host .mdc-fab:not(.mdc-fab--extended){border-radius:0 50% 50% 50%;-webkit-animation:fab-top-left-defaultto-edged 0.3s;animation:fab-top-left-defaultto-edged 0.3s}@-webkit-keyframes fab-top-left-defaultto-edged{from{border-radius:50%}to{border-radius:0 50% 50% 50%}}@keyframes fab-top-left-defaultto-edged{from{border-radius:50%}to{border-radius:0 50% 50% 50%}}:host .mdc-fab:not(.mdc-fab--extended):hover{border-radius:50%;-webkit-animation:fab-top-left-defaultto-round 0.15s;animation:fab-top-left-defaultto-round 0.15s}@-webkit-keyframes fab-top-left-defaultto-round{from{border-radius:0 50% 50% 50%}to{border-radius:50%}}@keyframes fab-top-left-defaultto-round{from{border-radius:0 50% 50% 50%}to{border-radius:50%}}:host .mdc-fab.mdc-fab--extended{border-radius:0 24px 24px 24px;-webkit-animation:fab-top-left-extendedto-edged 0.3s;animation:fab-top-left-extendedto-edged 0.3s}@-webkit-keyframes fab-top-left-extendedto-edged{from{border-radius:24px}to{border-radius:0 24px 24px 24px}}@keyframes fab-top-left-extendedto-edged{from{border-radius:24px}to{border-radius:0 24px 24px 24px}}:host .mdc-fab.mdc-fab--extended:hover{border-radius:24px;-webkit-animation:fab-top-left-extendedto-round 0.15s;animation:fab-top-left-extendedto-round 0.15s}@-webkit-keyframes fab-top-left-extendedto-round{from{border-radius:0 24px 24px 24px}to{border-radius:24px}}@keyframes fab-top-left-extendedto-round{from{border-radius:0 24px 24px 24px}to{border-radius:24px}}:host .mdc-fab:hover{background-color:var(--fab-background-color-hover)}:host .mdc-fab:active,:host .mdc-fab:after{background-color:var(--fab-background-color-active)}:host .mdc-fab:disabled{color:var(--fab-color-disabled);background-color:var(--fab-background-color-disabled);pointer-events:none}:host .mdc-fab:disabled ::slotted(ino-icon),:host .mdc-fab:disabled ino-icon{--icon-color:var(--fab-icon-color-disabled)}:host .mdc-fab ::slotted(ino-icon),:host .mdc-fab ino-icon{--icon-color:var(--fab-icon-color)}:host(.ino-fab--edge-position-none) .mdc-fab:not(.mdc-fab--extended){border-radius:50%;-webkit-animation:fab-none-defaultto-edged 0.3s;animation:fab-none-defaultto-edged 0.3s}@-webkit-keyframes fab-none-defaultto-edged{from{border-radius:50%}to{border-radius:50%}}@keyframes fab-none-defaultto-edged{from{border-radius:50%}to{border-radius:50%}}:host(.ino-fab--edge-position-none) .mdc-fab:not(.mdc-fab--extended):hover{border-radius:50%;-webkit-animation:fab-none-defaultto-round 0.15s;animation:fab-none-defaultto-round 0.15s}@-webkit-keyframes fab-none-defaultto-round{from{border-radius:50%}to{border-radius:50%}}@keyframes fab-none-defaultto-round{from{border-radius:50%}to{border-radius:50%}}:host(.ino-fab--edge-position-none) .mdc-fab.mdc-fab--extended{border-radius:24px;-webkit-animation:fab-none-extendedto-edged 0.3s;animation:fab-none-extendedto-edged 0.3s}@-webkit-keyframes fab-none-extendedto-edged{from{border-radius:24px}to{border-radius:24px}}@keyframes fab-none-extendedto-edged{from{border-radius:24px}to{border-radius:24px}}:host(.ino-fab--edge-position-none) .mdc-fab.mdc-fab--extended:hover{border-radius:24px;-webkit-animation:fab-none-extendedto-round 0.15s;animation:fab-none-extendedto-round 0.15s}@-webkit-keyframes fab-none-extendedto-round{from{border-radius:24px}to{border-radius:24px}}@keyframes fab-none-extendedto-round{from{border-radius:24px}to{border-radius:24px}}:host(.ino-fab--edge-position-top-left) .mdc-fab:not(.mdc-fab--extended){border-radius:0 50% 50% 50%;-webkit-animation:fab-top-left-defaultto-edged 0.3s;animation:fab-top-left-defaultto-edged 0.3s}@keyframes fab-top-left-defaultto-edged{from{border-radius:50%}to{border-radius:0 50% 50% 50%}}:host(.ino-fab--edge-position-top-left) .mdc-fab:not(.mdc-fab--extended):hover{border-radius:50%;-webkit-animation:fab-top-left-defaultto-round 0.15s;animation:fab-top-left-defaultto-round 0.15s}@keyframes fab-top-left-defaultto-round{from{border-radius:0 50% 50% 50%}to{border-radius:50%}}:host(.ino-fab--edge-position-top-left) .mdc-fab.mdc-fab--extended{border-radius:0 24px 24px 24px;-webkit-animation:fab-top-left-extendedto-edged 0.3s;animation:fab-top-left-extendedto-edged 0.3s}@keyframes fab-top-left-extendedto-edged{from{border-radius:24px}to{border-radius:0 24px 24px 24px}}:host(.ino-fab--edge-position-top-left) .mdc-fab.mdc-fab--extended:hover{border-radius:24px;-webkit-animation:fab-top-left-extendedto-round 0.15s;animation:fab-top-left-extendedto-round 0.15s}@keyframes fab-top-left-extendedto-round{from{border-radius:0 24px 24px 24px}to{border-radius:24px}}:host(.ino-fab--edge-position-top-right) .mdc-fab:not(.mdc-fab--extended){border-radius:50% 0 50% 50%;-webkit-animation:fab-top-right-defaultto-edged 0.3s;animation:fab-top-right-defaultto-edged 0.3s}@-webkit-keyframes fab-top-right-defaultto-edged{from{border-radius:50%}to{border-radius:50% 0 50% 50%}}@keyframes fab-top-right-defaultto-edged{from{border-radius:50%}to{border-radius:50% 0 50% 50%}}:host(.ino-fab--edge-position-top-right) .mdc-fab:not(.mdc-fab--extended):hover{border-radius:50%;-webkit-animation:fab-top-right-defaultto-round 0.15s;animation:fab-top-right-defaultto-round 0.15s}@-webkit-keyframes fab-top-right-defaultto-round{from{border-radius:50% 0 50% 50%}to{border-radius:50%}}@keyframes fab-top-right-defaultto-round{from{border-radius:50% 0 50% 50%}to{border-radius:50%}}:host(.ino-fab--edge-position-top-right) .mdc-fab.mdc-fab--extended{border-radius:24px 0 24px 24px;-webkit-animation:fab-top-right-extendedto-edged 0.3s;animation:fab-top-right-extendedto-edged 0.3s}@-webkit-keyframes fab-top-right-extendedto-edged{from{border-radius:24px}to{border-radius:24px 0 24px 24px}}@keyframes fab-top-right-extendedto-edged{from{border-radius:24px}to{border-radius:24px 0 24px 24px}}:host(.ino-fab--edge-position-top-right) .mdc-fab.mdc-fab--extended:hover{border-radius:24px;-webkit-animation:fab-top-right-extendedto-round 0.15s;animation:fab-top-right-extendedto-round 0.15s}@-webkit-keyframes fab-top-right-extendedto-round{from{border-radius:24px 0 24px 24px}to{border-radius:24px}}@keyframes fab-top-right-extendedto-round{from{border-radius:24px 0 24px 24px}to{border-radius:24px}}:host(.ino-fab--edge-position-bottom-right) .mdc-fab:not(.mdc-fab--extended){border-radius:50% 50% 0 50%;-webkit-animation:fab-bottom-right-defaultto-edged 0.3s;animation:fab-bottom-right-defaultto-edged 0.3s}@-webkit-keyframes fab-bottom-right-defaultto-edged{from{border-radius:50%}to{border-radius:50% 50% 0 50%}}@keyframes fab-bottom-right-defaultto-edged{from{border-radius:50%}to{border-radius:50% 50% 0 50%}}:host(.ino-fab--edge-position-bottom-right) .mdc-fab:not(.mdc-fab--extended):hover{border-radius:50%;-webkit-animation:fab-bottom-right-defaultto-round 0.15s;animation:fab-bottom-right-defaultto-round 0.15s}@-webkit-keyframes fab-bottom-right-defaultto-round{from{border-radius:50% 50% 0 50%}to{border-radius:50%}}@keyframes fab-bottom-right-defaultto-round{from{border-radius:50% 50% 0 50%}to{border-radius:50%}}:host(.ino-fab--edge-position-bottom-right) .mdc-fab.mdc-fab--extended{border-radius:24px 24px 0 24px;-webkit-animation:fab-bottom-right-extendedto-edged 0.3s;animation:fab-bottom-right-extendedto-edged 0.3s}@-webkit-keyframes fab-bottom-right-extendedto-edged{from{border-radius:24px}to{border-radius:24px 24px 0 24px}}@keyframes fab-bottom-right-extendedto-edged{from{border-radius:24px}to{border-radius:24px 24px 0 24px}}:host(.ino-fab--edge-position-bottom-right) .mdc-fab.mdc-fab--extended:hover{border-radius:24px;-webkit-animation:fab-bottom-right-extendedto-round 0.15s;animation:fab-bottom-right-extendedto-round 0.15s}@-webkit-keyframes fab-bottom-right-extendedto-round{from{border-radius:24px 24px 0 24px}to{border-radius:24px}}@keyframes fab-bottom-right-extendedto-round{from{border-radius:24px 24px 0 24px}to{border-radius:24px}}:host(.ino-fab--edge-position-bottom-left) .mdc-fab:not(.mdc-fab--extended){border-radius:50% 50% 50% 0;-webkit-animation:fab-bottom-left-defaultto-edged 0.3s;animation:fab-bottom-left-defaultto-edged 0.3s}@-webkit-keyframes fab-bottom-left-defaultto-edged{from{border-radius:50%}to{border-radius:50% 50% 50% 0}}@keyframes fab-bottom-left-defaultto-edged{from{border-radius:50%}to{border-radius:50% 50% 50% 0}}:host(.ino-fab--edge-position-bottom-left) .mdc-fab:not(.mdc-fab--extended):hover{border-radius:50%;-webkit-animation:fab-bottom-left-defaultto-round 0.15s;animation:fab-bottom-left-defaultto-round 0.15s}@-webkit-keyframes fab-bottom-left-defaultto-round{from{border-radius:50% 50% 50% 0}to{border-radius:50%}}@keyframes fab-bottom-left-defaultto-round{from{border-radius:50% 50% 50% 0}to{border-radius:50%}}:host(.ino-fab--edge-position-bottom-left) .mdc-fab.mdc-fab--extended{border-radius:24px 24px 24px 0;-webkit-animation:fab-bottom-left-extendedto-edged 0.3s;animation:fab-bottom-left-extendedto-edged 0.3s}@-webkit-keyframes fab-bottom-left-extendedto-edged{from{border-radius:24px}to{border-radius:24px 24px 24px 0}}@keyframes fab-bottom-left-extendedto-edged{from{border-radius:24px}to{border-radius:24px 24px 24px 0}}:host(.ino-fab--edge-position-bottom-left) .mdc-fab.mdc-fab--extended:hover{border-radius:24px;-webkit-animation:fab-bottom-left-extendedto-round 0.15s;animation:fab-bottom-left-extendedto-round 0.15s}@-webkit-keyframes fab-bottom-left-extendedto-round{from{border-radius:24px 24px 24px 0}to{border-radius:24px}}@keyframes fab-bottom-left-extendedto-round{from{border-radius:24px 24px 24px 0}to{border-radius:24px}}:host{display:inline-block}:host .mdc-fab ::slotted(ino-icon),:host .mdc-fab ino-icon{--icon-width:30px;--icon-height:30px}:host .mdc-fab.mdc-fab--mini ::slotted(ino-icon),:host .mdc-fab.mdc-fab--mini ino-icon{--icon-width:25px;--icon-height:25px}:host .mdc-fab:not(.mdc-fab--extended),:host .mdc-fab.mdc-fab--extended{-webkit-box-shadow:0 4px 8px 0 rgba(61, 64, 245, 0.3), 0 12px 28px 0 rgba(61, 214, 245, 0.14);box-shadow:0 4px 8px 0 rgba(61, 64, 245, 0.3), 0 12px 28px 0 rgba(61, 214, 245, 0.14)}:host .mdc-fab:active{-webkit-box-shadow:0 8px 16px 0 rgba(61, 64, 245, 0.3), 0 16px 32px 0 rgba(61, 214, 245, 0.14);box-shadow:0 8px 16px 0 rgba(61, 64, 245, 0.3), 0 16px 32px 0 rgba(61, 214, 245, 0.14)}',f=function(){function e(t){(0,r.r)(this,t),this.extended=!1,this.edgePosition="top-left",this.disabled=!1,this.mini=!1,this.tooltipPlacement="left",this.uniqueHelperId=e.generateHelperTextId()}return e.prototype.clickHandler=function(e){this.disabled&&(e.preventDefault(),e.stopPropagation()),this.icon&&console.warn("Property 'icon' is deprecated and will be removed with the next major release. Instead, use the icon-leading slot.")},e.prototype.componentDidLoad=function(){this.fabRipple=new d.M(this.el.shadowRoot.querySelector(".mdc-fab")),this.extended||"none"===this.tooltipPlacement||this.renderTooltip()},e.prototype.renderTooltip=function(){var e={for:this.uniqueHelperId,label:this.label,placement:"none"===this.tooltipPlacement?void 0:this.tooltipPlacement,trigger:"mouseenter focus"},t=document.createElement("ino-tooltip");Object.keys(e).forEach((function(o){return t.setAttribute(o,e[o])})),this.el.appendChild(t)},e.prototype.disconnectedCallback=function(){var e;null===(e=this.fabRipple)||void 0===e||e.destroy()},e.generateHelperTextId=function(){return"fab-helper-text__"+e.HELPER_COUNTER++},e.prototype.render=function(){var e=(0,a.c)("ino-fab--edge-position-"+this.edgePosition),t=(0,a.c)({"mdc-fab":!0,"mdc-fab--extended":this.extended,"mdc-fab--mini":this.mini}),o=(0,i.h)(this.el,"icon-leading");return(0,r.h)(r.H,{class:e,id:this.uniqueHelperId},(0,r.h)("button",{class:t,disabled:this.disabled},(0,r.h)("span",{class:"material-icons mdc-fab__icon"},this.icon&&!o&&(0,r.h)("ino-icon",{icon:this.icon}),o&&(0,r.h)("slot",{name:"icon-leading"})),this.extended&&(0,r.h)("span",{class:"mdc-fab__label"},this.label)))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),e}();f.HELPER_COUNTER=0,f.style=n}}]);
//# sourceMappingURL=5061.57b1f959.js.map