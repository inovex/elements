import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { TabBar } from './ino-tab-bar';
import { listenForEvent } from '../../util/test-utils';

describe('InoTabBar', () => {
  let page: SpecPage;
  let inoTab: HTMLInoTabElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [TabBar],
      html: `<InoTabBar auto-focus>
      <ino-tab label="User" icon="user" a11y-controls="user-panel">
      </ino-tab>
      <ino-tab
        label="Messages"
        icon="message"
        a11y-controls="messages-panel"
      ></ino-tab>
      <ino-tab
        label="Settings"
        icon="settings"
        a11y-controls="settings-panel"
      ></ino-tab>
      <ino-tab
        label="Download"
        icon="download"
        a11y-controls="download-panel"
      ></ino-tab></InoTabBar>`,
    });
    inoTab = page.body.querySelector('ino-tab');
  });

  it('should fire activeTabChange event on click', async () => {
    const { eventSpy } = listenForEvent(page, 'activeTabChange');
    expect(eventSpy).not.toHaveBeenCalled();
    inoTab.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should fire activeTabChange event with 0 if the first tab is clicked', async () => {
    const { assertEventDetails } = listenForEvent(page, 'activeTabChange');
    inoTab.click();
    await page.waitForChanges();
    assertEventDetails(0);
  });

  it('should fire activeTabChange event with 1 if the second tab is clicked', async () => {
    const { assertEventDetails } = listenForEvent(page, 'activeTabChange');
    const secondTab = page.body.querySelectorAll('ino-tab')[1];
    secondTab.click();
    await page.waitForChanges();
    assertEventDetails(1);
  });

  it('should auto-focus the first tab if auto-focus is true', async () => {
    const firstTab = page.body.querySelector('ino-tab');
    const activeElement = page.doc.activeElement;
    expect(activeElement).toBe(firstTab);
  });
});
