import type {
  BuildCtx,
  CompilerCtx,
  Config,
  OutputTargetCustom,
} from '@stencil/core/internal';
import type { OutputTargetVue } from '@stencil/vue-output-target';
import * as fs from 'fs';
import * as path from 'path';
import { vueOutputTarget as stencilVueOutputTarget } from '@stencil/vue-output-target';

export const vueOutputTarget = (
  outputTarget: OutputTargetVue
): OutputTargetCustom => {
  const stencilOutputTarget = stencilVueOutputTarget(outputTarget);

  return {
    type: 'custom',
    name: 'vue-output-target',
    generator: async (
      _config: Config,
      compilerCtx: CompilerCtx,
      buildCtx: BuildCtx,
      docs: any
    ) => {
      await stencilOutputTarget.generator(_config, compilerCtx, buildCtx, docs);
      await runFix(outputTarget.proxiesFile);
    },
  };
};

async function runFix(proxyPath: string) {
  const fullProxyPath = path.resolve(__dirname, proxyPath);

  const elementsVueUtilsPath = path.resolve(
    path.dirname(fullProxyPath),
    'vue-component-lib',
    'utils.ts'
  );

  let utilsString = await fs.promises.readFile(elementsVueUtilsPath, {
    encoding: 'utf-8',
  });
  utilsString = utilsString.replace(
    'modelPropValue = (e?.target as any)[modelProp];',
    'modelPropValue = (e as CustomEvent).detail;'
  );

  await fs.promises.writeFile(elementsVueUtilsPath, utilsString);
}
