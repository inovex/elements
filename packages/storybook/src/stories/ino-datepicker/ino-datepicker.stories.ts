import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import moment from 'moment';
import { registerInlineDatepickerHandler } from './utils';
import './ino-datepicker.scss';

const days = 5;
const defaultDate = moment().format('YYYY-MM-DD');
const minDate = moment().subtract(days, 'days').format('YYYY-MM-DD');
const maxDate = moment().add(days, 'days').format('YYYY-MM-DD');

const InoDatepickerMeta = {
  title: 'Input/ino-datepicker',
  component: 'ino-datepicker',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-picker', 'submit .form'],
    },
  },
  decorators: [
    (story) => {
      useEffect(() => {
        const eventHandler = (e: any) =>
          e.target.setAttribute('value', e.detail);
        document.addEventListener('valueChange', eventHandler);
        return () => document.removeEventListener('valueChange', eventHandler);
      });
      return story();
    },
  ],
  render: (args) => html`
    <ino-datepicker
      class="customizable-picker"
      attach-to-body="${args.attachToBody}"
      disabled="${args.disabled}"
      date-format="${args.dateFormat}"
      helper="${args.helper}"
      inline="${args.inline}"
      helper-persistent="${args.helperPersistent}"
      helper-validation="${args.helperValidation}"
      label="${args.label}"
      min="${args.min}"
      max="${args.max}"
      outline="${args.outline}"
      range="${args.range}"
      required="${args.required}"
      error="${args.error}"
      show-label-hint="${args.showLabelHint}"
      twelve-hour-time="${args.twelveHourTime}"
      type="${args.type}"
      value="${args.value}"
    ></ino-datepicker>
  `,
  args: {
    attachToBody: true,
    disabled: false,
    dateFormat: 'Y-m-d',
    helper: 'Helper text to describe the input',
    helperPersistent: false,
    helperValidation: false,
    inline: false,
    label: 'Label',
    min: minDate,
    max: maxDate,
    outline: false,
    range: false,
    required: false,
    error: false,
    showLabelHint: false,
    twelveHourTime: false,
    type: 'date',
    value: defaultDate,
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['datetime', 'month', 'date', 'time'],
    },
  },
} as Meta<Components.InoDatepicker>;

export default InoDatepickerMeta;

export const Default = Story({
  ...InoDatepickerMeta,
});

export const DateFormats = Story({
  ...Default,
  docsFromProperty: 'dateFormat',
  render: () => html`
    <ino-datepicker
      type="datetime"
      date-format="H:i d.m.Y"
      label="Datetime"
    ></ino-datepicker>
    <ino-datepicker
      type="date"
      date-format="d.m.Y"
      label="Date"
    ></ino-datepicker>
    <ino-datepicker type="time" date-format="H:i" label="Time"></ino-datepicker>
    <ino-datepicker date-format="d.m.Y" range label="Range"></ino-datepicker>
    <ino-datepicker
      date-format="m.Y"
      type="month"
      label="Month"
    ></ino-datepicker>
  `,
  args: {
    dateFormat: '',
  },
});

export const TwelveHourTime = Story({
  ...Default,
  docsFromProperty: 'twelveHourTime',
  render: () => html`
    <ino-datepicker
      type="time"
      date-format="h:i K"
      label="Twelve hour time"
      twelve-hour-time
    ></ino-datepicker>
  `,
  args: {
    twelveHourTime: true,
  },
});

/**
 * Various restrictions like the ones shown
 * can be achieved by setting the properties `min`, `max`, `value`, `hour-step`, `minute-step`, `default-hour` or `default-minute` values.
 *
 * - `min`: The minimum date that a user can start picking from (inclusive).
 *
 * - `max`: The maximum date that a user can pick to (inclusive).
 *
 * - `value`: The currently selected date shown in the input field **unmanaged**. The given value will not be formatted as date.
 *
 * - `hour-step`: Adjusts the step for the hour input (incl. scrolling) Default is 1
 *
 * - `minute-step`: Adjusts the step for the minute input (incl. scrolling) Default is 5
 *
 * - `default-hour`: A number containing the initial hour in the date-time picker overlay. If a `value` is given, this will be ignored.
 *
 * - `default-minute`: A number containing the initial minute in the date-time picker overlay. If a `value` is given, this will be ignored.
 */
export const Restrictions = Story({
  ...Default,
  render: (args) => html`
    <ino-datepicker
      label="Predefined value"
      date-format="Y-m-d"
      value="${args.value}"
    ></ino-datepicker>
    <ino-datepicker
      label="Min date"
      date-format="Y-m-d"
      min="${args.min}"
    ></ino-datepicker>
    <ino-datepicker
      label="Max date"
      date-format="Y-m-d"
      max="${args.max}"
    ></ino-datepicker>
    <ino-datepicker
      label="Min and Max date"
      date-format="Y-m-d"
      min="${args.min}"
      max="${args.max}"
    ></ino-datepicker>
    <ino-datepicker
      type="time"
      label="hour step and minute step"
      hour-step="2"
      minute-step="5"
      date-format="H:i"
    ></ino-datepicker>
    <ino-datepicker
      type="time"
      label="Default hour and minute"
      date-format="H:i"
      default-hour="14"
      default-minute="49"
    ></ino-datepicker>
  `,
});

/**
 * Different states are achived by setting the properties `disabled`, `required` or `show-label-hint`.
 *
 * - `disabled`: Disables this element.
 *
 * - `required`: Marks this element as required.
 *
 * - `show-label-hint`: If true, an *optional* message is displayed if not required, otherwise a * marker is displayed if required.
 */
export const States = Story({
  ...Default,
  render: () => html`
    <ino-datepicker label="Disabled" disabled></ino-datepicker>
    <ino-datepicker label="Required" required show-label-hint></ino-datepicker>
    <ino-datepicker label="Optional" show-label-hint></ino-datepicker>
  `,
});

export const Inline = Story({
  ...Default,
  docsFromProperty: 'inline',
  render: () => html`
    <ino-datepicker
      style="width: 340px"
      label="Inline"
      inline="true"
    ></ino-datepicker>
  `,
  args: {
    inline: true,
  },
});

/**
 * The language of the ino-datepicker can by set by `lang`
 */
export const Locale = Story({
  ...Default,
  render: () => html`
    <ino-datepicker lang="en" label="English"> </ino-datepicker>
    <ino-datepicker
      lang="de"
      date-format="d.m.Y"
      label="German"
    ></ino-datepicker>
    <ino-datepicker
      lang="de"
      date-format="d.m.Y"
      range
      label="German range"
    ></ino-datepicker>
  `,
});

export const MultipleTypes = Story({
  ...Default,
  render: () => html`
    ${useEffect(registerInlineDatepickerHandler)}
    <div lang="de" class="datepicker-group">
      <aside>
        <ul>
          <li class="today">Heute</li>
          <li class="lastWeek">Letzte Woche</li>
          <li class="thisWeek">Diese Woche</li>
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
        >
        </ino-datepicker>
        <ino-radio-group value="at">
          <ino-radio value="at">Am</ino-radio>
          <ino-radio value="after">Ab</ino-radio>
          <ino-radio value="before">Bis</ino-radio>
          <ino-radio value="range">Zeitraum</ino-radio>
        </ino-radio-group>
      </main>
    </div>
  `,
});

/**
 * The form should not submit as long as the date field is empty
 */
export const RequiredForm = Story({
  ...Default,
  render: () => html`
    <form>
      <ino-datepicker
        class="required-datepicker"
        label="Required"
        required
      ></ino-datepicker>
      <ino-button type="submit">Submit</ino-button>
    </form>
  `,
});
