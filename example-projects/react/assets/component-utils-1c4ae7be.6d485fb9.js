/*!
 * Crafted with ❤ by inovex GmbH
 */
function generateUniqueId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
function getSlotContent(el, slotName) {
  return el.querySelector(`[slot="${slotName}"]`);
}
function hasSlotContent(el, slotName) {
  var _a;
  return slotName ? el.querySelectorAll(`[slot="${slotName}"]`).length > 0 : ((_a = el.querySelector("slot")) === null || _a === void 0 ? void 0 : _a.assignedElements().length) === 0;
}
function focusIfExists(el) {
  var _a;
  (_a = el.querySelector("[data-ino-focus]")) === null || _a === void 0 ? void 0 : _a.focus();
}
function moveCursorToEnd(el) {
  const len = el.value.length;
  if (el.setSelectionRange) {
    el.focus();
    el.setSelectionRange(len, len);
  }
}
function preventEvent(event) {
  event.stopPropagation();
  event.preventDefault();
}
export { generateUniqueId as a, focusIfExists as f, getSlotContent as g, hasSlotContent as h, moveCursorToEnd as m, preventEvent as p };
