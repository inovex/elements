import { angularOutputTarget } from '@stencil/angular-output-target';
import { join } from 'path';

const angularTargetPath = join(
  __dirname,
  '../../elements-angular/src/generated'
);

export default angularOutputTarget({
  componentCorePackage: '@inovex.de/elements',
  directivesProxyFile: `${angularTargetPath}/components.ts`,
  directivesArrayFile: `${angularTargetPath}/index.ts`,
  valueAccessorConfigs: [
    {
      type: 'text',
      targetAttr: 'value',
      event: 'valueChange',
      elementSelectors: [
        'ino-autocomplete',
        'ino-currency-input',
        'ino-datepicker',
        'ino-input',
        'ino-markdown-editor',
        'ino-segment-group',
        'ino-select',
        'ino-textarea',
      ],
    },
    {
      type: 'number',
      targetAttr: 'value',
      event: 'valueChange',
      elementSelectors: 'ino-range:not([ranged])',
    },
    {
      type: 'number',
      targetAttr: 'valueStart',
      event: 'valueStartChange',
      elementSelectors: 'ino-range[ranged]',
    },
    {
      type: 'number',
      targetAttr: 'valueEnd',
      event: 'valueEndChange',
      elementSelectors: 'ino-range[ranged]',
    },
    {
      type: 'boolean',
      targetAttr: 'checked',
      event: 'checkedChange',
      elementSelectors: [
        'ino-checkbox',
        'ino-control-item[role="checkbox"]',
        'ino-switch',
      ],
    },
    {
      type: 'radio',
      targetAttr: 'checked',
      event: 'checkedChange',
      elementSelectors: ['ino-radio', 'ino-control-item[role="radio"]'],
    },
  ],
});
