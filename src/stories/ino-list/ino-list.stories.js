import { storiesOf } from '@storybook/html';
import { boolean, select, text } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import listReadme from '../../components/ino-list/readme.md';
import listItemReadme from '../../components/ino-list-item/readme.md';
import listDividerReadme from '../../components/ino-list-divider/readme.md';

import ICONS from '../../components/ino-icon/icons';

import './ino-list.scss';

storiesOf('<ino-list>', module)
  .addDecorator(withStencilReadme(listReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-list">
      <h4>Customizable List</h4>
      <ino-list ino-dense="${boolean('ino-dense', false)}">
        <ino-list-item ino-text="First text item"></ino-list-item>
        <ino-list-item ino-text="Second text item"></ino-list-item>
        <ino-list-item ino-text="Third text item"></ino-list-item>
      </ino-list>

      <h4>Two lines</h4>
      <ino-list ino-two-lines>
        <ino-list-item ino-text="First text item" ino-secondary-text="Secondary"></ino-list-item>
        <ino-list-item ino-text="Second text item" ino-secondary-text="Secondary"></ino-list-item>
        <ino-list-item ino-text="Third text item" ino-secondary-text="Secondary"></ino-list-item>
      </ino-list>

      <h4>Densed</h4>
      <ino-list ino-dense class="first-densed-list">
        <ino-list-item ino-text="First text item"></ino-list-item>
        <ino-list-item ino-text="Second text item"></ino-list-item>
        <ino-list-item ino-text="Third text item"></ino-list-item>
      </ino-list>
      <ino-list ino-dense ino-two-lines>
        <ino-list-item ino-text="First text item" ino-secondary-text="Secondary"></ino-list-item>
        <ino-list-item ino-text="Second text item" ino-secondary-text="Secondary"></ino-list-item>
        <ino-list-item ino-text="Third text item" ino-secondary-text="Secondary"></ino-list-item>
      </ino-list>
    </div>
  `)

storiesOf('<ino-list>', module)
  .addDecorator(withStencilReadme(listItemReadme))
  .add('List item', () => /*html*/`
    <div class="story-list">
      <h4>Customizable list item</h4> 
      <ino-list ino-two-lines="${boolean('ino-two-lines (on ino-list)', true)}">
        <ino-list-item
          ino-secondary-text="${text('ino-secondary-text', 'Second line text')}"
          ino-leading-icon="${select('ino-leading-icon', ICONS, 'star')}"
          ino-selected="${boolean('ino-selected', false)}"
          ino-activated="${boolean('ino-activated', false)}"
          ino-text="${text('ino-text', 'List item')}">
        </ino-list-item>
      </ino-list>

      <h4>States</h4>
      <ino-list>
        <ino-list-item ino-text="Simple item"></ino-list-item>
        <ino-list-item ino-selected ino-text="Selected item"></ino-list-item>
        <ino-list-item ino-selected ino-text="Selected item 2"></ino-list-item>
        <ino-list-item ino-text="Simple item 2"></ino-list-item>
        <ino-list-item ino-activated ino-text="Activated item"></ino-list-item>
      </ino-list>
    </div>
  `);

storiesOf('<ino-list>', module)
  .addDecorator(withStencilReadme(listDividerReadme))
  .add('List divider', () => /*html*/`
    <div class="story-list">
      <h4>Divider to seperate list items</h4>
      <ino-list>
        <ino-list-item ino-text="Item 1"></ino-list-item>
        <ino-list-item ino-text="Item 2"></ino-list-item>
        <ino-list-divider></ino-list-divider>
        <ino-list-item ino-text="Item 3"></ino-list-item>
      </ino-list>

      <h4>Divider to separate two lists</h4>
      <ino-list class="divider-two-lists">
        <ino-list-item ino-text="List 1 - item 1"></ino-list-item>
        <ino-list-item ino-text="List 1 - item 2"></ino-list-item>
        <ino-list-item ino-text="List 1 - item 3"></ino-list-item>
      </ino-list>
      <ino-list-divider ino-between-lists></ino-list-divider>
      <ino-list class="divider-two-lists">
        <ino-list-item ino-text="List 2 - item 1"></ino-list-item>
        <ino-list-item ino-text="List 2 - item 2"></ino-list-item>
        <ino-list-item ino-text="List 2 - item 3"></ino-list-item>
      </ino-list>

      <h4>Inset divider</h4>
      <ino-list>
        <ino-list-item ino-leading-icon="favorite" ino-text="Add to favorites"></ino-list-item>
        <ino-list-divider ino-inset></ino-list-divider>
        <ino-list-item ino-leading-icon="star" ino-text="Star it!"></ino-list-item>
      </ino-list>
    </div>
  `);
