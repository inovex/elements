import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import imgListReadme from '_local-elements/src/components/ino-img-list/readme.md';
import './ino-img-list.scss';
import { boolean, number } from '@storybook/addon-knobs';

import beachImg from '_local-assets/images/beach.jpg';
import fjordImg from '_local-assets/images/fjord.jpg';
import forrestImg from '_local-assets/images/forrest.jpg';
import libertyImg from '_local-assets/images/liberty.jpg';
import trondheimImg from '_local-assets/images/trondheim.jpg';
import waterfallImg from '_local-assets/images/waterfall.jpg';

export default {
  title: 'Graphic/<ino-img-list>',
  parameters: {
    actions: {
      handles: ['click .customizable-img-listr', 'submit .form']
    }
  },
  decorators: [withStencilReadme(imgListReadme)],
};

export const DefaultUsage = () => {
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
};

const sampleImg = `
    <ino-img
      src=${beachImg}
      alt="beach"
      ino-label="Label"
      ino-img-list-item
    ></ino-img>
`;

const sampleImg2 = `
  <ino-img
      src=${waterfallImg}
      alt="waterfall"
      ino-label="Label"
      ino-img-list-item
  ></ino-img>
`;

const sampleImg3 = `
  <ino-img
      src=${trondheimImg}
      alt="trondheim"
      ino-label="Label"
      ino-img-list-item
  ></ino-img>
`;

const sampleImg4 = `
  <ino-img
      src=${forrestImg}
      alt="forrest"
      ino-label="Label"
      ino-img-list-item
  ></ino-img>
`;

const sampleImg5 = `
  <ino-img
      src=${fjordImg}
      alt="fjord"
      ino-label="Label"
      ino-img-list-item
  ></ino-img>
`;

const sampleImg6 = `
  <ino-img
      src=${libertyImg}
      alt="liberty"
      ino-label="Label"
      ino-img-list-item
  ></ino-img>
`;
