import markup from '_local-storybookcore/markup';
import colors from './../../doc//styleguide.colors.md';
import typography from './../../doc//styleguide.typography.md';

export default {
  title: 'Docs/Styleguide',
};

export const Colors = () => markup(colors);
export const Typography = () => markup(typography);
