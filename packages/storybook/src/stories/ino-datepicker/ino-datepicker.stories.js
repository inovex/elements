import moment from 'moment';
import { boolean, select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-datepicker/readme.md';
import './ino-datepicker.scss';

const dateFormat = 'HH:mm DD.MM.YYYY';

let defaultDate = moment().format(dateFormat);
const minDate = moment().subtract(5, 'days').format(dateFormat);
const maxDate = moment().add(5, 'days').format(dateFormat);

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
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
}

export default {
  title: 'Input/<ino-datepicker>',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-picker', 'submit .form'],
    },
  },
  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /*html*/ `

    <div class="story-datepicker">
      <ino-datepicker class="customizable-picker"
        value="${text('value', defaultDate, 'DATE CONFIG')}"
        ino-type="${select(
          'ino-type',
          ['datetime', 'month', 'date', 'time'],
          'datetime',
          'STANDARD'
        )}"
        ino-label="${text('ino-label', 'Label', 'STANDARD')}"
        ino-outline="${boolean('ino-outline', false, 'STANDARD')}"
        min="${text('min', minDate, 'STANDARD')}"
        max="${text('max', maxDate, 'STANDARD')}"
        disabled="${boolean('disabled', false, 'STANDARD')}"
        required="${boolean('required', false, 'STANDARD')}"
        ino-show-label-hint="${boolean(
          'ino-show-label-hint',
          false,
          'STANDARD'
        )}"
        ino-date-format="${text('ino-date-format', 'H:i d.m.Y', 'DATE CONFIG')}"
        ino-range="${boolean('ino-range', false, 'DATE CONFIG')}"
        ino-default-date="${text(
          'ino-default-date',
          defaultDate,
          'DATE CONFIG'
        )}"
        ino-twelve-hour-time="${boolean(
          'ino-twelve-hour-time',
          false,
          'DATE CONFIG'
        )}"
        ino-helper="${text('ino-helper', 'Helper message', 'HELPER TEXT')}"
        ino-helper-persistent="${boolean(
          'ino-helper-persistent',
          false,
          'HELPER TEXT'
        )}"
        ino-helper-validation="${boolean(
          'ino-helper-validation',
          false,
          'HELPER TEXT'
        )}"
       >
      </ino-datepicker>


      <h4>Formats</h4>
      <ino-datepicker ino-type="datetime" ino-date-format="H:i d.m.Y" ino-label="Datetime"></ino-datepicker>
      <ino-datepicker ino-type="date" ino-date-format="d.m.Y" ino-label="Date"></ino-datepicker>
      <ino-datepicker ino-type="time" ino-date-format="H:i" ino-label="Time"></ino-datepicker>
      <ino-datepicker ino-date-format="d.m.Y" ino-range ino-label="Range"></ino-datepicker>
      <ino-datepicker ino-type="month" ino-label="Month"></ino-datepicker>

      <h4>Restrictions</h4>
      <ino-datepicker ino-label="Custom default date" ino-date-format="H:i d.m.Y" ino-default-date="${defaultDate}"></ino-datepicker>
      <ino-datepicker ino-label="Min date" ino-date-format="H:i d.m.Y" min="${minDate}"></ino-datepicker>
      <ino-datepicker ino-label="Max date" ino-date-format="H:i d.m.Y" max="${maxDate}"></ino-datepicker>
      <ino-datepicker ino-label="Min and Max date" ino-date-format="H:i d.m.Y" min="${minDate}" max="${maxDate}"></ino-datepicker>
      <ino-datepicker ino-type="time" ino-label="hour step and minute step" hour-step="2" minute-step="5" ino-date-format="H:i"></ino-datepicker>
      <ino-datepicker ino-type="time" ino-label="Default hour and minute" ino-date-format="H:i" ino-default-hour="14" ino-default-minute="49"></ino-datepicker>

      <h4>Variations</h4>
      <ino-datepicker ino-type="time" ino-date-format="h:i K" ino-label="Twelve hour time" ino-twelve-hour-time></ino-datepicker>

      <h4>States</h4>
      <ino-datepicker ino-label="Disabled" value="${defaultDate}" disabled></ino-datepicker>
      <ino-datepicker ino-label="Required" required ino-show-label-hint></ino-datepicker>
      <ino-datepicker ino-label="Optional" ino-show-label-hint></ino-datepicker>

      <h4>Locale (Using the native <code>lang</code>-Attribute)</h4>
      <ino-datepicker lang="en" ino-label="English"></ino-datepicker>
      <ino-datepicker lang="de" ino-date-format="d.m.Y" ino-label="German"></ino-datepicker>
      <ino-datepicker lang="de" ino-date-format="d.m.Y" ino-range ino-label="German range"></ino-datepicker>
    </div>
  `;

export const Forms = () => /*html*/ `
    <div class="story-datepicker">
      <h4>Required</h4>
      <p>The form should not submit as long as the date field is empty.</p>
      <form class="form" onSubmit="return false;">
        <ino-datepicker ino-label="Required" required></ino-datepicker>
        <ino-button type="submit">Submit</ino-button>
      </form>
    </div>
  `;
