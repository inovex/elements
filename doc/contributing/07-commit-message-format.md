# Commit Message Format

> We use this format to make it easy to automatically generate the changelog for all packages.

We follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/) message pattern that leads to human and machine readable commit messages. They are easy to follow when looking through the project history. Thus, please ensure that you follow the rules for commits as well as merge requests:

`<type>([<package>]<scope>): <subject>`

> Don't worry, to make it easy for all of us, we added a pre-commit script hook that ensures we only use allowed syntax. So you can only commit a message that follows the above format.

## Type

Must be one of the following:

|Type|Description|Affects&nbsp;Version|
|---|---|---|
|**feat**|Introduces a new feature to the codebase.|MINOR|
|**fix**|Patches a bug in your codebase.|PATCH|
|**docs**|Documentation only changes.|(no change)|
|**style**|Do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc), not CSS styles.|(no change)|
|**refactor**|Neither fixes a bug nor adds a feature.|(no change)|
|**perf**|A code change that improves performance.|(no change)|
|**test**|Adding missing tests.|(no change)|
|**chore**|Changes to the build process or auxiliary tools and libraries such as documentation generation.|(no change)|

## Package (optional)

> This is optional but it's recommended to set the affected package when the change is assignable to exactly one package.

In our mono repo we need to distinct which package is affected by the change. Hence, in addition to the scope we added the name of the package in front of the scope.

You're able to use **one** or **none** of the following packages:

|Package Name|Affected Package|
|---|---|
|elements|[@inovex.de/elements](packages/elements)|
|elements-angular|[@inovex.de/elements-angular](packages/elements-angular)|
|elements-react|[@inovex.de/elements-react](packages/elements-react)|
|storybook|[@inovex.de/elements-storybook](packages/storybook)|

## Scope

The scope can be anything specifying the scope of the change inside a package. Use an asterisk (`*`) to designate a global scope.

Here are some of the allowed scopes:

- `elements|ino-button`
- `elements|ino-card`
- `elements|...`

- `elements-angular|ino-button`
- `elements-angular|ino-card`
- `elements-angular|...`

- `elements-react|ino-button`
- `elements-react|ino-card`
- `elements-react|...`

- `storybook|ino-button`
- `storybook|ino-card`
- `*`

> You can always check which package/scope combinations are allowed by checking the [commit-scope-enum.js](https://github.com/inovex/elements/blob/master/commit-scope-enum.js) file.

## Subject

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes".
- Do not capitalize first letter.
- Do not place a period `.` at the end.
- Describe what the commit does, not what issue it relates to or fixes.
- **Be brief, yet descriptive** - we should have a good understanding of what the commit does by reading the subject.

## Breaking Changes

> A breaking change always affects the **MAJOR** version number in the next release. This should rarely be used. You should always talk to the team members about such a change. If you only deprecate things, it's no breaking change.

To document breaking changes, use a multiline commit message, which will be taken as the main commit message for the whole MR when squashed.

Here is an example:

```
type([package]scope): brief description

BREAKING CHANGES: <description of breaking changes without a new line at the beginning>
```
