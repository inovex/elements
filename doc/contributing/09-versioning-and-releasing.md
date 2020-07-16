# Versioning and Releasing

We are following the [Semantic Versioning](https://semver.org/).

To build a new release, the following steps have to be performed:

- Develop new features or fix bugs which justify a new release. This should include at least one thing which benefits the user and not only contain refactorings.
- Check out the most recent **master** branch.
- To build the packages `@inovex/elements`, `@inovex/elements-react`, `@inovex/elements-angular` and `storybook` run from within the root folder of this git repo the following command: `yarn lerna:version`. This command does the following things:
    1. Build and test the current setup
    2. Determine the new version based on the [conventional-commit guidelines](https://www.conventionalcommits.org/en/v1.0.0/)
    3. Bump the version
    4. Generate changelogs 
    5. Commit the changed files
    6. Tag the new commit with the new version number
- Always check the contents of `Changelog.md` and version number.
- If all seems right, push the changes using `git push --follow-tags` to the remote origin.

The gitlab pipeline will build and release a new version in the private registry. Additionally, the built sources and documentation will be published to `https://elements.inovex.io/` in a folder named by the new version
