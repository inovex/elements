import { ReactNode } from 'react';
import 'utils/stringExtensions';

type MenuSectionProps = {
  title: string;
  children: ReactNode;
};

/**
 * A MenuSection component that semantically wraps an HTML section element in order to be
 * queryable by the NavigationMenu component used in the getting started guides.
 * @param title The title of the section (that also functions as the id).
 * @param children The content to render within the section.
 */
function MenuSection({ title, children }: MenuSectionProps) {
  return (
    <section data-menu-section id={title.toCamelCase()}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default MenuSection;
