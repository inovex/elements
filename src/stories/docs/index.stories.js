
import { storiesOf } from '@storybook/html'
import markup from '../core/markup';

import introduction from './getting-started.md'
import readme from '../../../readme.md'

import setupVue from './setup-vue.md'
import setupReact from './setup-react.md'
import setupAngular from './setup-angular.md'

import changelog from './../../../CHANGELOG.md'
import contributing from './../../../CONTRIBUTING.md'
import useAndContribute from './use-and-contribute.md'

const componentVersion = require('../../../package.json').version

storiesOf('Home', module)
  .add('Getting started', () => markup(readme.replace(/&#8203;/g, `v${componentVersion}`)))
  .add('Storybook', () => markup(introduction))
  .add('Changelog', () => markup(`# Changelog ${changelog}`))
  .add('Contributing', () => markup(contributing))
  .add('Use and contribute', () => markup(useAndContribute))

storiesOf('Framework Integration')
  .add('React', () => markup(setupReact))
  .add('Angular', () => markup(setupAngular))
  .add('Vue.js', () => markup(setupVue))
