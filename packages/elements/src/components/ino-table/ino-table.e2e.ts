import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_TABLE = `
  <ino-table>
    <tr slot="header-row">
      <ino-table-header-cell>Test</ino-table-header-cell>
    </tr>
    <tr>
      <td>Test value</td>
    </tr>
  </ino-table>
`;

describe('ino-table', () => {
  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_TABLE);
    const table = await page.find('ino-table');
    const row = await page.find('tr');
    const cell = await page.find('ino-table-header-cell');

    expect(table).toBeDefined();
    expect(row).toBeDefined();
    expect(cell).toBeDefined();
  });
});
