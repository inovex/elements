import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';

const InoInputFileMeta = {
  title: 'Input/ino-input-file',
  component: 'ino-input-file',
  decorators: [
    (story) => {
      useEffect(() => {
        const eventHandler = function (e) {
          e.stopImmediatePropagation();
          const el = e.target as HTMLInoInputFileElement;
          if (el.tagName.toLowerCase() !== 'ino-input-file') {
            return;
          }

          const fileNames: string[] = e.detail.files.map((f: File) =>
            [f.name, f.type, f.size + ' bytes'].join(', '),
          );

          const container = document.createElement('div');
          container.classList.add('file-list');
          fileNames.forEach((fileName) => {
            container.append(fileName, document.createElement('br'));
          });

          el.parentElement.querySelector('.file-list')?.remove();
          el.parentElement.append(container);
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
  render: (args) => html`
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
  `,
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

export default InoInputFileMeta;

export const Default = Story({
  ...InoInputFileMeta,
});

export const Accept = Story({
  ...Default,
  docsFromProperty: 'accept',
  args: {
    accept: 'png',
  },
});

export const AutoFocus = Story({
  ...Default,
  docsFromProperty: 'autoFocus',
  args: {
    autoFocus: true,
  },
});

export const Disabled = Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  },
});

export const Required = Story({
  ...Default,
  docsFromProperty: 'required',
  args: {
    required: true,
  },
});

export const Label = Story({
  ...Default,
  docsFromProperty: 'label',
  args: {
    label: 'upload a file here',
  },
});

export const Multiple = Story({
  ...Default,
  docsFromProperty: 'multiple',
  args: {
    multiple: true,
  },
});

export const DragAndDrop = Story({
  ...Default,
  docsFromProperty: 'dragAndDrop',
  args: {
    dragAndDrop: true,
  },
});

export const DragAndDropText = Story({
  ...Default,
  docsFromProperty: 'dragAndDropText',
  args: {
    dragAndDrop: true,
    dragAndDropText: 'click and drag here',
  },
});

export const DragAndDropSecondaryText = Story({
  ...Default,
  docsFromProperty: 'dragAndDropSecondaryText',
  args: {
    dragAndDrop: true,
    dragAndDropText: 'click and drag here',
    dragAndDropSecondaryText: 'or click the button below',
  },
});
