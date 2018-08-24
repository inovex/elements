import { storiesOf } from '@storybook/vue';

import { boolean, text } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-form-row/readme.md';
import './ino-form-row.scss';



storiesOf('<ino-form-row>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-form-row">
        <div>
          <h4>Customizable Form Row</h4>
          <ino-form-row
            class="customizable-form-row"
            ino-label={text('ino-label', 'inovex-elements')}
            ino-mandatory={boolean('ino-mandatory', true)}
          >
            <ino-input></ino-input>
          </ino-form-row>
        </div>
      </div>
    )
  }));
