# Release Workflow in Gitlab instead of Github

- Status: accepted
- Deciders: Alexander Gerlach, Sven Lindauer, Jan-Niklas Voß
- Date: 08.09.2020

Technical Story: https://jira.inovex.de/browse/ELEMENTS-673

## Context

To open source the elements we moved the entire repository from gitlab to github. However, our pipeline was still based on the Gitlab pipeline, so we had to rework it. In the process we also wanted to migrate the release process from Gitlab to Github.

At the time of writing, the Github pipelines did not seem to be mature enough and we had some questions to which we could not find answers.

- How can we protect our pipeline file (`github-ci.yml`) from being edited by users with limited access rights?
- How can we prevent the pipeline from running on non-master branches? (not just by using the `if` in the workflow file, which might be editable)
- How can we prevent users with limited access rights from using our secrets maliciously? (e.g. curling malicious files and pushing them to our remote servers)
- How can we prevent users with limited access rights from pushing their own tags?

## Decision

Since we did not find concrete answers to the questions above, we decided to stick to our previous procedure and use the gitlab pipeline, which allows us to control access rights.

## Consequences

The decision has several consequences:

- We have more control over who can build releases
- We need to maintain two repositories (using mirroring, so there is not much effort)
- The developer must start the release process locally
- The release process is not accessible to non-employees of inovex
- The fingerprints of the published artifacts differ between Github and the NPM registry
