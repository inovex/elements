type CheckableElement = HTMLElement & { checked: boolean; indeterminate?: boolean};
type InputElement = HTMLElement & { value: string};

export const handleCheckedChange = (e: CustomEvent<boolean>) => {
  const checkableElement: CheckableElement = (e.target as CheckableElement);
  checkableElement.checked = e.detail;
  if (checkableElement.indeterminate) {
    checkableElement.indeterminate = false;
  }
};

export const handleValueChange = (e: CustomEvent<string>) => {
  const inputEl: InputElement = (e.target as InputElement);
  inputEl.value = e.detail;
};


