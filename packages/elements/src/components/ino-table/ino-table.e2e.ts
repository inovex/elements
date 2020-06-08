import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_TABLE = `
<ino-table>
    <ino-table-row>
        <ino-table-cell>Test</ino-table-cell>
    </ino-table-row>
</ino-table>
`;

describe('ino-table', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_TABLE);
    const table = await page.find('ino-table');
    const row = await page.find('ino-table-row');
    const cell = await page.find('ino-table-cell');

    expect(table).toBeDefined();
    expect(row).toBeDefined();
    expect(cell).toBeDefined();
  });
});
