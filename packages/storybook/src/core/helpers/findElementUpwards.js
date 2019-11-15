const findElementUpwards = function(currentEl, elTagName, elClassName) {
  if (currentEl.tagName.toLowerCase() !== elTagName) {
    if (currentEl.parentElement !== null) {
      return findElementUpwards(currentEl.parentElement, elTagName, elClassName);
    }
  } else {
    if (currentEl.classList.contains(elClassName)) {
      return currentEl;
    }
  }
}

export default findElementUpwards;
