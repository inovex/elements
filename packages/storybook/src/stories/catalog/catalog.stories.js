import { storiesOf } from '@storybook/html';
import './catalog.scss'

storiesOf('Docs|Showcase', module)
  .add('Catalog', () => `
    <div class="catalog">
      <h2>Buttons</h2>
      <div class="catalog-grid">
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
                <ino-button slot="content">Button</ino-button>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-button</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
                <ino-chip-set ino-type="choice">
                  <ino-chip ino-label="No" ino-selected ino-value="0"></ino-chip>
                  <ino-chip ino-label="Yes" ino-value="1"></ino-chip>
                </ino-chip-set>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-chip-set</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-fab ino-label="none" ino-icon="add" ino-edge-position="none"></ino-fab>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-fab</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-icon-button ino-icon="star" ino-color-scheme="primary"></ino-icon-button>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-icon-button</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-segment-group id="segment-grp">
                <ino-segment-button value="1">No</ino-segment-button>
                <ino-segment-button value="2">Yes</ino-segment-button>
              </ino-segment-group>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-segment-group</h3>
            </div>
          </ino-card>
        </a>
      </div>

      <h2>Structure</h2>
      <div class="catalog-grid">
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-card style="width: 150px">
                <div slot="header">
                    <ino-icon ino-icon="info" ino-clickable></ino-icon>
                </div>
                <div slot="content" class="card-content" style="height: unset"><h3>Content</h3></div>
              </ino-card>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-card</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-dialog</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-header ino-title="Section"></ino-header>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-header</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-list ino-dense style="border: 1px solid rgba(0, 0, 0, 0.15);">
                <ino-list-item ino-text="First text item"></ino-list-item>
                <ino-list-item ino-text="Second text item"></ino-list-item>
              </ino-list>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-list</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-menu</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-nav-drawer</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-sidebar</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
             <ino-tab-bar>
                <ino-tab
                        ino-label="Label 1"
                        ino-icon="info"
                        ino-indicator-content-width="true">
                </ino-tab>
              </ino-tab-bar>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-tab-bar</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
                <ino-table>
                  <ino-table-row slot="header" ino-header-row>
                      <ino-table-cell>ID</ino-table-cell>
                      <ino-table-cell>Header A</ino-table-cell>
                  </ino-table-row>
                  <ino-table-row>
                      <ino-table-cell ino-numeric>1</ino-table-cell>
                      <ino-table-cell>Cell B1</ino-table-cell>
                  </ino-table-row>
                </ino-table>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-table</h3>
            </div>
          </ino-card>
        </a>
        </div>

        <h2>Input</h2>
        <div class="catalog-grid">
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-checkbox checked style="width: 50%">Checked</ino-checkbox>
              <ino-checkbox style="width: 50%">Unchecked</ino-checkbox>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-checkbox</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-datepicker ino-type="datetime" ino-date-format="H:i d.m.Y" ino-label="Datetime" disabled></ino-datepicker>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-datepicker</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-form-row
                ino-label="First Name"
              >
                  <ino-input></ino-input>
              </ino-form-row>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-form-row</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-input placeholder="Email"></ino-input>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-input</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-radio-group id="radio-grp">
                <ino-radio value="1">No</ino-radio>
                <ino-radio value="2">Yes</ino-radio>
              </ino-radio-group>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-radio-group</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-range ino-color-scheme="primary" value="40" min="0" max="100" step="20" ino-discrete ino-markers style="width: 80%"></ino-range>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-range</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-select ino-label="Select Option">
                  <ino-option value="Selected Option" selected>Selected Option</ino-option>
              </ino-select>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-select</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-switch checked></ino-switch>
              <ino-switch></ino-switch>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-switch</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-textarea ino-label="Feedback" cols="30" rows="2"></ino-textarea>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-textarea</h3>
            </div>
          </ino-card>
        </a>
        </div>

        <h2>Graphic</h2>
        <div class="catalog-grid">
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-icon ino-icon="chat" style="--icon-height: 30px; --icon-width: 30px;"></ino-icon>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-icon</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-img-list</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-img
                  src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
                  ino-rounded
                  width="90"
                  height="90"
              ></ino-img>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-img</h3>
            </div>
          </ino-card>
        </a>
        </div>

        <h2>Notification</h2>
        <div class="catalog-grid">
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-button id="popover-hover-focus">Popover Demo</ino-button>
              <ino-popover ino-for="popover-hover-focus">Click for further information</ino-popover>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-popover</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-progress-bar ino-buffer="0.8" ino-progress="0.3" style="width: 80%"></ino-progress-bar>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-progress-bar</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">

            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-snackbar</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-spinner ino-type="tile"></ino-spinner>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-spinner</h3>
            </div>
          </ino-card>
        </a>
        <a href="?path=/story/buttons-ino-button--default-usage">
          <ino-card>
            <div class="card-content" slot="content">
              <ino-button id="primary-tooltip" ino-color-scheme="primary">Tooltip</ino-button>
              <ino-tooltip ino-for="primary-tooltip" ino-label="Click for further information" ino-color-scheme="primary" ino-placement="top"></ino-tooltip>
            </div>
            <div class="card-footer" slot="footer">
                <h3>ino-tooltip</h3>
            </div>
          </ino-card>
        </a>
        </div>
      </div>
    </div>
  `);
