import { useEffect, useState } from 'react';
import styles from './navigationMenu.module.scss';
import { scrollToElement } from 'utils/scrollToElement';

// We use Record<string, string> instead of enum because we can iterate over it AND use it as a type
export type Sections = Record<string, string>;
interface NavigationMenuProps {
  title: string;
}

export default function NavigationMenu({ title }: NavigationMenuProps) {
  const [activeSection, setActiveSection] = useState<string>();
  const [sections, setSections] = useState<Sections>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }, // top, right, bottom, left margins around the root element's bounding box
    );

    const domSectionElements = document.querySelectorAll(
      'section[data-menu-section]',
    );

    const sectionMap: Sections = {};

    domSectionElements.forEach((sectionElement) => {
      if (sectionElement.id) {
        const sectionTitle =
          sectionElement.querySelector('h2')?.textContent?.trim() ||
          sectionElement.id;
        sectionMap[sectionTitle] = sectionElement.id;
      }
      observer.observe(sectionElement);
    });

    setActiveSection(Object.values(sectionMap)[0]); // set the first section as active
    setSections(sectionMap);

    return () => observer.disconnect();
  }, []);

  function handleAnchorClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) {
    event.preventDefault();
    scrollToElement(sectionId);
  }

  // Return null if there are no sections
  if (!sections || Object.values(sections).length === 0) return null;

  return (
    <aside className={styles.aside}>
      <nav className={styles.navigationMenu}>
        <h5>{title}</h5>
        <ul className={styles.sections}>
          {Object.entries(sections).map(([key, sectionId]) => (
            <li
              key={key}
              className={activeSection === sectionId ? styles.active : ''}
            >
              <a
                href={`#${sectionId}`}
                onClick={(event) => handleAnchorClick(event, sectionId)}
              >
                {key}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
