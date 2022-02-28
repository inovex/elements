import { html } from 'lit-html';
import { decorateStoryWithClass, withIconControl, withSortDirection } from '../utils';
import { useEffect } from '@storybook/client-api';
import { Components } from '@inovex.de/elements';
import './ino-table-header-cell.scss';

export default {
    title: `Structure/ino-table-header-cell`,
    component: 'ino-table-header-cell',
    decorators: [
        story => decorateStoryWithClass(story, 'story-ino-table-header-cell'),
        story => {
          useEffect(() => {
            const sortChangeHandler = e => {
                const inoTable = e.target as Components.InoTable;
                const { columnId, sortDirection } = e.detail;
                inoTable.sortColumnId = columnId;
                inoTable.sortDirection = sortDirection;
            };
            document.addEventListener('sortChange', sortChangeHandler);

            const valueChangedHandler = e => e.target.value = e.detail;
            const inoInputs = document.querySelectorAll('ino-input');
            inoInputs.forEach(el => el.addEventListener('valueChange', valueChangedHandler));

            return () => {
                document.removeEventListener('sortChange', sortChangeHandler);
                inoInputs.forEach(el => el.removeEventListener('valueChange', valueChangedHandler));
            };
          });
          return story();
        }
    ]
};


export const Playground = (args) => html`
  <ino-table>
    <tr slot="header-row">
      <ino-table-header-cell
        autofocus="${args.autofocus}"
        not-sortable="${args.notSortable}"
        sort-direction="${args.sortDirection}"
        search-icon="${args.searchIcon}"
        searched="${args.searched}"
        label="${args.label}"
      >
        <ino-input placeholder="Search for XY..." data-ino-focus>
          <ino-icon clickable slot="icon-trailing" icon="close"></ino-icon>
        </ino-input>
      </ino-table-header-cell>
    </tr>
  </ino-table>
`;
Playground.args = {
  autofocus: true,
  notSortable: false,
  label: 'Label, e.g. Belegart',
  columnId: '',
  sortDirection: "",
  searched: false
}
withIconControl(Playground, 'searchIcon', 'search');
withSortDirection(Playground, 'sortDirection')
withSortDirection(Playground, 'sortStart', 'desc')

export const SearchWithInputField = () => {
  useEffect(() => {
    const checkboxes = document.querySelectorAll('ino-checkbox');
    const checkedHandler = e => (e.target as Components.InoCheckbox).checked = (e as any).detail;
    checkboxes.forEach(c => addEventListener('checkedChange', checkedHandler));
    return checkboxes.forEach(c => removeEventListener('checkedChange', checkedHandler));
  })

  return html`
    <ino-table>
      <tr slot="header-row">
        <ino-table-header-cell label="Simple Text field">
          <ino-input placeholder="Search for XY..." data-ino-focus>
            <ino-icon slot="icon-trailing" icon="close"></ino-icon>
          </ino-input>
        </ino-table-header-cell>

        <ino-table-header-cell label="Only sortable"></ino-table-header-cell>

        <ino-table-header-cell label="Number field with max length">
          <ino-input placeholder="Search for XY..." data-ino-focus type="number" maxlength="10" helper-character-counter>
            <ino-icon slot="icon-trailing" icon="close" ></ino-icon>
          </ino-input>
        </ino-table-header-cell>

        <ino-table-header-cell label="Text already searched" searched>
          <ino-input placeholder="Search for XY..." data-ino-focus value="12345">
            <ino-icon slot="icon-trailing" icon="close" ></ino-icon>
          </ino-input>
        </ino-table-header-cell>
      </tr>
    </ino-table>
  `;
};

export const SearchWithDatepicker = () => {
  return html`
    <ino-table>
      <tr slot="header-row">
        <ino-table-header-cell label="Column Selection Search" search-icon="calendar" class="datepicker-cell">
          <div lang="de" class="datepicker-group">
            <aside>
              <ul>
                <li class="today">Heute</li>
                <li class="lastWeek">Letzte Woche</li>
                <li class="thisWeek">Diese Woche</li>
              </ul>
            </aside>
            <main id="main">
              <ino-datepicker type="date" label="An" inline date-format="d.m.Y" placeholder="tt.mm.jjjj" append-to="main" data-ino-focus></ino-datepicker>
              <ino-radio-group value="at">
                <ino-radio value="at">Am</ino-radio>
                <ino-radio value="after">Ab</ino-radio>
                <ino-radio value="before">Bis</ino-radio>
                <ino-radio value="range">Zeitraum</ino-radio>
              </ino-radio-group>
            </main>
          </div>
        </ino-table-header-cell>
      </tr>
    </ino-table>
  `;
};


export const SearchWithSelection = () => {
  useEffect(() => {
    const checkboxes = document.querySelectorAll('ino-checkbox');
    const checkedHandler = e => (e.target as Components.InoCheckbox).checked = (e as any).detail;
    checkboxes.forEach(c => addEventListener('checkedChange', checkedHandler));
    return () => checkboxes.forEach(c => removeEventListener('checkedChange', checkedHandler));
  })

  return html`
    <ino-table>
      <tr slot="header-row">
        <ino-table-header-cell label="Column Selection Search" search-icon="filter">
          <ino-list>
            <ino-list-item text="Option 1"><ino-checkbox slot="leading" selection></ino-checkbox></ino-list-item>
            <ino-list-item-divider inset></ino-list-item-divider>
            <ino-list-item text="Option 2"><ino-checkbox slot="leading" selection></ino-checkbox></ino-list-item>
            <ino-list-item-divider inset></ino-list-item-divider>
            <ino-list-item text="Option 3"><ino-checkbox slot="leading" selection></ino-checkbox></ino-list-item>
            <ino-list-item-divider inset></ino-list-item-divider>
            <ino-list-item text="Option 4"><ino-checkbox slot="leading" selection></ino-checkbox></ino-list-item>
            <ino-list-item-divider inset></ino-list-item-divider>
          </ino-list>
        </ino-table-header-cell>
      </tr>
    </ino-table>
  `;
};
