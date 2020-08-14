# Issue Tracking

We maintain our backlog in our Project's [GitHub isses](https://github.com/inovex/elements/issues). There we manage all stories, tasks and bugs.

New features, refactorings etc. should have the `task` issue type. To track bug fixes, use the `bug` issue type.

During development, the following process should be loosely followed:

- Finding Ideas or Bugs
  - If you have an idea how to improve the elements or discover a bug: Create an issue (assigned to no one) and describe what needs to be done.
    - For a bug it's useful to describe how someone else can reproduce the problem If possible, provide a Stackblitz.
    - For an improvement it's always good to describe your thoughts in a user story style. For example: *As a user I want to change the background color of the button so that I am able to match the colors with my design.*
  - In the weekly coordination meeting, bring up the issue and discuss the priority of the task.
- Starting Development
  - Assign the issue to yourself and change the status to **In Progress**. Create a new feature branch and follow the instructions in the **Merge Requests** section (see side panel).
- Reviewing Code
  - If you are reviewing a merge request, assign the corresponding Jira ticket to yourself.
  - If you review a merge request as a reviewer, assign the corresponding Jira ticket and the merge request to yourself.
  - When the merge request is accepted and merged into master, set the corresponding issue to `Done`.
