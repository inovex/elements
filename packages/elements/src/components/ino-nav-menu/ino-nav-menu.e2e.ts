import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_NAV_MENU = `
  <ino-nav-menu-section section-name="Section 1">
    <p>Section content</p>
  </ino-nav-menu-section>

  <ino-nav-menu-section section-name="Section 2">
    <p>Section content</p>
  </ino-nav-menu-section>

  <ino-nav-menu-section section-name="Section 3">
    <p>Section content</p>
  </ino-nav-menu-section>

  <ino-nav-menu> 
    <div>My Section</div>
  </ino-nav-menu>`;

fdescribe('InoNavMenu', () => {
  let page: E2EPage;
  let navMenu: E2EElement;

  const getSections = async () => {
    return await page.findAll('.ino-nav-menu__sections__section');
  };

  const getActiveSection = async () => {
    return await page.find('.ino-nav-menu__sections__section--active > a');
  };

  beforeEach(async () => {
    page = await setupPageWithContent(INO_NAV_MENU);
    navMenu = await page.find('ino-nav-menu');
    navMenu.setProperty('menuTitle', 'Sections');
    navMenu.setProperty('activeSection', 'section-1');
    await page.waitForChanges();
  });

  it('should render', async () => {
    expect(navMenu).toBeTruthy();
  });

  it('should list only the given sections', async () => {
    navMenu.setProperty('sections', ['Section 1', 'Section 3']);
    await page.waitForChanges();

    const sections = await getSections();
    expect(sections.length).toEqual(2);
  });

  it('should hightlight the active section', async () => {
    let activeSection = await getActiveSection();
    expect(activeSection).toBeTruthy();
    expect(activeSection.getAttribute('href')).toEqual('#section-1');

    navMenu.setProperty('activeSection', 'section-3');
    await page.waitForChanges();
    activeSection = await getActiveSection();
    expect(activeSection).toBeTruthy();
    expect(activeSection.getAttribute('href')).toEqual('#section-3');
  });

  it('should autodetect sections if no sections provided', async () => {
    const sections = await getSections();
    expect(sections.length).toEqual(3);
  });
});
