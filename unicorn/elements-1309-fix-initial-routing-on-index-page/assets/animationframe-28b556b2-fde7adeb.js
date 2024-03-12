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
 */var o=function(){function a(){this.rafIDs=new Map}return a.prototype.request=function(t,n){var e=this;this.cancel(t);var r=requestAnimationFrame(function(i){e.rafIDs.delete(t),n(i)});this.rafIDs.set(t,r)},a.prototype.cancel=function(t){var n=this.rafIDs.get(t);n&&(cancelAnimationFrame(n),this.rafIDs.delete(t))},a.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach(function(n,e){t.cancel(e)})},a.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach(function(n,e){t.push(e)}),t},a}();export{o as A};
