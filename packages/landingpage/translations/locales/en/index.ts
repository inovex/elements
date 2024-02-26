import about from './about.json';
import common from './common.json';
import explore from './explore.json';
import home from './home.json';
import library from './library.json';

const Foo = {
  home,
  about,
  common,
  library,
  explore,
};

export type Translations = typeof Foo;

export default Foo;
