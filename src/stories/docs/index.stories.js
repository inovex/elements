import { storiesOf } from '@storybook/vue'
import { doc, withDocs } from 'storybook-readme'
import { setOptions } from '@storybook/addon-options';
import { linkTo } from '@storybook/addon-links'

import introduction from './getting-started.md'
import readme from '../../../readme.md'
import setupVue from '../../../docs/setup-vue.md'
import setupReact from '../../../docs/setup-react.md'
import setupAngular from '../../../docs/setup-angular.md'
import changelog from './../../../CHANGELOG.md'
import contributing from './../../../CONTRIBUTING.md'

const componentVersion = require('../../../package.json').version

storiesOf('Home', module)
  .add('Getting started', doc(readme.replace(/&#8203;/g, `v${componentVersion}`)))
  .add('Storybook', doc(introduction))
  .add('Changelog', doc(`
    <h1>Changelog</h1>
    ${changelog}`
  ))
  .add('Contributing', doc(contributing))
  

storiesOf('Framework Integration')
  .add('React', doc(setupReact))
  .add('Angular', doc(setupAngular))
  .add('Vue.js', doc(setupVue))

