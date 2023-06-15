import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';

export default {
  title: 'Input/ino-input-file',
  component: 'ino-input-file',
  decorators: [
    (story) => {
      useEffect(() => {
        const eventHandler = function (e) {
          e.stopImmediatePropagation();
          const el = e.target;
          if (el.tagName.toLowerCase() !== 'ino-input-file') {
            return;
          }

          const fileNames = e.detail.files
            .map((f) => [f.name, f.type, f.size + ' bytes'].join(', '))
            .join('\n');
          alert(fileNames);
        };

        document.addEventListener('changeFile', eventHandler);
        return () => document.removeEventListener('changeFile', eventHandler);
      });
      return story();
    },
  ],
  parameters: {
    actions: {
      handles: ['changeFile .customizable-input'],
    },
  },
  args: {
    accept: '',
    autoFocus: false,
    disabled: false,
    multiple: false,
    required: false,
    label: 'Select a file to upload',
    dragAndDrop: false,
    dragAndDropText: 'Drag your files here',
    dragAndDropSecondaryText: 'or',
  },
} as Meta<Components.InoInputFile>;

const template = new TemplateGenerator<Components.InoInputFile>(
  'ino-input-file',
  (args) => html`
    <ino-input-file
      class="customizable-input"
      accept="${args.accept}"
      autoFocus="${args.autoFocus}"
      disabled="${args.disabled}"
      multiple="${args.multiple}"
      required="${args.required}"
      label="${args.label}"
      drag-and-drop="${args.dragAndDrop}"
      drag-and-drop-text="${args.dragAndDropText}"
      drag-and-drop-secondary-text="${args.dragAndDropSecondaryText}"
    ></ino-input-file>
  `
);
export const Playground = template.generatePlaygroundStory();
export const DragAndDrop = template.generateStoryForProp('dragAndDrop', true);
