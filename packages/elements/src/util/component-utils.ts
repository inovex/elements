export function generateUniqueId() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}

export function getSlotContent(
  el: HTMLElement,
  slotName: string
): HTMLElement | null {
  return el.querySelector(`[slot="${slotName}"]`);
}

/**
 * Checks if the given element has at least one child node at the given slot
 * @param el The element which has a (named) slot inside
 * @param slotName The name of the slot to check. If not provided default slot is used.
 * @return `true` if a child at the slot exists, otherwise `false`
 */
export function hasSlotContent(el: HTMLElement, slotName?: string): boolean {
  return slotName 
    ? el.querySelectorAll(`[slot="${slotName}"]`).length > 0 
    : el.querySelector('slot')?.assignedElements().length === 0;
}

/**
 * Focuses the first element that has the `data-ino-focus` attribute.
 *
 * @param el The host element to search in
 */
export function focusIfExists(el: Element): void {
  (el.querySelector('[data-ino-focus]') as HTMLElement)?.focus();
}

export function moveCursorToEnd(el: HTMLInputElement) {
  const len = el.value.length;

  if (el.setSelectionRange) {
    el.focus();
    el.setSelectionRange(len, len);
  }
}
