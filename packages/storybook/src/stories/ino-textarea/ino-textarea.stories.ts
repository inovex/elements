import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { cssColor, decorateStoryWithClass, setArgs } from '../utils';
import { CssProperties } from '../types';

import './ino-textarea.scss';

const TEXTAREA_CSS_PROPS: CssProperties = {
  outlineColor: cssColor(
    '--ino-textarea-outline-color',
    'Outline color of the textarea.',
    '#4655ff',
  ),
  caretColor: cssColor(
    '--ino-textarea-caret-color',
    'Color of the caret.',
    '#4655ff',
  ),
  labelColor: cssColor(
    '--ino-textarea-label-color',
    'Color of the label.',
    '#4655ff',
  ),
};

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
    ></ino-textarea>
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
      show-character-counter="${args.showCharacterCounter}"
    ></ino-textarea>
  `,
);
export const Playground =
  templateWithMaxLength.generatePlaygroundStory(TEXTAREA_CSS_PROPS);
setArgs(Playground, {
  showCharacterCounter: true,
  maxlength: 30,
});

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
