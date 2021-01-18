import componentReadme from '_local-elements/src/components/ino-progress-bar/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import './ino-progress-bar.scss';
import { boolean, number, text } from '@storybook/addon-knobs';

function subscribeToComponentEvents() {
  // == event block

  const handleFileSelection = (e) => {
    const bar = document.querySelector('#example');
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
          bar.inoProgress = (loaded + e.loaded) / totalFileSize;
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  const handleClick = (e) => {
    if (e.target.tagName.toLowerCase() === 'ino-button') {
      const bar = document.querySelector('#example');
      bar.inoProgress = 0;
    }
  };

  document.addEventListener('changeFile', handleFileSelection);
  document.addEventListener('click', handleClick);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('changeFile', handleFileSelection);
    document.removeEventListener('click', handleClick);
  };
}

export default {
  title: 'Notification/<ino-progress-bar>',

  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /* html */ `
    <h3>Customizable ino-progress-bar</h3>
    <ino-progress-bar
      ino-progress="${number('ino-progress', 0, {min: 0, max: 1, step: 0.1})}"
      ino-buffer="${number('ino-buffer', 0, {min: 0, max: 1, step: 0.1})}"
      ino-label="${text('ino-label', 'My Label')}"
      ino-indeterminate="${boolean('ino-indeterminate', false)}"
      ino-reversed="${boolean('ino-reversed', false)}"
    >
    </ino-progress-bar>


    <h3>Example</h3>
    <div class="progress-bar-example">
        <ino-progress-bar
          id="example"
          ino-progress="0"
          ino-buffer="1"
        >
        </ino-progress-bar>
        <ino-input-file ino-label="Upload" multiple></ino-input-file>
    </div>


    <h3>Variants</h3>
    <h4>With buffering dots</h4>
    <ino-progress-bar ino-buffer="0.8" ino-progress="0.3"></ino-progress-bar>

    <h4>Without buffering dots</h4>
    <ino-progress-bar ino-buffer="1" ino-progress="0.3"></ino-progress-bar>

    <h4>Indeterminate progress bar</h4>
    <ino-progress-bar ino-indeterminate></ino-progress-bar>

    <h4>Inverted progress bar</h4>
    <ino-progress-bar ino-reversed ino-progress="0.6" ino-buffer="0.8"></ino-progress-bar>
    `;
