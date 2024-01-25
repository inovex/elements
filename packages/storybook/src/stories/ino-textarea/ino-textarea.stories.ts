import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-textarea.scss';

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
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-textarea'),
    (story) => {
      useEffect(() => {
        const eventHandler = (e) => e.target.setAttribute('value', e.detail);
        const textareas = document.querySelectorAll('ino-textarea');
        textareas.forEach((t) =>
          t.addEventListener('valueChange', eventHandler),
        );
        return () =>
          textareas.forEach((t) =>
            t.removeEventListener('valueChange', eventHandler),
          );
      });
      return story();
    },
  ],
  args: {
    autoFocus: false,
    autogrow: false,
    cols: 60,
    disabled: false,
    error: false,
    helperText: 'Helper message for text areax',
    helperTextPersistent: false,
    helperTextValidation: false,
    label: 'Label',
    minlength: 0,
    maxlength: 30,
    name: 'textarea',
    outline: true,
    placeholder: '',
    required: false,
    rows: 5,
    showCharacterCounter: false,
    showLabelHint: false,
    value: '',
  },
} as Meta<Components.InoTextarea>;

const template = new TemplateGenerator<Components.InoTextarea>(
  'ino-textarea',
  (args) => html`
    <ino-textarea
      class="customizable-textarea"
      autofocus="${args.autoFocus}"
      cols="${args.cols}"
      rows="${args.rows}"
      label="${args.label}"
      outline="${args.outline}"
      minlength="${args.minlength}"
      disabled="${args.disabled}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      autogrow="${args.autogrow}"
      helper-text="${args.helperText}"
      helper-text-persistent="${args.helperTextPersistent}"
      helper-text-validation="${args.helperTextValidation}"
      name="${args.name}"
      value="${args.value}"
      placeholder="${args.placeholder}"
    />
  `,
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
      helper-text="${args.helperText}"
      helper-text-persistent="${args.helperTextPersistent}"
      helper-text-validation="${args.helperTextValidation}"
      show-character-counter="${args.showCharacterCounter}"
      name="${args.name}"
      value="${args.value}"
      placeholder="${args.placeholder}"
      error="${args.error}"
    />
  `,
);
export const Playground = templateWithMaxLength.generatePlaygroundStory();
Playground.args = {
  showCharacterCounter: true,
  maxlength: 30,
};

const templateLabels = new TemplateGenerator<Components.InoTextarea>(
  'ino-textarea',
  (args) => html`
    <ino-textarea label="Floating label" cols="30" rows="3"></ino-textarea>
    <ino-textarea
      label="Floating label"
      value="With value"
      cols="30"
      rows="3"
    ></ino-textarea>
  `,
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
  true,
);
export const Autogrow = template.generateStoryForProp('autogrow', true);
export const CharacterCount = templateWithMaxLength.generateStoryForProp(
  'showCharacterCounter',
  true,
);

CharacterCount.args = {
  showCharacterCounter: true,
};
