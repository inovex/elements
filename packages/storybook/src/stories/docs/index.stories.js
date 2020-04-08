import { storiesOf } from '@storybook/html'
import markup from '_local-storybookcore/markup';

import welcome from '_local-docs/welcome.md'

import setupAngularInstructions from '_local-docs/framework-integration/angular-instructions.md'
import setupReactInstructions from '_local-docs/framework-integration/react-instructions.md'
import setupVueInstructions from '_local-docs/framework-integration/vue-instructions.md'
import setupJavaScriptInstructions from '_local-docs/framework-integration/javascript-instructions.md'

import changelog from '_local-root/CHANGELOG.md'

import contributing01 from '_local-docs/contributing/01-high-level-overview.md'
import contributing02 from '_local-docs/contributing/02-quick-start.md'
import contributing03 from '_local-docs/contributing/03-team-organization.md'
import contributing04 from '_local-docs/contributing/04-developing-components.md'
import contributing05 from '_local-docs/contributing/05-storybook.md'
import contributing06 from '_local-docs/contributing/06-issue-tracking.md'
import contributing07 from '_local-docs/contributing/07-commit-message-format.md'
import contributing08 from '_local-docs/contributing/08-merge-requests.md'
import contributing09 from '_local-docs/contributing/09-versioning-and-releasing.md'
import contributing10 from '_local-docs/contributing/10-updating-dependencies.md'

import colors from '_local-docs/styleguide.colors.md'
import typography from '_local-docs/styleguide.typography.md'

const componentVersion = require('_local-elements/package.json').version

storiesOf('Home', module)
  .add('Welcome', () => markup(welcome.replace(/{ELEMENTS_VERSION}/g, `v${componentVersion}`)))
  .add('Changelog', () => markup(`# CHANGELOG \n${changelog}`))

storiesOf('Framework Integration', module)
  .add('Angular', () => markup(setupAngularInstructions))
  .add('React', () => markup(setupReactInstructions))
  .add('Vue', () => markup(setupVueInstructions))
  .add('JavaScript', () => markup(setupJavaScriptInstructions))

storiesOf('Styleguide', module)
  .add('Colors', () => markup(colors))
  .add('Typography', () => markup(typography))

storiesOf('Contributing', module)
  .add('Architectural Overview', () => markup(contributing01))
  .add('Quick Start', () => markup(contributing02))
  .add('Team Organization', () => markup(contributing03))
  .add('Developing Components', () => markup(contributing04))
  .add('Storybook', () => markup(contributing05))
  .add('Issue tracking', () => markup(contributing06))
  .add('Commit Message Format', () => markup(contributing07))
  .add('Merge Requests', () => markup(contributing08))
  .add('Versioning and Releasing', () => markup(contributing09))
  .add('Updating Dependencies', () => markup(contributing10))
