import { storiesOf } from '@storybook/html'
import markup from '_local-storybookcore/markup';

import introduction from '_local-docs/getting-started.md'
import readme from '_local-root/README.md'

import setupVueInstructions from '_local-docs/framework-integration/setup-vue-instructions.md'
import setupVueProject from '_local-docs/framework-integration/setup-vue-project.html'

import setupReactInstructions from '_local-docs/framework-integration/setup-react-instructions.md'
import setupReactProject from '_local-docs/framework-integration/setup-react-project.html'

import setupAngularInstructions from '_local-docs/framework-integration/setup-angular-instructions.md'
import setupAngularProject from '_local-docs/framework-integration/setup-angular-project.html'

import setupJavaScriptInstructions from '_local-docs/framework-integration/setup-js-instructions.md'
import setupJavaScriptProject from '_local-docs/framework-integration/setup-js-project.html'

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

storiesOf('Framework Integration / Angular', module)
  .add('Instructions', () => markup(setupAngularInstructions))
  .add('Example Project', () => setupAngularProject)

storiesOf('Framework Integration / React', module)
  .add('Instructions', () => markup(setupReactInstructions))
  .add('Example Project', () => setupReactProject)

storiesOf('Framework Integration / Vue', module)
  .add('Instructions', () => markup(setupVueInstructions))
  .add('Example Project', () => setupVueProject)

storiesOf('Framework Integration / JavaScript', module)
  .add('Instructions', () => markup(setupJavaScriptInstructions))
  .add('Example Project', () => setupJavaScriptProject)

storiesOf('Styleguide', module)
  .add('Colors', () => markup(colors))
  .add('Typography', () => markup(typography))
