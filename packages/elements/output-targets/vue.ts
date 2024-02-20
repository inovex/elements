import type {
  BuildCtx,
  CompilerCtx,
  Config,
  OutputTargetCustom,
} from '@stencil/core/internal';
import type { OutputTargetVue } from '@stencil/vue-output-target';
import { vueOutputTarget as stencilVueOutputTarget } from '@stencil/vue-output-target';
import * as fs from 'fs';
import * as path from 'path';
import { join } from 'path';

const fixedVueOutputTarget = (
  outputTarget: OutputTargetVue,
): OutputTargetCustom => {
  const stencilOutputTarget = stencilVueOutputTarget(outputTarget);

  return {
    type: 'custom',
    name: 'vue-output-target',
    generator: async (
      _config: Config,
      compilerCtx: CompilerCtx,
      buildCtx: BuildCtx,
      docs: any,
    ) => {
      await stencilOutputTarget.generator(_config, compilerCtx, buildCtx, docs);
      await runFix(outputTarget.proxiesFile);
    },
  };
};

async function runFix(proxyPath: string) {
  const fullProxyPath = path.resolve(__dirname, '..', proxyPath);

  const elementsVueUtilsPath = path.resolve(
    path.dirname(fullProxyPath),
    'vue-component-lib',
    'utils.ts',
  );

  // provide v-model bindings for elements components
  // change auto-generated utils file to change model update handling
  let utilsString = await fs.promises.readFile(elementsVueUtilsPath, {
    encoding: 'utf-8',
  });
  utilsString = utilsString.replace(
    'modelPropValue = (e?.target as any)[modelProp];',
    'modelPropValue = (e as CustomEvent).detail;',
  );

  await fs.promises.writeFile(elementsVueUtilsPath, utilsString);
}

export default fixedVueOutputTarget({
  componentCorePackage: '@inovex.de/elements',
  proxiesFile: join(__dirname, '../../elements-vue/src/proxies.ts'),
  includeDefineCustomElements: false,
  // external event names (valueChange, checkedChange, ...) have to be mapped to vue event names
  // see elements-vue/src/index.ts
  componentModels: [
    {
      elements: [
        'ino-checkbox',
        'ino-radio',
        'ino-switch',
        'ino-segment-button',
        'ino-control-item',
      ],
      targetAttr: 'checked',
      event: 'checked-change',
    },
    {
      elements: [
        'ino-autocomplete',
        'ino-carousel',
        'ino-datepicker',
        'ino-input',
        'ino-radio-group',
        'ino-range',
        'ino-segment-group',
        'ino-select',
        'ino-textarea',
      ],
      targetAttr: 'value',
      event: 'value-change',
    },
    {
      elements: 'ino-range',
      targetAttr: 'valueStart',
      event: 'value-start-change',
    },
    {
      elements: 'ino-range',
      targetAttr: 'valueEnd',
      event: 'value-end-change',
    },
  ],
});
