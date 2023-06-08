import { useEffect, useState } from 'react';
import styles from './navigationMenu.module.scss';

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
      { rootMargin: '-30% 0px -70% 0px' } // top, right, bottom, left margins around the root element's bounding box
    );

    const domSectionElements = document.querySelectorAll(
      'section[data-menu-section]'
    );

    const sectionsTemp: Sections = {};

    domSectionElements.forEach((section) => {
      const headingElement = section.querySelector('h2');
      if (headingElement) {
        const headingText = headingElement.innerHTML.trim();
        const key = headingText;
        const value = headingText.toCamelCase();
        sectionsTemp[key] = value;
      }
      observer.observe(section);
    });

    setActiveSection(Object.values(sectionsTemp)[0]); // set the first section as active
    setSections(sectionsTemp);

    return () => observer.disconnect();
  }, []);

  function handleAnchorClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) {
    event.preventDefault();
    const targetElement = document.querySelector(`#${section}`);
    if (!targetElement) return;

    const headerOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Change the URL (because we're preventing the default anchor click behavior)
    const newUrl = `${window.location.origin}${window.location.pathname}#${section}`;
    window.history.pushState(null, '', newUrl);

    // Using window.scrollTo() instead of element.scrollIntoView() because the latter doesn't support offsets
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  // Return null if there are no sections
  if (!sections || Object.values(sections).length === 0) return null;

  return (
    <aside className={styles.aside}>
      <nav className={styles.navigationMenu}>
        <h5>{title}</h5>
        <ul className={styles.sections}>
          {sections &&
            Object.entries(sections).map(([key, value]) => (
              <li
                key={key}
                className={activeSection === value ? styles.active : ''}
              >
                <a
                  href={`#${value}`}
                  onClick={(event) => handleAnchorClick(event, value)}
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
