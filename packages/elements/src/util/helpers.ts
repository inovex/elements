export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};

export const renderHiddenInput = (
  container: HTMLElement,
  name: string,
  value: string | undefined | null,
  disabled: boolean
): HTMLInputElement => {
  let input = container.querySelector(
    'input.aux-input'
  ) as HTMLInputElement | null;
  if (!input) {
    input = container.ownerDocument.createElement('input');
    input.type = 'hidden';
    input.classList.add('aux-input');
    container.appendChild(input);
  }
  input.disabled = disabled;
  input.name = name;
  input.value = value || '';

  return input;
};
