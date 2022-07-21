/*!
 * Crafted with ❤ by inovex GmbH
 */
/**
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
 */
var AnimationFrame = function() {
  function AnimationFrame2() {
    this.rafIDs = /* @__PURE__ */ new Map();
  }
  AnimationFrame2.prototype.request = function(key, callback) {
    var _this = this;
    this.cancel(key);
    var frameID = requestAnimationFrame(function(frame) {
      _this.rafIDs.delete(key);
      callback(frame);
    });
    this.rafIDs.set(key, frameID);
  };
  AnimationFrame2.prototype.cancel = function(key) {
    var rafID = this.rafIDs.get(key);
    if (rafID) {
      cancelAnimationFrame(rafID);
      this.rafIDs.delete(key);
    }
  };
  AnimationFrame2.prototype.cancelAll = function() {
    var _this = this;
    this.rafIDs.forEach(function(_, key) {
      _this.cancel(key);
    });
  };
  AnimationFrame2.prototype.getQueue = function() {
    var queue = [];
    this.rafIDs.forEach(function(_, key) {
      queue.push(key);
    });
    return queue;
  };
  return AnimationFrame2;
}();
export { AnimationFrame as A };
