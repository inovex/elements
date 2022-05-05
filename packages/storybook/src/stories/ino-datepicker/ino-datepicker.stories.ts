import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import * as moment from 'moment';
import { decorateStoryWithClass } from '../utils';
import './ino-datepicker.scss';
import { registerInlineDatepickerHandler } from './utils';

const days = 5;
const defaultDate = moment().format('YYYY-MM-DD');
const minDate = moment().subtract(days, 'days').format('YYYY-MM-DD');
const maxDate = moment().add(days, 'days').format('YYYY-MM-DD');
export default {
  title: 'Input/ino-datepicker',
  component: 'ino-datepicker',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-picker', 'submit .form'],
    },
  },
  decorators: [
    story => decorateStoryWithClass(story, 'story-datepicker'),
    story => {
      useEffect(() => {
        const eventHandler = e => e.target.setAttribute('value', e.detail);
        document.addEventListener('valueChange', eventHandler);
        return () => document.removeEventListener('valueChange', eventHandler);
      });
      return story();
    },
  ],
} as Meta<Components.InoDatepicker>;

const template = new TemplateGenerator<Components.InoDatepicker>(
  'ino-datepicker',
  args => html`
    <ino-datepicker
      class="customizable-picker"
      attach-to-body="${args.attachToBody}"
      ,
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
    >
    </ino-datepicker>
  `
);

const templateFormats = new TemplateGenerator<Components.InoDatepicker>(
  'ino-datepicker',
  args => html`
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
  `
);

const templateRestrictions = new TemplateGenerator<Components.InoDatepicker>(
  'ino-datepicker',
  args => html`
    <ino-datepicker
      label="Predefined value"
      date-format="Y-m-d"
      value="${defaultDate}"
    ></ino-datepicker>
    <ino-datepicker
      label="Min date"
      date-format="Y-m-d"
      min="${minDate}"
    ></ino-datepicker>
    <ino-datepicker
      label="Max date"
      date-format="Y-m-d"
      max="${maxDate}"
    ></ino-datepicker>
    <ino-datepicker
      label="Min and Max date"
      date-format="Y-m-d"
      min="${minDate}"
      max="${maxDate}"
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
  `
);

const templateVariations = new TemplateGenerator<Components.InoDatepicker>(
  'ino-datepicker',
  args => html`
    <ino-datepicker
      type="time"
      date-format="h:i K"
      label="Twelve hour time"
      twelve-hour-time
    ></ino-datepicker>
  `
);

const templateStates = new TemplateGenerator<Components.InoDatepicker>(
  'ino-datepicker',
  args => html`
    <ino-datepicker label="Disabled" disabled></ino-datepicker>
    <ino-datepicker label="Required" required show-label-hint></ino-datepicker>
    <ino-datepicker label="Optional" show-label-hint></ino-datepicker>
  `
);

const templateInline = new TemplateGenerator<Components.InoDatepicker>(
  'ino-datepicker',
  args => html`
    <ino-datepicker
      style="width: 340px"
      label="Inline"
      inline="true"
    ></ino-datepicker>
  `
);

const templateLocale = new TemplateGenerator<Components.InoDatepicker>(
  'ino-datepicker',
  args => html`
    <ino-datepicker lang="en" label="English"></ino-datepicker>
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
  `
);

const templateMultipleTypes = new TemplateGenerator<Components.InoDatepicker>(
  'ino-datepicker',
  args => html`
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
  `
);

const templateRequiredForm = new TemplateGenerator<Components.InoDatepicker>(
  'ino-datepicker',
  args => html`
    <form>
      <ino-datepicker
        class="required-datepicker"
        label="Required"
        required
      ></ino-datepicker>
      <ino-button type="submit">Submit</ino-button>
    </form>
  `
);

export const Playground = template.generatePlaygroundStory();
export const Formats = templateFormats.generatePlaygroundStory();
export const Restrictions = templateRestrictions.generatePlaygroundStory();
export const Variations = templateVariations.generatePlaygroundStory();
export const States = templateStates.generatePlaygroundStory();
export const Inline = templateInline.generatePlaygroundStory();
export const Locale = templateLocale.generatePlaygroundStory();
export const MultipleTypes = templateMultipleTypes.generatePlaygroundStory();
/**
 * The form should not submit as long as the date field is empty
 */
export const RequiredForm = templateRequiredForm.generatePlaygroundStory();

Playground.args = {
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
};

Playground.argTypes = {
  type: {
    control: {
      type: 'select',
    },
    options: ['datetime', 'month', 'date', 'time'],
  },
};


