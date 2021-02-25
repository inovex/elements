import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_MENU = `
    <button>
      Open
      <ino-menu>
        <ino-list-item tabindex="0" ino-text="Item"></ino-list-item>
      </ino-menu>
    </button>
`;

describe('InoMenu', () => {
  it('should render opened', async () => {
    const page = await setupPageWithContent(INO_MENU);
    const button = await page.find('button');
    await button.click();
    await page.waitForChanges();

    const listItem = await page.find('ino-list-item');
    expect(listItem).toBeTruthy();
  });

  it('should render closed', async () => {
    const page = await setupPageWithContent(INO_MENU);

    const listItem = await page.find('ino-list-item');
    expect(listItem).toBeFalsy();
  });
});
