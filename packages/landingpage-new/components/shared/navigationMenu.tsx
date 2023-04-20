import { useEffect, useState } from 'react';

export function NavigationMenu() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
        const rootMargin = '-30% 0px -70% 0px';

        const [top, right, bottom, left] = rootMargin.split(' ');
        const viewportHeight = window.innerHeight;

        const topPixels = (parseFloat(top) / 100) * viewportHeight;
        const bottomPixels = (parseFloat(bottom) / 100) * viewportHeight;

        const rootMarginPixels = `${topPixels}px ${right} ${bottomPixels}px ${left}`;

        console.log(rootMarginPixels);
      },
      { rootMargin: '-30% 0px -70% 0px' } // top, right, bottom, left margins around the root element's bounding box
    );

    const sections = document.querySelectorAll('article section[id]');
    sections.forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  function handleAnchorClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute(
      'href'
    );
    if (!targetId) return;
    console.log(event.currentTarget);
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const headerOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Change the URL hash (because we're preventing the default anchor click)
    const newUrl = `${window.location.origin}${window.location.pathname}${targetId}`;
    window.history.pushState(null, '', newUrl);

    // Using window.scrollTo() instead of element.scrollIntoView() because the latter doesn't support offsets
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  return (
    <aside>
      <nav className="navigation-menu">
        <h5>REACT GUIDE</h5>
        <ul>
          <li className={activeSection === 'preparation' ? 'active' : ''}>
            <a href="#preparation" onClick={handleAnchorClick}>
              Preparation
            </a>
          </li>
          <li className={activeSection === 'properties' ? 'active' : ''}>
            <a href="#properties" onClick={handleAnchorClick}>
              Properties
            </a>
          </li>
          <li className={activeSection === 'finishing-touches' ? 'active' : ''}>
            <a href="#finishing-touches" onClick={handleAnchorClick}>
              Finishing Touches
            </a>
          </li>
          <li className={activeSection === 'wrapping-up' ? 'active' : ''}>
            <a href="#wrapping-up" onClick={handleAnchorClick}>
              Wrapping up
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
