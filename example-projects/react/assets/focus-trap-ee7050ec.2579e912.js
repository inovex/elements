/*!
 * Crafted with ❤ by inovex GmbH
 *//**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var r="mdc-dom-focus-sentinel",c=function(){function o(t,i){i===void 0&&(i={}),this.root=t,this.options=i,this.elFocusedBeforeTrapFocus=null}return o.prototype.trapFocus=function(){var t=this.getFocusableElements(this.root);if(t.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(t,this.options.initialFocusEl)},o.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+r)).forEach(function(t){t.parentElement.removeChild(t)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},o.prototype.wrapTabFocus=function(t){var i=this,e=this.createSentinel(),s=this.createSentinel();e.addEventListener("focus",function(){var n=i.getFocusableElements(t);n.length>0&&n[n.length-1].focus()}),s.addEventListener("focus",function(){var n=i.getFocusableElements(t);n.length>0&&n[0].focus()}),t.insertBefore(e,t.children[0]),t.appendChild(s)},o.prototype.focusInitialElement=function(t,i){var e=0;i&&(e=Math.max(t.indexOf(i),0)),t[e].focus()},o.prototype.getFocusableElements=function(t){var i=[].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return i.filter(function(e){var s=e.getAttribute("aria-disabled")==="true"||e.getAttribute("disabled")!=null||e.getAttribute("hidden")!=null||e.getAttribute("aria-hidden")==="true",n=e.tabIndex>=0&&e.getBoundingClientRect().width>0&&!e.classList.contains(r)&&!s,a=!1;if(n){var u=getComputedStyle(e);a=u.display==="none"||u.visibility==="hidden"}return n&&!a})},o.prototype.createSentinel=function(){var t=document.createElement("div");return t.setAttribute("tabindex","0"),t.setAttribute("aria-hidden","true"),t.classList.add(r),t},o}();export{c as F};
