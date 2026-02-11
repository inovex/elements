# Project Context

This file contains essential information about the project structure, configuration, and workflows to assist AI agents and developers in navigating the codebase.

## 🏢 Project Overview
**inovex elements** is a monorepo containing a collection of enterprise-grade Web Components built with **StencilJS**. Ideally libraries are framework-agnostic but this repository also includes wrapper libraries for **React**, **Angular**, and **Vue** to ensure seamless integration.

- **Monorepo Tool:** [Turborepo](https://turbo.build)
- **Package Manager:** [pnpm](https://pnpm.io) (utilizing workspaces)
- **Core Technology:** [StencilJS](https://stenciljs.com)

## 📂 Repository Structure

The project code is located in the `packages/` directory:

| Package | NPM Package Name | Description | Framework / Tech |
| :--- | :--- | :--- | :--- |
| **`elements`** | `@inovex.de/elements` | **Core** library containing the Stencil web components. | StencilJS, TypeScript, SCSS |
| **`elements-angular`** | `@inovex.de/elements-angular` | Angular wrappers for `elements`. | Angular |
| **`elements-react`** | `@inovex.de/elements-react` | React wrappers for `elements`. | React |
| **`elements-vue`** | `@inovex.de/elements-vue` | Vue wrappers for `elements`. | Vue 3 |
| **`storybook`** | `@inovex.de/elements-storybook` | Component documentation and playground. | Storybook |
| **`landingpage`** | `@inovex.de/landingpage` | The public website for inovex elements. | Next.js |
| **`ui-patterns`** | `@inovex.de/ui-patterns` | Higher-level UI patterns and compositions. | React (mostly) |
| **`*-example`** | `elements-*-example` | Example applications demonstrating usage. | Angular, React, Vue |

## 🚀 Key Commands

Run these commands from the root directory using `pnpm`.

### Development
- **`pnpm start:storybook`**: Starts the Storybook development server (documentation & component playground).
- **`pnpm start:landingpage`**: Starts the landing page development server.
- **`pnpm start:ui-patterns-playground`**: Starts the UI patterns playground.

### Build & Quality
- **`pnpm build`**: Builds all projects in the monorepo (using Turborepo).
- **`pnpm test`**: Runs unit and E2E tests for all projects (configured for CI).
- **`pnpm lint`**: Lints affected projects.
- **`pnpm lint:fix`**: Lints and auto-fixes issues.
- **`pnpm format`**: Checks code formatting (Prettier).
- **`pnpm format:fix`**: Fixes code formatting.
- **`pnpm qc`**: **Quality Control** - runs `lint:ci`, `format`, `build`, and `test` sequentially. Run this before pushing!

### Maintenance
- **`pnpm clean`**: Cleans all build artifacts (`node_modules`, `dist`, `.turbo`, etc.). 

## 🛠️ Technology Stack & Configuration

- **TypeScript**: Used throughout the repository.
- **SCSS**: Used for styling components in `packages/elements`.
- **Playwright**: Used for End-to-End (E2E) testing.
- **Jest**: Used for unit testing (Stencil default).
- **Prettier & ESLint**: Enforced code style and quality.

## 🧭 Navigation Tips for AI Agents

1.  **Component Logic**: Look in `packages/elements/src/components/<component-name>/`.
    -   `*.tsx`: Component logic (Stencil).
    -   `*.scss`: Styles.
    -   `readme.md`: Generated documentation (do not edit manually unless specified).
2.  **Wrappers**: If working on framework-specific issues, check `packages/elements-{react,angular,vue}`.
3.  **Docs**: Stored in `packages/storybook` or `packages/elements/*/readme.md`.
4.  **Workflows**: CI/CD pipelines are defined in `.github/workflows/`.
