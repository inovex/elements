const getElementTopPosition = (id: string): number =>
  document.getElementById(id)?.getBoundingClientRect().top ?? 0;

export const scrollToAnchor = (
  anchor: string,
  scrollBehaviour: ScrollBehavior = 'smooth',
  scrollOffset = 0,
): void => {
  const position = getElementTopPosition(anchor);
  const offsetPosition = position + window.scrollY - scrollOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: scrollBehaviour,
  });
};

export const addAnchorToLocation = (anchor: string): void => {
  const newUrl = `${window.location.origin}${window.location.pathname}#${anchor}`;
  window.history.pushState(null, '', newUrl);
};
