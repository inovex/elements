import { useEffect, useState } from 'react';
import styles from './navigationMenu.module.scss';
import { Sections } from './sections';

interface NavigationMenuProps {
  sections: Sections;
}

export function NavigationMenu({ sections }: NavigationMenuProps) {
  const [activeSection, setActiveSection] = useState(
    Object.values(sections)[0]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            if (!Object.values(sections).includes(entry.target.id)) {
              console.warn("Couldn't find section in sections object");
            }
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } // top, right, bottom, left margins around the root element's bounding box
    );

    const DomSectionElements = document.querySelectorAll('article section[id]');
    DomSectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sections]);

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

  return (
    <aside className={styles.aside + ' menu'}>
      <nav className={styles.navigationMenu}>
        <h5>REACT GUIDE</h5>
        <ul className={styles.sections}>
          {sections &&
            Object.entries(sections).map(([key, section]) => (
              <li
                key={key}
                className={activeSection === section ? styles.active : ''}
              >
                <a
                  href={`#${section}`}
                  onClick={(event) => handleAnchorClick(event, section)}
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
