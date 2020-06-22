import { storiesOf } from '@storybook/html';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import imgListReadme from '_local-elements/src/components/ino-img-list/readme.md';
import './ino-img-list.scss';
import { boolean, number } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

storiesOf('Graphic|<ino-img-list>', module)
  .addDecorator(withStencilReadme(imgListReadme))
  .addDecorator(withActions(
    'click .customizable-img-list'
  ))
  .add('Default Usage', () => {
    return `
      <h4>Customizable Image List</h4>
	      <style>
            ino-img-list.customizable-img-list {
              --img-list-cols: ${number('--img-list-cols', 3, 'Custom Properties')};
            }
        </style>
        <ino-img-list
          class="customizable-img-list"
          ino-enclose-label="${boolean('ino-enclose-label', false)}"
          ino-masonry="${boolean('ino-masonry', false)}"
        >
          ${sampleImg}
          ${sampleImg2}
          ${sampleImg3}
          ${sampleImg4}
          ${sampleImg5}
        </ino-img-list>

      <h4>Image List with enclosed Labels</h4>
        <ino-img-list
          ino-enclose-label="true"
        >
          ${sampleImg}
          ${sampleImg2}
          ${sampleImg3}
          ${sampleImg4}
          ${sampleImg5}
        </ino-img-list>

      <h4>Masonry image list</h4>
      <ino-img-list
        ino-masonry
      >
        ${sampleImg}
        ${sampleImg6}
        ${sampleImg3}
        ${sampleImg4}
        ${sampleImg5}
        ${sampleImg4}
        ${sampleImg2}
        ${sampleImg3}
        ${sampleImg6}
        ${sampleImg5}
      </ino-img-list>
    `;
  });

const sampleImg = `
    <ino-img
      src="/images/beach.jpg"
      alt="beach"
      ino-label="Label"
      ino-img-list-item
    ></ino-img>
`;

const sampleImg2 = `
  <ino-img
      src="/images/waterfall.jpg"
      alt="waterfall"
      ino-label="Label"
      ino-img-list-item
  ></ino-img>
`;

const sampleImg3 = `
  <ino-img
      src="/images/trondheim.jpg"
      alt="trondheim"
      ino-label="Label"
      ino-img-list-item
  ></ino-img>
`;

const sampleImg4 = `
  <ino-img
      src="/images/forrest.jpg"
      alt="forrest"
      ino-label="Label"
      ino-img-list-item
  ></ino-img>
`;

const sampleImg5 = `
  <ino-img
      src="/images/fjord.jpg"
      alt="fjord"
      ino-label="Label"
      ino-img-list-item
  ></ino-img>
`;

const sampleImg6 = `
  <ino-img
      src="/images/liberty.jpg"
      alt="liberty"
      ino-label="Label"
      ino-img-list-item
  ></ino-img>
`;
