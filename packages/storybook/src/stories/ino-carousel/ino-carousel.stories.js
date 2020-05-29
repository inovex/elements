import { storiesOf } from '@storybook/html';

import componentReadme from '_local-elements/src/components/ino-carousel/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';


import './ino-carousel.scss';

storiesOf('Graphic|<ino-carousel>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /* html */``);
