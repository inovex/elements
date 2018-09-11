import { storiesOf } from '@storybook/vue'
import { doc, withDocs } from 'storybook-readme'
import { setOptions } from '@storybook/addon-options';
import { linkTo } from '@storybook/addon-links'

import introduction from './introduction.md'
import setupVue from './setup-vue.md'
import contributing from './../../../CONTRIBUTING.md'

const componentVersion = require('../../../package.json').version

storiesOf('Getting Started', module)
  .add('Introduction', withDocs(
    introduction.replace(/{npm_package_version}/g, componentVersion), () => {
      setOptions({
        showAddonPanel: true
      });
    }
  ))
  .add('Integrate with Vue.js', doc(setupVue))
  .add('Contributing', doc(contributing))
