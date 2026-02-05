# Migrate from Yarn to pnpm

- **Status**: accepted
- **Deciders**: Jan-Niklas Voß, Patrick Hillert
- **Date**: 2026-02-10

## Context

During the initial setup of the project, `yarn` was chosen as the package manager because it was the only one natively supporting workspaces at the time.

While `yarn` worked, we observed the following issues:

- **High installation times**: Dependencies were hoisted, leading to long install times on local machines.
- **Complexity**: In combination with our workspace setup, the developer experience suffered from sluggish performance.

We aim to make the "elements" project as simple as possible so anyone can contribute quickly without extensive onboarding time.

## Decision

We will migrate our package manager from `yarn` to `pnpm`.

This change is motivated by:

1.  **Performance and Efficiency**: `pnpm` offers significantly faster installation times and better disk space usage via its content-addressable store.
2.  **Workspace Support**: `pnpm` has first-class support for workspaces, which aligns with our monorepo structure.
3.  **Strictness**: `pnpm` uses a non-flat node_modules structure, which prevents access to phantom dependencies (dependencies not explicitly listed in `package.json`), leading to a more robust and predictable codebase.

## Consequences

**Positive:**

- Faster dependency installation for all developers and CI/CD pipelines.
- Reduced disk space usage.
- Stricter dependency management prevents "phantom dependency" bugs.
- Better alignment with the goal of simplifying the project for new contributors.

**Negative:**

- **Learning Curve**: Team members familiar with `yarn` will need to adapt to `pnpm` commands (though they are largely similar).
- **Migration Overhead**: The initial migration requires generating a new lockfile and potentially fixing imports that relied on hoisted dependencies (phantom dependencies).
