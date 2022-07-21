/*!
 * Crafted with ❤ by inovex GmbH
 */
const renderHiddenInput = (container, name, value, disabled) => {
  let input = container.querySelector("input.aux-input");
  if (!input) {
    input = container.ownerDocument.createElement("input");
    input.type = "hidden";
    input.classList.add("aux-input");
    container.appendChild(input);
  }
  input.disabled = disabled;
  input.name = name;
  input.value = value || "";
  return input;
};
export { renderHiddenInput as r };
