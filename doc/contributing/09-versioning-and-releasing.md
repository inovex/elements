# Versioning and Releasing

We are following the [Semantic Versioning](https://semver.org/).

To build a new release, the following steps have to be performed:

- Develop new features or fix bugs which justify a new release. This should include at least one thing which benefits the user and not only contain refactorings.
- Check out the most recent **master** branch.
- To build the packages `@inovex/elements`, `@inovex/elements-react`, `@inovex/elements-angular` and `storybook` run from within the root folder of this git repo one of the following commands. This command will also update the `Changelog.md` based on on the commit messages since the last release. This command also commits all changes and sets a git tag:
  -  `npx lerna version` (recommended)
     -  To use the locally installed lerna package from your `node_modules` folder
  -  `lerna version`
     -  If you have installed lerna globally. This builds all projects, creates the changelog and a new version message.
- Always check the contents of `Changelog.md` and version number.
- If all seems right, push the changes using `git push --follow-tags` to the remote origin.

The gitlab pipeline will build and release a new version in the private registry. Additionally, the built sources and documentation will be published to `https://elements.inovex.de/` in a folder named by the new version
