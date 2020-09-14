# Pull Requests

We have very precise rules to ensure an understandable and compact history:
- Before creating a feature branch, make sure that a respective Github issue exists. 
- Provide a reference to it in the description of the Pull Request to make the life of reviewers easier. 
- Please give the branch a speaking name that fits the template `elements-<issue-id>-<what-is-the-feature>` like `elements-12-create-button-element`.

When submitting a Pull Request, please:

- Make sure the source branch is deleted afterwards (should be default)
- The Pull Request is squashed (should be default)
- Provide the title of the pull request in a commit message manner (see below). This is very important because the "squash commit" that occurs in the history usually has the pull requests title. The exceptions are multi line commits. If any of your commits have a multi line description, the first multi line commit message will be chosen as the title for the "squash commit". Further information on squashing can be found in the [GitHub documentation](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squash-and-merge-your-pull-request-commits).
