import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-textarea.scss';
import { handleValueChange } from '../handler';

export default {
  title: 'Input/ino-textarea',
  component: 'ino-textarea',
  parameters: {
    actions: {
      handles: [
        'input .customizable-textarea',
        'valueChange .customizable-textarea',
      ],
    },
  },
  decorators: [(story) => decorateStoryWithClass(story, 'story-textarea')],
  args: {
    cols: 60,
    rows: 5,
    label: 'Label',
    minlength: 0,
    maxlength: 30,
    disabled: false,
    required: false,
    outline: true,
    showLabelHint: false,
    autogrow: false,
    showCharacterCounter: false,
  },
} as Meta<Components.InoTextarea>;

const template = new TemplateGenerator<Components.InoTextarea>(
  'ino-textarea',
  (args) => html`
    <ino-textarea
      class="customizable-textarea"
      cols="${args.cols}"
      rows="${args.rows}"
      label="${args.label}"
      outline="${args.outline}"
      minlength="${args.minlength}"
      disabled="${args.disabled}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      autogrow="${args.autogrow}"
      @valueChange="${handleValueChange}"
    ></ino-textarea>
  `
);

const templateWithMaxLength = new TemplateGenerator<Components.InoTextarea>(
  'ino-textarea',
  (args) => html`
    <ino-textarea
      class="customizable-textarea"
      cols="${args.cols}"
      rows="${args.rows}"
      label="${args.label}"
      outline="${args.outline}"
      minlength="${args.minlength}"
      maxlength="${args.maxlength}"
      disabled="${args.disabled}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      autogrow="${args.autogrow}"
      show-character-counter="${args.showCharacterCounter}"
      @valueChange="${handleValueChange}"
    ></ino-textarea>
  `
);
export const Playground = templateWithMaxLength.generatePlaygroundStory();

Playground.args = {
  showCharacterCounter: true,
  maxlength: 30,
};

const templateLabels = new TemplateGenerator<Components.InoTextarea>(
  'ino-textarea',
  () => html`
    <ino-textarea
      label="Floating label"
      cols="30"
      rows="3"
      @valueChange="${handleValueChange}"
    ></ino-textarea>
    <ino-textarea
      label="Floating label"
      value="With value"
      cols="30"
      rows="3"
      @valueChange="${handleValueChange}"
    ></ino-textarea>
  `
);
export const Labels = templateLabels.generateStoryForProp('label', '');

export const Disabled = template.generateStoryForProp('disabled', true);
export const Required = template.generateStoryForProp('required', true);

Required.args = {
  label: 'Label*',
  required: true,
};

export const Outline = template.generateStoryForProp('outline', true);
export const ShowLabelHint = template.generateStoryForProp(
  'showLabelHint',
  true
);
export const Autogrow = template.generateStoryForProp('autogrow', true);
export const CharacterCount = templateWithMaxLength.generateStoryForProp(
  'showCharacterCounter',
  true
);

CharacterCount.args = {
  showCharacterCounter: true,
};
