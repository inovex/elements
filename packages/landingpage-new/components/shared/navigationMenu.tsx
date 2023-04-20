import { useEffect, useState } from 'react';
import styles from './navigationMenu.module.scss';

export function NavigationMenu() {
  const [activeSection, setActiveSection] = useState('preparation');

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

    const sections = document.querySelectorAll('article section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function handleAnchorClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute(
      'href'
    );
    if (!targetId) return;
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const headerOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Change the URL (because we're preventing the default anchor click behavior)
    const newUrl = `${window.location.origin}${window.location.pathname}${targetId}`;
    window.history.pushState(null, '', newUrl);

    // Using window.scrollTo() instead of element.scrollIntoView() because the latter doesn't support offsets
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  return (
    <aside className={styles.aside}>
      <nav className={styles.navigationMenu}>
        <h5>REACT GUIDE</h5>
        <ul>
          <li className={activeSection === 'preparation' ? styles.active : ''}>
            <a href="#preparation" onClick={handleAnchorClick}>
              Preparation
            </a>
          </li>
          <li className={activeSection === 'properties' ? styles.active : ''}>
            <a href="#properties" onClick={handleAnchorClick}>
              Properties
            </a>
          </li>
          <li
            className={
              activeSection === 'finishing-touches' ? styles.active : ''
            }
          >
            <a href="#finishing-touches" onClick={handleAnchorClick}>
              Finishing Touches
            </a>
          </li>
          <li className={activeSection === 'wrapping-up' ? styles.active : ''}>
            <a href="#wrapping-up" onClick={handleAnchorClick}>
              Wrapping up
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
