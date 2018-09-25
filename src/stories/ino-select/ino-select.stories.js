import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { boolean, number, select, text} from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-select/readme.md';
import './ino-select.scss';


storiesOf('<ino-select>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions(
    'change .customizable-select',
    'submit .form'
  ))
  .add('Default usage', () => {
    const optionsTemplate = /*html*/`
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
    `;
    
    return /*html*/`
      <div class="story-select">
        <ino-select class="customizable-select" 
          name="${text('name', 'select-1')}"
          ino-outline="${boolean('ino-outline', false)}"
          ino-label="${text('ino-label', 'Customizable select')}"
          ino-prepend-default="${boolean('ino-prepend-default', false)}"
        >
          ${optionsTemplate}
        </ino-select>

        <h4 class="outline">Outlined</h4>
        <ino-select ino-outline>
          ${optionsTemplate}
        </ino-select>

        <h4>Labels</h4>
        <ino-select>
          <option selected>No label</option>
          ${optionsTemplate}
        </ino-select>
        <ino-select ino-label="Floating label">
          <option value="">Diverse</option>
          ${optionsTemplate}
        </ino-select>

        <ino-select ino-label="Floating label outlined" ino-outline>
          ${optionsTemplate}
        </ino-select>

        <h4>States</h4>
        <ino-select disabled ino-label="Disabled select">
          ${optionsTemplate}
        </ino-select>
        <ino-select ino-label="Select with disabled option">
          ${optionsTemplate}
          <option disabled>Disabled option</option>
        </ino-select>

        <ino-select required ino-prepend-default ino-label="required select">
          ${optionsTemplate}
        </ino-select>

        <ino-select ino-prepend-default ino-label="With prepended empty option">
          ${optionsTemplate}
        </ino-select>
      </div>
    `;
  })
  .add('Forms', () => /*html*/`
    <div class="story-select">
      <h4>Required</h4>
      <p>The form should not submit since no option is selected and the select is required.</p>
      <form class="form" onSubmit="return false;">
          <ino-select ino-label="Form select" ino-prepend-default required></ino-select>
          <ino-button type="submit">Submit</ino-button>
      </form>
    </div>
  `);