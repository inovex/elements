import { html } from 'lit-html';
import { decorateStoryWithClass, withIconControl } from '../utils';
import { Meta } from '@storybook/web-components';
import { useEffect } from '@storybook/client-api';
import { Components } from '@inovex.de/elements';
import { TemplateGenerator } from '../template-generator';
import './ino-table-header-cell.scss';
import { registerInlineDatepickerHandler } from '../ino-datepicker/utils';

export default {
  title: 'Structure/ino-table-header-cell',
  component: 'ino-table-header-cell',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-ino-table-header-cell'),
    (story) => {
      useEffect(() => {
        const sortChangeHandler = (e) => {
          const inoTable = e.target as Components.InoTable;
          const { columnId, sortDirection } = e.detail;
          inoTable.sortColumnId = columnId;
          inoTable.sortDirection = sortDirection;
        };
        document.addEventListener('sortChange', sortChangeHandler);

        const valueChangedHandler = (e) => (e.target.value = e.detail);
        const inoInputs = document.querySelectorAll('ino-input');
        inoInputs.forEach((el) =>
          el.addEventListener('valueChange', valueChangedHandler)
        );

        return () => {
          document.removeEventListener('sortChange', sortChangeHandler);
          inoInputs.forEach((el) =>
            el.removeEventListener('valueChange', valueChangedHandler)
          );
        };
      });
      return story();
    },
  ],
  args: {
    autofocus: false,
    notSortable: false,
    label: 'Label',
    columnId: '',
    sortDirection: '',
    searched: false,
    searchIcon: 'search',
  },
} as Meta;

const template = new TemplateGenerator<Components.InoTableHeaderCell>(
  'ino-table-header-cell',
  (args) => html`
    <ino-table>
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
  `
);

export const Playground = template.generatePlaygroundStory();

withIconControl(Playground, 'searchIcon', 'search');

export const Label = template.generateStoryForProp('label', 'Search for XY...');
export const SortDirection = template.generateStoryForProp(
  'sortDirection',
  'desc'
);
export const NotSortable = template.generateStoryForProp('notSortable', true);
export const SearchIcon = template.generateStoryForProp('searchIcon', 'search');
export const Searched = template.generateStoryForProp('searched', true);

const templateSearchWithDatepicker = new TemplateGenerator<
  Components.InoTableHeaderCell
>(
  'ino-table-header-cell',
  (args) => html`
    ${useEffect(registerInlineDatepickerHandler)}
    <ino-table>
      <tr slot="header-row">
        <ino-table-header-cell
          label="Column Selection Search"
          search-icon="calendar"
          class="datepicker-cell"
        >
          <div lang="de" class="datepicker-group">
            <aside>
              <ul>
                <li class="today">Today</li>
                <li class="lastWeek">last week</li>
                <li class="thisWeek">this week</li>
              </ul>
            </aside>
            <main id="main">
              <ino-datepicker
                type="date"
                label="An"
                inline
                date-format="d.m.Y"
                placeholder="tt.mm.jjjj"
                append-to="main"
                data-ino-focus
              ></ino-datepicker>
              <ino-radio-group value="at">
                <ino-radio value="at">At</ino-radio>
                <ino-radio value="after">After</ino-radio>
                <ino-radio value="before">Before</ino-radio>
                <ino-radio value="range">Range</ino-radio>
              </ino-radio-group>
            </main>
          </div>
        </ino-table-header-cell>
      </tr>
    </ino-table>
  `
);

/**
 * Use a `ino-datepicker` element inside of a `ino-table-header-cell` element to show a search with a datepicker on click
 */
export const SearchWithDatepicker = templateSearchWithDatepicker.generatePlaygroundStory();

const templateSearchWithSelection = new TemplateGenerator<
  Components.InoTableHeaderCell
>('ino-table-header-cell', (args) => {
  useEffect(() => {
    const checkboxes = document.querySelectorAll('ino-checkbox');
    const checkedHandler = (e) =>
      ((e.target as Components.InoCheckbox).checked = (e as any).detail);
    checkboxes.forEach((c) =>
      addEventListener('checkedChange', checkedHandler)
    );
    return () =>
      checkboxes.forEach((c) =>
        removeEventListener('checkedChange', checkedHandler)
      );
  });

  return html`
    <ino-table>
      <tr slot="header-row">
        <ino-table-header-cell
          label="Column Selection Search"
          search-icon="filter"
        >
          <ino-list>
            <ino-list-item text="Option 1">
              <ino-checkbox slot="leading" selection></ino-checkbox>
            </ino-list-item>
            <ino-list-item-divider inset></ino-list-item-divider>
            <ino-list-item text="Option 2">
              <ino-checkbox slot="leading" selection></ino-checkbox>
            </ino-list-item>
            <ino-list-item-divider inset></ino-list-item-divider>
            <ino-list-item text="Option 3">
              <ino-checkbox slot="leading" selection></ino-checkbox>
            </ino-list-item>
            <ino-list-item-divider inset></ino-list-item-divider>
            <ino-list-item text="Option 4">
              <ino-checkbox slot="leading" selection></ino-checkbox>
            </ino-list-item>
            <ino-list-item-divider inset></ino-list-item-divider>
          </ino-list>
        </ino-table-header-cell>
      </tr>
    </ino-table>
  `;
});

/**
 * Use a `ino-list` element inside of a `ino-table-header-cell` element to show a list selection on click
 */
export const SearchWithSelection = templateSearchWithSelection.generatePlaygroundStory();
