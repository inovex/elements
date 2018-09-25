import { storiesOf } from '@storybook/html'
import markup from '../core/markup';

import colors from './colors.md'
import typography from './typography.md'

storiesOf('Styleguide', module)
  .add('Colors', () => markup(colors))
  .add('Typography', () => markup(typography))
