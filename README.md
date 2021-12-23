![inovex elements Logo](doc/assets/elements.svg 'inovex elements Logo')

# inovex elements

> The last interoperable UI library for any framework.

This repository provides lovingly crafted components based on native Web Components for Angular, React, Vue or any JavaScript project.

## Installation

See [instructions](https://github.com/inovex/elements/tree/master/packages/storybook/src/stories/docs/framework-integration) how to integrate it into your project.

## Why @inovex.de/elements?

As we all know, new frontends often go along with redundant tasks like developing inputs, selects or more complex elements like tooltips. Since the rise of web components has finally happened with native browser support in all major browsers, we take this opportunity to make our all lives easier and provide a set of ready-to-use UI components.

This project provides a set of small and generic components to be used in any project. The fundamental elements having a high interoperability with major frameworks like Angular, React, Vue or any good old plain website without any complex framework.

The advantages are faster development cycles and fewer maintaining resources. The native elements are designed by inovex to match our brand, increase the consistency and decrease the redundancy of our projects. We decided to make all the elements public available to all developers to allow others to use and contribute to our work.

## Documentation

You can find all the information on using the elements in the [Storybook Docs](https://elements.inovex.de/dist/latest/storybook).

## Repository Structure

> The following information is only relevant if you want to contribute to the elements. If you just want
> to use the UI elements for your own project, please refer to the Documentation section above.

This is a mono repository based on Lerna. Lerna is a tool for managing JavaScript projects with multiple packages. Visit the [Lerna GitHub repository website](https://github.com/lerna/lerna) to learn more about Lerna.

Each package provides a separate README and is distributed as self contained package through npm. These packages are a thin layer on top of our Web Components to achieve a better framework integration. Please refer to the subfolder of the corresponding package to get more information about the package itself:

| <div style="width:220px">**Package**</div>                        | <div style="width:200px">**Description**</div> | **Primary Usage Intention**                                  |
| ----------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| [@inovex.de/elements](packages/elements)                          | Native Web Components                          | Websites, WebApps and Microfrontends without a framework.    |
| [@inovex.de/elements-angular](packages/elements-angular/elements) | Angular integration layer                      | WebApps based on [Angular](https://github.com/angular).      |
| [@inovex.de/elements-react](packages/elements-react)              | React integration layer                        | WebApps based on [React](https://github.com/facebook/react). |
| [@inovex.de/elements-storybook](packages/storybook)               | Storybook documentation                        | API reference and guide for developers.                      |
| [@inovex.de/elements-landingpage](packages/landingpage)           | Landingpage                                    | The elements.inovex.de landingapge.                          |

## History and Background

> The following information is only relevant if you want to contribute to the elements. If you just want
> to use the UI elements for your own project, please refer to the Documentation section above.

We started this project back in the days of 2018 as a proof of concept. Until then it was fine to use a framework of your choice. The right one to get the things done. Whether it's React, Angular, Vue or Svelte. They're are all good - that's fact. It depends a bit on the details and the developers flavour but it general you can chose any of the popular frameworks and you're good to go. But there's one caveat: your choice ends up in locking the project into that framework with its vendor specific technology stack. If you're maintaining several projects you might decouple the UI components into a separate project to share them with each project. That's good but leads to another problem: Each time you migrate the framework version of your components, you need to migrate your consumer project (the project with the business logic) and vice versa. That's because using the same framework in different versions at runtime doesn't work properly. It might work, but it's no fun. And if you maintain several projects the problem multiplies.

One of the biggest challenge is if you can't migrate further. That happens when the development of a framework will come to an end. Think back in the days when Angular was released and replaced Angular.js. Your last chance was a total rewrite of all the things or you got stuck in the old world.

We experienced the same and as the buzzwords _Design System_ and _Component Libraries_ came up, we started the elements as a side project only containing the UI components decoupled from the business logic and also decoupled from a concrete end products framework. We evaluated which library and tools would be the best choice for helping us writing standards based Web Components. We tried a lot and looked into the available libraries Polymer, SkateJS, SlimJS, Switzerland and Stencil. We opposed the features and decided to use Stencil. The Web Component compiler created by the Ionic Team. Stencil is used as the core for the Ionic Framework components and used in many projects. After two years working with Stencil we're very experienced and happy with Stencil as our foundation for the elements UI components. Stencil allows us to create Web Components that work without a framework, Angular, React and Vue and any other framework knowing how to handle events and attributes of HTML elements.

## Contributing

> The following information is only relevant if you want to contribute to the elements. If you just want
> to use the UI elements for your own project, please refer to the Documentation section above.

The purpose of this repository is to continue the development, making the elements easier to use, reducing the cpu footprint, creating new components and API features as well as fixing bugs. The development itself is fully managed within the space of this Github repo and Artifactory.

To learn more about how you can contribute please refer to our [Contributing Section](https://github.com/inovex/elements/blob/master/CONTRIBUTING.md).

### Prerequisites

- [Node.js](https://nodejs.org) must be installed. If not, visit the [official Node.js installation instructions](https://nodejs.org/en/download/package-manager/) to learn how to install Node.js.
- [Yarn](https://yarnpkg.com) package manager must be installed. If not, visit the
  [official Yarn installation instructions](https://yarnpkg.com/getting-started/install) to learn how
  to install Yarn.

### Scripts
These are a set of important scripts to get started with this mono repository

| <div style="width:150px">**Command**</div> | **Description**                                                                                                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn start`                               | Launches [@inovex.de/elements](packages/elements) components in development mode locally, opens Storybook.                                                                                                           |
| `yarn test`                                | Runs unit and e2e tests in all packages.                                                                                                                                                                             |
| `yarn build`                               | Builds , [@inovex.de/elements-angular](packages/elements-angular), [@inovex.de/elements-react](packages/elements-react), [storybook](packages/storybook), [landingpage](packages/landingpage).                       |
| `yarn publish:yalc`                        | Builds [@inovex.de/elements](packages/elements), react and/or angular bindings and publishes packages locally to the [Yalc](https://github.com/whitecolor/yalc) store. Used for local integration to other projects. |
| `yarn lint`                                | Runs TypeScript linting in all packages.                                                                                                                                                                             |
| `yarn clean`                               | Removes `node_modules` and `dist` from root and all packages.                                                                                                                                                        |
| `yarn version`                             | Prompts you for a new version, sets the new version, generates a changelog for all relevant packages and `git add`s all the changes to the current checked out branch.                                               |


### Github Workflows
There are different Github workflows (`.github/workflows`) for quality control, releases and deployment:

| **Workflow**             | **Trigger**                  | **Description**                                                                         |
| ------------------------ | ---------------------------- | --------------------------------------------------------------------------------------- |
|                          |                              |                                                                                         |
| `deploy-landingpage.yml` | Manual                       | Deploys the landingpage package of the target branch to github pages.                   |
| `deploy-version.yml`     | Tags                         | Deploys a new version to elements.inovex.de/version/<VERSION>                           |
| `deploy-unicorn.yml`     | Manual                       | Deploys the package storybook of any branch to elements.inovex.de/unicorn/<BRANCH_NAME> |
| `destroy-unicorn.yml`    | Manual / PR Closed           | Destroys a unicorn for the given branch.                                                |
| `release-canary.yml`     | After Build & Test on Master | Releases a canary version of the current master.                                        |
| `security.yml`           | After PR Review              | Performs security checks                                                                |

For more information about triggering manual workflows, see https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/.

### Github Pages Deployment
The landingpage, versions and unicorns a hosted on github pages using the `gh-pages` branch. The [hosted-version.json](https://github.com/inovex/elements/blob/gh-pages/hosted-versions.json) is a connection between landingpage and versions. It is auto generated during deployment of landingpage and new versions. In order to remove a version manually, remove its source files in `/version/<VERSION-TO-REMOVE>` and trigger landingpage workflow manually. The hosted versions will then be recreated.

**Storage limitations:** At the time of writing, gh pages must not exceed 1 gb. For this reason, we must ensure that we do not have more than ~70 storybooks (unicorns and versions) hosted. A couple of actions to avoid exceeding this limit are:
* Always destroy unicorns after closing a PR.
* Manually delete older versions on gh-pages branch that are not used / supported anymore.

**Git improvements:** Due to the size of `gh-pages`, you can execute `git config --add remote.origin.fetch '^refs/heads/gh-pages'` (since git 2.29) to ignore the branch from being fetched locally.


## License

MIT
