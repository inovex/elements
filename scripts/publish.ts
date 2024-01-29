const { echo, exec, exit } = require('shelljs');
const conventionalRecommendedBump = require('conventional-recommended-bump');
const semver = require('semver');
const { version } = require('../package.json');

/**
 * constants
 */
const PACKAGES_TO_PUBLISH = [
  'elements',
  'elements-angular',
  'elements-react',
  'elements-vue',
];

const isDryRun = process.argv.some((a) => a.includes('dryRun=true'));
const isPreRelease = process.argv.some((a) =>
  a.includes('releaseType=prerelease'),
);
const dryRunArg = isDryRun ? '--dry-run' : '';
const npmTag = isPreRelease ? 'canary' : 'latest';

const currentBranch = exec('git branch --show-current', {
  silent: true,
}).trim();
const isLoggedIntoNpm = exec('npm whoami', { silent: true }).code === 0;
const isMasterBranch = currentBranch === 'master';
const hasGitHubToken = checkGithubToken();

/**
 * function declarations
 */
function run(command: string) {
  return exec(command).code;
}

function getNxVersionCmd(options: {
  version: string;
  dryRun?: boolean;
  createTag?: boolean;
  stageChanges?: boolean;
  usePreid?: boolean;
}) {
  const base = ['nx release version', version, '--git-commit=false'];

  if (options.dryRun) base.push('--dry-run');
  if (options.createTag) base.push('--git-tag');
  if (options.stageChanges) base.push('--stage-changes');
  if (options.usePreid) base.push('--preid next');

  return base.join(' ');
}

function getIcon(iconType?: number | boolean) {
  switch (Number(iconType)) {
    case 0:
      return '❌ ';
    case 1:
      return '✅ ';
    case 2:
      return '☑️ ';
    default:
      return '⚠️ ';
  }
}

async function getLatestReleaseCommitSha(): Promise<string> {
  try {
    const baseApiUrl = 'https://api.github.com/repos/inovex/elements/';

    echo('-n', 'Getting latest release tag ... ');
    const { tag_name } = await (
      await fetch(`${baseApiUrl}releases/latest`)
    ).json();
    echo(tag_name, getIcon(1));

    echo('-n', 'Getting latest release commit sha ... ');
    const { sha } = await (
      await fetch(`${baseApiUrl}commits/${tag_name}`)
    ).json();
    echo(sha, getIcon(1));

    return sha;
  } catch {
    echo(getIcon(0), ' cannot get latest release commit sha! ', getIcon(0));
    exit(1);
  }
  return '';
}

async function getNextVersion(): Promise<string> {
  const { releaseType } = await conventionalRecommendedBump({
    preset: 'angular',
    skipUnstable: true,
  });
  if (!releaseType) {
    echo(getIcon(0), 'ReleaseType could not be determine');
    exit(1);
  }

  const nextVersion = semver.inc(version, releaseType!);
  if (nextVersion === null) {
    echo(getIcon(0), 'Next version could not be calculated!');
    exit(1);
  }

  echo('Next version:', nextVersion, ` (type: ${releaseType})`, getIcon(1));
  return nextVersion!;
}

function runNpmPublish(npmPackage: string, npmTag: string, isDryRun: boolean) {
  const dryRunArg = isDryRun ? '--dry-run' : '';
  const publishCmd = `npm publish -w packages/${npmPackage} --tag ${npmTag} ${dryRunArg}`;

  if (exec(publishCmd).code === 0) {
    echo(`@inovex.de/${npmPackage} ${getIcon(1)}\n`);
    return;
  }

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

function checkGithubToken() {
  // Try and resolve from the environment
  if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) return true;
  // Check if GitHub cli is installed and use is logged in
  return exec('gh auth status -h github.com', { silent: true }).code === 0;
}

/**
 * main function that is executed
 */
(async () => {
  echo('Run settings:');
  echo('Is dry-run?:', getIcon(isDryRun));
  echo('Is prerelease?:', getIcon(isPreRelease));
  echo('Is branch is master or dry-run?:', getIcon(isMasterBranch || isDryRun));
  echo('Is logged into npm?:', getIcon(isLoggedIntoNpm));
  echo('Is logged into GitHub?:', getIcon(hasGitHubToken));
  echo('Used npm tag:', npmTag, getIcon(2));

  if (!isMasterBranch && !isDryRun) {
    echo(
      getIcon(0),
      `Release is only allowed on branch "master"! (current: ${currentBranch})`,
    );
    exit(1);
  }

  if (!isLoggedIntoNpm) {
    echo(
      getIcon(0),
      'You need to login into NPM with the respective permissions if publishing to registry fails',
    );
    if (!isDryRun) exit(1);
  }

  if (!isPreRelease && !hasGitHubToken) {
    echo(getIcon(0), 'No GitHub token was found', getIcon(0));
    echo(
      getIcon(),
      'You need to install the github cli locally and login via gh auth login!',
    );
    if (!isDryRun) exit(1);
  }

  if (isPreRelease) {
    const versionCmd = getNxVersionCmd({
      version: 'prerelease',
      dryRun: isDryRun,
      createTag: true,
      usePreid: true,
    });

    echo(`Running Pre-Release (Dry run: ${getIcon(isDryRun)})`);
    if (run(versionCmd) !== 0) {
      echo(getIcon(0), 'nx release version prerelease failed! ', getIcon(0));
      exit(1);
    }

    echo(getIcon(2), `Pushing git changes to ${currentBranch} ...\n`);
    if (run(`git push ${dryRunArg} --atomic --follow-tags`) !== 0) {
      echo(getIcon(0), 'Could not push changes to ', currentBranch);
      exit(1);
    }
  } else {
    const version = await getNextVersion();
    const sha = await getLatestReleaseCommitSha();
    const versionCmd = getNxVersionCmd({
      version,
      dryRun: isDryRun,
      stageChanges: true,
    });
    const changelogCmd = `nx release changelog ${version} ${dryRunArg} --from ${sha}`;

    echo(
      'Running Release ',
      `(Version: ${version}, Dry run: ${getIcon(isDryRun)})`,
    );

    if (run(versionCmd) !== 0 || run(changelogCmd) !== 0) {
      echo(getIcon(0), ` ${versionCmd} failed! `, getIcon(0));
      exit(1);
    }
  }

  echo(getIcon(2), 'Publishing all packages to NPM ...\n');
  for (const npmPackage of PACKAGES_TO_PUBLISH) {
    runNpmPublish(npmPackage, npmTag, isDryRun);
  }

  exit(0);
})();
