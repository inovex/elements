import {storiesOf} from '@storybook/html';
import CoreEvents from '@storybook/core-events';

import moment from 'moment';

import {withActions} from '@storybook/addon-actions';
import {text, boolean} from '@storybook/addon-knobs';
import addons from '@storybook/addons';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-datepicker/readme.md';
import './ino-datepicker.scss';

let defaultDate = moment().add(1, 'days').format('YYYY-MM-DD');
const minDate = moment().subtract(5, 'days').format('YYYY-MM-DD HH:MM');
const maxDate = moment().add(5, 'days').format('YYYY-MM-DD HH:MM');

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-datepicker') {
      return;
    }

    e.target.setAttribute('value', e.detail);
  };

  document.addEventListener('valueChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('valueChange', eventHandler);
  };
};

storiesOf('<ino-datepicker>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions('valueChange .customizable-picker'))
  .addDecorator(story => {
    addons.getChannel().emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add('Default usage', () =>
    /*html*/`

    <div class="story-datepicker">
      <ino-datepicker class="customizable-picker"
        value="${text('value', defaultDate, 'DATE CONFIG')}"
        ino-label="${text('ino-label', 'Label', 'STANDARD')}"
        ino-outline="${boolean('ino-outline', false, 'STANDARD')}"
        min="${text('min', minDate, 'STANDARD')}"
        max="${text('max', maxDate, 'STANDARD')}"
        ino-pattern="${text('ino-pattern', '', 'STANDARD')}"
        disabled="${boolean('disabled', false, 'STANDARD')}"
        required="${boolean('required', false, 'STANDARD')}"
        ino-date-format="${text('ino-date-format', 'Y-m-d H:i', 'DATE CONFIG')}"
        ino-range="${boolean('ino-range', false, 'DATE CONFIG')}"
        ino-default-date="${text('ino-default-date', defaultDate, 'DATE CONFIG')}"
        ino-twelf-hour-time="${boolean('ino-twelf-hour-time', false, 'DATE CONFIG')}"
        ino-helper="${text('ino-helper', 'Helper message', 'HELPER TEXT')}"
        ino-helper-persistent="${boolean('ino-helper-persistent', false, 'HELPER TEXT')}"
        ino-helper-validation="${boolean('ino-helper-validation', false, 'HELPER TEXT')}"
        </ino-datepicker>
      </ino-datepicker>


      <h4>Formats</h4>
      <ino-datepicker ino-date-format="H:i d.m.Y" ino-label="Datetime"></ino-datepicker>
      <ino-datepicker ino-date-format="d.m.Y" ino-label="Date"></ino-datepicker>
      <ino-datepicker ino-date-format="H:i" ino-label="Time"></ino-datepicker>
      <ino-datepicker ino-date-format="d.m.Y" ino-range ino-label="Range"></ino-datepicker>

      <h4>Restrictions</h4>
      <ino-datepicker ino-label="Custom default date" ino-default-date="${defaultDate}" ino-date-format="Y-m-d"></ino-datepicker>
      <ino-datepicker ino-label="Min date" min="${minDate}"></ino-datepicker>
      <ino-datepicker ino-label="Max date" max="${maxDate}"></ino-datepicker>
      <ino-datepicker ino-label="Min and Max date" min="${minDate}" max="${maxDate}"></ino-datepicker>
      <ino-datepicker ino-label="hour step and minute step" hour-step="2" minute-step="5" ino-date-format="H:i"></ino-datepicker>
      <ino-datepicker ino-label="Default hour and minute" ino-date-format="H:i" ino-default-hour="14" ino-default-minute="49"></ino-datepicker>

      <h4>Variations</h4>
      <ino-datepicker ino-date-format="h:i K" ino-label="Twelf hour time" ino-twelf-hour-time></ino-datepicker>

      <h4>States</h4>
      <ino-datepicker ino-label="Pattern numbers from 1 - 6" ino-pattern="[1-6]+"></ino-datepicker>
      <ino-datepicker ino-label="Disabled" disabled></ino-datepicker>
      <ino-datepicker ino-label="Required" required></ino-datepicker>
    </div>
  `)
  .addDecorator(withActions('submit .form'))
  .add('Forms', () => /*html*/`
    <div class="story-datepicker">
      <h4>Required</h4>
      <p>The form should not submit as long as the date field is empty.</p>
      <form class="form" onSubmit="return false;">
        <ino-datepicker ino-label="Required" required></ino-datepicker>
        <ino-button type="submit">Submit</ino-button>
      </form>
    </div>
  `)
;
