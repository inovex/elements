import { setupPageWithContent } from '../../util/e2etests-setup';


const INO_TAB_BAR = `<ino-tab-bar id="tab-bar" ino-active-tab="0">
    <ino-tab id="tab-1" ino-label="Label 1"/>
    <ino-tab id="tab-2" ino-label="Label 1"/>
    <ino-tab id="tab-3" ino-label="Label 1"/>
</ino-tab-bar>`;

describe('InoTabBar', () => {

  it('should render correctly', async () => {
    const page = await setupPageWithContent(INO_TAB_BAR);
    const tabBar = await page.find('ino-tab-bar');
    expect(tabBar).toBeDefined();
  });
  // FIXME: Tests are very inconsistent
  /*
  it('should render with tab at position 0 being activated by default', async () => {
    const page = await setupPageWithContent(INO_TAB_BAR);
    const inoTabOne = await page.waitForSelector('#tab-1 > button.mdc-tab--active', { visible: true, timeout: 2000 });
    expect(inoTabOne).toBeDefined();
  });

  it('should have activated tab two', async () => {
    const page = await setupPageWithContent(INO_TAB_BAR);
    const inoTabBar = await page.find('ino-tab-bar');
    await inoTabBar.setAttribute('ino-active-tab', 1);
    const inoTabTwo = await page.waitForSelector('#tab-2 > button.mdc-tab--active', { visible: true, timeout: 2000 });

    expect(inoTabTwo).toBeDefined();
  });

  it('should receive event on tab interaction', async () => {
    const page = await setupPageWithContent(INO_TAB_BAR);
    const inoTabBar = await page.waitForSelector('#tab-2 > button');
    const activeTabChanged = await page.spyOnEvent('activeTabChange');
    await inoTabBar.click();

    expect(activeTabChanged).toHaveReceivedEvent();
  });

  it('should receive event on tab interaction with 1 as detail', async () => {
    const page = await setupPageWithContent(INO_TAB_BAR);
    const inoTabBar = await page.find('#tab-2 > button');
    const activeTabChanged = await page.spyOnEvent('activeTabChange');
    await inoTabBar.click();

    expect(activeTabChanged).toHaveReceivedEventDetail(1);
  });
   */
});
