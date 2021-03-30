import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import './ino-option.scss';

export default {
  title: 'Components (WIP)/ino-option',
  component: 'ino-option',
  decorators: [defaultDecorator],
};

export const Playground = (args) => html`
  <div class="story-option">
    <ino-select label="Customizable option">
      <ino-option
        class="customizable-option"
        disabled="${args.disabled}"
        value="${args.value}"
      >
        Content
      </ino-option>
      <ino-option
          class="customizable-option"
          disabled="${args.disabled}"
          value="${args.value}"
      >
        Content
      </ino-option>
    </ino-select>
  </div>
`;
Playground.args = {
  disabled: false,
  value: 'Content',
}

export const States = () => html`
  <div class="story-option">
    <ino-select label="Disabled option">
      <ino-option value="Content" disabled>Content</ino-option>
    </ino-select>

    <ino-select label="Selected option">
      <ino-option value="Content" selected>Content</ino-option>
    </ino-select>
  </div>
`;

// export const SelectOptions = () => /*html*/ `
//     <style>
//         ino-option.customizable-option {
//           --ino-option-selected-background-color: ${text(
//             '--ino-option-selected-background-color',
//             'rgba(61, 64, 245, 0.05)',
//             'Custom Properties'
//           )};
//           --ino-option-selected-background-color-hover: ${text(
//             '--ino-option-selected-background-color-hover',
//             'rgba(61, 64, 245, 0.1)',
//             'Custom Properties'
//           )};
//           --ino-option-selected-background-color-focus: ${text(
//             '--ino-option-selected-background-color-focus',
//             'rgba(61, 64, 245, 0.15)',
//             'Custom Properties'
//           )};
//           --ino-option-selected-background-color-active: ${text(
//             '--ino-option-selected-background-color-active',
//             'rgba(61, 64, 245, 0.3)',
//             'Custom Properties'
//           )};
//           --ino-option-deselected-background-color: ${text(
//             '--ino-option-deselected-background-color',
//             '',
//             'Custom Properties'
//           )};
//           --ino-option-deselected-background-color-hover: ${text(
//             '--ino-option-deselected-background-color-hover',
//             '',
//             'Custom Properties'
//           )};
//           --ino-option-deselected-background-color-focus: ${text(
//             '--ino-option-deselected-background-color-focus',
//             '',
//             'Custom Properties'
//           )};
//           --ino-option-deselected-background-color-active: ${text(
//             '--ino-option-deselected-background-color-active',
//             '',
//             'Custom Properties'
//           )};
//         }
//     </style>
