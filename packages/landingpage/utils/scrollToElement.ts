export const scrollToElement = (elementId: string, offset = 80) => {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) return;

  const headerInnerElement = document.getElementById('desktopHeaderInner');
  const headerOffset = headerInnerElement
    ? headerInnerElement.offsetHeight
    : offset; // uses inputted offset if desktop header is not present (e.g. on mobile it defaults to 80px due to 26px high burger menu icon)

  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  // Using window.scrollTo() instead of element.scrollIntoView() because the latter doesn't support offsets
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
  const newUrl = `${window.location.origin}${window.location.pathname}#${elementId}`;
  window.history.pushState(null, '', newUrl);
};
