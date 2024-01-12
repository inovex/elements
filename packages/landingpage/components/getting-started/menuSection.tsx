import { ReactNode } from 'react';
import 'utils/stringExtensions';
import { InoTooltip } from '@elements';

type MenuSectionProps = {
  title: string;
  children: ReactNode;
  level?: 'main' | 'sub'; // 'main' for main sections, 'sub' for subsections (subsections will not be listed in the navigationMenu.tsx)
};

/**
 * A MenuSection component that semantically wraps an HTML section element in order to be
 * queryable by the NavigationMenu component used in the getting started guides.
 * @param title The title of the section (that also functions as the id).
 * @param children The content to render within the section.
 */
function MenuSection({ title, children, level = 'main' }: MenuSectionProps) {
  // Sanitize the ID by replacing all non-word characters (this prevents querySelector errors when the id could contain special characters like "Install @inovex.de/elements" in the vue-guide.mdx)
  const id = title.toCamelCase().replace(/[^\w-]/g, '-');
  const isMainSection = level === 'main';

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

  const HeadingTag = isMainSection ? 'h2' : 'h3';

  return (
    <section data-menu-section={isMainSection ? 'true' : undefined} id={id}>
      <HeadingTag
        id={`popover-heading-${id}`}
        onClick={handleMenuSectionClick}
        style={{ cursor: 'pointer' }}
      >
        {title}
      </HeadingTag>
      <InoTooltip
        for={`popover-heading-${id}`}
        placement="left"
        trigger="mouseenter focus"
      >
        <b>#</b>
      </InoTooltip>
      {children}
    </section>
  );
}

export default MenuSection;
