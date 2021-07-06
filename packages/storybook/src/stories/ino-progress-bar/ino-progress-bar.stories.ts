import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import './ino-progress-bar.scss';
import { useEffect } from '@storybook/client-api';
import { Story } from '@storybook/web-components';

export default {
  title: 'Notification/ino-progress-bar',
  component: 'ino-progress-bar',
  decorators: [
    s => defaultDecorator(s, 'story-ino-progress-bar'),
    story => {
      const clickHandler = (e) => {
        if (e.target.tagName.toLowerCase() === 'ino-button') {
          const bar = document.querySelector('#example') as HTMLInoProgressBarElement;
          bar.progress = 0;
        }
      };

      const changeFileHandler = e => {
        console.log("changeFileHandler");
        const bar = document.querySelector('#example') as HTMLInoProgressBarElement;
        let totalFileSize = 0;
        let loaded = 0;
        const files = e.detail.files;

        if (files) {
          for (let i = 0; i < files.length; i++) {
            totalFileSize += files[i].size;
          }
          for (let i = 0; i < files.length; i++) {
            let reader = new FileReader();
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
        }
      });
      return story();
    }],
};

export const Playground: Story<Components.InoProgressBar>= (args) => {
  return html`
    <ino-progress-bar
      buffer="${args.buffer}"
      progress="${args.progress}"
      indeterminate="${args.indeterminate}"
      label="${args.label}"
    >
    </ino-progress-bar>
  `;
}
Playground.args = {
  buffer: 0.9,
  progress: 0.4,
  indeterminate: false,
  label: 'Progress Bar',
}
Playground.argTypes = {
  buffer: {
    control: { min: 0, max: 1, step: 0.1 }
  },
  progress: {
    control: { min: 0, max: 1, step: 0.1 }
  }
}

export const Variants = () => html`
  <h5>With buffering dots</h5>
  <ino-progress-bar buffer="0.8" progress="0.3"></ino-progress-bar>

  <h5>Without buffering dots</h5>
  <ino-progress-bar buffer="1" progress="0.3"></ino-progress-bar>

  <h5>Indeterminate progress bar</h5>
  <ino-progress-bar indeterminate></ino-progress-bar>
`;

export const UploadExample = () => html`
  <div class="progress-bar-example">
    <ino-progress-bar
      id="example"
      progress="0"
      buffer="1"
    >
    </ino-progress-bar>
    <ino-input-file label="Upload" multiple></ino-input-file>
  </div>
`;
