const semver = require('semver');
const { echo, exec, exit } = require('shelljs');
const { version } = require('../package.json');
const conventionalRecommendedBump = require('conventional-recommended-bump');

async function getNextVersion() {
  const { releaseType } = await conventionalRecommendedBump({
    preset: 'angular',
  });
  const nextVersion = semver.inc(version, releaseType);
  echo('Next version:', nextVersion, ` (type: ${releaseType})`, getIcon(2));
  return nextVersion;
}

function getIcon(iconType) {
  switch (Number(iconType)) {
    case 0:
      return '❌';
    case 1:
      return '✅';
    case 2:
      return '☑️';
    default:
      return '⚠️';
  }
}

const isDryRun = process.argv.some((a) => a.includes('dryRun=true'));
const isPreRelease = process.argv.some((a) => a.includes('canary=true'));
const currentBranch = exec('git branch --show-current').trim();
const isLoggedIntoNpm = exec('npm whoami').code === 0;
const isMasterBranch = currentBranch !== 'master';
const dryRunArg = isDryRun ? '--dry-run' : '';
const npmTag = isPreRelease ? 'canary' : 'latest';

const packagesToPublish = [
  'elements',
  'elements-angular',
  'elements-react',
  'elements-vue',
];

(async () => {
  echo('Run settings:');
  echo('Is dry-run?:', getIcon(isDryRun));
  echo('Is prerelease?:', getIcon(isPreRelease));
  echo(
    'Is branch is master or prerelease?:',
    getIcon(isMasterBranch || isDryRun),
  );
  echo('Is logged into npm?:', getIcon(isLoggedIntoNpm));
  echo('Used npm tag:', npmTag, getIcon(2));

  if (isMasterBranch && !isDryRun) {
    echo(
      'Sorry, release is only on branch "master" allowed! (current:',
      currentBranch,
    );
    exit(1);
  }

  if (!isLoggedIntoNpm) {
    echo(
      getIcon(2),
      'You need to login into NPM with the respective permissions if publishing to registry fails',
    );
    exit(1);
  }

  let nxExitCode;
  if (isPreRelease) {
    echo(`Running Pre-Release (Dry run: ${getIcon(isDryRun)})`);
    nxExitCode = exec(
      `nx release version prerelease ${dryRunArg} --git-commit=false`,
    ).code;
  } else {
    const version = await getNextVersion();
    echo(
      'Running Release ',
      `(Version: ${version}, Dry run: ${getIcon(isDryRun)})`,
    );
    nxExitCode = exec(`nx release ${version} ${dryRunArg} --skip-publish`).code;
  }

  if (nxExitCode !== 0) {
    echo(getIcon(0), ' nx release command failed! ', getIcon(0));
    exit(1);
  }

  echo(getIcon(2), `Pushing changes to ${currentBranch} ...\n`);
  if (exec(`git push ${dryRunArg} --atomic --follow-tags`).code !== 0) {
    echo(`${getIcon(0)} Could not push changes to ${currentBranch}`);
    exit(1);
  }

  echo(getIcon(2), 'Publishing all packages to NPM ...\n');
  for (const npmPackage of packagesToPublish) {
    const { code } = exec(
      `npm publish -w packages/${npmPackage} --tag ${npmTag} ${dryRunArg}`,
    );

    if (code === 0) {
      echo(`@inovex.de/${npmPackage} ${getIcon(1)}\n`);
    } else {
      echo(
        getIcon(0),
        `Failed publishing npm package @inovex.de/${npmPackage}`,
        getIcon(0),
      );
      echo(
        getIcon(2),
        'You need to login into NPM with the respective permissions if publishing to registry fails',
      );
      exit(1);
    }
  }
})();
