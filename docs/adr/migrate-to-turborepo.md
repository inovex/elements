# Migrate from NX to Turborepo

- **Status**: accepted
- **Deciders**: Jan-Niklas Voß, Patrick Hillert
- **Date**: 2026-02-10

## Context

Over time, we noticed that the complexity of our monorepo grew significantly. We previously introduced `NX.js` to automate parts of our monorepo. While it provided automation, it also introduced a layer of "magic" under the hood that often led to confusion within the team.

Specific pain points included:

- **Centralized Complexity**: NX often centralizes configuration, which can be opaque.
- **Confusion**: The abstraction layer made it difficult for team members to understand build pipelines and script executions, especially with high team fluctuation.
- **Onboarding**: New contributors found it hard to grasp the underlying mechanisms quickly.

Our goal is to reduce complexity and ensure the project is "as simple as possible" to facilitate quick onboarding and contributions.

## Decision

We will replace `NX` with `Turborepo` as our build system and monorepo tool.

The reasons for this decision are:

1.  **Simplicity**: Turborepo operates with a single configuration file (`turbo.json`) and relies on standard `package.json` scripts within sub-packages, rather than centralizing everything at the root.
2.  **Explicit Configuration**: define pipelines explicitly, making it easier to understand how tasks depend on each other.
3.  **Developer Experience**: It provides excellent caching of previous runs (local and remote), improving build times and developer feedback loops.
4.  **Decentralization**: Scripts and dependencies are located in the sub-packages themselves, adhering to standard Node.js project structures which are more familiar to most developers.

## Consequences

**Positive:**

- **Reduced Complexity**: The build system becomes more transparent and less "magical".
- **Easier Onboarding**: Developers familiar with standard `npm`/`package.json` scripts will find the structure intuitive.
- **Improved Performance**: Automatic caching of tasks speeds up development.
- **Maintainability**: Individual packages control their own scripts, reducing the risk of breaking the entire repo with a root config change.

**Negative:**

- **Migration Overhead**: We need to remove NX configuration and setup `turbo.json`.
- **Learning Curve**: New tool syntax and concepts (pipelines, caching behavior) need to be learned, though `turbo` is generally considered lightweight.
- **Feature Loss**: We may lose some specific advanced features of NX, but we have determined that simplicity is the priority for this project.
