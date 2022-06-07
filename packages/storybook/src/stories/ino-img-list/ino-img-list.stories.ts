import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';

import beachImg from '../../assets/images/beach.jpg';
import fjordImg from '../../assets/images/fjord.jpg';
import forrestImg from '../../assets/images/forrest.jpg';
import libertyImg from '../../assets/images/liberty.jpg';
import trondheimImg from '../../assets/images/trondheim.jpg';
import waterfallImg from '../../assets/images/waterfall.jpg';

export default {
  title: 'Graphic/ino-img-list',
  component: 'ino-img-list',
  args: {
    encloseLabel: false,
    masonry: false,
  },
} as Meta;

const template = new TemplateGenerator<Components.InoImgList>(
  'ino-img-list',
  args => html`
  <ino-img-list enclose-label="${args.encloseLabel}" masonry="${args.masonry}">
    ${sampleImg} ${sampleImg2} ${sampleImg3} ${sampleImg4} ${sampleImg5}
  </ino-img-list>
`);

export const Playground = template.generatePlaygroundStory();
export const Masonry = template.generateStoryForProp('masonry', true);
export const EncloseLabel  = template.generateStoryForProp('encloseLabel', true);

const sampleImg = html`
  <ino-img src=${beachImg} alt="beach" label="Label" img-list-item></ino-img>
`;

const sampleImg2 = html`
  <ino-img
    src=${fjordImg}
    alt="waterfall"
    label="Label"
    img-list-item
  ></ino-img>
`;

const sampleImg3 = html`
  <ino-img
    src=${forrestImg}
    alt="trondheim"
    label="Label"
    img-list-item
  ></ino-img>
`;

const sampleImg4 = html`
  <ino-img
    src=${libertyImg}
    alt="forrest"
    label="Label"
    img-list-item
  ></ino-img>
`;

const sampleImg5 = html`
  <ino-img
    src=${trondheimImg}
    alt="fjord"
    label="Label"
    img-list-item
  ></ino-img>
`;

const sampleImg6 = html`
  <ino-img
    src=${waterfallImg}
    alt="liberty"
    label="Label"
    img-list-item
  ></ino-img>
`;
