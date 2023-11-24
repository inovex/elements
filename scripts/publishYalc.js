const shell = require('shelljs');
const prompts = require('prompts');

const questions = [
  {
    type: 'multiselect',
    name: 'targets',
    message: 'Targets:',
    choices: [
      { title: 'Angular', value: 'angular', selected: true },
      { title: 'React', value: 'react', selected: true },
      { title: 'Vue', value: 'vue', selected: true },
    ],
  },
  {
    type: 'confirm',
    name: 'skipInstall',
    message: 'Skip Install?',
    initial: false,
  },
];

async function main() {
  const { targets, skipInstall } = await prompts(questions);

  // Build current elements version
  if (!skipInstall) {
    shell.exec('yarn install', { cwd: 'packages/elements' });
  }
  shell.exec('nx run elements:build');
  shell.exec('yalc publish --no-sig', { cwd: 'packages/elements' });

  targets.forEach((target) => {
    // link @inovex.de/elements dependency
    shell.exec('yalc add @inovex.de/elements', {
      cwd: `packages/elements-${target}`,
    });
    shell.exec('yarn install', { cwd: `packages/elements-${target}` });
    shell.exec(`nx run elements-${target}:build`);
    // publish target package
    shell.exec('yalc publish --no-sig --push', {
      cwd: `packages/elements-${target}`,
    });
    // Clean up
    shell.exec('yalc remove @inovex.de/elements', {
      cwd: `packages/elements-${target}`,
    });
  });
}

main();
