import { storiesOf } from '@storybook/html';

import { boolean, text } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-form-row/readme.md';
import './ino-form-row.scss';



storiesOf('<ino-form-row>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-form-row">
      <div>
        <h4>Customizable Form Row</h4>
        <ino-form-row
          class="customizable-form-row"
          ino-label="${text('ino-label', 'inovex-elements')}"
          ino-mandatory="${boolean('ino-mandatory', true)}"
        >
          <ino-input></ino-input>
        </ino-form-row>
      </div>
    </div>
  `);
