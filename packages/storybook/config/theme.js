import { create } from '@storybook/theming';
import '@inovex.de/elements/dist/inovex-elements/inovex-elements.css';
const version = require('../package.json').version;

export default create({
  base: 'light',

  colorPrimary: '#9ccd00',
  colorSecondary: '#B6B4C4', 

  // UI
  appBg: 'white',
  appContentBg: 'rgba(255,255,255,0.9)',
  appBorderColor: '#EDEFF5',
  appBorderRadius: 17,

  // Typography
  fontBase: '"Lato", Helvetica, Verdana',
  fontCode: 'sans-serif',

  // Text colors
  textColor: 'rgba(0, 0, 0, 0.95)',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'rgba(0, 0, 0, 0.87)',
  barSelectedColor: '#B6B4C4',
  barBg: '#EDEFF5',

  // Form colors
  inputBg: 'white',
  inputBorder: 'rgba(0, 0, 0, 0.32)',
  inputTextColor: 'rgba(0, 0, 0, 0.87)',
  inputBorderRadius: 4,

  brandTitle: 'INOVEX ELEMENTS v' + version,
  brandUrl: '/',
});
