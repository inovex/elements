import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-progress-bar.scss';
import { TemplateGenerator } from '../template-generator';

export default {
  title: 'Notification/ino-progress-bar',
  component: 'ino-progress-bar',
  decorators: [
    (s) => decorateStoryWithClass(s, 'story-ino-progress-bar'),
    (story) => {
      const clickHandler = (e) => {
        if (e.target.tagName.toLowerCase() === 'ino-button') {
          const bar = document.querySelector(
            '#example'
          ) as HTMLInoProgressBarElement;
          bar.progress = 0;
        }
      };

      const changeFileHandler = (e) => {
        const bar = document.querySelector(
          '#example'
        ) as HTMLInoProgressBarElement;
        let totalFileSize = 0;
        let loaded = 0;
        const files = e.detail.files;

        if (files) {
          for (let i = 0; i < files.length; i++) {
            totalFileSize += files[i].size;
          }
          for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onloadend = (e) => {
              loaded += e.total;
            };
            reader.onprogress = (e) => {
              bar.progress = (loaded + e.loaded) / totalFileSize;
            };
            reader.readAsDataURL(files[i]);
          }
        }
      };
      useEffect(() => {
        document.addEventListener('click', clickHandler);
        document.addEventListener('changeFile', changeFileHandler);

        return () => {
          document.removeEventListener('click', clickHandler);
          document.removeEventListener('changeFile', changeFileHandler);
        };
      });
      return story();
    },
  ],
  argTypes: {
    buffer: {
      control: { min: 0, max: 1, step: 0.1 },
    },
    progress: {
      control: { min: 0, max: 1, step: 0.1 },
    },
  },
  args: {
    buffer: 0.9,
    progress: 0.4,
    indeterminate: false,
    label: 'Progress Bar',
  },
} as Meta;

const template = new TemplateGenerator<Components.InoProgressBar>(
  'ino-progress-bar',
  args => html`
  <ino-progress-bar
      buffer="${args.buffer}"
      progress="${args.progress}"
      indeterminate="${args.indeterminate}"
      label="${args.label}"
  >
  </ino-progress-bar>
`);

export const Playground = template.generatePlaygroundStory();
export const Buffer = template.generateStoryForProp('buffer', 0.5);
export const Indeterminate = template.generateStoryForProp('indeterminate', true);
export const Progress = template.generateStoryForProp('progress', 0.5, {
  buffer: 1,
});

const templateUploadExample = new TemplateGenerator<Components.InoProgressBar>(
  'ino-progress-bar',
  args => html`
  <div class="progress-bar-example">
    <ino-progress-bar id="example" progress="0" buffer="1"> </ino-progress-bar>
    <ino-input-file label="Upload" multiple></ino-input-file>
  </div>
`);

export const UploadExample = templateUploadExample.generatePlaygroundStory();
