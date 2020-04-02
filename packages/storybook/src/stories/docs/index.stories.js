import { storiesOf } from '@storybook/html'
import markup from '_local-storybookcore/markup';

import introduction from '_local-docs/getting-started.md'
import readme from '_local-root/README.md'

import setupAngularInstructions from '_local-docs/framework-integration/angular-instructions.md'
import setupReactInstructions from '_local-docs/framework-integration/react-instructions.md'
import setupVueInstructions from '_local-docs/framework-integration/vue-instructions.md'
import setupJavaScriptInstructions from '_local-docs/framework-integration/javascript-instructions.md'

import changelog from '_local-root/CHANGELOG.md'
import contributing from '_local-root/CONTRIBUTING.md'
import useAndContribute from '_local-docs/use-and-contribute.md'

import colors from '_local-docs/styleguide.colors.md'
import typography from '_local-docs/styleguide.typography.md'

const componentVersion = require('_local-elements/package.json').version

storiesOf('Home', module)
  .add('Getting Started', () => markup(readme.replace(/&#8203;/g, `v${componentVersion}`)))
  .add('Storybook', () => markup(introduction))
  .add('Changelog', () => markup(`# Changelog ${changelog}`))
  .add('Contributing', () => markup(contributing))
  .add('Use and Contribute', () => markup(useAndContribute))

storiesOf('Framework Integration', module)
  .add('Angular', () => markup(setupAngularInstructions))
  .add('React', () => markup(setupReactInstructions))
  .add('Vue', () => markup(setupVueInstructions))
  .add('JavaScript', () => markup(setupJavaScriptInstructions))

storiesOf('Styleguide', module)
  .add('Colors', () => markup(colors))
  .add('Typography', () => markup(typography))
