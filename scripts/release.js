const { echo, exec, exit } = require('shelljs');
const {
  getIcon,
  getLatestReleaseCommitSha,
  getNextVersion,
  runNpmPublish,
  checkGithubToken,
} = require('./release.utils');

const packagesToPublish = [
  'elements',
  'elements-angular',
  'elements-react',
  'elements-vue',
];

const isDryRun = process.argv.some((a) => a.includes('dryRun=true'));
const isPreRelease = process.argv.some((a) => a.includes('canary=true'));
const dryRunArg = isDryRun ? '--dry-run' : '';
const npmTag = isPreRelease ? 'canary' : 'latest';

const currentBranch = exec('git branch --show-current', { silent: true }).trim();
const isLoggedIntoNpm = exec('npm whoami', { silent: true }).code === 0;
const isMasterBranch = currentBranch === 'master';
const hasGitHubToken = checkGithubToken();

const run = (command) => exec(command).code;
const getNxVersionCmd = (version) =>
  `nx release version ${version} ${dryRunArg} --git-commit=false`;

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
    exit(1);
  }

  if (!hasGitHubToken) {
    echo(getIcon('0'), 'No GitHub token was found', getIcon('0'));
    echo(
      getIcon(),
      'You need to install the github cli locally and login via gh auth login!',
    );
    exit(1);
  }

  if (isPreRelease) {
    echo(`Running Pre-Release (Dry run: ${getIcon(isDryRun)})`);
    if (run(getNxVersionCmd('prerelease')) !== 0) {
      echo(getIcon(0), 'nx release version prerelease failed! ', getIcon(0));
      exit(1);
    }
  } else {
    const version = await getNextVersion();
    const sha = await getLatestReleaseCommitSha();
    const versionCmd =
      getNxVersionCmd(version) + ' --stage-changes --git-tag=false';
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

  echo(getIcon(2), `Pushing git changes to ${currentBranch} ...\n`);
  if (run(`git push ${dryRunArg} --atomic --follow-tags`) !== 0) {
    echo(getIcon(0), 'Could not push changes to ', currentBranch);
    exit(1);
  }

  echo(getIcon(2), 'Publishing all packages to NPM ...\n');
  for (const npmPackage of packagesToPublish) {
    runNpmPublish(npmPackage, npmTag, isDryRun);
  }

  exit(0);
})();
