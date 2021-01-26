import markup from '_local-storybookcore/markup';
import setupAngularInstructions from '_local-docs/framework-integration/angular-instructions.md';
import setupReactInstructions from '_local-docs/framework-integration/react-instructions.md';
import setupVueInstructions from '_local-docs/framework-integration/vue-instructions.md';
import setupJavaScriptInstructions from '_local-docs/framework-integration/javascript-instructions.md';

export default {
  title: 'Docs/Framework Integration',
};

export const Angular = () => markup(setupAngularInstructions);
export const React = () => markup(setupReactInstructions);
export const Vue = () => markup(setupVueInstructions);
export const JavaScript = () => markup(setupJavaScriptInstructions);
