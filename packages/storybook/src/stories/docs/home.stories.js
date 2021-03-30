import markup from '_local-storybookcore/markup';
import welcome from './../../doc//welcome.md';
import changelog from './../..//CHANGELOG.md';

const componentVersion = require('_local-elements/package.json').version;

export default {
  title: 'Docs/Home',
};

export const Welcome = () =>
  markup(welcome.replace(/{ELEMENTS_VERSION}/g, `v${componentVersion}`));
export const Changelog = () => markup(`# CHANGELOG \n${changelog}`);
