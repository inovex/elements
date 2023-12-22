import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_NAV_MENU_SECTION = `
  <ino-nav-menu-section section-name="Section 1">
    <div>My Section</div>
  </ino-nav-menu-section>`;

describe('InoNavMenuSection', () => {
  it('should render', async () => {
    const page = await setupPageWithContent(INO_NAV_MENU_SECTION);
    const section = await page.find('section');
    expect(section).toBeTruthy();
    expect(section.id).toEqual('section-1');
    expect(section.title).toEqual('Section 1');
  });
});
