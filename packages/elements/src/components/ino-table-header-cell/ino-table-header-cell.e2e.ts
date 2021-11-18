import { setupPageWithContent } from '../../util/e2etests-setup';

describe('ino-table', () => {

  describe('Properties', () => {
    it('should render with numerical values', async () => {
      const page = await setupPageWithContent(`
        <ino-table>
          <tr slot="header-row">
            <ino-table-header-cell>Test</ino-table-header-cell>
          </tr>
        </ino-table>
      `);
      const cell = await page.find('ino-table-header-cell');

      await cell.classList.add('ino-table__cell--numeric');
      await page.waitForChanges();

      expect(cell).toHaveClass('ino-table__cell--numeric');
    });
  });

});
