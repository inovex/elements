import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { TabBar } from './ino-tab-bar';
import { listenForEvent } from '../../util/test-utils';
import { Tab } from '../ino-tab/ino-tab'

const INO_TAB_BAR = `
  <ino-tab-bar>
    <ino-tab label="User" icon="user" a11y-controls="user-panel"></ino-tab>
    <ino-tab label="Messages" icon="message" a11y-controls="messages-panel"></ino-tab>
    <ino-tab label="Settings" icon="settings" a11y-controls="settings-panel"></ino-tab>
    <ino-tab label="Download" icon="download" a11y-controls="download-panel"></ino-tab>
  </ino-tab-bar>
`;

describe('InoTabBar', () => {
  let page: SpecPage;
  let inoTabBar: HTMLInoTabBarElement;
  let tabs: NodeListOf<HTMLInoTabElement>;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [TabBar, Tab],
      html: INO_TAB_BAR,
    });
    inoTabBar = page.body.querySelector('ino-tab-bar');
    tabs = inoTabBar.querySelectorAll('ino-tab');
  });

  it('should fire activeTabChange event on click', async () => {
    const { eventSpy } = listenForEvent(page, 'activeTabChange');
    expect(eventSpy).not.toHaveBeenCalled();
    tabs[0].click();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should fire activeTabChange event with 0 if the first tab is clicked', async () => {
    const { assertEventDetails } = listenForEvent(page, 'activeTabChange');
    tabs[0].click();
    await page.waitForChanges();
    assertEventDetails(0);
  });

  it('should fire activeTabChange event with 1 if the second tab is clicked', async () => {
    const { assertEventDetails } = listenForEvent(page, 'activeTabChange');
    tabs[1].click();
    await page.waitForChanges();
    assertEventDetails(1);
  });

  it('should auto-focus the first tab if auto-focus is true', async () => {
    const activeElement = page.doc.activeElement;
    expect(activeElement).toBe(tabs[0]);
  });
});
