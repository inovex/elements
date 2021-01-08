import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_TABLE = `
<ino-table>
    <ino-table-row>
        <ino-table-cell>Test</ino-table-cell>
    </ino-table-row>
</ino-table>
`;

describe('ino-table', () => {
  describe('Properties', () => {
    it('should render with inoNumeric set to true', async () => {
      const page = await setupPageWithContent(INO_TABLE);
      const cell = await page.find('ino-table-cell');

      await cell.setAttribute('ino-numeric', true);
      await page.waitForChanges();

      expect(cell).toHaveClass('mdc-data-table__cell--numeric');
    });
  });
});
