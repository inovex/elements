# Use and Contribute

Hello. nice to meet you 👋.

This guide will help you to get started on how you can use and contribute to inovex elements. We're so excited that you're interested in contributing to this project and make it even better 💪.

Before you start, the next few lines will guide you through a set of easy step-by-step instructions to prepare your project integrating the latest ✨ and hottest 🌶️ features.

## The way we suggest

First of all, you should contact us in `#project-inovex-elements` via Slack that you want to contribute. Then we or you will create a branch in our elements repo for your project. This is your development branch where all the changes live. You can see this branch as your `development` branch when thinking in Gitflow. You can commit anything there. This is your space.

Imagine the following situation: If you've worked out and tested enough and you're sure that your changes are good to share with others then it's propably time to create a MR on GitLab. The elements team will review the code. If it's all fine and the code looks good for reuse, we'll merge it into our `master` and the changes will be released with the next version. You've contributed.

If you're ready, head up to the next lines and see how you **prepare your project and the projects elements branch**

## Prepare your elements project branch

Your branch name will be `project-<your project name here>`.

- Simply merge or rebase the master on the head of this branch
- Run `yarn install`
- Run `yarn build`
- Commit the `dist/` folder (you need to remove it from `.gitignore`

> Keep in mind: Everytime you make some changes to the codebase: build, commit and push it. So it's available for everyone and reachable from within your running pipeline jobs.

## Prepare your project

> A note for @inovex/elements maintainers:
>
> - Create project specific branch
> - Add and hand over deploy key for each project (GitLab -> Settings -> Repository -> Deploy Keys)

A few simple steps.

### 1. package.json

In `package.json` replace this (or similar):

```json
"dependencies": {
    "@inovex/elements": "^0.4.1",
    // ...
}
```

with

```json
"dependencies": {
    "@inovex/elements": "ssh://git@gitlab.inovex.de:2424/inovex-elements/core.git#project-<your-project-name-here>",
    // ...
}
```

and add this to your `scripts` section, to always upgrade to latest package when installing:

```json
"scripts": {
  "postinstall": "yarn upgrade @inovex/elements"
}
```

### 2. Add SSH Key

You get a private key from us which you should add in GitLab under Settings -> CI/CD -> Environment variables.

Name it something like `SSH_PRIVATE_KEY_INOVEX_ELEMENTS` and add this script to your `gitlab-ci.yml` file:

```yml
.prepare_ssh: &prepare_ssh |
  mkdir -p ~/.ssh
  echo "$SSH_PRIVATE_KEY_INOVEX_ELEMENTS" >> ~/.ssh/id_rsa && chmod 0600 ~/.ssh/id_rsa
  echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
```

Then you can simply configure your job this way:

```yml
build:
  stage: build
  tags:
    - shared
  script:
    - *prepare_ssh
    - yarn install
    - yarn build
```

### 3. Proceed with the getting started guide

As you've integrated the project specific branch and configured your pipeline, you can now follow the instructions on how to integrate the elements into your project by reading the getting started docs.
