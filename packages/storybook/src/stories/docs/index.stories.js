import { storiesOf } from '@storybook/html'
import markup from '_local-storybookcore/markup';

import introduction from '_local-docs/getting-started.md'
import readme from '_local-root/Readme.md'

import setupVue from '_local-docs/setup-vue.md'
import setupReact from '_local-docs/setup-react.md'
import setupAngular from '_local-docs/setup-angular.md'

import changelog from '_local-root/CHANGELOG.md'
import contributing from '_local-root/CONTRIBUTING.md'
import useAndContribute from '_local-docs/use-and-contribute.md'

import colors from '_local-docs/styleguide.colors.md'
import typography from '_local-docs/styleguide.typography.md'

const componentVersion = require('_local-elements/package.json').version

storiesOf('Home', module)
  .add('Getting started', () => markup(readme.replace(/&#8203;/g, `v${componentVersion}`)))
  .add('Storybook', () => markup(introduction))
  .add('Changelog', () => markup(`# Changelog ${changelog}`))
  .add('Contributing', () => markup(contributing))
  .add('Use and contribute', () => markup(useAndContribute))

storiesOf('Framework Integration', module)
  .add('React', () => markup(setupReact))
  .add('Angular', () => markup(setupAngular))
  .add('Vue.js', () => markup(setupVue))

storiesOf('Styleguide', module)
  .add('Colors', () => markup(colors))
  .add('Typography', () => markup(typography))
