# Issue Tracking

We maintain our backlog in our Project's [GitHub issues](https://github.com/inovex/elements/issues) where we manage all features and bugs.

New features, refactorings etc. should have the `feature` label. To track bug fixes, use the `bug` label.

During development, the following process should be loosely followed:

- Finding Ideas or Bugs
  - If you have an idea how to improve the elements or discover a bug: Create an issue (assigned to no one) and describe what needs to be done.
    - For a bug it is useful to describe how someone else can reproduce the problem. If possible, provide a Stackblitz.
    - For an improvement it is always good to describe your thoughts in a user story style. For example: _As a user I want to change the background color of the button so I am able to match the colors of my design._
  - In the weekly coordination meeting, bring up the issue and discuss the priority of the task.
- Starting Development
  - Assign the issue to yourself and change the status to **In Progress** in the project board. Create a new feature branch and follow the instructions in the [Pull Request Section](./?path=/story/docs-contributing--pull-requests) section (see side panel).
- Reviewing Code
  - When the pull request is accepted and merged into master, set the corresponding issue to `Done`.
