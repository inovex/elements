import { ReactNode } from 'react';
import 'utils/stringExtensions';

type MenuSectionProps = {
  title: string;
  children: ReactNode;
  includeInNavigationMenu?: boolean;
};

/**
 * A MenuSection component that semantically wraps an HTML section element in order to be
 * queryable by the NavigationMenu component used in the getting started guides.
 * @param title The title of the section (that also functions as the id).
 * @param children The content to render within the section.
 */
function MenuSection({ title, children }: MenuSectionProps) {
  const id = title.toCamelCase();

  const handleMenuSectionClick = (
    event: React.MouseEvent<HTMLHeadingElement>,
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const headerOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Change the URL (because we're preventing the default anchor click behavior)
    const newUrl = `${window.location.origin}${window.location.pathname}#${id}`;
    window.history.pushState(null, '', newUrl);

    // Using window.scrollTo() instead of element.scrollIntoView() because the latter doesn't support offsets
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <section data-menu-section id={id}>
      <h2 onClick={handleMenuSectionClick} style={{ cursor: 'pointer' }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default MenuSection;
