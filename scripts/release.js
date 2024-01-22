const shell = require('shelljs');
const semver = require('semver');
const conventionalRecommendedBump = require('conventional-recommended-bump');

async function getNextVersion() {
  // get version from root package.json
  // need to remove double quotes ("") from version string
  const VERSION = shell.exec('npm pkg get version').trim().replace(/"/g, '');
  const { releaseType } = await conventionalRecommendedBump({ preset: 'angular' })
  return semver.inc(VERSION, releaseType);
}

const isDryRun = process.argv.some((a) => a.includes('dryRun=true'));
const isPreRelease = process.argv.some((a) => a.includes('canary=true'));
const dryRunArg = isDryRun ? '--dry-run' : ''

const packagesToPublish = [
  'packages/elements',
  'packages/elements-angular',
  'packages/elements-react',
  'packages/elements-vue',
];

(async () => {
  const currentBranch = shell.exec('git branch --show-current').trim();
  if (currentBranch !== 'master' && !isDryRun) {
    shell.echo('Sorry, release is only on branch "master" allowed!');
    shell.exit(1);
  }

  // check if user is logged in
  if (shell.exec('npm whoami').code !== 0) shell.exit(1);

  if (isPreRelease) {
    shell.exec(`nx release version prerelease ${dryRunArg} --git-commit=false`);
  } else {
    const version = await getNextVersion();
    shell.exec(`nx release ${version} ${dryRunArg} --skip-publish`);
  }

  if (shell.exec(`git push ${dryRunArg} --atomic --follow-tags`).code !== 0) shell.exit(1);

  const npmTag = isPreRelease ? 'canary' : 'latest';
  for (const npmPackage of packagesToPublish) {
    const { code } = shell.exec(`npm publish -w ${npmPackage} --tag ${npmTag} ${dryRunArg}`);
    if (code !== 0) shell.exit(1)
  }
})();
