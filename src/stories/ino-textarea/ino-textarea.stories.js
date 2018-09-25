import { storiesOf } from '@storybook/html';

import { withActions } from '@storybook/addon-actions';
import { number, text, boolean } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-textarea/readme.md';
import './ino-textarea.scss';

storiesOf('<ino-textarea>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions('input .customizable-textarea'))
  .add('Default usage', () => /*html*/`
    <div class="story-textarea">
      <ino-textarea class="customizable-textarea"
        cols="${number('cols', 60)}"
        rows="${number('rows', 5)}"
        placeholder="${text('placeholder', '')}"
        value="${text('value', '')}"
        ino-label="${text('ino-label', 'Customizable textarea')}"
        minlength="${number('minlength', 0)}"
        maxlength="${number('maxlength', 30)}"
        disabled="${boolean('disabled', false)}"
        required="${boolean('required', false)}">
      </ino-textarea>

      <h4>Labels</h4>
      <ino-textarea ino-label="Floating label" cols="30" rows="3"></ino-textarea>
      <ino-textarea ino-label="Floating label" value="With value" cols="30" rows="3"></ino-textarea>

      <h4>States</h4>
      <ino-textarea placeholder="Disabled" disabled cols="30" rows="3"></ino-textarea>
      <ino-textarea placeholder="Required" required cols="30" rows="3"></ino-textarea>
    </div>
  `);