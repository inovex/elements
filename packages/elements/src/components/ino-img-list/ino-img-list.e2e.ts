import { setupPageWithContent } from '../../util/e2etests-setup';

const IMG_LIST = `
<ino-img-list>
    <ino-img src="test" label="test" ino-img-list-item></ino-img>
</ino-img-list>
`;

const LIST_SELECTOR = 'ino-img-list';

describe('ino-img-list', () => {

  describe('Properties', () => {
    it('should render with inoMasonry set to true', async () => {
      const page = await setupPageWithContent(IMG_LIST);
      const list = await page.find(LIST_SELECTOR);

      await list.setAttribute('ino-masonry', true);
      await page.waitForChanges();

      const ul = await page.find('ul');
      expect(ul).toHaveClass('mdc-image-list--masonry');
    });

    it('should render with inoEncloseLabel set to true', async () => {
      const page = await setupPageWithContent(IMG_LIST);
      const list = await page.find(LIST_SELECTOR);

      await list.setAttribute('ino-enclose-label', true);
      await page.waitForChanges();

      const ul = await page.find('ul');
      expect(ul).toHaveClass('mdc-image-list--with-text-protection');
    });
  });

});
