const { echo, exec, exit } = require('shelljs');
const conventionalRecommendedBump = require('conventional-recommended-bump');
const semver = require('semver');
const { version } = require('../package.json');

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

async function getLatestReleaseCommitSha() {
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
}

async function getNextVersion() {
  const { releaseType } = await conventionalRecommendedBump({
    preset: 'angular',
  });
  const nextVersion = semver.inc(version, releaseType);
  echo('Next version:', nextVersion, ` (type: ${releaseType})`, getIcon(1));
  return nextVersion;
}

function runNpmPublish(npmPackage, npmTag, isDryRun) {
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

module.exports = {
  getIcon,
  getLatestReleaseCommitSha,
  getNextVersion,
  runNpmPublish,
};
