import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_TABLE_W_HEADER = `
<ino-table>
    <ino-table-row ino-header-row>
        <ino-table-cell>Test</ino-table-cell>
    </ino-table-row>
</ino-table>
`;
const INO_TABLE_W_SELECTED_ROW = `
<ino-table>
    <ino-table-row ino-selected>
        <ino-table-cell>Test</ino-table-cell>
    </ino-table-row>
</ino-table>
`;

describe('ino-table', () => {
  describe('Properties', () => {
    it('should render with inoHeaderRow set to true', async () => {
      const page = await setupPageWithContent(INO_TABLE_W_HEADER);
      const row = await page.find('ino-table-row');
      const cell = await page.find('ino-table-cell');

      expect(row).toHaveClass('mdc-data-table__header-row');
      expect(cell).toHaveClasses([
        'mdc-data-table__header-cell',
        'ino-table__header-cell',
      ]);
      expect(cell).not.toHaveClass('mdc-data-table__cell');
    });

    it('should render with inoSelected set to true', async () => {
      const page = await setupPageWithContent(INO_TABLE_W_SELECTED_ROW);
      const row = await page.find('ino-table-row');

      expect(row).toHaveClass('mdc-data-table__row--selected');
    });
  });
});
