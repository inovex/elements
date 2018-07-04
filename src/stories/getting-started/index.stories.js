import { storiesOf } from '@storybook/vue'
import { doc, withDocs } from 'storybook-readme'
import { setOptions } from '@storybook/addon-options';
import { linkTo } from '@storybook/addon-links'

import introduction from './introduction.md'
import setupVue from './setup-vue.md'
import contributing from './../../../CONTRIBUTING.md'

const componentVersion = require('../../../package.json').version

import WelcomeIndex from '../components/WelcomeIndex.vue'

storiesOf('Getting Started', module)
  .add('Welcome', () => {
    setOptions({
      showStoriesPanel: false,
      showAddonPanel: false
    });

    return {
      components: { WelcomeIndex },
      render(h) {
        return <welcome-index onStart={linkTo('Getting Started', 'Introduction')}></welcome-index>
      }
    }
  })
  .add('Introduction', withDocs(
    introduction.replace(/{npm_package_version}/g, componentVersion), () => {
      setOptions({
        showStoriesPanel: true, // we hide it in 'Welcome', so we need to unhide here
        showAddonPanel: true
      });
    }
  ))
  .add('Integrate with Vue.js', doc(setupVue))
  .add('Contributing', doc(contributing))
