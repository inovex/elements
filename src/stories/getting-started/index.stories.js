import { storiesOf } from '@storybook/vue'
import { doc } from 'storybook-readme'

import introduction from './introduction.md'
import setupVue from './setup-vue.md'
import contributing from './../../../CONTRIBUTING.md'

const componentVersion = require('../../../package.json').version

storiesOf('Getting Started', module)
  .add('Introduction', doc(introduction.replace(/{npm_package_version}/g, componentVersion)))
  .add('Contributing', doc(contributing))
  .add('Integrate with Vue.js', doc(setupVue))