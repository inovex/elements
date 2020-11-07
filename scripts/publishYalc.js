const shell     = require('shelljs');
const prompts   = require('prompts');

const questions = [
  {
    type: 'multiselect',
    name: 'targets',
    message: 'Targets:',
    choices: [
      { title: 'Angular', value: 'angular', selected: true },
      { title: 'React',   value: 'react',   selected: true }
    ]
  },
  {
    type: 'confirm',
    name: 'skipInstall',
    message: 'Skip Install?',
    initial: false,
  }
];

function publishReact() {
  shell.exec('lerna exec --scope=@inovex.de/elements-react -- yalc publish --no-sig --push');
}

function publishAngular() {
  if (process.platform !== 'win32') {
    shell.exec('lerna exec --scope=@inovex.de/elements-angular -- cp -r {.yalc,yalc.lock} ../dist');
  } else {
    shell.exec('lerna exec --scope=@inovex.de/elements-angular -- xcopy /i /e /y .yalc ..\\dist\\.yalc');
    shell.exec('lerna exec --scope=@inovex.de/elements-angular -- xcopy /y yalc.lock ..\\dist\\*');
  }

  // explicitly push @inovex.de/elements-angular due to angular library project structure
  shell.exec('yalc publish --no-sig --push ./packages/elements-angular/dist/');
}

async function main() {
  
  const { targets, skipInstall } = await prompts(questions);
  
  // Build current elements version
  if (!skipInstall) {
    shell.exec('lerna exec --scope=@inovex.de/elements -- yarn install');
  }
  shell.exec('lerna exec --scope=@inovex.de/elements -- yarn build');
  shell.exec('lerna exec --scope=@inovex.de/elements -- yalc publish --no-sig');
  

  // link @inovex.de/elements dependency
  targets.forEach(target => {
    shell.exec(`lerna exec --scope=@inovex.de/elements-${target} -- yalc add @inovex.de/elements`);
    shell.exec(`lerna exec --scope=@inovex.de/elements-${target} -- yarn install`);
  
    // build packages (angular-builder for angular, else target)
    shell.exec(`lerna exec --scope=@inovex.de/elements-${target == 'angular' ? 'angular-builder' : target} -- yarn build`);
  })

  // Publish to yalc hub for the respective target
  if(targets.includes('angular')) {
    publishAngular()
  } else if(targets.includes('react')) {
    publishReact();
  }

  // Clean up
  targets.forEach(target => {
    shell.exec(`lerna exec --scope=@inovex.de/elements-${target} -- yalc remove @inovex.de/elements`);
  })
}

main();
